// ===========================================================================
// [웹사이트 기능: 애플리케이션 오케스트레이터 (Main.js)]
// 역할: 프로젝트의 진입점(Entry Point)으로, 3D/물리 엔진을 렌더링하는 UI 계층을
//       구성하고 전역 상태(Context) 및 오디오/이벤트 라우팅을 총괄합니다.
// ===========================================================================

import {
  r as Yo,
  g as jn,
  j as g,
  a as y,
  h as B,
  u as va,
} from "./three.module-b6rmv7il.js";
import { wa, Pa, Ys, Zd } from "./Loader.js";
import { al, sl } from "./SnakeGame.js";
import { op } from "./Book3D.js";
import { qo, xe, Fd, ui, Q, Qh, Jh } from "./MotionInteraction.js";

// === [Vanilla JS 영역] 순수 자바스크립트 기반 에셋 및 설정 시작 ===

var ma = Yo();
const ga = jn(ma);

/* ---------------------------------------------------------------------------
 * [기능 분류: 사이트 핵심 리소스(에셋) 중앙 집중화]
 * UX 목적: 하드코딩된 리소스 경로를 파일 최상단으로 끌어올려, '404 Not Found'
 * 에러 방지 및 에셋 로딩 시퀀스를 한눈에 파악할 수 있도록 관리합니다.
 * --------------------------------------------------------------------------- */

// --- [에셋: 3D 책 페이지 텍스처 이미지] ---
// UX 설명: Book3D.js에서 WebGL을 통해 책장(Mesh) 위에 맵핑될 24장의 고해상도 페이지 텍스처입니다.
//로컬로 변경

// --- [에셋: 웹 오디오 엔진 버퍼] ---
// UX 설명: Howler.js를 활용하여 버튼 클릭, 페이지 넘김, 에러 비프음 등 사용자 상호작용에 따른 청각적 피드백을 정의합니다.
export const pi = {
  open1: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/3tp6m1txHUp9sZOPY2cSVx/94742a87f452bc211c6ffdc242d5a60f/open-1.mp3",
    volume: 1,
  }),
  open2: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/4hiTi6Ikp0rwTszMhcJncd/ef347c2b1420c585dacb428b39cfb0b2/open-2.mp3",
    volume: 1,
  }),
  flip1: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/5odlGrmbbWEyFtg0NbXE1S/81f620ac2101f635c1ebec2e3f615b06/flip-1.mp3",
    volume: 0.5,
  }),
  flip2: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/5xV2aHk4Kdi7Rj6I4hSnTa/929f052f0188da710ed5ad4ba3f955d3/flip-2.mp3",
    volume: 0.5,
  }),
  slide1: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/n4WBF5TpWKpawz3XBazhv/24bdf9b8a9597b4d2514f8e34bd8a850/slide-1.mp3",
    volume: 0.3,
  }),
  slide2: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/2TcAeIDRia4QuPwLIem8N0/6131b0326caa2db1946fdf8b863c2f9c/slide-2.mp3",
    volume: 0.3,
  }),
  slide3: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/JUx7qo2ucVMuIS6FPnakV/1a80f7ffac5888bfc80ff69403ab3756/slide-3.mp3",
    volume: 0.3,
  }),
  slide4: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/6M7l992B3KSmp5T42quEcY/ec443f15c5df61392e3f331e7873b252/slide-4.mp3",
    volume: 0.3,
  }),
  turn2: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/1onmfQ0fixL8q28nyfZKwR/0b19aca6a699aecce0c3002db77fa988/turn-2.mp3",
    volume: 0.5,
  }),
  turn3: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/3MGN085EzGtZpdNMFs3yz4/528cd3d5ee4d9e3a184584de59797eb3/turn-3.mp3",
    volume: 0.5,
  }),
  turn4: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/6AOByoDrrI6ak9swJS30wW/909cc0007eb7d07c2db7bec181f765d3/page-turn-01.mp3",
    volume: 0.5,
  }),
  shuffleShort1: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/5ugfXRGoTGqCbaX4yOr9Qy/b73b907cc8b33e8c6b0de5ce779f5cc4/shuffle-short-1.mp3",
    volume: 1,
  }),
  shuffleShort2: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/6mUJfNiidYNSthZMoxXY80/9c96f995ddbdba7c3dbefe2d705432b9/shuffle-short-2.mp3",
    volume: 1,
  }),
  shuffleShort3: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/2YpXd7gajEYpQbc4sE0x29/db48faee90299ece77b26e6cc7969db1/shuffle-short-3.mp3",
    volume: 1,
  }),
  shuffleLong1: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/2eOcvmz3QI0DeYZIpAEsJW/0b71c9a4f48b9ea03b5c3cf8fea70700/shuffle-long-1.mp3",
    volume: 1,
  }),
  beepMid: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/7m5U6kjGYr2iX6tBo9zm4N/d9b043c4011ee3cdda270be446de833d/Retro2.mp3",
    volume: 1,
  }),
  beepHigh: new B.Howl({
    src: "https://videos.stripeassets.com/3njn2qm7rrbs/3BbuNQooFuKcsW9C7AXVun/8d58cb845d24c1c1463879910ba5bb8c/Retro1.mp3",
    volume: 1,
  }),
};

/* ---------------------------------------------------------------------------
 * [기능 분류: 오디오 재생 컨트롤러 (Vanilla JS)]
 * UX 목적: 특정 이벤트(페이지 전환 등) 발생 시 지정된 오디오를 재생하며,
 * 재생 속도(Pitch/Rate)를 변형하여 소리의 지루함을 방지합니다.
 * --------------------------------------------------------------------------- */
export function dn(t, e = 1) {
  const n = pi[t];
  n.rate(e);
  const r = n.play();
  n.rate(e, r);
}
export function et(t, e = 1) {
  const n = t[Math.floor(Math.random() * t.length)],
    r = pi[n],
    i = r.play();
  r.rate(e, i);
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 동적 CSS 클래스 바인딩 (Classnames 폴리필)]
 * UX 목적: React 컴포넌트의 상태값에 따라 CSS 모듈을 동적으로 결합하여 UI의
 * 시각적 상태(예: 활성화, 숨김 등)를 매끄럽게 제어합니다.
 * --------------------------------------------------------------------------- */
var Ye = { exports: {} };
var nr;
function _a() {
  return (
    nr ||
      ((nr = 1),
      (function (t) {
        (function () {
          var e = {}.hasOwnProperty;
          function n() {
            for (var a = "", o = 0; o < arguments.length; o++) {
              var s = arguments[o];
              s && (a = i(a, r.call(this, s)));
            }
            return a;
          }
          function r(a) {
            if (typeof a == "string" || typeof a == "number")
              return (this && this[a]) || a;
            if (typeof a != "object") return "";
            if (Array.isArray(a)) return n.apply(this, a);
            if (
              a.toString !== Object.prototype.toString &&
              !a.toString.toString().includes("[native code]")
            )
              return a.toString();
            var o = "";
            for (var s in a)
              e.call(a, s) && a[s] && (o = i(o, (this && this[s]) || s));
            return o;
          }
          function i(a, o) {
            return o ? (a ? a + " " + o : a + o) : a;
          }
          t.exports
            ? ((n.default = n), (t.exports = n))
            : (window.classNames = n);
        })();
      })(Ye)),
    Ye.exports
  );
}
var Ea = _a();
export const Ma = jn(Ea);

