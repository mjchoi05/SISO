/* ===========================================================================
 * [기능 분류: 3D 책 렌더링 및 물리 시뮬레이션 엔진 (Book3D.js)]
 * 역할: Three.js를 활용하여 책의 기하학적 형태(Geometry)와 재질(Material)을
 * 렌더링하고, 사용자의 드래그/스크롤에 따라 종이가 휘어지는 곡률(Curl)과
 * 그림자를 실시간으로 연산합니다.
 * 에셋 중앙화: 텍스처 등은 부모 컴포넌트(Main.js)에서 pageMeta로 주입받으므로,
 * 본 파일 내에는 404 에러를 유발할 하드코딩된 외부 에셋 경로가 없습니다.
 * =========================================================================== */

// === [React.js & Three.js 스택 영역] 외부 모듈 로드 시작 ===
import {
  a as y,
  d as Xo,
  R as An,
  P as Qo,
  T as Jo,
  S as ta,
  M as di,
  D as ea,
  b as na,
  c as ra,
  e as tr,
  V as Nt,
  B as $e,
  U as ia,
  F as oa,
  f as aa,
  W as sa,
  i as la,
  k as ua,
  G as ca,
  l as fa,
  m as da,
  A as ha,
  n as er,
  o as pa,
  j as g,
} from "./three.module-b6rmv7il.js";

import { Tt, De, Xh } from "./Main.js";
import { Qh, Jh, Q, ui } from "./MotionInteraction.js";
// === [React.js & Three.js 스택 영역] 외부 모듈 로드 끝 ===

// -----------------------------------------------------------------------
// [수학 헬퍼 함수들]
// p5.js에도 map(), constrain() 같은 수학 함수가 있듯이,
// 여기서도 책 애니메이션에 필요한 수학 도구들을 먼저 정의합니다.
// -----------------------------------------------------------------------

// 원의 둘레 계산에 쓰이는 2π 상수입니다.
// p5.js의 TWO_PI와 완전히 같습니다.
export const tp = Math.PI * 2;

// [값 범위 변환 함수]
// p5.js의 map(value, start1, stop1, start2, stop2)과 완전히 같습니다.
// 예: z(0.5, 0, 1, 0, 360) → 180 (0~1 범위의 0.5를 0~360 범위로 변환)
export function z(t, e, n, r, i) {
  return r + ((t - e) * (i - r)) / (n - e);
}

/* ---------------------------------------------------------------------------
 * [스프링 물리 엔진 클래스 (Ee)]
 *
 * p5.js로 비유하자면:
 * lerp()를 매 프레임 반복 호출하면 목표값에 부드럽게 다가가죠?
 * 이 클래스는 그것을 자동으로 해주는 도구입니다.
 *
 * stiffness(뻣뻣함)가 클수록 목표에 더 빠르게 도달합니다.
 * --------------------------------------------------------------------------- */
export class Ee {
  constructor(e, n, r) {
    this.value = e; // 현재 값. p5.js의 x = 0 과 같습니다.
    this.target = n; // 목표 값. p5.js의 targetX 와 같습니다.
    this.stiffness = r != null && r.stiffness ? r.stiffness * 10 : 10;
  }

  update(e) {
    this.value = Jh(this.value, this.target, this.stiffness, e);
    if (Math.abs(this.value - this.target) < 1e-4) this.value = this.target;
  }

  setPosition(e) {
    this.value = e;
  }
  setTarget(e) {
    this.target = e;
  }

  skipToTarget(e) {
    this.value = e;
    this.target = e;
  }
}

/* ---------------------------------------------------------------------------
 * [3D 책 페이지 클래스 (ep)]
 *
 * [양면 구현 방식 - 단일 메시 + 텍스처 스왑]
 *
 * 두 개의 SkinnedMesh가 하나의 skeleton을 공유하는 구조는,
 * bind() 호출 시 calculateInverses()가 잘못된 컨텍스트에서 재실행되어
 * 스키닝 변환이 반전되거나 깊이 정렬이 어긋나는 문제가 구조적으로 발생합니다.
 *
 * 대신 원본과 동일하게 DoubleSide 단일 메시를 사용하되,
 * 페이지 회전이 90°(clampedVal = 0.5)를 넘는 순간 텍스처를 교체합니다.
 * 정확히 90° 시점에서는 페이지가 edge-on(완전한 옆면)이어서
 * 텍스처 전환이 육안으로 보이지 않습니다.
 *
 * [수정 사항]
 * - width: 3.3 유지 (카메라/링 기준축 보존)
 * - height: 4.08 (180:223 비율, 3.3 × 223/180 ≈ 4.08)
 * --------------------------------------------------------------------------- */
