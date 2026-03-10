// part 1

/* ---------------------------------------------------------------------------
 * [기능 분류: 사이트 모션 및 반응형 엔진 (MotionInteraction.js)]
 * 역할: 브라우저의 마우스/터치 제스처를 감지하고, 화면 크기 변화에 맞춰
 * 3D 책 및 2D UI 요소들의 위치를 부드럽게 조정(FLIP 프로젝션)하는
 * 물리 애니메이션 엔진입니다.
 * * [에셋 중앙화 알림]
 * 본 파일은 순수 수학 연산 및 DOM/상태 제어 로직으로만 구성되어 있으므로,
 * 외부 이미지(.png)나 오디오(.mp3) 파일을 로드하는 구문이 존재하지 않습니다.
 * --------------------------------------------------------------------------- */

// === [React.js & Three.js 스택 영역] 외부 모듈 의존성 로드 ===
import { j as g, a as y, d as Xo, R as An } from "./three.module-b6rmv7il.js";

// === [Vanilla JS 스택 영역] 순수 자바스크립트 엔진 및 코어 로직 시작 ===

/* ---------------------------------------------------------------------------
 * [기능 분류: 빌드 도구 헬퍼 및 폴리필 (Polyfills)]
 * 역할: 최신 자바스크립트 문법(클래스 상속, 객체 병합 등)을 구형 브라우저에서도
 * 깨짐 없이 실행할 수 있도록 변환해 주는 기본 유틸리티 함수들입니다.
 * --------------------------------------------------------------------------- */
var hn = function (t, e) {
  return (
    (hn =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var i in r)
          Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
      }),
    hn(t, e)
  );
};
function vi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null",
    );
  hn(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype =
    e === null ? Object.create(e) : ((n.prototype = e.prototype), new n());
}
var S = function () {
  return (
    (S =
      Object.assign ||
      function (e) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        }
        return e;
      }),
    S.apply(this, arguments)
  );
};
function nt(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      e.indexOf(r) < 0 &&
      (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
        (n[r[i]] = t[r[i]]);
  return n;
}
function H(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t),
    i,
    a = [],
    o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function lt(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, a; r < i; r++)
      (a || !(r in e)) &&
        (a || (a = Array.prototype.slice.call(e, 0, r)), (a[r] = e[r]));
  return t.concat(a || Array.prototype.slice.call(e));
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 모션 기능(Feature) 식별 및 매핑]
 * 역할: 웹사이트 요소가 반응해야 할 사용자의 행동(호버, 탭, 드래그 등)과
 * 애니메이션 속성들을 카테고리별로 묶어 'te' 객체에 정의합니다.
 * --------------------------------------------------------------------------- */