var Ke = { exports: {} };
var rr;
function $s() {
  return (
    rr ||
      ((rr = 1),
      (function (t) {
        (function () {
          var e = {}.hasOwnProperty;
          function n() {
            for (var a = "", o = 0; o < arguments.length; o++) {
              var s = arguments[o];
              s && (a = i(a, r(s)));
            }
            return a;
          }
          function r(a) {
            if (typeof a == "string" || typeof a == "number") return a;
            if (typeof a != "object") return "";
            if (Array.isArray(a)) return n.apply(null, a);
            if (
              a.toString !== Object.prototype.toString &&
              !a.toString.toString().includes("[native code]")
            )
              return a.toString();
            var o = "";
            for (var s in a) e.call(a, s) && a[s] && (o = i(o, s));
            return o;
          }
          function i(a, o) {
            return o ? (a ? a + " " + o : a + o) : a;
          }
          t.exports
            ? ((n.default = n), (t.exports = n))
            : (window.classNames = n);
        })();
      })(Ke)),
    Ke.exports
  );
}
var Zs = $s();
export const Ct = jn(Zs);

/* ---------------------------------------------------------------------------
 * [기능 분류: 난독화된 CSS 모듈 딕셔너리]
 * UX 목적: 보안 및 캡슐화를 위해 번들러가 생성한 CSS 클래스명을 중앙에서 매핑하여
 * 전역 충돌을 막고 일관된 스타일링을 제공합니다.
 * --------------------------------------------------------------------------- */
export const U = {
  container: "_container_nag8h_1",
  containerFade: "_containerFade_nag8h_24",
  flashOut: "_flashOut_nag8h_1",
  background: "_background_nag8h_29",
  backgroundFallback: "_backgroundFallback_nag8h_42",
  backgroundFade: "_backgroundFade_nag8h_46",
  stream: "_stream_nag8h_50",
  streamShow: "_streamShow_nag8h_54",
  logoMark: "_logoMark_nag8h_58",
  logoMeta: "_logoMeta_nag8h_63",
  bootText: "_bootText_nag8h_70",
  blinker: "_blinker_nag8h_74",
  inner: "_inner_nag8h_80",
  grid: "_grid_nag8h_100",
  metrics: "_metrics_nag8h_118",
  item: "_item_nag8h_126",
  itemRow: "_itemRow_nag8h_132",
  txnCount: "_txnCount_nag8h_140",
  txnCountValue: "_txnCountValue_nag8h_144",
  txnVolume: "_txnVolume_nag8h_148",
  txnVolumeValue: "_txnVolumeValue_nag8h_152",
  cities: "_cities_nag8h_156",
  cityGrid: "_cityGrid_nag8h_160",
  location: "_location_nag8h_168",
  currencyVolume: "_currencyVolume_nag8h_172",
  currencyVolumeGrid: "_currencyVolumeGrid_nag8h_176",
  currencyVolumeLabelUsd: "_currencyVolumeLabelUsd_nag8h_184",
  currencyVolumeValUsd: "_currencyVolumeValUsd_nag8h_188",
  label: "_label_nag8h_192",
  uptime: "_uptime_nag8h_199",
  uptimeBar: "_uptimeBar_nag8h_203",
  uptimeTick: "_uptimeTick_nag8h_210",
  uptimeGreen: "_uptimeGreen_nag8h_215",
  uptimeYellow: "_uptimeYellow_nag8h_220",
  capacity: "_capacity_nag8h_230",
  capacityBar: "_capacityBar_nag8h_244",
  dottedSpacer: "_dottedSpacer_nag8h_253",
  footer: "_footer_nag8h_260",
  close: "_close_nag8h_267",
  gptn: "_gptn_nag8h_284",
  snakePrompt: "_snakePrompt_nag8h_291",
  privacy: "_privacy_nag8h_299",
  privacyError: "_privacyError_nag8h_308",
  bouncerContainer: "_bouncerContainer_nag8h_313",
  bouncer: "_bouncer_nag8h_313",
  bouncerSvg: "_bouncerSvg_nag8h_335",
};
export const un = {
  ui: "_ui_3unaz_1",
  machineTranslate: "_machineTranslate_3unaz_7",
  machineContainer: "_machineContainer_3unaz_18",
};
export const we = {
  timeNav: "_timeNav_s71o8_1",
  timePill: "_timePill_s71o8_5",
};
export const eh = { lightPill: "_lightPill_1fm4j_1" };
export const ci = {
  darkPill: "_darkPill_13e1e_1",
  darkPillDissolve: "_darkPillDissolve_13e1e_20",
};
export const mt = {
  topNav: "_topNav_x2w7d_1",
  left: "_left_x2w7d_17",
  right: "_right_x2w7d_18",
  logoPill: "_logoPill_x2w7d_23",
  liveHover: "_liveHover_x2w7d_29",
  liveDot: "_liveDot_x2w7d_48",
  pulse: "_pulse_x2w7d_1",
  offlineDot: "_offlineDot_x2w7d_53",
  livePill: "_livePill_x2w7d_75",
};
export const R = {
  bottomNav: "_bottomNav_176wj_2",
  manualNav: "_manualNav_176wj_19",
  defaultNav: "_defaultNav_176wj_24",
  defaultNavRight: "_defaultNavRight_176wj_37",
  closeMobile: "_closeMobile_176wj_46",
  pageTitlePill: "_pageTitlePill_176wj_53",
  pageList: "_pageList_176wj_59",
  closeDesktop: "_closeDesktop_176wj_93",
  infoContainer: "_infoContainer_176wj_100",
  homePill: "_homePill_176wj_111",
  infoWindow: "_infoWindow_176wj_122",
  infoRow: "_infoRow_176wj_146",
  pageTitle: "_pageTitle_176wj_53",
  marquee: "_marquee_176wj_1",
};
export const jh = { videoContainer: "_videoContainer_1xyyf_1" };
export const fi = {
  manualOverlay: "_manualOverlay_895i9_1",
  dragArea: "_dragArea_895i9_19",
};
export const D = {
  machineOverlay: "_machineOverlay_1yr6s_1",
  hitAreas: "_hitAreas_1yr6s_29",
  tooltip: "_tooltip_1yr6s_33",
  line: "_line_1yr6s_34",
  hitArea: "_hitArea_1yr6s_29",
  "hitArea--right": "_hitArea--right_1yr6s_100",
  tooltipCorners: "_tooltipCorners_1yr6s_157",
  tooltipCorner: "_tooltipCorner_1yr6s_157",
  tooltipHeader: "_tooltipHeader_1yr6s_206",
  tooltipFooter: "_tooltipFooter_1yr6s_213",
  fig: "_fig_1yr6s_225",
  figPill: "_figPill_1yr6s_231",
  decoyLink: "_decoyLink_1yr6s_240",
};

