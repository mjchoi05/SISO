/* ===========================================================================
 * [기능 분류: 이스터에그 미니게임 엔진 (SnakeGame.js)]
 * 역할: 데스크탑 환경에서 특정 조건(Enter 키) 만족 시 등장하는 숨겨진 스네이크 게임의
 * 물리 엔진, 충돌 판정, 그리고 2D 캔버스 렌더링을 담당합니다.
 * 에셋 중앙화: 본 파일은 캔버스 드로잉 API만 사용하며 외부 이미지/오디오 에셋을
 * 직접 로드하지 않습니다. (오디오는 Main.js의 De() 훅을 통해 트리거됨)
 * =========================================================================== */

// === [React.js 스택 영역] 외부 모듈 로드 시작 ===
import { j as g, a as y } from "./three.module-b6rmv7il.js";
import { De, Tt, dn, Ct } from "./Main.js"; // Main.js의 오디오, 상태, CSS 바인딩 참조
// === [React.js 스택 영역] 외부 모듈 로드 끝 ===

// === [Vanilla JS 영역] 순수 자바스크립트 엔진 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 클래스 프로퍼티 폴리필 (Polyfills)]
 * 역할: 구형 브라우저에서도 자바스크립트 클래스의 멤버 변수를 안전하게
 * 정의(defineProperty)할 수 있도록 돕는 트랜스파일러 헬퍼 함수입니다.
 * --------------------------------------------------------------------------- */
var $o = Object.defineProperty;
var Zo = (t, e, n) =>
  e in t
    ? $o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var P = (t, e, n) => Zo(t, typeof e != "symbol" ? e + "" : e, n);

/* ---------------------------------------------------------------------------
 * [기능 분류: 로컬 CSS 및 상태 상수 정의]
 * 역할: 게임 UI의 CSS 클래스명과 그리드(Grid) 내부의 각 셀 상태를 정의합니다.
 * Se=0(빈칸), Ce=1(뱀 몸통), cn=2(뱀 머리), fn=3(사과/먹이)
 * --------------------------------------------------------------------------- */
const Ks = "_container_saapz_1",
  Xs = "_canvas_saapz_8",
  Qs = "_startButton_saapz_18",
  Js = "_score_saapz_40",
  tl = "_esc_saapz_45",
  el = "_snakeContainer_saapz_52",
  Pt = {
    container: Ks,
    canvas: Xs,
    startButton: Qs,
    score: Js,
    esc: tl,
    snakeContainer: el,
  },
  Se = 0,
  Ce = 1,
  cn = 2,
  fn = 3;

/* ---------------------------------------------------------------------------
 * [기능 분류: 2D 그리드 시스템 렌더링 엔진 (nl)]
 * 역할: 게임판을 1차원 배열(Uint8Array)로 선언하여 메모리를 최적화하고,
 * 2D 좌표(x, y)를 통해 특정 칸의 상태(뱀, 먹이, 빈칸)를 읽고 씁니다.
 * --------------------------------------------------------------------------- */
export class nl {
  constructor(e, n) {
    P(this, "cols");
    P(this, "rows");
    P(this, "cells");
    ((this.cols = e), (this.rows = n), (this.cells = new Uint8Array(e * n)));
  }
  resize(e, n) {
    ((this.cols = e), (this.rows = n), (this.cells = new Uint8Array(e * n)));
  }
  get(e, n) {
    return this.cells[n * this.cols + e];
  }
  set(e, n, r) {
    this.cells[n * this.cols + e] = r;
  }
  reset() {
    this.cells.fill(Se);
  }
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 뱀(Snake) 바디 제어기 (rl)]
 * 역할: 뱀의 머리(head)부터 꼬리(tail)까지의 좌표를 배열로 관리하며,
 * 매 스텝마다 머리를 전진시키고 먹이를 먹지 않았다면 꼬리를 자릅니다.
 * --------------------------------------------------------------------------- */
