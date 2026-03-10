/* ===========================================================================
 * [기능 분류: 초기 부팅 시퀀스 및 환경 보안 (Loader.js)]
 * 역할: 사용자가 사이트에 처음 접속했을 때 3D 리소스가 로드되는 동안 보여지는
 * 레트로 터미널 스타일의 부팅 애니메이션과, 프로덕션 환경의 에러 트래킹을 담당합니다.
 * =========================================================================== */

// === [React.js & 외부 모듈 로드 시작] ===
import { j as g, O as Ko, a as y } from "./three.module-b6rmv7il.js";
import { Tt, U, Ct, ln, qd } from "./Main.js"; // Main.js의 전역 상태, 스타일, UI 참조
// === [React.js & 외부 모듈 로드 끝] ===

// === [Vanilla JS 영역] 순수 자바스크립트 상태 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 에러 트래킹 (Error Tracking)]
 * 역할: 현재 접속 환경(production vs qa)을 판단하고, Sentry 기반의
 * 클라이언트 런타임 에러 수집 시스템을 초기화합니다.
 * --------------------------------------------------------------------------- */
const ya = "production";
function ba() {
  try {
    if ("production" === "production")
      return new URL(window.location.toString()).hostname.match(/^qa-/)
        ? "qa"
        : "production";
  } catch {
    return ya;
  }
}
const Ze = ba(),
  xa = {
    project: "bfcm_microsite_2024",
    service: "bfcm-microsite",
    errors: {
      projects: {
        bfcm_microsite_2024:
          Ze === "production"
            ? "https://3cac7d974a824faaa160f28c9cf541d2@errors.stripe.com/1404"
            : "https://90dd3f06ebfe4c219073196cd1afc057@qa-errors.stripe.com/964",
      },
      captureUnhandledErrors: !0,
      disabled: Ze === "development" || Ze === "test",
    },
    analytics: { disableCookies: !0 },
  };
// === [Vanilla JS 영역] 순수 자바스크립트 상태 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 에러 바운더리 래퍼 컴포넌트]
 * 역할: 최상위 앱을 Sentry Provider(Ko)로 감싸 발생할 수 있는 렌더링 에러를 포착합니다.
 * --------------------------------------------------------------------------- */
export function wa(t) {
  const { children: e } = t;
  return g.jsx(Ko, { ...xa, children: e });
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 자바스크립트 상태 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 레트로 화면 노이즈 스타일 맵핑]
 * 역할: 브라운관(CRT) 모니터 특유의 지지직거리는 잡음(Noise)과 떨림(Jitter)
 * 효과를 주기 위한 CSS 클래스명 해시 객체입니다.
 * --------------------------------------------------------------------------- */
const Sa = "_noise_11ikr_2",
  Ca = "_jitter_11ikr_1",
  Ta = { noise: Sa, jitter: Ca };
// === [Vanilla JS 영역] 순수 자바스크립트 상태 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 화면 노이즈 오버레이 컴포넌트]
 * 역할: 화면 전체에 노이즈 텍스처를 덮어씌워 레트로 터미널 분위기를 극대화합니다.
 * --------------------------------------------------------------------------- */
export function Pa() {
  return g.jsx("div", { className: Ta.noise });
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 리소스 프리로딩 대기 UI (Blinker)]
 * 역할: 3D 리소스 로딩 중 우측에 800ms 간격으로 깜빡이는(Blink) 인디케이터 렌더링.
 * (주의: 원본의 순수 4칸 공백 "    " 100% 보존 완료)
 * --------------------------------------------------------------------------- */
export function Ys({ blinkText: t, className: e }) {
  const [n, r] = y.useState(!0);
  return (
    y.useEffect(() => {
      const i = setInterval(() => {
        r((a) => !a);
      }, 800);
      return () => clearInterval(i);
    }, []),
    g.jsxs("span", {
      className: Ct(U.blinker, e),
      children: [
        "DATA CONNECTION [",
        n ? t : g.jsx(g.Fragment, { children: "    " }),
        "]",
      ],
    })
  );
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 자바스크립트 상태 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 터미널 부팅 연출용 ASCII 아트 및 텍스트 데이터]
 * 역할: 타이핑 효과로 한 줄씩 출력될 레트로 감성의 바이오스(BIOS) 텍스트.
 * (주의: <pre> 태그 렌더링을 위한 일반 스페이스바 띄어쓰기 간격 100% 보존 완료)
 * --------------------------------------------------------------------------- */