export class ep {
  constructor(frontImg, backImg, n) {
    // frontImg = 앞면 이미지 경로
    // backImg  = 뒷면 이미지 경로
    // n        = 페이지 설정값 (너비, 높이, 인덱스 등)

    this.frontImage = frontImg;
    this.backImage = backImg;
    this.index = n.index; // 이 페이지가 몇 번째 페이지인지 (0부터 시작)
    this.width = n.width; // 페이지 가로 크기
    this.height = n.height; // 페이지 세로 크기
    this.widthSegments = n.widthSegments || 20; // 가로 분할 수 (기본값: 20조각)
    this.heightSegments = n.heightSegments || 8; // 세로 분할 수 (기본값: 8조각)
    this.zOffset = n.zOffset || 0.006;
    // 페이지들이 겹쳐있을 때 서로 깜빡이는 현상(Z-fighting)을 막기 위해
    // 각 페이지를 Z축으로 아주 조금씩 앞뒤로 띄워놓습니다.
    this.totalPages = n.totalPages; // 전체 페이지 수 (Z 위치 계산에 사용)
    this.curlBiasDisplacement = 0.4; // 페이지 상하단 말림 비대칭 정도

    // -----------------------------------------------------------------------
    // 페이지의 기하학적 형태(Geometry) 생성
    // -----------------------------------------------------------------------
    this.geometry = new Qo(
      this.width,
      this.height,
      this.widthSegments, // 가로 20등분
      this.heightSegments, // 세로 8등분
    );

    // -----------------------------------------------------------------------
    // 앞면 텍스처 로드
    // -----------------------------------------------------------------------
    this.frontPageTexture = new Jo().load(this.frontImage);
    this.frontPageTexture.colorSpace = ta;
    this.frontPageTexture.anisotropy = 4;

    // -----------------------------------------------------------------------
    // 뒷면 텍스처 로드
    // repeat.x = -1: DoubleSide로 뒷면을 볼 때 UV가 좌우 반전되어 보이는 것을
    // 미리 상쇄합니다. (뒷면을 넘겨서 볼 때 이미지가 거울상이 되는 것 방지)
    // -----------------------------------------------------------------------
    this.backPageTexture = new Jo().load(this.backImage);
    this.backPageTexture.colorSpace = ta;
    this.backPageTexture.anisotropy = 4;
    this.backPageTexture.wrapS = 1000; // THREE.RepeatWrapping
    this.backPageTexture.repeat.x = -1;

    // -----------------------------------------------------------------------
    // 단일 DoubleSide 머티리얼
    // 앞면 텍스처로 시작하고, update()에서 90° 통과 시 뒷면 텍스처로 교체합니다.
    // -----------------------------------------------------------------------
    this.material = new di({
      map: this.frontPageTexture,
      side: ea, // THREE.DoubleSide: 앞뒤 양면 모두 렌더링
      reflectivity: 0.1,
      flatShading: !1,
    });

    // -----------------------------------------------------------------------
    // 뼈대(Bone/Skeleton) 설정
    // -----------------------------------------------------------------------
    this.bones = [];
    this.configureBones(); // 뼈대 위치 설정
    this.skeleton = new ra(this.bones);

    // -----------------------------------------------------------------------
    // 단일 SkinnedMesh 생성 (원본과 동일한 구조)
    // bones[0]을 pageMesh의 자식으로 추가해야 bind() 시 바인딩 행렬이
    // pageMesh의 로컬 좌표계 기준으로 올바르게 계산됩니다.
    // -----------------------------------------------------------------------
    this.pageMesh = new na(this.geometry, this.material);
    this.pageMesh.castShadow = !0;
    this.pageMesh.receiveShadow = !0;
    this.pageMesh.add(this.bones[0]); // 루트 뼈대를 페이지에 붙입니다
    this.pageMesh.bind(this.skeleton); // 페이지와 뼈대를 연결합니다
    this.configureSkeleton(); // 각 정점이 어느 뼈대의 영향을 받는지 설정

    // -----------------------------------------------------------------------
    // pageGroup: np 클래스와의 인터페이스 유지 (p.pageGroup 참조)
    // manual.add(p.pageGroup)으로 씬에 추가되며,
    // pageGroup.position.z 로 깊이 정렬을 제어합니다.
    // -----------------------------------------------------------------------
    this.pageGroup = new ca();
    this.pageGroup.add(this.pageMesh);

    // -----------------------------------------------------------------------
    // 페이지 넘김 스프링 - 드래그를 놓아도 부드럽게 넘어가는 효과
    // stiffness: 0.4 = 적당히 탄성 있게
    // -----------------------------------------------------------------------
    this.pageTurnSpring = new Ee(0, 0, { stiffness: 0.4 });

    // -----------------------------------------------------------------------
    // 페이지 넘김 곡선 (turnCurve, curlCurve)
    // -----------------------------------------------------------------------
    this.turnCurve = new tr([
      new Nt(0, 0),
      new Nt(0.485, 0.37), // 중간 지점에서 최대로 휨
      new Nt(1, 0),
    ]);
    this.curlCurve = new tr([
      new Nt(0, 0.98), // 시작할 때 강하게 말림
      new Nt(0.45, 0), // 중간쯤에서 말림이 없어짐
      new Nt(1, 0),
    ]);
  }