export const ln = Ma.bind(U);
export const zd = Ct.bind(U);

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===

/* ---------------------------------------------------------------------------
 * [기능 분류: 글로벌 오디오 토글 상태 제어 (React Hook)]
 * UX 목적: 사용자가 사이트 내의 오디오 출력을 On/Off 할 수 있도록 상태를 제공합니다.
 * --------------------------------------------------------------------------- */
export function ol() {
  const [t, e] = y.useState(!1);
  y.useEffect(() => {
    B.Howler.mute(t);
  }, [t]);
  return [t, e];
}

export function De() {
  return {
    playSound: y.useCallback(dn, []),
    playRandomSound: y.useCallback(et, []),
  };
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 애플리케이션 전역 상태 트리 (Context API)]
 * UX 목적: SNEK/GPTN 관련 잉여 코드를 삭제하고 페이지 이동 메타데이터만 관리합니다.
 * --------------------------------------------------------------------------- */
export const hi = y.createContext({
  pageMeta: [],
  pageIndex: 0,
  setPageIndex: () => {},
  isOpen: !1,
  setIsOpen: () => {},
});

export function Ws({ children: t }) {
  const [e, n] = y.useState(0),
    [r, i] = y.useState(!1),
    // 수동 배열 방식으로 30개의 페이지 데이터를 정확하게 나열합니다.
    u = y.useMemo(
      () => [
        {
          texture: "./public/book/pg_01.png",
          title: "표지",
          textContent: "표지입니다",
        },
        {
          texture: "./public/book/pg_02.png",
          title: "아이가 밤중에 갑자기 열이 날 때",
          textContent:
            "더워하면 시원하게! 추워하면 따뜻하게! 열 나서 땀을 흘리는데 여러 겹의 옷을 입히거나,떨고 있는데 옷을 벗겨 놓으면 힘들어해요.",
        },
        {
          texture: "./public/book/pg_03.png",
          title: "아이가 밤중에 갑자기 열이 날 때",
          textContent: "해열도 중요하지만 가장 중요한 건 아이의 컨디션!",
        },
        {
          texture: "./public/book/pg_04.png",
          title: "무언가가 목에 걸렸을 때",
          textContent:
            "유아들은 본능적으로 궁금한 물체들을 입으로 탐색하다가 잘못하여 질식사고로 이어지기도 하고, 커다란 내상을 입기도 합니다. 따라서 무엇을 삼켰냐에 따라 대처가 크게 달라집니다. ",
        },
        {
          texture: "./public/book/pg_05.png",
          title: "무언가가 목에 걸렸을 때",
          textContent:
            "다만 기도가 폐쇄되어 숨을 아예 쉬지 못하는 상황이라면 즉시 하임리히법을 실시해야 합니다.",
        },
        {
          texture: "./public/book/pg_06.png",
          title: "관절이 불가능한 각도로 꺾일 때",
          textContent:
            "몸이 다 자라지 않은 유아는 신체와 근육이 부드럽기에 자주 발생하는 현상입니다.",
        },
        {
          texture: "./public/book/pg_07.png",
          title: "관절이 불가능한 각도로 꺾일 때",
          textContent:
            "응급실까지 가지 않아도 가정 내에서 조치가 가능한 상황이기에 지침을 제대로 따라주세요.",
        },
        {
          texture: "./public/book/pg_08.png",
          title: "머리카락에 감겨 피가 통하지 않을 때",
          textContent:
            "아이가 자지러지게 우는데 도저히 원인을 알 수 없다면 한 번쯤 의심해 봐야 하는 증상입니다.",
        },
        {
          texture: "./public/book/pg_09.png",
          title: "머리카락에 감겨 피가 통하지 않을 때",
          textContent:
            "발가락이나 손가락, 혹은 생식기에 머리카락이나 얇은 실오라기가 꽉 감겨 피가 안 통하게 되고, 피부 및 조직이 괴사하는 증상입니다. ",
        },
        {
          texture: "./public/book/pg_10.png",
          title: "아이가 계속 잠에서 깨어 울 때",
          textContent:
            "아이가 자다가 밤에 우는 증상은 야제증, 자다가 놀라서 깬 뒤 우는 증상을 야경증이라고 합니다.",
        },
        {
          texture: "./public/book/pg_11.png",
          title: "아이가 계속 잠에서 깨어 울 때",
          textContent:
            "침대 밑에 아이를 잠들지 못하게 하는 무언가 있지 않나요?",
        },
        {
          texture: "./public/book/pg_12.png",
          title: "아이가 성인의 목소리로 말할 때",
          textContent: "조심하세요",
        },
        {
          texture: "./public/book/pg_13.png",
          title: "아이가 성인의 목소리로 말할 때",
          textContent: "위험합니다",
        },
        {
          texture: "./public/book/pg_14.png",
          title: "아이가 수면 중에 집안을 돌아다닐 때",
          textContent: "내 아이가 맞는지 확인하세요.",
        },
        {
          texture: "./public/book/pg_15.png",
          title: "아이가 수면 중에 집안을 돌아다닐 때",
          textContent: "내 아이가 아닐 수도 있습니다.",
        },
        {
          texture: "./public/book/pg_16.png",
          title: "자신의 유치를 먹으려고 할 때",
          textContent:
            "생후 15개월은 유치가 빠질 시기가 아니라, 이제 막 잇몸을 뚫고 치아가 자라나는 시기입니다.",
        },
        {
          texture: "./public/book/pg_17.png",
          title: "자신의 유치를 먹으려고 할 때",
          textContent:
            " 이 시기의 아이가 자신의 유치를 먹으려 한다는 것은 잇몸에 박힌 생니를 스스로의 힘으로 강제 발치하여 삼키려 한다는 것을 의미합니다. ",
        },

        //아직안함 여기
        {
          texture: "./public/book/pg_18.png",
          title: "자신의 유치를 먹으려고 할 때",
          textContent: "",
        },
        {
          texture: "./public/book/pg_19.png",
          title: "자신의 유치를 먹으려고 할 때",
          textContent:
            " 이 시기의 아이가 자신의 유치를 먹으려 한다는 것은 잇몸에 박힌 생니를 스스로의 힘으로 강제 발치하여 삼키려 한다는 것을 의미합니다. ",
        },
        {
          texture: "./public/book/pg_20.png",
          title: "20",
          textContent: "",
        },
        {
          texture: "./public/book/pg_21.png",
          title: "21",
          textContent: "",
        },
        {
          texture: "./public/book/pg_22.png",
          title: "22",
          textContent: "Purchase the official BF/CM hat while supplies last",
        },
        {
          texture: "./public/book/pg_23.png",
          title: "23",
          textContent: "",
        },
        {
          texture: "./public/book/pg_24.png",
          title: "24",
          textContent: "",
        },
        // 25번부터 30번까지 추가된 페이지 공간입니다. (필요 시 title, textContent 수정)
        {
          texture: "./public/book/pg_25.png",
          title: "Page 25",
          textContent: "",
        },
        {
          texture: "./public/book/pg_26.png",
          title: "Page 26",
          textContent: "",
        },
        {
          texture: "./public/book/pg_27.png",
          title: "Page 27",
          textContent: "",
        },
        {
          texture: "./public/book/pg_28.png",
          title: "Page 28",
          textContent: "",
        },
        {
          texture: "./public/book/pg_29.png",
          title: "Page 29",
          textContent: "",
        },
        {
          texture: "./public/book/pg_30.png",
          title: "Page 30",
          textContent: "",
        },
      ],
      [],
    );
  return g.jsx(hi.Provider, {
    value: {
      pageIndex: e,
      setPageIndex: n,
      isOpen: r,
      setIsOpen: i,
      pageMeta: u,
    },
    children: t,
  });
}

