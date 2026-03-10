var $o = Object.defineProperty;
var Zo = (t, e, n) =>
  e in t
    ? $o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n);
var P = (t, e, n) => Zo(t, typeof e != "symbol" ? e + "" : e, n);
import "./modulepreload-polyfill-cm6ok5jw.js";
import {
  r as Yo,
  g as jn,
  j as g,
  O as Ko,
  a as y,
  h as B,
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
  u as va,
} from "./three.module-b6rmv7il.js";
var ma = Yo();
const ga = jn(ma),
  ya = "production";
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
function wa(t) {
  const { children: e } = t;
  return g.jsx(Ko, { ...xa, children: e });
}
const Sa = "_noise_11ikr_2",
  Ca = "_jitter_11ikr_1",
  Ta = { noise: Sa, jitter: Ca };
function Pa() {
  return g.jsx("div", { className: Ta.noise });
}
var Ye = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var nr;
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
const Ma = jn(Ea),
  La = "_container_nag8h_1",
  Va = "_containerFade_nag8h_24",
  ja = "_flashOut_nag8h_1",
  Aa = "_background_nag8h_29",
  Ra = "_backgroundFallback_nag8h_42",
  Na = "_backgroundFade_nag8h_46",
  Ia = "_stream_nag8h_50",
  Oa = "_streamShow_nag8h_54",
  Da = "_logoMark_nag8h_58",
  ka = "_logoMeta_nag8h_63",
  Ha = "_bootText_nag8h_70",
  Fa = "_blinker_nag8h_74",
  Ba = "_inner_nag8h_80",
  Ua = "_grid_nag8h_100",
  za = "_metrics_nag8h_118",
  qa = "_item_nag8h_126",
  Ga = "_itemRow_nag8h_132",
  Wa = "_txnCount_nag8h_140",
  $a = "_txnCountValue_nag8h_144",
  Za = "_txnVolume_nag8h_148",
  Ya = "_txnVolumeValue_nag8h_152",
  Ka = "_cities_nag8h_156",
  Xa = "_cityGrid_nag8h_160",
  Qa = "_location_nag8h_168",
  Ja = "_currencyVolume_nag8h_172",
  ts = "_currencyVolumeGrid_nag8h_176",
  es = "_currencyVolumeLabelUsd_nag8h_184",
  ns = "_currencyVolumeValUsd_nag8h_188",
  rs = "_label_nag8h_192",
  is = "_uptime_nag8h_199",
  os = "_uptimeBar_nag8h_203",
  as = "_uptimeTick_nag8h_210",
  ss = "_uptimeGreen_nag8h_215",
  ls = "_uptimeYellow_nag8h_220",
  us = "_capacity_nag8h_230",
  cs = "_capacityBar_nag8h_234",
  fs = "_capacityTick_nag8h_244",
  ds = "_dottedSpacer_nag8h_253",
  hs = "_footer_nag8h_260",
  ps = "_close_nag8h_267",
  vs = "_gptn_nag8h_284",
  ms = "_snakePrompt_nag8h_291",
  gs = "_privacy_nag8h_299",
  ys = "_privacyError_nag8h_308",
  bs = "_bouncerContainer_nag8h_313",
  xs = "_bouncer_nag8h_313",
  ws = "_bouncerSvg_nag8h_335",
  U = {
    container: La,
    containerFade: Va,
    flashOut: ja,
    background: Aa,
    backgroundFallback: Ra,
    backgroundFade: Na,
    stream: Ia,
    streamShow: Oa,
    logoMark: Da,
    logoMeta: ka,
    bootText: Ha,
    blinker: Fa,
    inner: Ba,
    grid: Ua,
    metrics: za,
    item: qa,
    itemRow: Ga,
    txnCount: Wa,
    txnCountValue: $a,
    txnVolume: Za,
    txnVolumeValue: Ya,
    cities: Ka,
    cityGrid: Xa,
    location: Qa,
    currencyVolume: Ja,
    currencyVolumeGrid: ts,
    currencyVolumeLabelUsd: es,
    currencyVolumeValUsd: ns,
    label: rs,
    uptime: is,
    uptimeBar: os,
    uptimeTick: as,
    uptimeGreen: ss,
    uptimeYellow: ls,
    capacity: us,
    capacityBar: cs,
    capacityTick: fs,
    dottedSpacer: ds,
    footer: hs,
    close: ps,
    gptn: vs,
    snakePrompt: ms,
    privacy: gs,
    privacyError: ys,
    bouncerContainer: bs,
    bouncer: xs,
    bouncerSvg: ws,
  },
  Ss = "/assets/00-intro-jklatvzn.png",
  Cs = "/assets/01-intro-page-d778gt84.png",
  Ts = "/assets/02-toc-est9cawd.png",
  Ps = "/assets/03-transaction-volume-f71ncgdc.png",
  _s = "/assets/04-total-transactions-eh6a0hkt.png",
  Es = "/assets/05-transactions-per-minute-luj9fe0e.png",
  Ms = "/assets/06-top-currency-volumes-cdjxlivq.png",
  Ls = "/assets/07-time-saved-with-link-hhh69wut.png",
  Vs = "/assets/08-fraudulent-transaction-detector-kpnb09eu.png",
  js = "/assets/09-stripe-tax-calculations-ojoztttn.png",
  As = "/assets/10-total-ARR-of-new-billing-subscriptions-jglh5kb6.png",
  Rs = "/assets/11-businesses%20having%20their%20best%20day-9cbzka1e.png",
  Ns = "/assets/12-Cross-border%20transaction%20volume-dn5awqi6.png",
  Is = "/assets/13-Unique%20payment%20methods-ophnjt05.png",
  Os = "/assets/14-top-selling-cities-bp0qop1u.png",
  Ds = "/assets/15-api-utilization-j68u9qup.png",
  ks = "/assets/16-stripe-api-uptime-e1xeh5lo.png",
  Hs = "/assets/17-user-logo-page-1-ama85rix.png",
  Fs = "/assets/18-user-logo-page-2-dmons2fs.png",
  Bs = "/assets/19-terms-and-conditions-gi95m6t1.png",
  Us = "/assets/20-intentionally-blank-f5rxv1zv.png",
  zs = "/assets/21-shop-js06heic.png",
  qs = "/assets/22-intentionally-blank-fdtvx8n1.png",
  Gs = "/assets/23-back-cover-h9s1qby6.png",
  hi = y.createContext({
    snakeEnabled: !1,
    setSnakeEnabled: () => {},
    override: !1,
    pageMeta: [],
    pageIndex: 0,
    setOverride: () => {},
    setPageIndex: () => {},
    isOpen: !1,
    setIsOpen: () => {},
  });