export const Gd = `

      ██████████████████████████████████████████████████████████████
      █ ----------------------------------------------------------  █
      █ [SYSTEM: ONLINE]                        [SECURE CONNECTION] █
      █                                                             █
      █                대한아동보호국 중앙 열람 시스템             █
      █              KOREA CHILD PROTECTION ARCHIVE                 █
      █                                                             █
      █  [!] UNAUTHORIZED ACCESS IS STRICTLY PROHIBITED.            █
      █                                                             █
      █ >>> ACCESS TERMINAL _                                       █
      █ ----------------------------------------------------------- █
      ██████████████████████████████████████████████████████████████

`,
  Wd = "\n\n긴급 지침 열람 전\n\n      주의 사항",
  $d = `
      [열람 전 주의 사ㅎ ㅏ ㅇ]

      본 웹사이트는 200█년 당시 초보 부모들에게 널리 공유되던 
      평범한 '온라인 육아 정보 및 양육 지침 포털'의 원본 서버를 복구한 공간입니다.

      당시 이곳에 게재된 특정 [아동 행동 진단법]과 [수면 교육 영상]을 열람한 
      수백 명의 보호자들이 원인 불명의 시력 상실, 심인성 발작,
      그리고 자신의 아이를 다른 무언가로 인식하는 심각한 인지 왜곡을 일으켜
      정신 병동에 집단 수용된 끔찍한 이력이 존재합니다.



      현재 대한아동보호국에서 치명적인 위해성 텍스트를 1차적으로 차단하였으나,
      열람 중 화면 속 삽화가 당신과 눈을 맞추거나, 
      안내서의 내용이 █████████████ 는 지시로 읽히기 시작한다면
      즉시 모니터에서 눈을 돌리고 전시장을 나가십시오.


      보호자의 판단 오류로 발생하는 비극에 대해 본 기관은 책임지지 않습니다.

`;

// === [Vanilla JS 영역] 순수 자바스크립트 상태 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 메인 터미널 부팅 연출(Boot Sequence) 컴포넌트]
 * 역할: 사용자가 사이트 진입 시 50ms 주기로 ASCII 문자를 한 줄씩 잘라내어(slice)
 * 타이핑되는 애니메이션을 구현하고, 완료 시 3D 캔버스 페이드인을 트리거합니다.
 * --------------------------------------------------------------------------- */
export function Zd({ children: t, showFallback: e = !1 }) {
  const { override: n } = Tt(),
    [r, i] = y.useState(!1),
    [a, o] = y.useState(0),
    s = y.useRef(),
    //지속시간

    l = 5e3,
    u = 100;
  y.useEffect(
    () => (
      (s.current = setInterval(() => {
        a <= l / u
          ? o((c) => c + 1)
          : (setTimeout(() => {
              i(!0);
            }, 2e3),
            clearInterval(s.current));
      }, u)),
      () => {
        clearInterval(s.current);
      }
    ),
    [a],
  );
  const f = y.useCallback(
      (c, p) =>
        p > a
          ? ""
          : c
              .split(
                `
`,
              )
              .slice(0, a - p).join(`
`),
      [a],
    ),
    h = y.useMemo(() => a < l / u, [a]);
  return g.jsxs(g.Fragment, {
    children: [
      h
        ? null
        : g.jsx("div", {
            className: ln(U.stream, { streamShow: !h && !n }),
            children: t,
          }),
      g.jsx("div", {
        className: ln(U.background, {
          backgroundFallback: e,
          backgroundFade: !h && !n,
        }),
      }),
      g.jsx("div", {
        className: ln(U.container, {
          containerFallback: e,
          containerFade: !h && !n,
        }),
        children: g.jsx("div", {
          className: U.inner,
          children: g.jsxs("div", {
            className: U.grid,
            children: [
              g.jsx("pre", { className: U.logoMark, children: f(Gd, 0) }),
              g.jsx("pre", { className: U.logoMeta, children: f(Wd, 10) }),
              n ? g.jsx(qd, {}) : null,
              h && !r
                ? g.jsx("pre", { className: U.bootText, children: f($d, 15) })
                : null,
            ],
          }),
        }),
      }),
    ],
  });
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===