  // -----------------------------------------------------------------------
  // 뼈대 위치 설정
  //
  // 종이 왼쪽 끝(책 등)에 루트 기둥을 세우고,
  // 오른쪽으로 20개의 팔을 차례로 연결합니다.
  // -----------------------------------------------------------------------
  configureBones() {
    const rootBone = new $e();
    rootBone.position.x = -this.width / 2;
    // 루트 뼈대를 책 등(왼쪽 끝) 위치에 놓습니다.
    this.bones.push(rootBone);

    // 상단 뼈대 열: 루트에서 오른쪽으로 20개 연결
    for (let i = 0; i <= this.widthSegments; i++) {
      const bone = new $e();
      if (i === 0) {
        bone.position.x = 0;
        bone.position.y = this.height / 2; // 상단 열이므로 위쪽에 위치
      } else {
        bone.position.x = this.width / this.widthSegments; // 균등한 간격으로 배치
      }
      this.bones.push(bone);
      this.bones[i].add(bone); // 이전 뼈대의 자식으로 연결 (체인 구조)
    }

    // 하단 뼈대 열: 상단과 대칭으로 20개 연결
    for (let i = 0; i <= this.widthSegments; i++) {
      const bone = new $e();
      if (i === 0) {
        bone.position.x = 0.04;
        bone.position.y = -this.height / 2; // 하단 열이므로 아래쪽에 위치
      } else {
        bone.position.x = this.width / this.widthSegments;
      }
      this.bones.push(bone);
      if (i === 0) this.bones[0].add(bone);
      else this.bones[this.widthSegments + 1 + i].add(bone);
    }
  }

  // -----------------------------------------------------------------------
  // 스킨 가중치 설정 - "각 격자 조각이 어느 뼈대의 영향을 받는가"
  // -----------------------------------------------------------------------
  configureSkeleton() {
    const pos = this.geometry.getAttribute("position");
    const indices = []; // 각 정점이 연결될 뼈대 번호 목록
    const weights = []; // 각 뼈대가 정점에 미치는 영향도(0~1) 목록

    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i); // 정점의 X 좌표
      const py = pos.getY(i); // 정점의 Y 좌표

      // X 좌표 → 뼈대 인덱스로 변환
      const boneIdx =
        Math.round(
          z(px, -this.width / 2, this.width / 2, 0, this.widthSegments),
        ) + 1;

      // Y 좌표 → 상단/하단 뼈대 가중치로 변환
      const weight = z(py, -this.height / 2, this.height / 2, 0, 1);