export function Tt() {
  return y.useContext(hi);
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 공통 UI 버튼 컴포넌트]
 * UX 목적: 라이트 모드(St) 및 다크 모드(It) 환경에서 일관된 버튼 형태(Pill)를 제공합니다.
 * --------------------------------------------------------------------------- */
export function St({
  children: t,
  parentStyles: e = "",
  style: n = {},
  handleClick: r,
}) {
  return g.jsx("button", {
    type: "button",
    style: n,
    className: Ct(e, eh.lightPill),
    onClick: r || void 0,
    children: t,
  });
}

export function It({
  children: t,
  parentStyles: e = "",
  style: n = {},
  handleClick: r,
}) {
  return g.jsxs("button", {
    type: "button",
    style: n,
    className: Ct(e, ci.darkPill),
    onClick: r || void 0,
    children: [
      t,
      g.jsx("div", { className: ci.darkPillDissolve, children: t }),
    ],
  });
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 상단 실시간 시간 표시기 (Time Nav)]
 * UX 목적: 글로벌 서비스 컨셉에 맞춰 UTC 시간, UNIX Epoch 타임, 그리고
 * 비트(Beats) 타임을 상단에 실시간으로 표시하여 생동감을 줍니다.
 * --------------------------------------------------------------------------- */
export function nh() {
  const [t, e] = y.useState("00:00:00"),
    [n, r] = y.useState("0000000000"),
    [i, a] = y.useState("00:00:00");
  y.useEffect(() => {
    const o = () => {
        const u = new Date(),
          h =
            (((u.getUTCHours() + 1) % 24) * 36e5 +
              u.getUTCMinutes() * 6e4 +
              u.getUTCSeconds() * 1e3 +
              u.getUTCMilliseconds()) /
            86400;
        return Math.floor(h * 100) / 100;
      },
      s = () => {
        const u = new Date(),
          f = u.getTime(),
          h = u.getTimezoneOffset() * 6e4,
          c = Math.floor(Date.now() / 1e3),
          p = o(),
          d = new Date(f + h).getHours(),
          v = new Date(f + h).getMinutes(),
          m = new Date(f + h).getSeconds();
        for (let x = 0; x < 3; x += 1) {
          let w;
          x === 0 ? (w = d) : x === 1 ? (w = (d - 8) % 24) : (w = (d + 9) % 24);
          const b = `${w < 10 ? `0${w}` : w}:${v < 10 ? `0${v}` : v}:${m < 10 ? `0${m}` : m}`;
          x === 0 ? e(`${b} UTC`) : x === 1 ? r(`${c}`) : a(`${p}.BEATS`);
        }
      };
    s();
    const l = setInterval(s, 1e3);
    return () => clearInterval(l);
  }, []);
  return g.jsxs("div", {
    className: we.timeNav,
    children: [
      g.jsx(St, { parentStyles: we.timePill, children: i }),
      g.jsx(St, { parentStyles: we.timePill, children: n }),
      g.jsx(St, { parentStyles: we.timePill, children: t }),
    ],
  });
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 최상단 네비게이션 바 (Top Nav)]
 * UX 목적: 로고 클릭 시 홈으로 복귀하거나, 콘솔 토글 기능 및 LIVE/OFFLINE 상태를 표시합니다.
 * --------------------------------------------------------------------------- */

export function ph({ isLive: t, isSmallScreen: e }) {
  const [n, r] = ol();
  return (
    y.useEffect(
      () => (
        window.addEventListener("keypress", (i) => {
          i.key === "a" && r((a) => !a);
        }),
        () => {
          window.removeEventListener("keypress", (i) => {
            i.key === "a" && r((a) => !a);
          });
        }
      ),
      [r],
    ),
    g.jsxs("nav", {
      className: mt.topNav,
      children: [
        g.jsxs("div", {
          className: mt.left,
          children: [
            g.jsx("a", {
              className: mt.logoPill,

              children: g.jsx("svg", {
                width: "13",

                height: "15",

                viewBox: "0 0 13 15",

                fill: "none",

                xmlns: "http://www.w3.org/2000/svg",

                children: g.jsx("path", {
                  fillRule: "evenodd",

                  clipRule: "evenodd",

                  fill: "#EFEFEF",
                }),
              }),
            }),

            t
              ? g.jsxs("button", {
                  type: "button",

                  className: mt.livePill,

                  children: [
                    g.jsx("svg", {
                      className: mt.liveDot,

                      width: "10",

                      height: "11",

                      viewBox: "0 0 10 11",

                      fill: "none",

                      xmlns: "http://www.w3.org/2000/svg",

                      children: g.jsx("circle", { cx: "5", cy: "5.5", r: "5" }),
                    }),

                    g.jsx("span", {
                      children: "[내 아이에게 일어나는 기괴 현상 대처 119]",
                    }),

                    g.jsx("div", {
                      className: mt.liveHover,

                      children:
                        "너무 자책하진 마세요. 어린 아이에게는 상상도 못할 야러 일들이 일어나니까요.",
                    }),
                  ],
                })
              : g.jsxs(St, {
                  children: [
                    g.jsx("svg", {
                      className: mt.offlineDot,

                      width: "10",

                      height: "11",

                      viewBox: "0 0 10 11",

                      fill: "none",

                      xmlns: "http://www.w3.org/2000/svg",

                      children: g.jsx("circle", { cx: "5", cy: "5.5", r: "5" }),
                    }),

                    g.jsx("span", { children: "[connecting]" }),
                  ],
                }),

            g.jsx(nh, {}),
          ],
        }),

        g.jsx("div", {
          className: mt.right,

          children: g.jsxs(It, {
            handleClick: () => r(!n),

            children: [e ? "Aud" : "Audio", " [", n ? "off" : "on", "]"],
          }),
        }),
      ],
    })
  );
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 하단 컨트롤 바 (Bottom Nav)]
 * UX 목적: 3D 책이 열려있을 때는 페이지 이동 번호(Pagination)를 제공
 * --------------------------------------------------------------------------- */