var ll = {},
  ul = "production",
  mi = typeof Xo.process > "u" || ll === void 0 ? ul : "production",
  ct = function (t) {
    return {
      isEnabled: function (e) {
        return t.some(function (n) {
          return !!e[n];
        });
      },
    };
  },
  te = {
    measureLayout: ct(["layout", "layoutId", "drag"]),
    animation: ct([
      "animate",
      "exit",
      "variants",
      "whileHover",
      "whileTap",
      "whileFocus",
      "whileDrag",
      "whileInView",
    ]),
    exit: ct(["exit"]),
    drag: ct(["drag", "dragControls"]),
    focus: ct(["whileFocus"]),
    hover: ct(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: ct(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: ct(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
    inView: ct(["whileInView", "onViewportEnter", "onViewportLeave"]),
  };
function cl(t) {
  for (var e in t)
    t[e] !== null &&
      (e === "projectionNodeConstructor"
        ? (te.projectionNodeConstructor = t[e])
        : (te[e].Component = t[e]));
}
var ee = function () {},
  // === [Vanilla JS 스택 영역] 순수 자바스크립트 엔진 및 코어 로직 끝 ===

  // === [React.js 스택 영역] UI 상태 관리 및 렌더링 파이프라인 시작 ===

  /* ---------------------------------------------------------------------------
   * [기능 분류: 모션 기능 동적 주입기 (Feature Injector)]
   * 역할: React 트리를 순회하며, 각 UI 컴포넌트가 요구하는 모션 속성(예: whileHover)에
   * 맞는 기능 컨트롤러를 동적으로 찾아서 붙여줍니다.
   * --------------------------------------------------------------------------- */
  gi = y.createContext({ strict: !1 }),
  yi = Object.keys(te),
  fl = yi.length;
function dl(t, e, n) {
  var r = [],
    i = y.useContext(gi);
  if (!e) return null;
  mi !== "production" && n && i.strict;
  for (var a = 0; a < fl; a++) {
    var o = yi[a],
      s = te[o],
      l = s.isEnabled,
      u = s.Component;
    l(t) &&
      u &&
      r.push(y.createElement(u, S({ key: o }, t, { visualElement: e })));
  }
  return r;
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 웹 접근성(A11y) 및 전역 모션 상태 관리]
 * 역할: 사용자의 OS 환경 설정(예: '애니메이션 줄이기' 옵션)을 감지하여
 * 웹사이트 전체의 모션 동작 여부를 제어하는 Context를 구성합니다.
 * --------------------------------------------------------------------------- */
var se = y.createContext({
    transformPagePoint: function (t) {
      return t;
    },
    isStatic: !1,
    reducedMotion: "never",
  }),
  ke = y.createContext({});
function hl() {
  return y.useContext(ke).visualElement;
}
var He = y.createContext(null),
  Ft = typeof document < "u",
  ir = Ft ? y.useLayoutEffect : y.useEffect,
  pn = { current: null },
  bi = !1;
function pl() {
  if (((bi = !0), !!Ft))
    if (window.matchMedia) {
      var t = window.matchMedia("(prefers-reduced-motion)"),
        e = function () {
          return (pn.current = t.matches);
        };
      (t.addListener(e), e());
    } else pn.current = !1;
}
function vl() {
  !bi && pl();
  var t = H(y.useState(pn.current), 1),
    e = t[0];
  return e;
}
function ml() {
  var t = vl(),
    e = y.useContext(se).reducedMotion;
  return e === "never" ? !1 : e === "always" ? !0 : t;
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 시각적 엘리먼트(VisualElement) 렌더링 동기화]
 * 역할: 컴포넌트가 화면에 마운트(Mount)될 때 애니메이션 엔진을 연결하고,
 * 생명주기(useEffect)에 맞춰 애니메이션 시작과 해제(Unmount)를 조율합니다.
 * --------------------------------------------------------------------------- */
function gl(t, e, n, r) {
  var i = y.useContext(gi),
    a = hl(),
    o = y.useContext(He),
    s = ml(),
    l = y.useRef(void 0);
  (r || (r = i.renderer),
    !l.current &&
      r &&
      (l.current = r(t, {
        visualState: e,
        parent: a,
        props: n,
        presenceId: o == null ? void 0 : o.id,
        blockInitialAnimation: (o == null ? void 0 : o.initial) === !1,
        shouldReduceMotion: s,
      })));
  var u = l.current;
  return (
    ir(function () {
      u == null || u.syncRender();
    }),
    y.useEffect(function () {
      var f;
      (f = u == null ? void 0 : u.animationState) === null ||
        f === void 0 ||
        f.animateChanges();
    }),
    ir(function () {
      return function () {
        return u == null ? void 0 : u.notifyUnmount();
      };
    }, []),
    u
  );
}
// === [React.js 스택 영역] UI 상태 관리 및 렌더링 파이프라인 끝 ===

// === [Vanilla JS 스택 영역] 순수 자바스크립트 엔진 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 객체 타입 검사기]
 * 역할: 전달받은 값이 React의 Ref 객체(current 속성을 가짐)인지 확인합니다.
 * --------------------------------------------------------------------------- */
function Ot(t) {
  return (
    typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
// === [Vanilla JS 스택 영역] 순수 자바스크립트 엔진 및 코어 로직 끝 ===

// === [React.js 스택 영역] UI 상태 관리 및 렌더링 파이프라인 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: React DOM 참조(Ref) 바인딩 훅]
 * 역할: 실제 HTML/SVG 요소가 렌더링될 때 해당 요소의 메모리 주소를
 * 애니메이션 엔진(VisualElement)에 연결(Mount)합니다.
 * --------------------------------------------------------------------------- */
function yl(t, e, n) {
  return y.useCallback(
    function (r) {
      var i;
      (r && ((i = t.mount) === null || i === void 0 || i.call(t, r)),
        e && (r ? e.mount(r) : e.unmount()),
        n && (typeof n == "function" ? n(r) : Ot(n) && (n.current = r)));
    },
    [e],
  );
}
// === [React.js 스택 영역] UI 상태 관리 및 렌더링 파이프라인 끝 ===

// === [Vanilla JS 스택 영역] 순수 자바스크립트 엔진 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 애니메이션 상태값 추출기]
 * 역할: 컴포넌트의 Props 중에서 애니메이션 속성(x, y, opacity 등)의
 * 현재 값(Value)과 속도(Velocity)를 수학적으로 계산하여 뽑아냅니다.
 * --------------------------------------------------------------------------- */
function xi(t) {
  return Array.isArray(t);
}
function ot(t) {
  return typeof t == "string" || xi(t);
}
function bl(t) {
  var e = {};
  return (
    t.forEachValue(function (n, r) {
      return (e[r] = n.get());
    }),
    e
  );
}
function xl(t) {
  var e = {};
  return (
    t.forEachValue(function (n, r) {
      return (e[r] = n.getVelocity());
    }),
    e
  );
}
function wi(t, e, n, r, i) {
  var a;
  return (
    r === void 0 && (r = {}),
    i === void 0 && (i = {}),
    typeof e == "function" && (e = e(n ?? t.custom, r, i)),
    typeof e == "string" &&
      (e = (a = t.variants) === null || a === void 0 ? void 0 : a[e]),
    typeof e == "function" && (e = e(n ?? t.custom, r, i)),
    e
  );
}
function Fe(t, e, n) {
  var r = t.getProps();
  return wi(r, e, n ?? r.custom, bl(t), xl(t));
}
function Be(t) {
  var e;
  return (
    typeof ((e = t.animate) === null || e === void 0 ? void 0 : e.start) ==
      "function" ||
    ot(t.initial) ||
    ot(t.animate) ||
    ot(t.whileHover) ||
    ot(t.whileDrag) ||
    ot(t.whileTap) ||
    ot(t.whileFocus) ||
    ot(t.exit)
  );
}
function Si(t) {
  return !!(Be(t) || t.variants);
}
function wl(t, e) {
  if (Be(t)) {
    var n = t.initial,
      r = t.animate;
    return {
      initial: n === !1 || ot(n) ? n : void 0,
      animate: ot(r) ? r : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
// === [Vanilla JS 스택 영역] 순수 자바스크립트 엔진 및 코어 로직 끝 ===

// === [React.js 스택 영역] UI 상태 관리 및 렌더링 파이프라인 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 초기 애니메이션 상태 계산 (useMemo)]
 * 역할: 컴포넌트가 처음 그려질 때의 상태(initial)와 목표 상태(animate)를
 * 메모리에 캐싱하여 불필요한 재연산을 막습니다.
 * --------------------------------------------------------------------------- */
function Sl(t) {
  var e = wl(t, y.useContext(ke)),
    n = e.initial,
    r = e.animate;
  return y.useMemo(
    function () {
      return { initial: n, animate: r };
    },
    [or(n), or(r)],
  );
}
// === [React.js 스택 영역] UI 상태 관리 및 렌더링 파이프라인 끝 ===

// === [Vanilla JS 스택 영역] 순수 자바스크립트 엔진 및 코어 로직 시작 ===
function or(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
// === [Vanilla JS 스택 영역] 순수 자바스크립트 엔진 및 코어 로직 끝 ===

// === [React.js 스택 영역] UI 상태 관리 및 렌더링 파이프라인 시작 ===
function Bt(t) {
  var e = y.useRef(null);
  return (e.current === null && (e.current = t()), e.current);
}
// === [React.js 스택 영역] UI 상태 관리 및 렌더링 파이프라인 끝 ===

// === [Vanilla JS 스택 영역] 순수 자바스크립트 엔진 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 브라우저 창(Resize) 조절 애니메이션 방어벽]
 * 역할: 사용자가 브라우저 창 크기를 늘리거나 줄일 때, 요소들이 순간적으로
 * 튀는 현상을 막기 위해 애니메이션 갱신을 통제하는 전역 스위치입니다.
 * --------------------------------------------------------------------------- */
var Wt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Cl = 1;
// === [Vanilla JS 스택 영역] 순수 자바스크립트 엔진 및 코어 로직 끝 ===

// === [React.js 스택 영역] UI 상태 관리 및 렌더링 파이프라인 시작 ===
function Tl() {
  return Bt(function () {
    if (Wt.hasEverUpdated) return Cl++;
  });
}

/* ---------------------------------------------------------------------------
 * [기능 분류: FLIP 레이아웃 프로젝션 엔진 초기화]
 * 역할: 요소의 크기나 위치(레이아웃)가 바뀔 때, 부드럽게 이동하는 효과(FLIP)를
 * 만들기 위해 필요한 아이디(layoutId)와 스크롤/드래그 제약 조건을 설정합니다.
 * --------------------------------------------------------------------------- */
var Ci = y.createContext({}),
  Ti = y.createContext({});
function Pl(t, e, n, r) {
  var i,
    a = e.layoutId,
    o = e.layout,
    s = e.drag,
    l = e.dragConstraints,
    u = e.layoutScroll,
    f = y.useContext(Ti);
  !r ||
    !n ||
    (n != null && n.projection) ||
    ((n.projection = new r(
      t,
      n.getLatestValues(),
      (i = n.parent) === null || i === void 0 ? void 0 : i.projection,
    )),
    n.projection.setOptions({
      layoutId: a,
      layout: o,
      alwaysMeasureLayout: !!s || (l && Ot(l)),
      visualElement: n,
      scheduleRender: function () {
        return n.scheduleRender();
      },
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: f,
      layoutScroll: u,
    }));
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 모션 HOC(고차 컴포넌트) 팩토리]
 * 역할: 일반 HTML 태그(div, span)를 애니메이션이 가능한 모션 엘리먼트로
 * 변환하여 React 트리에 렌더링하는 중추 역할을 합니다.
 * --------------------------------------------------------------------------- */
var _l = (function (t) {
  vi(e, t);
  function e() {
    return (t !== null && t.apply(this, arguments)) || this;
  }
  return (
    (e.prototype.getSnapshotBeforeUpdate = function () {
      return (this.updateProps(), null);
    }),
    (e.prototype.componentDidUpdate = function () {}),
    (e.prototype.updateProps = function () {
      var n = this.props,
        r = n.visualElement,
        i = n.props;
      r && r.setProps(i);
    }),
    (e.prototype.render = function () {
      return this.props.children;
    }),
    e
  );
})(An.Component);
function El(t) {
  var e = t.preloadedFeatures,
    n = t.createVisualElement,
    r = t.projectionNodeConstructor,
    i = t.useRender,
    a = t.useVisualState,
    o = t.Component;
  e && cl(e);
  function s(l, u) {
    var f = Ml(l);
    l = S(S({}, l), { layoutId: f });
    var h = y.useContext(se),
      c = null,
      p = Sl(l),
      d = h.isStatic ? void 0 : Tl(),
      v = a(l, h.isStatic);
    return (
      !h.isStatic &&
        Ft &&
        ((p.visualElement = gl(o, v, S(S({}, h), l), n)),
        Pl(d, l, p.visualElement, r || te.projectionNodeConstructor),
        (c = dl(l, p.visualElement, e))),
      y.createElement(
        _l,
        { visualElement: p.visualElement, props: S(S({}, h), l) },
        c,
        y.createElement(
          ke.Provider,
          { value: p },
          i(o, l, d, yl(v, p.visualElement, u), v, h.isStatic, p.visualElement),
        ),
      )
    );
  }
  return y.forwardRef(s);
}
function Ml(t) {
  var e,
    n = t.layoutId,
    r = (e = y.useContext(Ci)) === null || e === void 0 ? void 0 : e.id;
  return r && n !== void 0 ? r + "-" + n : n;
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 컴포넌트 프록시 매퍼 (Proxy Mapper)]
 * 역할: 외부 파일에서 `qo.div`, `qo.span` 형식으로 모션 컴포넌트를 호출할 때,
 * 해당 태그 이름표를 가로채어 동적으로 팩토리(El) 함수를 연결해 줍니다.
 * --------------------------------------------------------------------------- */
function Ll(t) {
  function e(r, i) {
    return (i === void 0 && (i = {}), El(t(r, i)));
  }
  if (typeof Proxy > "u") return e;
  var n = new Map();
  return new Proxy(e, {
    get: function (r, i) {
      return (n.has(i) || n.set(i, e(i)), n.get(i));
    },
  });
}
// === [React.js 스택 영역] UI 상태 관리 및 렌더링 파이프라인 끝 ===

//Part 2

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===

/* ---------------------------------------------------------------------------
 * [기능 분류: DOM 및 SVG 태그 식별자]
 * UX 역할: 현재 렌더링하려는 요소가 일반 HTML(div 등)인지 SVG(path, circle 등)인지
 * 구분하여, 물리 엔진이 좌표를 계산하는 방식을 다르게 적용하기 위한 기준입니다.
 * --------------------------------------------------------------------------- */
var Vl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view",
];
function Rn(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(Vl.indexOf(t) > -1 || /[A-Z]/.test(t));
}
var Me = {};
function jl(t) {
  Object.assign(Me, t);
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 하드웨어 가속(GPU) 및 CSS Transform 엔진]
 * UX 역할: 애니메이션의 버벅임을 막기 위해(60FPS 유지), 요소의 이동/회전/크기 조절
 * 속성을 3D Transform(translateZ 등)으로 변환하여 GPU 연산을 강제 유도합니다.
 * --------------------------------------------------------------------------- */
var vn = ["", "X", "Y", "Z"],
  Al = ["translate", "scale", "rotate", "skew"],
  ne = ["transformPerspective", "x", "y", "z"];
Al.forEach(function (t) {
  return vn.forEach(function (e) {
    return ne.push(t + e);
  });
});
function Rl(t, e) {
  return ne.indexOf(t) - ne.indexOf(e);
}
var Nl = new Set(ne);
function le(t) {
  return Nl.has(t);
}
var Il = new Set(["originX", "originY", "originZ"]);
function Pi(t) {
  return Il.has(t);
}
function _i(t, e) {
  var n = e.layout,
    r = e.layoutId;
  return (
    le(t) || Pi(t) || ((n || r !== void 0) && (!!Me[t] || t === "opacity"))
  );
}
var dt = function (t) {
    return !!(t !== null && typeof t == "object" && t.getVelocity);
  },
  Ol = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  };
function Dl(t, e, n, r) {
  var i = t.transform,
    a = t.transformKeys,
    o = e.enableHardwareAcceleration,
    s = o === void 0 ? !0 : o,
    l = e.allowTransformNone,
    u = l === void 0 ? !0 : l,
    f = "";
  a.sort(Rl);
  for (var h = !1, c = a.length, p = 0; p < c; p++) {
    var d = a[p];
    ((f += "".concat(Ol[d] || d, "(").concat(i[d], ") ")),
      d === "z" && (h = !0));
  }
  return (
    !h && s ? (f += "translateZ(0)") : (f = f.trim()),
    r ? (f = r(i, n ? "" : f)) : u && n && (f = "none"),
    f
  );
}
function kl(t) {
  var e = t.originX,
    n = e === void 0 ? "50%" : e,
    r = t.originY,
    i = r === void 0 ? "50%" : r,
    a = t.originZ,
    o = a === void 0 ? 0 : a;
  return "".concat(n, " ").concat(i, " ").concat(o);
}
function Ei(t) {
  return t.startsWith("--");
}
var Hl = function (t, e) {
  return e && typeof t == "number" ? e.transform(t) : t;
};

/* ---------------------------------------------------------------------------
 * [기능 분류: CSS 문자열-숫자 파싱(Parsing) 및 색상 변환 엔진]
 * UX 역할: '10px', '50%', '#ff0000' 같은 CSS 문자열을 순수 숫자로 쪼개어(Parse)
 * 물리 엔진이 부드럽게 보간(Interpolate)할 수 있게 만들고, 다시 문자열로 합칩니다.
 * --------------------------------------------------------------------------- */
const Mi = (t, e) => (n) => Math.max(Math.min(n, e), t),
  $t = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
  re = /(-)?([\d]*\.?[\d])+/g,
  mn =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
  Fl =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function ue(t) {
  return typeof t == "string";
}
const jt = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  Zt = Object.assign(Object.assign({}, jt), { transform: Mi(0, 1) }),
  pe = Object.assign(Object.assign({}, jt), { default: 1 }),
  ce = (t) => ({
    test: (e) => ue(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  gt = ce("deg"),
  ut = ce("%"),
  M = ce("px"),
  Bl = ce("vh"),
  Ul = ce("vw"),
  ar = Object.assign(Object.assign({}, ut), {
    parse: (t) => ut.parse(t) / 100,
    transform: (t) => ut.transform(t * 100),
  }),
  Nn = (t, e) => (n) =>
    !!(
      (ue(n) && Fl.test(n) && n.startsWith(t)) ||
      (e && Object.prototype.hasOwnProperty.call(n, e))
    ),
  Li = (t, e, n) => (r) => {
    if (!ue(r)) return r;
    const [i, a, o, s] = r.match(re);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  Mt = {
    test: Nn("hsl", "hue"),
    parse: Li("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      ut.transform($t(e)) +
      ", " +
      ut.transform($t(n)) +
      ", " +
      $t(Zt.transform(r)) +
      ")",
  },
  zl = Mi(0, 255),
  Xe = Object.assign(Object.assign({}, jt), {
    transform: (t) => Math.round(zl(t)),
  }),
  xt = {
    test: Nn("rgb", "red"),
    parse: Li("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Xe.transform(t) +
      ", " +
      Xe.transform(e) +
      ", " +
      Xe.transform(n) +
      ", " +
      $t(Zt.transform(r)) +
      ")",
  };
function ql(t) {
  let e = "",
    n = "",
    r = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substr(1, 2)),
        (n = t.substr(3, 2)),
        (r = t.substr(5, 2)),
        (i = t.substr(7, 2)))
      : ((e = t.substr(1, 1)),
        (n = t.substr(2, 1)),
        (r = t.substr(3, 1)),
        (i = t.substr(4, 1)),
        (e += e),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const gn = { test: Nn("#"), parse: ql, transform: xt.transform },
  Z = {
    test: (t) => xt.test(t) || gn.test(t) || Mt.test(t),
    parse: (t) =>
      xt.test(t) ? xt.parse(t) : Mt.test(t) ? Mt.parse(t) : gn.parse(t),
    transform: (t) =>
      ue(t) ? t : t.hasOwnProperty("red") ? xt.transform(t) : Mt.transform(t),
  },
  Vi = "${c}",
  ji = "${n}";
function Gl(t) {
  var e, n, r, i;
  return (
    isNaN(t) &&
    ue(t) &&
    ((n = (e = t.match(re)) === null || e === void 0 ? void 0 : e.length) !==
      null && n !== void 0
      ? n
      : 0) +
      ((i = (r = t.match(mn)) === null || r === void 0 ? void 0 : r.length) !==
        null && i !== void 0
        ? i
        : 0) >
      0
  );
}
function Ai(t) {
  typeof t == "number" && (t = `${t}`);
  const e = [];
  let n = 0;
  const r = t.match(mn);
  r && ((n = r.length), (t = t.replace(mn, Vi)), e.push(...r.map(Z.parse)));
  const i = t.match(re);
  return (
    i && ((t = t.replace(re, ji)), e.push(...i.map(jt.parse))),
    { values: e, numColors: n, tokenised: t }
  );
}
function Ri(t) {
  return Ai(t).values;
}
function Ni(t) {
  const { values: e, numColors: n, tokenised: r } = Ai(t),
    i = e.length;
  return (a) => {
    let o = r;
    for (let s = 0; s < i; s++)
      o = o.replace(s < n ? Vi : ji, s < n ? Z.transform(a[s]) : $t(a[s]));
    return o;
  };
}
const Wl = (t) => (typeof t == "number" ? 0 : t);
function $l(t) {
  const e = Ri(t);
  return Ni(t)(e.map(Wl));
}

/* ---------------------------------------------------------------------------
 * [기능 분류: CSS 필터(Filter) 및 그림자 보간 엔진]
 * UX 역할: drop-shadow, brightness 등의 복합 필터 문자열을 분석하여
 * 마우스 호버 시 그림자가 스르륵 커지는 등의 효과를 가능하게 합니다.
 * --------------------------------------------------------------------------- */
const ht = {
    test: Gl,
    parse: Ri,
    createTransformer: Ni,
    getAnimatableNone: $l,
  },
  Zl = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Yl(t) {
  let [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [r] = n.match(re) || [];
  if (!r) return t;
  const i = n.replace(r, "");
  let a = Zl.has(e) ? 1 : 0;
  return (r !== n && (a *= 100), e + "(" + a + i + ")");
}
const Kl = /([a-z-]*)\(.*?\)/g,
  yn = Object.assign(Object.assign({}, ht), {
    getAnimatableNone: (t) => {
      const e = t.match(Kl);
      return e ? e.map(Yl).join(" ") : t;
    },
  });

/* ---------------------------------------------------------------------------
 * [기능 분류: 스타일 딕셔너리 및 단위 매핑]
 * 역할: width는 px, scale은 비율, rotate는 deg 등 각 CSS 속성에 맞는
 * 단위를 자동으로 결합하기 위한 사전(Dictionary)을 정의합니다.
 * --------------------------------------------------------------------------- */
var sr = S(S({}, jt), { transform: Math.round }),
  Ii = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    radius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    size: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    rotate: gt,
    rotateX: gt,
    rotateY: gt,
    rotateZ: gt,
    scale: pe,
    scaleX: pe,
    scaleY: pe,
    scaleZ: pe,
    skew: gt,
    skewX: gt,
    skewY: gt,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: Zt,
    originX: ar,
    originY: ar,
    originZ: M,
    zIndex: sr,
    fillOpacity: Zt,
    strokeOpacity: Zt,
    numOctaves: sr,
  };
function In(t, e, n, r) {
  var i,
    a = t.style,
    o = t.vars,
    s = t.transform,
    l = t.transformKeys,
    u = t.transformOrigin;
  l.length = 0;
  var f = !1,
    h = !1,
    c = !0;
  for (var p in e) {
    var d = e[p];
    if (Ei(p)) {
      o[p] = d;
      continue;
    }
    var v = Ii[p],
      m = Hl(d, v);
    if (le(p)) {
      if (((f = !0), (s[p] = m), l.push(p), !c)) continue;
      d !== ((i = v.default) !== null && i !== void 0 ? i : 0) && (c = !1);
    } else Pi(p) ? ((u[p] = m), (h = !0)) : (a[p] = m);
  }
  (f
    ? (a.transform = Dl(t, n, c, r))
    : r
      ? (a.transform = r({}, ""))
      : !e.transform && a.transform && (a.transform = "none"),
    h && (a.transformOrigin = kl(u)));
}
var On = function () {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
  };
};
function Oi(t, e, n) {
  for (var r in e) !dt(e[r]) && !_i(r, n) && (t[r] = e[r]);
}
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
function Xl(t, e, n) {
  var r = t.transformTemplate;
  return y.useMemo(
    function () {
      var i = On();
      In(i, e, { enableHardwareAcceleration: !n }, r);
      var a = i.vars,
        o = i.style;
      return S(S({}, a), o);
    },
    [e],
  );
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
function Ql(t, e, n) {
  var r = t.style || {},
    i = {};
  return (
    Oi(i, r, t),
    Object.assign(i, Xl(t, e, n)),
    t.transformValues && (i = t.transformValues(i)),
    i
  );
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 모바일 드래그 제스처 보안]
 * UX 역할: 터치 기기에서 요소를 드래그할 때 화면 전체가 스크롤되거나
 * 텍스트가 블록 지정되는 기본 동작을 막아(touch-action: none 등) 매끄러운 조작을 보장합니다.
 * --------------------------------------------------------------------------- */
function Jl(t, e, n) {
  var r = {},
    i = Ql(t, e, n);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        t.drag === !0 ? "none" : "pan-".concat(t.drag === "x" ? "y" : "x"))),
    (r.style = i),
    r
  );
}

/* ---------------------------------------------------------------------------
 * [기능 분류: DOM 속성 필터링 (Prop Filtering)]
 * 역할: Framer Motion 전용 Props(whileHover, animate 등)가 실제 HTML
 * DOM 속성으로 유출되어 브라우저 경고를 띄우는 것을 막기 위한 화이트리스트입니다.
 * --------------------------------------------------------------------------- */
var tu = new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport",
  "layoutScroll",
]);
function Le(t) {
  return tu.has(t);
}
var Di = function (t) {
  return !Le(t);
};
function eu(t) {
  t &&
    (Di = function (e) {
      return e.startsWith("on") ? !Le(e) : t(e);
    });
}
try {
  eu(require("@emotion/is-prop-valid").default);
} catch {}
function nu(t, e, n) {
  var r = {};
  for (var i in t)
    (Di(i) ||
      (n === !0 && Le(i)) ||
      (!e && !Le(i)) ||
      (t.draggable && i.startsWith("onDrag"))) &&
      (r[i] = t[i]);
  return r;
}

/* ---------------------------------------------------------------------------
 * [기능 분류: SVG 전용 속성 계산기]
 * UX 역할: SVG 형태의 선이 그려지는 효과(Line Drawing)를 위해 pathLength와
 * 대시(dash) 오프셋 배열을 물리 연산에 맞게 변환합니다.
 * --------------------------------------------------------------------------- */
function lr(t, e, n) {
  return typeof t == "string" ? t : M.transform(e + n * t);
}
function ru(t, e, n) {
  var r = lr(e, t.x, t.width),
    i = lr(n, t.y, t.height);
  return "".concat(r, " ").concat(i);
}
var iu = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ou(t, e, n, r, i) {
  (n === void 0 && (n = 1), r === void 0 && (r = 0), (t.pathLength = 1));
  var a = iu;
  t[a.offset] = M.transform(-r);
  var o = M.transform(e),
    s = M.transform(n);
  t[a.array] = "".concat(o, " ").concat(s);
}
function Dn(t, e, n, r) {
  var i = e.attrX,
    a = e.attrY,
    o = e.originX,
    s = e.originY,
    l = e.pathLength,
    u = e.pathSpacing,
    f = u === void 0 ? 1 : u,
    h = e.pathOffset,
    c = h === void 0 ? 0 : h,
    p = nt(e, [
      "attrX",
      "attrY",
      "originX",
      "originY",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  (In(t, p, n, r), (t.attrs = t.style), (t.style = {}));
  var d = t.attrs,
    v = t.style,
    m = t.dimensions;
  (d.transform && (m && (v.transform = d.transform), delete d.transform),
    m &&
      (o !== void 0 || s !== void 0 || v.transform) &&
      (v.transformOrigin = ru(
        m,
        o !== void 0 ? o : 0.5,
        s !== void 0 ? s : 0.5,
      )),
    i !== void 0 && (d.x = i),
    a !== void 0 && (d.y = a),
    l !== void 0 && ou(d, l, f, c));
}
var ki = function () {
  return S(S({}, On()), { attrs: {} });
};
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
function au(t, e) {
  var n = y.useMemo(
    function () {
      var i = ki();
      return (
        Dn(i, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
        S(S({}, i.attrs), { style: S({}, i.style) })
      );
    },
    [e],
  );
  if (t.style) {
    var r = {};
    (Oi(r, t.style, t), (n.style = S(S({}, r), n.style)));
  }
  return n;
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 최종 React 모션 요소 렌더링 팩토리]
 * 역할: 계산이 끝난 모든 CSS, SVG 속성, 이벤트 리스너를 결합하여
 * 최종적으로 React.createElement를 통해 DOM 노드로 생성합니다.
 * --------------------------------------------------------------------------- */
function su(t) {
  t === void 0 && (t = !1);
  var e = function (n, r, i, a, o, s) {
    var l = o.latestValues,
      u = Rn(n) ? au : Jl,
      f = u(r, l, s),
      h = nu(r, typeof n == "string", t),
      c = S(S(S({}, h), f), { ref: a });
    return (i && (c["data-projection-id"] = i), y.createElement(n, c));
  };
  return e;
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: React Props to DOM Attribute 맵퍼]
 * 역할: React용 카멜케이스(camelCase) 속성을 브라우저 표준 케밥케이스(kebab-case)
 * 속성(예: baseFrequency)으로 변환하여 직접 DOM에 적용합니다.
 * --------------------------------------------------------------------------- */
var lu = /([a-z])([A-Z])/g,
  uu = "$1-$2",
  Hi = function (t) {
    return t.replace(lu, uu).toLowerCase();
  };
function Fi(t, e, n, r) {
  var i = e.style,
    a = e.vars;
  Object.assign(t.style, i, r && r.getProjectionStyles(n));
  for (var o in a) t.style.setProperty(o, a[o]);
}
var Bi = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
]);
function Ui(t, e, n, r) {
  Fi(t, e, void 0, r);
  for (var i in e.attrs) t.setAttribute(Bi.has(i) ? i : Hi(i), e.attrs[i]);
}
function kn(t) {
  var e = t.style,
    n = {};
  for (var r in e) (dt(e[r]) || _i(r, t)) && (n[r] = e[r]);
  return n;
}
function zi(t) {
  var e = kn(t);
  for (var n in t)
    if (dt(t[n])) {
      var r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      e[r] = t[n];
    }
  return e;
}
function Hn(t) {
  return typeof t == "object" && typeof t.start == "function";
}
var ie = function (t) {
    return Array.isArray(t);
  },
  cu = function (t) {
    return !!(t && typeof t == "object" && t.mix && t.toValue);
  },
  qi = function (t) {
    return ie(t) ? t[t.length - 1] || 0 : t;
  };
function Te(t) {
  var e = dt(t) ? t.get() : t;
  return cu(e) ? e.toValue() : e;
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 초기 렌더 스테이트 생성기]
 * 역할: 컴포넌트 마운트 전, 초기 props를 바탕으로 최초의 렌더링 상태를 구축합니다.
 * --------------------------------------------------------------------------- */
function ur(t, e, n, r) {
  var i = t.scrapeMotionValuesFromProps,
    a = t.createRenderState,
    o = t.onMount,
    s = { latestValues: fu(e, n, r, i), renderState: a() };
  return (
    o &&
      (s.mount = function (l) {
        return o(e, l, s);
      }),
    s
  );
}
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
var Gi = function (t) {
  return function (e, n) {
    var r = y.useContext(ke),
      i = y.useContext(He);
    return n
      ? ur(t, e, r, i)
      : Bt(function () {
          return ur(t, e, r, i);
        });
  };
};
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
function fu(t, e, n, r) {
  var i = {},
    a = (n == null ? void 0 : n.initial) === !1,
    o = r(t);
  for (var s in o) i[s] = Te(o[s]);
  var l = t.initial,
    u = t.animate,
    f = Be(t),
    h = Si(t);
  e &&
    h &&
    !f &&
    t.inherit !== !1 &&
    (l ?? (l = e.initial), u ?? (u = e.animate));
  var c = a || l === !1,
    p = c ? u : l;
  if (p && typeof p != "boolean" && !Hn(p)) {
    var d = Array.isArray(p) ? p : [p];
    d.forEach(function (v) {
      var m = wi(t, v);
      if (m) {
        var x = m.transitionEnd;
        m.transition;
        var w = nt(m, ["transitionEnd", "transition"]);
        for (var b in w) {
          var T = w[b];
          if (Array.isArray(T)) {
            var C = c ? T.length - 1 : 0;
            T = T[C];
          }
          T !== null && (i[b] = T);
        }
        for (var b in x) i[b] = x[b];
      }
    });
  }
  return i;
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 컴포넌트 타입(DOM/SVG)별 설정 주입기]
 * 역할: 일반 HTML(DOM)과 SVG 컴포넌트에 각각 알맞은 상태 파서(Parser)와
 * 빌더(Builder)를 연결하여 프록시 생성기(pu)로 반환합니다.
 * --------------------------------------------------------------------------- */
var du = {
    useVisualState: Gi({
      scrapeMotionValuesFromProps: zi,
      createRenderState: ki,
      onMount: function (t, e, n) {
        var r = n.renderState,
          i = n.latestValues;
        try {
          r.dimensions =
            typeof e.getBBox == "function"
              ? e.getBBox()
              : e.getBoundingClientRect();
        } catch {
          r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        (Dn(r, i, { enableHardwareAcceleration: !1 }, t.transformTemplate),
          Ui(e, r));
      },
    }),
  },
  hu = {
    useVisualState: Gi({
      scrapeMotionValuesFromProps: kn,
      createRenderState: On,
    }),
  };
function pu(t, e, n, r, i) {
  var a = e.forwardMotionProps,
    o = a === void 0 ? !1 : a,
    s = Rn(t) ? du : hu;
  return S(S({}, s), {
    preloadedFeatures: n,
    useRender: su(o),
    createVisualElement: r,
    projectionNodeConstructor: i,
    Component: t,
  });
}
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

//part.3
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 모션 상태 식별자(Enums)]
 * 역할: 요소의 상태(애니메이션 중, 호버됨, 탭됨, 드래그 중 등)를 식별하기 위한
 * 전역 상수 객체를 정의합니다.
 * --------------------------------------------------------------------------- */
var O;
(function (t) {
  ((t.Animate = "animate"),
    (t.Hover = "whileHover"),
    (t.Tap = "whileTap"),
    (t.Drag = "whileDrag"),
    (t.Focus = "whileFocus"),
    (t.InView = "whileInView"),
    (t.Exit = "exit"));
})(O || (O = {}));

/* ---------------------------------------------------------------------------
 * [기능 분류: 브라우저 이벤트 리스너 바인딩]
 * 역할: 순수 DOM 노드에 이벤트를 부착하고, 메모리 누수 방지를 위한
 * 해제(Remove) 함수를 클로저 형태로 반환합니다.
 * --------------------------------------------------------------------------- */
function Ue(t, e, n, r) {
  return (
    r === void 0 && (r = { passive: !0 }),
    t.addEventListener(e, n, r),
    function () {
      return t.removeEventListener(e, n);
    }
  );
}
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: React 이벤트 생명주기 관리 훅(Hook)]
 * 역할: useEffect를 활용하여 DOM이 렌더링된 직후에만 이벤트를 안전하게 바인딩합니다.
 * --------------------------------------------------------------------------- */
function bn(t, e, n, r) {
  y.useEffect(
    function () {
      var i = t.current;
      if (n && i) return Ue(i, e, n, r);
    },
    [t, e, n, r],
  );
}
function vu(t) {
  var e = t.whileFocus,
    n = t.visualElement,
    r = function () {
      var a;
      (a = n.animationState) === null ||
        a === void 0 ||
        a.setActive(O.Focus, !0);
    },
    i = function () {
      var a;
      (a = n.animationState) === null ||
        a === void 0 ||
        a.setActive(O.Focus, !1);
    };
  (bn(n, "focus", e ? r : void 0), bn(n, "blur", e ? i : void 0));
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 마우스 및 터치 제스처 정규화 엔진]
 * 역할: 데스크탑의 마우스 이벤트와 모바일의 터치 이벤트를 단일 '포인터(Pointer)'
 * 좌표계로 변환하여 동일한 물리적 드래그/클릭으로 인식하게 만듭니다.
 * --------------------------------------------------------------------------- */
function Wi(t) {
  return typeof PointerEvent < "u" && t instanceof PointerEvent
    ? t.pointerType === "mouse"
    : t instanceof MouseEvent;
}
function $i(t) {
  var e = !!t.touches;
  return e;
}
function mu(t) {
  return function (e) {
    var n = e instanceof MouseEvent,
      r = !n || (n && e.button === 0);
    r && t(e);
  };
}
var gu = { pageX: 0, pageY: 0 };
function yu(t, e) {
  e === void 0 && (e = "page");
  var n = t.touches[0] || t.changedTouches[0],
    r = n || gu;
  return { x: r[e + "X"], y: r[e + "Y"] };
}
function bu(t, e) {
  return (e === void 0 && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] });
}
function Fn(t, e) {
  return (e === void 0 && (e = "page"), { point: $i(t) ? yu(t, e) : bu(t, e) });
}
var Zi = function (t, e) {
    e === void 0 && (e = !1);
    var n = function (r) {
      return t(r, Fn(r));
    };
    return e ? mu(n) : n;
  },
  xu = function () {
    return Ft && window.onpointerdown === null;
  },
  wu = function () {
    return Ft && window.ontouchstart === null;
  },
  Su = function () {
    return Ft && window.onmousedown === null;
  },
  Cu = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
  },
  Tu = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
  };
function Yi(t) {
  return xu() ? t : wu() ? Tu[t] : Su() ? Cu[t] : t;
}
function kt(t, e, n, r) {
  return Ue(t, Yi(e), Zi(n, e === "pointerdown"), r);
}
function Ve(t, e, n, r) {
  return bn(t, Yi(e), n && Zi(n, e === "pointerdown"), r);
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 드래그 락(Lock) 및 호버 제어]
 * 역할: X축 혹은 Y축으로 스크롤 중일 때 반대 방향의 드래그를 잠그거나,
 * 마우스가 올라간(Hover) 상태를 추적합니다.
 * --------------------------------------------------------------------------- */
function Ki(t) {
  var e = null;
  return function () {
    var n = function () {
      e = null;
    };
    return e === null ? ((e = t), n) : !1;
  };
}
var cr = Ki("dragHorizontal"),
  fr = Ki("dragVertical");
function Xi(t) {
  var e = !1;
  if (t === "y") e = fr();
  else if (t === "x") e = cr();
  else {
    var n = cr(),
      r = fr();
    n && r
      ? (e = function () {
          (n(), r());
        })
      : (n && n(), r && r());
  }
  return e;
}
function Qi() {
  var t = Xi(!0);
  return t ? (t(), !1) : !0;
}
function dr(t, e, n) {
  return function (r, i) {
    var a;
    !Wi(r) ||
      Qi() ||
      ((a = t.animationState) === null ||
        a === void 0 ||
        a.setActive(O.Hover, e),
      n == null || n(r, i));
  };
}
function Pu(t) {
  var e = t.onHoverStart,
    n = t.onHoverEnd,
    r = t.whileHover,
    i = t.visualElement;
  (Ve(i, "pointerenter", e || r ? dr(i, !0, e) : void 0, { passive: !e }),
    Ve(i, "pointerleave", n || r ? dr(i, !1, n) : void 0, { passive: !n }));
}
var Ji = function (t, e) {
  return e ? (t === e ? !0 : Ji(t, e.parentElement)) : !1;
};
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
function to(t) {
  return y.useEffect(function () {
    return function () {
      return t();
    };
  }, []);
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 스프링 물리 엔진 코어 알고리즘]
 * 역할: 질량(mass), 강성(stiffness), 감쇠(damping) 값을 바탕으로 요소가 탄성 있게
 * 튕기거나(Bounce) 멈추는 물리 현상을 미적분 공식으로 구현합니다.
 * --------------------------------------------------------------------------- */
const je = (t, e, n) => Math.min(Math.max(n, t), e),
  Qe = 0.001,
  _u = 0.01,
  Eu = 10,
  Mu = 0.05,
  Lu = 1;
function Vu({
  duration: t = 800,
  bounce: e = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    a,
    o = 1 - e;
  ((o = je(Mu, Lu, o)),
    (t = je(_u, Eu, t / 1e3)),
    o < 1
      ? ((i = (u) => {
          const f = u * o,
            h = f * t,
            c = f - n,
            p = xn(u, o),
            d = Math.exp(-h);
          return Qe - (c / p) * d;
        }),
        (a = (u) => {
          const h = u * o * t,
            c = h * n + n,
            p = Math.pow(o, 2) * Math.pow(u, 2) * t,
            d = Math.exp(-h),
            v = xn(Math.pow(u, 2), o);
          return ((-i(u) + Qe > 0 ? -1 : 1) * ((c - p) * d)) / v;
        }))
      : ((i = (u) => {
          const f = Math.exp(-u * t),
            h = (u - n) * t + 1;
          return -Qe + f * h;
        }),
        (a = (u) => {
          const f = Math.exp(-u * t),
            h = (n - u) * (t * t);
          return f * h;
        })));
  const s = 5 / t,
    l = Au(i, a, s);
  if (((t = t * 1e3), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: t };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: t };
  }
}
const ju = 12;
function Au(t, e, n) {
  let r = n;
  for (let i = 1; i < ju; i++) r = r - t(r) / e(r);
  return r;
}
function xn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Ru = ["duration", "bounce"],
  Nu = ["stiffness", "damping", "mass"];
function hr(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Iu(t) {
  let e = Object.assign(
    {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
    },
    t,
  );
  if (!hr(t, Nu) && hr(t, Ru)) {
    const n = Vu(t);
    ((e = Object.assign(Object.assign(Object.assign({}, e), n), {
      velocity: 0,
      mass: 1,
    })),
      (e.isResolvedFromDuration = !0));
  }
  return e;
}
function Bn(t) {
  var { from: e = 0, to: n = 1, restSpeed: r = 2, restDelta: i } = t,
    a = nt(t, ["from", "to", "restSpeed", "restDelta"]);
  const o = { done: !1, value: e };
  let {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: f,
      duration: h,
      isResolvedFromDuration: c,
    } = Iu(a),
    p = pr,
    d = pr;
  function v() {
    const m = f ? -(f / 1e3) : 0,
      x = n - e,
      w = l / (2 * Math.sqrt(s * u)),
      b = Math.sqrt(s / u) / 1e3;
    if ((i === void 0 && (i = Math.min(Math.abs(n - e) / 100, 0.4)), w < 1)) {
      const T = xn(b, w);
      ((p = (C) => {
        const L = Math.exp(-w * b * C);
        return (
          n -
          L * (((m + w * b * x) / T) * Math.sin(T * C) + x * Math.cos(T * C))
        );
      }),
        (d = (C) => {
          const L = Math.exp(-w * b * C);
          return (
            w *
              b *
              L *
              ((Math.sin(T * C) * (m + w * b * x)) / T + x * Math.cos(T * C)) -
            L * (Math.cos(T * C) * (m + w * b * x) - T * x * Math.sin(T * C))
          );
        }));
    } else if (w === 1) p = (T) => n - Math.exp(-b * T) * (x + (m + b * x) * T);
    else {
      const T = b * Math.sqrt(w * w - 1);
      p = (C) => {
        const L = Math.exp(-w * b * C),
          V = Math.min(T * C, 300);
        return (
          n - (L * ((m + w * b * x) * Math.sinh(V) + T * x * Math.cosh(V))) / T
        );
      };
    }
  }
  return (
    v(),
    {
      next: (m) => {
        const x = p(m);
        if (c) o.done = m >= h;
        else {
          const w = d(m) * 1e3,
            b = Math.abs(w) <= r,
            T = Math.abs(n - x) <= i;
          o.done = b && T;
        }
        return ((o.value = o.done ? n : x), o);
      },
      flipTarget: () => {
        ((f = -f), ([e, n] = [n, e]), v());
      },
    }
  );
}
Bn.needsInterpolation = (t, e) => typeof t == "string" || typeof e == "string";
const pr = (t) => 0,
  oe = (t, e, n) => {
    const r = e - t;
    return r === 0 ? 1 : (n - t) / r;
  },
  k = (t, e, n) => -n * t + n * e + t;
function Je(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
        ? e
        : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t
  );
}
function vr({ hue: t, saturation: e, lightness: n, alpha: r }) {
  ((t /= 360), (e /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!e) i = a = o = n;
  else {
    const s = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - s;
    ((i = Je(l, s, t + 1 / 3)), (a = Je(l, s, t)), (o = Je(l, s, t - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
const Ou = (t, e, n) => {
    const r = t * t,
      i = e * e;
    return Math.sqrt(Math.max(0, n * (i - r) + r));
  },
  Du = [gn, xt, Mt],
  mr = (t) => Du.find((e) => e.test(t)),
  eo = (t, e) => {
    let n = mr(t),
      r = mr(e),
      i = n.parse(t),
      a = r.parse(e);
    (n === Mt && ((i = vr(i)), (n = xt)), r === Mt && ((a = vr(a)), (r = xt)));
    const o = Object.assign({}, i);
    return (s) => {
      for (const l in o) l !== "alpha" && (o[l] = Ou(i[l], a[l], s));
      return ((o.alpha = k(i.alpha, a.alpha, s)), n.transform(o));
    };
  },
  wn = (t) => typeof t == "number",
  ku = (t, e) => (n) => e(t(n)),
  ze = (...t) => t.reduce(ku);
function no(t, e) {
  return wn(t) ? (n) => k(t, e, n) : Z.test(t) ? eo(t, e) : io(t, e);
}
const ro = (t, e) => {
    const n = [...t],
      r = n.length,
      i = t.map((a, o) => no(a, e[o]));
    return (a) => {
      for (let o = 0; o < r; o++) n[o] = i[o](a);
      return n;
    };
  },
  Hu = (t, e) => {
    const n = Object.assign(Object.assign({}, t), e),
      r = {};
    for (const i in n)
      t[i] !== void 0 && e[i] !== void 0 && (r[i] = no(t[i], e[i]));
    return (i) => {
      for (const a in r) n[a] = r[a](i);
      return n;
    };
  };
function gr(t) {
  const e = ht.parse(t),
    n = e.length;
  let r = 0,
    i = 0,
    a = 0;
  for (let o = 0; o < n; o++)
    r || typeof e[o] == "number" ? r++ : e[o].hue !== void 0 ? a++ : i++;
  return { parsed: e, numNumbers: r, numRGB: i, numHSL: a };
}
const io = (t, e) => {
    const n = ht.createTransformer(e),
      r = gr(t),
      i = gr(e);
    return r.numHSL === i.numHSL &&
      r.numRGB === i.numRGB &&
      r.numNumbers >= i.numNumbers
      ? ze(ro(r.parsed, i.parsed), n)
      : (o) => `${o > 0 ? e : t}`;
  },
  Fu = (t, e) => (n) => k(t, e, n);
function Bu(t) {
  if (typeof t == "number") return Fu;
  if (typeof t == "string") return Z.test(t) ? eo : io;
  if (Array.isArray(t)) return ro;
  if (typeof t == "object") return Hu;
}
function Uu(t, e, n) {
  const r = [],
    i = n || Bu(t[0]),
    a = t.length - 1;
  for (let o = 0; o < a; o++) {
    let s = i(t[o], t[o + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[o] : e;
      s = ze(l, s);
    }
    r.push(s);
  }
  return r;
}
function zu([t, e], [n]) {
  return (r) => n(oe(t, e, r));
}
function qu(t, e) {
  const n = t.length,
    r = n - 1;
  return (i) => {
    let a = 0,
      o = !1;
    if ((i <= t[0] ? (o = !0) : i >= t[r] && ((a = r - 1), (o = !0)), !o)) {
      let l = 1;
      for (; l < n && !(t[l] > i || l === r); l++);
      a = l - 1;
    }
    const s = oe(t[a], t[a + 1], i);
    return e[a](s);
  };
}
function oo(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const a = t.length;
  (ee(a === e.length),
    ee(!r || !Array.isArray(r) || r.length === a - 1),
    t[0] > t[a - 1] &&
      ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse()));
  const o = Uu(e, r, i),
    s = a === 2 ? zu(t, o) : qu(t, o);
  return n ? (l) => s(je(t[0], t[a - 1], l)) : s;
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 베지어 곡선(Bezier Curve) 수학 연산 및 이징(Easing)]
 * 역할: ease-in, ease-out 등 곡선 속도 제어를 위해 3차 함수를 계산합니다.
 * --------------------------------------------------------------------------- */
const qe = (t) => (e) => 1 - t(1 - e),
  Un = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  Gu = (t) => (e) => Math.pow(e, t),
  ao = (t) => (e) => e * e * ((t + 1) * e - t),
  Wu = (t) => {
    const e = ao(t);
    return (n) =>
      (n *= 2) < 1 ? 0.5 * e(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)));
  },
  so = 1.525,
  $u = 4 / 11,
  Zu = 8 / 11,
  Yu = 9 / 10,
  zn = (t) => t,
  qn = Gu(2),
  Ku = qe(qn),
  lo = Un(qn),
  uo = (t) => 1 - Math.sin(Math.acos(t)),
  Gn = qe(uo),
  Xu = Un(Gn),
  Wn = ao(so),
  Qu = qe(Wn),
  Ju = Un(Wn),
  tc = Wu(so),
  ec = 4356 / 361,
  nc = 35442 / 1805,
  rc = 16061 / 1805,
  Ae = (t) => {
    if (t === 1 || t === 0) return t;
    const e = t * t;
    return t < $u
      ? 7.5625 * e
      : t < Zu
        ? 9.075 * e - 9.9 * t + 3.4
        : t < Yu
          ? ec * e - nc * t + rc
          : 10.8 * t * t - 20.52 * t + 10.72;
  },
  ic = qe(Ae),
  oc = (t) => (t < 0.5 ? 0.5 * (1 - Ae(1 - t * 2)) : 0.5 * Ae(t * 2 - 1) + 0.5);
function ac(t, e) {
  return t.map(() => e || lo).splice(0, t.length - 1);
}
function sc(t) {
  const e = t.length;
  return t.map((n, r) => (r !== 0 ? r / (e - 1) : 0));
}
function lc(t, e) {
  return t.map((n) => n * e);
}
function Pe({ from: t = 0, to: e = 1, ease: n, offset: r, duration: i = 300 }) {
  const a = { done: !1, value: t },
    o = Array.isArray(e) ? e : [t, e],
    s = lc(r && r.length === o.length ? r : sc(o), i);
  function l() {
    return oo(s, o, { ease: Array.isArray(n) ? n : ac(o, n) });
  }
  let u = l();
  return {
    next: (f) => ((a.value = u(f)), (a.done = f >= i), a),
    flipTarget: () => {
      (o.reverse(), (u = l()));
    },
  };
}
function uc({
  velocity: t = 0,
  from: e = 0,
  power: n = 0.8,
  timeConstant: r = 350,
  restDelta: i = 0.5,
  modifyTarget: a,
}) {
  const o = { done: !1, value: e };
  let s = n * t;
  const l = e + s,
    u = a === void 0 ? l : a(l);
  return (
    u !== l && (s = u - e),
    {
      next: (f) => {
        const h = -s * Math.exp(-f / r);
        return (
          (o.done = !(h > i || h < -i)),
          (o.value = o.done ? u : u + h),
          o
        );
      },
      flipTarget: () => {},
    }
  );
}
const yr = { keyframes: Pe, spring: Bn, decay: uc };
function cc(t) {
  if (Array.isArray(t.to)) return Pe;
  if (yr[t.type]) return yr[t.type];
  const e = new Set(Object.keys(t));
  return e.has("ease") || (e.has("duration") && !e.has("dampingRatio"))
    ? Pe
    : e.has("dampingRatio") ||
        e.has("stiffness") ||
        e.has("mass") ||
        e.has("damping") ||
        e.has("restSpeed") ||
        e.has("restDelta")
      ? Bn
      : Pe;
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 60FPS 프레임 스케줄러 (Sync Engine)]
 * 역할: 브라우저의 requestAnimationFrame을 사용하여 애니메이션 읽기, 업데이트, 렌더링
 * 단계를 동기화하고 레이아웃 스래싱(Layout Thrashing)을 방지합니다.
 * --------------------------------------------------------------------------- */
const co = (1 / 60) * 1e3,
  fc = typeof performance < "u" ? () => performance.now() : () => Date.now(),
  fo =
    typeof window < "u"
      ? (t) => window.requestAnimationFrame(t)
      : (t) => setTimeout(() => t(fc()), co);
function dc(t) {
  let e = [],
    n = [],
    r = 0,
    i = !1,
    a = !1;
  const o = new WeakSet(),
    s = {
      schedule: (l, u = !1, f = !1) => {
        const h = f && i,
          c = h ? e : n;
        return (
          u && o.add(l),
          c.indexOf(l) === -1 && (c.push(l), h && i && (r = e.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        (u !== -1 && n.splice(u, 1), o.delete(l));
      },
      process: (l) => {
        if (i) {
          a = !0;
          return;
        }
        if (((i = !0), ([e, n] = [n, e]), (n.length = 0), (r = e.length), r))
          for (let u = 0; u < r; u++) {
            const f = e[u];
            (f(l), o.has(f) && (s.schedule(f), t()));
          }
        ((i = !1), a && ((a = !1), s.process(l)));
      },
    };
  return s;
}
const hc = 40;
let Sn = !0,
  ae = !1,
  Cn = !1;
const Ht = { delta: 0, timestamp: 0 },
  fe = ["read", "update", "preRender", "render", "postRender"],
  Ge = fe.reduce((t, e) => ((t[e] = dc(() => (ae = !0))), t), {}),
  at = fe.reduce((t, e) => {
    const n = Ge[e];
    return (
      (t[e] = (r, i = !1, a = !1) => (ae || vc(), n.schedule(r, i, a))),
      t
    );
  }, {}),
  Lt = fe.reduce((t, e) => ((t[e] = Ge[e].cancel), t), {}),
  tn = fe.reduce((t, e) => ((t[e] = () => Ge[e].process(Ht)), t), {}),
  pc = (t) => Ge[t].process(Ht),
  ho = (t) => {
    ((ae = !1),
      (Ht.delta = Sn ? co : Math.max(Math.min(t - Ht.timestamp, hc), 1)),
      (Ht.timestamp = t),
      (Cn = !0),
      fe.forEach(pc),
      (Cn = !1),
      ae && ((Sn = !1), fo(ho)));
  },
  vc = () => {
    ((ae = !0), (Sn = !0), Cn || fo(ho));
  },
  Re = () => Ht;
function po(t, e, n = 0) {
  return t - e - n;
}
function mc(t, e, n = 0, r = !0) {
  return r ? po(e + -t, e, n) : e - (t - e) + n;
}
function gc(t, e, n, r) {
  return r ? t >= e + n : t <= -n;
}
const yc = (t) => {
  const e = ({ delta: n }) => t(n);
  return { start: () => at.update(e, !0), stop: () => Lt.update(e) };
};

/* ---------------------------------------------------------------------------
 * [기능 분류: 애니메이션 재생/정지 제어 드라이버]
 * 역할: 계산된 물리 수식을 시간(델타)에 따라 순차적으로 실행하고 중지시킵니다.
 * --------------------------------------------------------------------------- */
function vo(t) {
  var e,
    n,
    {
      from: r,
      autoplay: i = !0,
      driver: a = yc,
      elapsed: o = 0,
      repeat: s = 0,
      repeatType: l = "loop",
      repeatDelay: u = 0,
      onPlay: f,
      onStop: h,
      onComplete: c,
      onRepeat: p,
      onUpdate: d,
    } = t,
    v = nt(t, [
      "from",
      "autoplay",
      "driver",
      "elapsed",
      "repeat",
      "repeatType",
      "repeatDelay",
      "onPlay",
      "onStop",
      "onComplete",
      "onRepeat",
      "onUpdate",
    ]);
  let { to: m } = v,
    x,
    w = 0,
    b = v.duration,
    T,
    C = !1,
    L = !0,
    V;
  const A = cc(v);
  !((n = (e = A).needsInterpolation) === null || n === void 0) &&
    n.call(e, r, m) &&
    ((V = oo([0, 100], [r, m], { clamp: !1 })), (r = 0), (m = 100));
  const j = A(Object.assign(Object.assign({}, v), { from: r, to: m }));
  function I() {
    (w++,
      l === "reverse"
        ? ((L = w % 2 === 0), (o = mc(o, b, u, L)))
        : ((o = po(o, b, u)), l === "mirror" && j.flipTarget()),
      (C = !1),
      p && p());
  }
  function q() {
    (x.stop(), c && c());
  }
  function F(J) {
    if ((L || (J = -J), (o += J), !C)) {
      const rt = j.next(Math.max(0, o));
      ((T = rt.value), V && (T = V(T)), (C = L ? rt.done : o <= 0));
    }
    (d == null || d(T),
      C && (w === 0 && (b ?? (b = o)), w < s ? gc(o, b, u, L) && I() : q()));
  }
  function W() {
    (f == null || f(), (x = a(F)), x.start());
  }
  return (
    i && W(),
    {
      stop: () => {
        (h == null || h(), x.stop());
      },
    }
  );
}
function mo(t, e) {
  return e ? t * (1e3 / e) : 0;
}
function bc({
  from: t = 0,
  velocity: e = 0,
  min: n,
  max: r,
  power: i = 0.8,
  timeConstant: a = 750,
  bounceStiffness: o = 500,
  bounceDamping: s = 10,
  restDelta: l = 1,
  modifyTarget: u,
  driver: f,
  onUpdate: h,
  onComplete: c,
  onStop: p,
}) {
  let d;
  function v(b) {
    return (n !== void 0 && b < n) || (r !== void 0 && b > r);
  }
  function m(b) {
    return n === void 0
      ? r
      : r === void 0 || Math.abs(n - b) < Math.abs(r - b)
        ? n
        : r;
  }
  function x(b) {
    (d == null || d.stop(),
      (d = vo(
        Object.assign(Object.assign({}, b), {
          driver: f,
          onUpdate: (T) => {
            var C;
            (h == null || h(T),
              (C = b.onUpdate) === null || C === void 0 || C.call(b, T));
          },
          onComplete: c,
          onStop: p,
        }),
      )));
  }
  function w(b) {
    x(
      Object.assign(
        { type: "spring", stiffness: o, damping: s, restDelta: l },
        b,
      ),
    );
  }
  if (v(t)) w({ from: t, velocity: e, to: m(t) });
  else {
    let b = i * e + t;
    typeof u < "u" && (b = u(b));
    const T = m(b),
      C = T === n ? -1 : 1;
    let L, V;
    const A = (j) => {
      ((L = V),
        (V = j),
        (e = mo(j - L, Re().delta)),
        ((C === 1 && j > T) || (C === -1 && j < T)) &&
          w({ from: j, to: T, velocity: e }));
    };
    x({
      type: "decay",
      from: t,
      velocity: e,
      timeConstant: a,
      power: i,
      restDelta: l,
      modifyTarget: u,
      onUpdate: v(b) ? A : void 0,
    });
  }
  return { stop: () => (d == null ? void 0 : d.stop()) };
}
const Tn = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
  br = (t) => Tn(t) && t.hasOwnProperty("z"),
  ve = (t, e) => Math.abs(t - e);
function go(t, e) {
  if (wn(t) && wn(e)) return ve(t, e);
  if (Tn(t) && Tn(e)) {
    const n = ve(t.x, e.x),
      r = ve(t.y, e.y),
      i = br(t) && br(e) ? ve(t.z, e.z) : 0;
    return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
  }
}
const yo = (t, e) => 1 - 3 * e + 3 * t,
  bo = (t, e) => 3 * e - 6 * t,
  xo = (t) => 3 * t,
  Ne = (t, e, n) => ((yo(e, n) * t + bo(e, n)) * t + xo(e)) * t,
  wo = (t, e, n) => 3 * yo(e, n) * t * t + 2 * bo(e, n) * t + xo(e),
  xc = 1e-7,
  wc = 10;
function Sc(t, e, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = e + (n - e) / 2), (a = Ne(o, r, i) - t), a > 0 ? (n = o) : (e = o));
  while (Math.abs(a) > xc && ++s < wc);
  return o;
}
const Cc = 8,
  Tc = 0.001;
function Pc(t, e, n, r) {
  for (let i = 0; i < Cc; ++i) {
    const a = wo(e, n, r);
    if (a === 0) return e;
    const o = Ne(e, n, r) - t;
    e -= o / a;
  }
  return e;
}
const _e = 11,
  me = 1 / (_e - 1);
function _c(t, e, n, r) {
  if (t === e && n === r) return zn;
  const i = new Float32Array(_e);
  for (let o = 0; o < _e; ++o) i[o] = Ne(o * me, t, n);
  function a(o) {
    let s = 0,
      l = 1;
    const u = _e - 1;
    for (; l !== u && i[l] <= o; ++l) s += me;
    --l;
    const f = (o - i[l]) / (i[l + 1] - i[l]),
      h = s + f * me,
      c = wo(h, t, n);
    return c >= Tc ? Pc(o, h, t, n) : c === 0 ? h : Sc(o, s, s + me, t, n);
  }
  return (o) => (o === 0 || o === 1 ? o : Ne(a(o), e, r));
}
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 탭(Tap) 제스처 React 훅]
 * 역할: 모바일 환경의 터치 및 클릭다운 이벤트를 추적하여 컴포넌트 상태를 변경합니다.
 * --------------------------------------------------------------------------- */
function Ec(t) {
  var e = t.onTap,
    n = t.onTapStart,
    r = t.onTapCancel,
    i = t.whileTap,
    a = t.visualElement,
    o = e || n || r || i,
    s = y.useRef(!1),
    l = y.useRef(null),
    u = { passive: !(n || e || r || d) };
  function f() {
    var v;
    ((v = l.current) === null || v === void 0 || v.call(l), (l.current = null));
  }
  function h() {
    var v;
    return (
      f(),
      (s.current = !1),
      (v = a.animationState) === null || v === void 0 || v.setActive(O.Tap, !1),
      !Qi()
    );
  }
  function c(v, m) {
    h() &&
      (Ji(a.getInstance(), v.target)
        ? e == null || e(v, m)
        : r == null || r(v, m));
  }
  function p(v, m) {
    h() && (r == null || r(v, m));
  }
  function d(v, m) {
    var x;
    (f(),
      !s.current &&
        ((s.current = !0),
        (l.current = ze(
          kt(window, "pointerup", c, u),
          kt(window, "pointercancel", p, u),
        )),
        (x = a.animationState) === null ||
          x === void 0 ||
          x.setActive(O.Tap, !0),
        n == null || n(v, m)));
  }
  (Ve(a, "pointerdown", o ? d : void 0, u), to(f));
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 뷰포트 교차 감지 (Intersection Observer) 헬퍼]
 * --------------------------------------------------------------------------- */
var xr = new Set();
function Mc(t, e, n) {
  xr.has(e) || (console.warn(e), xr.add(e));
}
var Pn = new WeakMap(),
  en = new WeakMap(),
  Lc = function (t) {
    var e;
    (e = Pn.get(t.target)) === null || e === void 0 || e(t);
  },
  Vc = function (t) {
    t.forEach(Lc);
  };
function jc(t) {
  var e = t.root,
    n = nt(t, ["root"]),
    r = e || document;
  en.has(r) || en.set(r, {});
  var i = en.get(r),
    a = JSON.stringify(n);
  return (
    i[a] || (i[a] = new IntersectionObserver(Vc, S({ root: e }, n))),
    i[a]
  );
}
function Ac(t, e, n) {
  var r = jc(e);
  return (
    Pn.set(t, n),
    r.observe(t),
    function () {
      (Pn.delete(t), r.unobserve(t));
    }
  );
}
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 뷰포트 감지 React 훅 (whileInView)]
 * 역할: 스크롤 시 화면에 나타나면 애니메이션을 실행하는 로직입니다.
 * --------------------------------------------------------------------------- */
function Rc(t) {
  var e = t.visualElement,
    n = t.whileInView,
    r = t.onViewportEnter,
    i = t.onViewportLeave,
    a = t.viewport,
    o = a === void 0 ? {} : a,
    s = y.useRef({ hasEnteredView: !1, isInView: !1 }),
    l = !!(n || r || i);
  o.once && s.current.hasEnteredView && (l = !1);
  var u = typeof IntersectionObserver > "u" ? Oc : Ic;
  u(l, s.current, e, o);
}
var Nc = { some: 0, all: 1 };
function Ic(t, e, n, r) {
  var i = r.root,
    a = r.margin,
    o = r.amount,
    s = o === void 0 ? "some" : o,
    l = r.once;
  y.useEffect(
    function () {
      if (t) {
        var u = {
            root: i == null ? void 0 : i.current,
            rootMargin: a,
            threshold: typeof s == "number" ? s : Nc[s],
          },
          f = function (h) {
            var c,
              p = h.isIntersecting;
            if (
              e.isInView !== p &&
              ((e.isInView = p), !(l && !p && e.hasEnteredView))
            ) {
              (p && (e.hasEnteredView = !0),
                (c = n.animationState) === null ||
                  c === void 0 ||
                  c.setActive(O.InView, p));
              var d = n.getProps(),
                v = p ? d.onViewportEnter : d.onViewportLeave;
              v == null || v(h);
            }
          };
        return Ac(n.getInstance(), u, f);
      }
    },
    [t, i, a, s],
  );
}
function Oc(t, e, n, r) {
  var i = r.fallback,
    a = i === void 0 ? !0 : i;
  y.useEffect(
    function () {
      !t ||
        !a ||
        (mi !== "production" &&
          Mc(
            !1,
            "IntersectionObserver not available on this device. whileInView animations will trigger on mount.",
          ),
        requestAnimationFrame(function () {
          var o;
          e.hasEnteredView = !0;
          var s = n.getProps().onViewportEnter;
          (s == null || s(null),
            (o = n.animationState) === null ||
              o === void 0 ||
              o.setActive(O.InView, !0));
        }));
    },
    [t],
  );
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
var wt = function (t) {
    return function (e) {
      return (t(e), null);
    };
  },
  Dc = { inView: wt(Rc), tap: wt(Ec), focus: wt(vu), hover: wt(Pu) },
  kc = 0,
  Hc = function () {
    return kc++;
  },
  Fc = function () {
    return Bt(Hc);
  };
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: Exit 애니메이션 프레즌스(Presence) 관리 훅]
 * --------------------------------------------------------------------------- */
function So() {
  var t = y.useContext(He);
  if (t === null) return [!0, null];
  var e = t.isPresent,
    n = t.onExitComplete,
    r = t.register,
    i = Fc();
  y.useEffect(function () {
    return r(i);
  }, []);
  var a = function () {
    return n == null ? void 0 : n(i);
  };
  return !e && n ? [!1, a] : [!0];
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 배열/값 비교기 및 애니메이션 상태 전이 관리기]
 * --------------------------------------------------------------------------- */
function Co(t, e) {
  if (!Array.isArray(e)) return !1;
  var n = e.length;
  if (n !== t.length) return !1;
  for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
var Ie = function (t) {
    return t * 1e3;
  },
  wr = {
    linear: zn,
    easeIn: qn,
    easeInOut: lo,
    easeOut: Ku,
    circIn: uo,
    circInOut: Xu,
    circOut: Gn,
    backIn: Wn,
    backInOut: Ju,
    backOut: Qu,
    anticipate: tc,
    bounceIn: ic,
    bounceInOut: oc,
    bounceOut: Ae,
  },
  Sr = function (t) {
    if (Array.isArray(t)) {
      ee(t.length === 4);
      var e = H(t, 4),
        n = e[0],
        r = e[1],
        i = e[2],
        a = e[3];
      return _c(n, r, i, a);
    } else if (typeof t == "string") return (ee(wr[t] !== void 0), wr[t]);
    return t;
  },
  Bc = function (t) {
    return Array.isArray(t) && typeof t[0] != "number";
  },
  Cr = function (t, e) {
    return t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" && ht.test(e) && !e.startsWith("url("))
        );
  },
  _t = function () {
    return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
  },
  ge = function (t) {
    return {
      type: "spring",
      stiffness: 550,
      damping: t === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10,
    };
  },
  nn = function () {
    return { type: "keyframes", ease: "linear", duration: 0.3 };
  },
  Uc = function (t) {
    return { type: "keyframes", duration: 0.8, values: t };
  },
  Tr = {
    x: _t,
    y: _t,
    z: _t,
    rotate: _t,
    rotateX: _t,
    rotateY: _t,
    rotateZ: _t,
    scaleX: ge,
    scaleY: ge,
    scale: ge,
    opacity: nn,
    backgroundColor: nn,
    color: nn,
    default: ge,
  },
  zc = function (t, e) {
    var n;
    return (ie(e) ? (n = Uc) : (n = Tr[t] || Tr.default), S({ to: e }, n(e)));
  },
  qc = S(S({}, Ii), {
    color: Z,
    backgroundColor: Z,
    outlineColor: Z,
    fill: Z,
    stroke: Z,
    borderColor: Z,
    borderTopColor: Z,
    borderRightColor: Z,
    borderBottomColor: Z,
    borderLeftColor: Z,
    filter: yn,
    WebkitFilter: yn,
  }),
  $n = function (t) {
    return qc[t];
  };
function Zn(t, e) {
  var n,
    r = $n(t);
  return (
    r !== yn && (r = ht),
    (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, e)
  );
}
function Gc(t) {
  (t.when,
    t.delay,
    t.delayChildren,
    t.staggerChildren,
    t.staggerDirection,
    t.repeat,
    t.repeatType,
    t.repeatDelay,
    t.from);
  var e = nt(t, [
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
  ]);
  return !!Object.keys(e).length;
}
function Wc(t) {
  var e = t.ease,
    n = t.times,
    r = t.yoyo,
    i = t.flip,
    a = t.loop,
    o = nt(t, ["ease", "times", "yoyo", "flip", "loop"]),
    s = S({}, o);
  return (
    n && (s.offset = n),
    o.duration && (s.duration = Ie(o.duration)),
    o.repeatDelay && (s.repeatDelay = Ie(o.repeatDelay)),
    e && (s.ease = Bc(e) ? e.map(Sr) : Sr(e)),
    o.type === "tween" && (s.type = "keyframes"),
    (r || a || i) &&
      (r
        ? (s.repeatType = "reverse")
        : a
          ? (s.repeatType = "loop")
          : i && (s.repeatType = "mirror"),
      (s.repeat = a || r || i || o.repeat)),
    o.type !== "spring" && (s.type = "keyframes"),
    s
  );
}
function $c(t, e) {
  var n,
    r,
    i = Yn(t, e) || {};
  return (r = (n = i.delay) !== null && n !== void 0 ? n : t.delay) !== null &&
    r !== void 0
    ? r
    : 0;
}
function Zc(t) {
  return (
    Array.isArray(t.to) &&
      t.to[0] === null &&
      ((t.to = lt([], H(t.to), !1)), (t.to[0] = t.from)),
    t
  );
}
function Yc(t, e, n) {
  var r;
  return (
    Array.isArray(e.to) &&
      (((r = t.duration) !== null && r !== void 0) || (t.duration = 0.8)),
    Zc(e),
    Gc(t) || (t = S(S({}, t), zc(n, e.to))),
    S(S({}, e), Wc(t))
  );
}
function Kc(t, e, n, r, i) {
  var a,
    o = Yn(r, t),
    s = (a = o.from) !== null && a !== void 0 ? a : e.get(),
    l = Cr(t, n);
  s === "none" && l && typeof n == "string"
    ? (s = Zn(t, n))
    : Pr(s) && typeof n == "string"
      ? (s = _r(n))
      : !Array.isArray(n) && Pr(n) && typeof s == "string" && (n = _r(s));
  var u = Cr(t, s);
  function f() {
    var c = {
      from: s,
      to: n,
      velocity: e.getVelocity(),
      onComplete: i,
      onUpdate: function (p) {
        return e.set(p);
      },
    };
    return o.type === "inertia" || o.type === "decay"
      ? bc(S(S({}, c), o))
      : vo(
          S(S({}, Yc(o, c, t)), {
            onUpdate: function (p) {
              var d;
              (c.onUpdate(p),
                (d = o.onUpdate) === null || d === void 0 || d.call(o, p));
            },
            onComplete: function () {
              var p;
              (c.onComplete(),
                (p = o.onComplete) === null || p === void 0 || p.call(o));
            },
          }),
        );
  }
  function h() {
    var c,
      p,
      d = qi(n);
    return (
      e.set(d),
      i(),
      (c = o == null ? void 0 : o.onUpdate) === null ||
        c === void 0 ||
        c.call(o, d),
      (p = o == null ? void 0 : o.onComplete) === null ||
        p === void 0 ||
        p.call(o),
      { stop: function () {} }
    );
  }
  return !u || !l || o.type === !1 ? h : f;
}
function Pr(t) {
  return (
    t === 0 ||
    (typeof t == "string" && parseFloat(t) === 0 && t.indexOf(" ") === -1)
  );
}
function _r(t) {
  return typeof t == "number" ? 0 : Zn("", t);
}
function Yn(t, e) {
  return t[e] || t.default || t;
}
function Kn(t, e, n, r) {
  return (
    r === void 0 && (r = {}),
    e.start(function (i) {
      var a,
        o,
        s = Kc(t, e, n, r, i),
        l = $c(r, t),
        u = function () {
          return (o = s());
        };
      return (
        l ? (a = window.setTimeout(u, Ie(l))) : u(),
        function () {
          (clearTimeout(a), o == null || o.stop());
        }
      );
    })
  );
}
var Xc = function (t) {
    return /^\-?\d*\.?\d+$/.test(t);
  },
  Qc = function (t) {
    return /^0[^.\s]+$/.test(t);
  };
function Xn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Qn(t, e) {
  var n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
var Yt = (function () {
    function t() {
      this.subscriptions = [];
    }
    return (
      (t.prototype.add = function (e) {
        var n = this;
        return (
          Xn(this.subscriptions, e),
          function () {
            return Qn(n.subscriptions, e);
          }
        );
      }),
      (t.prototype.notify = function (e, n, r) {
        var i = this.subscriptions.length;
        if (i)
          if (i === 1) this.subscriptions[0](e, n, r);
          else
            for (var a = 0; a < i; a++) {
              var o = this.subscriptions[a];
              o && o(e, n, r);
            }
      }),
      (t.prototype.getSize = function () {
        return this.subscriptions.length;
      }),
      (t.prototype.clear = function () {
        this.subscriptions.length = 0;
      }),
      t
    );
  })(),
  Jc = function (t) {
    return !isNaN(parseFloat(t));
  },
  tf = (function () {
    function t(e) {
      var n = this;
      ((this.version = "6.5.1"),
        (this.timeDelta = 0),
        (this.lastUpdated = 0),
        (this.updateSubscribers = new Yt()),
        (this.velocityUpdateSubscribers = new Yt()),
        (this.renderSubscribers = new Yt()),
        (this.canTrackVelocity = !1),
        (this.updateAndNotify = function (r, i) {
          (i === void 0 && (i = !0), (n.prev = n.current), (n.current = r));
          var a = Re(),
            o = a.delta,
            s = a.timestamp;
          (n.lastUpdated !== s &&
            ((n.timeDelta = o),
            (n.lastUpdated = s),
            at.postRender(n.scheduleVelocityCheck)),
            n.prev !== n.current && n.updateSubscribers.notify(n.current),
            n.velocityUpdateSubscribers.getSize() &&
              n.velocityUpdateSubscribers.notify(n.getVelocity()),
            i && n.renderSubscribers.notify(n.current));
        }),
        (this.scheduleVelocityCheck = function () {
          return at.postRender(n.velocityCheck);
        }),
        (this.velocityCheck = function (r) {
          var i = r.timestamp;
          i !== n.lastUpdated &&
            ((n.prev = n.current),
            n.velocityUpdateSubscribers.notify(n.getVelocity()));
        }),
        (this.hasAnimated = !1),
        (this.prev = this.current = e),
        (this.canTrackVelocity = Jc(this.current)));
    }
    return (
      (t.prototype.onChange = function (e) {
        return this.updateSubscribers.add(e);
      }),
      (t.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
      }),
      (t.prototype.onRenderRequest = function (e) {
        return (e(this.get()), this.renderSubscribers.add(e));
      }),
      (t.prototype.attach = function (e) {
        this.passiveEffect = e;
      }),
      (t.prototype.set = function (e, n) {
        (n === void 0 && (n = !0),
          !n || !this.passiveEffect
            ? this.updateAndNotify(e, n)
            : this.passiveEffect(e, this.updateAndNotify));
      }),
      (t.prototype.get = function () {
        return this.current;
      }),
      (t.prototype.getPrevious = function () {
        return this.prev;
      }),
      (t.prototype.getVelocity = function () {
        return this.canTrackVelocity
          ? mo(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
          : 0;
      }),
      (t.prototype.start = function (e) {
        var n = this;
        return (
          this.stop(),
          new Promise(function (r) {
            ((n.hasAnimated = !0), (n.stopAnimation = e(r)));
          }).then(function () {
            return n.clearAnimation();
          })
        );
      }),
      (t.prototype.stop = function () {
        (this.stopAnimation && this.stopAnimation(), this.clearAnimation());
      }),
      (t.prototype.isAnimating = function () {
        return !!this.stopAnimation;
      }),
      (t.prototype.clearAnimation = function () {
        this.stopAnimation = null;
      }),
      (t.prototype.destroy = function () {
        (this.updateSubscribers.clear(),
          this.renderSubscribers.clear(),
          this.stop());
      }),
      t
    );
  })();
function Vt(t) {
  return new tf(t);
}
var To = function (t) {
    return function (e) {
      return e.test(t);
    };
  },
  ef = {
    test: function (t) {
      return t === "auto";
    },
    parse: function (t) {
      return t;
    },
  },
  Po = [jt, M, ut, gt, Ul, Bl, ef],
  qt = function (t) {
    return Po.find(To(t));
  },
  nf = lt(lt([], H(Po), !1), [Z, ht], !1),
  rf = function (t) {
    return nf.find(To(t));
  };
function of(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Vt(n));
}
function af(t, e) {
  var n = Fe(t, e),
    r = n ? t.makeTargetAnimatable(n, !1) : {},
    i = r.transitionEnd,
    a = i === void 0 ? {} : i;
  r.transition;
  var o = nt(r, ["transitionEnd", "transition"]);
  o = S(S({}, o), a);
  for (var s in o) {
    var l = qi(o[s]);
    of(t, s, l);
  }
}
function sf(t, e, n) {
  var r,
    i,
    a,
    o,
    s = Object.keys(e).filter(function (p) {
      return !t.hasValue(p);
    }),
    l = s.length;
  if (l)
    for (var u = 0; u < l; u++) {
      var f = s[u],
        h = e[f],
        c = null;
      (Array.isArray(h) && (c = h[0]),
        c === null &&
          (c =
            (i = (r = n[f]) !== null && r !== void 0 ? r : t.readValue(f)) !==
              null && i !== void 0
              ? i
              : e[f]),
        c != null &&
          (typeof c == "string" && (Xc(c) || Qc(c))
            ? (c = parseFloat(c))
            : !rf(c) && ht.test(h) && (c = Zn(f, h)),
          t.addValue(f, Vt(c)),
          ((a = (o = n)[f]) !== null && a !== void 0) || (o[f] = c),
          t.setBaseTarget(f, c)));
    }
}
function lf(t, e) {
  if (e) {
    var n = e[t] || e.default || e;
    return n.from;
  }
}
function uf(t, e, n) {
  var r,
    i,
    a = {};
  for (var o in t)
    a[o] =
      (r = lf(o, e)) !== null && r !== void 0
        ? r
        : (i = n.getValue(o)) === null || i === void 0
          ? void 0
          : i.get();
  return a;
}
function cf(t, e, n) {
  (n === void 0 && (n = {}), t.notifyAnimationStart(e));
  var r;
  if (Array.isArray(e)) {
    var i = e.map(function (o) {
      return _n(t, o, n);
    });
    r = Promise.all(i);
  } else if (typeof e == "string") r = _n(t, e, n);
  else {
    var a = typeof e == "function" ? Fe(t, e, n.custom) : e;
    r = _o(t, a, n);
  }
  return r.then(function () {
    return t.notifyAnimationComplete(e);
  });
}
function _n(t, e, n) {
  var r;
  n === void 0 && (n = {});
  var i = Fe(t, e, n.custom),
    a = (i || {}).transition,
    o = a === void 0 ? t.getDefaultTransition() || {} : a;
  n.transitionOverride && (o = n.transitionOverride);
  var s = i
      ? function () {
          return _o(t, i, n);
        }
      : function () {
          return Promise.resolve();
        },
    l =
      !((r = t.variantChildren) === null || r === void 0) && r.size
        ? function (p) {
            p === void 0 && (p = 0);
            var d = o.delayChildren,
              v = d === void 0 ? 0 : d,
              m = o.staggerChildren,
              x = o.staggerDirection;
            return ff(t, e, v + p, m, x, n);
          }
        : function () {
            return Promise.resolve();
          },
    u = o.when;
  if (u) {
    var f = H(u === "beforeChildren" ? [s, l] : [l, s], 2),
      h = f[0],
      c = f[1];
    return h().then(c);
  } else return Promise.all([s(), l(n.delay)]);
}
function _o(t, e, n) {
  var r,
    i = n === void 0 ? {} : n,
    a = i.delay,
    o = a === void 0 ? 0 : a,
    s = i.transitionOverride,
    l = i.type,
    u = t.makeTargetAnimatable(e),
    f = u.transition,
    h = f === void 0 ? t.getDefaultTransition() : f,
    c = u.transitionEnd,
    p = nt(u, ["transition", "transitionEnd"]);
  s && (h = s);
  var d = [],
    v =
      l &&
      ((r = t.animationState) === null || r === void 0
        ? void 0
        : r.getState()[l]);
  for (var m in p) {
    var x = t.getValue(m),
      w = p[m];
    if (!(!x || w === void 0 || (v && hf(v, m)))) {
      var b = S({ delay: o }, h);
      t.shouldReduceMotion &&
        le(m) &&
        (b = S(S({}, b), { type: !1, delay: 0 }));
      var T = Kn(m, x, w, b);
      d.push(T);
    }
  }
  return Promise.all(d).then(function () {
    c && af(t, c);
  });
}
function ff(t, e, n, r, i, a) {
  (n === void 0 && (n = 0), r === void 0 && (r = 0), i === void 0 && (i = 1));
  var o = [],
    s = (t.variantChildren.size - 1) * r,
    l =
      i === 1
        ? function (u) {
            return (u === void 0 && (u = 0), u * r);
          }
        : function (u) {
            return (u === void 0 && (u = 0), s - u * r);
          };
  return (
    Array.from(t.variantChildren)
      .sort(df)
      .forEach(function (u, f) {
        o.push(
          _n(u, e, S(S({}, a), { delay: n + l(f) })).then(function () {
            return u.notifyAnimationComplete(e);
          }),
        );
      }),
    Promise.all(o)
  );
}
function df(t, e) {
  return t.sortNodePosition(e);
}
function hf(t, e) {
  var n = t.protectedKeys,
    r = t.needsAnimating,
    i = n.hasOwnProperty(e) && r[e] !== !0;
  return ((r[e] = !1), i);
}
var Jn = [O.Animate, O.InView, O.Focus, O.Hover, O.Tap, O.Drag, O.Exit],
  pf = lt([], H(Jn), !1).reverse(),
  vf = Jn.length;
function mf(t) {
  return function (e) {
    return Promise.all(
      e.map(function (n) {
        var r = n.animation,
          i = n.options;
        return cf(t, r, i);
      }),
    );
  };
}
function gf(t) {
  var e = mf(t),
    n = bf(),
    r = {},
    i = !0,
    a = function (f, h) {
      var c = Fe(t, h);
      if (c) {
        c.transition;
        var p = c.transitionEnd,
          d = nt(c, ["transition", "transitionEnd"]);
        f = S(S(S({}, f), d), p);
      }
      return f;
    };
  function o(f) {
    return r[f] !== void 0;
  }
  function s(f) {
    e = f(t);
  }
  function l(f, h) {
    for (
      var c,
        p = t.getProps(),
        d = t.getVariantContext(!0) || {},
        v = [],
        m = new Set(),
        x = {},
        w = 1 / 0,
        b = function (V) {
          var A = pf[V],
            j = n[A],
            I = (c = p[A]) !== null && c !== void 0 ? c : d[A],
            q = ot(I),
            F = A === h ? j.isActive : null;
          F === !1 && (w = V);
          var W = I === d[A] && I !== p[A] && q;
          if (
            (W && i && t.manuallyAnimateOnMount && (W = !1),
            (j.protectedKeys = S({}, x)),
            (!j.isActive && F === null) ||
              (!I && !j.prevProp) ||
              Hn(I) ||
              typeof I == "boolean")
          )
            return "continue";
          var J = yf(j.prevProp, I),
            rt = J || (A === h && j.isActive && !W && q) || (V > w && q),
            vt = Array.isArray(I) ? I : [I],
            tt = vt.reduce(a, {});
          F === !1 && (tt = {});
          var Ut = j.prevResolvedValues,
            At = Ut === void 0 ? {} : Ut,
            de = S(S({}, At), tt),
            Rt = function (E) {
              ((rt = !0), m.delete(E), (j.needsAnimating[E] = !0));
            };
          for (var Y in de) {
            var N = tt[Y],
              _ = At[Y];
            x.hasOwnProperty(Y) ||
              (N !== _
                ? ie(N) && ie(_)
                  ? !Co(N, _) || J
                    ? Rt(Y)
                    : (j.protectedKeys[Y] = !0)
                  : N !== void 0
                    ? Rt(Y)
                    : m.add(Y)
                : N !== void 0 && m.has(Y)
                  ? Rt(Y)
                  : (j.protectedKeys[Y] = !0));
          }
          ((j.prevProp = I),
            (j.prevResolvedValues = tt),
            j.isActive && (x = S(S({}, x), tt)),
            i && t.blockInitialAnimation && (rt = !1),
            rt &&
              !W &&
              v.push.apply(
                v,
                lt(
                  [],
                  H(
                    vt.map(function (E) {
                      return { animation: E, options: S({ type: A }, f) };
                    }),
                  ),
                  !1,
                ),
              ));
        },
        T = 0;
      T < vf;
      T++
    )
      b(T);
    if (((r = S({}, x)), m.size)) {
      var C = {};
      (m.forEach(function (V) {
        var A = t.getBaseTarget(V);
        A !== void 0 && (C[V] = A);
      }),
        v.push({ animation: C }));
    }
    var L = !!v.length;
    return (
      i && p.initial === !1 && !t.manuallyAnimateOnMount && (L = !1),
      (i = !1),
      L ? e(v) : Promise.resolve()
    );
  }
  function u(f, h, c) {
    var p;
    if (n[f].isActive === h) return Promise.resolve();
    ((p = t.variantChildren) === null ||
      p === void 0 ||
      p.forEach(function (m) {
        var x;
        return (x = m.animationState) === null || x === void 0
          ? void 0
          : x.setActive(f, h);
      }),
      (n[f].isActive = h));
    var d = l(c, f);
    for (var v in n) n[v].protectedKeys = {};
    return d;
  }
  return {
    isAnimated: o,
    animateChanges: l,
    setActive: u,
    setAnimateFunction: s,
    getState: function () {
      return n;
    },
  };
}
function yf(t, e) {
  return typeof e == "string" ? e !== t : xi(e) ? !Co(e, t) : !1;
}
function Et(t) {
  return (
    t === void 0 && (t = !1),
    {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    }
  );
}
function bf() {
  var t;
  return (
    (t = {}),
    (t[O.Animate] = Et(!0)),
    (t[O.InView] = Et()),
    (t[O.Hover] = Et()),
    (t[O.Tap] = Et()),
    (t[O.Drag] = Et()),
    (t[O.Focus] = Et()),
    (t[O.Exit] = Et()),
    t
  );
}
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: Exit 상태 및 애니메이션 관찰자]
 * 역할: 컴포넌트가 사라질 때(Exit) 곧바로 DOM을 지우지 않고 애니메이션 종료를 대기합니다.
 * --------------------------------------------------------------------------- */
var xf = {
    animation: wt(function (t) {
      var e = t.visualElement,
        n = t.animate;
      (e.animationState || (e.animationState = gf(e)),
        Hn(n) &&
          y.useEffect(
            function () {
              return n.subscribe(e);
            },
            [n],
          ));
    }),
    exit: wt(function (t) {
      var e = t.custom,
        n = t.visualElement,
        r = H(So(), 2),
        i = r[0],
        a = r[1],
        o = y.useContext(He);
      y.useEffect(
        function () {
          var s, l;
          n.isPresent = i;
          var u =
            (s = n.animationState) === null || s === void 0
              ? void 0
              : s.setActive(O.Exit, !i, {
                  custom:
                    (l = o == null ? void 0 : o.custom) !== null && l !== void 0
                      ? l
                      : e,
                });
          !i && (u == null || u.then(a));
        },
        [i],
      );
    }),
  },
  // === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

  // === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
  /* ---------------------------------------------------------------------------
   * [기능 분류: 패닝(Panning) 세션 및 이동거리 계산기]
   * 역할: 사용자가 마우스/터치로 3D 책을 좌우로 잡아당길 때(드래그) 이동한 거리(Delta)와
   * 가속도(Velocity)를 추적하여 Book3D.js 엔진으로 전달할 데이터를 생산합니다.
   * --------------------------------------------------------------------------- */
  Eo = (function () {
    function t(e, n, r) {
      var i = this,
        a = r === void 0 ? {} : r,
        o = a.transformPagePoint;
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = function () {
          if (i.lastMoveEvent && i.lastMoveEventInfo) {
            var c = on(i.lastMoveEventInfo, i.history),
              p = i.startEvent !== null,
              d = go(c.offset, { x: 0, y: 0 }) >= 3;
            if (!(!p && !d)) {
              var v = c.point,
                m = Re().timestamp;
              i.history.push(S(S({}, v), { timestamp: m }));
              var x = i.handlers,
                w = x.onStart,
                b = x.onMove;
              (p ||
                (w && w(i.lastMoveEvent, c), (i.startEvent = i.lastMoveEvent)),
                b && b(i.lastMoveEvent, c));
            }
          }
        }),
        (this.handlePointerMove = function (c, p) {
          if (
            ((i.lastMoveEvent = c),
            (i.lastMoveEventInfo = rn(p, i.transformPagePoint)),
            Wi(c) && c.buttons === 0)
          ) {
            i.handlePointerUp(c, p);
            return;
          }
          at.update(i.updatePoint, !0);
        }),
        (this.handlePointerUp = function (c, p) {
          i.end();
          var d = i.handlers,
            v = d.onEnd,
            m = d.onSessionEnd,
            x = on(rn(p, i.transformPagePoint), i.history);
          (i.startEvent && v && v(c, x), m && m(c, x));
        }),
        !($i(e) && e.touches.length > 1))
      ) {
        ((this.handlers = n), (this.transformPagePoint = o));
        var s = Fn(e),
          l = rn(s, this.transformPagePoint),
          u = l.point,
          f = Re().timestamp;
        this.history = [S(S({}, u), { timestamp: f })];
        var h = n.onSessionStart;
        (h && h(e, on(l, this.history)),
          (this.removeListeners = ze(
            kt(window, "pointermove", this.handlePointerMove),
            kt(window, "pointerup", this.handlePointerUp),
            kt(window, "pointercancel", this.handlePointerUp),
          )));
      }
    }
    return (
      (t.prototype.updateHandlers = function (e) {
        this.handlers = e;
      }),
      (t.prototype.end = function () {
        (this.removeListeners && this.removeListeners(),
          Lt.update(this.updatePoint));
      }),
      t
    );
  })();
function rn(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Er(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function on(t, e) {
  var n = t.point;
  return {
    point: n,
    delta: Er(n, Mo(e)),
    offset: Er(n, wf(e)),
    velocity: Sf(e, 0.1),
  };
}
function wf(t) {
  return t[0];
}
function Mo(t) {
  return t[t.length - 1];
}
function Sf(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  for (
    var n = t.length - 1, r = null, i = Mo(t);
    n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > Ie(e)));
  )
    n--;
  if (!r) return { x: 0, y: 0 };
  var a = (i.timestamp - r.timestamp) / 1e3;
  if (a === 0) return { x: 0, y: 0 };
  var o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function pt(t) {
  return t.max - t.min;
}
function Mr(t, e, n) {
  return (e === void 0 && (e = 0), n === void 0 && (n = 0.01), go(t, e) < n);
}
function Lr(t, e, n, r) {
  (r === void 0 && (r = 0.5),
    (t.origin = r),
    (t.originPoint = k(e.min, e.max, t.origin)),
    (t.scale = pt(n) / pt(e)),
    (Mr(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    (t.translate = k(n.min, n.max, t.origin) - t.originPoint),
    (Mr(t.translate) || isNaN(t.translate)) && (t.translate = 0));
}
function Kt(t, e, n, r) {
  (Lr(t.x, e.x, n.x, r == null ? void 0 : r.originX),
    Lr(t.y, e.y, n.y, r == null ? void 0 : r.originY));
}
function Vr(t, e, n) {
  ((t.min = n.min + e.min), (t.max = t.min + pt(e)));
}
function Cf(t, e, n) {
  (Vr(t.x, e.x, n.x), Vr(t.y, e.y, n.y));
}
function jr(t, e, n) {
  ((t.min = e.min - n.min), (t.max = t.min + pt(e)));
}
function Xt(t, e, n) {
  (jr(t.x, e.x, n.x), jr(t.y, e.y, n.y));
}
function Tf(t, e, n) {
  var r = e.min,
    i = e.max;
  return (
    r !== void 0 && t < r
      ? (t = n ? k(r, t, n.min) : Math.max(t, r))
      : i !== void 0 && t > i && (t = n ? k(i, t, n.max) : Math.min(t, i)),
    t
  );
}
function Ar(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function Pf(t, e) {
  var n = e.top,
    r = e.left,
    i = e.bottom,
    a = e.right;
  return { x: Ar(t.x, r, a), y: Ar(t.y, n, i) };
}
function Rr(t, e) {
  var n,
    r = e.min - t.min,
    i = e.max - t.max;
  return (
    e.max - e.min < t.max - t.min &&
      ((n = H([i, r], 2)), (r = n[0]), (i = n[1])),
    { min: r, max: i }
  );
}
function _f(t, e) {
  return { x: Rr(t.x, e.x), y: Rr(t.y, e.y) };
}
function Ef(t, e) {
  var n = 0.5,
    r = pt(t),
    i = pt(e);
  return (
    i > r
      ? (n = oe(e.min, e.max - r, t.min))
      : r > i && (n = oe(t.min, t.max - i, e.min)),
    je(0, 1, n)
  );
}
function Mf(t, e) {
  var n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
var En = 0.35;
function Lf(t) {
  return (
    t === void 0 && (t = En),
    t === !1 ? (t = 0) : t === !0 && (t = En),
    { x: Nr(t, "left", "right"), y: Nr(t, "top", "bottom") }
  );
}
function Nr(t, e, n) {
  return { min: Ir(t, e), max: Ir(t, n) };
}
function Ir(t, e) {
  var n;
  return typeof t == "number" ? t : (n = t[e]) !== null && n !== void 0 ? n : 0;
}
var Or = function () {
    return { translate: 0, scale: 1, origin: 0, originPoint: 0 };
  },
  Qt = function () {
    return { x: Or(), y: Or() };
  },
  Dr = function () {
    return { min: 0, max: 0 };
  },
  G = function () {
    return { x: Dr(), y: Dr() };
  };
function st(t) {
  return [t("x"), t("y")];
}
function Lo(t) {
  var e = t.top,
    n = t.left,
    r = t.right,
    i = t.bottom;
  return { x: { min: n, max: r }, y: { min: e, max: i } };
}
function Vf(t) {
  var e = t.x,
    n = t.y;
  return { top: n.min, right: e.max, bottom: n.max, left: e.min };
}
function jf(t, e) {
  if (!e) return t;
  var n = e({ x: t.left, y: t.top }),
    r = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function an(t) {
  return t === void 0 || t === 1;
}
function Vo(t) {
  var e = t.scale,
    n = t.scaleX,
    r = t.scaleY;
  return !an(e) || !an(n) || !an(r);
}
function yt(t) {
  return (
    Vo(t) || kr(t.x) || kr(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
  );
}
function kr(t) {
  return t && t !== "0%";
}
function Oe(t, e, n) {
  var r = t - n,
    i = e * r;
  return n + i;
}
function Hr(t, e, n, r, i) {
  return (i !== void 0 && (t = Oe(t, i, r)), Oe(t, n, r) + e);
}
function Mn(t, e, n, r, i) {
  (e === void 0 && (e = 0),
    n === void 0 && (n = 1),
    (t.min = Hr(t.min, e, n, r, i)),
    (t.max = Hr(t.max, e, n, r, i)));
}
function jo(t, e) {
  var n = e.x,
    r = e.y;
  (Mn(t.x, n.translate, n.scale, n.originPoint),
    Mn(t.y, r.translate, r.scale, r.originPoint));
}
function Af(t, e, n, r) {
  var i, a;
  r === void 0 && (r = !1);
  var o = n.length;
  if (o) {
    e.x = e.y = 1;
    for (var s, l, u = 0; u < o; u++)
      ((s = n[u]),
        (l = s.projectionDelta),
        ((a = (i = s.instance) === null || i === void 0 ? void 0 : i.style) ===
          null || a === void 0
          ? void 0
          : a.display) !== "contents" &&
          (r &&
            s.options.layoutScroll &&
            s.scroll &&
            s !== s.root &&
            Dt(t, { x: -s.scroll.x, y: -s.scroll.y }),
          l && ((e.x *= l.x.scale), (e.y *= l.y.scale), jo(t, l)),
          r && yt(s.latestValues) && Dt(t, s.latestValues)));
  }
}
function bt(t, e) {
  ((t.min = t.min + e), (t.max = t.max + e));
}
function Fr(t, e, n) {
  var r = H(n, 3),
    i = r[0],
    a = r[1],
    o = r[2],
    s = e[o] !== void 0 ? e[o] : 0.5,
    l = k(t.min, t.max, s);
  Mn(t, e[i], e[a], l, e.scale);
}
var Rf = ["x", "scaleX", "originX"],
  Nf = ["y", "scaleY", "originY"];
function Dt(t, e) {
  (Fr(t.x, e, Rf), Fr(t.y, e, Nf));
}
function Ao(t, e) {
  return Lo(jf(t.getBoundingClientRect(), e));
}
function If(t, e, n) {
  var r = Ao(t, n),
    i = e.scroll;
  return (i && (bt(r.x, i.x), bt(r.y, i.y)), r);
}
var Of = new WeakMap(),
  Df = (function () {
    function t(e) {
      ((this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = G()),
        (this.visualElement = e));
    }
    return (
      (t.prototype.start = function (e, n) {
        var r = this,
          i = n === void 0 ? {} : n,
          a = i.snapToCursor,
          o = a === void 0 ? !1 : a;
        if (this.visualElement.isPresent !== !1) {
          var s = function (h) {
              (r.stopAnimation(), o && r.snapToCursor(Fn(h, "page").point));
            },
            l = function (h, c) {
              var p,
                d = r.getProps(),
                v = d.drag,
                m = d.dragPropagation,
                x = d.onDragStart;
              (v &&
                !m &&
                (r.openGlobalLock && r.openGlobalLock(),
                (r.openGlobalLock = Xi(v)),
                !r.openGlobalLock)) ||
                ((r.isDragging = !0),
                (r.currentDirection = null),
                r.resolveConstraints(),
                r.visualElement.projection &&
                  ((r.visualElement.projection.isAnimationBlocked = !0),
                  (r.visualElement.projection.target = void 0)),
                st(function (w) {
                  var b,
                    T,
                    C = r.getAxisMotionValue(w).get() || 0;
                  if (ut.test(C)) {
                    var L =
                      (T =
                        (b = r.visualElement.projection) === null ||
                        b === void 0
                          ? void 0
                          : b.layout) === null || T === void 0
                        ? void 0
                        : T.actual[w];
                    if (L) {
                      var V = pt(L);
                      C = V * (parseFloat(C) / 100);
                    }
                  }
                  r.originPoint[w] = C;
                }),
                x == null || x(h, c),
                (p = r.visualElement.animationState) === null ||
                  p === void 0 ||
                  p.setActive(O.Drag, !0));
            },
            u = function (h, c) {
              var p = r.getProps(),
                d = p.dragPropagation,
                v = p.dragDirectionLock,
                m = p.onDirectionLock,
                x = p.onDrag;
              if (!(!d && !r.openGlobalLock)) {
                var w = c.offset;
                if (v && r.currentDirection === null) {
                  ((r.currentDirection = kf(w)),
                    r.currentDirection !== null &&
                      (m == null || m(r.currentDirection)));
                  return;
                }
                (r.updateAxis("x", c.point, w),
                  r.updateAxis("y", c.point, w),
                  r.visualElement.syncRender(),
                  x == null || x(h, c));
              }
            },
            f = function (h, c) {
              return r.stop(h, c);
            };
          this.panSession = new Eo(
            e,
            { onSessionStart: s, onStart: l, onMove: u, onSessionEnd: f },
            { transformPagePoint: this.visualElement.getTransformPagePoint() },
          );
        }
      }),
      (t.prototype.stop = function (e, n) {
        var r = this.isDragging;
        if ((this.cancel(), !!r)) {
          var i = n.velocity;
          this.startAnimation(i);
          var a = this.getProps().onDragEnd;
          a == null || a(e, n);
        }
      }),
      (t.prototype.cancel = function () {
        var e, n;
        ((this.isDragging = !1),
          this.visualElement.projection &&
            (this.visualElement.projection.isAnimationBlocked = !1),
          (e = this.panSession) === null || e === void 0 || e.end(),
          (this.panSession = void 0));
        var r = this.getProps().dragPropagation;
        (!r &&
          this.openGlobalLock &&
          (this.openGlobalLock(), (this.openGlobalLock = null)),
          (n = this.visualElement.animationState) === null ||
            n === void 0 ||
            n.setActive(O.Drag, !1));
      }),
      (t.prototype.updateAxis = function (e, n, r) {
        var i = this.getProps().drag;
        if (!(!r || !ye(e, i, this.currentDirection))) {
          var a = this.getAxisMotionValue(e),
            o = this.originPoint[e] + r[e];
          (this.constraints &&
            this.constraints[e] &&
            (o = Tf(o, this.constraints[e], this.elastic[e])),
            a.set(o));
        }
      }),
      (t.prototype.resolveConstraints = function () {
        var e = this,
          n = this.getProps(),
          r = n.dragConstraints,
          i = n.dragElastic,
          a = (this.visualElement.projection || {}).layout,
          o = this.constraints;
        (r && Ot(r)
          ? this.constraints ||
            (this.constraints = this.resolveRefConstraints())
          : r && a
            ? (this.constraints = Pf(a.actual, r))
            : (this.constraints = !1),
          (this.elastic = Lf(i)),
          o !== this.constraints &&
            a &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            st(function (s) {
              e.getAxisMotionValue(s) &&
                (e.constraints[s] = Mf(a.actual[s], e.constraints[s]));
            }));
      }),
      (t.prototype.resolveRefConstraints = function () {
        var e = this.getProps(),
          n = e.dragConstraints,
          r = e.onMeasureDragConstraints;
        if (!n || !Ot(n)) return !1;
        var i = n.current,
          a = this.visualElement.projection;
        if (!a || !a.layout) return !1;
        var o = If(i, a.root, this.visualElement.getTransformPagePoint()),
          s = _f(a.layout.actual, o);
        if (r) {
          var l = r(Vf(s));
          ((this.hasMutatedConstraints = !!l), l && (s = Lo(l)));
        }
        return s;
      }),
      (t.prototype.startAnimation = function (e) {
        var n = this,
          r = this.getProps(),
          i = r.drag,
          a = r.dragMomentum,
          o = r.dragElastic,
          s = r.dragTransition,
          l = r.dragSnapToOrigin,
          u = r.onDragTransitionEnd,
          f = this.constraints || {},
          h = st(function (c) {
            var p;
            if (ye(c, i, n.currentDirection)) {
              var d =
                (p = f == null ? void 0 : f[c]) !== null && p !== void 0
                  ? p
                  : {};
              l && (d = { min: 0, max: 0 });
              var v = o ? 200 : 1e6,
                m = o ? 40 : 1e7,
                x = S(
                  S(
                    {
                      type: "inertia",
                      velocity: a ? e[c] : 0,
                      bounceStiffness: v,
                      bounceDamping: m,
                      timeConstant: 750,
                      restDelta: 1,
                      restSpeed: 10,
                    },
                    s,
                  ),
                  d,
                );
              return n.startAxisValueAnimation(c, x);
            }
          });
        return Promise.all(h).then(u);
      }),
      (t.prototype.startAxisValueAnimation = function (e, n) {
        var r = this.getAxisMotionValue(e);
        return Kn(e, r, 0, n);
      }),
      (t.prototype.stopAnimation = function () {
        var e = this;
        st(function (n) {
          return e.getAxisMotionValue(n).stop();
        });
      }),
      (t.prototype.getAxisMotionValue = function (e) {
        var n,
          r,
          i = "_drag" + e.toUpperCase(),
          a = this.visualElement.getProps()[i];
        return (
          a ||
          this.visualElement.getValue(
            e,
            (r =
              (n = this.visualElement.getProps().initial) === null ||
              n === void 0
                ? void 0
                : n[e]) !== null && r !== void 0
              ? r
              : 0,
          )
        );
      }),
      (t.prototype.snapToCursor = function (e) {
        var n = this;
        st(function (r) {
          var i = n.getProps().drag;
          if (ye(r, i, n.currentDirection)) {
            var a = n.visualElement.projection,
              o = n.getAxisMotionValue(r);
            if (a && a.layout) {
              var s = a.layout.actual[r],
                l = s.min,
                u = s.max;
              o.set(e[r] - k(l, u, 0.5));
            }
          }
        });
      }),
      (t.prototype.scalePositionWithinConstraints = function () {
        var e = this,
          n,
          r = this.getProps(),
          i = r.drag,
          a = r.dragConstraints,
          o = this.visualElement.projection;
        if (!(!Ot(a) || !o || !this.constraints)) {
          this.stopAnimation();
          var s = { x: 0, y: 0 };
          st(function (u) {
            var f = e.getAxisMotionValue(u);
            if (f) {
              var h = f.get();
              s[u] = Ef({ min: h, max: h }, e.constraints[u]);
            }
          });
          var l = this.visualElement.getProps().transformTemplate;
          ((this.visualElement.getInstance().style.transform = l
            ? l({}, "")
            : "none"),
            (n = o.root) === null || n === void 0 || n.updateScroll(),
            o.updateLayout(),
            this.resolveConstraints(),
            st(function (u) {
              if (ye(u, i, null)) {
                var f = e.getAxisMotionValue(u),
                  h = e.constraints[u],
                  c = h.min,
                  p = h.max;
                f.set(k(c, p, s[u]));
              }
            }));
        }
      }),
      (t.prototype.addListeners = function () {
        var e = this,
          n;
        Of.set(this.visualElement, this);
        var r = this.visualElement.getInstance(),
          i = kt(r, "pointerdown", function (u) {
            var f = e.getProps(),
              h = f.drag,
              c = f.dragListener,
              p = c === void 0 ? !0 : c;
            h && p && e.start(u);
          }),
          a = function () {
            var u = e.getProps().dragConstraints;
            Ot(u) && (e.constraints = e.resolveRefConstraints());
          },
          o = this.visualElement.projection,
          s = o.addEventListener("measure", a);
        (o &&
          !o.layout &&
          ((n = o.root) === null || n === void 0 || n.updateScroll(),
          o.updateLayout()),
          a());
        var l = Ue(window, "resize", function () {
          return e.scalePositionWithinConstraints();
        });
        return (
          o.addEventListener("didUpdate", function (u) {
            var f = u.delta,
              h = u.hasLayoutChanged;
            e.isDragging &&
              h &&
              (st(function (c) {
                var p = e.getAxisMotionValue(c);
                p &&
                  ((e.originPoint[c] += f[c].translate),
                  p.set(p.get() + f[c].translate));
              }),
              e.visualElement.syncRender());
          }),
          function () {
            (l(), i(), s());
          }
        );
      }),
      (t.prototype.getProps = function () {
        var e = this.visualElement.getProps(),
          n = e.drag,
          r = n === void 0 ? !1 : n,
          i = e.dragDirectionLock,
          a = i === void 0 ? !1 : i,
          o = e.dragPropagation,
          s = o === void 0 ? !1 : o,
          l = e.dragConstraints,
          u = l === void 0 ? !1 : l,
          f = e.dragElastic,
          h = f === void 0 ? En : f,
          c = e.dragMomentum,
          p = c === void 0 ? !0 : c;
        return S(S({}, e), {
          drag: r,
          dragDirectionLock: a,
          dragPropagation: s,
          dragConstraints: u,
          dragElastic: h,
          dragMomentum: p,
        });
      }),
      t
    );
  })();
function ye(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function kf(t, e) {
  e === void 0 && (e = 10);
  var n = null;
  return (Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n);
}
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 드래그 및 패닝 제스처 React 훅]
 * 역할: Drag 컨트롤 객체를 생성하고 구독하여 제스처 상태를 React 생명주기에 결합합니다.
 * --------------------------------------------------------------------------- */
function Hf(t) {
  var e = t.dragControls,
    n = t.visualElement,
    r = Bt(function () {
      return new Df(n);
    });
  (y.useEffect(
    function () {
      return e && e.subscribe(r);
    },
    [r, e],
  ),
    y.useEffect(
      function () {
        return r.addListeners();
      },
      [r],
    ));
}
function Ff(t) {
  var e = t.onPan,
    n = t.onPanStart,
    r = t.onPanEnd,
    i = t.onPanSessionStart,
    a = t.visualElement,
    o = e || n || r || i,
    s = y.useRef(null),
    l = y.useContext(se).transformPagePoint,
    u = {
      onSessionStart: i,
      onStart: n,
      onMove: e,
      onEnd: function (h, c) {
        ((s.current = null), r && r(h, c));
      },
    };
  y.useEffect(function () {
    s.current !== null && s.current.updateHandlers(u);
  });
  function f(h) {
    s.current = new Eo(h, u, { transformPagePoint: l });
  }
  (Ve(a, "pointerdown", o && f),
    to(function () {
      return s.current && s.current.end();
    }));
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 레이아웃 렌더러 팩토리 (Ro) 및 프로젝션 객체 생성]
 * 역할: 요소의 CSS 변수를 파싱하고, DOM 트리를 순회하며 레이아웃 프로젝션을 구성하는
 * 팩토리 함수입니다. (앞서 통째로 누락되었던 핵심 빌더입니다.)
 * --------------------------------------------------------------------------- */
var Bf = { pan: wt(Ff), drag: wt(Hf) },
  be = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "LayoutAnimationStart",
    "SetAxisTarget",
    "Unmount",
  ];
function Uf() {
  var t = be.map(function () {
      return new Yt();
    }),
    e = {},
    n = {
      clearAllListeners: function () {
        return t.forEach(function (r) {
          return r.clear();
        });
      },
      updatePropListeners: function (r) {
        be.forEach(function (i) {
          var a,
            o = "on" + i,
            s = r[o];
          ((a = e[i]) === null || a === void 0 || a.call(e),
            s && (e[i] = n[o](s)));
        });
      },
    };
  return (
    t.forEach(function (r, i) {
      ((n["on" + be[i]] = function (a) {
        return r.add(a);
      }),
        (n["notify" + be[i]] = function () {
          for (var a = [], o = 0; o < arguments.length; o++)
            a[o] = arguments[o];
          return r.notify.apply(r, lt([], H(a), !1));
        }));
    }),
    n
  );
}
function zf(t, e, n) {
  var r;
  for (var i in e) {
    var a = e[i],
      o = n[i];
    if (dt(a)) t.addValue(i, a);
    else if (dt(o)) t.addValue(i, Vt(a));
    else if (o !== a)
      if (t.hasValue(i)) {
        var s = t.getValue(i);
        !s.hasAnimated && s.set(a);
      } else
        t.addValue(
          i,
          Vt((r = t.getStaticValue(i)) !== null && r !== void 0 ? r : a),
        );
  }
  for (var i in n) e[i] === void 0 && t.removeValue(i);
  return e;
}
var Ro = function (t) {
    var e = t.treeType,
      n = e === void 0 ? "" : e,
      r = t.build,
      i = t.getBaseTarget,
      a = t.makeTargetAnimatable,
      o = t.measureViewportBox,
      s = t.render,
      l = t.readValueFromInstance,
      u = t.removeValueFromRenderState,
      f = t.sortNodePosition,
      h = t.scrapeMotionValuesFromProps;
    return function (c, p) {
      var d = c.parent,
        v = c.props,
        m = c.presenceId,
        x = c.blockInitialAnimation,
        w = c.visualState,
        b = c.shouldReduceMotion;
      p === void 0 && (p = {});
      var T = !1,
        C = w.latestValues,
        L = w.renderState,
        V,
        A = Uf(),
        j = new Map(),
        I = new Map(),
        q = {},
        F = S({}, C),
        W;
      function J() {
        !V || !T || (rt(), s(V, L, v.style, N.projection));
      }
      function rt() {
        r(N, L, C, p, v);
      }
      function vt() {
        A.notifyUpdate(C);
      }
      function tt(_, E) {
        var $ = E.onChange(function (he) {
            ((C[_] = he), v.onUpdate && at.update(vt, !1, !0));
          }),
          zt = E.onRenderRequest(N.scheduleRender);
        I.set(_, function () {
          ($(), zt());
        });
      }
      var Ut = h(v);
      for (var At in Ut) {
        var de = Ut[At];
        C[At] !== void 0 && dt(de) && de.set(C[At], !1);
      }
      var Rt = Be(v),
        Y = Si(v),
        N = S(
          S(
            {
              treeType: n,
              current: null,
              depth: d ? d.depth + 1 : 0,
              parent: d,
              children: new Set(),
              presenceId: m,
              shouldReduceMotion: b,
              variantChildren: Y ? new Set() : void 0,
              isVisible: void 0,
              manuallyAnimateOnMount: !!(d != null && d.isMounted()),
              blockInitialAnimation: x,
              isMounted: function () {
                return !!V;
              },
              mount: function (_) {
                ((T = !0),
                  (V = N.current = _),
                  N.projection && N.projection.mount(_),
                  Y &&
                    d &&
                    !Rt &&
                    (W = d == null ? void 0 : d.addVariantChild(N)),
                  j.forEach(function (E, $) {
                    return tt($, E);
                  }),
                  d == null || d.children.add(N),
                  N.setProps(v));
              },
              unmount: function () {
                var _;
                ((_ = N.projection) === null || _ === void 0 || _.unmount(),
                  Lt.update(vt),
                  Lt.render(J),
                  I.forEach(function (E) {
                    return E();
                  }),
                  W == null || W(),
                  d == null || d.children.delete(N),
                  A.clearAllListeners(),
                  (V = void 0),
                  (T = !1));
              },
              addVariantChild: function (_) {
                var E,
                  $ = N.getClosestVariantNode();
                if ($)
                  return (
                    (E = $.variantChildren) === null ||
                      E === void 0 ||
                      E.add(_),
                    function () {
                      return $.variantChildren.delete(_);
                    }
                  );
              },
              sortNodePosition: function (_) {
                return !f || n !== _.treeType
                  ? 0
                  : f(N.getInstance(), _.getInstance());
              },
              getClosestVariantNode: function () {
                return Y ? N : d == null ? void 0 : d.getClosestVariantNode();
              },
              getLayoutId: function () {
                return v.layoutId;
              },
              getInstance: function () {
                return V;
              },
              getStaticValue: function (_) {
                return C[_];
              },
              setStaticValue: function (_, E) {
                return (C[_] = E);
              },
              getLatestValues: function () {
                return C;
              },
              setVisibility: function (_) {
                N.isVisible !== _ && ((N.isVisible = _), N.scheduleRender());
              },
              makeTargetAnimatable: function (_, E) {
                return (E === void 0 && (E = !0), a(N, _, v, E));
              },
              measureViewportBox: function () {
                return o(V, v);
              },
              addValue: function (_, E) {
                (N.hasValue(_) && N.removeValue(_),
                  j.set(_, E),
                  (C[_] = E.get()),
                  tt(_, E));
              },
              removeValue: function (_) {
                var E;
                (j.delete(_),
                  (E = I.get(_)) === null || E === void 0 || E(),
                  I.delete(_),
                  delete C[_],
                  u(_, L));
              },
              hasValue: function (_) {
                return j.has(_);
              },
              getValue: function (_, E) {
                var $ = j.get(_);
                return (
                  $ === void 0 &&
                    E !== void 0 &&
                    (($ = Vt(E)), N.addValue(_, $)),
                  $
                );
              },
              forEachValue: function (_) {
                return j.forEach(_);
              },
              readValue: function (_) {
                var E;
                return (E = C[_]) !== null && E !== void 0 ? E : l(V, _, p);
              },
              setBaseTarget: function (_, E) {
                F[_] = E;
              },
              getBaseTarget: function (_) {
                if (i) {
                  var E = i(v, _);
                  if (E !== void 0 && !dt(E)) return E;
                }
                return F[_];
              },
            },
            A,
          ),
          {
            build: function () {
              return (rt(), L);
            },
            scheduleRender: function () {
              at.render(J, !1, !0);
            },
            syncRender: J,
            setProps: function (_) {
              ((_.transformTemplate || v.transformTemplate) &&
                N.scheduleRender(),
                (v = _),
                A.updatePropListeners(_),
                (q = zf(N, h(v), q)));
            },
            getProps: function () {
              return v;
            },
            getVariant: function (_) {
              var E;
              return (E = v.variants) === null || E === void 0 ? void 0 : E[_];
            },
            getDefaultTransition: function () {
              return v.transition;
            },
            getTransformPagePoint: function () {
              return v.transformPagePoint;
            },
            getVariantContext: function (_) {
              if ((_ === void 0 && (_ = !1), _))
                return d == null ? void 0 : d.getVariantContext();
              if (!Rt) {
                var E = (d == null ? void 0 : d.getVariantContext()) || {};
                return (v.initial !== void 0 && (E.initial = v.initial), E);
              }
              for (var $ = {}, zt = 0; zt < qf; zt++) {
                var he = No[zt],
                  We = v[he];
                (ot(We) || We === !1) && ($[he] = We);
              }
              return $;
            },
          },
        );
      return N;
    };
  },
  No = lt(["initial"], H(Jn), !1),
  qf = No.length;
function Ln(t) {
  return typeof t == "string" && t.startsWith("var(--");
}
var Io = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Gf(t) {
  var e = Io.exec(t);
  if (!e) return [,];
  var n = H(e, 3),
    r = n[1],
    i = n[2];
  return [r, i];
}
function Vn(t, e, n) {
  var r = H(Gf(t), 2),
    i = r[0],
    a = r[1];
  if (i) {
    var o = window.getComputedStyle(e).getPropertyValue(i);
    return o ? o.trim() : Ln(a) ? Vn(a, e) : a;
  }
}
function Wf(t, e, n) {
  var r,
    i = nt(e, []),
    a = t.getInstance();
  if (!(a instanceof Element)) return { target: i, transitionEnd: n };
  (n && (n = S({}, n)),
    t.forEachValue(function (u) {
      var f = u.get();
      if (Ln(f)) {
        var h = Vn(f, a);
        h && u.set(h);
      }
    }));
  for (var o in i) {
    var s = i[o];
    if (Ln(s)) {
      var l = Vn(s, a);
      l &&
        ((i[o] = l),
        n && (((r = n[o]) !== null && r !== void 0) || (n[o] = s)));
    }
  }
  return { target: i, transitionEnd: n };
}
var $f = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
  ]),
  Oo = function (t) {
    return $f.has(t);
  },
  Zf = function (t) {
    return Object.keys(t).some(Oo);
  },
  Do = function (t, e) {
    (t.set(e, !1), t.set(e));
  },
  Br = function (t) {
    return t === jt || t === M;
  },
  Ur;
(function (t) {
  ((t.width = "width"),
    (t.height = "height"),
    (t.left = "left"),
    (t.right = "right"),
    (t.top = "top"),
    (t.bottom = "bottom"));
})(Ur || (Ur = {}));
var zr = function (t, e) {
    return parseFloat(t.split(", ")[e]);
  },
  qr = function (t, e) {
    return function (n, r) {
      var i = r.transform;
      if (i === "none" || !i) return 0;
      var a = i.match(/^matrix3d\((.+)\)$/);
      if (a) return zr(a[1], e);
      var o = i.match(/^matrix\((.+)\)$/);
      return o ? zr(o[1], t) : 0;
    };
  },
  Yf = new Set(["x", "y", "z"]),
  Kf = ne.filter(function (t) {
    return !Yf.has(t);
  });
function Xf(t) {
  var e = [];
  return (
    Kf.forEach(function (n) {
      var r = t.getValue(n);
      r !== void 0 &&
        (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    e.length && t.syncRender(),
    e
  );
}
var Gr = {
    width: function (t, e) {
      var n = t.x,
        r = e.paddingLeft,
        i = r === void 0 ? "0" : r,
        a = e.paddingRight,
        o = a === void 0 ? "0" : a;
      return n.max - n.min - parseFloat(i) - parseFloat(o);
    },
    height: function (t, e) {
      var n = t.y,
        r = e.paddingTop,
        i = r === void 0 ? "0" : r,
        a = e.paddingBottom,
        o = a === void 0 ? "0" : a;
      return n.max - n.min - parseFloat(i) - parseFloat(o);
    },
    top: function (t, e) {
      var n = e.top;
      return parseFloat(n);
    },
    left: function (t, e) {
      var n = e.left;
      return parseFloat(n);
    },
    bottom: function (t, e) {
      var n = t.y,
        r = e.top;
      return parseFloat(r) + (n.max - n.min);
    },
    right: function (t, e) {
      var n = t.x,
        r = e.left;
      return parseFloat(r) + (n.max - n.min);
    },
    x: qr(4, 13),
    y: qr(5, 14),
  },
  Qf = function (t, e, n) {
    var r = e.measureViewportBox(),
      i = e.getInstance(),
      a = getComputedStyle(i),
      o = a.display,
      s = {};
    (o === "none" && e.setStaticValue("display", t.display || "block"),
      n.forEach(function (u) {
        s[u] = Gr[u](r, a);
      }),
      e.syncRender());
    var l = e.measureViewportBox();
    return (
      n.forEach(function (u) {
        var f = e.getValue(u);
        (Do(f, s[u]), (t[u] = Gr[u](l, a)));
      }),
      t
    );
  },
  Jf = function (t, e, n, r) {
    (n === void 0 && (n = {}),
      r === void 0 && (r = {}),
      (e = S({}, e)),
      (r = S({}, r)));
    var i = Object.keys(e).filter(Oo),
      a = [],
      o = !1,
      s = [];
    if (
      (i.forEach(function (f) {
        var h = t.getValue(f);
        if (t.hasValue(f)) {
          var c = n[f],
            p = qt(c),
            d = e[f],
            v;
          if (ie(d)) {
            var m = d.length,
              x = d[0] === null ? 1 : 0;
            ((c = d[x]), (p = qt(c)));
            for (var w = x; w < m; w++) v ? ee(qt(d[w]) === v) : (v = qt(d[w]));
          } else v = qt(d);
          if (p !== v)
            if (Br(p) && Br(v)) {
              var b = h.get();
              (typeof b == "string" && h.set(parseFloat(b)),
                typeof d == "string"
                  ? (e[f] = parseFloat(d))
                  : Array.isArray(d) && v === M && (e[f] = d.map(parseFloat)));
            } else
              p != null &&
              p.transform &&
              v != null &&
              v.transform &&
              (c === 0 || d === 0)
                ? c === 0
                  ? h.set(v.transform(c))
                  : (e[f] = p.transform(d))
                : (o || ((a = Xf(t)), (o = !0)),
                  s.push(f),
                  (r[f] = r[f] !== void 0 ? r[f] : e[f]),
                  Do(h, d));
        }
      }),
      s.length)
    ) {
      var l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = Qf(e, t, s);
      return (
        a.length &&
          a.forEach(function (f) {
            var h = H(f, 2),
              c = h[0],
              p = h[1];
            t.getValue(c).set(p);
          }),
        t.syncRender(),
        l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: e, transitionEnd: r };
  };
function td(t, e, n, r) {
  return Zf(e) ? Jf(t, e, n, r) : { target: e, transitionEnd: r };
}
var ed = function (t, e, n, r) {
  var i = Wf(t, e, r);
  return ((e = i.target), (r = i.transitionEnd), td(t, e, n, r));
};
function nd(t) {
  return window.getComputedStyle(t);
}
var ko = {
    treeType: "dom",
    readValueFromInstance: function (t, e) {
      if (le(e)) {
        var n = $n(e);
        return (n && n.default) || 0;
      } else {
        var r = nd(t);
        return (Ei(e) ? r.getPropertyValue(e) : r[e]) || 0;
      }
    },
    sortNodePosition: function (t, e) {
      return t.compareDocumentPosition(e) & 2 ? 1 : -1;
    },
    getBaseTarget: function (t, e) {
      var n;
      return (n = t.style) === null || n === void 0 ? void 0 : n[e];
    },
    measureViewportBox: function (t, e) {
      var n = e.transformPagePoint;
      return Ao(t, n);
    },
    resetTransform: function (t, e, n) {
      var r = n.transformTemplate;
      ((e.style.transform = r ? r({}, "") : "none"), t.scheduleRender());
    },
    restoreTransform: function (t, e) {
      t.style.transform = e.style.transform;
    },
    removeValueFromRenderState: function (t, e) {
      var n = e.vars,
        r = e.style;
      (delete n[t], delete r[t]);
    },
    makeTargetAnimatable: function (t, e, n, r) {
      var i = n.transformValues;
      r === void 0 && (r = !0);
      var a = e.transition,
        o = e.transitionEnd,
        s = nt(e, ["transition", "transitionEnd"]),
        l = uf(s, a || {}, t);
      if ((i && (o && (o = i(o)), s && (s = i(s)), l && (l = i(l))), r)) {
        sf(t, s, l);
        var u = ed(t, s, l, o);
        ((o = u.transitionEnd), (s = u.target));
      }
      return S({ transition: a, transitionEnd: o }, s);
    },
    scrapeMotionValuesFromProps: kn,
    build: function (t, e, n, r, i) {
      (t.isVisible !== void 0 &&
        (e.style.visibility = t.isVisible ? "visible" : "hidden"),
        In(e, n, r, i.transformTemplate));
    },
    render: Fi,
  },
  rd = Ro(ko),
  id = Ro(
    S(S({}, ko), {
      getBaseTarget: function (t, e) {
        return t[e];
      },
      readValueFromInstance: function (t, e) {
        var n;
        return le(e)
          ? ((n = $n(e)) === null || n === void 0 ? void 0 : n.default) || 0
          : ((e = Bi.has(e) ? e : Hi(e)), t.getAttribute(e));
      },
      scrapeMotionValuesFromProps: zi,
      build: function (t, e, n, r, i) {
        Dn(e, n, r, i.transformTemplate);
      },
      render: Ui,
    }),
  ),
  od = function (t, e) {
    return Rn(t)
      ? id(e, { enableHardwareAcceleration: !1 })
      : rd(e, { enableHardwareAcceleration: !0 });
  };

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 뷰포트 레이아웃 퍼센트(%) 좌표 변환기]
 * 역할: 브라우저 창 크기에 따라 변하는 요소의 픽셀(px) 기반 좌표를
 * 프로젝션 엔진이 연산하기 쉬운 백분율(%)로 변환하여 CSS transform-origin 등을 보정합니다.
 * --------------------------------------------------------------------------- */
function Wr(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
var Gt = {
    correct: function (t, e) {
      if (!e.target) return t;
      if (typeof t == "string")
        if (M.test(t)) t = parseFloat(t);
        else return t;
      var n = Wr(t, e.target.x),
        r = Wr(t, e.target.y);
      return "".concat(n, "% ").concat(r, "%");
    },
  },
  $r = "_$css",
  ad = {
    correct: function (t, e) {
      var n = e.treeScale,
        r = e.projectionDelta,
        i = t,
        a = t.includes("var("),
        o = [];
      a &&
        (t = t.replace(Io, function (v) {
          return (o.push(v), $r);
        }));
      var s = ht.parse(t);
      if (s.length > 5) return i;
      var l = ht.createTransformer(t),
        u = typeof s[0] != "number" ? 1 : 0,
        f = r.x.scale * n.x,
        h = r.y.scale * n.y;
      ((s[0 + u] /= f), (s[1 + u] /= h));
      var c = k(f, h, 0.5);
      (typeof s[2 + u] == "number" && (s[2 + u] /= c),
        typeof s[3 + u] == "number" && (s[3 + u] /= c));
      var p = l(s);
      if (a) {
        var d = 0;
        p = p.replace($r, function () {
          var v = o[d];
          return (d++, v);
        });
      }
      return p;
    },
  },
  // === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

  // === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
  /* ---------------------------------------------------------------------------
   * [기능 분류: React 기반 레이아웃 그룹(LayoutGroup) 감시자]
   * 역할: 컴포넌트가 화면에 마운트되거나 언마운트될 때, 다른 연관된 컴포넌트들과의
   * 레이아웃 애니메이션 동기화(Shared Layout Animation)를 생명주기에 맞춰 스케줄링합니다.
   * --------------------------------------------------------------------------- */
  sd = (function (t) {
    vi(e, t);
    function e() {
      return (t !== null && t.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.componentDidMount = function () {
        var n = this,
          r = this.props,
          i = r.visualElement,
          a = r.layoutGroup,
          o = r.switchLayoutGroup,
          s = r.layoutId,
          l = i.projection;
        (jl(ud),
          l &&
            (a != null && a.group && a.group.add(l),
            o != null && o.register && s && o.register(l),
            l.root.didUpdate(),
            l.addEventListener("animationComplete", function () {
              n.safeToRemove();
            }),
            l.setOptions(
              S(S({}, l.options), {
                onExitComplete: function () {
                  return n.safeToRemove();
                },
              }),
            )),
          (Wt.hasEverUpdated = !0));
      }),
      (e.prototype.getSnapshotBeforeUpdate = function (n) {
        var r = this,
          i = this.props,
          a = i.layoutDependency,
          o = i.visualElement,
          s = i.drag,
          l = i.isPresent,
          u = o.projection;
        return (
          u &&
            ((u.isPresent = l),
            s || n.layoutDependency !== a || a === void 0
              ? u.willUpdate()
              : this.safeToRemove(),
            n.isPresent !== l &&
              (l
                ? u.promote()
                : u.relegate() ||
                  at.postRender(function () {
                    var f;
                    (!((f = u.getStack()) === null || f === void 0) &&
                      f.members.length) ||
                      r.safeToRemove();
                  }))),
          null
        );
      }),
      (e.prototype.componentDidUpdate = function () {
        var n = this.props.visualElement.projection;
        n &&
          (n.root.didUpdate(),
          !n.currentAnimation && n.isLead() && this.safeToRemove());
      }),
      (e.prototype.componentWillUnmount = function () {
        var n = this.props,
          r = n.visualElement,
          i = n.layoutGroup,
          a = n.switchLayoutGroup,
          o = r.projection;
        o &&
          (o.scheduleCheckAfterUnmount(),
          i != null && i.group && i.group.remove(o),
          a != null && a.deregister && a.deregister(o));
      }),
      (e.prototype.safeToRemove = function () {
        var n = this.props.safeToRemove;
        n == null || n();
      }),
      (e.prototype.render = function () {
        return null;
      }),
      e
    );
  })(An.Component);
function ld(t) {
  var e = H(So(), 2),
    n = e[0],
    r = e[1],
    i = y.useContext(Ci);
  return An.createElement(
    sd,
    S({}, t, {
      layoutGroup: i,
      switchLayoutGroup: y.useContext(Ti),
      isPresent: n,
      safeToRemove: r,
    }),
  );
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 테두리 반경(Border Radius) 및 그림자 보정기]
 * 역할: 크기가 변하는 과정에서 테두리의 둥근 모서리가 찌그러지지 않도록
 * 비율(%)을 픽셀(px)과 연동하여 실시간으로 보정합니다.
 * --------------------------------------------------------------------------- */
var ud = {
    borderRadius: S(S({}, Gt), {
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    }),
    borderTopLeftRadius: Gt,
    borderTopRightRadius: Gt,
    borderBottomLeftRadius: Gt,
    borderBottomRightRadius: Gt,
    boxShadow: ad,
  },
  cd = { measureLayout: ld };
function fd(t, e, n) {
  n === void 0 && (n = {});
  var r = dt(t) ? t : Vt(t);
  return (
    Kn("", r, e, n),
    {
      stop: function () {
        return r.stop();
      },
      isAnimating: function () {
        return r.isAnimating();
      },
    }
  );
}
var Ho = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  dd = Ho.length,
  Zr = function (t) {
    return typeof t == "string" ? parseFloat(t) : t;
  },
  Yr = function (t) {
    return typeof t == "number" || M.test(t);
  };
function hd(t, e, n, r, i, a) {
  var o, s, l, u;
  i
    ? ((t.opacity = k(
        0,
        (o = n.opacity) !== null && o !== void 0 ? o : 1,
        pd(r),
      )),
      (t.opacityExit = k(
        (s = e.opacity) !== null && s !== void 0 ? s : 1,
        0,
        vd(r),
      )))
    : a &&
      (t.opacity = k(
        (l = e.opacity) !== null && l !== void 0 ? l : 1,
        (u = n.opacity) !== null && u !== void 0 ? u : 1,
        r,
      ));
  for (var f = 0; f < dd; f++) {
    var h = "border".concat(Ho[f], "Radius"),
      c = Kr(e, h),
      p = Kr(n, h);
    if (!(c === void 0 && p === void 0)) {
      (c || (c = 0), p || (p = 0));
      var d = c === 0 || p === 0 || Yr(c) === Yr(p);
      d
        ? ((t[h] = Math.max(k(Zr(c), Zr(p), r), 0)),
          (ut.test(p) || ut.test(c)) && (t[h] += "%"))
        : (t[h] = p);
    }
  }
  (e.rotate || n.rotate) && (t.rotate = k(e.rotate || 0, n.rotate || 0, r));
}
function Kr(t, e) {
  var n;
  return (n = t[e]) !== null && n !== void 0 ? n : t.borderRadius;
}
var pd = Fo(0, 0.5, Gn),
  vd = Fo(0.5, 0.95, zn);
function Fo(t, e, n) {
  return function (r) {
    return r < t ? 0 : r > e ? 1 : n(oe(t, e, r));
  };
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 레이아웃 바운딩 박스(Bounding Box) 수학 연산]
 * 역할: 요소의 X, Y 축 최소/최대 좌표(min, max)를 추출하여
 * 크기 변화와 위치 이동(Translate/Scale)을 동시에 계산하는 핵심 수학 함수들입니다.
 * --------------------------------------------------------------------------- */
function Xr(t, e) {
  ((t.min = e.min), (t.max = e.max));
}
function it(t, e) {
  (Xr(t.x, e.x), Xr(t.y, e.y));
}
function Qr(t, e, n, r, i) {
  return (
    (t -= e),
    (t = Oe(t, 1 / n, r)),
    i !== void 0 && (t = Oe(t, 1 / i, r)),
    t
  );
}
function md(t, e, n, r, i, a, o) {
  if (
    (e === void 0 && (e = 0),
    n === void 0 && (n = 1),
    r === void 0 && (r = 0.5),
    a === void 0 && (a = t),
    o === void 0 && (o = t),
    ut.test(e))
  ) {
    e = parseFloat(e);
    var s = k(o.min, o.max, e / 100);
    e = s - o.min;
  }
  if (typeof e == "number") {
    var l = k(a.min, a.max, r);
    (t === a && (l -= e),
      (t.min = Qr(t.min, e, n, l, i)),
      (t.max = Qr(t.max, e, n, l, i)));
  }
}
function Jr(t, e, n, r, i) {
  var a = H(n, 3),
    o = a[0],
    s = a[1],
    l = a[2];
  md(t, e[o], e[s], e[l], e.scale, r, i);
}
var gd = ["x", "scaleX", "originX"],
  yd = ["y", "scaleY", "originY"];
function ti(t, e, n, r) {
  (Jr(t.x, e, gd, n == null ? void 0 : n.x, r == null ? void 0 : r.x),
    Jr(t.y, e, yd, n == null ? void 0 : n.y, r == null ? void 0 : r.y));
}
function ei(t) {
  return t.translate === 0 && t.scale === 1;
}
function Bo(t) {
  return ei(t.x) && ei(t.y);
}
function Uo(t, e) {
  return (
    t.x.min === e.x.min &&
    t.x.max === e.x.max &&
    t.y.min === e.y.min &&
    t.y.max === e.y.max
  );
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 공유 레이아웃 그룹(Shared Node) 스택 매니저]
 * 역할: 여러 컴포넌트가 동일한 레이아웃 ID(layoutId)를 가질 때,
 * 누가 기준(Lead)이 되고 누가 사라질지(Exit)를 결정하는 트리/스택 관리기입니다.
 * --------------------------------------------------------------------------- */
var bd = (function () {
    function t() {
      this.members = [];
    }
    return (
      (t.prototype.add = function (e) {
        (Xn(this.members, e), e.scheduleRender());
      }),
      (t.prototype.remove = function (e) {
        if (
          (Qn(this.members, e),
          e === this.prevLead && (this.prevLead = void 0),
          e === this.lead)
        ) {
          var n = this.members[this.members.length - 1];
          n && this.promote(n);
        }
      }),
      (t.prototype.relegate = function (e) {
        var n = this.members.findIndex(function (o) {
          return e === o;
        });
        if (n === 0) return !1;
        for (var r, i = n; i >= 0; i--) {
          var a = this.members[i];
          if (a.isPresent !== !1) {
            r = a;
            break;
          }
        }
        return r ? (this.promote(r), !0) : !1;
      }),
      (t.prototype.promote = function (e, n) {
        var r,
          i = this.lead;
        if (e !== i && ((this.prevLead = i), (this.lead = e), e.show(), i)) {
          (i.instance && i.scheduleRender(),
            e.scheduleRender(),
            (e.resumeFrom = i),
            n && (e.resumeFrom.preserveOpacity = !0),
            i.snapshot &&
              ((e.snapshot = i.snapshot),
              (e.snapshot.latestValues = i.animationValues || i.latestValues),
              (e.snapshot.isShared = !0)),
            !((r = e.root) === null || r === void 0) &&
              r.isUpdating &&
              (e.isLayoutDirty = !0));
          var a = e.options.crossfade;
          a === !1 && i.hide();
        }
      }),
      (t.prototype.exitAnimationComplete = function () {
        this.members.forEach(function (e) {
          var n, r, i, a, o;
          ((r = (n = e.options).onExitComplete) === null ||
            r === void 0 ||
            r.call(n),
            (o =
              (i = e.resumingFrom) === null || i === void 0
                ? void 0
                : (a = i.options).onExitComplete) === null ||
              o === void 0 ||
              o.call(a));
        });
      }),
      (t.prototype.scheduleRender = function () {
        this.members.forEach(function (e) {
          e.instance && e.scheduleRender(!1);
        });
      }),
      (t.prototype.removeLeadSnapshot = function () {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
      }),
      t
    );
  })(),
  xd = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function ni(t, e, n) {
  var r = t.x.translate / e.x,
    i = t.y.translate / e.y,
    a = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
  if (((a += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")), n)) {
    var o = n.rotate,
      s = n.rotateX,
      l = n.rotateY;
    (o && (a += "rotate(".concat(o, "deg) ")),
      s && (a += "rotateX(".concat(s, "deg) ")),
      l && (a += "rotateY(".concat(l, "deg) ")));
  }
  var u = t.x.scale * e.x,
    f = t.y.scale * e.y;
  return (
    (a += "scale(".concat(u, ", ").concat(f, ")")),
    a === xd ? "none" : a
  );
}
var wd = function (t, e) {
    return t.depth - e.depth;
  },
  Sd = (function () {
    function t() {
      ((this.children = []), (this.isDirty = !1));
    }
    return (
      (t.prototype.add = function (e) {
        (Xn(this.children, e), (this.isDirty = !0));
      }),
      (t.prototype.remove = function (e) {
        (Qn(this.children, e), (this.isDirty = !0));
      }),
      (t.prototype.forEach = function (e) {
        (this.isDirty && this.children.sort(wd),
          (this.isDirty = !1),
          this.children.forEach(e));
      }),
      t
    );
  })(),
  ri = 1e3;
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

//part.4

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===

/* ---------------------------------------------------------------------------
 * [기능 분류: FLIP 레이아웃 프로젝션 엔진 (zo)]
 * 역할: 화면의 크기가 변하거나 DOM 요소가 추가/삭제될 때, 부자연스럽게 뚝뚝 끊기는
 * 현상을 막고 요소들의 위치와 스케일을 물리적으로 부드럽게 투영(Projection)합니다.
 * --------------------------------------------------------------------------- */
function zo(t) {
  var e = t.attachResizeListener,
    n = t.defaultParent,
    r = t.measureScroll,
    i = t.checkIsScrollRoot,
    a = t.resetTransform;
  return (function () {
    function o(s, l, u) {
      var f = this;
      (l === void 0 && (l = {}),
        u === void 0 && (u = n == null ? void 0 : n()),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = function () {
          f.isUpdating && ((f.isUpdating = !1), f.clearAllSnapshots());
        }),
        (this.updateProjection = function () {
          (f.nodes.forEach(Md), f.nodes.forEach(Ld));
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.id = s),
        (this.latestValues = l),
        (this.root = u ? u.root || u : this),
        (this.path = u ? lt(lt([], H(u.path), !1), [u], !1) : []),
        (this.parent = u),
        (this.depth = u ? u.depth + 1 : 0),
        s && this.root.registerPotentialNode(s, this));
      for (var h = 0; h < this.path.length; h++)
        this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Sd());
    }
    return (
      (o.prototype.addEventListener = function (s, l) {
        return (
          this.eventHandlers.has(s) || this.eventHandlers.set(s, new Yt()),
          this.eventHandlers.get(s).add(l)
        );
      }),
      (o.prototype.notifyListeners = function (s) {
        for (var l = [], u = 1; u < arguments.length; u++)
          l[u - 1] = arguments[u];
        var f = this.eventHandlers.get(s);
        f == null || f.notify.apply(f, lt([], H(l), !1));
      }),
      (o.prototype.hasListeners = function (s) {
        return this.eventHandlers.has(s);
      }),
      (o.prototype.registerPotentialNode = function (s, l) {
        this.potentialNodes.set(s, l);
      }),
      (o.prototype.mount = function (s, l) {
        var u = this,
          f;
        if ((l === void 0 && (l = !1), !this.instance)) {
          ((this.isSVG = s instanceof SVGElement && s.tagName !== "svg"),
            (this.instance = s));
          var h = this.options,
            c = h.layoutId,
            p = h.layout,
            d = h.visualElement;
          if (
            (d && !d.getInstance() && d.mount(s),
            this.root.nodes.add(this),
            (f = this.parent) === null || f === void 0 || f.children.add(this),
            this.id && this.root.potentialNodes.delete(this.id),
            l && (p || c) && (this.isLayoutDirty = !0),
            e)
          ) {
            var v,
              m = function () {
                return (u.root.updateBlockedByResize = !1);
              };
            e(s, function () {
              ((u.root.updateBlockedByResize = !0),
                clearTimeout(v),
                (v = window.setTimeout(m, 250)),
                Wt.hasAnimatedSinceResize &&
                  ((Wt.hasAnimatedSinceResize = !1), u.nodes.forEach(Ed)));
            });
          }
          (c && this.root.registerSharedNode(c, this),
            this.options.animate !== !1 &&
              d &&
              (c || p) &&
              this.addEventListener("didUpdate", function (x) {
                var w,
                  b,
                  T,
                  C,
                  L,
                  V = x.delta,
                  A = x.hasLayoutChanged,
                  j = x.hasRelativeTargetChanged,
                  I = x.layout;
                if (u.isTreeAnimationBlocked()) {
                  ((u.target = void 0), (u.relativeTarget = void 0));
                  return;
                }
                var q =
                    (b =
                      (w = u.options.transition) !== null && w !== void 0
                        ? w
                        : d.getDefaultTransition()) !== null && b !== void 0
                      ? b
                      : Nd,
                  F = d.getProps(),
                  W = F.onLayoutAnimationStart,
                  J = F.onLayoutAnimationComplete,
                  rt = !u.targetLayout || !Uo(u.targetLayout, I) || j,
                  vt = !A && j;
                if (
                  (!((T = u.resumeFrom) === null || T === void 0) &&
                    T.instance) ||
                  vt ||
                  (A && (rt || !u.currentAnimation))
                ) {
                  (u.resumeFrom &&
                    ((u.resumingFrom = u.resumeFrom),
                    (u.resumingFrom.resumingFrom = void 0)),
                    u.setAnimationOrigin(V, vt));
                  var tt = S(S({}, Yn(q, "layout")), {
                    onPlay: W,
                    onComplete: J,
                  });
                  (d.shouldReduceMotion && ((tt.delay = 0), (tt.type = !1)),
                    u.startAnimation(tt));
                } else
                  (!A && u.animationProgress === 0 && u.finishAnimation(),
                    u.isLead() &&
                      ((L = (C = u.options).onExitComplete) === null ||
                        L === void 0 ||
                        L.call(C)));
                u.targetLayout = I;
              }));
        }
      }),
      (o.prototype.unmount = function () {
        var s, l;
        (this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this),
          (s = this.getStack()) === null || s === void 0 || s.remove(this),
          (l = this.parent) === null || l === void 0 || l.children.delete(this),
          (this.instance = void 0),
          Lt.preRender(this.updateProjection));
      }),
      (o.prototype.blockUpdate = function () {
        this.updateManuallyBlocked = !0;
      }),
      (o.prototype.unblockUpdate = function () {
        this.updateManuallyBlocked = !1;
      }),
      (o.prototype.isUpdateBlocked = function () {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }),
      (o.prototype.isTreeAnimationBlocked = function () {
        var s;
        return (
          this.isAnimationBlocked ||
          ((s = this.parent) === null || s === void 0
            ? void 0
            : s.isTreeAnimationBlocked()) ||
          !1
        );
      }),
      (o.prototype.startUpdate = function () {
        var s;
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          (s = this.nodes) === null || s === void 0 || s.forEach(Vd));
      }),
      (o.prototype.willUpdate = function (s) {
        var l, u, f;
        if ((s === void 0 && (s = !0), this.root.isUpdateBlocked())) {
          (u = (l = this.options).onExitComplete) === null ||
            u === void 0 ||
            u.call(l);
          return;
        }
        if (
          (!this.root.isUpdating && this.root.startUpdate(),
          !this.isLayoutDirty)
        ) {
          this.isLayoutDirty = !0;
          for (var h = 0; h < this.path.length; h++) {
            var c = this.path[h];
            ((c.shouldResetTransform = !0), c.updateScroll());
          }
          var p = this.options,
            d = p.layoutId,
            v = p.layout;
          if (!(d === void 0 && !v)) {
            var m =
              (f = this.options.visualElement) === null || f === void 0
                ? void 0
                : f.getProps().transformTemplate;
            ((this.prevTransformTemplateValue =
              m == null ? void 0 : m(this.latestValues, "")),
              this.updateSnapshot(),
              s && this.notifyListeners("willUpdate"));
          }
        }
      }),
      (o.prototype.didUpdate = function () {
        var s = this.isUpdateBlocked();
        if (s) {
          (this.unblockUpdate(),
            this.clearAllSnapshots(),
            this.nodes.forEach(ii));
          return;
        }
        this.isUpdating &&
          ((this.isUpdating = !1),
          this.potentialNodes.size &&
            (this.potentialNodes.forEach(Id), this.potentialNodes.clear()),
          this.nodes.forEach(_d),
          this.nodes.forEach(Cd),
          this.nodes.forEach(Td),
          this.clearAllSnapshots(),
          tn.update(),
          tn.preRender(),
          tn.render());
      }),
      (o.prototype.clearAllSnapshots = function () {
        (this.nodes.forEach(Pd), this.sharedNodes.forEach(jd));
      }),
      (o.prototype.scheduleUpdateProjection = function () {
        at.preRender(this.updateProjection, !1, !0);
      }),
      (o.prototype.scheduleCheckAfterUnmount = function () {
        var s = this;
        at.postRender(function () {
          s.isLayoutDirty ? s.root.didUpdate() : s.root.checkUpdateFailed();
        });
      }),
      (o.prototype.updateSnapshot = function () {
        if (!(this.snapshot || !this.instance)) {
          var s = this.measure(),
            l = this.removeTransform(this.removeElementScroll(s));
          (li(l),
            (this.snapshot = { measured: s, layout: l, latestValues: {} }));
        }
      }),
      (o.prototype.updateLayout = function () {
        var s;
        if (
          this.instance &&
          (this.updateScroll(),
          !(
            !(this.options.alwaysMeasureLayout && this.isLead()) &&
            !this.isLayoutDirty
          ))
        ) {
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (var l = 0; l < this.path.length; l++) {
              var u = this.path[l];
              u.updateScroll();
            }
          var f = this.measure();
          li(f);
          var h = this.layout;
          ((this.layout = { measured: f, actual: this.removeElementScroll(f) }),
            (this.layoutCorrected = G()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.actual),
            (s = this.options.visualElement) === null ||
              s === void 0 ||
              s.notifyLayoutMeasure(
                this.layout.actual,
                h == null ? void 0 : h.actual,
              ));
        }
      }),
      (o.prototype.updateScroll = function () {
        this.options.layoutScroll &&
          this.instance &&
          ((this.isScrollRoot = i(this.instance)),
          (this.scroll = r(this.instance)));
      }),
      (o.prototype.resetTransform = function () {
        var s;
        if (a) {
          var l = this.isLayoutDirty || this.shouldResetTransform,
            u = this.projectionDelta && !Bo(this.projectionDelta),
            f =
              (s = this.options.visualElement) === null || s === void 0
                ? void 0
                : s.getProps().transformTemplate,
            h = f == null ? void 0 : f(this.latestValues, ""),
            c = h !== this.prevTransformTemplateValue;
          l &&
            (u || yt(this.latestValues) || c) &&
            (a(this.instance, h),
            (this.shouldResetTransform = !1),
            this.scheduleRender());
        }
      }),
      (o.prototype.measure = function () {
        var s = this.options.visualElement;
        if (!s) return G();
        var l = s.measureViewportBox(),
          u = this.root.scroll;
        return (u && (bt(l.x, u.x), bt(l.y, u.y)), l);
      }),
      (o.prototype.removeElementScroll = function (s) {
        var l = G();
        it(l, s);
        for (var u = 0; u < this.path.length; u++) {
          var f = this.path[u],
            h = f.scroll,
            c = f.options,
            p = f.isScrollRoot;
          if (f !== this.root && h && c.layoutScroll) {
            if (p) {
              it(l, s);
              var d = this.root.scroll;
              d && (bt(l.x, -d.x), bt(l.y, -d.y));
            }
            (bt(l.x, h.x), bt(l.y, h.y));
          }
        }
        return l;
      }),
      (o.prototype.applyTransform = function (s, l) {
        l === void 0 && (l = !1);
        var u = G();
        it(u, s);
        for (var f = 0; f < this.path.length; f++) {
          var h = this.path[f];
          (!l &&
            h.options.layoutScroll &&
            h.scroll &&
            h !== h.root &&
            Dt(u, { x: -h.scroll.x, y: -h.scroll.y }),
            yt(h.latestValues) && Dt(u, h.latestValues));
        }
        return (yt(this.latestValues) && Dt(u, this.latestValues), u);
      }),
      (o.prototype.removeTransform = function (s) {
        var l,
          u = G();
        it(u, s);
        for (var f = 0; f < this.path.length; f++) {
          var h = this.path[f];
          if (h.instance && yt(h.latestValues)) {
            Vo(h.latestValues) && h.updateSnapshot();
            var c = G(),
              p = h.measure();
            (it(c, p),
              ti(
                u,
                h.latestValues,
                (l = h.snapshot) === null || l === void 0 ? void 0 : l.layout,
                c,
              ));
          }
        }
        return (yt(this.latestValues) && ti(u, this.latestValues), u);
      }),
      (o.prototype.setTargetDelta = function (s) {
        ((this.targetDelta = s), this.root.scheduleUpdateProjection());
      }),
      (o.prototype.setOptions = function (s) {
        var l;
        this.options = S(S(S({}, this.options), s), {
          crossfade: (l = s.crossfade) !== null && l !== void 0 ? l : !0,
        });
      }),
      (o.prototype.clearMeasurements = function () {
        ((this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1));
      }),
      (o.prototype.resolveTargetDelta = function () {
        var s,
          l = this.options,
          u = l.layout,
          f = l.layoutId;
        !this.layout ||
          !(u || f) ||
          (!this.targetDelta &&
            !this.relativeTarget &&
            ((this.relativeParent = this.getClosestProjectingParent()),
            this.relativeParent &&
              this.relativeParent.layout &&
              ((this.relativeTarget = G()),
              (this.relativeTargetOrigin = G()),
              Xt(
                this.relativeTargetOrigin,
                this.layout.actual,
                this.relativeParent.layout.actual,
              ),
              it(this.relativeTarget, this.relativeTargetOrigin))),
          !(!this.relativeTarget && !this.targetDelta) &&
            (this.target ||
              ((this.target = G()), (this.targetWithTransforms = G())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            !((s = this.relativeParent) === null || s === void 0) &&
            s.target
              ? Cf(this.target, this.relativeTarget, this.relativeParent.target)
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.actual))
                    : it(this.target, this.layout.actual),
                  jo(this.target, this.targetDelta))
                : it(this.target, this.layout.actual),
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              (this.relativeParent = this.getClosestProjectingParent()),
              this.relativeParent &&
                !!this.relativeParent.resumingFrom == !!this.resumingFrom &&
                !this.relativeParent.options.layoutScroll &&
                this.relativeParent.target &&
                ((this.relativeTarget = G()),
                (this.relativeTargetOrigin = G()),
                Xt(
                  this.relativeTargetOrigin,
                  this.target,
                  this.relativeParent.target,
                ),
                it(this.relativeTarget, this.relativeTargetOrigin)))));
      }),
      (o.prototype.getClosestProjectingParent = function () {
        if (!(!this.parent || yt(this.parent.latestValues)))
          return (this.parent.relativeTarget || this.parent.targetDelta) &&
            this.parent.layout
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }),
      (o.prototype.calcProjection = function () {
        var s,
          l = this.options,
          u = l.layout,
          f = l.layoutId;
        if (
          ((this.isTreeAnimating = !!(
            (!((s = this.parent) === null || s === void 0) &&
              s.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !(!this.layout || !(u || f)))
        ) {
          var h = this.getLead();
          (it(this.layoutCorrected, this.layout.actual),
            Af(
              this.layoutCorrected,
              this.treeScale,
              this.path,
              !!this.resumingFrom || this !== h,
            ));
          var c = h.target;
          if (c) {
            this.projectionDelta ||
              ((this.projectionDelta = Qt()),
              (this.projectionDeltaWithTransform = Qt()));
            var p = this.treeScale.x,
              d = this.treeScale.y,
              v = this.projectionTransform;
            (Kt(
              this.projectionDelta,
              this.layoutCorrected,
              c,
              this.latestValues,
            ),
              (this.projectionTransform = ni(
                this.projectionDelta,
                this.treeScale,
              )),
              (this.projectionTransform !== v ||
                this.treeScale.x !== p ||
                this.treeScale.y !== d) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", c)));
          }
        }
      }),
      (o.prototype.hide = function () {
        this.isVisible = !1;
      }),
      (o.prototype.show = function () {
        this.isVisible = !0;
      }),
      (o.prototype.scheduleRender = function (s) {
        var l, u, f;
        (s === void 0 && (s = !0),
          (u = (l = this.options).scheduleRender) === null ||
            u === void 0 ||
            u.call(l),
          s &&
            ((f = this.getStack()) === null ||
              f === void 0 ||
              f.scheduleRender()),
          this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0));
      }),
      (o.prototype.setAnimationOrigin = function (s, l) {
        var u = this,
          f;
        l === void 0 && (l = !1);
        var h = this.snapshot,
          c = (h == null ? void 0 : h.latestValues) || {},
          p = S({}, this.latestValues),
          d = Qt();
        ((this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !l));
        var v = G(),
          m = h == null ? void 0 : h.isShared,
          x =
            (((f = this.getStack()) === null || f === void 0
              ? void 0
              : f.members.length) || 0) <= 1,
          w = !!(
            m &&
            !x &&
            this.options.crossfade === !0 &&
            !this.path.some(Rd)
          );
        ((this.animationProgress = 0),
          (this.mixTargetDelta = function (b) {
            var T,
              C = b / 1e3;
            (oi(d.x, s.x, C),
              oi(d.y, s.y, C),
              u.setTargetDelta(d),
              u.relativeTarget &&
                u.relativeTargetOrigin &&
                u.layout &&
                !((T = u.relativeParent) === null || T === void 0) &&
                T.layout &&
                (Xt(v, u.layout.actual, u.relativeParent.layout.actual),
                Ad(u.relativeTarget, u.relativeTargetOrigin, v, C)),
              m && ((u.animationValues = p), hd(p, c, u.latestValues, C, w, x)),
              u.root.scheduleUpdateProjection(),
              u.scheduleRender(),
              (u.animationProgress = C));
          }),
          this.mixTargetDelta(0));
      }),
      (o.prototype.startAnimation = function (s) {
        var l = this,
          u,
          f;
        (this.notifyListeners("animationStart"),
          (u = this.currentAnimation) === null || u === void 0 || u.stop(),
          this.resumingFrom &&
            ((f = this.resumingFrom.currentAnimation) === null ||
              f === void 0 ||
              f.stop()),
          this.pendingAnimation &&
            (Lt.update(this.pendingAnimation),
            (this.pendingAnimation = void 0)),
          (this.pendingAnimation = at.update(function () {
            ((Wt.hasAnimatedSinceResize = !0),
              (l.currentAnimation = fd(
                0,
                ri,
                S(S({}, s), {
                  onUpdate: function (h) {
                    var c;
                    (l.mixTargetDelta(h),
                      (c = s.onUpdate) === null ||
                        c === void 0 ||
                        c.call(s, h));
                  },
                  onComplete: function () {
                    var h;
                    ((h = s.onComplete) === null || h === void 0 || h.call(s),
                      l.completeAnimation());
                  },
                }),
              )),
              l.resumingFrom &&
                (l.resumingFrom.currentAnimation = l.currentAnimation),
              (l.pendingAnimation = void 0));
          })));
      }),
      (o.prototype.completeAnimation = function () {
        var s;
        (this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0)),
          (s = this.getStack()) === null ||
            s === void 0 ||
            s.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete"));
      }),
      (o.prototype.finishAnimation = function () {
        var s;
        (this.currentAnimation &&
          ((s = this.mixTargetDelta) === null ||
            s === void 0 ||
            s.call(this, ri),
          this.currentAnimation.stop()),
          this.completeAnimation());
      }),
      (o.prototype.applyTransformsToTarget = function () {
        var s = this.getLead(),
          l = s.targetWithTransforms,
          u = s.target,
          f = s.layout,
          h = s.latestValues;
        !l ||
          !u ||
          !f ||
          (it(l, u),
          Dt(l, h),
          Kt(this.projectionDeltaWithTransform, this.layoutCorrected, l, h));
      }),
      (o.prototype.registerSharedNode = function (s, l) {
        var u, f, h;
        this.sharedNodes.has(s) || this.sharedNodes.set(s, new bd());
        var c = this.sharedNodes.get(s);
        (c.add(l),
          l.promote({
            transition:
              (u = l.options.initialPromotionConfig) === null || u === void 0
                ? void 0
                : u.transition,
            preserveFollowOpacity:
              (h =
                (f = l.options.initialPromotionConfig) === null || f === void 0
                  ? void 0
                  : f.shouldPreserveFollowOpacity) === null || h === void 0
                ? void 0
                : h.call(f, l),
          }));
      }),
      (o.prototype.isLead = function () {
        var s = this.getStack();
        return s ? s.lead === this : !0;
      }),
      (o.prototype.getLead = function () {
        var s,
          l = this.options.layoutId;
        return l
          ? ((s = this.getStack()) === null || s === void 0
              ? void 0
              : s.lead) || this
          : this;
      }),
      (o.prototype.getPrevLead = function () {
        var s,
          l = this.options.layoutId;
        return l
          ? (s = this.getStack()) === null || s === void 0
            ? void 0
            : s.prevLead
          : void 0;
      }),
      (o.prototype.getStack = function () {
        var s = this.options.layoutId;
        if (s) return this.root.sharedNodes.get(s);
      }),
      (o.prototype.promote = function (s) {
        var l = s === void 0 ? {} : s,
          u = l.needsReset,
          f = l.transition,
          h = l.preserveFollowOpacity,
          c = this.getStack();
        (c && c.promote(this, h),
          u && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          f && this.setOptions({ transition: f }));
      }),
      (o.prototype.relegate = function () {
        var s = this.getStack();
        return s ? s.relegate(this) : !1;
      }),
      (o.prototype.resetRotation = function () {
        var s = this.options.visualElement;
        if (s) {
          for (var l = !1, u = {}, f = 0; f < vn.length; f++) {
            var h = vn[f],
              c = "rotate" + h;
            s.getStaticValue(c) &&
              ((l = !0), (u[c] = s.getStaticValue(c)), s.setStaticValue(c, 0));
          }
          if (l) {
            s == null || s.syncRender();
            for (var c in u) s.setStaticValue(c, u[c]);
            s.scheduleRender();
          }
        }
      }),
      (o.prototype.getProjectionStyles = function (s) {
        var l, u, f, h, c, p;
        s === void 0 && (s = {});
        var d = {};
        if (!this.instance || this.isSVG) return d;
        if (this.isVisible) d.visibility = "";
        else return { visibility: "hidden" };
        var v =
          (l = this.options.visualElement) === null || l === void 0
            ? void 0
            : l.getProps().transformTemplate;
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (d.opacity = ""),
            (d.pointerEvents = Te(s.pointerEvents) || ""),
            (d.transform = v ? v(this.latestValues, "") : "none"),
            d
          );
        var m = this.getLead();
        if (!this.projectionDelta || !this.layout || !m.target) {
          var x = {};
          return (
            this.options.layoutId &&
              ((x.opacity =
                (u = this.latestValues.opacity) !== null && u !== void 0
                  ? u
                  : 1),
              (x.pointerEvents = Te(s.pointerEvents) || "")),
            this.hasProjected &&
              !yt(this.latestValues) &&
              ((x.transform = v ? v({}, "") : "none"),
              (this.hasProjected = !1)),
            x
          );
        }
        var w = m.animationValues || m.latestValues;
        (this.applyTransformsToTarget(),
          (d.transform = ni(
            this.projectionDeltaWithTransform,
            this.treeScale,
            w,
          )),
          v && (d.transform = v(w, d.transform)));
        var b = this.projectionDelta,
          T = b.x,
          C = b.y;
        ((d.transformOrigin = ""
          .concat(T.origin * 100, "% ")
          .concat(C.origin * 100, "% 0")),
          m.animationValues
            ? (d.opacity =
                m === this
                  ? (h =
                      (f = w.opacity) !== null && f !== void 0
                        ? f
                        : this.latestValues.opacity) !== null && h !== void 0
                    ? h
                    : 1
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : w.opacityExit)
            : (d.opacity =
                m === this
                  ? (c = w.opacity) !== null && c !== void 0
                    ? c
                    : ""
                  : (p = w.opacityExit) !== null && p !== void 0
                    ? p
                    : 0));
        for (var L in Me)
          if (w[L] !== void 0) {
            var V = Me[L],
              A = V.correct,
              j = V.applyTo,
              I = A(w[L], m);
            if (j) for (var q = j.length, F = 0; F < q; F++) d[j[F]] = I;
            else d[L] = I;
          }
        return (
          this.options.layoutId &&
            (d.pointerEvents = m === this ? Te(s.pointerEvents) || "" : "none"),
          d
        );
      }),
      (o.prototype.clearSnapshot = function () {
        this.resumeFrom = this.snapshot = void 0;
      }),
      (o.prototype.resetTree = function () {
        (this.root.nodes.forEach(function (s) {
          var l;
          return (l = s.currentAnimation) === null || l === void 0
            ? void 0
            : l.stop();
        }),
          this.root.nodes.forEach(ii),
          this.root.sharedNodes.clear());
      }),
      o
    );
  })();
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 프로젝션 트리 업데이트 보조 함수 (Helpers)]
 * 역할: 계산된 레이아웃 정보를 실제 DOM 렌더링에 반영하고 초기화합니다.
 * --------------------------------------------------------------------------- */
function Cd(t) {
  t.updateLayout();
}
function Td(t) {
  var e,
    n,
    r,
    i,
    a =
      (n =
        (e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) !==
        null && n !== void 0
        ? n
        : t.snapshot;
  if (t.isLead() && t.layout && a && t.hasListeners("didUpdate")) {
    var o = t.layout,
      s = o.actual,
      l = o.measured;
    t.options.animationType === "size"
      ? st(function (w) {
          var b = a.isShared ? a.measured[w] : a.layout[w],
            T = pt(b);
          ((b.min = s[w].min), (b.max = b.min + T));
        })
      : t.options.animationType === "position" &&
        st(function (w) {
          var b = a.isShared ? a.measured[w] : a.layout[w],
            T = pt(s[w]);
          b.max = b.min + T;
        });
    var u = Qt();
    Kt(u, s, a.layout);
    var f = Qt();
    a.isShared
      ? Kt(f, t.applyTransform(l, !0), a.measured)
      : Kt(f, s, a.layout);
    var h = !Bo(u),
      c = !1;
    if (
      !t.resumeFrom &&
      ((t.relativeParent = t.getClosestProjectingParent()),
      t.relativeParent && !t.relativeParent.resumeFrom)
    ) {
      var p = t.relativeParent,
        d = p.snapshot,
        v = p.layout;
      if (d && v) {
        var m = G();
        Xt(m, a.layout, d.layout);
        var x = G();
        (Xt(x, s, v.actual), Uo(m, x) || (c = !0));
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: a,
      delta: f,
      layoutDelta: u,
      hasLayoutChanged: h,
      hasRelativeTargetChanged: c,
    });
  } else
    t.isLead() &&
      ((i = (r = t.options).onExitComplete) === null ||
        i === void 0 ||
        i.call(r));
  t.options.transition = void 0;
}
function Pd(t) {
  t.clearSnapshot();
}
function ii(t) {
  t.clearMeasurements();
}
function _d(t) {
  var e = t.options.visualElement;
  (e != null &&
    e.getProps().onBeforeLayoutMeasure &&
    e.notifyBeforeLayoutMeasure(),
    t.resetTransform());
}
function Ed(t) {
  (t.finishAnimation(), (t.targetDelta = t.relativeTarget = t.target = void 0));
}
function Md(t) {
  t.resolveTargetDelta();
}
function Ld(t) {
  t.calcProjection();
}
function Vd(t) {
  t.resetRotation();
}
function jd(t) {
  t.removeLeadSnapshot();
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 타겟 델타 보간(Interpolation) 헬퍼]
 * 역할: X축, Y축, 스케일 등 목표 좌표로의 진행률(0~1)을 시간에 따라 곱하여
 * 요소가 스르륵 움직이는 중간 값을 구합니다.
 * --------------------------------------------------------------------------- */
function oi(t, e, n) {
  ((t.translate = k(e.translate, 0, n)),
    (t.scale = k(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint));
}
function ai(t, e, n, r) {
  ((t.min = k(e.min, n.min, r)), (t.max = k(e.max, n.max, r)));
}
function Ad(t, e, n, r) {
  (ai(t.x, e.x, n.x, r), ai(t.y, e.y, n.y, r));
}
function Rd(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
var Nd = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function Id(t, e) {
  for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
    if (t.path[r].instance) {
      n = t.path[r];
      break;
    }
  var i = n && n !== t.root ? n.instance : document,
    a = i.querySelector('[data-projection-id="'.concat(e, '"]'));
  a && t.mount(a, !0);
}

/* ---------------------------------------------------------------------------
 * [기능 분류: 레이아웃 픽셀 반올림 헬퍼]
 * 역할: 연산 과정에서 발생한 소수점 좌표를 정수로 반올림하여 브라우저에서
 * 흐릿하게(Blurry) 렌더링되는 현상을 방지합니다.
 * --------------------------------------------------------------------------- */
function si(t) {
  ((t.min = Math.round(t.min)), (t.max = Math.round(t.max)));
}
function li(t) {
  (si(t.x), si(t.y));
}
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

//part.5

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 전역 프로젝션 엔진 인스턴스 초기화]
 * 역할: 브라우저 환경에 맞춰 스크롤 위치 측정 및 리사이즈 이벤트를 감지하는
 * 최상위 레이아웃 프로젝션 엔진(zo) 인스턴스를 생성하고 필수 옵션을 주입합니다.
 * --------------------------------------------------------------------------- */
var Od = zo({
    attachResizeListener: function (t, e) {
      return Ue(t, "resize", e);
    },
    measureScroll: function () {
      return {
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      };
    },
    checkIsScrollRoot: function () {
      return !0;
    },
  }),
  sn = { current: void 0 },
  Dd = zo({
    measureScroll: function (t) {
      return { x: t.scrollLeft, y: t.scrollTop };
    },
    defaultParent: function () {
      if (!sn.current) {
        var t = new Od(0, {});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (sn.current = t));
      }
      return sn.current;
    },
    resetTransform: function (t, e) {
      t.style.transform = e ?? "none";
    },
    checkIsScrollRoot: function (t) {
      return window.getComputedStyle(t).position === "fixed";
    },
  }),
  kd = S(S(S(S({}, xf), Dc), Bf), cd),
  // === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

  // === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
  /* ---------------------------------------------------------------------------
   * [기능 분류: 범용 모션 컴포넌트(qo) 팩토리 생성]
   * 역할: 앞서 정의한 모든 물리/레이아웃 속성(kd, od, Dd)을 HTML 태그에 주입할 수 있는
   * 최종 React 모션 컴포넌트 생성기입니다. (예: UI 구성 시 qo.div 형태로 사용)
   * --------------------------------------------------------------------------- */
  qo = Ll(function (t, e) {
    return pu(t, e, kd, od, Dd);
  });

/* ---------------------------------------------------------------------------
 * [기능 분류: 모션 값(MotionValue) 제어 React 훅 (xe)]
 * 역할: 외부 UI 컴포넌트(Main.js 등)에서 특정 물리 상태값을 생성하고
 * 변화를 구독(Subscribe)할 수 있도록 지원합니다.
 * --------------------------------------------------------------------------- */
function xe(t) {
  var e = Bt(function () {
      return Vt(t);
    }),
    n = y.useContext(se).isStatic;
  if (n) {
    var r = H(y.useState(t), 2),
      i = r[1];
    y.useEffect(function () {
      return e.onChange(i);
    }, []);
  }
  return e;
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 고정밀 타이머(Performance API) 폴리필]
 * 역할: 브라우저가 지원하는 경우 performance.now()를 사용하여
 * 프레임 계산에 필수적인 밀리초 단위의 경과 시간을 정확히 측정합니다.
 * --------------------------------------------------------------------------- */
var Hd =
  typeof performance < "u"
    ? function () {
        return performance.now();
      }
    : function () {
        return Date.now();
      };
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 애니메이션 프레임 루프 React 훅 (Fd)]
 * 역할: 브라우저의 requestAnimationFrame 사이클에 맞춰 콜백 함수를
 * 매 프레임마다 지속적으로 실행하여 인터랙션 동기화를 유지합니다.
 * --------------------------------------------------------------------------- */
function Fd(t) {
  var e = Bt(Hd),
    n = y.useContext(se).isStatic;
  y.useEffect(
    function () {
      if (!n) {
        var r = function (i) {
          var a = i.timestamp;
          t(a - e);
        };
        return (
          at.update(r, !0),
          function () {
            return Lt.update(r);
          }
        );
      }
    },
    [t],
  );
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 공통 수학 및 보간 유틸리티 (Math Utils)]
 * 역할: 선형 보간(Lerp), 스프링 감쇠(Exponential decay), 값 클램핑(Clamp) 등
 * 화면의 3D 객체나 UI가 이동할 때 필요한 순수 수학 공식들입니다.
 * --------------------------------------------------------------------------- */
function Qh(t, e, n) {
  return t + (e - t) * n;
}

function Jh(t, e, n, r) {
  return Qh(t, e, 1 - Math.exp(-n * r));
}

function Q(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
// === [Vanilla JS 영역] 순수 수학 연산 및 코어 로직 끝 ===

// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 시작 ===
/* ---------------------------------------------------------------------------
 * [기능 분류: 윈도우 리사이즈 및 DOM 크기 측정 훅 (ui)]
 * 역할: DOM 요소의 크기나 브라우저 창 크기가 변할 때 이를 실시간으로 감지하여
 * 툴팁이나 반응형 레이아웃에 필요한 BoundingClientRect 객체를 반환합니다.
 * --------------------------------------------------------------------------- */
function ui() {
  const [t, e] = y.useState(null),
    n = y.useRef(null);
  y.useEffect(() => {
    function r() {
      n.current && e(n.current.getBoundingClientRect());
    }
    return (
      window.addEventListener("resize", r),
      r(),
      () => {
        window.removeEventListener("resize", r);
      }
    );
  }, [n]);
  return [n, t];
}
// === [React.js 영역] UI 렌더링 및 컴포넌트 상태 관리 끝 ===

/* ---------------------------------------------------------------------------
 * [기능 분류: 코어 모션 모듈 추출(Export)]
 * 역할: Main.js 및 Book3D.js 등 외부 파일에서 이 거대한 물리 엔진을
 * 자유롭게 사용할 수 있도록 캡슐화된 팩토리(qo)와 훅을 내보냅니다.
 * --------------------------------------------------------------------------- */
export { qo, xe, Fd, Qh, Jh, ui, Q };