      indices.push(boneIdx, boneIdx + this.widthSegments + 1, 0, 0);
      weights.push(weight, 1 - weight, 0, 0);
      // weight + (1-weight) = 1이 되어 영향도 합계가 항상 100%입니다.
    }

    this.geometry.setAttribute(
      "skinIndex",
      new ia(new Uint16Array(indices), 4),
    );
    this.geometry.setAttribute(
      "skinWeight",
      new oa(new Float32Array(weights), 4),
    );
  }

  // -----------------------------------------------------------------------
  // 매 프레임 업데이트 - 뼈대를 회전시켜 종이 휘어짐 계산
  // -----------------------------------------------------------------------
  update(
    delta,
    turnRatio,
    direction,
    currentIndex,
    isDragging,
    curlBias,
    isHovered,
  ) {
    const offset = this.index - currentIndex;
    // offset: 현재 보이는 페이지 기준으로 이 페이지가 몇 장 뒤/앞에 있는지
    // 0 = 현재 페이지, 1 = 다음 페이지, -1 = 이전 페이지

    const isTarget =
      isDragging && (direction === "forward" ? offset === 0 : offset === -1);

    this.pageTurnSpring.setTarget(
      isTarget
        ? turnRatio // 드래그 중인 페이지: 드래그 비율을 그대로 따라감
        : offset >= 0
          ? 0 // 아직 안 넘긴 페이지: 완전히 닫힌 상태(0)
          : 1, // 이미 넘긴 페이지: 완전히 열린 상태(1)
    );

    this.pageTurnSpring.update(delta);

    const val = this.pageTurnSpring.value; // 현재 넘김 진행률 (0=닫힘, 1=열림)
    const clampedVal = Q(val, 0, 1);
    const turnPoint = this.turnCurve.getPoint(clampedVal).y;

    const curlStrength = Q(z(clampedVal * clampedVal, 0, 0.1, 1, 0), 0, 1);

    // -----------------------------------------------------------------------
    // [텍스처 스왑] 페이지가 90°(clampedVal = 0.5)를 넘는 순간 텍스처 교체
    //
    // 정확히 90°에서 페이지는 edge-on(완전한 옆면)이어서 전환이 보이지 않습니다.
    // material.map만 교체하면 셰이더 재컴파일 없이 텍스처 유니폼만 바뀝니다.
    // -----------------------------------------------------------------------
    const showBack = clampedVal > 0.5;
    if (showBack && this.material.map !== this.backPageTexture) {
      this.material.map = this.backPageTexture;
    } else if (!showBack && this.material.map !== this.frontPageTexture) {
      this.material.map = this.frontPageTexture;
    }

    // 각 뼈대의 회전 각도 계산
    this.skeleton.bones.forEach((bone, i) => {
      if (i === 0) {
        // 루트 뼈대: 페이지 전체를 책 등 기준으로 회전시킵니다.
        // val=0이면 회전 없음, val=1이면 180도 회전 (페이지 완전히 넘어감)
        bone.rotation.y = z(val, 0, 1, 0, 1) * -Math.PI;
      } else if (i < this.widthSegments + 1) {
        // 상단 뼈대 열: 종이 위쪽의 휘어짐을 계산합니다.
        const bias = z(
          curlBias,
          0,
          1,
          this.curlBiasDisplacement, // curlBias=0: 위쪽이 더 많이 말림
          -this.curlBiasDisplacement, // curlBias=1: 아래쪽이 더 많이 말림
        );
        const curl = this.curlCurve.getPoint(clampedVal).y * i * i * i * 0.0005;
        bone.rotation.y = turnPoint * (-curl + bias * curlStrength);
      } else {
        // 하단 뼈대 열: 종이 아래쪽의 휘어짐을 계산합니다.
        const m = i - (this.widthSegments + 1); // 하단 열에서의 인덱스
        const bias = z(
          curlBias,
          0,
          1,
          -this.curlBiasDisplacement,
          this.curlBiasDisplacement,
        );
        const curl = this.curlCurve.getPoint(clampedVal).y * m * m * m * 0.0005;
        bone.rotation.y = turnPoint * (-curl + bias * curlStrength);
      }
    });

    // 페이지의 앞뒤 깊이(Z 위치) 설정
    if (isTarget || offset === 0) {
      // 현재 넘기는 중인 페이지: 넘어가면서 뒤로 이동
      this.pageGroup.position.z = z(
        clampedVal,
        0,
        1,
        0,
        -this.zOffset * this.totalPages,
      );
    } else if (offset > 0) {
      // 아직 안 넘긴 페이지들: 인덱스 순서대로 조금씩 뒤에 배치
      this.pageGroup.position.z = offset * -this.zOffset;
    } else {
      // 이미 넘긴 페이지들: 최근에 넘긴 페이지(offset=-1)가 카메라에 가장 가깝게,
      // 오래전에 넘긴 페이지(offset=-N)가 카메라에서 가장 멀게 배치합니다.
      //
      // 기존 (totalPages + offset + 4) * -zOffset 는 순서가 역전되어
      // offset=-1(최근)이 가장 멀고, offset=-N(오래됨)이 가장 가까워지는 버그가 있습니다.
      // 올바른 공식: offset * zOffset
      //   offset=-1 → -zOffset   (카메라에 가장 가까움, 맨 위)
      //   offset=-2 → -2*zOffset (그 다음)
      //   offset=-N → -N*zOffset (오래될수록 더 뒤로)
      this.pageGroup.position.z = offset * this.zOffset;
    }
  }
}