export let rl = class {
  constructor(e, n = 3) {
    P(this, "body", []);
    P(this, "startingLength");
    P(this, "startPoint");
    ((this.startingLength = n), (this.startPoint = e), this.reset());
  }
  reset() {
    this.body = [this.startPoint];
    for (let e = 1; e < this.startingLength; e += 1)
      this.body.push([this.startPoint[0] - e, this.startPoint[1]]);
  }
  step(e, n) {
    // [게임 로직] 진행 방향(e)을 더해 새 머리 좌표를 배열 맨 앞에 추가
    (this.body.unshift([this.head[0] + e[0], this.head[1] + e[1]]),
      // [게임 로직] 먹이를 먹었다면(n === true) 꼬리를 자르지 않아 길이가 길어짐
      n || this.body.pop());
  }
  get head() {
    return this.body[0];
  }
  get tail() {
    return this.body[this.body.length - 1];
  }
};

/* ---------------------------------------------------------------------------
 * [기능 분류: 미니게임 물리 및 라이프사이클 통합 엔진 (il)]
 * 역할: 뱀의 이동, 사과 스폰, 벽/몸통 충돌(Collision) 판정을 종합 처리하고,
 * 점수 증가 시 속도가 빨라지는(StepDuration 감소) 레벨 디자인을 관장합니다.
 * --------------------------------------------------------------------------- */
export class il {
  constructor(e, n) {
    P(this, "snake");
    P(this, "stepId");
    P(this, "grid");
    P(this, "score");
    P(this, "currentStep");
    P(this, "direction");
    P(this, "cols");
    P(this, "rows");
    P(this, "stepDuration");
    P(this, "stepListeners");
    P(this, "loseListeners");
    P(this, "scoreListeners");
    ((this.cols = e),
      (this.rows = n),
      (this.direction = [1, 0]), // 초기 이동 방향 (우측)
      (this.grid = new nl(e, n)),
      (this.snake = new rl([10, 10], 5)),
      this.resetGame(),
      (this.stepListeners = new Set()),
      (this.scoreListeners = new Set()),
      (this.loseListeners = new Set()),
      (this.stepDuration = 200), // 초기 이동 속도 (ms)
      (this.stepId = 0),
      (this.score = 0),
      (this.currentStep = 0));
  }
  resetGame() {
    (this.grid.reset(),
      this.snake.reset(),
      (this.direction = [1, 0]),
      (this.currentStep = 0),
      (this.score = 0),
      (this.stepDuration = 200),
      this.spawnFood());
  }
  start() {
    this.stepId = setTimeout(() => {
      this.step();
    }, this.stepDuration);
  }
  stop() {
    clearInterval(this.stepId);
  }
  resize(e, n) {
    ((this.cols = e),
      (this.rows = n),
      this.grid.resize(e, n),
      this.resetGame());
  }
  setDirection(e) {
    let n;
    (e === "up"
      ? (n = [0, -1])
      : e === "down"
        ? (n = [0, 1])
        : e === "left"
          ? (n = [-1, 0])
          : (n = [1, 0]),
      // [충돌 판정] 현재 이동 중인 방향의 정반대 방향으로는 즉시 꺾을 수 없도록 방어
      n[0] + this.direction[0] !== 0 &&
        n[1] + this.direction[1] !== 0 &&
        (this.direction = n));
  }
  step() {
    this.currentStep += 1;
    const e = [
      this.snake.head[0] + this.direction[0],
      this.snake.head[1] + this.direction[1],
    ];
    // [충돌 판정] 벽(가장자리)에 부딪혔는지 검사하여 게임 오버 처리
    if (e[0] < 0 || e[0] >= this.cols || e[1] < 0 || e[1] >= this.rows) {
      this.lose();
      return;
    }
    switch (this.grid.get(...e)) {
      case fn: // [이벤트] 전진한 칸이 먹이(사과)인 경우
        ((this.score += 1),
          this.scoreListeners.forEach((r) => r(this.score)),
          // [난이도 조절] 먹이를 먹을 때마다 이동 주기를 5ms씩 줄여 속도를 높임 (최소 80ms)
          (this.stepDuration = Math.max(80, this.stepDuration - 5)),
          this.snake.step(this.direction, !0),
          this.grid.set(...this.snake.head, Ce),
          this.spawnFood());
        break;
      case Se: // [이벤트] 전진한 칸이 빈칸인 경우 (정상 이동)
        (this.grid.set(...this.snake.tail, Se),
          this.grid.set(...this.snake.head, cn),
          this.snake.step(this.direction, !1),
          this.grid.set(...this.snake.head, Ce));
        break;
      case cn: // [이벤트] 뱀 머리 또는 몸통(Ce)과 부딪힌 경우 (자기 몸을 갉아먹음)
      case Ce:
      default:
        this.lose();
        return;
    }
    (this.stepListeners.forEach((r) => r(this.grid)),
      (this.stepId = setTimeout(() => {
        this.step();
      }, this.stepDuration)));
  }
  spawnFood() {
    const e = Math.floor(Math.random() * this.cols),
      n = Math.floor(Math.random() * this.rows);
    // 빈칸일 경우에만 먹이를 생성하고, 아니면 재귀 호출로 다시 찾음
    this.grid.get(e, n) === Se ? this.grid.set(e, n, fn) : this.spawnFood();
  }
  lose() {
    (this.stop(), this.loseListeners.forEach((e) => e()));
  }
  onStep(e) {
    return (
      this.stepListeners.add(e),
      () => {
        this.stepListeners.delete(e);
      }
    );
  }
  onLose(e) {
    return (
      this.loseListeners.add(e),
      () => {
        this.loseListeners.delete(e);
      }
    );
  }
  onScore(e) {
    return (
      this.scoreListeners.add(e),
      () => {
        this.scoreListeners.delete(e);
      }
    );
  }
}
// === [Vanilla JS 영역] 순수 자바스크립트 엔진 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 인터랙션 컴포넌트 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 2D 캔버스 렌더링 및 키보드 컨트롤 컴포넌트 (al)]
 * 역할: Vanilla JS 엔진에서 연산된 그리드 데이터를 시각적으로 그립니다.
 * 키보드(방향키, WASD) 입력을 받아 뱀의 방향을 조작하며 화면 상태(playing 등)를 관리합니다.
 * --------------------------------------------------------------------------- */