function Ws({ children: t }) {
  const [e, n] = y.useState(0),
    [r, i] = y.useState(!1),
    [a, o] = y.useState(!1),
    [s, l] = y.useState(!1),
    u = y.useMemo(
      () => [
        {
          texture: Ss,
          title: "BF/CM User Manual",
          textContent: "A supplemental manual to help guide you",
        },
        { texture: Cs, title: "Intro", textContent: "X" },
        { texture: Ts, title: "Table of Contents", textContent: "X" },
        {
          texture: Ps,
          title: "Transaction Volume",
          textContent: "Cumulative payment volume",
        },
        {
          texture: _s,
          title: "Total Transactions",
          textContent: "Total number of payment flows",
        },
        {
          texture: Es,
          title: "Transactions Per Minute",
          textContent: "Average number of transactions processed each minute",
        },
        {
          texture: Ms,
          title: "Top Currency Volumes",
          textContent:
            "Currencies used to pay on Stripe, ranked by USD-equivalent volume",
        },
        {
          texture: Ls,
          title: "Time Saved with Link",
          textContent:
            "Total time saved by customers paying with Link (Stripe’s accelerated checkout solution)",
        },
        {
          texture: Vs,
          title: "Fraudulent Transactions Blocked",
          textContent: "Number of transactions blocked by Stripe Radar",
        },
        {
          texture: js,
          title: "Tax Calculations",
          textContent:
            "Number of transactions where Stripe Tax was used to automatically calculate local taxes",
        },
        {
          texture: As,
          title: "Total ARR from new Billing Subscriptions",
          textContent:
            "Total annualized revenue from subscriptions initiated or upgraded during BFCM",
        },
        {
          texture: Rs,
          title: "Businesses Having Their Best Day Ever",
          textContent:
            "Number of businesses seeing their highest-revenue day in their history with Stripe",
        },
        {
          texture: Ns,
          title: "Cross-border transactions",
          textContent:
            "Total cumulative volume of payments where buyers and sellers are in different countries",
        },
        {
          texture: Is,
          title: "Unique Payment Methods",
          textContent:
            "Number of unique payment methods (e.g., cards, bank accounts, wallets) used by shoppers",
        },
        {
          texture: Os,
          title: "Top-Selling Cities",
          textContent:
            "Metropolitan areas seeing the largest transaction volume",
        },
        {
          texture: Ds,
          title: "Server utilization",
          textContent: "Stripe API request load vs. current capacity",
        },
        {
          texture: ks,
          title: "API Uptime",
          textContent: "Uptime of Stripe APIs",
        },
        { texture: Hs, title: "Businesses using Stripe 1-25", textContent: "" },
        {
          texture: Fs,
          title: "Businesses using Stripe 26-50",
          textContent: "",
        },
        { texture: Bs, title: "Terms and Conditions", textContent: "" },
        { texture: Us, title: "Intentionally Blank", textContent: "" },
        {
          texture: zs,
          title: "BF/CM Shop",
          textContent: "Purchase the official BF/CM hat while supplies last",
        },
        { texture: qs, title: "Questions and comments", textContent: "" },
        { texture: Gs, title: "Back", textContent: "" },
      ],
      [],
    );
  return g.jsx(hi.Provider, {
    value: {
      snakeEnabled: s,
      setSnakeEnabled: l,
      override: a,
      setOverride: o,
      pageIndex: e,
      setPageIndex: n,
      isOpen: r,
      setIsOpen: i,
      pageMeta: u,
    },
    children: t,
  });
}
function Tt() {
  return y.useContext(hi);
}
var Ke = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var rr;
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
const Ct = jn(Zs);
function Ys({ blinkText: t, className: e }) {
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
        "DATA CONNECTION [",
        n ? t : g.jsx(g.Fragment, { children: "    " }),
        "]",
      ],
    })
  );
}
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
class nl {
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
let rl = class {
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
    (this.body.unshift([this.head[0] + e[0], this.head[1] + e[1]]),
      n || this.body.pop());
  }
  get head() {
    return this.body[0];
  }
  get tail() {
    return this.body[this.body.length - 1];
  }
};
class il {
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
      (this.direction = [1, 0]),
      (this.grid = new nl(e, n)),
      (this.snake = new rl([10, 10], 5)),
      this.resetGame(),
      (this.stepListeners = new Set()),
      (this.scoreListeners = new Set()),
      (this.loseListeners = new Set()),
      (this.stepDuration = 200),
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
    if (e[0] < 0 || e[0] >= this.cols || e[1] < 0 || e[1] >= this.rows) {
      this.lose();
      return;
    }
    switch (this.grid.get(...e)) {
      case fn:
        ((this.score += 1),
          this.scoreListeners.forEach((r) => r(this.score)),
          (this.stepDuration = Math.max(80, this.stepDuration - 5)),
          this.snake.step(this.direction, !0),
          this.grid.set(...this.snake.head, Ce),
          this.spawnFood());
        break;
      case Se:
        (this.grid.set(...this.snake.tail, Se),
          this.grid.set(...this.snake.head, cn),
          this.snake.step(this.direction, !1),
          this.grid.set(...this.snake.head, Ce));
        break;
      case cn:
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
const pi = {
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
function dn(t, e = 1) {
  const n = pi[t];
  n.rate(e);
  const r = n.play();
  n.rate(e, r);
}
function et(t, e = 1) {
  const n = t[Math.floor(Math.random() * t.length)],
    r = pi[n],
    i = r.play();
  r.rate(e, i);
}
function ol() {
  const [t, e] = y.useState(!1);
  return (
    y.useEffect(() => {
      B.Howler.mute(t);
    }, [t]),
    [t, e]
  );
}
function De() {
  return {
    playSound: y.useCallback(dn, []),
    playRandomSound: y.useCallback(et, []),
  };
}
function al({ onQuit: t }) {
  const [e, n] = y.useState(0),
    [r, i] = y.useState("pre"),
    { playSound: a } = De(),
    o = 20,
    s = 6,
    l = y.useRef(new il(50, 50)).current,
    u = y.useRef(null),
    f = y.useRef(null),
    h = y.useRef(),
    c = "#ffa621",
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
              (T === Ce || T === cn) &&
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
    const w = l.onScore((C) => {
        (a("beepHigh"), n(C));
      }),
      b = l.onStep((C) => {
        p(C);
      }),
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
function sl() {
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
function Ot(t) {
  return (
    typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
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
function or(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
function Bt(t) {
  var e = y.useRef(null);
  return (e.current === null && (e.current = t()), e.current);
}
var Wt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Cl = 1;
function Tl() {
  return Bt(function () {
    if (Wt.hasEverUpdated) return Cl++;
  });
}
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
function Ue(t, e, n, r) {
  return (
    r === void 0 && (r = { passive: !0 }),
    t.addEventListener(e, n, r),
    function () {
      return t.removeEventListener(e, n);
    }
  );
}
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
function to(t) {
  return y.useEffect(function () {
    return function () {
      return t();
    };
  }, []);
}
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
function si(t) {
  ((t.min = Math.round(t.min)), (t.max = Math.round(t.max)));
}
function li(t) {
  (si(t.x), si(t.y));
}
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
  qo = Ll(function (t, e) {
    return pu(t, e, kd, od, Dd);
  });
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
var Hd =
  typeof performance < "u"
    ? function () {
        return performance.now();
      }
    : function () {
        return Date.now();
      };
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
function Bd({ className: t }) {
  return g.jsxs("svg", {
    width: "833",
    height: "298",
    viewBox: "0 0 833 298",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: t,
    children: [
      g.jsx("path", {
        d: "M740.514 55.3906C738.643 54.5422 736.726 53.7235 734.795 52.9198C699.558 37.9759 657.076 25.8303 608.546 16.8252C605.088 16.1703 601.615 15.5452 598.097 14.9349C541.14 5.08147 479.901 0.0952148 416.057 0.0952148C352.214 0.0952148 290.9 5.09636 234.003 14.9498C230.739 15.5005 227.326 16.1108 223.584 16.8103C175.084 25.8005 132.587 37.961 97.2746 52.9347C95.3735 53.7384 93.4724 54.5571 91.6462 55.3757C31.7247 81.9294 0.0649414 114.273 0.0649414 148.879C0.0649414 183.485 31.7247 215.829 91.6312 242.368C93.4724 243.201 95.3735 244.005 97.2746 244.824C132.572 259.797 175.069 271.943 223.569 280.948C227.326 281.662 230.739 282.273 233.988 282.809C290.9 292.662 352.169 297.663 416.057 297.663C479.946 297.663 541.125 292.677 598.097 282.823C601.615 282.213 605.088 281.588 608.546 280.933C657.091 271.928 699.558 259.783 734.78 244.839C736.711 244.02 738.628 243.216 740.484 242.368C800.39 215.814 832.065 183.485 832.065 148.864C832.065 114.243 800.405 81.9145 740.514 55.3757V55.3906ZM826.002 145.902H793.385C792.442 118.545 778.49 91.8126 752.728 67.7148C798.564 90.7558 824.296 118.113 826.017 145.902H826.002ZM711.399 151.841H787.397C786.289 181.699 768.491 210.962 735.783 236.682H664.246C673.123 227.647 680.562 218.166 686.505 208.387H679.469C673.138 218.196 665.204 227.677 655.758 236.682H536.858C543.43 227.766 548.909 218.3 553.28 208.387H546.723C542.113 218.344 536.305 227.826 529.344 236.682H302.771C295.81 227.826 290.002 218.344 285.392 208.387H278.835C283.206 218.3 288.685 227.781 295.256 236.682H176.327C166.492 227.29 158.319 217.407 151.852 207.166C149.262 206.898 146.748 206.601 144.308 206.243C150.46 216.796 158.319 226.992 167.839 236.682H96.3165C63.594 210.962 45.8106 181.699 44.7029 151.841H80.8235C80.8534 149.906 80.9881 147.927 81.2276 145.902H44.7029C45.8106 116.044 63.594 86.7966 96.3165 61.0615H167.839C159.247 69.8284 151.987 78.9972 146.134 88.4636C148.679 88.0468 151.298 87.6598 153.963 87.3324C160.07 78.2381 167.54 69.4414 176.327 61.0466H295.256C289.628 68.6823 284.808 76.7347 280.796 85.1146H287.413C291.664 76.6901 296.798 68.6525 302.771 61.0466H529.344C535.317 68.6376 540.451 76.6901 544.702 85.1146H551.319C547.307 76.7347 542.487 68.6823 536.858 61.0466H655.758C669.859 74.5021 680.577 88.9995 687.688 104.107L689.663 94.8192C683.257 83.0904 674.769 71.7634 664.246 61.0615H735.783C768.506 86.7817 786.289 116.044 787.397 145.902H712.057L710.89 151.35L711.384 151.841H711.399ZM600.537 275.039H495.304C509.3 266.346 521.695 255.496 532.203 242.621H649.232C635.445 254.632 619.099 265.513 600.522 275.039H600.537ZM348.696 275.039C333.069 266.778 319.297 255.898 307.696 242.621H524.419C512.818 255.898 499.061 266.778 483.419 275.039H348.696ZM470.74 280.978C453.495 288.018 434.829 291.709 416.057 291.709C397.286 291.709 378.62 288.018 361.375 280.978H470.74ZM231.563 275.039C213.001 265.513 196.64 254.632 182.838 242.621H299.897C310.42 255.496 322.8 266.346 336.811 275.039H231.563ZM231.563 22.6897H336.811C322.815 31.3821 310.42 42.2328 299.912 55.1078H182.853C196.655 43.0961 213.016 32.2156 231.578 22.6897H231.563ZM483.419 22.6897C499.046 30.9505 512.803 41.8309 524.419 55.1078H307.696C319.297 41.8309 333.054 30.9505 348.696 22.6897H483.419ZM361.375 16.7508C378.62 9.71051 397.286 6.01919 416.057 6.01919C434.829 6.01919 453.495 9.71051 470.74 16.7508H361.375ZM600.537 22.6897C619.099 32.2008 635.445 43.0812 649.247 55.1078H532.218C521.695 42.2328 509.315 31.3821 495.319 22.6897H600.552H600.537ZM724.527 55.1078H658.123C646.013 43.8254 631.793 33.4808 615.761 24.2227C656.881 32.2752 693.376 42.6347 724.527 55.1078ZM571.632 16.7508H484.901C477.162 12.7618 469.078 9.44259 460.74 6.8676C498.957 8.31138 536.05 11.6157 571.617 16.7508H571.632ZM371.36 6.8676C363.037 9.45747 354.938 12.7618 347.199 16.7508H260.528C296.065 11.6157 333.128 8.29649 371.36 6.8676ZM216.354 24.2376C200.292 33.5106 186.072 43.8552 173.961 55.1227H107.588C138.769 42.6496 175.279 32.2901 216.354 24.2376ZM79.3565 67.7446C53.6096 91.8275 39.6583 118.545 38.7302 145.902H6.12744C7.8489 118.128 33.5509 90.7856 79.3565 67.7446ZM6.12744 151.856H38.7302C39.6733 179.214 53.6096 205.931 79.3565 230.014C33.5509 206.973 7.83393 179.63 6.12744 151.856ZM107.603 242.636H173.976C186.086 253.903 200.307 264.248 216.369 273.521C175.294 265.483 138.784 255.109 107.603 242.636ZM260.543 280.993H347.214C354.953 284.982 363.037 288.301 371.36 290.876C333.143 289.432 296.065 286.128 260.528 280.993H260.543ZM460.77 290.876C469.093 288.286 477.191 284.982 484.915 280.993H571.632C536.065 286.128 498.986 289.432 460.77 290.876ZM615.761 273.506C631.808 264.248 646.013 253.903 658.123 242.621H724.527C693.391 255.079 656.881 265.453 615.761 273.506ZM752.728 230.014C778.49 205.916 792.442 179.199 793.385 151.841H826.002C824.281 179.615 798.564 206.973 752.728 230.014Z",
        fill: "currentColor",
      }),
      g.jsx("path", {
        d: "M180.877 187.311C152.017 187.311 141.658 180.36 146.508 151.856C146.598 151.305 146.703 150.74 146.808 150.159C147.017 149.013 147.242 147.837 147.511 146.617C147.556 146.379 147.616 146.14 147.676 145.902C152.705 123.263 161.193 112.576 177.045 108.424C183.048 106.846 190.083 106.206 198.406 106.206H265.049L267.384 94.6257H197.328C178.108 94.6257 161.582 95.5337 147.616 97.811C145.041 98.2277 142.556 98.7041 140.161 99.225C129.728 101.473 120.971 104.673 113.831 109.064C110.358 111.207 107.259 113.618 104.55 116.357C98.1728 122.802 93.8917 130.973 91.6912 141.258C91.3469 142.851 91.0924 144.399 90.8978 145.917C90.6284 147.971 90.4787 149.951 90.4488 151.856C90.0147 177.011 110.193 190.139 138.799 195.646C141.149 196.092 143.559 196.509 146.029 196.866C155.819 198.265 166.387 198.905 177.33 198.905C181.132 198.905 187.524 198.905 191.61 198.905L193.975 187.861L194.095 187.325H180.922L180.877 187.311Z",
        fill: "currentColor",
      }),
      g.jsx("path", {
        d: "M699.484 94.6257L696.37 109.183L693.93 120.599L691.445 132.253L688.541 145.917L687.269 151.856L684.919 162.87L672.704 151.856L666.117 145.917L632.137 115.255H561.872H559.807L557.741 124.93L553.25 145.917L551.978 151.856L541.918 198.891H550.705H555.555L565.63 151.856L565.645 151.826L566.902 145.917L571.108 126.27L593.068 145.917L599.699 151.856L652.316 198.891H685.053H690.966L701.025 151.856L702.298 145.917L702.822 143.432L703.585 139.844L713.255 94.6257H699.484Z",
        fill: "currentColor",
      }),
      g.jsx("path", {
        d: "M202.417 194.619L201.504 198.891H207.761L245.124 198.92L252.504 165.073H208.734L202.417 194.619Z",
        fill: "currentColor",
      }),
      g.jsx("path", {
        d: "M700.77 198.891H719.931H744.525L751.89 165.058H716.817H708.135L700.77 198.891Z",
        fill: "currentColor",
      }),
      g.jsx("path", {
        d: "M371.016 198.891H414.771L422.136 165.058H378.381L371.016 198.891Z",
        fill: "currentColor",
      }),
      g.jsx("path", {
        d: "M488.358 198.891H532.113L539.492 165.058H495.738L488.358 198.891Z",
        fill: "currentColor",
      }),
      g.jsx("path", {
        d: "M498.133 106.221H561.752V106.265H622.167L619.712 104.048L609.264 94.6257H277.308L274.569 107.456L266.92 143.253H183.706L183.122 145.902L181.82 151.841L181.176 154.818H264.45L255.004 198.891H308.564L318.249 155.131H364.818C383.17 155.131 397.196 154.58 407.525 151.841C412.674 150.472 416.91 148.567 420.293 145.902C425.128 142.092 428.242 136.763 429.814 129.276C431.266 122.43 432.808 115.255 432.808 115.255H379.398C379.398 115.255 378.44 119.751 377.107 125.883C373.35 143.193 366.809 143.536 352.977 143.536C352.393 143.536 351.81 143.536 351.196 143.536H320.704L328.278 106.92L328.428 106.206H444.708L436.206 145.902L434.933 151.841L424.859 198.876H478.284L488.358 151.841L489.63 145.902L498.133 106.206V106.221Z",
        fill: "currentColor",
      }),
      g.jsx("path", {
        d: "M787.187 52.9198L777.008 55.078V63.2793L787.187 61.1211V52.9198Z",
        fill: "currentColor",
      }),
      g.jsx("path", {
        d: "M782.098 71.1681C789.343 71.1681 795.241 65.3036 795.241 58.0996C795.241 50.8956 789.343 45.0311 782.098 45.0311C774.853 45.0311 768.956 50.8956 768.956 58.0996C768.956 65.3036 774.853 71.1681 782.098 71.1681ZM782.098 48.008C787.697 48.008 792.262 52.5328 792.262 58.1145C792.262 63.6961 787.712 68.2061 782.098 68.2061C776.485 68.2061 771.934 63.6812 771.934 58.1145C771.934 52.5477 776.485 48.008 782.098 48.008Z",
        fill: "currentColor",
      }),
    ],
  });
}
function ui() {
  const [t, e] = y.useState(null),
    n = y.useRef(null);
  return (
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
    }, [n]),
    [n, t]
  );
}
function Q(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
function Ud() {
  const [t, e] = ui(),
    [n, r] = ui(),
    i = y.useRef(0),
    a = xe(10),
    o = xe(10),
    s = xe(100),
    l = xe(100);
  return (
    Fd((u) => {
      if (e && r) {
        const f = Q((u - i.current) / 1e3, 0, 0.1),
          h = a.get() + s.get() * f,
          c = o.get() + l.get() * f;
        ((c + r.height >= e.height || c <= 0) && l.set(-l.get()),
          (h + r.width >= e.width || h <= 0) && s.set(-s.get()),
          a.set(Q(h, 0, e.width - r.width)),
          o.set(Q(c, 0, e.height - r.height)));
      }
      i.current = u;
    }),
    g.jsx("div", {
      ref: t,
      className: U.bouncerContainer,
      children: g.jsx(qo.div, {
        className: U.bouncer,
        ref: n,
        style: { x: a, y: o },
        children: g.jsx(Bd, { className: U.bouncerSvg }),
      }),
    })
  );
}
const zd = Ct.bind(U);
function qd() {
  const { snakeEnabled: t, canEnableSnake: e, handleQuit: n } = sl(),
    { playSound: r } = De(),
    { setOverride: i } = Tt();
  let a = "";
  return (
    t ? (a = "SNEK") : (a = "GPTN"),
    g.jsxs(g.Fragment, {
      children: [
        g.jsx(Ys, { blinkText: a }),
        g.jsxs(g.Fragment, {
          children: [
            t ? g.jsx(al, { onQuit: n }) : g.jsx(Ud, {}),
            g.jsxs("div", {
              className: U.footer,
              children: [
                t
                  ? null
                  : g.jsx("button", {
                      type: "button",
                      className: zd(U.close),
                      onClick: () => {
                        (r("beepMid"), i(!1));
                      },
                      children: "[CLOSE CONSOLE]",
                    }),
                e && !t
                  ? g.jsx("div", {
                      className: U.snakePrompt,
                      children: "Hit [ENTER] to play SNAKE",
                    })
                  : null,
                e
                  ? null
                  : g.jsxs("div", {
                      className: U.gptn,
                      children: [
                        "Powered by G.P.T.N",
                        g.jsx("br", {}),
                        "Global Payments and Treasury Network",
                      ],
                    }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
const ln = Ma.bind(U),
  Gd = `======  =====   // ==== ===   === (TM)
===  == ===    //===    ==== ====
======  ===== // ===    == === ==
===  == ===  //  ===    == === ==
======  === //     ==== ==  =  ==

[ BUSINESS FLOW CONTROL MONITOR ]`,
  Wd = `     BF/CM MK II
SERIAL 42-42-42
         API V1`,
  $d = `
STRIPE BIOS -- V42.42
12 degrees POST driver

--- System health check start ---

EXOTHERMIC RADIATOR
  [WARMED]

FEEDBACK LOOP MODULE
  [SEEKING]

SETTING USER PRIORITIES
  [FIRST]

MACROS
  [OPTIMIZED]

GLOBAL FINANCIAL INFRASTRUCTURE
  [ONLINE]

WARMING CACHE
  [DONE]

POST INITIALIZATION SEQUENCE
  [DONE]

--- System health check end ---

BF/CM MK II BOOT READY`;
function Zd({ children: t, showFallback: e = !1 }) {
  const { override: n } = Tt(),
    [r, i] = y.useState(!1),
    [a, o] = y.useState(0),
    s = y.useRef(),
    l = 3e3,
    u = 50;
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
const Yd = "_ui_3unaz_1",
  Kd = "_machineTranslate_3unaz_7",
  Xd = "_machineContainer_3unaz_18",
  un = { ui: Yd, machineTranslate: Kd, machineContainer: Xd },
  Qd = "_timeNav_s71o8_1",
  Jd = "_timePill_s71o8_5",
  we = { timeNav: Qd, timePill: Jd },
  th = "_lightPill_1fm4j_1",
  eh = { lightPill: th };
function St({
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
function nh() {
  const [t, e] = y.useState("00:00:00"),
    [n, r] = y.useState("0000000000"),
    [i, a] = y.useState("00:00:00");
  return (
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
            x === 0
              ? (w = d)
              : x === 1
                ? (w = (d - 8) % 24)
                : (w = (d + 9) % 24);
            const b = `${w < 10 ? `0${w}` : w}:${v < 10 ? `0${v}` : v}:${m < 10 ? `0${m}` : m}`;
            x === 0 ? e(`${b} UTC`) : x === 1 ? r(`${c}`) : a(`${p}.BEATS`);
          }
        };
      s();
      const l = setInterval(s, 1e3);
      return () => clearInterval(l);
    }, []),
    g.jsxs("div", {
      className: we.timeNav,
      children: [
        g.jsx(St, { parentStyles: we.timePill, children: i }),
        g.jsx(St, { parentStyles: we.timePill, children: n }),
        g.jsx(St, { parentStyles: we.timePill, children: t }),
      ],
    })
  );
}
const rh = "_darkPill_13e1e_1",
  ih = "_darkPillDissolve_13e1e_20",
  ci = { darkPill: rh, darkPillDissolve: ih };
function It({
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
const oh = "_topNav_x2w7d_1",
  ah = "_left_x2w7d_17",
  sh = "_right_x2w7d_18",
  lh = "_logoPill_x2w7d_23",
  uh = "_liveHover_x2w7d_29",
  ch = "_liveDot_x2w7d_48",
  fh = "_pulse_x2w7d_1",
  dh = "_offlineDot_x2w7d_53",
  hh = "_livePill_x2w7d_75",
  mt = {
    topNav: oh,
    left: ah,
    right: sh,
    logoPill: lh,
    liveHover: uh,
    liveDot: ch,
    pulse: fh,
    offlineDot: dh,
    livePill: hh,
  };
function ph({ isLive: t, isSmallScreen: e }) {
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
              href: "https://stripe.com",
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
                  d: "M0 14.25L13 11.4134V0.75L0 3.53405V14.25Z",
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
                    g.jsx("span", { children: "[recap]" }),
                    g.jsx("div", {
                      className: mt.liveHover,
                      children:
                        "BLACK FRIDAY/CYBER MONDAY IS OVER. SEE FINAL DATA TOTALS BELOW.",
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
const vh = "_bottomNav_176wj_2",
  mh = "_manualNav_176wj_19",
  gh = "_defaultNav_176wj_24",
  yh = "_defaultNavRight_176wj_37",
  bh = "_closeMobile_176wj_46",
  xh = "_pageTitlePill_176wj_53",
  wh = "_pageList_176wj_59",
  Sh = "_closeDesktop_176wj_93",
  Ch = "_infoContainer_176wj_100",
  Th = "_homePill_176wj_111",
  Ph = "_infoWindow_176wj_122",
  _h = "_infoRow_176wj_146",
  Eh = "_pageTitle_176wj_53",
  Mh = "_marquee_176wj_1",
  R = {
    bottomNav: vh,
    manualNav: mh,
    defaultNav: gh,
    defaultNavRight: yh,
    closeMobile: bh,
    pageTitlePill: xh,
    pageList: wh,
    closeDesktop: Sh,
    infoContainer: Ch,
    homePill: Th,
    infoWindow: Ph,
    infoRow: _h,
    pageTitle: Eh,
    marquee: Mh,
  };
function Lh() {
  const {
      pageIndex: t,
      setPageIndex: e,
      isOpen: n,
      setIsOpen: r,
      pageMeta: i,
      snakeEnabled: a,
    } = Tt(),
    [o, s] = y.useState(!1),
    l = y.useRef([]),
    u = y.useRef(null),
    f = y.useRef(null),
    h = y.useRef(100),
    c = y.useRef(100);
  return (
    y.useEffect(() => {
      const p = (d) => {
        a ||
          (d.key === "Escape"
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
                  (document.activeElement.blur(), r((v) => !v)));
      };
      return (
        window.addEventListener("keydown", p),
        () => {
          window.removeEventListener("keydown", p);
        }
      );
    }, [r, e, i, a]),
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
                    href: "https://stripe.com/privacy",
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
                  children: "[M]...............Show manual",
                }),
                g.jsx("div", {
                  className: R.infoRow,
                  children: "[N].................Next page",
                }),
                g.jsx("div", {
                  className: R.infoRow,
                  children: "[P].................Prev page",
                }),
                g.jsx("div", {
                  className: R.infoRow,
                  children: "[A]................Mute audio",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
const Vh = "_videoContainer_1xyyf_1",
  jh = { videoContainer: Vh };
function Ah({ onLiveChange: t }) {
  const e = y.useRef(null);
  return (
    y.useEffect(() => {
      if (!e.current) return;
      const n = (r) => {
        if (e.current)
          if (window.innerWidth / window.innerHeight < 1) {
            const i = e.current.offsetWidth - window.innerWidth;
            e.current.style.transform = `translateX(${(-r.clientX / window.innerWidth) * i}px)`;
          } else e.current.style.transform = "none";
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
      children: g.jsx("video", {
        src: "https://videos.stripeassets.com/3njn2qm7rrbs/UFyKDwm2dB3oP4iDHGNPO/15361fabb0804ca8141ccc87fe1d8b3e/bfcm_final_loop_v3_usdonly.mp4",
        autoPlay: !0,
        loop: !0,
        muted: !0,
        playsInline: !0,
      }),
    })
  );
}
const Rh = "_manualOverlay_895i9_1",
  Nh = "_dragArea_895i9_19",
  fi = { manualOverlay: Rh, dragArea: Nh };
function Ih({
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
  return (
    y.useEffect(() => {
      f.current &&
        (a === s.length - 1
          ? (f.current.style.cursor = "w-resize")
          : (f.current.style.cursor = ""));
    }, [a, s]),
    g.jsx("div", {
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
    })
  );
}
const Oh = "_machineOverlay_1yr6s_1",
  Dh = "_hitAreas_1yr6s_29",
  kh = "_tooltip_1yr6s_33",
  Hh = "_line_1yr6s_34",
  Fh = "_hitArea_1yr6s_29",
  Bh = "_tooltipCorners_1yr6s_157",
  Uh = "_tooltipCorner_1yr6s_157",
  zh = "_tooltipHeader_1yr6s_206",
  qh = "_tooltipFooter_1yr6s_213",
  Gh = "_fig_1yr6s_225",
  Wh = "_figPill_1yr6s_231",
  $h = "_decoyLink_1yr6s_240",
  D = {
    machineOverlay: Oh,
    hitAreas: Dh,
    tooltip: kh,
    line: Hh,
    hitArea: Fh,
    "hitArea--right": "_hitArea--right_1yr6s_100",
    tooltipCorners: Bh,
    tooltipCorner: Uh,
    tooltipHeader: zh,
    tooltipFooter: qh,
    fig: Gh,
    figPill: Wh,
    decoyLink: $h,
  },
  Zh = 26.8,
  Yh = 2.6,
  Go = 0.8,
  Wo = 2.55,
  K = Zh + Yh,
  X = 19,
  ft = K + Go + X + Wo,
  Jt = [
    {
      className: "transactionVolume",
      pageNumber: 3,
      width: X + Wo + X + Go,
      height: 8,
      top: 17,
      left: K,
    },
    {
      className: "totalTransactions",
      pageNumber: 4,
      left: K,
      top: 27.9,
      width: X,
      height: 12,
    },
    {
      className: "transactionsPerMinute",
      pageNumber: 5,
      left: K,
      top: 40,
      width: X,
      height: 15.4,
    },
    {
      className: "topCurrencyVolumes",
      pageNumber: 6,
      width: X,
      top: 55.2,
      height: 12.4,
      left: K,
      color: "#dbb486",
    },
    {
      className: "timeSavedWithLink",
      pageNumber: 7,
      top: 67.6,
      left: K,
      width: X,
      height: 15.1,
    },
    {
      className: "fraudDetector",
      pageNumber: 8,
      width: 1.6,
      left: K + 2.1,
      height: 4,
      top: 72.7,
    },
    {
      className: "stripeTaxCalculations",
      pageNumber: 9,
      width: 1.6,
      left: K + 3.65,
      height: 4,
      top: 72.7,
    },
    {
      className: "totalARRBilling",
      pageNumber: 10,
      width: 10.7,
      left: K + 6.2,
      height: 24,
      top: 74.1,
    },
    {
      className: "bestDay",
      pageNumber: 11,
      width: X,
      height: 5.9,
      top: 28,
      left: ft,
      color: "#b5b693",
    },
    {
      className: "crossBorder",
      pageNumber: 12,
      width: X,
      height: 6.4,
      top: 33.7,
      left: ft,
    },
    {
      className: "uniquePaymentMethods",
      pageNumber: 13,
      left: ft,
      top: 39.8,
      width: X,
      height: 6.5,
    },
    {
      className: "topSellingCities",
      pageNumber: 14,
      width: X,
      height: 24.5,
      top: 46.1,
      left: ft,
    },
    {
      className: "apiUtilization",
      pageNumber: 15,
      width: X - 11.35,
      height: 12,
      top: 70.6,
      left: ft + 0.7,
      color: "#b5b693",
    },
    {
      className: "apiUptime",
      pageNumber: 16,
      width: 9.1,
      height: 12,
      top: 70.6,
      left: ft + X - 10.05,
      color: "#b5b693",
    },
    {
      className: "shop",
      pageNumber: 21,
      width: 8,
      height: 8.4,
      top: 7.5,
      left: K + 9.4,
      tooltipTop: 100,
    },
    {
      className: "manual",
      pageNumber: 0,
      width: 3.1,
      height: 20.6,
      top: 66.4,
      left: ft + 20.3,
      isNoZoom: !0,
    },
    {
      className: "books1",
      linkNumber: "01",
      width: 10.8,
      height: 8,
      top: 8.1,
      left: K + 24,
      tooltipTop: 100,
      isNoZoom: !0,
      title: "Stripe Press Books",
      description: "Head to press.stripe.com to learn more",
      url: "https://press.stripe.com",
    },
    {
      className: "boom",
      linkNumber: "02",
      width: 8.4,
      height: 1.6,
      top: 8.8,
      left: K + 25.2,
      tooltipTop: 100,
      isNoZoom: !0,
      title: "Boom living cover",
      description: "Bubbles and the end of stagnation",
      url: "https://stripe.press/boom",
    },
    {
      className: "books2",
      linkNumber: "03",
      width: 2.9,
      height: 17.6,
      top: 69.5,
      left: ft + 23.2,
      isNoZoom: !0,
      title: "Stripe Press Books",
      description: "Head to press.stripe.com to learn more",
      url: "https://press.stripe.com",
    },
    {
      className: "pca",
      linkNumber: "04",
      width: 1,
      height: 16,
      top: 70.8,
      left: ft + 24.8,
      isNoZoom: !0,
      title: "Poor Charlie’s Almanack",
      description: "The Wit and Wisdom of Charles T. Munger",
      url: "https://stripe.press/poor-charlies-almanack",
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
      title: "Developer Console",
      description: "Visit Stripe Dot Dev and press [C]",
      url: "https://stripe.dev",
    },
    {
      className: "console",
      linkNumber: "03",
      forceRight: !0,
      width: 4,
      height: 9,
      top: 78,
      left: K - 9.2,
      isNoZoom: !0,
      title: "Console",
      description: "Toggle the BFCM Console",
      url: "CONSOLE",
    },
  ];
function Kh({ setMachineRects: t }) {
  const {
      pageIndex: e,
      setPageIndex: n,
      isOpen: r,
      setIsOpen: i,
      pageMeta: a,
      setOverride: o,
    } = Tt(),
    [s, l] = y.useState(!1),
    u = y.useRef(null),
    f = y.useRef(null),
    { playSound: h } = De();
  return (
    y.useEffect(() => {
      if (!u.current) return;
      const c = u.current,
        p = () => {
          c.querySelectorAll(".hitArea").forEach((d, v) => {
            var L, V;
            const m = d.getBoundingClientRect();
            if (
              !((V =
                (L = d.parentElement) == null ? void 0 : L.parentElement) ==
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
    }, [t]),
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
    }, []),
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
    }, [r]),
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
    }, []),
    y.useEffect(() => {
      var c;
      r &&
        ((c = u.current) == null ||
          c.querySelectorAll(".hitArea").forEach((p, d) => {
            Jt[d].pageNumber === e && p.focus();
          }));
    }, [e, r]),
    y.useEffect(() => {
      var c;
      (c = u.current) == null ||
        c.querySelectorAll(".hitArea").forEach((p) => {
          ((p.style.opacity = s ? "1" : ""),
            (p.style.filter = s ? "none" : ""));
          const d = p.querySelector(".tooltip");
          d.style.opacity = s ? "1" : "";
          const v = p.querySelector(".line");
          v.style.opacity = s ? "1" : "";
        });
    }, [s]),
    g.jsx("div", {
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
              onClick: (v) => {
                if (c.url === "CONSOLE")
                  (v.stopPropagation(), o(!0), h("beepHigh"));
                else if (!c.url)
                  if ((v.stopPropagation(), e === c.pageNumber)) i((m) => !m);
                  else {
                    if (c.pageNumber === void 0) return;
                    (n(c.pageNumber), i(!0));
                  }
              },
              children: [
                c.url === "https://press.stripe.com"
                  ? g.jsx("a", {
                      href: "https://press.stripe.com",
                      target: "_blank",
                      rel: "noreferrer",
                      className: D.decoyLink,
                    })
                  : null,
                c.url === "https://stripe.dev"
                  ? g.jsx("a", {
                      href: "https://stripe.dev",
                      target: "_blank",
                      rel: "noreferrer",
                      className: D.decoyLink,
                    })
                  : null,
                c.url === "https://stripe.press/boom"
                  ? g.jsx("a", {
                      href: "https://stripe.press/boom",
                      target: "_blank",
                      rel: "noreferrer",
                      className: D.decoyLink,
                    })
                  : null,
                c.url === "https://stripe.press/poor-charlies-almanack"
                  ? g.jsx("a", {
                      href: "https://stripe.press/poor-charlies-almanack",
                      target: "_blank",
                      rel: "noreferrer",
                      className: D.decoyLink,
                    })
                  : null,
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
    })
  );
}
function Xh({
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
  return (
    y.useEffect(() => {
      o && d.current
        ? (d.current.style.opacity = "1")
        : document.body.classList.remove("isLive");
    }, [o]),
    y.useEffect(() => {
      if (!p.current || !f.current || l.length === 0 || v) return;
      let w = Jt.findIndex((F) => F.pageNumber === h);
      w === -1 && (w = 0);
      const b = !Jt[w].isNoZoom,
        T = c ? window.innerHeight * 0.5 : 0,
        C = l[w];
      if (!C) return;
      const L = c && b ? window.innerWidth / 2 - C.x : 0,
        V =
          c && b
            ? Math.min(
                2,
                Math.max(1, ((window.innerWidth - T) / C.width) * 0.845),
              )
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
          c && b ? Math.max(A, Math.min(j, window.innerHeight / 2 - C.y)) : 0,
        q = `${C.x}px ${C.y}px`;
      ((p.current.style.transformOrigin = q),
        (x.current = { x: L, y: I, scale: V, manualWidth: T }),
        (p.current.style.transform = `translate(${L}px, ${I}px) scale(${V})`),
        (f.current.style.transform = `translateX(${T * -0.5}px)`));
    }, [c, h, l, v]),
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
    }, []),
    g.jsxs("div", {
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
    })
  );
}
function Qh(t, e, n) {
  return t + (e - t) * n;
}
function Jh(t, e, n, r) {
  return Qh(t, e, 1 - Math.exp(-n * r));
}
class Ee {
  constructor(e, n, r) {
    P(this, "value");
    P(this, "target");
    P(this, "stiffness");
    ((this.value = e),
      (this.target = n),
      (this.stiffness = r != null && r.stiffness ? r.stiffness * 10 : 10));
  }
  update(e) {
    ((this.value = Jh(this.value, this.target, this.stiffness, e)),
      Math.abs(this.value - this.target) < 1e-4 && (this.value = this.target));
  }
  setPosition(e) {
    this.value = e;
  }
  setTarget(e) {
    this.target = e;
  }
  skipToTarget(e) {
    ((this.value = e), (this.target = e));
  }
}
function z(t, e, n, r, i) {
  return r + ((t - e) * (i - r)) / (n - e);
}
const tp = Math.PI * 2;
class ep {
  constructor(e, n) {
    P(this, "frontImage");
    P(this, "width");
    P(this, "height");
    P(this, "widthSegments", 20);
    P(this, "heightSegments", 8);
    P(this, "zOffset", 0.006);
    P(this, "geometry");
    P(this, "frontPageTexture");
    P(this, "material");
    P(this, "pageMesh");
    P(this, "bones");
    P(this, "skeleton");
    P(this, "positionAttribute");
    P(this, "pageTurnSpring");
    P(this, "turnCurve");
    P(this, "curlCurve");
    P(this, "curlBiasDisplacement", 0.4);
    P(this, "index");
    P(this, "totalPages");
    ((this.frontImage = e),
      (this.index = n.index),
      (this.width = n.width),
      (this.height = n.height),
      (this.widthSegments = n.widthSegments || this.widthSegments),
      (this.heightSegments = n.heightSegments || this.heightSegments),
      (this.zOffset = n.zOffset || this.zOffset),
      (this.totalPages = n.totalPages),
      (this.geometry = new Qo(
        this.width,
        this.height,
        this.widthSegments,
        this.heightSegments,
      )),
      (this.frontPageTexture = new Jo().load(e)),
      (this.frontPageTexture.colorSpace = ta),
      (this.frontPageTexture.anisotropy = 4),
      (this.material = new di({
        map: this.frontPageTexture,
        side: ea,
        reflectivity: 0.1,
        flatShading: !1,
      })),
      (this.pageMesh = new na(this.geometry, this.material)),
      (this.pageMesh.castShadow = !0),
      (this.pageMesh.receiveShadow = !0),
      (this.positionAttribute = this.geometry.getAttribute("position")),
      (this.bones = []),
      this.configureBones(),
      (this.skeleton = new ra(this.bones)),
      this.pageMesh.add(this.bones[0]),
      this.pageMesh.bind(this.skeleton),
      this.configureSkeleton(),
      (this.pageTurnSpring = new Ee(0, 0, { stiffness: 0.4 })),
      (this.turnCurve = new tr([
        new Nt(0, 0),
        new Nt(0.48549107142857145, 0.37087599544937433),
        new Nt(1, 0),
      ])),
      (this.curlCurve = new tr([
        new Nt(0, 0.9863481228668942),
        new Nt(0.4546130952380953, 0),
        new Nt(1, 0),
      ])));
  }
  configureBones() {
    const e = new $e();
    ((e.position.x = -this.width / 2 - 0.04),
      (e.name = "Bone_Root"),
      this.bones.push(e));
    for (let n = 0; n <= this.widthSegments; n += 1) {
      const r = new $e();
      (n === 0
        ? ((r.position.x = 0.04), (r.position.y = this.height / 2))
        : (r.position.x = 1 / (this.widthSegments / this.width)),
        this.bones.push(r),
        this.bones[n].add(r));
    }
    for (let n = 0; n <= this.widthSegments; n += 1) {
      const r = new $e();
      (n === 0
        ? ((r.position.x = 0.04), (r.position.y = -this.height / 2))
        : (r.position.x = 1 / (this.widthSegments / this.width)),
        this.bones.push(r),
        n === 0
          ? this.bones[n].add(r)
          : this.bones[this.widthSegments + 1 + n].add(r));
    }
  }
  configureSkeleton() {
    const e = [],
      n = [];
    for (let r = 0; r < this.positionAttribute.count; r += 1) {
      const i = this.positionAttribute.getX(r),
        a = this.positionAttribute.getY(r),
        o =
          Math.round(
            z(i, -this.width / 2, this.width / 2, 0, this.widthSegments),
          ) + 1,
        s = z(a, -this.height / 2, this.height / 2, 0, 1);
      (e.push(o, o + this.widthSegments + 1, 0, 0), n.push(s, 1 - s, 0, 0));
    }
    (this.geometry.setAttribute("skinIndex", new ia(e, 4)),
      this.geometry.setAttribute("skinWeight", new oa(n, 4)));
  }
  update(e, n, r, i, a, o, s) {
    const l = this.index - i,
      u = a && (r === "forward" ? l === 0 : l === -1);
    (u
      ? this.pageTurnSpring.setTarget(n)
      : s && l === 0
        ? this.pageTurnSpring.setTarget(0.02)
        : l >= 0
          ? this.pageTurnSpring.setTarget(0)
          : this.pageTurnSpring.setTarget(1),
      this.pageTurnSpring.update(e));
    const f = this.pageTurnSpring.value,
      h = Q(f, 0, 1),
      c = this.turnCurve.getPoint(h).y,
      p = Q(z(h * h, 0, 0.1, 1, 0), 0, 1);
    (this.skeleton.bones.forEach((d, v) => {
      if (v === 0) d.rotation.y = z(f, 0, 1, 0, 1) * -tp;
      else if (v < this.widthSegments + 1) {
        const m = z(
            o,
            0,
            1,
            this.curlBiasDisplacement,
            -this.curlBiasDisplacement,
          ),
          x = this.curlCurve.getPoint(h).y * v * v * v * 5e-4;
        d.rotation.y = c * (-x + m * p);
      } else {
        const m = v - (this.widthSegments + 1),
          x = z(o, 0, 1, -this.curlBiasDisplacement, this.curlBiasDisplacement),
          w = this.curlCurve.getPoint(h).y * m * m * m * 5e-4;
        d.rotation.y = c * (-w + x * p);
      }
    }),
      u || l === 0
        ? (this.pageMesh.position.z = z(
            h,
            0,
            1,
            0,
            -this.zOffset * this.totalPages,
          ))
        : l > 0
          ? (this.pageMesh.position.z = l * -this.zOffset)
          : (this.pageMesh.position.z =
              (this.totalPages + l + 4) * -this.zOffset));
  }
}
class np {
  constructor(e, n) {
    P(this, "scene");
    P(this, "camera");
    P(this, "renderer");
    P(this, "pages");
    P(this, "rings");
    P(this, "manual");
    P(this, "pageIndex");
    P(this, "pageIndexSpring");
    P(this, "pageTurn");
    P(this, "curlBias");
    P(this, "turnDirection");
    P(this, "isDragging");
    P(this, "rafId");
    P(this, "manualOrigin");
    P(this, "isOpen");
    P(this, "openSpring");
    P(this, "isHovered");
    P(this, "manualTurn");
    P(this, "manualSpring");
    P(this, "pageIndexSubscribers", new Set());
    P(this, "frameRate");
    P(this, "lastTime");
    P(this, "handleMouseEnter", () => {
      this.isHovered = !0;
    });
    P(this, "handleMouseLeave", () => {
      this.isHovered = !1;
    });
    P(this, "handlePanStart", (e) => {
      if (e > 0) {
        if (((this.turnDirection = "backward"), this.pageIndex === 0)) return;
        ((this.pageTurn = 0.7),
          this.isOpen &&
            et(["slide2", "slide3"], z(Math.random(), 0, 1, 0.7, 1)));
      } else
        ((this.turnDirection = "forward"),
          (this.pageTurn = 0),
          this.isOpen &&
            et(["slide1", "slide2", "slide4"], z(Math.random(), 0, 1, 0.7, 1)));
      this.isDragging = !0;
    });
    P(this, "handlePan", (e, n) => {
      (this.pageIndex === 0 && this.turnDirection === "backward"
        ? (this.manualTurn += -e / 600)
        : this.pageIndex === this.pages.length - 1 &&
            this.turnDirection === "forward"
          ? (this.manualTurn += -e / 600)
          : ((this.manualTurn += -e / 1200),
            (this.pageTurn = Q(this.pageTurn + -e / 600, 0, 1))),
        (this.curlBias = n),
        this.manualSpring.setTarget(this.manualTurn));
    });
    P(this, "handlePanEnd", () => {
      (this.turnDirection === "forward" && this.pageTurn > 0.1
        ? (this.pageIndex < this.pages.length - 1 &&
            this.isOpen &&
            et(["flip1", "flip2"], z(Math.random(), 0, 1, 0.6, 1.2)),
          (this.pageIndex = Q(this.pageIndex + 1, 0, this.pages.length - 1)))
        : this.turnDirection === "backward" && this.pageTurn < 0.7
          ? (this.pageIndex > 0 &&
              this.isOpen &&
              et(["flip1", "flip2"], z(Math.random(), 0, 1, 0.6, 1.2)),
            (this.pageIndex = Q(this.pageIndex - 1, 0, this.pages.length - 1)))
          : this.isOpen &&
            et(["flip1", "flip2"], z(Math.random(), 0, 1, 0.6, 1.2)),
        this.pageIndexSubscribers.forEach((e) => e(this.pageIndex)),
        this.pageIndexSpring.skipToTarget(this.pageIndex),
        (this.curlBias = 0.5),
        (this.manualTurn = 0),
        this.manualSpring.setTarget(this.manualTurn),
        (this.isDragging = !1));
    });
    P(this, "setPageIndex", (e) => {
      const n = e - this.pageIndex;
      (this.isOpen &&
        (n === 1
          ? et(["turn3", "turn4"], z(Math.random(), 0, 1, 1.3, 1.8))
          : n === -1
            ? et(["turn3", "turn2"], z(Math.random(), 0, 1, 0.7, 0.9))
            : n > 1 && n < 5
              ? et(
                  ["shuffleShort1", "shuffleShort3"],
                  z(Math.random(), 0, 1, 1.4, 1.8),
                )
              : n < -1 && n > -5
                ? et(
                    ["shuffleShort1", "shuffleShort3"],
                    z(Math.random(), 0, 1, 0.8, 1.2),
                  )
                : n > 5
                  ? et(["shuffleLong1"], 1 / n + 0.9)
                  : n < -5 && et(["shuffleLong1"], 1 / -n + 0.6)),
        (this.pageIndex = e),
        this.pageIndexSpring.setTarget(e));
    });
    P(
      this,
      "onPageIndexChange",
      (e) => (
        this.pageIndexSubscribers.add(e),
        () => {
          this.pageIndexSubscribers.delete(e);
        }
      ),
    );
    P(this, "setIsOpen", (e) => {
      ((this.isOpen = e), this.openSpring.setTarget(e ? 0 : 1));
    });
    P(this, "draw", (e) => {
      const n = (e - this.lastTime) / 1e3;
      (this.openSpring.update(n),
        this.manualSpring.update(n),
        this.pageIndexSpring.update(n),
        this.pages.forEach((r) => {
          const i = Math.round(this.pageIndexSpring.value);
          r.update(
            n,
            this.pageTurn,
            this.turnDirection,
            i,
            this.isDragging,
            this.curlBias,
            this.isHovered,
          );
        }),
        (this.manual.position.x = this.manualOrigin.x),
        (this.manual.position.y =
          this.manualOrigin.y + this.openSpring.value * -7),
        (this.manual.position.z = this.manualOrigin.z),
        (this.manual.rotation.x = this.openSpring.value * -1.5),
        (this.manual.rotation.y =
          this.openSpring.value * -1.3 + this.manualSpring.value * -0.5),
        (this.manual.rotation.z = this.openSpring.value * -0.4),
        this.renderer.render(this.scene, this.camera),
        (this.rafId = requestAnimationFrame(this.draw)),
        (this.lastTime = e));
    });
    P(this, "init", () => {
      (window.addEventListener("resize", this.resize),
        (this.rafId = requestAnimationFrame(this.draw)),
        this.resize());
    });
    P(this, "destroy", () => {
      (this.renderer.dispose(),
        this.rafId && cancelAnimationFrame(this.rafId),
        window.removeEventListener("resize", this.resize));
    });
    P(this, "resize", () => {
      this.renderer.setSize(
        document.documentElement.clientWidth,
        window.innerHeight,
      );
      const e = document.documentElement.clientWidth / window.innerHeight,
        n = window.innerHeight / 900;
      ((this.camera.aspect = e),
        this.camera.updateProjectionMatrix(),
        (this.camera.position.z =
          21 - (1 * (document.documentElement.clientWidth - 375)) / 1353),
        e < 1
          ? (this.camera.position.x = 0)
          : (this.camera.position.x = -e * 3.45 + 1.65 + 0.06 / n));
    });
    ((this.scene = new aa()),
      (this.renderer = new sa({ canvas: e, alpha: !0, antialias: !0 })),
      (this.lastTime = performance.now()),
      this.renderer.setPixelRatio(window.devicePixelRatio),
      this.renderer.setSize(
        document.documentElement.clientWidth,
        window.innerHeight,
      ),
      (this.renderer.shadowMap.enabled = !0),
      (this.renderer.shadowMap.type = la),
      (this.camera = new ua(
        20,
        document.documentElement.clientWidth / window.innerHeight,
        0.1,
        1e3,
      )),
      this.camera.updateProjectionMatrix());
    const r = document.documentElement.clientWidth / window.innerHeight,
      i = window.innerHeight / 900;
    ((this.camera.position.z =
      21 - (1 * (document.documentElement.clientWidth - 375)) / 1353),
      r < 1
        ? (this.camera.position.x = 0)
        : (this.camera.position.x = -r * 3.5 + 1.64 + 0.06 / i),
      (this.manual = new ca()));
    const a = 3.3,
      o = 6,
      s = { width: a, height: o, totalPages: 21 };
    ((this.pages = n.map((m, x) => new ep(m.texture, { ...s, index: x }))),
      this.pages.forEach((m) => {
        this.manual.add(m.pageMesh);
      }),
      (this.rings = []));
    const l = 40,
      u = 0.1,
      f = 0.12,
      h = o - 2 * u;
    for (let m = 0; m < l; m += 1) {
      const x = new fa(f, 0.01, 8, 16),
        w = new di({ color: 3355443, reflectivity: 0.6 }),
        b = new da(x, w);
      ((b.rotation.x = Math.PI / 2),
        (b.position.x = -f - a / 2 + 0.08),
        (b.position.y = m * (h / l) - h / 2 + u + (m % 2 === 0 ? 0.05 : -0.05)),
        (b.position.z = n.length * -0.002),
        (b.castShadow = !0),
        this.rings.push(b));
    }
    (this.rings.forEach((m) => {
      this.manual.add(m);
    }),
      this.scene.add(this.manual));
    const c = new ha(16777215, 1.5);
    this.scene.add(c);
    const p = new er(13434879, 3, 0, 0.4);
    (p.position.set(-5, 0.5, 20), this.scene.add(p));
    const d = new er(16777215, 2, 0, 0.4);
    (d.position.set(4, -1, 10), (d.castShadow = !0));
    const v = Math.ceil(window.innerHeight * 1.5);
    ((d.shadow.mapSize.width = v),
      (d.shadow.mapSize.height = v),
      (d.shadow.bias = -1e-5),
      (d.shadow.intensity = 1.5),
      (d.shadow.radius = 4),
      (d.shadow.blurSamples = 3),
      this.scene.add(d),
      (this.pageIndex = 0),
      (this.pageIndexSpring = new Ee(0, 0, { stiffness: 0.4 })),
      (this.pageTurn = 0),
      (this.turnDirection = "forward"),
      (this.isDragging = !1),
      (this.curlBias = 0.5),
      (this.rafId = 0),
      (this.frameRate = 60),
      (this.isHovered = !1),
      (this.manualTurn = 0),
      (this.manualSpring = new Ee(0, 0, { stiffness: 1 })),
      (this.manualOrigin = new pa(0, 0, 0)),
      (this.isOpen = !0),
      (this.openSpring = new Ee(1, 1, { stiffness: 0.7 })));
  }
}
const rp = "_canvas_mwpob_1",
  ip = { canvas: rp };
function op({ manual: t }) {
  const e = y.useRef(null),
    { pageIndex: n, isOpen: r, pageMeta: i, setPageIndex: a } = Tt(),
    { playSound: o } = De();
  return (
    y.useEffect(() => {
      t.current && t.current.setPageIndex(n);
    }, [n, t]),
    y.useEffect(() => {
      t.current && t.current.setIsOpen(r);
    }, [r, t]),
    y.useEffect(() => {
      o(r ? "open1" : "open2", z(Math.random(), 0, 1, 0.8, 1.3));
    }, [r, o]),
    y.useEffect(() => {
      if (e.current && !t.current)
        return (
          (t.current = new np(e.current, i)),
          t.current.init(),
          t.current.onPageIndexChange((s) => {
            a(s);
          })
        );
    }, [t, i, a]),
    g.jsx("canvas", { ref: e, className: ip.canvas })
  );
}
function ap() {
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
const sp = () => {
    const { viewed: t } = va();
    return (
      y.useEffect(() => {
        t("home-page-viewed");
      }, [t]),
      g.jsxs(g.Fragment, {
        children: [g.jsx(Zd, { children: g.jsx(ap, {}) }), g.jsx(Pa, {})],
      })
    );
  },
  lp = document.getElementById("react-root");
function up() {
  return g.jsx(wa, { children: g.jsx(Ws, { children: g.jsx(sp, {}) }) });
}
ga.render(g.jsx(up, {}), lp);