/* ---------------------------------------------------------------------------
 * [3D 책 씬(Scene) 매니저 클래스 (np)]
 *
 * p5.js로 비유하자면:
 * setup()에서 createCanvas()를 하고
 * draw()에서 매 프레임 background() → 모든 물체 그리기를 하듯,
 *
 * 이 클래스는 Three.js의 "도화지(Scene)"와 "카메라"를 만들고
 * requestAnimationFrame으로 매 프레임 draw()를 반복 호출합니다.
 * --------------------------------------------------------------------------- */
export class np {
  constructor(canvas, pageMeta) {
    // canvas = <canvas> DOM 요소 (Three.js가 여기에 그립니다)
    // pageMeta = 페이지 이미지 경로 + 제목 배열 (Main.js에서 받아옴)

    this.canvas = canvas;

    this.scene = new aa();
    // Three.js의 "도화지"입니다. 모든 3D 물체가 이 안에 들어갑니다.

    this.renderer = new sa({ canvas, antialias: !0, alpha: !0 });
    // antialias: 계단 현상 제거 / alpha: 배경을 투명하게
    this.renderer.shadowMap.enabled = !0;
    this.renderer.shadowMap.type = la; // 부드러운 그림자 타입

    this.camera = new ua(20, window.innerWidth / window.innerHeight, 0.1, 1000);
    // 20 = 시야각(FOV)

    this.manual = new ca();
    // 책 전체를 담는 "그룹" 컨테이너입니다.
    this.scene.add(this.manual);

    // -----------------------------------------------------------------------
    // 양면 페이지 생성
    // [수정] width: 3.3 유지 (카메라·링 기준축 보존)
    //        height: 4.08 (180:223 비율, 3.3 × 223/180 ≈ 4.08)
    // pageMeta 배열을 2개씩 묶어 앞면/뒷면으로 ep 인스턴스 생성
    // -----------------------------------------------------------------------
    this.pages = [];
    for (let i = 0; i < pageMeta.length; i += 2) {
      const front = pageMeta[i];
      const back = pageMeta[i + 1] || pageMeta[i]; // 홀수 배열 방어 로직
      this.pages.push(
        new ep(front.texture, back.texture, {
          width: 3.3,
          height: 4.69,
          totalPages: Math.ceil(pageMeta.length / 2),
          index: Math.floor(i / 2),
        }),
      );
    }
    this.pages.forEach((p) => this.manual.add(p.pageGroup));
    // 각 페이지 그룹을 책 컨테이너에 추가합니다.

    this.rings = [];
    this.initRings(); // 책 바인딩 링 생성

    // 스프링 초기값 설정
    this.pageIndex = 0;
    this.pageIndexSpring = new Ee(0, 0, { stiffness: 0.4 });

    this.pageTurn = 0; // 현재 드래그 넘김 진행률 (0~1)
    this.turnDirection = "forward"; // 드래그 방향
    this.isDragging = !1; // 드래그 중 여부
    this.curlBias = 0.5; // 드래그 Y위치 (0=위, 1=아래)

    this.isOpen = !0;
    this.openSpring = new Ee(1, 1, { stiffness: 0.7 });
    // 값=0: 책이 완전히 열린 상태 / 값=1: 책이 닫힌 상태

    this.manualSpring = new Ee(0, 0, { stiffness: 1 });
    // 드래그할 때 책 전체가 살짝 기울어지는 효과용 스프링

    this.manualOrigin = new pa(0, 0, 0); // 책의 기본 위치 (원점)

    this.lastTime = performance.now();
    this.initLights(); // 조명 설정
  }