export function al({ onQuit: t }) {
  const [e, n] = y.useState(0),
    [r, i] = y.useState("pre"), // pre(시작 전), playing(진행 중), gameover(종료)
    { playSound: a } = De(),
    o = 20, // 뱀 몸통 및 그리드의 픽셀 단위 크기
    s = 6, // 간격 패딩
    l = y.useRef(new il(50, 50)).current,
    u = y.useRef(null),
    f = y.useRef(null),
    h = y.useRef(),
    c = "#ffa621", // 뱀 및 UI의 주황색 메인 컬러
    p = y.useCallback(
      (v) => {
        const m = h.current,
          x = f.current;
        if (!(!m || !x)) {
          (m.clearRect(0, 0, m.canvas.width, m.canvas.height),
            (m.fillStyle = c),
            (m.strokeStyle = c));
          for (let w = 0; w < l.rows; w += 1)
            for (let b = 0; b < l.cols; b += 1) {
              const T = v.get(b, w);
              if (T === fn) {
                // [시각화] 먹이(사과) 렌더링 시 방사형 그라데이션(RadialGradient)을 입혀 빛나는 효과 연출
                const C = m.createRadialGradient(
                  b * o + o / 2,
                  w * o + o / 2,
                  0,
                  b * o + o / 2,
                  w * o + o / 2,
                  o * 1.5,
                );
                (C.addColorStop(0, c),
                  C.addColorStop(1, "transparent"),
                  (m.fillStyle = C),
                  m.arc(b * o + o / 2, w * o + o / 2, o * 1.5, 0, 2 * Math.PI),
                  m.fill(),
                  (m.fillStyle = c),
                  m.fillRect(b * o, w * o, o - s / 2, o - s / 2));
              }
              (T === Ce || T === cn) && // 몸통 또는 머리 렌더링
                ((m.fillStyle = c),
                m.fillRect(b * o, w * o, o - s / 2, o - s / 2));
            }
        }
      },
      [l.cols, l.rows, c],
    );
  (y.useEffect(() => {
    const v = f.current,
      m = u.current,
      x = () => {
        if (v && m) {
          // 화면 리사이즈 시 캔버스 픽셀을 그리드 칸 수(cols, rows)로 매핑
          const { width: C, height: L } = m.getBoundingClientRect(),
            V = Math.floor(C / o),
            A = Math.floor(L / o);
          (l.resize(V, A), (v.width = C), (v.height = L));
        }
      };
    if (v) {
      const C = v.getContext("2d");
      h.current = C || void 0;
    }
    // [오디오 피드백] 점수 획득 시 하이 톤 비프음 재생
    const w = l.onScore((C) => {
        (a("beepHigh"), n(C));
      }),
      b = l.onStep((C) => {
        p(C);
      }),
      // [오디오 피드백] 게임 오버 시 미드 톤 비프음 재생 및 상태 전이
      T = l.onLose(() => {
        (a("beepMid"), n(l.score), i("gameover"));
      });
    return (
      x(),
      window.addEventListener("resize", x),
      () => {
        (window.removeEventListener("resize", x), l.stop(), w(), b(), T());
      }
    );
  }, [l, a, p]),
    y.useEffect(() => {
      switch (r) {
        case "playing":
          (n(0), l.resetGame(), l.start());
          break;
        case "pre":
        case "gameover":
        default:
          l.stop();
      }
    }, [l, r]));
  const d = y.useCallback(() => {
    i("playing");
  }, []);
  return (
    y.useEffect(() => {
      // [UX 인터랙션] 키보드 이벤트를 수신하여 뱀의 이동 방향 설정
      const v = (m) => (
        (m.key === "ArrowLeft" || m.key === "h" || m.key === "a") &&
          (l.setDirection("left"), m.preventDefault(), m.stopPropagation()),
        (m.key === "ArrowUp" || m.key === "k" || m.key === "w") &&
          (l.setDirection("up"), m.preventDefault(), m.stopPropagation()),
        (m.key === "ArrowRight" || m.key === "l" || m.key === "d") &&
          (l.setDirection("right"), m.preventDefault(), m.stopPropagation()),
        (m.key === "ArrowDown" || m.key === "j" || m.key === "s") &&
          (l.setDirection("down"), m.preventDefault(), m.stopPropagation()),
        (m.key === "Enter" || r !== "playing") &&
          (i("playing"), m.preventDefault(), m.stopPropagation()),
        m.key === "Escape" && (t(), m.preventDefault(), m.stopPropagation()),
        !1
      );
      return (
        window.addEventListener("keydown", v),
        () => {
          window.removeEventListener("keydown", v);
        }
      );
    }, [l, r, t]),
    g.jsxs("div", {
      className: Ct(Pt.container, Pt.snakeContainer),
      ref: u,
      children: [
        g.jsx("canvas", { className: Pt.canvas, ref: f }),
        r === "pre"
          ? g.jsx("button", {
              className: Pt.startButton,
              type: "button",
              onClick: d,
              children: "START",
            })
          : null,
        r === "gameover"
          ? g.jsx("button", {
              className: Pt.startButton,
              type: "button",
              onClick: d,
              children: "PLAY AGAIN",
            })
          : null,
        g.jsxs("div", { className: Pt.score, children: ["SCORE [", e, "]"] }),
        g.jsx("div", { className: Pt.esc, children: "Hit [ESC] to quit" }),
      ],
    })
  );
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 이스터에그 활성화 훅 (sl)]
 * 역할: 터치 환경이 아닌 데스크탑 환경(pointer:fine)에서 사용자가 Enter 키를
 * 누르면 전역 상태(snakeEnabled)를 트리거하여 미니게임을 화면에 렌더링합니다.
 * --------------------------------------------------------------------------- */
export function sl() {
  const { snakeEnabled: t, setSnakeEnabled: e } = Tt(),
    [n, r] = y.useState(!1);
  y.useEffect(() => {
    matchMedia("(pointer:fine)").matches && r(!0);
    const a = (o) => {
      o.key === "Enter" &&
        !t &&
        n &&
        (dn("beepHigh"), e(!0), o.preventDefault(), o.stopPropagation());
    };
    return (
      document.addEventListener("keydown", a),
      () => {
        document.removeEventListener("keydown", a);
      }
    );
  }, [t, e, n]);
  const i = y.useCallback(() => {
    (dn("beepMid"), e(!1));
  }, [e]);
  return {
    snakeEnabled: t,
    setSnakeEnabled: e,
    handleQuit: i,
    canEnableSnake: n,
  };
}
// === [React.js 영역] UI 렌더링 및 인터랙션 컴포넌트 끝 ===