export function Lh() {
  const {
      pageIndex: t,
      setPageIndex: e,
      isOpen: n,
      setIsOpen: r,
      pageMeta: i,
    } = Tt(),
    [o, s] = y.useState(!1),
    l = y.useRef([]),
    u = y.useRef(null),
    f = y.useRef(null),
    h = y.useRef(100),
    c = y.useRef(100);
  return (
    y.useEffect(() => {
      // 1단계: snakeEnabled 체크 조건을 모두 삭제하고 순수 페이징 로직만 남깁니다.
      const p = (d) => {
        d.key === "Escape"
          ? (document.activeElement.blur(), r(!1))
          : d.key === "ArrowRight" ||
              d.key === "ArrowDown" ||
              d.key === "n" ||
              d.key === "k"
            ? d.shiftKey
              ? e(i.length - 1)
              : e((v) => Q(v + 1, 0, i.length - 1))
            : d.key === "ArrowLeft" ||
                d.key === "ArrowUp" ||
                d.key === "p" ||
                d.key === "j"
              ? d.shiftKey
                ? e(0)
                : e((v) => Q(v - 1, 0, i.length - 1))
              : (d.key === "m" || d.key === " ") &&
                (document.activeElement.blur(), r((v) => !v));
      };
      return (
        window.addEventListener("keydown", p),
        () => {
          window.removeEventListener("keydown", p);
        }
      );
    }, [r, e, i]),
    y.useEffect(() => {
      (o &&
        l.current.forEach((p, d) => {
          ((p.style.zIndex = `${l.current.length - d}`),
            (p.style.transform = `translateY(${-26.7 * d}px)`));
        }),
        n || s(!1));
    }, [o, t, n]),
    y.useEffect(() => {
      const p = u.current;
      return (
        p &&
          f.current &&
          ((h.current = p.offsetWidth),
          (c.current = f.current.offsetWidth),
          p.style.setProperty("--marqueeOffset", `${(c.current + 21) * -1}px`),
          (p.style.width = `${h.current + c.current}px`)),
        () => {
          p && ((p.style.animation = ""), (p.style.width = ""));
        }
      );
    }, [u, f, t, n]),
    g.jsxs("nav", {
      className: R.bottomNav,
      children: [
        n
          ? g.jsxs("div", {
              className: R.manualNav,
              children: [
                g.jsx(St, {
                  handleClick: () => {
                    e(t === 0 ? i.length - 1 : 0);
                  },
                  parentStyles: R.homePill,
                  children: t === 0 ? "↻" : "↺",
                }),
                g.jsx(It, {
                  parentStyles: R.openPill,
                  handleClick: () => e((p) => Q(p - 1, 0, i.length - 1)),
                  children: "[Prev]",
                }),
                g.jsx(St, {
                  parentStyles: R.pageTitlePill,
                  handleClick: () => {
                    s(!o);
                  },
                  children: g.jsxs("div", {
                    className: R.pageTitle,
                    ref: u,
                    children: [
                      g.jsx("span", {
                        className: R.marqueeItem,
                        ref: f,
                        children: i[t].title,
                      }),
                      " • ",
                      g.jsx("span", {
                        className: R.marqueeItem,
                        children: i[t].title,
                      }),
                      " • ",
                      g.jsx("span", {
                        className: R.marqueeItem,
                        children: i[t].title,
                      }),
                      " • ",
                      g.jsx("span", {
                        className: R.marqueeItem,
                        children: i[t].title,
                      }),
                      " • ",
                      g.jsx("span", {
                        className: R.marqueeItem,
                        children: i[t].title,
                      }),
                      " • ",
                      g.jsx("span", {
                        className: R.marqueeItem,
                        children: i[t].title,
                      }),
                      " • ",
                      g.jsx("span", {
                        className: R.marqueeItem,
                        children: i[t].title,
                      }),
                      " • ",
                      g.jsx("span", {
                        className: R.marqueeItem,
                        children: i[t].title,
                      }),
                      " • ",
                      g.jsx("span", {
                        className: R.marqueeItem,
                        children: i[t].title,
                      }),
                      " • ",
                      g.jsx("span", {
                        className: R.marqueeItem,
                        children: i[t].title,
                      }),
                    ],
                  }),
                }),
                g.jsx(It, {
                  handleClick: () => e((p) => Q(p + 1, 0, i.length - 1)),
                  children: "[Next]",
                }),
                g.jsxs(It, {
                  handleClick: () => r(!1),
                  children: [
                    g.jsx("span", {
                      className: R.closeDesktop,
                      children: "[close]",
                    }),
                    g.jsx("span", { className: R.closeMobile, children: "✕" }),
                  ],
                }),
                g.jsx("div", {
                  className: R.pageList,
                  children:
                    o &&
                    i.map((p, d) =>
                      g.jsx(
                        "div",
                        {
                          className: R.pageListPillContainer,
                          ref: (v) => {
                            v && (l.current[d] = v);
                          },
                          children: g.jsxs(St, {
                            handleClick: () => {
                              (e(d), s(!1));
                            },
                            style: {
                              backgroundColor: t === d ? "black" : "",
                              color: t === d ? "var(--color-light)" : "",
                            },
                            children: [t < 10 ? `0${d}` : d, ". ", p.title],
                          }),
                        },
                        p.title,
                      ),
                    ),
                }),
              ],
            })
          : g.jsxs("div", {
              className: R.defaultNav,
              children: [
                g.jsx("div", {
                  className: R.defaultNavLeft,
                  children: g.jsx("a", {
                    href: "",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "[Privacy]",
                  }),
                }),
                g.jsxs("div", {
                  className: R.defaultNavRight,
                  children: [
                    g.jsx(St, {
                      parentStyles: R.manualPill,
                      handleClick: () => r(!0),
                      children: g.jsx("span", { children: "[m] manual" }),
                    }),
                    g.jsx(It, {
                      parentStyles: R.openPill,
                      handleClick: () => r(!0),
                      children: g.jsx("span", { children: "[open]" }),
                    }),
                  ],
                }),
              ],
            }),
        g.jsxs("div", {
          className: R.infoContainer,
          children: [
            g.jsx(It, {
              children: g.jsx("span", {
                className: R.infoPill,
                children: g.jsx("svg", {
                  width: "6",
                  height: "11",
                  viewBox: "0 0 6 11",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: g.jsx("path", {
                    d: "M3.46875 0.5625V2.125H1.90625V0.5625H3.46875ZM4.25 9.15625H5.03125V10.7188H3.46875V9.9375H2.6875V9.15625H1.90625V5.25H0.34375V3.6875H3.46875V8.375H4.25V9.15625Z",
                  }),
                }),
              }),
            }),
            g.jsxs("div", {
              className: R.infoWindow,
              children: [
                g.jsx("div", {
                  className: R.infoRow,
                  children:
                    "제시된 모든 지침에 따라 철저하게 관리하였음에도 불구하고,",
                }),
                g.jsx("div", {
                  className: R.infoRow,
                  children:
                    "피보호자가 육안으로 식별 가능한 수준의 급격한 신체적 변형을 보이거나,",
                }),
                g.jsx("div", {
                  className: R.infoRow,
                  children:
                    "기존의 언어 체계로는 해석이 불가능한 발성 및 이상 행동을 지속할 경우,",
                }),
                g.jsx("div", {
                  className: R.infoRow,
                  children:
                    "보호자는 즉각 모든 시도를 중단하고 해당 구역에서 이탈하십시오. ",
                }),

                g.jsx("div", {
                  className: R.infoRow,
                  children:
                    "이후 지체 없이 아래의 긴급 대응 센터로 연락하여 상황을 보고하고 ",
                }),

                g.jsx("div", {
                  className: R.infoRow,
                  children: "별도의 격리 및 수습 절차가 완료될 때까지",
                }),
                g.jsx("div", {
                  className: R.infoRow,
                  children: "외부와의 접촉을 엄격히 금해주시기 바랍니다",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}

export function Ah({ onLiveChange: t }) {
  const e = y.useRef(null);

  return (
    y.useEffect(() => {
      if (!e.current) return;

      const n = (r) => {
        if (e.current)
          if (window.innerWidth / window.innerHeight < 1) {
            const i = e.current.offsetWidth - window.innerWidth;

            e.current.style.transform = `translateX(${(-r.clientX / window.innerWidth) * i}px)`;
          } else {
            e.current.style.transform = "none";
          }
      };

      return (
        window.addEventListener("mousemove", n),
        () => {
          window.removeEventListener("mousemove", n);
        }
      );
    }, []),
    y.useEffect(() => {
      t(!0);
    }, [t]),
    y.useEffect(() => {
      e.current &&
        ((e.current.style.opacity = "1"),
        (e.current.style.filter = "none"),
        (e.current.style.transform = "none"));
    }, []),
    g.jsx("div", {
      className: jh.videoContainer,
      ref: e,

      style: {
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
      },

      children: g.jsx("div", {
        children: [
          g.jsx("video", {
            src: "./public/video/comp_1.mp4",

            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,

            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          }),
        ],
      }),
    })
  );
}

// 1단계: Bd, Ud, qd (SNEK 게임, 바운서 애니메이션, 콘솔) 컴포넌트는 전시와 무관하므로 완전히 삭제했습니다.

/* ---------------------------------------------------------------------------
 * [기능 분류: 3D 모델 기반 툴팁 및 히트박스(Hotspot) 엔진]
 * UX 목적: 3D 책의 특정 위치에 마우스를 올렸을 때 관련 정보 툴팁을 띄우고,
 * 마우스 좌표에 맞춰 툴팁 패널이 입체적으로 회전(Tilt)하는 효과를 제공합니다.
 * --------------------------------------------------------------------------- */
const Zh = 26.8,
  Yh = 2.6,
  Go = 0.8,
  Wo = 2.55,
  K = Zh + Yh,
  X = 19,
  ft = K + Go + X + Wo;

// 하드코딩된 페이지별 툴팁 위치 및 크기 메타데이터 (수치 및 변수 조작 없음)
const Jt = [
  {
    //숨
    className: "transactionVolume",
    pageNumber: 0,
    width: X - 12,
    height: 9,
    top: 27.5,
    left: K + 7,
  },
  {
    //관절
    className: "totalTransactions",
    pageNumber: 6,
    left: K + 17,
    top: 21,
    width: X - 12,
    height: 9,
  },
  {
    //어른 목소리
    className: "transactionsPerMinute",
    pageNumber: 12,
    left: K + 7,
    top: 36.2,
    width: X - 13.1,
    height: 13.57,
  },
  {
    //혼잣말
    className: "topCurrencyVolumes",
    pageNumber: 0,
    width: X - 12,
    top: 50,
    height: 12,
    left: K + 9,
  },
  {
    //수분중독
    className: "timeSavedWithLink",
    pageNumber: 0,
    width: X - 12,
    top: 47,
    height: 12,
    left: K + 16,
  },
  {
    //머리카락
    className: "fraudDetector",
    pageNumber: 8,
    width: X - 12,
    top: 59,
    height: 9,
    left: K + 20,
  },
  {
    //반려견
    className: "stripeTaxCalculations",
    pageNumber: 0,
    width: X - 12,
    top: 14.3,
    height: 11.6,
    left: K + 23.2,
  },
  {
    //공놀이
    className: "totalARRBilling",
    pageNumber: 0,
    width: 7,
    left: K + 17,
    height: 16,
    top: 68,
    color: "#f6ff00",
  },
  {
    //야경증
    className: "bestDay",
    pageNumber: 10,
    width: X - 11,
    height: 10,
    top: 29,
    left: ft + 0.2,
    color: "#ff0000",
  },
  {
    //몽유병
    className: "crossBorder",
    pageNumber: 0,
    width: X - 14,
    height: 13,
    top: 26,
    left: ft + 10.7,
    color: "#ff0000",
  },
  {
    //옷장
    className: "uniquePaymentMethods",
    pageNumber: 0,
    left: ft + 7.8,
    top: 14.3,
    width: X - 11,
    height: 11.5,
    color: "#11ff00",
  },
  {
    //머리카락
    className: "topSellingCities",
    pageNumber: 8,
    width: X - 8,
    height: 13,
    top: 50,
    left: ft + 4.6,
    color: "#11ff00",
  },
  {
    //유치
    className: "apiUtilization",
    pageNumber: 17,
    width: X - 13,
    height: 12,
    top: 79.6,
    left: ft + 4,
  },

  {
    //낯선사람
    className: "apiUptime",
    pageNumber: 0,
    width: 9.1,
    height: 17,
    top: 80.6,
    left: ft + X - 38.05,
  },
  {
    //숨바꼭질
    className: "manual",
    pageNumber: 0,
    width: 7,
    height: 14,
    top: 82,
    left: K + 19,
    color: "#11ff00",
  },

  /*{
    className: "shop",
    pageNumber: 21,
    width: 8,
    height: 11,
    top: 4,
    left: K + 9.4,
    tooltipTop: 100,
  },*/
  //링크

  {
    className: "books1",
    linkNumber: "01",
    width: 4.9,
    height: 11,
    top: 39,
    left: K + 33.1,
    tooltipTop: 100,
    isNoZoom: !1,
    title: "창고로 향하는 문",
    description: "너무 깊게 들여다보지는 마세요.",
  },
  {
    className: "화장실",
    linkNumber: "02",
    width: 9,
    height: 12,
    top: 68,
    left: K + 7,
    tooltipTop: 100,
    isNoZoom: !0,
    title: "화장실의 비밀!",
    description: "화장실에는 과연 변가와 똥만 있을까요?",
    url: "https://blog.naver.com/qordb6712/221691474773",
  },
  /* {
    className: "books2",
    linkNumber: "03",
    width: 2.9,
    height: 17.6,
    top: 69.5,
    left: ft + 23.2,
    isNoZoom: !0,
    title: "Stripe Press Books",
    description: "",
    url: "",
    color: "#11ff00",
  },
  {
    className: "pca",
    linkNumber: "04",
    width: 1,
    height: 16,
    top: 70.8,
    left: ft + 24.8,
    isNoZoom: !0,
    title: "나중에넣음",
    description: "나중에넣음",
  },
  {
    className: "console",
    linkNumber: "02",
    forceRight: !0,
    width: 5,
    height: 34,
    top: 52.7,
    left: K - 6.5,
    isNoZoom: !0,
    title: "나중에넣음",
    description: "나중에넣음",
  },*/
];

// 수동 드래그 및 패닝 영역 오버레이
export function Ih({
  handlePan: t,
  handlePanStart: e,
  handlePanEnd: n,
  handleMouseEnter: r,
  handleMouseLeave: i,
}) {
  const { pageIndex: a, setPageIndex: o, pageMeta: s } = Tt(),
    [l, u] = y.useState(!1),
    f = y.useRef(null),
    h = () => {
      (l ||
        (a === s.length - 1
          ? o((d) => d - 1)
          : o((d) => Q(d + 1, 0, s.length - 1))),
        u(!1));
    },
    c = () => {
      u(!0);
    },
    p = () => {
      u(!1);
    };
  y.useEffect(() => {
    f.current &&
      (a === s.length - 1
        ? (f.current.style.cursor = "w-resize")
        : (f.current.style.cursor = ""));
  }, [a, s]);
  return g.jsx("div", {
    className: fi.manualOverlay,
    onMouseUp: h,
    onMouseMove: c,
    onMouseDown: p,
    onMouseEnter: r,
    onMouseLeave: i,
    children: g.jsx(qo.div, {
      ref: f,
      className: fi.dragArea,
      onPan: t,
      onPanStart: e,
      onPanEnd: n,
    }),
  });
}

// 3단계: 툴팁 렌더링 및 클릭 이벤트 전면 재구축
export function Kh({ setMachineRects: t }) {
  const {
      pageIndex: e,
      setPageIndex: n,
      isOpen: r,
      setIsOpen: i,
      pageMeta: a,
    } = Tt(),
    [s, l] = y.useState(!1),
    u = y.useRef(null),
    f = y.useRef(null);

  y.useEffect(() => {
    if (!u.current) return;
    const c = u.current,
      p = () => {
        c.querySelectorAll(".hitArea").forEach((d, v) => {
          var L, V;
          const m = d.getBoundingClientRect();
          if (
            !((V = (L = d.parentElement) == null ? void 0 : L.parentElement) ==
            null
              ? void 0
              : V.parentElement)
          )
            return;
          const w = m.left + m.width / 2,
            b = m.top + m.height / 2,
            { width: T } = m,
            { height: C } = m;
          t((A) => {
            const j = [...A];
            return ((j[v] = { x: w, y: b, width: T, height: C }), j);
          });
        });
      };
    return (
      document.documentElement.clientWidth /
        document.documentElement.clientHeight <
        1 && window.addEventListener("resize", p),
      p(),
      () => {
        window.removeEventListener("resize", p);
      }
    );
  }, [t]);

  y.useEffect(() => {
    if (!u.current) return;
    const c = u.current,
      p = (d, v) => {
        if (!d.currentTarget) return;
        const m = d.currentTarget.querySelector(".tooltip"),
          x = d.currentTarget.querySelector(".line");
        if (!m || !x) return;
        const w = d.currentTarget,
          b = w.getBoundingClientRect(),
          T = d.clientX - b.left - b.width / 2,
          C = d.clientY - b.top - b.height / 2,
          L = (C / b.height) * 10,
          V = (T / b.width) * 10,
          A = parseInt(w.style.left, 10) < 50 && !Jt[v].forceRight,
          I = 0.75 - T * (A ? 0.001 : -0.001),
          q = w.style.left && A ? (L - V - 30) * -1 : L - V * -1 - 30,
          F = C * 0.01,
          W = T * 0.01;
        (x.style.setProperty("--lineRotation", `${q}deg`),
          x.style.setProperty("--lineScaleX", `${I}`),
          (m.style.transform = `rotateX(${L * -1}deg) rotateY(${V}deg) translateX(${W}vw) translateY(${F}vw) translateZ(2.5vw)`));
      };
    return (
      c == null ||
        c.querySelectorAll(".hitArea").forEach((d, v) => {
          const m = (x) => p(x, v);
          d.addEventListener("mousemove", m);
        }),
      () => {
        c == null ||
          c.querySelectorAll(".hitArea").forEach((d, v) => {
            const m = (x) => p(x, v);
            d.removeEventListener("mousemove", m);
          });
      }
    );
  }, []);

  y.useEffect(() => {
    var c;
    ((c = u.current) == null ||
      c.querySelectorAll(".hitArea").forEach((p) => {
        const d = p.querySelector(".tooltip");
        d.style.opacity = r ? "0" : "1";
        const v = p.querySelector(".line");
        v.style.opacity = r ? "0" : "1";
      }),
      r ? l(!1) : document.activeElement.blur());
  }, [r]);

  y.useEffect(() => {
    const c = (p) => {
      (p.key === "t" && l((d) => !d), p.key === "Escape" && l(!1));
    };
    return (
      window.addEventListener("keyup", c),
      () => {
        window.removeEventListener("keyup", c);
      }
    );
  }, []);

  y.useEffect(() => {
    var c;
    r &&
      ((c = u.current) == null ||
        c.querySelectorAll(".hitArea").forEach((p, d) => {
          Jt[d].pageNumber === e && p.focus();
        }));
  }, [e, r]);

  y.useEffect(() => {
    var c;
    (c = u.current) == null ||
      c.querySelectorAll(".hitArea").forEach((p) => {
        ((p.style.opacity = s ? "1" : ""), (p.style.filter = s ? "none" : ""));
        const d = p.querySelector(".tooltip");
        d.style.opacity = s ? "1" : "";
        const v = p.querySelector(".line");
        v.style.opacity = s ? "1" : "";
      });
  }, [s]);

  return g.jsx("div", {
    className: D.machineOverlay,
    onClick: () => i(!1),
    children: g.jsx("div", {
      className: D.hitAreas,
      ref: u,
      children: Jt.map((c) => {
        var p, d;
        return g.jsxs(
          "button",
          {
            type: "button",
            className: `hitArea ${Ct(D.hitArea, D[c.className], D[c.left && c.left < 50 && !c.forceRight ? "hitArea--left" : "hitArea--right"])}`,
            style: {
              top: `${c.top}%`,
              left: `${c.left}%`,
              width: `${c.width}%`,
              height: `${c.height}%`,
              borderColor: c.color,
            },

            // 3단계 핵심 수정: 더미 태그와 콘솔 우회 로직을 삭제하고 명확하게 분기 처리합니다.
            onClick: (v) => {
              v.stopPropagation();
              if (c.url) {
                // 타입 B (외부 링크용): url 값이 존재하면 즉시 새 창으로 엽니다.
                window.open(c.url, "_blank", "noopener,noreferrer");
              } else if (c.pageNumber !== void 0) {
                // 타입 A (페이지 이동용): pageNumber가 존재하면 해당 페이지로 이동합니다.
                if (e === c.pageNumber) {
                  i((m) => !m);
                } else {
                  n(c.pageNumber);
                  i(!0);
                }
              }
            },
            children: [
              // 3단계 핵심 수정: 중복으로 선언되었던 허수아비 <a> 태그를 모두 걷어냈습니다.

              g.jsx("div", {
                className: Ct("line", D.line),
                style: c.tooltipTop ? { top: "4vw" } : {},
              }),

              g.jsxs("div", {
                className: Ct("tooltip", D.tooltip),
                style: c.tooltipTop ? { top: "0px" } : {},
                ref: f,
                children: [
                  g.jsxs("div", {
                    className: D.tooltipCorners,
                    children: [
                      g.jsx("div", { className: D.tooltipCorner }),
                      g.jsx("div", { className: D.tooltipCorner }),
                      g.jsx("div", { className: D.tooltipCorner }),
                      g.jsx("div", { className: D.tooltipCorner }),
                    ],
                  }),

                  c.pageNumber !== void 0
                    ? g.jsxs(g.Fragment, {
                        children: [
                          g.jsxs("div", {
                            className: D.tooltipHeader,
                            children: [
                              g.jsxs("div", {
                                className: D.fig,
                                children: [
                                  "Page",
                                  " ",
                                  g.jsx("span", {
                                    className: D.figPill,
                                    children:
                                      c.pageNumber < 10
                                        ? `0${c.pageNumber}`
                                        : c.pageNumber,
                                  }),
                                ],
                              }),
                              " ",
                              g.jsx("div", {
                                children:
                                  (p = a[c.pageNumber]) == null
                                    ? void 0
                                    : p.title,
                              }),
                            ],
                          }),
                          g.jsx("div", { className: D.tooltipBody }),
                          g.jsx("div", {
                            className: D.tooltipFooter,
                            children:
                              (d = a[c.pageNumber]) == null
                                ? void 0
                                : d.textContent,
                          }),
                        ],
                      })
                    : g.jsxs(g.Fragment, {
                        children: [
                          g.jsxs("div", {
                            className: D.tooltipHeader,
                            children: [
                              g.jsxs("div", {
                                className: D.fig,
                                children: [
                                  "Link",
                                  " ",
                                  g.jsx("span", {
                                    className: D.figPill,
                                    children: c.linkNumber,
                                  }),
                                ],
                              }),
                              " ",
                              g.jsx("div", { children: c.title }),
                            ],
                          }),
                          g.jsx("div", {
                            className: D.tooltipFooter,
                            children: c.description,
                          }),
                        ],
                      }),
                ],
              }),
            ],
          },
          c.className,
        );
      }),
    }),
  });
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 글로벌 카메라 줌/패닝 래퍼 (Wrapper)]
 * --------------------------------------------------------------------------- */
export function Xh({
  children: t,
  handlePan: e,
  handlePanStart: n,
  handlePanEnd: r,
  handleMouseEnter: i,
  handleMouseLeave: a,
}) {
  const [o, s] = y.useState(!1),
    [l, u] = y.useState([]),
    f = y.useRef(null),
    { pageIndex: h, isOpen: c } = Tt(),
    p = y.useRef(null),
    d = y.useRef(null),
    [v, m] = y.useState(!1),
    x = y.useRef({ x: 0, y: 0, scale: 1, manualWidth: 0 });

  y.useEffect(() => {
    o && d.current
      ? (d.current.style.opacity = "1")
      : document.body.classList.remove("isLive");
  }, [o]);

  y.useEffect(() => {
    if (!p.current || !f.current || l.length === 0 || v) return;

    let w = Jt.findIndex((F) => F.pageNumber === h);
    w === -1 && (w = 0);

    const b = !Jt[w].isNoZoom,
      T = c ? window.innerHeight * 0.5 : 0,
      C = l[w];
    if (!C) return;

    const L = c && b ? window.innerWidth / 2 - C.x : 0;

    const V =
      c && b
        ? Math.min(2, Math.max(1, ((window.innerWidth - T) / C.width) * 0.845))
        : 1;

    let A = 0;
    C.height > window.innerHeight &&
      c &&
      b &&
      (A = window.innerHeight - C.height);

    let j = 0;
    C.height < window.innerHeight &&
      c &&
      b &&
      (j = (window.innerHeight - C.height) / -2);

    const I =
      c && b ? Math.max(A, Math.min(j, window.innerHeight / 2 - C.y)) : 0;

    const q = `${C.x}px ${C.y}px`;

    ((p.current.style.transformOrigin = q),
      (x.current = { x: L, y: I, scale: V, manualWidth: T }),
      (p.current.style.transform = `translate(${L}px, ${I}px) scale(${V})`),
      (f.current.style.transform = `translateX(${T * -0.5}px)`));
  }, [c, h, l, v]);

  y.useEffect(() => {
    const w = () => {
      m(window.innerWidth < window.innerHeight);
    };
    return (
      w(),
      window.addEventListener("resize", w),
      () => {
        window.removeEventListener("resize", w);
      }
    );
  }, []);

  return g.jsxs("div", {
    className: un.ui,
    ref: d,
    children: [
      g.jsx(ph, { isLive: o, isSmallScreen: v }),

      g.jsx(Lh, {}),

      g.jsx("div", {
        className: un.machineTranslate,
        ref: f,
        children: g.jsxs("div", {
          className: un.machineContainer,
          ref: p,
          children: [
            g.jsx(Ah, { onLiveChange: s }),

            g.jsx(Kh, { setMachineRects: u }),
          ],
        }),
      }),

      c
        ? g.jsx(Ih, {
            handlePan: e,
            handlePanStart: n,
            handlePanEnd: r,
            handleMouseEnter: i,
            handleMouseLeave: a,
          })
        : null,

      t,
    ],
  });
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 최종 애플리케이션 진입점 및 렌더링 래퍼]
 * --------------------------------------------------------------------------- */
export function ap() {
  const t = y.useRef(),
    e = (o, s) => {
      t.current.handlePan(s.delta.x, 1 - s.point.y / window.innerHeight);
    },
    n = y.useCallback((o, s) => {
      t.current.handlePanStart(s.offset.x);
    }, []),
    r = y.useCallback(() => {
      t.current.handlePanEnd();
    }, []),
    i = y.useCallback(() => {
      t.current.handleMouseEnter();
    }, []),
    a = y.useCallback(() => {
      t.current.handleMouseLeave();
    }, []);
  return g.jsx(Xh, {
    handlePan: e,
    handlePanStart: n,
    handlePanEnd: r,
    handleMouseEnter: i,
    handleMouseLeave: a,
    children: g.jsx(op, { manual: t }),
  });
}

export const sp = () => {
  const { viewed: t } = va();
  y.useEffect(() => {
    t("home-page-viewed");
  }, [t]);
  return g.jsxs(g.Fragment, {
    children: [g.jsx(Zd, { children: g.jsx(ap, {}) }), g.jsx(Pa, {})],
  });
};

export function up() {
  return g.jsx(wa, { children: g.jsx(Ws, { children: g.jsx(sp, {}) }) });
}

// === [Vanilla JS 영역] 최종 React Root 마운트 ===
const lp = document.getElementById("react-root");
ga.render(g.jsx(up, {}), lp);

export function qd() {
  return null;
}