  // -----------------------------------------------------------------------
  // 책 바인딩 링 생성 (책 왼쪽의 링 장식)
  // [수정] 링 Y 범위: 5.8 → 3.88 (height 4.08에 맞게 비례 조정)
  //        원본: height 6, 링 범위 5.8 (위아래 여백 각 0.1)
  //        수정: height 4.08, 링 범위 3.88 (위아래 여백 각 0.1 유지)
  //        링 X 좌표: width=3.3 유지이므로 그대로
  // -----------------------------------------------------------------------
  initRings() {
    const ringCount = 0; // 링 개수
    const ringRadius = 0.12; // 링 반지름
    const ringSpan = 3.88; // 링 Y 범위 (height 비례 조정)

    for (let i = 0; i < ringCount; i++) {
      const geom = new fa(ringRadius, 0.01, 8, 16);
      // TorusGeometry: 도넛 모양입니다.

      const mat = new di({ color: 0x333333, reflectivity: 0.6 });
      const ring = new da(geom, mat);

      ring.rotation.x = Math.PI / 2; // 링을 수평으로 눕힙니다 (90도 회전)
      ring.position.x = -ringRadius - 3.3 / 2 + 0.08; // 책 왼쪽 끝에 배치

      // 링들을 일정 간격으로 배치하되, 홀수/짝수 번갈아 미세하게 어긋나게 합니다.
      ring.position.y =
        i * (ringSpan / ringCount) -
        ringSpan / 2 +
        0.1 +
        (i % 2 === 0 ? 0.05 : -0.05);

      ring.position.z = 24 * -0.002;
      ring.castShadow = !0;
      this.rings.push(ring);
      this.manual.add(ring);
    }
  }

  // -----------------------------------------------------------------------
  // 조명 설정
  // -----------------------------------------------------------------------
  initLights() {
    this.scene.add(new ha(0xffffff, 1.5));
    // 환경광(AmbientLight): 모든 방향에서 균일하게 비추는 빛입니다.

    const spot = new er(0xcceeff, 3, 0, 0.4);
    spot.position.set(-5, 0.5, 20);
    this.scene.add(spot);
    // 포인트 라이트 1: 왼쪽 앞에서 푸른빛으로 비춥니다.

    const dirLight = new er(0xffffff, 2, 0, 0.4);
    dirLight.position.set(4, -1, 10);
    dirLight.castShadow = !0; // 이 빛이 그림자를 만듭니다
    const shadowRes = Math.ceil(window.innerHeight * 1.5);
    dirLight.shadow.mapSize.width = shadowRes;
    dirLight.shadow.mapSize.height = shadowRes;
    dirLight.shadow.bias = -1e-5;
    this.scene.add(dirLight);
  }

  // -----------------------------------------------------------------------
  // 창 크기 변경 시 카메라와 렌더러 크기를 맞춥니다.
  // p5.js의 windowResized()와 같습니다.
  // -----------------------------------------------------------------------
  resize() {
    const w = document.documentElement.clientWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);

    const aspect = w / h;
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();

    // 화면 너비에 따라 카메라 Z 거리를 조정합니다.
    this.camera.position.z = 21 - (1 * (w - 375)) / 1353;

    if (aspect < 1) {
      this.camera.position.x = 0; // 세로 화면: 책을 중앙에 배치
    } else {
      // 가로 화면: 책을 오른쪽으로 치우쳐 배치 (왼쪽에 인포그래픽 공간 확보)
      this.camera.position.x = -aspect * 3.45 + 1.65 + 0.06 / (h / 900);
    }
  }

  // -----------------------------------------------------------------------
  // 매 프레임 실행되는 렌더링 루프
  // p5.js의 draw()와 완전히 같은 역할입니다.
  // -----------------------------------------------------------------------
  draw(time) {
    const delta = (time - this.lastTime) / 1000;

    this.openSpring.update(delta);
    this.manualSpring.update(delta);
    this.pageIndexSpring.update(delta);

    const currentIndex = Math.round(this.pageIndexSpring.value);

    this.pages.forEach((p) =>
      p.update(
        delta,
        this.pageTurn,
        this.turnDirection,
        currentIndex,
        this.isDragging,
        this.curlBias,
        false,
      ),
    );

    this.manual.position.set(
      this.manualOrigin.x,
      this.manualOrigin.y + this.openSpring.value * -7, // 닫힐수록 위로 올라감
      this.manualOrigin.z,
    );
    this.manual.rotation.set(
      this.openSpring.value * -1.5, // X축 회전: 앞으로 기울어짐
      this.openSpring.value * -1.3 + this.manualSpring.value * -0.5, // Y축 회전
      this.openSpring.value * -0.4, // Z축 회전: 살짝 비틀어짐
    );

    this.renderer.render(this.scene, this.camera);

    this.lastTime = time;
    this.rafId = requestAnimationFrame(this.draw.bind(this));
  }

  init() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    this.rafId = requestAnimationFrame(this.draw.bind(this));
  }

  // 양면 처리: 외부에서 넘어오는 pageIndex(원본 이미지 단위)를
  // 실제 ep 인스턴스 인덱스(2장씩 묶음)로 변환합니다.
  setPageIndex(i) {
    this.pageIndex = i;
    this.pageIndexSpring.setTarget(Math.floor(i / 2));
  }

  setIsOpen(b) {
    this.isOpen = b;
    this.openSpring.setTarget(b ? 0 : 1);
    // 0 = 책이 세워져 보이는 상태 (열림)
    // 1 = 책이 뒤로 기울어져 있는 상태 (닫힘)
  }

  handlePan(x, y) {
    this.pageTurn = Q(this.pageTurn + -x / 600, 0, 1);
    this.curlBias = y;
    this.manualSpring.setTarget(this.pageTurn);
  }

  handlePanStart(offset) {
    this.turnDirection = offset > 0 ? "backward" : "forward";
    this.isDragging = !0;
  }

  handlePanEnd() {
    this.isDragging = !1;
    this.pageTurn = 0;
    this.manualSpring.setTarget(0);
  }

  onPageIndexChange(cb) {
    this.pageIndexSubscriber = cb;
  }

  destroy() {
    cancelAnimationFrame(this.rafId);
    window.removeEventListener("resize", this.resize);
    this.renderer.dispose();
  }
}

/* ---------------------------------------------------------------------------
 * [React-Three.js 연결 브릿지 컴포넌트 (op)]
 *
 * p5.js로 비유하자면:
 * <canvas> 태그를 찾아서 p5 스케치를 붙이는 것처럼,
 * 이 컴포넌트는 React가 만든 <canvas> DOM을 찾아
 * Three.js 엔진(np)을 그 위에서 실행합니다.
 * --------------------------------------------------------------------------- */
const ip = { canvas: "_canvas_mwpob_1" };

export function op({ manual: t }) {
  const e = y.useRef(null); // <canvas> DOM 요소를 가리키는 ref
  const { pageIndex: n, isOpen: r, pageMeta: i, setPageIndex: a } = Tt();
  const { playSound: o } = De();

  y.useEffect(() => {
    t.current && t.current.setPageIndex(n);
  }, [n]);

  y.useEffect(() => {
    t.current && t.current.setIsOpen(r);
  }, [r]);

  y.useEffect(() => {
    if (t.current) o(r ? "open1" : "open2", z(Math.random(), 0, 1, 0.8, 1.3));
  }, [r]);

  y.useEffect(() => {
    if (e.current && !t.current) {
      t.current = new np(e.current, i);
      t.current.init();
    }
    return () => {
      if (t.current) t.current.destroy();
    };
  }, [i]);

  return g.jsx("canvas", { ref: e, className: ip.canvas });
}

/* ---------------------------------------------------------------------------
 * [최상위 드래그 래퍼 컴포넌트 (ap)]
 *
 * p5.js로 비유하자면:
 * mouseDragged(), mousePressed(), mouseReleased() 이벤트를
 * 감지해서 Three.js 엔진(np)의 handlePan 함수들로 전달하는
 * "이벤트 중계자" 입니다.
 * --------------------------------------------------------------------------- */
export function ap() {
  const t = y.useRef();

  const handlePan = (o, s) => {
    t.current &&
      t.current.handlePan(
        s.delta.x, // 이전 프레임 대비 X 이동량 (픽셀)
        1 - s.point.y / window.innerHeight, // 마우스 Y 위치 비율 (위=1, 아래=0)
      );
  };

  const handlePanStart = (o, s) => {
    t.current && t.current.handlePanStart(s.offset.x);
  };

  const handlePanEnd = () => {
    t.current && t.current.handlePanEnd();
  };

  return g.jsx(Xh, {
    handlePan,
    handlePanStart,
    handlePanEnd,
    children: g.jsx(op, { manual: t }),
  });
}
