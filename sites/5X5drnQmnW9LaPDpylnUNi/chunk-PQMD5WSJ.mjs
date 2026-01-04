import { a as Eu, b as Le, c as O } from "./chunk-ELYU6EKT.mjs";
var It = {};
Eu(It, {
  Children: () => Fn,
  Component: () => ve,
  Fragment: () => ri,
  Profiler: () => uC,
  PureComponent: () => fC,
  StrictMode: () => dC,
  Suspense: () => ns,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => hC,
  cloneElement: () => bn,
  createContext: () => xe,
  createElement: () => Ha,
  createFactory: () => pC,
  createRef: () => Am,
  default: () => b,
  forwardRef: () => We,
  isValidElement: () => Ut,
  lazy: () => mC,
  memo: () => vC,
  startTransition: () => Hi,
  unstable_act: () => gC,
  useCallback: () => fe,
  useContext: () => A,
  useDebugValue: () => yC,
  useDeferredValue: () => bC,
  useEffect: () => N,
  useId: () => ii,
  useImperativeHandle: () => xC,
  useInsertionEffect: () => qe,
  useLayoutEffect: () => ut,
  useMemo: () => se,
  useReducer: () => SC,
  useRef: () => V,
  useState: () => St,
  useSyncExternalStore: () => wC,
  useTransition: () => kC,
  version: () => CC,
});
var b = {},
  ts = Symbol.for("react.element"),
  Kk = Symbol.for("react.portal"),
  qk = Symbol.for("react.fragment"),
  Qk = Symbol.for("react.strict_mode"),
  Zk = Symbol.for("react.profiler"),
  Jk = Symbol.for("react.provider"),
  eC = Symbol.for("react.context"),
  tC = Symbol.for("react.forward_ref"),
  nC = Symbol.for("react.suspense"),
  rC = Symbol.for("react.memo"),
  iC = Symbol.for("react.lazy"),
  Em = Symbol.iterator;
function oC(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Em && e[Em]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _m = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Im = Object.assign,
  Fm = {};
function Ni(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fm),
    (this.updater = n || _m);
}
Ni.prototype.isReactComponent = {};
Ni.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ni.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lm() {}
Lm.prototype = Ni.prototype;
function Pu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fm),
    (this.updater = n || _m);
}
var _u = (Pu.prototype = new Lm());
_u.constructor = Pu;
Im(_u, Ni.prototype);
_u.isPureReactComponent = !0;
var Rm = Array.isArray,
  Mm = Object.prototype.hasOwnProperty,
  Iu = { current: null },
  Om = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Mm.call(t, r) && !Om.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ts,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Iu.current,
  };
}
function sC(e, t) {
  return {
    $$typeof: ts,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Fu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ts;
}
function aC(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pm = /\/+/g;
function Ru(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? aC("" + e.key)
    : t.toString(36);
}
function za(e, t, n, r, i) {
  var o = typeof e;
  (o !== "undefined" && o !== "boolean") || (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ts:
          case Kk:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Ru(s, 0) : r),
      Rm(i)
        ? ((n = ""),
          e != null && (n = e.replace(Pm, "$&/") + "/"),
          za(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Fu(i) &&
            (i = sC(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Pm, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Rm(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Ru(o, a);
      s += za(o, t, n, l, i);
    }
  else if (((l = oC(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Ru(o, a++)), (s += za(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function $a(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    za(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function lC(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xt = { current: null },
  Na = { transition: null },
  cC = {
    ReactCurrentDispatcher: xt,
    ReactCurrentBatchConfig: Na,
    ReactCurrentOwner: Iu,
  };
b.Children = {
  map: $a,
  forEach: function (e, t, n) {
    $a(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      $a(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      $a(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Fu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
b.Component = Ni;
b.Fragment = qk;
b.Profiler = Zk;
b.PureComponent = Pu;
b.StrictMode = Qk;
b.Suspense = nC;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cC;
b.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Im({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Iu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Mm.call(t, l) &&
        !Om.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: ts, type: e.type, key: i, ref: o, props: r, _owner: s };
};
b.createContext = function (e) {
  return (
    (e = {
      $$typeof: eC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Jk, _context: e }),
    (e.Consumer = e)
  );
};
b.createElement = Dm;
b.createFactory = function (e) {
  var t = Dm.bind(null, e);
  return (t.type = e), t;
};
b.createRef = function () {
  return { current: null };
};
b.forwardRef = function (e) {
  return { $$typeof: tC, render: e };
};
b.isValidElement = Fu;
b.lazy = function (e) {
  return { $$typeof: iC, _payload: { _status: -1, _result: e }, _init: lC };
};
b.memo = function (e, t) {
  return { $$typeof: rC, type: e, compare: t === void 0 ? null : t };
};
b.startTransition = function (e) {
  var t = Na.transition;
  Na.transition = {};
  try {
    e();
  } finally {
    Na.transition = t;
  }
};
b.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
b.useCallback = function (e, t) {
  return xt.current.useCallback(e, t);
};
b.useContext = function (e) {
  return xt.current.useContext(e);
};
b.useDebugValue = function () {};
b.useDeferredValue = function (e) {
  return xt.current.useDeferredValue(e);
};
b.useEffect = function (e, t) {
  return xt.current.useEffect(e, t);
};
b.useId = function () {
  return xt.current.useId();
};
b.useImperativeHandle = function (e, t, n) {
  return xt.current.useImperativeHandle(e, t, n);
};
b.useInsertionEffect = function (e, t) {
  return xt.current.useInsertionEffect(e, t);
};
b.useLayoutEffect = function (e, t) {
  return xt.current.useLayoutEffect(e, t);
};
b.useMemo = function (e, t) {
  return xt.current.useMemo(e, t);
};
b.useReducer = function (e, t, n) {
  return xt.current.useReducer(e, t, n);
};
b.useRef = function (e) {
  return xt.current.useRef(e);
};
b.useState = function (e) {
  return xt.current.useState(e);
};
b.useSyncExternalStore = function (e, t, n) {
  return xt.current.useSyncExternalStore(e, t, n);
};
b.useTransition = function () {
  return xt.current.useTransition();
};
b.version = "18.2.0";
var Fn = b.Children,
  ve = b.Component,
  ri = b.Fragment,
  uC = b.Profiler,
  fC = b.PureComponent,
  dC = b.StrictMode,
  ns = b.Suspense,
  hC = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  bn = b.cloneElement,
  xe = b.createContext,
  Ha = b.createElement,
  pC = b.createFactory,
  Am = b.createRef,
  We = b.forwardRef,
  Ut = b.isValidElement,
  mC = b.lazy,
  vC = b.memo,
  Hi = b.startTransition,
  gC = b.unstable_act,
  fe = b.useCallback,
  A = b.useContext,
  yC = b.useDebugValue,
  bC = b.useDeferredValue,
  N = b.useEffect,
  ii = b.useId,
  xC = b.useImperativeHandle,
  qe = b.useInsertionEffect,
  ut = b.useLayoutEffect,
  se = b.useMemo,
  SC = b.useReducer,
  V = b.useRef,
  St = b.useState,
  wC = b.useSyncExternalStore,
  kC = b.useTransition,
  CC = b.version;
var TC = "default" in It ? b : It,
  ji = {},
  EC = TC,
  RC = Symbol.for("react.element"),
  PC = Symbol.for("react.fragment"),
  _C = Object.prototype.hasOwnProperty,
  IC = EC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  FC = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) _C.call(t, r) && !FC.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: RC,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: IC.current,
  };
}
ji.Fragment = PC;
ji.jsx = Vm;
ji.jsxs = Vm;
var Re = ji.Fragment,
  C = ji.jsx,
  oe = ji.jsxs;
var LC = Object.create,
  uf = Object.defineProperty,
  MC = Object.getOwnPropertyDescriptor,
  ig = Object.getOwnPropertyNames,
  OC = Object.getPrototypeOf,
  DC = Object.prototype.hasOwnProperty,
  AC = (e, t, n) =>
    t in e
      ? uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ln = (e, t) =>
    function () {
      return t || (0, e[ig(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  VC = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of ig(t))
        !DC.call(e, i) &&
          i !== n &&
          uf(e, i, {
            get: () => t[i],
            enumerable: !(r = MC(t, i)) || r.enumerable,
          });
    return e;
  },
  Bn = (e, t, n) => (
    (n = e != null ? LC(OC(e)) : {}),
    VC(
      t || !e || !e.__esModule
        ? uf(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  R = (e, t, n) => (AC(e, typeof t != "symbol" ? t + "" : t, n), n),
  ff = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  },
  di = (e, t, n) => (
    ff(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Qi = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  df = (e, t, n, r) => (
    ff(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Lt = (e, t, n) => (ff(e, t, "access private method"), n),
  BC = ln({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(n) {
        var r = {};
        return function (i) {
          return r[i] === void 0 && (r[i] = n(i)), r[i];
        };
      }
      e.default = t;
    },
  }),
  $C = ln({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(
      e
    ) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(o) {
        return o && typeof o == "object" && "default" in o ? o.default : o;
      }
      var n = t(BC()),
        r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = n(function (o) {
          return (
            r.test(o) ||
            (o.charCodeAt(0) === 111 &&
              o.charCodeAt(1) === 110 &&
              o.charCodeAt(2) < 91)
          );
        });
      e.default = i;
    },
  }),
  Vn = xe({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  vs = xe({}),
  Zi = xe(null),
  il = typeof document < "u",
  Cr = il ? ut : N,
  hf = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  zC = "framerAppearId",
  ol = "data-" + hf(zC),
  sl = { skipAnimations: !1, useManualTiming: !1 },
  al = xe({}),
  hs = xe({}),
  it = (e) => e,
  Ji = it,
  Xt = it,
  og = xe({ strict: !1 }),
  Bm = class {
    constructor() {
      (this.order = []), (this.scheduled = new Set());
    }
    add(e) {
      if (!this.scheduled.has(e))
        return this.scheduled.add(e), this.order.push(e), !0;
    }
    remove(e) {
      let t = this.order.indexOf(e);
      t !== -1 && (this.order.splice(t, 1), this.scheduled.delete(e));
    }
    clear() {
      (this.order.length = 0), this.scheduled.clear();
    }
  };
function NC(e) {
  let t = new Bm(),
    n = new Bm(),
    r = 0,
    i = !1,
    o = !1,
    s = new WeakSet(),
    a = {
      schedule: (l, c = !1, u = !1) => {
        let f = u && i,
          d = f ? t : n;
        return c && s.add(l), d.add(l) && f && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let c = 0; c < r; c++) {
            let u = t.order[c];
            s.has(u) && (a.schedule(u), e()), u(l);
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
var os = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  HC = 40;
function sg(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = os.reduce((f, d) => ((f[d] = NC(() => (n = !0))), f), {}),
    s = (f) => {
      o[f].process(i);
    },
    a = () => {
      let f = sl.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, HC), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        os.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: os.reduce((f, d) => {
      let p = o[d];
      return (f[d] = (y, g = !1, S = !1) => (n || l(), p.schedule(y, g, S))), f;
    }, {}),
    cancel: (f) => os.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
var { schedule: pf, cancel: eB } = sg(queueMicrotask, !1);
function Wi(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
var $m = !1;
function jC(e, t, n, r, i) {
  let { visualElement: o } = A(vs),
    s = A(og),
    a = A(Zi),
    l = A(Vn).reducedMotion,
    c = V();
  (r = r || s.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  let u = c.current,
    f = A(al);
  u &&
    !u.projection &&
    i &&
    (u.type === "html" || u.type === "svg") &&
    UC(c.current, n, i, f),
    qe(() => {
      u && u.update(n, a);
    });
  let d = V(!!(n[ol] && !O.HandoffComplete));
  return (
    Cr(() => {
      u &&
        (u.updateFeatures(),
        pf.render(u.render),
        d.current && u.animationState && u.animationState.animateChanges());
    }),
    N(() => {
      u &&
        (!d.current && u.animationState && u.animationState.animateChanges(),
        d.current && ((d.current = !1), $m || (($m = !0), queueMicrotask(WC))));
    }),
    u
  );
}
function WC() {
  O.HandoffComplete = !0;
}
function UC(e, t, n, r) {
  let {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : ag(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Wi(a)),
      visualElement: e,
      scheduleRender: () => e.scheduleRender(),
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function ag(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : ag(e.parent);
}
function XC(e, t, n) {
  return fe(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Wi(n) && (n.current = r));
    },
    [t]
  );
}
function ps(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ll(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
var mf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  vf = ["initial", ...mf];
function cl(e) {
  return ll(e.animate) || vf.some((t) => ps(e[t]));
}
function lg(e) {
  return !!(cl(e) || e.variants);
}
function YC(e, t) {
  if (cl(e)) {
    let { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ps(n) ? n : void 0,
      animate: ps(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function GC(e) {
  let { initial: t, animate: n } = YC(e, A(vs));
  return se(() => ({ initial: t, animate: n }), [zm(t), zm(n)]);
}
function zm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var Nm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Gi = {};
for (let e in Nm) Gi[e] = { isEnabled: (t) => Nm[e].some((n) => !!t[n]) };
function KC(e) {
  for (let t in e) Gi[t] = { ...Gi[t], ...e[t] };
}
var gf = Symbol.for("motionComponentSymbol");
function cg({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && KC(e);
  function o(a, l) {
    let c,
      u = { ...A(Vn), ...a, layoutId: qC(a) },
      { isStatic: f } = u,
      d = GC(a),
      p = r(a, f);
    if (!f && il) {
      QC(u, e);
      let y = ZC(u);
      (c = y.MeasureLayout),
        (d.visualElement = jC(i, p, u, t, y.ProjectionNode));
    }
    return oe(vs.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? C(c, { visualElement: d.visualElement, ...u })
          : null,
        n(i, a, XC(p, d.visualElement, l), p, f, d.visualElement),
      ],
    });
  }
  let s = We(o);
  return (s[gf] = i), s;
}
function qC({ layoutId: e }) {
  let t = A(hs).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function QC(e, t) {
  let n = A(og).strict;
}
function ZC(e) {
  let { drag: t, layout: n } = Gi;
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
var qa = {};
function yf(e) {
  Object.assign(qa, e);
}
var Ce = (e) => !!(e && e.getVelocity),
  gs = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  hi = new Set(gs),
  JC = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  eT = gs.length;
function ug(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < eT; s++) {
    let a = gs[s];
    if (e[a] !== void 0) {
      let l = JC[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
var er = (e, t, n) => (n > t ? t : n < e ? e : n),
  as = (e) => Math.round(e * 1e5) / 1e5,
  bf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  tT =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  nT =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function ys(e) {
  return typeof e == "string";
}
var bs = (e) => ({
    test: (t) => ys(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  br = bs("deg"),
  Ln = bs("%"),
  X = bs("px"),
  rT = bs("vh"),
  iT = bs("vw"),
  Hm = {
    ...Ln,
    parse: (e) => Ln.parse(e) / 100,
    transform: (e) => Ln.transform(e * 100),
  },
  oT = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
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
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
function Ki(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    oT.has(e)
  );
}
var fg = (e) => !Ki(e);
function dg(e) {
  e && (fg = (t) => (t.startsWith("on") ? !Ki(t) : e(t)));
}
try {
  dg($C().default);
} catch {}
function hg(e, t, n) {
  let r = {};
  for (let i in e)
    (i === "values" && typeof e.values == "object") ||
      ((fg(i) ||
        (n === !0 && Ki(i)) ||
        (!t && !Ki(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
var Uu = (e) => Array.isArray(e),
  sT = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  aT = (e) => (Uu(e) ? e[e.length - 1] || 0 : e);
function ft(e) {
  let t = Ce(e) ? e.get() : e;
  return sT(t) ? t.toValue() : t;
}
function jm(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((n, r) => {
      (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
    }),
    t
  );
}
function xf(e, t, n, r) {
  if (typeof t == "function") {
    let [i, o] = jm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    let [i, o] = jm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function rr(e) {
  let t = V(null);
  return t.current === null && (t.current = e()), t.current;
}
function lT(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  let s = { latestValues: cT(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
var ul = (e) => (t, n) => {
  let r = A(vs),
    i = A(Zi),
    o = () => lT(e, t, r, i);
  return n ? o() : rr(o);
};
function cT(e, t, n, r) {
  let i = {},
    o = r(e, {});
  for (let d in o) i[d] = ft(o[d]);
  let { initial: s, animate: a } = e,
    l = cl(e),
    c = lg(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  let f = u ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !ll(f) &&
      (Array.isArray(f) ? f : [f]).forEach((p) => {
        let y = xf(e, p);
        if (!y) return;
        let { transitionEnd: g, transition: S, ...m } = y;
        for (let h in m) {
          let v = m[h];
          if (Array.isArray(v)) {
            let x = u ? v.length - 1 : 0;
            v = v[x];
          }
          v !== null && (i[h] = v);
        }
        for (let h in g) i[h] = g[h];
      }),
    i
  );
}
var {
    schedule: G,
    cancel: wt,
    state: Oe,
    steps: Ua,
  } = sg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : it, !0),
  pg = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function fl(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
var mg = (e) => (t) => pg(t) && e(t, fl(t));
function Jn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Mn(e, t, n, r) {
  return Jn(e, t, mg(n), r);
}
var uT = (e, t) => (n) => t(e(n)),
  On = (...e) => e.reduce(uT);
function vg(e) {
  let t = null;
  return () => {
    let n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
var Wm = vg("dragHorizontal"),
  Um = vg("dragVertical");
function gg(e) {
  let t = !1;
  if (e === "y") t = Um();
  else if (e === "x") t = Wm();
  else {
    let n = Wm(),
      r = Um();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Sf() {
  let e = gg(!0);
  return e ? (e(), !1) : !0;
}
var eo = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ls = { ...eo, transform: (e) => er(0, 1, e) },
  ja = { ...eo, default: 1 },
  wf = (e, t) => (n) =>
    !!(
      (ys(n) && nT.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  yg = (e, t, n) => (r) => {
    if (!ys(r)) return r;
    let [i, o, s, a] = r.match(bf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  fT = (e) => er(0, 255, e),
  Lu = { ...eo, transform: (e) => Math.round(fT(e)) },
  ci = {
    test: wf("rgb", "red"),
    parse: yg("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Lu.transform(e) +
      ", " +
      Lu.transform(t) +
      ", " +
      Lu.transform(n) +
      ", " +
      as(ls.transform(r)) +
      ")",
  };
function dT(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var Xu = { test: wf("#"), parse: dT, transform: ci.transform },
  Ui = {
    test: wf("hsl", "hue"),
    parse: yg("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ln.transform(as(t)) +
      ", " +
      Ln.transform(as(n)) +
      ", " +
      as(ls.transform(r)) +
      ")",
  },
  rt = {
    test: (e) => ci.test(e) || Xu.test(e) || Ui.test(e),
    parse: (e) =>
      ci.test(e) ? ci.parse(e) : Ui.test(e) ? Ui.parse(e) : Xu.parse(e),
    transform: (e) =>
      ys(e) ? e : e.hasOwnProperty("red") ? ci.transform(e) : Ui.transform(e),
  };
function hT(e) {
  var t, n;
  return (
    isNaN(e) &&
    ys(e) &&
    (((t = e.match(bf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(tT)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
var bg = "number",
  xg = "color",
  pT = "var",
  mT = "var(",
  Xm = "${}",
  vT =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ms(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    o = 0,
    a = t
      .replace(
        vT,
        (l) => (
          rt.test(l)
            ? (r.color.push(o), i.push(xg), n.push(rt.parse(l)))
            : l.startsWith(mT)
            ? (r.var.push(o), i.push(pT), n.push(l))
            : (r.number.push(o), i.push(bg), n.push(parseFloat(l))),
          ++o,
          Xm
        )
      )
      .split(Xm);
  return { values: n, split: a, indexes: r, types: i };
}
function Sg(e) {
  return ms(e).values;
}
function wg(e) {
  let { split: t, types: n } = ms(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        let a = n[s];
        a === bg
          ? (o += as(i[s]))
          : a === xg
          ? (o += rt.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
var gT = (e) => (typeof e == "number" ? 0 : e);
function yT(e) {
  let t = Sg(e);
  return wg(e)(t.map(gT));
}
var tr = { test: hT, parse: Sg, createTransformer: wg, getAnimatableNone: yT },
  Dn = (e) => e * 1e3,
  An = (e) => e / 1e3;
function kf(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var bT = 5;
function kg(e, t, n) {
  let r = Math.max(t - bT, 0);
  return kf(n - e(r), t - r);
}
var Mu = 0.001,
  xT = 0.01,
  Ym = 10,
  ST = 0.05,
  wT = 1;
function kT({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  Ji(e <= Dn(Ym), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  (s = er(ST, wT, s)),
    (e = er(xT, Ym, An(e))),
    s < 1
      ? ((i = (c) => {
          let u = c * s,
            f = u * e,
            d = u - n,
            p = Yu(c, s),
            y = Math.exp(-f);
          return Mu - (d / p) * y;
        }),
        (o = (c) => {
          let f = c * s * e,
            d = f * n + n,
            p = Math.pow(s, 2) * Math.pow(c, 2) * e,
            y = Math.exp(-f),
            g = Yu(Math.pow(c, 2), s);
          return ((-i(c) + Mu > 0 ? -1 : 1) * ((d - p) * y)) / g;
        }))
      : ((i = (c) => {
          let u = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Mu + u * f;
        }),
        (o = (c) => {
          let u = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return u * f;
        }));
  let a = 5 / e,
    l = TT(i, o, a);
  if (((e = Dn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    let c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
var CT = 12;
function TT(e, t, n) {
  let r = n;
  for (let i = 1; i < CT; i++) r = r - e(r) / t(r);
  return r;
}
function Yu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var ET = ["duration", "bounce"],
  RT = ["stiffness", "damping", "mass"];
function Gm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function PT(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Gm(e, RT) && Gm(e, ET)) {
    let n = kT(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function xs({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  let i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: f,
      isResolvedFromDuration: d,
    } = PT({ ...r, velocity: -An(r.velocity || 0) }),
    p = f || 0,
    y = l / (2 * Math.sqrt(a * c)),
    g = o - i,
    S = An(Math.sqrt(a / c)),
    m = Math.abs(g) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    let v = Yu(S, y);
    h = (x) => {
      let k = Math.exp(-y * S * x);
      return (
        o - k * (((p + y * S * g) / v) * Math.sin(v * x) + g * Math.cos(v * x))
      );
    };
  } else if (y === 1) h = (v) => o - Math.exp(-S * v) * (g + (p + S * g) * v);
  else {
    let v = S * Math.sqrt(y * y - 1);
    h = (x) => {
      let k = Math.exp(-y * S * x),
        w = Math.min(v * x, 300);
      return (
        o - (k * ((p + y * S * g) * Math.sinh(w) + v * g * Math.cosh(w))) / v
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (v) => {
      let x = h(v);
      if (d) s.done = v >= u;
      else {
        let k = p;
        v !== 0 && (y < 1 ? (k = kg(h, v, x)) : (k = 0));
        let w = Math.abs(k) <= n,
          T = Math.abs(o - x) <= t;
        s.done = w && T;
      }
      return (s.value = s.done ? o : x), s;
    },
  };
}
var Cg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  _T = 1e-7,
  IT = 12;
function FT(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = Cg(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > _T && ++a < IT);
  return s;
}
function to(e, t, n, r) {
  if (e === t && n === r) return it;
  let i = (o) => FT(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Cg(i(o), t, r));
}
var Tg = to(0.42, 0, 1, 1),
  Eg = to(0, 0, 0.58, 1),
  Cf = to(0.42, 0, 0.58, 1),
  Tf = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Ef = (e) => (t) => 1 - e(1 - t),
  dl = (e) => 1 - Math.sin(Math.acos(e)),
  Rf = Ef(dl),
  Rg = Tf(dl),
  Pf = to(0.33, 1.53, 0.69, 0.99),
  hl = Ef(Pf),
  Pg = Tf(hl),
  _g = (e) =>
    (e *= 2) < 1 ? 0.5 * hl(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  kr = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Se = (e, t, n) => e + (t - e) * n;
function Ou(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function LT({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Ou(l, a, e + 1 / 3)), (o = Ou(l, a, e)), (s = Ou(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Qa(e, t) {
  return (n) => (n > 0 ? t : e);
}
var Du = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  MT = [Xu, ci, Ui],
  OT = (e) => MT.find((t) => t.test(e));
function Km(e) {
  let t = OT(e);
  if (
    (Ji(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return t === Ui && (n = LT(n)), n;
}
var qm = (e, t) => {
    let n = Km(e),
      r = Km(t);
    if (!n || !r) return Qa(e, t);
    let i = { ...n };
    return (o) => (
      (i.red = Du(n.red, r.red, o)),
      (i.green = Du(n.green, r.green, o)),
      (i.blue = Du(n.blue, r.blue, o)),
      (i.alpha = Se(n.alpha, r.alpha, o)),
      ci.transform(i)
    );
  },
  Ig = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Fg = Ig("--"),
  DT = Ig("var(--"),
  _f = (e) => (DT(e) ? AT.test(e.split("/*")[0].trim()) : !1),
  AT =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Gu = new Set(["none", "hidden"]);
function VT(e, t) {
  return Gu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function BT(e, t) {
  return (n) => Se(e, t, n);
}
function If(e) {
  return typeof e == "number"
    ? BT
    : typeof e == "string"
    ? _f(e)
      ? Qa
      : rt.test(e)
      ? qm
      : NT
    : Array.isArray(e)
    ? Lg
    : typeof e == "object"
    ? rt.test(e)
      ? qm
      : $T
    : Qa;
}
function Lg(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((o, s) => If(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function $T(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = If(e[i])(e[i], t[i]));
  return (i) => {
    for (let o in r) n[o] = r[o](i);
    return n;
  };
}
function zT(e, t) {
  var n;
  let r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    let s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
var NT = (e, t) => {
  let n = tr.createTransformer(t),
    r = ms(e),
    i = ms(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Gu.has(e) && !i.values.length) || (Gu.has(t) && !r.values.length)
      ? VT(e, t)
      : On(Lg(zT(r, i), i.values), n)
    : (Ji(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      Qa(e, t));
};
function Ff(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Se(e, t, n)
    : If(e)(e, t);
}
function HT(e, t, n) {
  let r = [],
    i = n || Ff,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      let l = Array.isArray(t) ? t[s] || it : t;
      a = On(l, a);
    }
    r.push(a);
  }
  return r;
}
function no(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let o = e.length;
  if (
    (Xt(o === t.length, "Both input and output ranges must be the same length"),
    o === 1)
  )
    return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = HT(t, r, i),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      let f = kr(e[u], e[u + 1], c);
      return s[u](f);
    };
  return n ? (c) => l(er(e[0], e[o - 1], c)) : l;
}
var jT = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Qm = (e) => e === eo || e === X,
  Zm = (e, t) => parseFloat(e.split(", ")[t]),
  Jm =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Zm(i[1], t);
      {
        let o = r.match(/^matrix\((.+)\)$/u);
        return o ? Zm(o[1], e) : 0;
      }
    },
  WT = new Set(["x", "y", "z"]),
  UT = gs.filter((e) => !WT.has(e));
function XT(e) {
  let t = [];
  return (
    UT.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
var qi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Jm(4, 13),
  y: Jm(5, 14),
};
qi.translateX = qi.x;
qi.translateY = qi.y;
var ui = new Set(),
  Ku = !1,
  qu = !1;
function Mg() {
  if (qu) {
    let e = Array.from(ui).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      let i = XT(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        let i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && O.scrollTo(0, r.suspendedScrollY);
      });
  }
  (qu = !1), (Ku = !1), ui.forEach((e) => e.complete()), ui.clear();
}
function Og() {
  ui.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (qu = !0);
  });
}
function YT() {
  Og(), Mg();
}
var Lf = class {
  constructor(e, t, n, r, i, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = t),
      (this.name = n),
      (this.motionValue = r),
      (this.element = i),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (ui.add(this), Ku || ((Ku = !0), G.read(Og), G.resolveKeyframes(Mg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
    for (let i = 0; i < e.length; i++)
      if (e[i] === null)
        if (i === 0) {
          let o = r?.get(),
            s = e[e.length - 1];
          if (o !== void 0) e[0] = o;
          else if (n && t) {
            let a = n.readValue(t, s);
            a != null && (e[0] = a);
          }
          e[0] === void 0 && (e[0] = s), r && o === void 0 && r.set(e[0]);
        } else e[i] = e[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      ui.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), ui.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
};
function ev({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  let f = e[0],
    d = { done: !1, value: f },
    p = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    y = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l,
    g = n * t,
    S = f + g,
    m = s === void 0 ? S : s(S);
  m !== S && (g = m - f);
  let h = (E) => -g * Math.exp(-E / r),
    v = (E) => m + h(E),
    x = (E) => {
      let F = h(E),
        I = v(E);
      (d.done = Math.abs(F) <= c), (d.value = d.done ? m : I);
    },
    k,
    w,
    T = (E) => {
      p(d.value) &&
        ((k = E),
        (w = xs({
          keyframes: [d.value, y(d.value)],
          velocity: kg(v, E, d.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: u,
        })));
    };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let F = !1;
        return (
          !w && k === void 0 && ((F = !0), x(E), T(E)),
          k !== void 0 && E >= k ? w.next(E - k) : (!F && x(E), d)
        );
      },
    }
  );
}
var Dg = (e) => Array.isArray(e) && typeof e[0] != "number",
  tv = {
    linear: it,
    easeIn: Tg,
    easeInOut: Cf,
    easeOut: Eg,
    circIn: dl,
    circInOut: Rg,
    circOut: Rf,
    backIn: hl,
    backInOut: Pg,
    backOut: Pf,
    anticipate: _g,
  },
  nv = (e) => {
    if (Array.isArray(e)) {
      Xt(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values."
      );
      let [t, n, r, i] = e;
      return to(t, n, r, i);
    } else if (typeof e == "string")
      return Xt(tv[e] !== void 0, `Invalid easing type '${e}'`), tv[e];
    return e;
  };
function Ag(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = kr(0, t, r);
    e.push(Se(n, 1, i));
  }
}
function Mf(e) {
  let t = [0];
  return Ag(t, e.length - 1), t;
}
function GT(e, t) {
  return e.map((n) => n * t);
}
function KT(e, t) {
  return e.map(() => t || Cf).splice(0, e.length - 1);
}
function Za({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  let i = Dg(r) ? r.map(nv) : nv(r),
    o = { done: !1, value: t[0] },
    s = GT(n && n.length === t.length ? n : Mf(t), e),
    a = no(s, t, { ease: Array.isArray(i) ? i : KT(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
var Ja = { current: !1 },
  rv = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (tr.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function qT(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function QT(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  let o = e[e.length - 1],
    s = rv(i, t),
    a = rv(o, t);
  return (
    Ji(
      s === a,
      `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`
    ),
    !s || !a ? !1 : qT(e) || (n === "spring" && r)
  );
}
var ZT = (e) => e !== null;
function pl(e, { repeat: t, repeatType: n = "loop" }, r) {
  let i = e.filter(ZT),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
var Vg = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = "keyframes",
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o = "loop",
      ...s
    }) {
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: o,
          ...s,
        }),
        this.updateFinishedPromise();
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && YT(), this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      this.hasAttemptedResolve = !0;
      let {
        name: n,
        type: r,
        velocity: i,
        delay: o,
        onComplete: s,
        onUpdate: a,
        isGenerator: l,
      } = this.options;
      if (!l && !QT(e, n, r, i))
        if (Ja.current || !o) {
          a?.(pl(e, this.options, t)), s?.(), this.resolveFinishedPromise();
          return;
        } else this.options.duration = 0;
      let c = this.initPlayback(e, t);
      c !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...c }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  Qu = 2e4;
function Bg(e) {
  let t = 0,
    n = 50,
    r = e.next(t);
  for (; !r.done && t < Qu; ) (t += n), (r = e.next(t));
  return t >= Qu ? 1 / 0 : t;
}
var Xa;
function JT() {
  Xa = void 0;
}
var wr = {
    now: () => (
      Xa === void 0 &&
        wr.set(
          Oe.isProcessing || sl.useManualTiming
            ? Oe.timestamp
            : performance.now()
        ),
      Xa
    ),
    set: (e) => {
      (Xa = e), queueMicrotask(JT);
    },
  },
  eE = (e) => {
    let t = ({ timestamp: n }) => e(n);
    return {
      start: () => G.update(t, !0),
      stop: () => wt(t),
      now: () => (Oe.isProcessing ? Oe.timestamp : wr.now()),
    };
  },
  tE = { decay: ev, inertia: ev, tween: Za, keyframes: Za, spring: xs },
  nE = (e) => e / 100,
  ml = class extends Vg {
    constructor({ KeyframeResolver: e = Lf, ...t }) {
      super(t),
        (this.holdTime = null),
        (this.startTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
          )
            return;
          this.teardown();
          let { onStop: s } = this.options;
          s && s();
        });
      let { name: n, motionValue: r, keyframes: i } = this.options,
        o = (s, a) => this.onKeyframesResolved(s, a);
      n && r && r.owner
        ? (this.resolver = r.owner.resolveKeyframes(i, o, n, r))
        : (this.resolver = new e(i, o, n, r)),
        this.resolver.scheduleResolve();
    }
    initPlayback(e) {
      let {
          type: t = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: o = 0,
        } = this.options,
        s = tE[t] || Za,
        a,
        l;
      s !== Za &&
        typeof e[0] != "number" &&
        ((a = On(nE, Ff(e[0], e[1]))), (e = [0, 100]));
      let c = s({ ...this.options, keyframes: e });
      i === "mirror" &&
        (l = s({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
        c.calculatedDuration === null && (c.calculatedDuration = Bg(c));
      let { calculatedDuration: u } = c,
        f = u + r,
        d = f * (n + 1) - r;
      return {
        generator: c,
        mirroredGenerator: l,
        mapPercentToKeyframes: a,
        calculatedDuration: u,
        resolvedDuration: f,
        totalDuration: d,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      this.play(),
        this.pendingPlayState === "paused" || !e
          ? this.pause()
          : (this.state = this.pendingPlayState);
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: T } = this.options;
        return { done: !0, value: T[T.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: o,
        mapPercentToKeyframes: s,
        keyframes: a,
        calculatedDuration: l,
        totalDuration: c,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: f,
        repeat: d,
        repeatType: p,
        repeatDelay: y,
        onUpdate: g,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - c / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed);
      let S = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
        m = this.speed >= 0 ? S < 0 : S > c;
      (this.currentTime = Math.max(S, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = c);
      let h = this.currentTime,
        v = i;
      if (d) {
        let T = Math.min(this.currentTime, c) / u,
          E = Math.floor(T),
          F = T % 1;
        !F && T >= 1 && (F = 1),
          F === 1 && E--,
          (E = Math.min(E, d + 1)),
          !!(E % 2) &&
            (p === "reverse"
              ? ((F = 1 - F), y && (F -= y / u))
              : p === "mirror" && (v = o)),
          (h = er(0, 1, F) * u);
      }
      let x = m ? { done: !1, value: a[0] } : v.next(h);
      s && (x.value = s(x.value));
      let { done: k } = x;
      !m &&
        l !== null &&
        (k = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      let w =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && k));
      return (
        w && r !== void 0 && (x.value = pl(a, this.options, r)),
        g && g(x.value),
        w && this.finish(),
        x
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? An(e.calculatedDuration) : 0;
    }
    get time() {
      return An(this.currentTime);
    }
    set time(e) {
      (e = Dn(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (this.playbackSpeed = e), t && (this.time = An(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      let { driver: e = eE, onPlay: t } = this.options;
      this.driver || (this.driver = e((r) => this.tick(r))), t && t();
      let n = this.driver.now();
      this.holdTime !== null
        ? (this.startTime = n - this.holdTime)
        : (!this.startTime || this.state === "finished") &&
          (this.startTime = n),
        this.state === "finished" && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var e;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      (this.state = "paused"),
        (this.holdTime =
          (e = this.currentTime) !== null && e !== void 0 ? e : 0);
    }
    complete() {
      this.state !== "running" && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0);
    }
  };
function Of(e) {
  return new ml(e);
}
var $g = (e) => /^0[^.\s]+$/u.test(e);
function rE(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || $g(e)
    : !0;
}
var zg = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  iE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function oE(e) {
  let t = iE.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var sE = 4;
function Ng(e, t, n = 1) {
  Xt(
    n <= sE,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  let [r, i] = oE(e);
  if (!r) return;
  let o = O.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    let s = o.trim();
    return zg(s) ? parseFloat(s) : s;
  }
  return _f(i) ? Ng(i, t, n + 1) : i;
}
var Hg = (e) => (t) => t.test(e),
  aE = { test: (e) => e === "auto", parse: (e) => e },
  jg = [eo, X, Ln, br, iT, rT, aE],
  iv = (e) => jg.find(Hg(e)),
  lE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function cE(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  let [r] = n.match(bf) || [];
  if (!r) return e;
  let i = n.replace(r, ""),
    o = lE.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
var uE = /\b([a-z-]*)\(.*?\)/gu,
  Zu = {
    ...tr,
    getAnimatableNone: (e) => {
      let t = e.match(uE);
      return t ? t.map(cE).join(" ") : e;
    },
  },
  ov = { ...eo, transform: Math.round },
  Wg = {
    borderWidth: X,
    borderTopWidth: X,
    borderRightWidth: X,
    borderBottomWidth: X,
    borderLeftWidth: X,
    borderRadius: X,
    radius: X,
    borderTopLeftRadius: X,
    borderTopRightRadius: X,
    borderBottomRightRadius: X,
    borderBottomLeftRadius: X,
    width: X,
    maxWidth: X,
    height: X,
    maxHeight: X,
    size: X,
    top: X,
    right: X,
    bottom: X,
    left: X,
    padding: X,
    paddingTop: X,
    paddingRight: X,
    paddingBottom: X,
    paddingLeft: X,
    margin: X,
    marginTop: X,
    marginRight: X,
    marginBottom: X,
    marginLeft: X,
    rotate: br,
    rotateX: br,
    rotateY: br,
    rotateZ: br,
    scale: ja,
    scaleX: ja,
    scaleY: ja,
    scaleZ: ja,
    skew: br,
    skewX: br,
    skewY: br,
    distance: X,
    translateX: X,
    translateY: X,
    translateZ: X,
    x: X,
    y: X,
    z: X,
    perspective: X,
    transformPerspective: X,
    opacity: ls,
    originX: Hm,
    originY: Hm,
    originZ: X,
    zIndex: ov,
    backgroundPositionX: X,
    backgroundPositionY: X,
    fillOpacity: ls,
    strokeOpacity: ls,
    numOctaves: ov,
  },
  fE = {
    ...Wg,
    color: rt,
    backgroundColor: rt,
    outlineColor: rt,
    fill: rt,
    stroke: rt,
    borderColor: rt,
    borderTopColor: rt,
    borderRightColor: rt,
    borderBottomColor: rt,
    borderLeftColor: rt,
    filter: Zu,
    WebkitFilter: Zu,
  },
  Df = (e) => fE[e];
function Ug(e, t) {
  let n = Df(e);
  return (
    n !== Zu && (n = tr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var dE = new Set(["auto", "none", "0"]);
function hE(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let o = e[r];
    typeof o == "string" && !dE.has(o) && ms(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (let o of t) e[o] = Ug(n, i);
}
var Xg = class extends Lf {
  constructor(e, t, n, r) {
    super(e, t, n, r, r?.owner, !0);
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, element: t, name: n } = this;
    if (!t.current) return;
    super.readKeyframes();
    for (let a = 0; a < e.length; a++) {
      let l = e[a];
      if (typeof l == "string" && ((l = l.trim()), _f(l))) {
        let c = Ng(l, t.current);
        c !== void 0 && (e[a] = c),
          a === e.length - 1 && (this.finalKeyframe = l);
      }
    }
    if ((this.resolveNoneKeyframes(), !jT.has(n) || e.length !== 2)) return;
    let [r, i] = e,
      o = iv(r),
      s = iv(i);
    if (o !== s)
      if (Qm(o) && Qm(s))
        for (let a = 0; a < e.length; a++) {
          let l = e[a];
          typeof l == "string" && (e[a] = parseFloat(l));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e, name: t } = this,
      n = [];
    for (let r = 0; r < e.length; r++) rE(e[r]) && n.push(r);
    n.length && hE(e, n, t);
  }
  measureInitialState() {
    let { element: e, unresolvedKeyframes: t, name: n } = this;
    if (!e.current) return;
    n === "height" && (this.suspendedScrollY = O.pageYOffset),
      (this.measuredOrigin = qi[n](
        e.measureViewportBox(),
        O.getComputedStyle(e.current)
      )),
      (t[0] = this.measuredOrigin);
    let r = t[t.length - 1];
    r !== void 0 && e.getValue(n, r).jump(r, !1);
  }
  measureEndState() {
    var e;
    let { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t.current) return;
    let i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    let o = r.length - 1,
      s = r[o];
    (r[o] = qi[n](t.measureViewportBox(), O.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([a, l]) => {
          t.getValue(a).set(l);
        }),
      this.resolveNoneKeyframes();
  }
};
function Yg(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var Gg = (e) => Array.isArray(e) && typeof e[0] == "number";
function Kg(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in Af) ||
    Gg(e) ||
    (Array.isArray(e) && e.every(Kg))
  );
}
var ss = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Af = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ss([0, 0.65, 0.55, 1]),
    circOut: ss([0.55, 0, 1, 0.45]),
    backIn: ss([0.31, 0.01, 0.66, -0.59]),
    backOut: ss([0.33, 1.53, 0.69, 0.99]),
  };
function pE(e) {
  return qg(e) || Af.easeOut;
}
function qg(e) {
  if (e) return Gg(e) ? ss(e) : Array.isArray(e) ? e.map(pE) : Af[e];
}
function mE(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  let c = { [t]: n };
  l && (c.offset = l);
  let u = qg(a);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
var vE = Yg(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  gE = new Set(["opacity", "clipPath", "filter", "transform"]),
  el = 10,
  yE = 2e4;
function bE(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !Kg(e.ease);
}
function xE(e, t) {
  let n = new ml({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    o = 0;
  for (; !r.done && o < yE; ) (r = n.sample(o)), i.push(r.value), (o += el);
  return { times: void 0, keyframes: i, duration: o - el, ease: "linear" };
}
var Ju = class extends Vg {
  constructor(e) {
    super(e);
    let { name: t, motionValue: n, keyframes: r } = this.options;
    (this.resolver = new Xg(r, (i, o) => this.onKeyframesResolved(i, o), t, n)),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, t) {
    var n;
    let {
      duration: r = 300,
      times: i,
      ease: o,
      type: s,
      motionValue: a,
      name: l,
    } = this.options;
    if (!(!((n = a.owner) === null || n === void 0) && n.current)) return !1;
    if (bE(this.options)) {
      let { onComplete: u, onUpdate: f, motionValue: d, ...p } = this.options,
        y = xE(e, p);
      (e = y.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (r = y.duration),
        (i = y.times),
        (o = y.ease),
        (s = "keyframes");
    }
    let c = mE(a.owner.current, l, e, {
      ...this.options,
      duration: r,
      times: i,
      ease: o,
    });
    return (
      (c.startTime = wr.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            let { onComplete: u } = this.options;
            a.set(pl(e, this.options, t)),
              u && u(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: r, times: i, type: s, ease: o, keyframes: e }
    );
  }
  get duration() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { duration: t } = e;
    return An(t);
  }
  get time() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { animation: t } = e;
    return An(t.currentTime || 0);
  }
  set time(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.currentTime = Dn(e);
  }
  get speed() {
    let { resolved: e } = this;
    if (!e) return 1;
    let { animation: t } = e;
    return t.playbackRate;
  }
  set speed(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.playbackRate = e;
  }
  get state() {
    let { resolved: e } = this;
    if (!e) return "idle";
    let { animation: t } = e;
    return t.playState;
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      let { resolved: t } = this;
      if (!t) return it;
      let { animation: n } = t;
      (n.timeline = e), (n.onfinish = null);
    }
    return it;
  }
  play() {
    if (this.isStopped) return;
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.playState === "finished" && this.updateFinishedPromise(), t.play();
  }
  pause() {
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    let { resolved: e } = this;
    if (!e) return;
    let {
      animation: t,
      keyframes: n,
      duration: r,
      type: i,
      ease: o,
      times: s,
    } = e;
    if (!(t.playState === "idle" || t.playState === "finished")) {
      if (this.time) {
        let { motionValue: a, onUpdate: l, onComplete: c, ...u } = this.options,
          f = new ml({
            ...u,
            keyframes: n,
            duration: r,
            type: i,
            ease: o,
            times: s,
            isGenerator: !0,
          }),
          d = Dn(this.time);
        a.setWithVelocity(f.sample(d - el).value, f.sample(d).value, el);
      }
      this.cancel();
    }
  }
  complete() {
    let { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    let { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    let {
      motionValue: t,
      name: n,
      repeatDelay: r,
      repeatType: i,
      damping: o,
      type: s,
    } = e;
    return (
      vE() &&
      n &&
      gE.has(n) &&
      t &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate &&
      !r &&
      i !== "mirror" &&
      o !== 0 &&
      s !== "inertia"
    );
  }
};
function Vf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function vl(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function SE([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let i = n < 0 ? e.length + n : n,
      [o] = e.splice(t, 1);
    e.splice(i, 0, o);
  }
  return e;
}
var Bf = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return Vf(this.subscriptions, e), () => vl(this.subscriptions, e);
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let o = this.subscriptions[i];
            o && o(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  sv = 30,
  wE = (e) => !isNaN(parseFloat(e)),
  cs = { current: void 0 },
  gl = class {
    constructor(e, t = {}) {
      (this.version = "11.2.12"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (n, r = !0) => {
          let i = wr.now();
          this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(n),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            r &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner);
    }
    setCurrent(e) {
      (this.current = e),
        (this.updatedAt = wr.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = wE(this.current));
    }
    setPrevFrameValue(e = this.current) {
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new Bf());
      let n = this.events[e].add(t);
      return e === "change"
        ? () => {
            n(),
              G.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e, t = !0) {
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return cs.current && cs.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = wr.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > sv
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, sv);
      return kf(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
function De(e, t) {
  return new gl(e, t);
}
function yl(e, t, n) {
  let r = e.getProps();
  return xf(r, t, n !== void 0 ? n : r.custom, e);
}
var kE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  CE = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  TE = { type: "keyframes", duration: 0.8 },
  EE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  RE = (e, { keyframes: t }) =>
    t.length > 2
      ? TE
      : hi.has(e)
      ? e.startsWith("scale")
        ? CE(t[1])
        : kE
      : EE;
function PE({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
function $f(e, t) {
  return e[t] || e.default || e;
}
function _E(e, t) {
  let n,
    r = () => {
      let { currentTime: i } = t,
        s = (i === null ? 0 : i.value) / 100;
      n !== s && e(s), (n = s);
    };
  return G.update(r, !0), () => wt(r);
}
var IE = Yg(() => O.ScrollTimeline !== void 0),
  zf = class {
    constructor(e) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = e.filter(Boolean));
    }
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e) {
      let t = this.animations.map((n) => {
        if (IE() && n.attachTimeline) n.attachTimeline(e);
        else
          return (
            n.pause(),
            _E((r) => {
              n.time = n.duration * r;
            }, e)
          );
      });
      return () => {
        t.forEach((n, r) => {
          n && n(), this.animations[r].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  },
  Nf =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      let a = $f(r, e) || {},
        l = a.delay || r.delay || 0,
        { elapsed: c = 0 } = r;
      c = c - Dn(l);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      PE(a) || (u = { ...u, ...RE(e, u) }),
        u.duration && (u.duration = Dn(u.duration)),
        u.repeatDelay && (u.repeatDelay = Dn(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from);
      let f = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          ((u.duration = 0), u.delay === 0 && (f = !0)),
        (Ja.current || sl.skipAnimations) &&
          ((f = !0), (u.duration = 0), (u.delay = 0)),
        f && !o && t.get() !== void 0)
      ) {
        let d = pl(u.keyframes, a);
        if (d !== void 0)
          return (
            G.update(() => {
              u.onUpdate(d), u.onComplete();
            }),
            new zf([])
          );
      }
      return !o && Ju.supports(u) ? new Ju(u) : new ml(u);
    };
function tl(e) {
  return !!(Ce(e) && e.add);
}
function FE(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, De(n));
}
function Hf(e, t) {
  let n = yl(e, t),
    { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (let s in o) {
    let a = aT(o[s]);
    FE(e, s, a);
  }
}
function Qg(e) {
  return e.getProps()[ol];
}
function LE({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function jf(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t,
    c = e.getValue("willChange");
  r && (s = r);
  let u = [],
    f = i && e.animationState && e.animationState.getState()[i];
  for (let d in l) {
    let p = e.getValue(
        d,
        (o = e.latestValues[d]) !== null && o !== void 0 ? o : null
      ),
      y = l[d];
    if (y === void 0 || (f && LE(f, d))) continue;
    let g = { delay: n, elapsed: 0, ...$f(s || {}, d) },
      S = !1;
    if (O.HandoffAppearAnimations) {
      let h = Qg(e);
      if (h) {
        let v = O.HandoffAppearAnimations(h, d, p, G);
        v !== null && ((g.elapsed = v), (S = !0));
      }
    }
    p.start(
      Nf(d, p, y, e.shouldReduceMotion && hi.has(d) ? { type: !1 } : g, e, S)
    );
    let m = p.animation;
    m && (tl(c) && (c.add(d), m.then(() => c.remove(d))), u.push(m));
  }
  return (
    a &&
      Promise.all(u).then(() => {
        G.update(() => {
          a && Hf(e, a);
        });
      }),
    u
  );
}
function ef(e, t, n = {}) {
  var r;
  let i = yl(
      e,
      t,
      n.type === "exit"
        ? (r = e.presenceContext) === null || r === void 0
          ? void 0
          : r.custom
        : void 0
    ),
    { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  let s = i ? () => Promise.all(jf(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            let {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return ME(e, t, u + c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    let [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function ME(e, t, n = 0, r = 0, i = 1, o) {
  let s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(OE)
      .forEach((c, u) => {
        c.notify("AnimationStart", t),
          s.push(
            ef(c, t, { ...o, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function OE(e, t) {
  return e.sortNodePosition(t);
}
function Wf(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((o) => ef(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = ef(e, t, n);
  else {
    let i = typeof t == "function" ? yl(e, t, n.custom) : t;
    r = Promise.all(jf(e, i, n));
  }
  return r.then(() => {
    G.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
function Zg(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var DE = [...mf].reverse(),
  AE = mf.length;
function VE(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Wf(e, n, r)));
}
function BE(e) {
  let t = VE(e),
    n = av(),
    r = !0,
    i = (l) => (c, u) => {
      var f;
      let d = yl(
        e,
        u,
        l === "exit"
          ? (f = e.presenceContext) === null || f === void 0
            ? void 0
            : f.custom
          : void 0
      );
      if (d) {
        let { transition: p, transitionEnd: y, ...g } = d;
        c = { ...c, ...g, ...y };
      }
      return c;
    };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    let c = e.getProps(),
      u = e.getVariantContext(!0) || {},
      f = [],
      d = new Set(),
      p = {},
      y = 1 / 0;
    for (let S = 0; S < AE; S++) {
      let m = DE[S],
        h = n[m],
        v = c[m] !== void 0 ? c[m] : u[m],
        x = ps(v),
        k = m === l ? h.isActive : null;
      k === !1 && (y = S);
      let w = v === u[m] && v !== c[m] && x;
      if (
        (w && r && e.manuallyAnimateOnMount && (w = !1),
        (h.protectedKeys = { ...p }),
        (!h.isActive && k === null) ||
          (!v && !h.prevProp) ||
          ll(v) ||
          typeof v == "boolean")
      )
        continue;
      let E =
          $E(h.prevProp, v) ||
          (m === l && h.isActive && !w && x) ||
          (S > y && x),
        F = !1,
        I = Array.isArray(v) ? v : [v],
        D = I.reduce(i(m), {});
      k === !1 && (D = {});
      let { prevResolvedValues: $ = {} } = h,
        J = { ...$, ...D },
        Z = (B) => {
          (E = !0),
            d.has(B) && ((F = !0), d.delete(B)),
            (h.needsAnimating[B] = !0);
          let j = e.getValue(B);
          j && (j.liveStyle = !1);
        };
      for (let B in J) {
        let j = D[B],
          te = $[B];
        if (p.hasOwnProperty(B)) continue;
        let ne = !1;
        Uu(j) && Uu(te) ? (ne = !Zg(j, te)) : (ne = j !== te),
          ne
            ? j != null
              ? Z(B)
              : d.add(B)
            : j !== void 0 && d.has(B)
            ? Z(B)
            : (h.protectedKeys[B] = !0);
      }
      (h.prevProp = v),
        (h.prevResolvedValues = D),
        h.isActive && (p = { ...p, ...D }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!w || F) &&
          f.push(...I.map((B) => ({ animation: B, options: { type: m } })));
    }
    if (d.size) {
      let S = {};
      d.forEach((m) => {
        let h = e.getBaseTarget(m),
          v = e.getValue(m);
        v && (v.liveStyle = !0), (S[m] = h ?? null);
      }),
        f.push({ animation: S });
    }
    let g = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((d) => {
        var p;
        return (p = d.animationState) === null || p === void 0
          ? void 0
          : p.setActive(l, c);
      }),
      (n[l].isActive = c);
    let f = s(l);
    for (let d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = av()), (r = !0);
    },
  };
}
function $E(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Zg(t, e) : !1;
}
function oi(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function av() {
  return {
    animate: oi(!0),
    whileInView: oi(),
    whileHover: oi(),
    whileTap: oi(),
    whileDrag: oi(),
    whileFocus: oi(),
    exit: oi(),
  };
}
var Tr = class {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  },
  zE = class extends Tr {
    constructor(e) {
      super(e), e.animationState || (e.animationState = BE(e));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      ll(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this);
    }
  },
  NE = 0,
  HE = class extends Tr {
    constructor() {
      super(...arguments), (this.id = NE++);
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
        { isPresent: n } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === n) return;
      let r = this.node.animationState.setActive("exit", !e);
      t && !e && r.then(() => t(this.id));
    }
    mount() {
      let { register: e } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id));
    }
    unmount() {}
  },
  Uf = { animation: { Feature: zE }, exit: { Feature: HE } },
  tf = (e, t) => Math.abs(e - t);
function Jg(e, t) {
  let n = tf(e.x, t.x),
    r = tf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function Ft(e) {
  return e.max - e.min;
}
function nf(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function lv(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Se(t.min, t.max, e.origin)),
    (e.scale = Ft(n) / Ft(t)),
    (nf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Se(n.min, n.max, e.origin) - e.originPoint),
    (nf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function us(e, t, n, r) {
  lv(e.x, t.x, n.x, r ? r.originX : void 0),
    lv(e.y, t.y, n.y, r ? r.originY : void 0);
}
function cv(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ft(t));
}
function jE(e, t, n) {
  cv(e.x, t.x, n.x), cv(e.y, t.y, n.y);
}
function uv(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ft(t));
}
function fs(e, t, n) {
  uv(e.x, t.x, n.x), uv(e.y, t.y, n.y);
}
var fv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Xi = () => ({ x: fv(), y: fv() }),
  dv = () => ({ min: 0, max: 0 }),
  Me = () => ({ x: dv(), y: dv() });
function Xf() {
  let e = A(Zi);
  if (e === null) return [!0, null];
  let { isPresent: t, onExitComplete: n, register: r } = e,
    i = ii();
  return N(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
var WE = (e, t) => e.depth - t.depth,
  ey = class {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      Vf(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      vl(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(WE),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  };
function ty(e, t) {
  let n = wr.now(),
    r = ({ timestamp: i }) => {
      let o = i - n;
      o >= t && (wt(r), e(o - t));
    };
  return G.read(r, !0), () => wt(r);
}
var nr = new WeakMap(),
  nl = { current: null },
  Yf = { current: !1 };
function ny() {
  if (((Yf.current = !0), !!il))
    if (O.matchMedia) {
      let e = O.matchMedia("(prefers-reduced-motion)"),
        t = () => (nl.current = e.matches);
      e.addListener(t), t();
    } else nl.current = !1;
}
function UE(e, t, n) {
  let { willChange: r } = t;
  for (let i in t) {
    let o = t[i],
      s = n[i];
    if (Ce(o)) e.addValue(i, o), tl(r) && r.add(i);
    else if (Ce(s)) e.addValue(i, De(o, { owner: e })), tl(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        let a = e.getValue(i);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        let a = e.getStaticValue(i);
        e.addValue(i, De(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (let i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
var XE = [...jg, rt, tr],
  YE = (e) => XE.find(Hg(e)),
  hv = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  GE = vf.length,
  ry = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: o,
      },
      s = {}
    ) {
      (this.resolveKeyframes = (f, d, p, y) =>
        new this.KeyframeResolver(f, d, p, y, this)),
        (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Lf),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.scheduleRender = () => G.render(this.render, !1, !0));
      let { latestValues: a, renderState: l } = o;
      (this.latestValues = a),
        (this.baseTarget = { ...a }),
        (this.initialValues = t.initial ? { ...a } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = s),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = cl(t)),
        (this.isVariantNode = lg(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current));
      let { willChange: c, ...u } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this
      );
      for (let f in u) {
        let d = u[f];
        a[f] !== void 0 && Ce(d) && (d.set(a[f], !1), tl(c) && c.add(f));
      }
    }
    mount(e) {
      (this.current = e),
        nr.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((t, n) => this.bindToMotionValue(n, t)),
        Yf.current || ny(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : nl.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      nr.delete(this.current),
        this.projection && this.projection.unmount(),
        wt(this.notifyUpdate),
        wt(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      let n = hi.has(e),
        r = t.on("change", (o) => {
          (this.latestValues[e] = o),
            this.props.onUpdate && G.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0);
        }),
        i = t.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(e, () => {
        r(), i(), t.owner && t.stop();
      });
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = "animation";
      for (e in Gi) {
        let t = Gi[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let i = this.features[e];
          i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Me();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t);
      for (let n = 0; n < hv.length; n++) {
        let r = hv[n];
        this.propEventSubscriptions[r] &&
          (this.propEventSubscriptions[r](),
          delete this.propEventSubscriptions[r]);
        let i = "on" + r,
          o = e[i];
        o && (this.propEventSubscriptions[r] = this.on(r, o));
      }
      (this.prevMotionValues = UE(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    getVariantContext(e = !1) {
      if (e) return this.parent ? this.parent.getVariantContext() : void 0;
      if (!this.isControllingVariants) {
        let n = this.parent ? this.parent.getVariantContext() || {} : {};
        return (
          this.props.initial !== void 0 && (n.initial = this.props.initial), n
        );
      }
      let t = {};
      for (let n = 0; n < GE; n++) {
        let r = vf[n],
          i = this.props[r];
        (ps(i) || i === !1) && (t[r] = i);
      }
      return t;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = De(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      var n;
      let r =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (n = this.getBaseTargetFromProps(this.props, e)) !== null &&
            n !== void 0
          ? n
          : this.readValueFromInstance(this.current, e, this.options);
      return (
        r != null &&
          (typeof r == "string" && (zg(r) || $g(r))
            ? (r = parseFloat(r))
            : !YE(r) && tr.test(t) && (r = Ug(e, t)),
          this.setBaseTarget(e, Ce(r) ? r.get() : r)),
        Ce(r) ? r.get() : r
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      var t;
      let { initial: n } = this.props,
        r;
      if (typeof n == "string" || typeof n == "object") {
        let o = xf(
          this.props,
          n,
          (t = this.presenceContext) === null || t === void 0
            ? void 0
            : t.custom
        );
        o && (r = o[e]);
      }
      if (n && r !== void 0) return r;
      let i = this.getBaseTargetFromProps(this.props, e);
      return i !== void 0 && !Ce(i)
        ? i
        : this.initialValues[e] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new Bf()), this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  };
function iy(e) {
  function t(r, i = {}) {
    return cg(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  let n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
var KE = [
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
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Gf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(KE.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function oy(e, { layout: t, layoutId: n }) {
  return (
    hi.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!qa[e] || e === "opacity"))
  );
}
var qE = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Kf(e, t, n, r) {
  let { style: i, vars: o, transform: s, transformOrigin: a } = e,
    l = !1,
    c = !1,
    u = !0;
  for (let f in t) {
    let d = t[f];
    if (Fg(f)) {
      o[f] = d;
      continue;
    }
    let p = Wg[f],
      y = qE(d, p);
    if (hi.has(f)) {
      if (((l = !0), (s[f] = y), !u)) continue;
      d !== (p.default || 0) && (u = !1);
    } else f.startsWith("origin") ? ((c = !0), (a[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = ug(e.transform, n, u, r))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    let { originX: f = "50%", originY: d = "50%", originZ: p = 0 } = a;
    i.transformOrigin = `${f} ${d} ${p}`;
  }
}
var qf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function sy(e, t, n) {
  for (let r in t) !Ce(t[r]) && !oy(r, n) && (e[r] = t[r]);
}
function QE({ transformTemplate: e }, t, n) {
  return se(() => {
    let r = qf();
    return (
      Kf(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function ZE(e, t, n) {
  let r = e.style || {},
    i = {};
  return sy(i, r, e), Object.assign(i, QE(e, t, n)), i;
}
function JE(e, t, n) {
  let r = {},
    i = ZE(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
function pv(e, t, n) {
  return typeof e == "string" ? e : X.transform(t + n * e);
}
function eR(e, t, n) {
  let r = pv(t, e.x, e.width),
    i = pv(n, e.y, e.height);
  return `${r} ${i}`;
}
var tR = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  nR = { offset: "strokeDashoffset", array: "strokeDasharray" };
function rR(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let o = i ? tR : nR;
  e[o.offset] = X.transform(-r);
  let s = X.transform(t),
    a = X.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Qf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f,
  d
) {
  if ((Kf(e, c, u, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  let { attrs: p, style: y, dimensions: g } = e;
  p.transform && (g && (y.transform = p.transform), delete p.transform),
    g &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = eR(
        g,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (p.x = t),
    n !== void 0 && (p.y = n),
    r !== void 0 && (p.scale = r),
    s !== void 0 && rR(p, s, a, l, !1);
}
var ay = () => ({ ...qf(), attrs: {} }),
  Zf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function iR(e, t, n, r) {
  let i = se(() => {
    let o = ay();
    return (
      Qf(o, t, { enableHardwareAcceleration: !1 }, Zf(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    let o = {};
    sy(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function oR(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    let l = (Gf(n) ? iR : JE)(r, o, s, n),
      c = hg(r, typeof n == "string", e),
      u = n !== ri ? { ...c, ...l, ref: i } : {},
      { children: f } = r,
      d = se(() => (Ce(f) ? f.get() : f), [f]);
    return Ha(n, { ...u, children: d });
  };
}
function ly(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let o in n) e.style.setProperty(o, n[o]);
}
var cy = new Set([
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
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function uy(e, t, n, r) {
  ly(e, t, void 0, r);
  for (let i in t.attrs) e.setAttribute(cy.has(i) ? i : hf(i), t.attrs[i]);
}
function Jf(e, t, n) {
  var r;
  let { style: i } = e,
    o = {};
  for (let s in i)
    (Ce(i[s]) ||
      (t.style && Ce(t.style[s])) ||
      oy(s, e) ||
      ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !==
        void 0) &&
      (o[s] = i[s]);
  return o;
}
function fy(e, t, n) {
  let r = Jf(e, t, n);
  for (let i in e)
    if (Ce(e[i]) || Ce(t[i])) {
      let o =
        gs.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
var sR = {
    useVisualState: ul({
      scrapeMotionValuesFromProps: fy,
      createRenderState: ay,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        G.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          G.render(() => {
            Qf(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Zf(t.tagName),
              e.transformTemplate
            ),
              uy(t, n);
          });
      },
    }),
  },
  aR = {
    useVisualState: ul({
      scrapeMotionValuesFromProps: Jf,
      createRenderState: qf,
    }),
  };
function dy(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Gf(e) ? sR : aR),
    preloadedFeatures: n,
    useRender: oR(t),
    createVisualElement: r,
    Component: e,
  };
}
function mv(e, t) {
  let n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || Sf()) return;
      let a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      let l = a[r];
      l && G.postRender(() => l(o, s));
    };
  return Mn(e.current, n, i, { passive: !e.getProps()[r] });
}
var lR = class extends Tr {
    mount() {
      this.unmount = On(mv(this.node, !0), mv(this.node, !1));
    }
    unmount() {}
  },
  cR = class extends Tr {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(":focus-visible");
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = On(
        Jn(this.node.current, "focus", () => this.onFocus()),
        Jn(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  },
  hy = (e, t) => (t ? (e === t ? !0 : hy(e, t.parentElement)) : !1);
function Au(e, t) {
  if (!t) return;
  let n = new PointerEvent("pointer" + e);
  t(n, fl(n));
}
var uR = class extends Tr {
    constructor() {
      super(...arguments),
        (this.removeStartListeners = it),
        (this.removeEndListeners = it),
        (this.removeAccessibleListeners = it),
        (this.startPointerPress = (e, t) => {
          if (this.isPressing) return;
          this.removeEndListeners();
          let n = this.node.getProps(),
            i = Mn(
              O,
              "pointerup",
              (s, a) => {
                if (!this.checkPressEnd()) return;
                let {
                    onTap: l,
                    onTapCancel: c,
                    globalTapTarget: u,
                  } = this.node.getProps(),
                  f = !u && !hy(this.node.current, s.target) ? c : l;
                f && G.update(() => f(s, a));
              },
              { passive: !(n.onTap || n.onPointerUp) }
            ),
            o = Mn(O, "pointercancel", (s, a) => this.cancelPress(s, a), {
              passive: !(n.onTapCancel || n.onPointerCancel),
            });
          (this.removeEndListeners = On(i, o)), this.startPress(e, t);
        }),
        (this.startAccessiblePress = () => {
          let e = (i) => {
              if (i.key !== "Enter" || this.isPressing) return;
              let o = (s) => {
                s.key !== "Enter" ||
                  !this.checkPressEnd() ||
                  Au("up", (a, l) => {
                    let { onTap: c } = this.node.getProps();
                    c && G.postRender(() => c(a, l));
                  });
              };
              this.removeEndListeners(),
                (this.removeEndListeners = Jn(this.node.current, "keyup", o)),
                Au("down", (s, a) => {
                  this.startPress(s, a);
                });
            },
            t = Jn(this.node.current, "keydown", e),
            n = () => {
              this.isPressing && Au("cancel", (i, o) => this.cancelPress(i, o));
            },
            r = Jn(this.node.current, "blur", n);
          this.removeAccessibleListeners = On(t, r);
        });
    }
    startPress(e, t) {
      this.isPressing = !0;
      let { onTapStart: n, whileTap: r } = this.node.getProps();
      r &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !0),
        n && G.postRender(() => n(e, t));
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive("whileTap", !1),
        !Sf()
      );
    }
    cancelPress(e, t) {
      if (!this.checkPressEnd()) return;
      let { onTapCancel: n } = this.node.getProps();
      n && G.postRender(() => n(e, t));
    }
    mount() {
      let e = this.node.getProps(),
        t = Mn(
          e.globalTapTarget ? O : this.node.current,
          "pointerdown",
          this.startPointerPress,
          { passive: !(e.onTapStart || e.onPointerStart) }
        ),
        n = Jn(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = On(t, n);
    }
    unmount() {
      this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners();
    }
  },
  rf = new WeakMap(),
  Vu = new WeakMap(),
  fR = (e) => {
    let t = rf.get(e.target);
    t && t(e);
  },
  dR = (e) => {
    e.forEach(fR);
  };
function hR({ root: e, ...t }) {
  let n = e || document;
  Vu.has(n) || Vu.set(n, {});
  let r = Vu.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(dR, { root: e, ...t })), r[i];
}
function pR(e, t, n) {
  let r = hR(t);
  return (
    rf.set(e, n),
    r.observe(e),
    () => {
      rf.delete(e), r.unobserve(e);
    }
  );
}
var mR = { some: 0, all: 1 },
  vR = class extends Tr {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = "some", once: i } = e,
        o = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == "number" ? r : mR[r],
        },
        s = (a) => {
          let { isIntersecting: l } = a;
          if (
            this.isInView === l ||
            ((this.isInView = l), i && !l && this.hasEnteredView)
          )
            return;
          l && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", l);
          let { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(),
            f = l ? c : u;
          f && f(a);
        };
      return pR(this.node.current, o, s);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e, prevProps: t } = this.node;
      ["amount", "margin", "root"].some(gR(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function gR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var py = {
    inView: { Feature: vR },
    tap: { Feature: uR },
    focus: { Feature: cR },
    hover: { Feature: lR },
  },
  my = class {
    constructor(
      e,
      t,
      { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = O),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          let u = $u(this.lastMoveEventInfo, this.history),
            f = this.startEvent !== null,
            d = Jg(u.offset, { x: 0, y: 0 }) >= 3;
          if (!f && !d) return;
          let { point: p } = u,
            { timestamp: y } = Oe;
          this.history.push({ ...p, timestamp: y });
          let { onStart: g, onMove: S } = this.handlers;
          f ||
            (g && g(this.lastMoveEvent, u),
            (this.startEvent = this.lastMoveEvent)),
            S && S(this.lastMoveEvent, u);
        }),
        (this.handlePointerMove = (u, f) => {
          (this.lastMoveEvent = u),
            (this.lastMoveEventInfo = Bu(f, this.transformPagePoint)),
            G.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (u, f) => {
          this.end();
          let { onEnd: d, onSessionEnd: p, resumeAnimation: y } = this.handlers;
          if (
            (this.dragSnapToOrigin && y && y(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let g = $u(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Bu(f, this.transformPagePoint),
            this.history
          );
          this.startEvent && d && d(u, g), p && p(u, g);
        }),
        !pg(e))
      )
        return;
      (this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.contextWindow = r || O);
      let o = fl(e),
        s = Bu(o, this.transformPagePoint),
        { point: a } = s,
        { timestamp: l } = Oe;
      this.history = [{ ...a, timestamp: l }];
      let { onSessionStart: c } = t;
      c && c(e, $u(s, this.history)),
        (this.removeListeners = On(
          Mn(this.contextWindow, "pointermove", this.handlePointerMove),
          Mn(this.contextWindow, "pointerup", this.handlePointerUp),
          Mn(this.contextWindow, "pointercancel", this.handlePointerUp)
        ));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), wt(this.updatePoint);
    }
  };
function Bu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function vv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function $u({ point: e }, t) {
  return {
    point: e,
    delta: vv(e, vy(t)),
    offset: vv(e, yR(t)),
    velocity: bR(t, 0.1),
  };
}
function yR(e) {
  return e[0];
}
function vy(e) {
  return e[e.length - 1];
}
function bR(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = vy(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Dn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let o = An(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function xR(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Se(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Se(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function gv(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function SR(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: gv(e.x, n, i), y: gv(e.y, t, r) };
}
function yv(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function wR(e, t) {
  return { x: yv(e.x, t.x), y: yv(e.y, t.y) };
}
function kR(e, t) {
  let n = 0.5,
    r = Ft(e),
    i = Ft(t);
  return (
    i > r
      ? (n = kr(t.min, t.max - r, e.min))
      : r > i && (n = kr(e.min, e.max - i, t.min)),
    er(0, 1, n)
  );
}
function CR(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var of = 0.35;
function TR(e = of) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = of),
    { x: bv(e, "left", "right"), y: bv(e, "top", "bottom") }
  );
}
function bv(e, t, n) {
  return { min: xv(e, t), max: xv(e, n) };
}
function xv(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
function an(e) {
  return [e("x"), e("y")];
}
function gy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function ER({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function RR(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function zu(e) {
  return e === void 0 || e === 1;
}
function sf({ scale: e, scaleX: t, scaleY: n }) {
  return !zu(e) || !zu(t) || !zu(n);
}
function si(e) {
  return (
    sf(e) ||
    yy(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function yy(e) {
  return Sv(e.x) || Sv(e.y);
}
function Sv(e) {
  return e && e !== "0%";
}
function rl(e, t, n) {
  let r = e - n,
    i = t * r;
  return n + i;
}
function wv(e, t, n, r, i) {
  return i !== void 0 && (e = rl(e, i, r)), rl(e, n, r) + t;
}
function af(e, t = 0, n = 1, r, i) {
  (e.min = wv(e.min, t, n, r, i)), (e.max = wv(e.max, t, n, r, i));
}
function by(e, { x: t, y: n }) {
  af(e.x, t.translate, t.scale, t.originPoint),
    af(e.y, n.translate, n.scale, n.originPoint);
}
function PR(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    let l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Yi(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), by(e, s)),
      r && si(o.latestValues) && Yi(e, o.latestValues));
  }
  (t.x = kv(t.x)), (t.y = kv(t.y));
}
function kv(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Sr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Cv(e, t, [n, r, i]) {
  let o = t[i] !== void 0 ? t[i] : 0.5,
    s = Se(e.min, e.max, o);
  af(e, t[n], t[r], s, t.scale);
}
var _R = ["x", "scaleX", "originX"],
  IR = ["y", "scaleY", "originY"];
function Yi(e, t) {
  Cv(e.x, t, _R), Cv(e.y, t, IR);
}
function xy(e, t) {
  return gy(RR(e.getBoundingClientRect(), t));
}
function FR(e, t, n) {
  let r = xy(e, n),
    { scroll: i } = t;
  return i && (Sr(r.x, i.offset.x), Sr(r.y, i.offset.y)), r;
}
var Sy = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  LR = new WeakMap(),
  MR = class {
    constructor(e) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Me()),
        (this.visualElement = e);
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (c) => {
          let { dragSnapToOrigin: u } = this.getProps();
          u ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(fl(c, "page").point);
        },
        i = (c, u) => {
          let { drag: f, dragPropagation: d, onDragStart: p } = this.getProps();
          if (
            f &&
            !d &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = gg(f)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            an((g) => {
              let S = this.getAxisMotionValue(g).get() || 0;
              if (Ln.test(S)) {
                let { projection: m } = this.visualElement;
                if (m && m.layout) {
                  let h = m.layout.layoutBox[g];
                  h && (S = Ft(h) * (parseFloat(S) / 100));
                }
              }
              this.originPoint[g] = S;
            }),
            p && G.postRender(() => p(c, u));
          let { animationState: y } = this.visualElement;
          y && y.setActive("whileDrag", !0);
        },
        o = (c, u) => {
          let {
            dragPropagation: f,
            dragDirectionLock: d,
            onDirectionLock: p,
            onDrag: y,
          } = this.getProps();
          if (!f && !this.openGlobalLock) return;
          let { offset: g } = u;
          if (d && this.currentDirection === null) {
            (this.currentDirection = OR(g)),
              this.currentDirection !== null && p && p(this.currentDirection);
            return;
          }
          this.updateAxis("x", u.point, g),
            this.updateAxis("y", u.point, g),
            this.visualElement.render(),
            y && y(c, u);
        },
        s = (c, u) => this.stop(c, u),
        a = () =>
          an((c) => {
            var u;
            return (
              this.getAnimationState(c) === "paused" &&
              ((u = this.getAxisMotionValue(c).animation) === null ||
              u === void 0
                ? void 0
                : u.play())
            );
          }),
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new my(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: a,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          contextWindow: Sy(this.visualElement),
        }
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && G.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      let { dragPropagation: n } = this.getProps();
      !n &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        t && t.setActive("whileDrag", !1);
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Wa(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        o = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (o = xR(o, this.constraints[e], this.elastic[e])),
        i.set(o);
    }
    resolveConstraints() {
      var e;
      let { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
        i = this.constraints;
      t && Wi(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
        ? (this.constraints = SR(r.layoutBox, t))
        : (this.constraints = !1),
        (this.elastic = TR(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          an((o) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(o) &&
              (this.constraints[o] = CR(r.layoutBox[o], this.constraints[o]));
          });
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !Wi(e)) return !1;
      let n = e.current;
      Xt(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = FR(n, r.root, this.visualElement.getTransformPagePoint()),
        o = wR(r.layout.layoutBox, i);
      if (t) {
        let s = t(ER(o));
        (this.hasMutatedConstraints = !!s), s && (o = gy(s));
      }
      return o;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: o,
          onDragTransitionEnd: s,
        } = this.getProps(),
        a = this.constraints || {},
        l = an((c) => {
          if (!Wa(c, t, this.currentDirection)) return;
          let u = (a && a[c]) || {};
          o && (u = { min: 0, max: 0 });
          let f = r ? 200 : 1e6,
            d = r ? 40 : 1e7,
            p = {
              type: "inertia",
              velocity: n ? e[c] : 0,
              bounceStiffness: f,
              bounceDamping: d,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...u,
            };
          return this.startAxisValueAnimation(c, p);
        });
      return Promise.all(l).then(s);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return n.start(Nf(e, n, 0, t, this.visualElement));
    }
    stopAnimation() {
      an((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      an((e) => {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null ||
          t === void 0
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return (t = this.getAxisMotionValue(e).animation) === null || t === void 0
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      an((t) => {
        let { drag: n } = this.getProps();
        if (!Wa(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: o, max: s } = r.layout.layoutBox[t];
          i.set(e[t] - Se(o, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Wi(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      an((o) => {
        let s = this.getAxisMotionValue(o);
        if (s && this.constraints !== !1) {
          let a = s.get();
          r[o] = kR({ min: a, max: a }, this.constraints[o]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        an((o) => {
          if (!Wa(o, e, null)) return;
          let s = this.getAxisMotionValue(o),
            { min: a, max: l } = this.constraints[o];
          s.set(Se(a, l, r[o]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      LR.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Mn(e, "pointerdown", (a) => {
          let { drag: l, dragListener: c = !0 } = this.getProps();
          l && c && this.start(a);
        }),
        n = () => {
          let { dragConstraints: a } = this.getProps();
          Wi(a) &&
            a.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener("measure", n);
      r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        G.read(n);
      let o = Jn(O, "resize", () => this.scalePositionWithinConstraints()),
        s = r.addEventListener(
          "didUpdate",
          ({ delta: a, hasLayoutChanged: l }) => {
            this.isDragging &&
              l &&
              (an((c) => {
                let u = this.getAxisMotionValue(c);
                u &&
                  ((this.originPoint[c] += a[c].translate),
                  u.set(u.get() + a[c].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        o(), t(), i(), s && s();
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: o = of,
          dragMomentum: s = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: o,
        dragMomentum: s,
      };
    }
  };
function Wa(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function OR(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
var DR = class extends Tr {
    constructor(e) {
      super(e),
        (this.removeGroupControls = it),
        (this.removeListeners = it),
        (this.controls = new MR(e));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || it);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  },
  Tv = (e) => (t, n) => {
    e && G.postRender(() => e(t, n));
  },
  AR = class extends Tr {
    constructor() {
      super(...arguments), (this.removePointerDownListener = it);
    }
    onPointerDown(e) {
      this.session = new my(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Sy(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: Tv(e),
        onStart: Tv(t),
        onMove: n,
        onEnd: (i, o) => {
          delete this.session, r && G.postRender(() => r(i, o));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Mn(
        this.node.current,
        "pointerdown",
        (e) => this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  },
  Ya = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ev(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var rs = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (X.test(e)) e = parseFloat(e);
        else return e;
      let n = Ev(e, t.target.x),
        r = Ev(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  VR = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = tr.parse(e);
      if (i.length > 5) return r;
      let o = tr.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      let c = Se(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= c),
        typeof i[3 + s] == "number" && (i[3 + s] /= c),
        o(i)
      );
    },
  },
  BR = class extends ve {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      yf($R),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (Ya.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        o = n.projection;
      return (
        o &&
          ((o.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? o.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? o.promote()
              : o.relegate() ||
                G.postRender(() => {
                  let s = o.getStack();
                  (!s || !s.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        pf.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function wy(e) {
  let [t, n] = Xf(),
    r = A(hs);
  return C(BR, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: A(al),
    isPresent: t,
    safeToRemove: n,
  });
}
var $R = {
    borderRadius: {
      ...rs,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: rs,
    borderTopRightRadius: rs,
    borderBottomLeftRadius: rs,
    borderBottomRightRadius: rs,
    boxShadow: VR,
  },
  ky = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  zR = ky.length,
  Rv = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Pv = (e) => typeof e == "number" || X.test(e);
function NR(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Se(0, n.opacity !== void 0 ? n.opacity : 1, HR(r))),
      (e.opacityExit = Se(t.opacity !== void 0 ? t.opacity : 1, 0, jR(r))))
    : o &&
      (e.opacity = Se(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < zR; s++) {
    let a = `border${ky[s]}Radius`,
      l = _v(t, a),
      c = _v(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Pv(l) === Pv(c)
        ? ((e[a] = Math.max(Se(Rv(l), Rv(c), r), 0)),
          (Ln.test(c) || Ln.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = Se(t.rotate || 0, n.rotate || 0, r));
}
function _v(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
var HR = Cy(0, 0.5, Rf),
  jR = Cy(0.5, 0.95, it);
function Cy(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(kr(e, t, r)));
}
function Iv(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function sn(e, t) {
  Iv(e.x, t.x), Iv(e.y, t.y);
}
function Fv(e, t, n, r, i) {
  return (
    (e -= t), (e = rl(e, 1 / n, r)), i !== void 0 && (e = rl(e, 1 / i, r)), e
  );
}
function WR(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Ln.test(t) &&
      ((t = parseFloat(t)), (t = Se(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = Se(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Fv(e.min, t, n, a, i)),
    (e.max = Fv(e.max, t, n, a, i));
}
function Lv(e, t, [n, r, i], o, s) {
  WR(e, t[n], t[r], t[i], t.scale, o, s);
}
var UR = ["x", "scaleX", "originX"],
  XR = ["y", "scaleY", "originY"];
function Mv(e, t, n, r) {
  Lv(e.x, t, UR, n ? n.x : void 0, r ? r.x : void 0),
    Lv(e.y, t, XR, n ? n.y : void 0, r ? r.y : void 0);
}
function Ov(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ty(e) {
  return Ov(e.x) && Ov(e.y);
}
function YR(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Ey(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Dv(e) {
  return Ft(e.x) / Ft(e.y);
}
var GR = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    Vf(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (vl(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let t = this.members[this.members.length - 1];
      t && this.promote(t);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((r) => e === r);
    if (t === 0) return !1;
    let n;
    for (let r = t; r >= 0; r--) {
      let i = this.members[r];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function Av(e, t, n) {
  let r = "",
    i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = n?.z || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: c,
      rotate: u,
      rotateX: f,
      rotateY: d,
      skewX: p,
      skewY: y,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      p && (r += `skewX(${p}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  let a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
function KR(e) {
  O.MotionDebug && O.MotionDebug.record(e);
}
function Ry(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function ed(e, t, n) {
  let r = Ce(e) ? e : De(e);
  return r.start(Nf("", r, t, n)), r.animation;
}
var Nu = ["", "X", "Y", "Z"],
  qR = { visibility: "hidden" },
  Vv = 1e3,
  QR = 0,
  ai = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  };
function Hu(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Py(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  let { visualElement: t } = e.options;
  return t
    ? Qg(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
      ? Py(e.parent)
      : !1
    : !1;
}
function _y({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t?.()) {
      (this.id = QR++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (ai.totalNodes =
              ai.resolvedTargetDeltas =
              ai.recalculatedProjection =
                0),
            this.nodes.forEach(eP),
            this.nodes.forEach(oP),
            this.nodes.forEach(sP),
            this.nodes.forEach(tP),
            KR(ai);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ey());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Bf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      let l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Ry(s)), (this.instance = s);
      let { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f,
          d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = ty(d, 250)),
            Ya.hasAnimatedSinceResize &&
              ((Ya.hasAnimatedSinceResize = !1), this.nodes.forEach($v));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: p,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              let g = this.options.transition || u.getDefaultTransition() || fP,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } =
                  u.getProps(),
                h = !this.targetLayout || !Ey(this.targetLayout, y) || p,
                v = !d && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, v);
                let x = { ...$f(g, "layout"), onPlay: S, onComplete: m };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || $v(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        wt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(aP),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (O.HandoffCancelAllAnimations &&
          Py(this) &&
          O.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      let { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      let c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Bv);
        return;
      }
      this.isUpdating || this.nodes.forEach(rP),
        (this.isUpdating = !1),
        this.nodes.forEach(iP),
        this.nodes.forEach(ZR),
        this.nodes.forEach(JR),
        this.clearAllSnapshots();
      let a = wr.now();
      (Oe.delta = er(0, 1e3 / 60, a - Oe.timestamp)),
        (Oe.timestamp = a),
        (Oe.isProcessing = !0),
        Ua.update.process(Oe),
        Ua.preRender.process(Oe),
        Ua.render.process(Oe),
        (Oe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), pf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(nP), this.sharedNodes.forEach(lP);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        G.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      G.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      let s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Me()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      let { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      let s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Ty(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || si(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      let a = this.measurePageBox(),
        l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        dP(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: s } = this.options;
      if (!s) return Me();
      let a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Sr(a.x, l.offset.x), Sr(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      let a = Me();
      sn(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l],
          { scroll: u, options: f } = c;
        if (c !== this.root && u && f.layoutScroll) {
          if (u.isRoot) {
            sn(a, s);
            let { scroll: d } = this.root;
            d && (Sr(a.x, -d.offset.x), Sr(a.y, -d.offset.y));
          }
          Sr(a.x, u.offset.x), Sr(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      let l = Me();
      sn(l, s);
      for (let c = 0; c < this.path.length; c++) {
        let u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Yi(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          si(u.latestValues) && Yi(l, u.latestValues);
      }
      return si(this.latestValues) && Yi(l, this.latestValues), l;
    }
    removeTransform(s) {
      let a = Me();
      sn(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l];
        if (!c.instance || !si(c.latestValues)) continue;
        sf(c.latestValues) && c.updateSnapshot();
        let u = Me(),
          f = c.measurePageBox();
        sn(u, f),
          Mv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return si(this.latestValues) && Mv(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Oe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      let l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      let c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      let { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Oe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Me()),
              (this.relativeTargetOrigin = Me()),
              fs(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              sn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Me()), (this.targetWithTransforms = Me())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                jE(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : sn(this.target, this.layout.layoutBox),
                by(this.target, this.targetDelta))
              : sn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Me()),
                (this.relativeTargetOrigin = Me()),
                fs(this.relativeTargetOrigin, this.target, p.target),
                sn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ai.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          sf(this.parent.latestValues) ||
          yy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      let a = this.getLead(),
        l = !!this.resumingFrom || this !== a,
        c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Oe.timestamp && (c = !1),
        c)
      )
        return;
      let { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      sn(this.layoutCorrected, this.layout.layoutBox);
      let d = this.treeScale.x,
        p = this.treeScale.y;
      PR(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Me()));
      let { target: y } = a;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = Xi()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Xi()),
        (this.projectionDeltaWithTransform = Xi()));
      let g = this.projectionTransform;
      us(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = Av(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== d ||
          this.treeScale.y !== p) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        ai.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        let a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      let l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = Xi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      let d = Me(),
        p = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        g = p !== y,
        S = this.getStack(),
        m = !S || S.members.length <= 1,
        h = !!(g && !m && this.options.crossfade === !0 && !this.path.some(uP));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (x) => {
        let k = x / 1e3;
        zv(f.x, s.x, k),
          zv(f.y, s.y, k),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (fs(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            cP(this.relativeTarget, this.relativeTargetOrigin, d, k),
            v && YR(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = Me()),
            sn(v, this.relativeTarget)),
          g &&
            ((this.animationValues = u), NR(u, c, this.latestValues, k, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (wt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = G.update(() => {
          (Ya.hasAnimatedSinceResize = !0),
            (this.currentAnimation = ed(0, Vv, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Vv),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      let s = this.getLead(),
        { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          Iy(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Me();
          let f = Ft(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          let d = Ft(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        sn(a, l),
          Yi(a, u),
          us(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new GR()),
        this.sharedNodes.get(s).add(a);
      let c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      let s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      let { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      let c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      let s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: s } = this.options;
      if (!s) return;
      let a = !1,
        { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      let c = {};
      l.z && Hu("z", s, c, this.animationValues);
      for (let u = 0; u < Nu.length; u++)
        Hu(`rotate${Nu[u]}`, s, c, this.animationValues),
          Hu(`skew${Nu[u]}`, s, c, this.animationValues);
      s.render();
      for (let u in c)
        s.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return qR;
      let c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = ft(s?.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      let f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        let g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = ft(s?.pointerEvents) || "")),
          this.hasProjected &&
            !si(this.latestValues) &&
            ((g.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      let d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = Av(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        u && (c.transform = u(d, c.transform));
      let { x: p, y } = this.projectionDelta;
      (c.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (c.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (let g in qa) {
        if (d[g] === void 0) continue;
        let { correct: S, applyTo: m } = qa[g],
          h = c.transform === "none" ? d[g] : S(d[g], f);
        if (m) {
          let v = m.length;
          for (let x = 0; x < v; x++) c[m[x]] = h;
        } else c[g] = h;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = f === this ? ft(s?.pointerEvents) || "" : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Bv),
        this.root.sharedNodes.clear();
    }
  };
}
function ZR(e) {
  e.updateLayout();
}
function JR(e) {
  var t;
  let n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    let { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? an((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            p = Ft(d);
          (d.min = r[f].min), (d.max = d.min + p);
        })
      : Iy(o, n.layoutBox, r) &&
        an((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            p = Ft(r[f]);
          (d.max = d.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + p));
        });
    let a = Xi();
    us(a, r, n.layoutBox);
    let l = Xi();
    s ? us(l, e.applyTransform(i, !0), n.measuredBox) : us(l, r, n.layoutBox);
    let c = !Ty(a),
      u = !1;
    if (!e.resumeFrom) {
      let f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        let { snapshot: d, layout: p } = f;
        if (d && p) {
          let y = Me();
          fs(y, n.layoutBox, d.layoutBox);
          let g = Me();
          fs(g, r, p.layoutBox),
            Ey(y, g) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    let { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function eP(e) {
  ai.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function tP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function nP(e) {
  e.clearSnapshot();
}
function Bv(e) {
  e.clearMeasurements();
}
function rP(e) {
  e.isLayoutDirty = !1;
}
function iP(e) {
  let { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function $v(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function oP(e) {
  e.resolveTargetDelta();
}
function sP(e) {
  e.calcProjection();
}
function aP(e) {
  e.resetSkewAndRotation();
}
function lP(e) {
  e.removeLeadSnapshot();
}
function zv(e, t, n) {
  (e.translate = Se(t.translate, 0, n)),
    (e.scale = Se(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Nv(e, t, n, r) {
  (e.min = Se(t.min, n.min, r)), (e.max = Se(t.max, n.max, r));
}
function cP(e, t, n, r) {
  Nv(e.x, t.x, n.x, r), Nv(e.y, t.y, n.y, r);
}
function uP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var fP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Hv = (e) =>
    typeof Le < "u" && Le.userAgent && Le.userAgent.toLowerCase().includes(e),
  jv = Hv("applewebkit/") && !Hv("chrome/") ? Math.round : it;
function Wv(e) {
  (e.min = jv(e.min)), (e.max = jv(e.max));
}
function dP(e) {
  Wv(e.x), Wv(e.y);
}
function Iy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !nf(Dv(t), Dv(n), 0.2))
  );
}
var hP = _y({
    attachResizeListener: (e, t) => Jn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  fi = { current: void 0 },
  Fy = _y({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!fi.current) {
        let e = new hP({});
        e.mount(O), e.setOptions({ layoutScroll: !0 }), (fi.current = e);
      }
      return fi.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => O.getComputedStyle(e).position === "fixed",
  }),
  Ly = {
    pan: { Feature: AR },
    drag: { Feature: DR, ProjectionNode: Fy, MeasureLayout: wy },
  },
  My = class extends ry {
    constructor() {
      super(...arguments), (this.KeyframeResolver = Xg);
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      delete t[e], delete n[e];
    }
  };
function pP(e) {
  return O.getComputedStyle(e);
}
var Oy = class extends My {
    constructor() {
      super(...arguments), (this.type = "html");
    }
    readValueFromInstance(e, t) {
      if (hi.has(t)) {
        let n = Df(t);
        return (n && n.default) || 0;
      } else {
        let n = pP(e),
          r = (Fg(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == "string" ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return xy(e, t);
    }
    build(e, t, n, r) {
      Kf(e, t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Jf(e, t, n);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      Ce(e) &&
        (this.childSubscription = e.on("change", (t) => {
          this.current && (this.current.textContent = `${t}`);
        }));
    }
    renderInstance(e, t, n, r) {
      ly(e, t, n, r);
    }
  },
  Dy = class extends My {
    constructor() {
      super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (hi.has(t)) {
        let n = Df(t);
        return (n && n.default) || 0;
      }
      return (t = cy.has(t) ? t : hf(t)), e.getAttribute(t);
    }
    measureInstanceViewportBox() {
      return Me();
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return fy(e, t, n);
    }
    build(e, t, n, r) {
      Qf(e, t, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      uy(e, t, n, r);
    }
    mount(e) {
      (this.isSVGTag = Zf(e.tagName)), super.mount(e);
    }
  },
  Ay = (e, t) =>
    Gf(e)
      ? new Dy(t, { enableHardwareAcceleration: !1 })
      : new Oy(t, {
          allowProjection: e !== ri,
          enableHardwareAcceleration: !0,
        }),
  Vy = { layout: { ProjectionNode: Fy, MeasureLayout: wy } },
  mP = { ...Uf, ...py, ...Ly, ...Vy },
  Mt = iy((e, t) => dy(e, t, mP, Ay));
var vP = iy(dy);
function By() {
  let e = V(!1);
  return (
    Cr(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function bl() {
  let e = By(),
    [t, n] = St(0),
    r = fe(() => {
      e.current && n(t + 1);
    }, [t]);
  return [fe(() => G.postRender(r), [r]), t];
}
function $y(e) {
  return N(() => () => e(), []);
}
var gP = class extends ve {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (t && e.isPresent && !this.props.isPresent) {
      let n = this.props.sizeRef.current;
      (n.height = t.offsetHeight || 0),
        (n.width = t.offsetWidth || 0),
        (n.top = t.offsetTop),
        (n.left = t.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function yP({ children: e, isPresent: t }) {
  let n = ii(),
    r = V(null),
    i = V({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = A(Vn);
  return (
    qe(() => {
      let { width: s, height: a, top: l, left: c } = i.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      let u = document.createElement("style");
      return (
        o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    C(gP, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: bn(e, { ref: r }),
    })
  );
}
var ju = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  let a = rr(bP),
    l = ii(),
    c = se(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (u) => {
          a.set(u, !0);
          for (let f of a.values()) if (!f) return;
          r && r();
        },
        register: (u) => (a.set(u, !1), () => a.delete(u)),
      }),
      o ? [Math.random()] : [n]
    );
  return (
    se(() => {
      a.forEach((u, f) => a.set(f, !1));
    }, [n]),
    N(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = C(yP, { isPresent: n, children: e })),
    C(Zi.Provider, { value: c, children: e })
  );
};
function bP() {
  return new Map();
}
var li = (e) => e.key || "";
function xP(e, t) {
  e.forEach((n) => {
    let r = li(n);
    t.set(r, n);
  });
}
function SP(e) {
  let t = [];
  return (
    Fn.forEach(e, (n) => {
      Ut(n) && t.push(n);
    }),
    t
  );
}
var td = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  Xt(!i, "Replace exitBeforeEnter with mode='wait'");
  let a = A(hs).forceRender || bl()[0],
    l = By(),
    c = SP(e),
    u = c,
    f = V(new Map()).current,
    d = V(u),
    p = V(new Map()).current,
    y = V(!0);
  if (
    (Cr(() => {
      (y.current = !1), xP(c, p), (d.current = u);
    }),
    $y(() => {
      (y.current = !0), p.clear(), f.clear();
    }),
    y.current)
  )
    return C(Re, {
      children: u.map((h) =>
        C(
          ju,
          {
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: s,
            children: h,
          },
          li(h)
        )
      ),
    });
  u = [...u];
  let g = d.current.map(li),
    S = c.map(li),
    m = g.length;
  for (let h = 0; h < m; h++) {
    let v = g[h];
    S.indexOf(v) === -1 && !f.has(v) && f.set(v, void 0);
  }
  return (
    s === "wait" && f.size && (u = []),
    f.forEach((h, v) => {
      if (S.indexOf(v) !== -1) return;
      let x = p.get(v);
      if (!x) return;
      let k = g.indexOf(v),
        w = h;
      w ||
        ((w = C(
          ju,
          {
            isPresent: !1,
            onExitComplete: () => {
              f.delete(v);
              let E = Array.from(p.keys()).filter((F) => !S.includes(F));
              if (
                (E.forEach((F) => p.delete(F)),
                (d.current = c.filter((F) => {
                  let I = li(F);
                  return I === v || E.includes(I);
                })),
                !f.size)
              ) {
                if (l.current === !1) return;
                a(), r && r();
              }
            },
            custom: t,
            presenceAffectsLayout: o,
            mode: s,
            children: x,
          },
          li(x)
        )),
        f.set(v, w)),
        u.splice(k, 0, w);
    }),
    (u = u.map((h) => {
      let v = h.key;
      return f.has(v)
        ? h
        : C(
            ju,
            { isPresent: !0, presenceAffectsLayout: o, mode: s, children: h },
            li(h)
          );
    })),
    C(Re, { children: f.size ? u : u.map((h) => bn(h)) })
  );
};
function zy({ children: e, isValidProp: t, ...n }) {
  t && dg(t), (n = { ...A(Vn), ...n }), (n.isStatic = rr(() => n.isStatic));
  let r = se(
    () => n,
    [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
  );
  return C(Vn.Provider, { value: r, children: e });
}
var Ny = xe(null),
  wP = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function Uv() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(wP);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", n));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      i && (i(), t.delete(r)), n();
    },
    dirty: n,
  };
}
var Hy = (e) => e === !0,
  kP = (e) => Hy(e === !0) || e === "id",
  jy = ({ children: e, id: t, inherit: n = !0 }) => {
    let r = A(hs),
      i = A(Ny),
      [o, s] = bl(),
      a = V(null),
      l = r.id || i;
    a.current === null &&
      (kP(n) && l && (t = t ? l + "-" + t : l),
      (a.current = { id: t, group: (Hy(n) && r.group) || Uv() }));
    let c = se(() => ({ ...a.current, forceRender: o }), [s]);
    return C(hs.Provider, { value: c, children: e });
  };
function $n(e) {
  let t = rr(() => De(e)),
    { isStatic: n } = A(Vn);
  if (n) {
    let [, r] = St(e);
    N(() => t.on("change", r), []);
  }
  return t;
}
var CP = (e) => e && typeof e == "object" && e.mix,
  TP = (e) => (CP(e) ? e.mix : void 0);
function Ss(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    a = no(i, o, { mixer: TP(o[0]), ...s });
  return t ? a(r) : a;
}
function Wy(e, t) {
  let n = $n(t()),
    r = () => n.set(t());
  return (
    r(),
    Cr(() => {
      let i = () => G.preRender(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), wt(r);
      };
    }),
    n
  );
}
function EP(e) {
  (cs.current = []), e();
  let t = Wy(cs.current, e);
  return (cs.current = void 0), t;
}
function kt(e, t, n, r) {
  if (typeof e == "function") return EP(e);
  let i = typeof t == "function" ? t : Ss(t, n, r);
  return Array.isArray(e) ? Xv(e, i) : Xv([e], ([o]) => i(o));
}
function Xv(e, t) {
  let n = rr(() => []);
  return Wy(e, () => {
    n.length = 0;
    let r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
var Uy = xe(null);
function RP(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((u) => u.value === t);
  if (i === -1) return e;
  let o = r > 0 ? 1 : -1,
    s = e[i + o];
  if (!s) return e;
  let a = e[i],
    l = s.layout,
    c = Se(l.min, l.max, 0.5);
  return (o === 1 && a.layout.max + n > c) || (o === -1 && a.layout.min + n < c)
    ? SE(e, i, i + o)
    : e;
}
function PP(
  { children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o },
  s
) {
  let a = rr(() => Mt(t)),
    l = [],
    c = V(!1);
  Xt(!!i, "Reorder.Group must be provided a values prop");
  let u = {
    axis: n,
    registerItem: (f, d) => {
      let p = l.findIndex((y) => f === y.value);
      p !== -1 ? (l[p].layout = d[n]) : l.push({ value: f, layout: d[n] }),
        l.sort(IP);
    },
    updateOrder: (f, d, p) => {
      if (c.current) return;
      let y = RP(l, f, d, p);
      l !== y &&
        ((c.current = !0), r(y.map(_P).filter((g) => i.indexOf(g) !== -1)));
    },
  };
  return (
    N(() => {
      c.current = !1;
    }),
    C(a, {
      ...o,
      ref: s,
      ignoreStrict: !0,
      children: C(Uy.Provider, { value: u, children: e }),
    })
  );
}
var MB = We(PP);
function _P(e) {
  return e.value;
}
function IP(e, t) {
  return e.layout.min - t.layout.min;
}
function Yv(e, t = 0) {
  return Ce(e) ? e : $n(t);
}
function FP(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = "li",
    onDrag: i,
    layout: o = !0,
    ...s
  },
  a
) {
  let l = rr(() => Mt(r)),
    c = A(Uy),
    u = { x: Yv(t.x), y: Yv(t.y) },
    f = kt([u.x, u.y], ([g, S]) => (g || S ? 1 : "unset"));
  Xt(!!c, "Reorder.Item must be a child of Reorder.Group");
  let { axis: d, registerItem: p, updateOrder: y } = c;
  return C(l, {
    drag: d,
    ...s,
    dragSnapToOrigin: !0,
    style: { ...t, x: u.x, y: u.y, zIndex: f },
    layout: o,
    onDrag: (g, S) => {
      let { velocity: m } = S;
      m[d] && y(n, u[d].get(), m[d]), i && i(g, S);
    },
    onLayoutMeasure: (g) => p(n, g),
    ref: a,
    ignoreStrict: !0,
    children: e,
  });
}
var AB = We(FP);
var Xy = { renderer: Ay, ...Uf, ...py },
  LP = { ...Xy, ...Ly, ...Vy };
function nd(e, t = {}) {
  let { isStatic: n } = A(Vn),
    r = V(null),
    i = $n(Ce(e) ? e.get() : e),
    o = V(i.get()),
    s = V(() => {}),
    a = () => {
      let c = r.current;
      c && c.time === 0 && c.sample(Oe.delta),
        l(),
        (r.current = Of({
          keyframes: [i.get(), o.current],
          velocity: i.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: s.current,
        }));
    },
    l = () => {
      r.current && r.current.stop();
    };
  return (
    qe(
      () =>
        i.attach(
          (c, u) =>
            n ? u(c) : ((o.current = c), (s.current = u), G.update(a), i.get()),
          l
        ),
      [JSON.stringify(t)]
    ),
    Cr(() => {
      if (Ce(e)) return e.on("change", (c) => i.set(parseFloat(c)));
    }, [i]),
    i
  );
}
function xl(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t &&
      (Xt(!!t.current, "Scope provided, but no element detected."),
      (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
var Ga = new WeakMap(),
  xr;
function MP(e, t) {
  if (t) {
    let { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function OP({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Ga.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return MP(e, n);
        },
      });
    });
}
function DP(e) {
  e.forEach(OP);
}
function AP() {
  typeof ResizeObserver > "u" || (xr = new ResizeObserver(DP));
}
function VP(e, t) {
  xr || AP();
  let n = xl(e);
  return (
    n.forEach((r) => {
      let i = Ga.get(r);
      i || ((i = new Set()), Ga.set(r, i)), i.add(t), xr?.observe(r);
    }),
    () => {
      n.forEach((r) => {
        let i = Ga.get(r);
        i?.delete(t), i?.size || xr?.unobserve(r);
      });
    }
  );
}
var Ka = new Set(),
  ds;
function BP() {
  (ds = () => {
    let e = { width: O.innerWidth, height: O.innerHeight },
      t = { target: O, size: e, contentSize: e };
    Ka.forEach((n) => n(t));
  }),
    O.addEventListener("resize", ds);
}
function $P(e) {
  return (
    Ka.add(e),
    ds || BP(),
    () => {
      Ka.delete(e), !Ka.size && ds && (ds = void 0);
    }
  );
}
function zP(e, t) {
  return typeof e == "function" ? $P(e) : VP(e, t);
}
var NP = 50,
  Gv = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  HP = () => ({ time: 0, x: Gv(), y: Gv() }),
  jP = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Kv(e, t, n, r) {
  let i = n[t],
    { length: o, position: s } = jP[t],
    a = i.current,
    l = n.time;
  (i.current = e[`scroll${s}`]),
    (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = kr(0, i.scrollLength, i.current));
  let c = r - l;
  i.velocity = c > NP ? 0 : kf(i.current - a, c);
}
function WP(e, t, n) {
  Kv(e, "x", t, n), Kv(e, "y", t, n), (t.time = n);
}
function UP(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      let i = r.getBoundingClientRect();
      r = r.parentElement;
      let o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      let { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        a = r.parentNode;
      for (; !s; ) a.tagName === "svg" && (s = a), (a = r.parentNode);
      r = s;
    } else break;
  return n;
}
var XP = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  lf = { start: 0, center: 0.5, end: 1 };
function qv(e, t, n = 0) {
  let r = 0;
  if ((e in lf && (e = lf[e]), typeof e == "string")) {
    let i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
var YP = [0, 0];
function GP(e, t, n, r) {
  let i = Array.isArray(e) ? e : YP,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, lf[e] ? e : "0"])),
    (o = qv(i[0], n, r)),
    (s = qv(i[1], t)),
    o - s
  );
}
var KP = { x: 0, y: 0 };
function qP(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function QP(e, t, n) {
  let { offset: r = XP.All } = n,
    { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    a = i !== e ? UP(i, e) : KP,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : qP(i),
    c = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let u = !t[o].interpolate,
    f = r.length;
  for (let d = 0; d < f; d++) {
    let p = GP(r[d], c[s], l[s], a[o]);
    !u && p !== t[o].interpolatorOffsets[d] && (u = !0), (t[o].offset[d] = p);
  }
  u &&
    ((t[o].interpolate = no(t[o].offset, Mf(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function ZP(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function JP(e, t, n, r = {}) {
  return {
    measure: () => ZP(e, r.target, n),
    update: (i) => {
      WP(e, n, i), (r.offset || r.target) && QP(e, n, r);
    },
    notify: () => t(n),
  };
}
var is = new WeakMap(),
  Qv = new WeakMap(),
  Wu = new WeakMap(),
  Zv = (e) => (e === document.documentElement ? O : e);
function ro(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Wu.get(t);
  r || ((r = new Set()), Wu.set(t, r));
  let i = HP(),
    o = JP(t, e, i, n);
  if ((r.add(o), !is.has(t))) {
    let a = () => {
        for (let d of r) d.measure();
      },
      l = () => {
        for (let d of r) d.update(Oe.timestamp);
      },
      c = () => {
        for (let d of r) d.notify();
      },
      u = () => {
        G.read(a, !1, !0), G.read(l, !1, !0), G.update(c, !1, !0);
      };
    is.set(t, u);
    let f = Zv(t);
    O.addEventListener("resize", u, { passive: !0 }),
      t !== document.documentElement && Qv.set(t, zP(t, u)),
      f.addEventListener("scroll", u, { passive: !0 });
  }
  let s = is.get(t);
  return (
    G.read(s, !1, !0),
    () => {
      var a;
      wt(s);
      let l = Wu.get(t);
      if (!l || (l.delete(o), l.size)) return;
      let c = is.get(t);
      is.delete(t),
        c &&
          (Zv(t).removeEventListener("scroll", c),
          (a = Qv.get(t)) === null || a === void 0 || a(),
          O.removeEventListener("resize", c));
    }
  );
}
function Jv(e, t) {
  Ji(
    !!(!t || t.current),
    `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
  );
}
var e_ = () => ({
  scrollX: De(0),
  scrollY: De(0),
  scrollXProgress: De(0),
  scrollYProgress: De(0),
});
function Yy({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  let i = rr(e_);
  return (
    (n ? Cr : N)(
      () => (
        Jv("target", t),
        Jv("container", e),
        ro(
          ({ x: s, y: a }) => {
            i.scrollX.set(s.current),
              i.scrollXProgress.set(s.progress),
              i.scrollY.set(a.current),
              i.scrollYProgress.set(a.progress);
          },
          {
            ...r,
            container: e?.current || void 0,
            target: t?.current || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
function t_(e) {
  let t = V(0),
    { isStatic: n } = A(Vn);
  N(() => {
    if (n) return;
    let r = ({ timestamp: i, delta: o }) => {
      t.current || (t.current = i), e(i - t.current, o);
    };
    return G.update(r, !0), () => wt(r);
  }, [e]);
}
function Gy() {
  !Yf.current && ny();
  let [e] = St(nl.current);
  return e;
}
function pi() {
  let e = Gy(),
    { reducedMotion: t } = A(Vn);
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function n_(e) {
  e.values.forEach((t) => t.stop());
}
function cf(e, t) {
  [...t].reverse().forEach((r) => {
    let i = e.getVariant(r);
    i && Hf(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((o) => {
          cf(o, t);
        });
  });
}
function r_(e, t) {
  if (Array.isArray(t)) return cf(e, t);
  if (typeof t == "string") return cf(e, [t]);
  Hf(e, t);
}
function Ky() {
  let e = !1,
    t = new Set(),
    n = {
      subscribe(r) {
        return t.add(r), () => void t.delete(r);
      },
      start(r, i) {
        Xt(
          e,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
        );
        let o = [];
        return (
          t.forEach((s) => {
            o.push(Wf(s, r, { transitionOverride: i }));
          }),
          Promise.all(o)
        );
      },
      set(r) {
        return (
          Xt(
            e,
            "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
          ),
          t.forEach((i) => {
            r_(i, r);
          })
        );
      },
      stop() {
        t.forEach((r) => {
          n_(r);
        });
      },
      mount() {
        return (
          (e = !0),
          () => {
            (e = !1), n.stop();
          }
        );
      },
    };
  return n;
}
var qy = (e, t, n) => {
  let r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function i_(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function o_(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = Ry(e)
      ? new Dy(t, { enableHardwareAcceleration: !1 })
      : new Oy(t, { enableHardwareAcceleration: !0 });
  n.mount(e), nr.set(e, n);
}
function s_(e, t = 100) {
  let n = xs({ keyframes: [0, t], ...e }),
    r = Math.min(Bg(n), Qu);
  return {
    type: "keyframes",
    ease: (i) => n.next(r * i).value / t,
    duration: An(r),
  };
}
function eg(e, t, n, r) {
  var i;
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? n
    : (i = r.get(t)) !== null && i !== void 0
    ? i
    : e;
}
function a_(e, t) {
  return Dg(e) ? e[qy(0, e.length, t)] : e;
}
function l_(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (vl(e, i), r--);
  }
}
function c_(e, t, n, r, i, o) {
  l_(e, i, o);
  for (let s = 0; s < t.length; s++)
    e.push({ value: t[s], at: Se(i, o, r[s]), easing: a_(n, s) });
}
function u_(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
      ? -1
      : 0
    : e.at - t.at;
}
var f_ = "easeInOut";
function d_(e, { defaultTransition: t = {}, ...n } = {}, r) {
  let i = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    a = {},
    l = new Map(),
    c = 0,
    u = 0,
    f = 0;
  for (let d = 0; d < e.length; d++) {
    let p = e[d];
    if (typeof p == "string") {
      l.set(p, u);
      continue;
    } else if (!Array.isArray(p)) {
      l.set(p.name, eg(u, p.at, c, l));
      continue;
    }
    let [y, g, S = {}] = p;
    S.at !== void 0 && (u = eg(u, S.at, c, l));
    let m = 0,
      h = (v, x, k, w = 0, T = 0) => {
        let E = h_(v),
          { delay: F = 0, times: I = Mf(E), type: D = "keyframes", ...$ } = x,
          { ease: J = t.ease || "easeOut", duration: Z } = x,
          B = typeof F == "function" ? F(w, T) : F,
          j = E.length;
        if (j <= 2 && D === "spring") {
          let re = 100;
          if (j === 2 && v_(E)) {
            let de = E[1] - E[0];
            re = Math.abs(de);
          }
          let ie = { ...$ };
          Z !== void 0 && (ie.duration = Dn(Z));
          let be = s_(ie, re);
          (J = be.ease), (Z = be.duration);
        }
        Z ?? (Z = i);
        let te = u + B,
          ne = te + Z;
        I.length === 1 && I[0] === 0 && (I[1] = 1);
        let U = I.length - E.length;
        U > 0 && Ag(I, U),
          E.length === 1 && E.unshift(null),
          c_(k, E, J, I, te, ne),
          (m = Math.max(B + Z, m)),
          (f = Math.max(ne, f));
      };
    if (Ce(y)) {
      let v = tg(y, s);
      h(g, S, ng("default", v));
    } else {
      let v = xl(y, r, a),
        x = v.length;
      for (let k = 0; k < x; k++) {
        (g = g), (S = S);
        let w = v[k],
          T = tg(w, s);
        for (let E in g) h(g[E], p_(S, E), ng(E, T), k, x);
      }
    }
    (c = u), (u += m);
  }
  return (
    s.forEach((d, p) => {
      for (let y in d) {
        let g = d[y];
        g.sort(u_);
        let S = [],
          m = [],
          h = [];
        for (let x = 0; x < g.length; x++) {
          let { at: k, value: w, easing: T } = g[x];
          S.push(w), m.push(kr(0, f, k)), h.push(T || "easeOut");
        }
        m[0] !== 0 && (m.unshift(0), S.unshift(S[0]), h.unshift(f_)),
          m[m.length - 1] !== 1 && (m.push(1), S.push(null)),
          o.has(p) || o.set(p, { keyframes: {}, transition: {} });
        let v = o.get(p);
        (v.keyframes[y] = S),
          (v.transition[y] = { ...t, duration: f, ease: h, times: m, ...n });
      }
    }),
    o
  );
}
function tg(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function ng(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function h_(e) {
  return Array.isArray(e) ? e : [e];
}
function p_(e, t) {
  return e[t] ? { ...e, ...e[t] } : { ...e };
}
var m_ = (e) => typeof e == "number",
  v_ = (e) => e.every(m_);
function Qy(e, t, n, r) {
  let i = xl(e, r),
    o = i.length;
  Xt(!!o, "No valid element provided.");
  let s = [];
  for (let a = 0; a < o; a++) {
    let l = i[a];
    nr.has(l) || o_(l);
    let c = nr.get(l),
      u = { ...n };
    typeof u.delay == "function" && (u.delay = u.delay(a, o)),
      s.push(...jf(c, { ...t, transition: u }, {}));
  }
  return new zf(s);
}
var g_ = (e) => Array.isArray(e) && Array.isArray(e[0]);
function y_(e, t, n) {
  let r = [];
  return (
    d_(e, t, n).forEach(({ keyframes: o, transition: s }, a) => {
      let l;
      Ce(a) ? (l = ed(a, o.default, s.default)) : (l = Qy(a, o, s)), r.push(l);
    }),
    new zf(r)
  );
}
var Zy = (e) => {
    function t(n, r, i) {
      let o;
      return (
        g_(n)
          ? (o = y_(n, r, e))
          : i_(r)
          ? (o = Qy(n, r, i, e))
          : (o = ed(n, r, i)),
        e && e.animations.push(o),
        o
      );
    }
    return t;
  },
  io = Zy();
function Jy() {
  let e = rr(Ky);
  return Cr(e.mount, []), e;
}
var e0 = Jy;
var b_ = { some: 0, all: 1 };
function t0(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  let o = xl(e),
    s = new WeakMap(),
    a = (c) => {
      c.forEach((u) => {
        let f = s.get(u.target);
        if (u.isIntersecting !== !!f)
          if (u.isIntersecting) {
            let d = t(u);
            typeof d == "function" ? s.set(u.target, d) : l.unobserve(u.target);
          } else f && (f(u), s.delete(u.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : b_[i],
    });
  return o.forEach((c) => l.observe(c)), () => l.disconnect();
}
function x_(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  let [o, s] = St(!1);
  return (
    N(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        l = { root: (t && t.current) || void 0, margin: n, amount: r };
      return t0(e.current, a, l);
    }, [t, e, n, i, r]),
    o
  );
}
function rd(e) {
  return e !== null && typeof e == "object" && gf in e;
}
function n0(e) {
  if (rd(e)) return e[gf];
}
function id() {
  return S_;
}
function S_(e) {
  fi.current &&
    ((fi.current.isUpdating = !1), fi.current.blockUpdate(), e && e());
}
function r0() {
  let [e, t] = bl(),
    n = id(),
    r = V();
  return (
    N(() => {
      G.postRender(() =>
        G.postRender(() => {
          t === r.current && (Ja.current = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        (Ja.current = !0), e(), i(), (r.current = t + 1);
      });
    }
  );
}
function i0() {
  return fe(() => {
    let t = fi.current;
    t && t.resetTree();
  }, []);
}
var rg = () => ({});
var KB = ul({ scrapeMotionValuesFromProps: rg, createRenderState: rg });
var w_ = G,
  k_ = os.reduce((e, t) => ((e[t] = (n) => wt(n)), e), {});
var iF = {};
Eu(iF, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => XI,
  createPortal: () => YI,
  createRoot: () => GI,
  default: () => S1,
  findDOMNode: () => KI,
  flushSync: () => qI,
  hydrate: () => QI,
  hydrateRoot: () => ZI,
  render: () => JI,
  unmountComponentAtNode: () => eF,
  unstable_batchedUpdates: () => tF,
  unstable_renderSubtreeIntoContainer: () => nF,
  version: () => rF,
});
var El = {};
Eu(El, {
  default: () => q,
  unstable_IdlePriority: () => E_,
  unstable_ImmediatePriority: () => R_,
  unstable_LowPriority: () => P_,
  unstable_NormalPriority: () => __,
  unstable_Profiling: () => I_,
  unstable_UserBlockingPriority: () => F_,
  unstable_cancelCallback: () => L_,
  unstable_continueExecution: () => M_,
  unstable_forceFrameRate: () => O_,
  unstable_getCurrentPriorityLevel: () => D_,
  unstable_getFirstCallbackNode: () => A_,
  unstable_next: () => V_,
  unstable_now: () => T_,
  unstable_pauseExecution: () => B_,
  unstable_requestPaint: () => $_,
  unstable_runWithPriority: () => z_,
  unstable_scheduleCallback: () => N_,
  unstable_shouldYield: () => H_,
  unstable_wrapCallback: () => j_,
});
var q = {};
function ld(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; 0 < n; ) {
    var r = (n - 1) >>> 1,
      i = e[r];
    if (!(0 < Sl(i, t))) break e;
    (e[r] = t), (e[n] = i), (n = r);
  }
}
function xn(e) {
  return e.length === 0 ? null : e[0];
}
function kl(e) {
  if (e.length === 0) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
      var s = 2 * (r + 1) - 1,
        a = e[s],
        l = s + 1,
        c = e[l];
      if (0 > Sl(a, n))
        l < i && 0 > Sl(c, a)
          ? ((e[r] = c), (e[l] = n), (r = l))
          : ((e[r] = a), (e[s] = n), (r = s));
      else {
        if (!(l < i && 0 > Sl(c, n))) break e;
        (e[r] = c), (e[l] = n), (r = l);
      }
    }
  }
  return t;
}
function Sl(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return n !== 0 ? n : e.id - t.id;
}
typeof performance == "object" && typeof performance.now == "function"
  ? ((o0 = performance),
    (q.unstable_now = function () {
      return o0.now();
    }))
  : ((od = Date),
    (s0 = od.now()),
    (q.unstable_now = function () {
      return od.now() - s0;
    }));
var o0,
  od,
  s0,
  zn = [],
  Er = [],
  C_ = 1,
  cn = null,
  dt = 3,
  Cl = !1,
  mi = !1,
  ks = !1,
  c0 = typeof setTimeout == "function" ? setTimeout : null,
  u0 = typeof clearTimeout == "function" ? clearTimeout : null,
  a0 = typeof setImmediate < "u" ? setImmediate : null;
typeof Le < "u" &&
  Le.scheduling !== void 0 &&
  Le.scheduling.isInputPending !== void 0 &&
  Le.scheduling.isInputPending.bind(Le.scheduling);
function cd(e) {
  for (var t = xn(Er); t !== null; ) {
    if (t.callback === null) kl(Er);
    else {
      if (!(t.startTime <= e)) break;
      kl(Er), (t.sortIndex = t.expirationTime), ld(zn, t);
    }
    t = xn(Er);
  }
}
function ud(e) {
  if (((ks = !1), cd(e), !mi))
    if (xn(zn) !== null) (mi = !0), dd(fd);
    else {
      var t = xn(Er);
      t !== null && hd(ud, t.startTime - e);
    }
}
function fd(e, t) {
  (mi = !1), ks && ((ks = !1), u0(Cs), (Cs = -1)), (Cl = !0);
  var n = dt;
  try {
    for (
      cd(t), cn = xn(zn);
      cn !== null && (!(cn.expirationTime > t) || (e && !h0()));

    ) {
      var r = cn.callback;
      if (typeof r == "function") {
        (cn.callback = null), (dt = cn.priorityLevel);
        var i = r(cn.expirationTime <= t);
        (t = q.unstable_now()),
          typeof i == "function" ? (cn.callback = i) : cn === xn(zn) && kl(zn),
          cd(t);
      } else kl(zn);
      cn = xn(zn);
    }
    if (cn !== null) var o = !0;
    else {
      var s = xn(Er);
      s !== null && hd(ud, s.startTime - t), (o = !1);
    }
    return o;
  } finally {
    (cn = null), (dt = n), (Cl = !1);
  }
}
var Tl = !1,
  wl = null,
  Cs = -1,
  f0 = 5,
  d0 = -1;
function h0() {
  return !(q.unstable_now() - d0 < f0);
}
function sd() {
  if (wl !== null) {
    var e = q.unstable_now();
    d0 = e;
    var t = !0;
    try {
      t = wl(!0, e);
    } finally {
      t ? ws() : ((Tl = !1), (wl = null));
    }
  } else Tl = !1;
}
var ws;
typeof a0 == "function"
  ? (ws = function () {
      a0(sd);
    })
  : typeof MessageChannel < "u"
  ? ((ad = new MessageChannel()),
    (l0 = ad.port2),
    (ad.port1.onmessage = sd),
    (ws = function () {
      l0.postMessage(null);
    }))
  : (ws = function () {
      c0(sd, 0);
    });
var ad, l0;
function dd(e) {
  (wl = e), Tl || ((Tl = !0), ws());
}
function hd(e, t) {
  Cs = c0(function () {
    e(q.unstable_now());
  }, t);
}
q.unstable_IdlePriority = 5;
q.unstable_ImmediatePriority = 1;
q.unstable_LowPriority = 4;
q.unstable_NormalPriority = 3;
q.unstable_Profiling = null;
q.unstable_UserBlockingPriority = 2;
q.unstable_cancelCallback = function (e) {
  e.callback = null;
};
q.unstable_continueExecution = function () {
  mi || Cl || ((mi = !0), dd(fd));
};
q.unstable_forceFrameRate = function (e) {
  0 > e || 125 < e
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (f0 = 0 < e ? Math.floor(1e3 / e) : 5);
};
q.unstable_getCurrentPriorityLevel = function () {
  return dt;
};
q.unstable_getFirstCallbackNode = function () {
  return xn(zn);
};
q.unstable_next = function (e) {
  switch (dt) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = dt;
  }
  var n = dt;
  dt = t;
  try {
    return e();
  } finally {
    dt = n;
  }
};
q.unstable_pauseExecution = function () {};
q.unstable_requestPaint = function () {};
q.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var n = dt;
  dt = e;
  try {
    return t();
  } finally {
    dt = n;
  }
};
q.unstable_scheduleCallback = function (e, t, n) {
  var r = q.unstable_now();
  switch (
    (typeof n == "object" && n !== null
      ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
      : (n = r),
    e)
  ) {
    case 1:
      var i = -1;
      break;
    case 2:
      i = 250;
      break;
    case 5:
      i = 1073741823;
      break;
    case 4:
      i = 1e4;
      break;
    default:
      i = 5e3;
  }
  return (
    (i = n + i),
    (e = {
      id: C_++,
      callback: t,
      priorityLevel: e,
      startTime: n,
      expirationTime: i,
      sortIndex: -1,
    }),
    n > r
      ? ((e.sortIndex = n),
        ld(Er, e),
        xn(zn) === null &&
          e === xn(Er) &&
          (ks ? (u0(Cs), (Cs = -1)) : (ks = !0), hd(ud, n - r)))
      : ((e.sortIndex = i), ld(zn, e), mi || Cl || ((mi = !0), dd(fd))),
    e
  );
};
q.unstable_shouldYield = h0;
q.unstable_wrapCallback = function (e) {
  var t = dt;
  return function () {
    var n = dt;
    dt = t;
    try {
      return e.apply(this, arguments);
    } finally {
      dt = n;
    }
  };
};
var T_ = q.unstable_now,
  E_ = q.unstable_IdlePriority,
  R_ = q.unstable_ImmediatePriority,
  P_ = q.unstable_LowPriority,
  __ = q.unstable_NormalPriority,
  I_ = q.unstable_Profiling,
  F_ = q.unstable_UserBlockingPriority,
  L_ = q.unstable_cancelCallback,
  M_ = q.unstable_continueExecution,
  O_ = q.unstable_forceFrameRate,
  D_ = q.unstable_getCurrentPriorityLevel,
  A_ = q.unstable_getFirstCallbackNode,
  V_ = q.unstable_next,
  B_ = q.unstable_pauseExecution,
  $_ = q.unstable_requestPaint,
  z_ = q.unstable_runWithPriority,
  N_ = q.unstable_scheduleCallback,
  H_ = q.unstable_shouldYield,
  j_ = q.unstable_wrapCallback;
var W_ = "default" in It ? b : It,
  U_ = "default" in El ? q : El,
  Qt = {},
  xb = W_,
  qt = U_;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Sb = new Set(),
  Xs = {};
function Pi(e, t) {
  Eo(e, t), Eo(e + "Capture", t);
}
function Eo(e, t) {
  for (Xs[e] = t, e = 0; e < t.length; e++) Sb.add(t[e]);
}
var cr = !(
    typeof O > "u" ||
    typeof O.document > "u" ||
    typeof O.document.createElement > "u"
  ),
  Ad = Object.prototype.hasOwnProperty,
  X_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  p0 = {},
  m0 = {};
function Y_(e) {
  return Ad.call(m0, e)
    ? !0
    : Ad.call(p0, e)
    ? !1
    : X_.test(e)
    ? (m0[e] = !0)
    : ((p0[e] = !0), !1);
}
function G_(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function K_(e, t, n, r) {
  if (t === null || typeof t > "u" || G_(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Et(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var at = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    at[e] = new Et(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  at[t] = new Et(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  at[e] = new Et(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  at[e] = new Et(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    at[e] = new Et(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  at[e] = new Et(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  at[e] = new Et(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  at[e] = new Et(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  at[e] = new Et(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rh = /[\-:]([a-z])/g;
function Ph(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rh, Ph);
    at[t] = new Et(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Rh, Ph);
    at[t] = new Et(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Rh, Ph);
  at[t] = new Et(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  at[e] = new Et(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
at.xlinkHref = new Et(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  at[e] = new Et(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _h(e, t, n, r) {
  var i = at.hasOwnProperty(t) ? at[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (K_(t, n, i, r) && (n = null),
    r || i === null
      ? Y_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? i.type !== 3 && "" : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var hr = xb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Rl = Symbol.for("react.element"),
  ao = Symbol.for("react.portal"),
  lo = Symbol.for("react.fragment"),
  Ih = Symbol.for("react.strict_mode"),
  Vd = Symbol.for("react.profiler"),
  wb = Symbol.for("react.provider"),
  kb = Symbol.for("react.context"),
  Fh = Symbol.for("react.forward_ref"),
  Bd = Symbol.for("react.suspense"),
  $d = Symbol.for("react.suspense_list"),
  Lh = Symbol.for("react.memo"),
  Pr = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var Cb = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var v0 = Symbol.iterator;
function Ts(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (v0 && e[v0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pd,
  Ie = Object.assign;
function Ms(e) {
  if (pd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      pd = (t && t[1]) || "";
    }
  return (
    `
` +
    pd +
    e
  );
}
var md = !1;
function vd(e, t) {
  if (!e || md) return "";
  md = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (md = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ms(e) : "";
}
function q_(e) {
  switch (e.tag) {
    case 5:
      return Ms(e.type);
    case 16:
      return Ms("Lazy");
    case 13:
      return Ms("Suspense");
    case 19:
      return Ms("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vd(e.type, !1)), e;
    case 11:
      return (e = vd(e.type.render, !1)), e;
    case 1:
      return (e = vd(e.type, !0)), e;
    default:
      return "";
  }
}
function zd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case lo:
      return "Fragment";
    case ao:
      return "Portal";
    case Vd:
      return "Profiler";
    case Ih:
      return "StrictMode";
    case Bd:
      return "Suspense";
    case $d:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case kb:
        return (e.displayName || "Context") + ".Consumer";
      case wb:
        return (e._context.displayName || "Context") + ".Provider";
      case Fh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Lh:
        return (
          (t = e.displayName || null), t !== null ? t : zd(e.type) || "Memo"
        );
      case Pr:
        (t = e._payload), (e = e._init);
        try {
          return zd(e(t));
        } catch {}
    }
  return null;
}
function Q_(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return zd(t);
    case 8:
      return t === Ih ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Hr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Tb(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Z_(e) {
  var t = Tb(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Pl(e) {
  e._valueTracker || (e._valueTracker = Z_(e));
}
function Eb(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Tb(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n && (t.setValue(e), !0)
  );
}
function nc(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Nd(e, t) {
  var n = t.checked;
  return Ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function g0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Hr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Rb(e, t) {
  (t = t.checked), t != null && _h(e, "checked", t, !1);
}
function Hd(e, t) {
  Rb(e, t);
  var n = Hr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? jd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && jd(e, t.type, Hr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function y0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function jd(e, t, n) {
  (t === "number" && nc(e.ownerDocument) === e) ||
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Os = Array.isArray;
function xo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Hr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return Ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function b0(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Os(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Hr(n) };
}
function Pb(e, t) {
  var n = Hr(t.value),
    r = Hr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function x0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _b(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ud(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? _b(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var _l,
  Ib = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        _l = _l || document.createElement("div"),
          _l.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = _l.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ys(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  J_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vs).forEach(function (e) {
  J_.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vs[t] = Vs[e]);
  });
});
function Fb(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vs.hasOwnProperty(e) && Vs[e])
    ? ("" + t).trim()
    : t + "px";
}
function Lb(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Fb(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var e2 = Ie(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Xd(e, t) {
  if (t) {
    if (e2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Yd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Gd = null;
function Mh(e) {
  return (
    (e = e.target || e.srcElement || O),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Kd = null,
  So = null,
  wo = null;
function S0(e) {
  if ((e = fa(e))) {
    if (typeof Kd != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Ic(t)), Kd(e.stateNode, e.type, t));
  }
}
function Mb(e) {
  So ? (wo ? wo.push(e) : (wo = [e])) : (So = e);
}
function Ob() {
  if (So) {
    var e = So,
      t = wo;
    if (((wo = So = null), S0(e), t)) for (e = 0; e < t.length; e++) S0(t[e]);
  }
}
function Db(e, t) {
  return e(t);
}
function Ab() {}
var gd = !1;
function Vb(e, t, n) {
  if (gd) return e(t, n);
  gd = !0;
  try {
    return Db(e, t, n);
  } finally {
    (gd = !1), (So !== null || wo !== null) && (Ab(), Ob());
  }
}
function Gs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ic(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var qd = !1;
if (cr)
  try {
    (oo = {}),
      Object.defineProperty(oo, "passive", {
        get: function () {
          qd = !0;
        },
      }),
      O.addEventListener("test", oo, oo),
      O.removeEventListener("test", oo, oo);
  } catch {
    qd = !1;
  }
var oo;
function t2(e, t, n, r, i, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Bs = !1,
  rc = null,
  ic = !1,
  Qd = null,
  n2 = {
    onError: function (e) {
      (Bs = !0), (rc = e);
    },
  };
function r2(e, t, n, r, i, o, s, a, l) {
  (Bs = !1), (rc = null), t2.apply(n2, arguments);
}
function i2(e, t, n, r, i, o, s, a, l) {
  if ((r2.apply(this, arguments), Bs)) {
    if (!Bs) throw Error(L(198));
    var c = rc;
    (Bs = !1), (rc = null), ic || ((ic = !0), (Qd = c));
  }
}
function _i(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), 4098 & t.flags && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Bb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function w0(e) {
  if (_i(e) !== e) throw Error(L(188));
}
function o2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _i(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return w0(i), e;
        if (o === r) return w0(i), t;
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function $b(e) {
  return (e = o2(e)), e !== null ? zb(e) : null;
}
function zb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Nb = qt.unstable_scheduleCallback,
  k0 = qt.unstable_cancelCallback,
  s2 = qt.unstable_shouldYield,
  a2 = qt.unstable_requestPaint,
  ze = qt.unstable_now,
  l2 = qt.unstable_getCurrentPriorityLevel,
  Oh = qt.unstable_ImmediatePriority,
  Hb = qt.unstable_UserBlockingPriority,
  oc = qt.unstable_NormalPriority,
  c2 = qt.unstable_LowPriority,
  jb = qt.unstable_IdlePriority,
  Ec = null,
  Wn = null;
function u2(e) {
  if (Wn && typeof Wn.onCommitFiberRoot == "function")
    try {
      Wn.onCommitFiberRoot(Ec, e, void 0, (128 & e.current.flags) === 128);
    } catch {}
}
var Tn = Math.clz32 ? Math.clz32 : h2,
  f2 = Math.log,
  d2 = Math.LN2;
function h2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((f2(e) / d2) | 0)) | 0;
}
var Il = 64,
  Fl = 4194304;
function Ds(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function sc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = 268435455 & n;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Ds(a)) : ((o &= s), o !== 0 && (r = Ds(o)));
  } else (s = n & ~i), s !== 0 ? (r = Ds(s)) : o !== 0 && (r = Ds(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (4194240 & o) !== 0))
  )
    return t;
  if ((4 & r && (r |= 16 & n), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Tn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function p2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function m2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Tn(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (a & n && !(a & r)) || (i[s] = p2(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Zd(e) {
  return (
    (e = -1073741825 & e.pendingLanes),
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
  );
}
function Wb() {
  var e = Il;
  return (Il <<= 1), !(4194240 & Il) && (Il = 64), e;
}
function yd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ca(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Tn(t)),
    (e[t] = n);
}
function v2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Tn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Dh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Tn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var pe = 0;
function Ub(e) {
  return (e &= -e), 1 < e ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
}
var Xb,
  Ah,
  Yb,
  Gb,
  Kb,
  Jd = !1,
  Ll = [],
  Or = null,
  Dr = null,
  Ar = null,
  Ks = new Map(),
  qs = new Map(),
  Ir = [],
  g2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function C0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Or = null;
      break;
    case "dragenter":
    case "dragleave":
      Dr = null;
      break;
    case "mouseover":
    case "mouseout":
      Ar = null;
      break;
    case "pointerover":
    case "pointerout":
      Ks.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qs.delete(t.pointerId);
  }
}
function Es(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = fa(t)), t !== null && Ah(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function y2(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Or = Es(Or, e, t, n, r, i)), !0;
    case "dragenter":
      return (Dr = Es(Dr, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ar = Es(Ar, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ks.set(o, Es(Ks.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), qs.set(o, Es(qs.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function qb(e) {
  var t = yi(e.target);
  if (t !== null) {
    var n = _i(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Bb(n)), t !== null)) {
          (e.blockedOn = t),
            Kb(e.priority, function () {
              Yb(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = eh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = fa(n)), t !== null && Ah(t), (e.blockedOn = n), !1;
    n = e.nativeEvent;
    var r = new n.constructor(n.type, n);
    (Gd = r), n.target.dispatchEvent(r), (Gd = null), t.shift();
  }
  return !0;
}
function T0(e, t, n) {
  Xl(e) && n.delete(t);
}
function b2() {
  (Jd = !1),
    Or !== null && Xl(Or) && (Or = null),
    Dr !== null && Xl(Dr) && (Dr = null),
    Ar !== null && Xl(Ar) && (Ar = null),
    Ks.forEach(T0),
    qs.forEach(T0);
}
function Rs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Jd ||
      ((Jd = !0),
      qt.unstable_scheduleCallback(qt.unstable_NormalPriority, b2)));
}
function Qs(e) {
  function t(i) {
    return Rs(i, e);
  }
  if (0 < Ll.length) {
    Rs(Ll[0], e);
    for (var n = 1; n < Ll.length; n++) {
      var r = Ll[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Or !== null && Rs(Or, e),
      Dr !== null && Rs(Dr, e),
      Ar !== null && Rs(Ar, e),
      Ks.forEach(t),
      qs.forEach(t),
      n = 0;
    n < Ir.length;
    n++
  )
    (r = Ir[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ir.length && ((n = Ir[0]), n.blockedOn === null); )
    qb(n), n.blockedOn === null && Ir.shift();
}
var ko = hr.ReactCurrentBatchConfig,
  ac = !0;
function x2(e, t, n, r) {
  var i = pe,
    o = ko.transition;
  ko.transition = null;
  try {
    (pe = 1), Vh(e, t, n, r);
  } finally {
    (pe = i), (ko.transition = o);
  }
}
function S2(e, t, n, r) {
  var i = pe,
    o = ko.transition;
  ko.transition = null;
  try {
    (pe = 4), Vh(e, t, n, r);
  } finally {
    (pe = i), (ko.transition = o);
  }
}
function Vh(e, t, n, r) {
  if (ac) {
    var i = eh(e, t, n, r);
    if (i === null) Td(e, t, r, lc, n), C0(e, r);
    else if (y2(i, e, t, n, r)) r.stopPropagation();
    else if ((C0(e, r), 4 & t && -1 < g2.indexOf(e))) {
      for (; i !== null; ) {
        var o = fa(i);
        if (
          (o !== null && Xb(o),
          (o = eh(e, t, n, r)),
          o === null && Td(e, t, r, lc, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Td(e, t, r, null, n);
  }
}
var lc = null;
function eh(e, t, n, r) {
  if (((lc = null), (e = Mh(r)), (e = yi(e)), e !== null))
    if (((t = _i(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Bb(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (lc = e), null;
}
function Qb(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (l2()) {
        case Oh:
          return 1;
        case Hb:
          return 4;
        case oc:
        case c2:
          return 16;
        case jb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lr = null,
  Bh = null,
  Yl = null;
function Zb() {
  if (Yl) return Yl;
  var e,
    t,
    n = Bh,
    r = n.length,
    i = "value" in Lr ? Lr.value : Lr.textContent,
    o = i.length;
  for (e = 0; e < r && n[e] === i[e]; e++);
  var s = r - e;
  for (t = 1; t <= s && n[r - t] === i[o - t]; t++);
  return (Yl = i.slice(e, 1 < t ? 1 - t : void 0));
}
function Gl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ml() {
  return !0;
}
function E0() {
  return !1;
}
function Zt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ml
        : E0),
      (this.isPropagationStopped = E0),
      this
    );
  }
  return (
    Ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ml));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ml));
      },
      persist: function () {},
      isPersistent: Ml,
    }),
    t
  );
}
var bd,
  xd,
  Ps,
  Mo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  $h = Zt(Mo),
  ua = Ie({}, Mo, { view: 0, detail: 0 }),
  w2 = Zt(ua),
  Rc = Ie({}, ua, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ps &&
            (Ps && e.type === "mousemove"
              ? ((bd = e.screenX - Ps.screenX), (xd = e.screenY - Ps.screenY))
              : (xd = bd = 0),
            (Ps = e)),
          bd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xd;
    },
  }),
  R0 = Zt(Rc),
  k2 = Ie({}, Rc, { dataTransfer: 0 }),
  C2 = Zt(k2),
  T2 = Ie({}, ua, { relatedTarget: 0 }),
  Sd = Zt(T2),
  E2 = Ie({}, Mo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R2 = Zt(E2),
  P2 = Ie({}, Mo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : O.clipboardData;
    },
  }),
  _2 = Zt(P2),
  I2 = Ie({}, Mo, { data: 0 }),
  P0 = Zt(I2),
  F2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  L2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  M2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function O2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = M2[e]) && !!t[e];
}
function zh() {
  return O2;
}
var D2 = Ie({}, ua, {
    key: function (e) {
      if (e.key) {
        var t = F2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? L2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zh,
    charCode: function (e) {
      return e.type === "keypress" ? Gl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Gl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  A2 = Zt(D2),
  V2 = Ie({}, Rc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  _0 = Zt(V2),
  B2 = Ie({}, ua, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zh,
  }),
  $2 = Zt(B2),
  z2 = Ie({}, Mo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  N2 = Zt(z2),
  H2 = Ie({}, Rc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  j2 = Zt(H2),
  W2 = [9, 13, 27, 32],
  Nh = cr && "CompositionEvent" in O,
  $s = null;
cr && "documentMode" in document && ($s = document.documentMode);
var U2 = cr && "TextEvent" in O && !$s,
  Jb = cr && (!Nh || ($s && 8 < $s && 11 >= $s)),
  I0 = String.fromCharCode(32),
  F0 = !1;
function ex(e, t) {
  switch (e) {
    case "keyup":
      return W2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function tx(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var co = !1;
function X2(e, t) {
  switch (e) {
    case "compositionend":
      return tx(t);
    case "keypress":
      return t.which !== 32 ? null : ((F0 = !0), I0);
    case "textInput":
      return (e = t.data), e === I0 && F0 ? null : e;
    default:
      return null;
  }
}
function Y2(e, t) {
  if (co)
    return e === "compositionend" || (!Nh && ex(e, t))
      ? ((e = Zb()), (Yl = Bh = Lr = null), (co = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Jb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var G2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function L0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!G2[e.type] : t === "textarea";
}
function nx(e, t, n, r) {
  Mb(r),
    (t = cc(t, "onChange")),
    0 < t.length &&
      ((n = new $h("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zs = null,
  Zs = null;
function K2(e) {
  hx(e, 0);
}
function Pc(e) {
  var t = ho(e);
  if (Eb(t)) return e;
}
function q2(e, t) {
  if (e === "change") return t;
}
var rx = !1;
cr &&
  (cr
    ? ((Dl = "oninput" in document),
      Dl ||
        ((wd = document.createElement("div")),
        wd.setAttribute("oninput", "return;"),
        (Dl = typeof wd.oninput == "function")),
      (Ol = Dl))
    : (Ol = !1),
  (rx = Ol && (!document.documentMode || 9 < document.documentMode)));
var Ol, Dl, wd;
function M0() {
  zs && (zs.detachEvent("onpropertychange", ix), (Zs = zs = null));
}
function ix(e) {
  if (e.propertyName === "value" && Pc(Zs)) {
    var t = [];
    nx(t, Zs, e, Mh(e)), Vb(K2, t);
  }
}
function Q2(e, t, n) {
  e === "focusin"
    ? (M0(), (zs = t), (Zs = n), zs.attachEvent("onpropertychange", ix))
    : e === "focusout" && M0();
}
function Z2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pc(Zs);
}
function J2(e, t) {
  if (e === "click") return Pc(t);
}
function eI(e, t) {
  if (e === "input" || e === "change") return Pc(t);
}
function tI(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rn = typeof Object.is == "function" ? Object.is : tI;
function Js(e, t) {
  if (Rn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ad.call(t, i) || !Rn(e[i], t[i])) return !1;
  }
  return !0;
}
function O0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function D0(e, t) {
  var n = O0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = O0(n);
  }
}
function ox(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || e.nodeType !== 3) &&
        (t && t.nodeType === 3
          ? ox(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function sx() {
  for (var e = O, t = nc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (!n) break;
    (e = t.contentWindow), (t = nc(e.document));
  }
  return t;
}
function Hh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function nI(e) {
  var t = sx(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ox(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || O),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = D0(n, o));
        var s = D0(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var rI = cr && "documentMode" in document && 11 >= document.documentMode,
  uo = null,
  th = null,
  Ns = null,
  nh = !1;
function A0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nh ||
    uo == null ||
    uo !== nc(r) ||
    ((r = uo),
    "selectionStart" in r && Hh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          O
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ns && Js(Ns, r)) ||
      ((Ns = r),
      (r = cc(th, "onSelect")),
      0 < r.length &&
        ((t = new $h("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = uo))));
}
function Al(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var fo = {
    animationend: Al("Animation", "AnimationEnd"),
    animationiteration: Al("Animation", "AnimationIteration"),
    animationstart: Al("Animation", "AnimationStart"),
    transitionend: Al("Transition", "TransitionEnd"),
  },
  kd = {},
  ax = {};
cr &&
  ((ax = document.createElement("div").style),
  "AnimationEvent" in O ||
    (delete fo.animationend.animation,
    delete fo.animationiteration.animation,
    delete fo.animationstart.animation),
  "TransitionEvent" in O || delete fo.transitionend.transition);
function _c(e) {
  if (kd[e]) return kd[e];
  if (!fo[e]) return e;
  var t,
    n = fo[e];
  for (t in n) if (n.hasOwnProperty(t) && t in ax) return (kd[e] = n[t]);
  return e;
}
var lx = _c("animationend"),
  cx = _c("animationiteration"),
  ux = _c("animationstart"),
  fx = _c("transitionend"),
  dx = new Map(),
  V0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Wr(e, t) {
  dx.set(e, t), Pi(t, [e]);
}
for (Vl = 0; Vl < V0.length; Vl++)
  (Bl = V0[Vl]),
    (B0 = Bl.toLowerCase()),
    ($0 = Bl[0].toUpperCase() + Bl.slice(1)),
    Wr(B0, "on" + $0);
var Bl, B0, $0, Vl;
Wr(lx, "onAnimationEnd");
Wr(cx, "onAnimationIteration");
Wr(ux, "onAnimationStart");
Wr("dblclick", "onDoubleClick");
Wr("focusin", "onFocus");
Wr("focusout", "onBlur");
Wr(fx, "onTransitionEnd");
Eo("onMouseEnter", ["mouseout", "mouseover"]);
Eo("onMouseLeave", ["mouseout", "mouseover"]);
Eo("onPointerEnter", ["pointerout", "pointerover"]);
Eo("onPointerLeave", ["pointerout", "pointerover"]);
Pi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Pi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Pi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Pi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Pi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var As =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  iI = new Set("cancel close invalid load scroll toggle".split(" ").concat(As));
function z0(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), i2(r, t, void 0, e), (e.currentTarget = null);
}
function hx(e, t) {
  t = (4 & t) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          z0(i, a, c), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          z0(i, a, c), (o = l);
        }
    }
  }
  if (ic) throw ((e = Qd), (ic = !1), (Qd = null), e);
}
function we(e, t) {
  var n = t[ah];
  n === void 0 && (n = t[ah] = new Set());
  var r = e + "__bubble";
  n.has(r) || (px(t, e, 2, !1), n.add(r));
}
function Cd(e, t, n) {
  var r = 0;
  t && (r |= 4), px(n, e, r, t);
}
var $l = "_reactListening" + Math.random().toString(36).slice(2);
function ea(e) {
  if (!e[$l]) {
    (e[$l] = !0),
      Sb.forEach(function (n) {
        n !== "selectionchange" && (iI.has(n) || Cd(n, !1, e), Cd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$l] || ((t[$l] = !0), Cd("selectionchange", !1, t));
  }
}
function px(e, t, n, r) {
  switch (Qb(t)) {
    case 1:
      var i = x2;
      break;
    case 4:
      i = S2;
      break;
    default:
      i = Vh;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !qd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Td(e, t, n, r, i) {
  var o = r;
  if (!(1 & t) && !(2 & t) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = yi(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Vb(function () {
    var c = o,
      u = Mh(n),
      f = [];
    e: {
      var d = dx.get(e);
      if (d !== void 0) {
        var p = $h,
          y = e;
        switch (e) {
          case "keypress":
            if (Gl(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = A2;
            break;
          case "focusin":
            (y = "focus"), (p = Sd);
            break;
          case "focusout":
            (y = "blur"), (p = Sd);
            break;
          case "beforeblur":
          case "afterblur":
            p = Sd;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = R0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = C2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = $2;
            break;
          case lx:
          case cx:
          case ux:
            p = R2;
            break;
          case fx:
            p = N2;
            break;
          case "scroll":
            p = w2;
            break;
          case "wheel":
            p = j2;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = _2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = _0;
        }
        var g = (4 & t) !== 0,
          S = !g && e === "scroll",
          m = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var h, v = c; v !== null; ) {
          h = v;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              m !== null && ((x = Gs(v, m)), x != null && g.push(ta(v, x, h)))),
            S)
          )
            break;
          v = v.return;
        }
        0 < g.length &&
          ((d = new p(d, y, null, n, u)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(7 & t)) {
      if (
        ((d = e === "mouseover" || e === "pointerover"),
        (p = e === "mouseout" || e === "pointerout"),
        (!d ||
          n === Gd ||
          !(y = n.relatedTarget || n.fromElement) ||
          (!yi(y) && !y[ur])) &&
          (p || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
              ? d.defaultView || d.parentWindow
              : O),
          p
            ? ((y = n.relatedTarget || n.toElement),
              (p = c),
              (y = y ? yi(y) : null),
              y !== null &&
                ((S = _i(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((p = null), (y = c)),
          p !== y))
      ) {
        if (
          ((g = R0),
          (x = "onMouseLeave"),
          (m = "onMouseEnter"),
          (v = "mouse"),
          (e !== "pointerout" && e !== "pointerover") ||
            ((g = _0),
            (x = "onPointerLeave"),
            (m = "onPointerEnter"),
            (v = "pointer")),
          (S = p == null ? d : ho(p)),
          (h = y == null ? d : ho(y)),
          (d = new g(x, v + "leave", p, n, u)),
          (d.target = S),
          (d.relatedTarget = h),
          (x = null),
          yi(u) === c &&
            ((g = new g(m, v + "enter", y, n, u)),
            (g.target = h),
            (g.relatedTarget = S),
            (x = g)),
          (S = x),
          p && y)
        )
          e: {
            for (g = p, m = y, v = 0, h = g; h; h = so(h)) v++;
            for (h = 0, x = m; x; x = so(x)) h++;
            for (; 0 < v - h; ) (g = so(g)), v--;
            for (; 0 < h - v; ) (m = so(m)), h--;
            for (; v--; ) {
              if (g === m || (m !== null && g === m.alternate)) break e;
              (g = so(g)), (m = so(m));
            }
            g = null;
          }
        else g = null;
        p !== null && N0(f, d, p, g, !1),
          y !== null && S !== null && N0(f, S, y, g, !0);
      }
      if (
        ((d = c ? ho(c) : O),
        (p = d.nodeName && d.nodeName.toLowerCase()),
        p === "select" || (p === "input" && d.type === "file"))
      )
        var k = q2;
      else if (L0(d))
        if (rx) k = eI;
        else {
          k = Z2;
          var w = Q2;
        }
      else
        (p = d.nodeName) &&
          p.toLowerCase() === "input" &&
          (d.type === "checkbox" || d.type === "radio") &&
          (k = J2);
      switch (
        (k && (k = k(e, c))
          ? nx(f, k, n, u)
          : (w && w(e, d, c),
            e === "focusout" &&
              (w = d._wrapperState) &&
              w.controlled &&
              d.type === "number" &&
              jd(d, "number", d.value)),
        (w = c ? ho(c) : O),
        e)
      ) {
        case "focusin":
          (L0(w) || w.contentEditable === "true") &&
            ((uo = w), (th = c), (Ns = null));
          break;
        case "focusout":
          Ns = th = uo = null;
          break;
        case "mousedown":
          nh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (nh = !1), A0(f, n, u);
          break;
        case "selectionchange":
          if (rI) break;
        case "keydown":
        case "keyup":
          A0(f, n, u);
      }
      var T;
      if (Nh)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        co
          ? ex(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Jb &&
          n.locale !== "ko" &&
          (co || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && co && (T = Zb())
            : ((Lr = u),
              (Bh = "value" in Lr ? Lr.value : Lr.textContent),
              (co = !0))),
        (w = cc(c, E)),
        0 < w.length &&
          ((E = new P0(E, e, null, n, u)),
          f.push({ event: E, listeners: w }),
          T ? (E.data = T) : ((T = tx(n)), T !== null && (E.data = T)))),
        (T = U2 ? X2(e, n) : Y2(e, n)) &&
          ((c = cc(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new P0("onBeforeInput", "beforeinput", null, n, u)),
            f.push({ event: u, listeners: c }),
            (u.data = T)));
    }
    hx(f, t);
  });
}
function ta(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Gs(e, n)),
      o != null && r.unshift(ta(e, o, i)),
      (o = Gs(e, t)),
      o != null && r.push(ta(e, o, i))),
      (e = e.return);
  }
  return r;
}
function so(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function N0(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Gs(n, o)), l != null && s.unshift(ta(n, l, a)))
        : i || ((l = Gs(n, o)), l != null && s.push(ta(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var oI = /\r\n?/g,
  sI = /\u0000|\uFFFD/g;
function H0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      oI,
      `
`
    )
    .replace(sI, "");
}
function zl(e, t, n) {
  if (((t = H0(t)), H0(e) !== t && n)) throw Error(L(425));
}
function uc() {}
var rh = null,
  ih = null;
function oh(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var sh = typeof setTimeout == "function" ? setTimeout : void 0,
  aI = typeof clearTimeout == "function" ? clearTimeout : void 0,
  j0 = typeof Promise == "function" ? Promise : void 0,
  lI =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof j0 < "u"
      ? function (e) {
          return j0.resolve(null).then(e).catch(cI);
        }
      : sh;
function cI(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ed(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Qs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Qs(t);
}
function Vr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function W0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Oo = Math.random().toString(36).slice(2),
  jn = "__reactFiber$" + Oo,
  na = "__reactProps$" + Oo,
  ur = "__reactContainer$" + Oo,
  ah = "__reactEvents$" + Oo,
  uI = "__reactListeners$" + Oo,
  fI = "__reactHandles$" + Oo;
function yi(e) {
  var t = e[jn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ur] || n[jn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = W0(e); e !== null; ) {
          if ((n = e[jn])) return n;
          e = W0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fa(e) {
  return (
    (e = e[jn] || e[ur]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ho(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Ic(e) {
  return e[na] || null;
}
var lh = [],
  po = -1;
function Ur(e) {
  return { current: e };
}
function ke(e) {
  0 > po || ((e.current = lh[po]), (lh[po] = null), po--);
}
function ge(e, t) {
  po++, (lh[po] = e.current), (e.current = t);
}
var jr = {},
  vt = Ur(jr),
  At = Ur(!1),
  ki = jr;
function Ro(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    o = {};
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Vt(e) {
  return (e = e.childContextTypes), e != null;
}
function fc() {
  ke(At), ke(vt);
}
function U0(e, t, n) {
  if (vt.current !== jr) throw Error(L(168));
  ge(vt, t), ge(At, n);
}
function mx(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, Q_(e) || "Unknown", i));
  return Ie({}, n, r);
}
function dc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jr),
    (ki = vt.current),
    ge(vt, e),
    ge(At, At.current),
    !0
  );
}
function X0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = mx(e, t, ki)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ke(At),
      ke(vt),
      ge(vt, e))
    : ke(At),
    ge(At, n);
}
var or = null,
  Fc = !1,
  Rd = !1;
function vx(e) {
  or === null ? (or = [e]) : or.push(e);
}
function dI(e) {
  (Fc = !0), vx(e);
}
function Xr() {
  if (!Rd && or !== null) {
    Rd = !0;
    var e = 0,
      t = pe;
    try {
      var n = or;
      for (pe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (or = null), (Fc = !1);
    } catch (i) {
      throw (or !== null && (or = or.slice(e + 1)), Nb(Oh, Xr), i);
    } finally {
      (pe = t), (Rd = !1);
    }
  }
  return null;
}
var mo = [],
  vo = 0,
  hc = null,
  pc = 0,
  un = [],
  fn = 0,
  Ci = null,
  sr = 1,
  ar = "";
function vi(e, t) {
  (mo[vo++] = pc), (mo[vo++] = hc), (hc = e), (pc = t);
}
function gx(e, t, n) {
  (un[fn++] = sr), (un[fn++] = ar), (un[fn++] = Ci), (Ci = e);
  var r = sr;
  e = ar;
  var i = 32 - Tn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Tn(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (sr = (1 << (32 - Tn(t) + i)) | (n << i) | r),
      (ar = o + e);
  } else (sr = (1 << o) | (n << i) | r), (ar = e);
}
function jh(e) {
  e.return !== null && (vi(e, 1), gx(e, 1, 0));
}
function Wh(e) {
  for (; e === hc; )
    (hc = mo[--vo]), (mo[vo] = null), (pc = mo[--vo]), (mo[vo] = null);
  for (; e === Ci; )
    (Ci = un[--fn]),
      (un[fn] = null),
      (ar = un[--fn]),
      (un[fn] = null),
      (sr = un[--fn]),
      (un[fn] = null);
}
var Kt = null,
  Gt = null,
  Te = !1,
  Cn = null;
function yx(e, t) {
  var n = dn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Y0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null && ((e.stateNode = t), (Kt = e), (Gt = Vr(t.firstChild)), !0)
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null && ((e.stateNode = t), (Kt = e), (Gt = null), !0)
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null &&
          ((n = Ci !== null ? { id: sr, overflow: ar } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = dn(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (Kt = e),
          (Gt = null),
          !0)
      );
    default:
      return !1;
  }
}
function ch(e) {
  return (1 & e.mode) !== 0 && (128 & e.flags) === 0;
}
function uh(e) {
  if (Te) {
    var t = Gt;
    if (t) {
      var n = t;
      if (!Y0(e, t)) {
        if (ch(e)) throw Error(L(418));
        t = Vr(n.nextSibling);
        var r = Kt;
        t && Y0(e, t)
          ? yx(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (Te = !1), (Kt = e));
      }
    } else {
      if (ch(e)) throw Error(L(418));
      (e.flags = (-4097 & e.flags) | 2), (Te = !1), (Kt = e);
    }
  }
}
function G0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Kt = e;
}
function Nl(e) {
  if (e !== Kt) return !1;
  if (!Te) return G0(e), (Te = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !oh(e.type, e.memoizedProps))),
    t && (t = Gt))
  ) {
    if (ch(e)) throw (bx(), Error(L(418)));
    for (; t; ) yx(e, t), (t = Vr(t.nextSibling));
  }
  if ((G0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Gt = Vr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Gt = null;
    }
  } else Gt = Kt ? Vr(e.stateNode.nextSibling) : null;
  return !0;
}
function bx() {
  for (var e = Gt; e; ) e = Vr(e.nextSibling);
}
function Po() {
  (Gt = Kt = null), (Te = !1);
}
function Uh(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
var hI = hr.ReactCurrentBatchConfig;
function wn(e, t) {
  if (e && e.defaultProps) {
    (t = Ie({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var mc = Ur(null),
  vc = null,
  go = null,
  Xh = null;
function Yh() {
  Xh = go = vc = null;
}
function Gh(e) {
  var t = mc.current;
  ke(mc), (e._currentValue = t);
}
function fh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Co(e, t) {
  (vc = e),
    (Xh = go = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Dt = !0), (e.firstContext = null));
}
function pn(e) {
  var t = e._currentValue;
  if (Xh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), go === null)) {
      if (vc === null) throw Error(L(308));
      (go = e), (vc.dependencies = { lanes: 0, firstContext: e });
    } else go = go.next = e;
  return t;
}
var bi = null;
function Kh(e) {
  bi === null ? (bi = [e]) : bi.push(e);
}
function xx(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Kh(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    fr(e, r)
  );
}
function fr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var _r = !1;
function qh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Sx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function lr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Br(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), 2 & le)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      fr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Kh(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    fr(e, n)
  );
}
function Kl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (4194240 & n) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Dh(e, n);
  }
}
function K0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r === null || ((r = r.updateQueue), n !== r))
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  else {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
  }
}
function gc(e, t, n, r) {
  var i = e.updateQueue;
  _r = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (o = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (u = c = l = null), (a = o);
    do {
      var d = a.lane,
        p = a.eventTime;
      if ((r & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            g = a;
          switch (((d = t), (p = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                f = y.call(p, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (-65537 & y.flags) | 128;
            case 0:
              if (
                ((y = g.payload),
                (d = typeof y == "function" ? y.call(p, f, d) : y),
                d == null)
              )
                break e;
              f = Ie({}, f, d);
              break e;
            case 2:
              _r = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = p), (l = f)) : (u = u.next = p),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Ei |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function q0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var wx = new xb.Component().refs;
function dh(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lc = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && _i(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Tt(),
      i = zr(e),
      o = lr(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Br(e, o, i)),
      t !== null && (En(t, e, i, r), Kl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Tt(),
      i = zr(e),
      o = lr(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Br(e, o, i)),
      t !== null && (En(t, e, i, r), Kl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Tt(),
      r = zr(e),
      i = lr(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Br(e, i, r)),
      t !== null && (En(t, e, r, n), Kl(t, e, r));
  },
};
function Q0(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !Js(n, r) ||
        !Js(i, o)
  );
}
function kx(e, t, n) {
  var r = !1,
    i = jr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = pn(o))
      : ((i = Vt(t) ? ki : vt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ro(e, i) : jr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Lc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Z0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Lc.enqueueReplaceState(t, t.state, null);
}
function hh(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = wx), qh(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = pn(o))
    : ((o = Vt(t) ? ki : vt.current), (i.context = Ro(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (dh(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Lc.enqueueReplaceState(i, i.state, null),
      gc(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function _s(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === wx && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Hl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function J0(e) {
  var t = e._init;
  return t(e._payload);
}
function Cx(e) {
  function t(m, h) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [h]), (m.flags |= 16)) : v.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = Nr(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, h, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((m.flags |= 2), h) : v)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, v, x) {
    return h === null || h.tag !== 6
      ? ((h = Od(v, m.mode, x)), (h.return = m), h)
      : ((h = i(h, v)), (h.return = m), h);
  }
  function l(m, h, v, x) {
    var k = v.type;
    return k === lo
      ? u(m, h, v.props.children, x, v.key)
      : h !== null &&
        (h.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Pr &&
            J0(k) === h.type))
      ? ((x = i(h, v.props)), (x.ref = _s(m, h, v)), (x.return = m), x)
      : ((x = tc(v.type, v.key, v.props, null, m.mode, x)),
        (x.ref = _s(m, h, v)),
        (x.return = m),
        x);
  }
  function c(m, h, v, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = Dd(v, m.mode, x)), (h.return = m), h)
      : ((h = i(h, v.children || [])), (h.return = m), h);
  }
  function u(m, h, v, x, k) {
    return h === null || h.tag !== 7
      ? ((h = wi(v, m.mode, x, k)), (h.return = m), h)
      : ((h = i(h, v)), (h.return = m), h);
  }
  function f(m, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Od("" + h, m.mode, v)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Rl:
          return (
            (v = tc(h.type, h.key, h.props, null, m.mode, v)),
            (v.ref = _s(m, null, h)),
            (v.return = m),
            v
          );
        case ao:
          return (h = Dd(h, m.mode, v)), (h.return = m), h;
        case Pr:
          var x = h._init;
          return f(m, x(h._payload), v);
      }
      if (Os(h) || Ts(h))
        return (h = wi(h, m.mode, v, null)), (h.return = m), h;
      Hl(m, h);
    }
    return null;
  }
  function d(m, h, v, x) {
    var k = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return k !== null ? null : a(m, h, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Rl:
          return v.key === k ? l(m, h, v, x) : null;
        case ao:
          return v.key === k ? c(m, h, v, x) : null;
        case Pr:
          return (k = v._init), d(m, h, k(v._payload), x);
      }
      if (Os(v) || Ts(v)) return k !== null ? null : u(m, h, v, x, null);
      Hl(m, v);
    }
    return null;
  }
  function p(m, h, v, x, k) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(v) || null), a(h, m, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Rl:
          return (m = m.get(x.key === null ? v : x.key) || null), l(h, m, x, k);
        case ao:
          return (m = m.get(x.key === null ? v : x.key) || null), c(h, m, x, k);
        case Pr:
          var w = x._init;
          return p(m, h, v, w(x._payload), k);
      }
      if (Os(x) || Ts(x)) return (m = m.get(v) || null), u(h, m, x, k, null);
      Hl(h, x);
    }
    return null;
  }
  function y(m, h, v, x) {
    for (
      var k = null, w = null, T = h, E = (h = 0), F = null;
      T !== null && E < v.length;
      E++
    ) {
      T.index > E ? ((F = T), (T = null)) : (F = T.sibling);
      var I = d(m, T, v[E], x);
      if (I === null) {
        T === null && (T = F);
        break;
      }
      e && T && I.alternate === null && t(m, T),
        (h = o(I, h, E)),
        w === null ? (k = I) : (w.sibling = I),
        (w = I),
        (T = F);
    }
    if (E === v.length) return n(m, T), Te && vi(m, E), k;
    if (T === null) {
      for (; E < v.length; E++)
        (T = f(m, v[E], x)),
          T !== null &&
            ((h = o(T, h, E)), w === null ? (k = T) : (w.sibling = T), (w = T));
      return Te && vi(m, E), k;
    }
    for (T = r(m, T); E < v.length; E++)
      (F = p(T, m, E, v[E], x)),
        F !== null &&
          (e && F.alternate !== null && T.delete(F.key === null ? E : F.key),
          (h = o(F, h, E)),
          w === null ? (k = F) : (w.sibling = F),
          (w = F));
    return (
      e &&
        T.forEach(function (D) {
          return t(m, D);
        }),
      Te && vi(m, E),
      k
    );
  }
  function g(m, h, v, x) {
    var k = Ts(v);
    if (typeof k != "function") throw Error(L(150));
    if (((v = k.call(v)), v == null)) throw Error(L(151));
    for (
      var w = (k = null), T = h, E = (h = 0), F = null, I = v.next();
      T !== null && !I.done;
      E++, I = v.next()
    ) {
      T.index > E ? ((F = T), (T = null)) : (F = T.sibling);
      var D = d(m, T, I.value, x);
      if (D === null) {
        T === null && (T = F);
        break;
      }
      e && T && D.alternate === null && t(m, T),
        (h = o(D, h, E)),
        w === null ? (k = D) : (w.sibling = D),
        (w = D),
        (T = F);
    }
    if (I.done) return n(m, T), Te && vi(m, E), k;
    if (T === null) {
      for (; !I.done; E++, I = v.next())
        (I = f(m, I.value, x)),
          I !== null &&
            ((h = o(I, h, E)), w === null ? (k = I) : (w.sibling = I), (w = I));
      return Te && vi(m, E), k;
    }
    for (T = r(m, T); !I.done; E++, I = v.next())
      (I = p(T, m, E, I.value, x)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? E : I.key),
          (h = o(I, h, E)),
          w === null ? (k = I) : (w.sibling = I),
          (w = I));
    return (
      e &&
        T.forEach(function ($) {
          return t(m, $);
        }),
      Te && vi(m, E),
      k
    );
  }
  function S(m, h, v, x) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === lo &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Rl:
          e: {
            for (var k = v.key, w = h; w !== null; ) {
              if (w.key === k) {
                if (((k = v.type), k === lo)) {
                  if (w.tag === 7) {
                    n(m, w.sibling),
                      (h = i(w, v.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  w.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Pr &&
                    J0(k) === w.type)
                ) {
                  n(m, w.sibling),
                    (h = i(w, v.props)),
                    (h.ref = _s(m, w, v)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, w);
                break;
              }
              t(m, w), (w = w.sibling);
            }
            v.type === lo
              ? ((h = wi(v.props.children, m.mode, x, v.key)),
                (h.return = m),
                (m = h))
              : ((x = tc(v.type, v.key, v.props, null, m.mode, x)),
                (x.ref = _s(m, h, v)),
                (x.return = m),
                (m = x));
          }
          return s(m);
        case ao:
          e: {
            for (w = v.key; h !== null; ) {
              if (h.key === w) {
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(m, h.sibling),
                    (h = i(h, v.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, h);
                break;
              }
              t(m, h), (h = h.sibling);
            }
            (h = Dd(v, m.mode, x)), (h.return = m), (m = h);
          }
          return s(m);
        case Pr:
          return (w = v._init), S(m, h, w(v._payload), x);
      }
      if (Os(v)) return y(m, h, v, x);
      if (Ts(v)) return g(m, h, v, x);
      Hl(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, v)), (h.return = m), (m = h))
          : (n(m, h), (h = Od(v, m.mode, x)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return S;
}
var _o = Cx(!0),
  Tx = Cx(!1),
  da = {},
  Un = Ur(da),
  ra = Ur(da),
  ia = Ur(da);
function xi(e) {
  if (e === da) throw Error(L(174));
  return e;
}
function Qh(e, t) {
  switch ((ge(ia, t), ge(ra, e), ge(Un, da), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ud(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ud(t, e));
  }
  ke(Un), ge(Un, t);
}
function Io() {
  ke(Un), ke(ra), ke(ia);
}
function Ex(e) {
  xi(ia.current);
  var t = xi(Un.current),
    n = Ud(t, e.type);
  t !== n && (ge(ra, e), ge(Un, n));
}
function Zh(e) {
  ra.current === e && (ke(Un), ke(ra));
}
var Pe = Ur(0);
function yc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (128 & t.flags) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Pd = [];
function Jh() {
  for (var e = 0; e < Pd.length; e++)
    Pd[e]._workInProgressVersionPrimary = null;
  Pd.length = 0;
}
var ql = hr.ReactCurrentDispatcher,
  _d = hr.ReactCurrentBatchConfig,
  Ti = 0,
  _e = null,
  Ge = null,
  Qe = null,
  bc = !1,
  Hs = !1,
  oa = 0,
  pI = 0;
function ht() {
  throw Error(L(321));
}
function ep(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Rn(e[n], t[n])) return !1;
  return !0;
}
function tp(e, t, n, r, i, o) {
  if (
    ((Ti = o),
    (_e = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ql.current = e === null || e.memoizedState === null ? yI : bI),
    (e = n(r, i)),
    Hs)
  ) {
    o = 0;
    do {
      if (((Hs = !1), (oa = 0), 25 <= o)) throw Error(L(301));
      (o += 1),
        (Qe = Ge = null),
        (t.updateQueue = null),
        (ql.current = xI),
        (e = n(r, i));
    } while (Hs);
  }
  if (
    ((ql.current = xc),
    (t = Ge !== null && Ge.next !== null),
    (Ti = 0),
    (Qe = Ge = _e = null),
    (bc = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function np() {
  var e = oa !== 0;
  return (oa = 0), e;
}
function Hn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Qe === null ? (_e.memoizedState = Qe = e) : (Qe = Qe.next = e), Qe;
}
function mn() {
  if (Ge === null) {
    var e = _e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ge.next;
  var t = Qe === null ? _e.memoizedState : Qe.next;
  if (t !== null) (Qe = t), (Ge = e);
  else {
    if (e === null) throw Error(L(310));
    (Ge = e),
      (e = {
        memoizedState: Ge.memoizedState,
        baseState: Ge.baseState,
        baseQueue: Ge.baseQueue,
        queue: Ge.queue,
        next: null,
      }),
      Qe === null ? (_e.memoizedState = Qe = e) : (Qe = Qe.next = e);
  }
  return Qe;
}
function sa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Id(e) {
  var t = mn(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = Ge,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((Ti & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (_e.lanes |= u),
          (Ei |= u);
      }
      c = c.next;
    } while (c !== null && c !== o);
    l === null ? (s = r) : (l.next = a),
      Rn(r, t.memoizedState) || (Dt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (_e.lanes |= o), (Ei |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fd(e) {
  var t = mn(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Rn(o, t.memoizedState) || (Dt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Rx() {}
function Px(e, t) {
  var n = _e,
    r = mn(),
    i = t(),
    o = !Rn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Dt = !0)),
    (r = r.queue),
    rp(Fx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Qe !== null && 1 & Qe.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      aa(9, Ix.bind(null, n, r, i, t), void 0, null),
      Ze === null)
    )
      throw Error(L(349));
    30 & Ti || _x(n, t, i);
  }
  return i;
}
function _x(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ix(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Lx(t) && Mx(e);
}
function Fx(e, t, n) {
  return n(function () {
    Lx(t) && Mx(e);
  });
}
function Lx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rn(e, n);
  } catch {
    return !0;
  }
}
function Mx(e) {
  var t = fr(e, 1);
  t !== null && En(t, e, 1, -1);
}
function eb(e) {
  var t = Hn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = gI.bind(null, _e, e)),
    [t.memoizedState, e]
  );
}
function aa(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ox() {
  return mn().memoizedState;
}
function Ql(e, t, n, r) {
  var i = Hn();
  (_e.flags |= e),
    (i.memoizedState = aa(1 | t, n, void 0, r === void 0 ? null : r));
}
function Mc(e, t, n, r) {
  var i = mn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ge !== null) {
    var s = Ge.memoizedState;
    if (((o = s.destroy), r !== null && ep(r, s.deps))) {
      i.memoizedState = aa(t, n, o, r);
      return;
    }
  }
  (_e.flags |= e), (i.memoizedState = aa(1 | t, n, o, r));
}
function tb(e, t) {
  return Ql(8390656, 8, e, t);
}
function rp(e, t) {
  return Mc(2048, 8, e, t);
}
function Dx(e, t) {
  return Mc(4, 2, e, t);
}
function Ax(e, t) {
  return Mc(4, 4, e, t);
}
function Vx(e, t) {
  return typeof t == "function"
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : t != null
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function Bx(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Mc(4, 4, Vx.bind(null, t, e), n)
  );
}
function ip() {}
function $x(e, t) {
  var n = mn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ep(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function zx(e, t) {
  var n = mn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ep(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nx(e, t, n) {
  return 21 & Ti
    ? (Rn(n, t) || ((n = Wb()), (_e.lanes |= n), (Ei |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Dt = !0)), (e.memoizedState = n));
}
function mI(e, t) {
  var n = pe;
  (pe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = _d.transition;
  _d.transition = {};
  try {
    e(!1), t();
  } finally {
    (pe = n), (_d.transition = r);
  }
}
function Hx() {
  return mn().memoizedState;
}
function vI(e, t, n) {
  var r = zr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    jx(e))
  )
    Wx(t, n);
  else if (((n = xx(e, t, n, r)), n !== null)) {
    var i = Tt();
    En(n, e, r, i), Ux(n, t, r);
  }
}
function gI(e, t, n) {
  var r = zr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jx(e)) Wx(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Rn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Kh(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {}
    (n = xx(e, t, i, r)),
      n !== null && ((i = Tt()), En(n, e, r, i), Ux(n, t, r));
  }
}
function jx(e) {
  var t = e.alternate;
  return e === _e || (t !== null && t === _e);
}
function Wx(e, t) {
  Hs = bc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ux(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Dh(e, n);
  }
}
var xc = {
    readContext: pn,
    useCallback: ht,
    useContext: ht,
    useEffect: ht,
    useImperativeHandle: ht,
    useInsertionEffect: ht,
    useLayoutEffect: ht,
    useMemo: ht,
    useReducer: ht,
    useRef: ht,
    useState: ht,
    useDebugValue: ht,
    useDeferredValue: ht,
    useTransition: ht,
    useMutableSource: ht,
    useSyncExternalStore: ht,
    useId: ht,
    unstable_isNewReconciler: !1,
  },
  yI = {
    readContext: pn,
    useCallback: function (e, t) {
      return (Hn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: pn,
    useEffect: tb,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ql(4194308, 4, Vx.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ql(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ql(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Hn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Hn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = vI.bind(null, _e, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Hn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: eb,
    useDebugValue: ip,
    useDeferredValue: function (e) {
      return (Hn().memoizedState = e);
    },
    useTransition: function () {
      var e = eb(!1),
        t = e[0];
      return (e = mI.bind(null, e[1])), (Hn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = _e,
        i = Hn();
      if (Te) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Ze === null)) throw Error(L(349));
        30 & Ti || _x(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        tb(Fx.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        aa(9, Ix.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Hn(),
        t = Ze.identifierPrefix;
      if (Te) {
        var n = ar,
          r = sr;
        (n = (r & ~(1 << (32 - Tn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = oa++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = pI++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  bI = {
    readContext: pn,
    useCallback: $x,
    useContext: pn,
    useEffect: rp,
    useImperativeHandle: Bx,
    useInsertionEffect: Dx,
    useLayoutEffect: Ax,
    useMemo: zx,
    useReducer: Id,
    useRef: Ox,
    useState: function () {
      return Id(sa);
    },
    useDebugValue: ip,
    useDeferredValue: function (e) {
      var t = mn();
      return Nx(t, Ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Id(sa)[0],
        t = mn().memoizedState;
      return [e, t];
    },
    useMutableSource: Rx,
    useSyncExternalStore: Px,
    useId: Hx,
    unstable_isNewReconciler: !1,
  },
  xI = {
    readContext: pn,
    useCallback: $x,
    useContext: pn,
    useEffect: rp,
    useImperativeHandle: Bx,
    useInsertionEffect: Dx,
    useLayoutEffect: Ax,
    useMemo: zx,
    useReducer: Fd,
    useRef: Ox,
    useState: function () {
      return Fd(sa);
    },
    useDebugValue: ip,
    useDeferredValue: function (e) {
      var t = mn();
      return Ge === null ? (t.memoizedState = e) : Nx(t, Ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Fd(sa)[0],
        t = mn().memoizedState;
      return [e, t];
    },
    useMutableSource: Rx,
    useSyncExternalStore: Px,
    useId: Hx,
    unstable_isNewReconciler: !1,
  };
function Fo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += q_(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ld(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ph(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var SI = typeof WeakMap == "function" ? WeakMap : Map;
function Xx(e, t, n) {
  (n = lr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wc || ((wc = !0), (kh = r)), ph(e, t);
    }),
    n
  );
}
function Yx(e, t, n) {
  (n = lr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ph(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ph(e, t),
          typeof r != "function" &&
            ($r === null ? ($r = new Set([this])) : $r.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function nb(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new SI();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = DI.bind(null, e, t, n)), t.then(e, e));
}
function rb(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ib(e, t, n, r, i) {
  return 1 & e.mode
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = lr(-1, 1)), (t.tag = 2), Br(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var wI = hr.ReactCurrentOwner,
  Dt = !1;
function Ct(e, t, n, r) {
  t.child = e === null ? Tx(t, null, n, r) : _o(t, e.child, n, r);
}
function ob(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Co(t, i),
    (r = tp(e, t, n, r, o, i)),
    (n = np()),
    e !== null && !Dt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dr(e, t, i))
      : (Te && n && jh(t), (t.flags |= 1), Ct(e, t, r, i), t.child)
  );
}
function sb(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !dp(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Gx(e, t, o, r, i))
      : ((e = tc(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Js), n(s, r) && e.ref === t.ref)
    )
      return dr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Nr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Gx(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Js(o, r) && e.ref === t.ref) {
      if (((Dt = !1), (t.pendingProps = r = o), (e.lanes & i) === 0))
        return (t.lanes = e.lanes), dr(e, t, i);
      131072 & e.flags && (Dt = !0);
    }
  }
  return mh(e, t, n, r, i);
}
function Kx(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ge(bo, Yt),
        (Yt |= n);
    else {
      if (!(1073741824 & n))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ge(bo, Yt),
          (Yt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ge(bo, Yt),
        (Yt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ge(bo, Yt),
      (Yt |= r);
  return Ct(e, t, i, n), t.child;
}
function qx(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function mh(e, t, n, r, i) {
  var o = Vt(n) ? ki : vt.current;
  return (
    (o = Ro(t, o)),
    Co(t, i),
    (n = tp(e, t, n, r, o, i)),
    (r = np()),
    e !== null && !Dt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dr(e, t, i))
      : (Te && r && jh(t), (t.flags |= 1), Ct(e, t, n, i), t.child)
  );
}
function ab(e, t, n, r, i) {
  if (Vt(n)) {
    var o = !0;
    dc(t);
  } else o = !1;
  if ((Co(t, i), t.stateNode === null))
    Zl(e, t), kx(t, n, r), hh(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = pn(c))
      : ((c = Vt(n) ? ki : vt.current), (c = Ro(t, c)));
    var u = n.getDerivedStateFromProps,
      f =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && Z0(t, s, r, c)),
      (_r = !1);
    var d = t.memoizedState;
    (s.state = d),
      gc(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || At.current || _r
        ? (typeof u == "function" && (dh(t, n, u, r), (l = t.memoizedState)),
          (a = _r || Q0(t, n, a, r, d, l, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Sx(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : wn(t.type, a)),
      (s.props = c),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = pn(l))
        : ((l = Vt(n) ? ki : vt.current), (l = Ro(t, l)));
    var p = n.getDerivedStateFromProps;
    (u =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Z0(t, s, r, l)),
      (_r = !1),
      (d = t.memoizedState),
      (s.state = d),
      gc(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || At.current || _r
      ? (typeof p == "function" && (dh(t, n, p, r), (y = t.memoizedState)),
        (c = _r || Q0(t, n, c, r, d, y, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vh(e, t, n, r, o, i);
}
function vh(e, t, n, r, i, o) {
  qx(e, t);
  var s = (128 & t.flags) !== 0;
  if (!r && !s) return i && X0(t, n, !1), dr(e, t, o);
  (r = t.stateNode), (wI.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = _o(t, e.child, null, o)), (t.child = _o(t, null, a, o)))
      : Ct(e, t, a, o),
    (t.memoizedState = r.state),
    i && X0(t, n, !0),
    t.child
  );
}
function Qx(e) {
  var t = e.stateNode;
  t.pendingContext
    ? U0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && U0(e, t.context, !1),
    Qh(e, t.containerInfo);
}
function lb(e, t, n, r, i) {
  return Po(), Uh(i), (t.flags |= 256), Ct(e, t, n, r), t.child;
}
var gh = { dehydrated: null, treeContext: null, retryLane: 0 };
function yh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zx(e, t, n) {
  var r,
    i = t.pendingProps,
    o = Pe.current,
    s = !1,
    a = (128 & t.flags) !== 0;
  if (
    ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0),
    r
      ? ((s = !0), (t.flags &= -129))
      : (e !== null && e.memoizedState === null) || (o |= 1),
    ge(Pe, 1 & o),
    e === null)
  )
    return (
      uh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (1 & t.mode
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(1 & i) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Ac(a, i, 0, null)),
              (e = wi(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = yh(n)),
              (t.memoizedState = gh),
              e)
            : op(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((r = o.dehydrated), r !== null)))
    return kI(e, t, a, i, r, o, n);
  if (s) {
    (s = i.fallback), (a = t.mode), (o = e.child), (r = o.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(1 & a) && t.child !== o
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = Nr(o, l)), (i.subtreeFlags = 14680064 & o.subtreeFlags)),
      r !== null ? (s = Nr(r, s)) : ((s = wi(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? yh(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = gh),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = Nr(s, { mode: "visible", children: i.children })),
    !(1 & t.mode) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function op(e, t) {
  return (
    (t = Ac({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jl(e, t, n, r) {
  return (
    r !== null && Uh(r),
    _o(t, e.child, null, n),
    (e = op(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function kI(e, t, n, r, i, o, s) {
  if (n)
    return 256 & t.flags
      ? ((t.flags &= -257), (r = Ld(Error(L(422)))), jl(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ac({ mode: "visible", children: r.children }, i, 0, null)),
        (o = wi(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        1 & t.mode && _o(t, e.child, null, s),
        (t.child.memoizedState = yh(s)),
        (t.memoizedState = gh),
        o);
  if (!(1 & t.mode)) return jl(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(L(419))), (r = Ld(o, r, void 0)), jl(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Dt || a)) {
    if (((r = Ze), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), fr(e, i), En(r, e, i, -1));
    }
    return fp(), (r = Ld(Error(L(421)))), jl(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = AI.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Gt = Vr(i.nextSibling)),
      (Kt = t),
      (Te = !0),
      (Cn = null),
      e !== null &&
        ((un[fn++] = sr),
        (un[fn++] = ar),
        (un[fn++] = Ci),
        (sr = e.id),
        (ar = e.overflow),
        (Ci = t)),
      (t = op(t, r.children)),
      (t.flags |= 4096),
      t);
}
function cb(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fh(e.return, t, n);
}
function Md(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Jx(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ct(e, t, r.children, n), (r = Pe.current), 2 & r))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (e !== null && 128 & e.flags)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cb(e, n, t);
        else if (e.tag === 19) cb(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ge(Pe, r), !(1 & t.mode))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && yc(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Md(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && yc(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Md(t, !0, n, null, o);
        break;
      case "together":
        Md(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zl(e, t) {
  !(1 & t.mode) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ei |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Nr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Nr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function CI(e, t, n) {
  switch (t.tag) {
    case 3:
      Qx(t), Po();
      break;
    case 5:
      Ex(t);
      break;
    case 1:
      Vt(t.type) && dc(t);
      break;
    case 4:
      Qh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ge(mc, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ge(Pe, 1 & Pe.current), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Zx(e, t, n)
          : (ge(Pe, 1 & Pe.current),
            (e = dr(e, t, n)),
            e !== null ? e.sibling : null);
      ge(Pe, 1 & Pe.current);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), 128 & e.flags)) {
        if (r) return Jx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ge(Pe, Pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Kx(e, t, n);
  }
  return dr(e, t, n);
}
var e1, bh, t1, n1;
e1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
bh = function () {};
t1 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), xi(Un.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Nd(e, i)), (r = Nd(e, r)), (o = []);
        break;
      case "select":
        (i = Ie({}, i, { value: void 0 })),
          (r = Ie({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Wd(e, i)), (r = Wd(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = uc);
    }
    Xd(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Xs.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i?.[c]),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Xs.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && we("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
n1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Is(e, t) {
  if (!Te)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function TI(e, t, n) {
  var r = t.pendingProps;
  switch ((Wh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pt(t), null;
    case 1:
      return Vt(t.type) && fc(), pt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Io(),
        ke(At),
        ke(vt),
        Jh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e !== null && e.child !== null) ||
          (Nl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), Cn !== null && (Eh(Cn), (Cn = null)))),
        bh(e, t),
        pt(t),
        null
      );
    case 5:
      Zh(t);
      var i = xi(ia.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        t1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return pt(t), null;
        }
        if (((e = xi(Un.current)), Nl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[jn] = t), (r[na] = o), (e = (1 & t.mode) !== 0), n)) {
            case "dialog":
              we("cancel", r), we("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              we("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < As.length; i++) we(As[i], r);
              break;
            case "source":
              we("error", r);
              break;
            case "img":
            case "image":
            case "link":
              we("error", r), we("load", r);
              break;
            case "details":
              we("toggle", r);
              break;
            case "input":
              g0(r, o), we("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                we("invalid", r);
              break;
            case "textarea":
              b0(r, o), we("invalid", r);
          }
          Xd(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      zl(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      zl(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Xs.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  we("scroll", r);
            }
          switch (n) {
            case "input":
              Pl(r), y0(r, o, !0);
              break;
            case "textarea":
              Pl(r), x0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = uc);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = _b(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[jn] = t),
            (e[na] = r),
            e1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Yd(n, r)), n)) {
              case "dialog":
                we("cancel", e), we("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < As.length; i++) we(As[i], e);
                i = r;
                break;
              case "source":
                we("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                we("error", e), we("load", e), (i = r);
                break;
              case "details":
                we("toggle", e), (i = r);
                break;
              case "input":
                g0(e, r), (i = Nd(e, r)), we("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ie({}, r, { value: void 0 })),
                  we("invalid", e);
                break;
              case "textarea":
                b0(e, r), (i = Wd(e, r)), we("invalid", e);
                break;
              default:
                i = r;
            }
            Xd(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Lb(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Ib(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ys(e, l)
                    : typeof l == "number" && Ys(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Xs.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && we("scroll", e)
                      : l != null && _h(e, o, l, s));
              }
            switch (n) {
              case "input":
                Pl(e), y0(e, r, !1);
                break;
              case "textarea":
                Pl(e), x0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Hr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? xo(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      xo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = uc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pt(t), null;
    case 6:
      if (e && t.stateNode != null) n1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = xi(ia.current)), xi(Un.current), Nl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[jn] = t),
            (o = r.nodeValue !== n) && ((e = Kt), e !== null))
          )
            switch (e.tag) {
              case 3:
                zl(r.nodeValue, n, (1 & e.mode) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zl(r.nodeValue, n, (1 & e.mode) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[jn] = t),
            (t.stateNode = r);
      }
      return pt(t), null;
    case 13:
      if (
        (ke(Pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Te && Gt !== null && 1 & t.mode && !(128 & t.flags))
          bx(), Po(), (t.flags |= 98560), (o = !1);
        else if (((o = Nl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(L(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(L(317));
            o[jn] = t;
          } else
            Po(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
          pt(t), (o = !1);
        } else Cn !== null && (Eh(Cn), (Cn = null)), (o = !0);
        if (!o) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            1 & t.mode &&
              (e === null || 1 & Pe.current ? Ke === 0 && (Ke = 3) : fp())),
          t.updateQueue !== null && (t.flags |= 4),
          pt(t),
          null);
    case 4:
      return (
        Io(), bh(e, t), e === null && ea(t.stateNode.containerInfo), pt(t), null
      );
    case 10:
      return Gh(t.type._context), pt(t), null;
    case 17:
      return Vt(t.type) && fc(), pt(t), null;
    case 19:
      if ((ke(Pe), (o = t.memoizedState), o === null)) return pt(t), null;
      if (((r = (128 & t.flags) !== 0), (s = o.rendering), s === null))
        if (r) Is(o, !1);
        else {
          if (Ke !== 0 || (e !== null && 128 & e.flags))
            for (e = t.child; e !== null; ) {
              if (((s = yc(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Is(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ge(Pe, (1 & Pe.current) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ze() > Lo &&
            ((t.flags |= 128), (r = !0), Is(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = yc(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Is(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Te)
            )
              return pt(t), null;
          } else
            2 * ze() - o.renderingStartTime > Lo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Is(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ze()),
          (t.sibling = null),
          (n = Pe.current),
          ge(Pe, r ? (1 & n) | 2 : 1 & n),
          t)
        : (pt(t), null);
    case 22:
    case 23:
      return (
        up(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && 1 & t.mode
          ? 1073741824 & Yt && (pt(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : pt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function EI(e, t) {
  switch ((Wh(t), t.tag)) {
    case 1:
      return (
        Vt(t.type) && fc(),
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        Io(),
        ke(At),
        ke(vt),
        Jh(),
        (e = t.flags),
        65536 & e && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 5:
      return Zh(t), null;
    case 13:
      if (
        (ke(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Po();
      }
      return (
        (e = t.flags), 65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 19:
      return ke(Pe), null;
    case 4:
      return Io(), null;
    case 10:
      return Gh(t.type._context), null;
    case 22:
    case 23:
      return up(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wl = !1,
  mt = !1,
  RI = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function yo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ae(e, t, r);
      }
    else n.current = null;
}
function r1(e, t, n) {
  try {
    n();
  } catch (r) {
    Ae(e, t, r);
  }
}
var ub = !1;
function PI(e, t) {
  if (((rh = ac), (e = sx()), Hh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || O;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (d = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++c === i && (a = s),
                d === o && ++u === r && (l = s),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ih = { focusedElem: e, selectionRange: n }, ac = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (1028 & t.subtreeFlags) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var y = t.alternate;
          if (1024 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    S = y.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : wn(t.type, g),
                      S
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (x) {
          Ae(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (y = ub), (ub = !1), y;
}
function js(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && r1(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Oc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function i1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), i1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[jn], delete t[na], delete t[ah], delete t[uI], delete t[fI])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function o1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fb(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || o1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (2 & e.flags || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function Sh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = uc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sh(e, t, n), e = e.sibling; e !== null; ) Sh(e, t, n), (e = e.sibling);
}
function wh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wh(e, t, n), e = e.sibling; e !== null; ) wh(e, t, n), (e = e.sibling);
}
var ot = null,
  kn = !1;
function Rr(e, t, n) {
  for (n = n.child; n !== null; ) s1(e, t, n), (n = n.sibling);
}
function s1(e, t, n) {
  if (Wn && typeof Wn.onCommitFiberUnmount == "function")
    try {
      Wn.onCommitFiberUnmount(Ec, n);
    } catch {}
  switch (n.tag) {
    case 5:
      mt || yo(n, t);
    case 6:
      var r = ot,
        i = kn;
      (ot = null),
        Rr(e, t, n),
        (ot = r),
        (kn = i),
        ot !== null &&
          (kn
            ? ((e = ot),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ot.removeChild(n.stateNode));
      break;
    case 18:
      ot !== null &&
        (kn
          ? ((e = ot),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ed(e.parentNode, n)
              : e.nodeType === 1 && Ed(e, n),
            Qs(e))
          : Ed(ot, n.stateNode));
      break;
    case 4:
      (r = ot),
        (i = kn),
        (ot = n.stateNode.containerInfo),
        (kn = !0),
        Rr(e, t, n),
        (ot = r),
        (kn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !mt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (2 & o || 4 & o) && r1(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Rr(e, t, n);
      break;
    case 1:
      if (
        !mt &&
        (yo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ae(n, t, a);
        }
      Rr(e, t, n);
      break;
    case 21:
      Rr(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((mt = (r = mt) || n.memoizedState !== null), Rr(e, t, n), (mt = r))
        : Rr(e, t, n);
      break;
    default:
      Rr(e, t, n);
  }
}
function db(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new RI()),
      t.forEach(function (r) {
        var i = VI.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Sn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ot = a.stateNode), (kn = !1);
              break e;
            case 3:
              (ot = a.stateNode.containerInfo), (kn = !0);
              break e;
            case 4:
              (ot = a.stateNode.containerInfo), (kn = !0);
              break e;
          }
          a = a.return;
        }
        if (ot === null) throw Error(L(160));
        s1(o, s, i), (ot = null), (kn = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        Ae(i, t, c);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null; ) a1(t, e), (t = t.sibling);
}
function a1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Sn(t, e), Nn(e), 4 & r)) {
        try {
          js(3, e, e.return), Oc(3, e);
        } catch (g) {
          Ae(e, e.return, g);
        }
        try {
          js(5, e, e.return);
        } catch (g) {
          Ae(e, e.return, g);
        }
      }
      break;
    case 1:
      Sn(t, e), Nn(e), 512 & r && n !== null && yo(n, n.return);
      break;
    case 5:
      if (
        (Sn(t, e),
        Nn(e),
        512 & r && n !== null && yo(n, n.return),
        32 & e.flags)
      ) {
        var i = e.stateNode;
        try {
          Ys(i, "");
        } catch (g) {
          Ae(e, e.return, g);
        }
      }
      if (4 & r && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Rb(i, o),
              Yd(a, s);
            var c = Yd(a, o);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                f = l[s + 1];
              u === "style"
                ? Lb(i, f)
                : u === "dangerouslySetInnerHTML"
                ? Ib(i, f)
                : u === "children"
                ? Ys(i, f)
                : _h(i, u, f, c);
            }
            switch (a) {
              case "input":
                Hd(i, o);
                break;
              case "textarea":
                Pb(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? xo(i, !!o.multiple, p, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? xo(i, !!o.multiple, o.defaultValue, !0)
                      : xo(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[na] = o;
          } catch (g) {
            Ae(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Sn(t, e), Nn(e), 4 & r)) {
        if (e.stateNode === null) throw Error(L(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          Ae(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Sn(t, e), Nn(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qs(t.containerInfo);
        } catch (g) {
          Ae(e, e.return, g);
        }
      break;
    case 4:
      Sn(t, e), Nn(e);
      break;
    case 13:
      Sn(t, e),
        Nn(e),
        (i = e.child),
        8192 & i.flags &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (lp = ze())),
        4 & r && db(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        1 & e.mode ? ((mt = (c = mt) || u), Sn(t, e), (mt = c)) : Sn(t, e),
        Nn(e),
        8192 & r)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && 1 & e.mode)
        )
          for (z = e, u = e.child; u !== null; ) {
            for (f = z = u; z !== null; ) {
              switch (((d = z), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  js(4, d, d.return);
                  break;
                case 1:
                  yo(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      Ae(r, n, g);
                    }
                  }
                  break;
                case 5:
                  yo(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    pb(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (z = p)) : pb(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Fb("display", s)));
              } catch (g) {
                Ae(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (g) {
                Ae(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), (f = f.return);
          }
          u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Sn(t, e), Nn(e), 4 & r && db(e);
      break;
    case 21:
      break;
    default:
      Sn(t, e), Nn(e);
  }
}
function Nn(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (o1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          32 & r.flags && (Ys(i, ""), (r.flags &= -33));
          var o = fb(e);
          wh(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = fb(e);
          Sh(e, a, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      Ae(e, e.return, l);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function _I(e, t, n) {
  (z = e), l1(e, t, n);
}
function l1(e, t, n) {
  for (var r = (1 & e.mode) !== 0; z !== null; ) {
    var i = z,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Wl;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || mt;
        a = Wl;
        var c = mt;
        if (((Wl = s), (mt = l) && !c))
          for (z = i; z !== null; )
            (s = z),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? mb(i)
                : l !== null
                ? ((l.return = s), (z = l))
                : mb(i);
        for (; o !== null; ) (z = o), l1(o, t, n), (o = o.sibling);
        (z = i), (Wl = a), (mt = c);
      }
      hb(e, t, n);
    } else
      8772 & i.subtreeFlags && o !== null
        ? ((o.return = i), (z = o))
        : hb(e, t, n);
  }
}
function hb(e) {
  for (; z !== null; ) {
    var t = z;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              mt || Oc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !mt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && q0(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                q0(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && 4 & t.flags) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && Qs(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        mt || (512 & t.flags && xh(t));
      } catch (d) {
        Ae(t, t.return, d);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function pb(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function mb(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Oc(4, t);
          } catch (l) {
            Ae(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ae(t, i, l);
            }
          }
          var o = t.return;
          try {
            xh(t);
          } catch (l) {
            Ae(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            xh(t);
          } catch (l) {
            Ae(t, s, l);
          }
      }
    } catch (l) {
      Ae(t, t.return, l);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var II = Math.ceil,
  Sc = hr.ReactCurrentDispatcher,
  sp = hr.ReactCurrentOwner,
  hn = hr.ReactCurrentBatchConfig,
  le = 0,
  Ze = null,
  Ue = null,
  st = 0,
  Yt = 0,
  bo = Ur(0),
  Ke = 0,
  la = null,
  Ei = 0,
  Dc = 0,
  ap = 0,
  Ws = null,
  Ot = null,
  lp = 0,
  Lo = 1 / 0,
  ir = null,
  wc = !1,
  kh = null,
  $r = null,
  Ul = !1,
  Mr = null,
  kc = 0,
  Us = 0,
  Ch = null,
  Jl = -1,
  ec = 0;
function Tt() {
  return 6 & le ? ze() : Jl !== -1 ? Jl : (Jl = ze());
}
function zr(e) {
  return 1 & e.mode
    ? 2 & le && st !== 0
      ? st & -st
      : hI.transition !== null
      ? (ec === 0 && (ec = Wb()), ec)
      : ((e = pe),
        e !== 0 || ((e = O.event), (e = e === void 0 ? 16 : Qb(e.type))),
        e)
    : 1;
}
function En(e, t, n, r) {
  if (50 < Us) throw ((Us = 0), (Ch = null), Error(L(185)));
  ca(e, n, r),
    (2 & le && e === Ze) ||
      (e === Ze && (!(2 & le) && (Dc |= n), Ke === 4 && Fr(e, st)),
      Bt(e, r),
      n === 1 && le === 0 && !(1 & t.mode) && ((Lo = ze() + 500), Fc && Xr()));
}
function Bt(e, t) {
  var n = e.callbackNode;
  m2(e, t);
  var r = sc(e, e === Ze ? st : 0);
  if (r === 0)
    n !== null && k0(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && k0(n), t === 1))
      e.tag === 0 ? dI(vb.bind(null, e)) : vx(vb.bind(null, e)),
        lI(function () {
          !(6 & le) && Xr();
        }),
        (n = null);
    else {
      switch (Ub(r)) {
        case 1:
          n = Oh;
          break;
        case 4:
          n = Hb;
          break;
        case 16:
          n = oc;
          break;
        case 536870912:
          n = jb;
          break;
        default:
          n = oc;
      }
      n = v1(n, c1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function c1(e, t) {
  if (((Jl = -1), (ec = 0), 6 & le)) throw Error(L(327));
  var n = e.callbackNode;
  if (To() && e.callbackNode !== n) return null;
  var r = sc(e, e === Ze ? st : 0);
  if (r === 0) return null;
  if (30 & r || r & e.expiredLanes || t) t = Cc(e, r);
  else {
    t = r;
    var i = le;
    le |= 2;
    var o = f1();
    (Ze === e && st === t) || ((ir = null), (Lo = ze() + 500), Si(e, t));
    do
      try {
        MI();
        break;
      } catch (a) {
        u1(e, a);
      }
    while (1);
    Yh(),
      (Sc.current = o),
      (le = i),
      Ue !== null ? (t = 0) : ((Ze = null), (st = 0), (t = Ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Zd(e)), i !== 0 && ((r = i), (t = Th(e, i)))), t === 1)
    )
      throw ((n = la), Si(e, 0), Fr(e, r), Bt(e, ze()), n);
    if (t === 6) Fr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(30 & r) &&
          !FI(i) &&
          ((t = Cc(e, r)),
          t === 2 && ((o = Zd(e)), o !== 0 && ((r = o), (t = Th(e, o)))),
          t === 1))
      )
        throw ((n = la), Si(e, 0), Fr(e, r), Bt(e, ze()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          gi(e, Ot, ir);
          break;
        case 3:
          if (
            (Fr(e, r), (130023424 & r) === r && ((t = lp + 500 - ze()), 10 < t))
          ) {
            if (sc(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Tt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = sh(gi.bind(null, e, Ot, ir), t);
            break;
          }
          gi(e, Ot, ir);
          break;
        case 4:
          if ((Fr(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Tn(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ze() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * II(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = sh(gi.bind(null, e, Ot, ir), r);
            break;
          }
          gi(e, Ot, ir);
          break;
        case 5:
          gi(e, Ot, ir);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Bt(e, ze()), e.callbackNode === n ? c1.bind(null, e) : null;
}
function Th(e, t) {
  var n = Ws;
  return (
    e.current.memoizedState.isDehydrated && (Si(e, t).flags |= 256),
    (e = Cc(e, t)),
    e !== 2 && ((t = Ot), (Ot = n), t !== null && Eh(t)),
    e
  );
}
function Eh(e) {
  Ot === null ? (Ot = e) : Ot.push.apply(Ot, e);
}
function FI(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Rn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), 16384 & t.subtreeFlags && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Fr(e, t) {
  for (
    t &= ~ap,
      t &= ~Dc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Tn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function vb(e) {
  if (6 & le) throw Error(L(327));
  To();
  var t = sc(e, 0);
  if (!(1 & t)) return Bt(e, ze()), null;
  var n = Cc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zd(e);
    r !== 0 && ((t = r), (n = Th(e, r)));
  }
  if (n === 1) throw ((n = la), Si(e, 0), Fr(e, t), Bt(e, ze()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    gi(e, Ot, ir),
    Bt(e, ze()),
    null
  );
}
function cp(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    (le = n), le === 0 && ((Lo = ze() + 500), Fc && Xr());
  }
}
function Ri(e) {
  Mr !== null && Mr.tag === 0 && !(6 & le) && To();
  var t = le;
  le |= 1;
  var n = hn.transition,
    r = pe;
  try {
    if (((hn.transition = null), (pe = 1), e)) return e();
  } finally {
    (pe = r), (hn.transition = n), (le = t), !(6 & le) && Xr();
  }
}
function up() {
  (Yt = bo.current), ke(bo);
}
function Si(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), aI(n)), Ue !== null))
    for (n = Ue.return; n !== null; ) {
      var r = n;
      switch ((Wh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && fc();
          break;
        case 3:
          Io(), ke(At), ke(vt), Jh();
          break;
        case 5:
          Zh(r);
          break;
        case 4:
          Io();
          break;
        case 13:
          ke(Pe);
          break;
        case 19:
          ke(Pe);
          break;
        case 10:
          Gh(r.type._context);
          break;
        case 22:
        case 23:
          up();
      }
      n = n.return;
    }
  if (
    ((Ze = e),
    (Ue = e = Nr(e.current, null)),
    (st = Yt = t),
    (Ke = 0),
    (la = null),
    (ap = Dc = Ei = 0),
    (Ot = Ws = null),
    bi !== null)
  ) {
    for (t = 0; t < bi.length; t++)
      if (((n = bi[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    bi = null;
  }
  return e;
}
function u1(e, t) {
  do {
    var n = Ue;
    try {
      if ((Yh(), (ql.current = xc), bc)) {
        for (var r = _e.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        bc = !1;
      }
      if (
        ((Ti = 0),
        (Qe = Ge = _e = null),
        (Hs = !1),
        (oa = 0),
        (sp.current = null),
        n === null || n.return === null)
      ) {
        (Ke = 1), (la = t), (Ue = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = st),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            f = u.tag;
          if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var p = rb(s);
          if (p !== null) {
            (p.flags &= -257),
              ib(p, s, a, o, t),
              1 & p.mode && nb(o, c, t),
              (t = p),
              (l = c);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else y.add(l);
            break e;
          }
          if (!(1 & t)) {
            nb(o, c, t), fp();
            break e;
          }
          l = Error(L(426));
        } else if (Te && 1 & a.mode) {
          var S = rb(s);
          if (S !== null) {
            !(65536 & S.flags) && (S.flags |= 256),
              ib(S, s, a, o, t),
              Uh(Fo(l, a));
            break e;
          }
        }
        (o = l = Fo(l, a)),
          Ke !== 4 && (Ke = 2),
          Ws === null ? (Ws = [o]) : Ws.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Xx(o, l, t);
              K0(o, m);
              break e;
            case 1:
              a = l;
              var h = o.type,
                v = o.stateNode;
              if (
                !(128 & o.flags) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    ($r === null || !$r.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Yx(o, a, t);
                K0(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      h1(n);
    } catch (k) {
      (t = k), Ue === n && n !== null && (Ue = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function f1() {
  var e = Sc.current;
  return (Sc.current = xc), e === null ? xc : e;
}
function fp() {
  (Ke !== 0 && Ke !== 3 && Ke !== 2) || (Ke = 4),
    Ze === null || (!(268435455 & Ei) && !(268435455 & Dc)) || Fr(Ze, st);
}
function Cc(e, t) {
  var n = le;
  le |= 2;
  var r = f1();
  (Ze === e && st === t) || ((ir = null), Si(e, t));
  do
    try {
      LI();
      break;
    } catch (i) {
      u1(e, i);
    }
  while (1);
  if ((Yh(), (le = n), (Sc.current = r), Ue !== null)) throw Error(L(261));
  return (Ze = null), (st = 0), Ke;
}
function LI() {
  for (; Ue !== null; ) d1(Ue);
}
function MI() {
  for (; Ue !== null && !s2(); ) d1(Ue);
}
function d1(e) {
  var t = m1(e.alternate, e, Yt);
  (e.memoizedProps = e.pendingProps),
    t === null ? h1(e) : (Ue = t),
    (sp.current = null);
}
function h1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 32768 & t.flags)) {
      if (((n = EI(n, t)), n !== null)) {
        (n.flags &= 32767), (Ue = n);
        return;
      }
      if (e === null) {
        (Ke = 6), (Ue = null);
        return;
      }
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    } else if (((n = TI(n, t, Yt)), n !== null)) {
      Ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ue = t;
      return;
    }
    Ue = t = e;
  } while (t !== null);
  Ke === 0 && (Ke = 5);
}
function gi(e, t, n) {
  var r = pe,
    i = hn.transition;
  try {
    (hn.transition = null), (pe = 1), OI(e, t, n, r);
  } finally {
    (hn.transition = i), (pe = r);
  }
  return null;
}
function OI(e, t, n, r) {
  do To();
  while (Mr !== null);
  if (6 & le) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (v2(e, o),
    e === Ze && ((Ue = Ze = null), (st = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      Ul ||
      ((Ul = !0),
      v1(oc, function () {
        return To(), null;
      })),
    (o = (15990 & n.flags) !== 0),
    15990 & n.subtreeFlags || o)
  ) {
    (o = hn.transition), (hn.transition = null);
    var s = pe;
    pe = 1;
    var a = le;
    (le |= 4),
      (sp.current = null),
      PI(e, n),
      a1(n, e),
      nI(ih),
      (ac = !!rh),
      (ih = rh = null),
      (e.current = n),
      _I(n, e, i),
      a2(),
      (le = a),
      (pe = s),
      (hn.transition = o);
  } else e.current = n;
  if (
    (Ul && ((Ul = !1), (Mr = e), (kc = i)),
    (o = e.pendingLanes),
    o === 0 && ($r = null),
    u2(n.stateNode, r),
    Bt(e, ze()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (wc) throw ((wc = !1), (e = kh), (kh = null), e);
  return (
    1 & kc && e.tag !== 0 && To(),
    (o = e.pendingLanes),
    1 & o ? (e === Ch ? Us++ : ((Us = 0), (Ch = e))) : (Us = 0),
    Xr(),
    null
  );
}
function To() {
  if (Mr !== null) {
    var e = Ub(kc),
      t = hn.transition,
      n = pe;
    try {
      if (((hn.transition = null), (pe = 16 > e ? 16 : e), Mr === null))
        var r = !1;
      else {
        if (((e = Mr), (Mr = null), (kc = 0), 6 & le)) throw Error(L(331));
        var i = le;
        for (le |= 4, z = e.current; z !== null; ) {
          var o = z,
            s = o.child;
          if (16 & z.flags) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (z = c; z !== null; ) {
                  var u = z;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      js(8, u, o);
                  }
                  var f = u.child;
                  if (f !== null) (f.return = u), (z = f);
                  else
                    for (; z !== null; ) {
                      u = z;
                      var d = u.sibling,
                        p = u.return;
                      if ((i1(u), u === c)) {
                        z = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), (z = d);
                        break;
                      }
                      z = p;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              z = o;
            }
          }
          if (2064 & o.subtreeFlags && s !== null) (s.return = o), (z = s);
          else
            e: for (; z !== null; ) {
              if (((o = z), 2048 & o.flags))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    js(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (z = m);
                break e;
              }
              z = o.return;
            }
        }
        var h = e.current;
        for (z = h; z !== null; ) {
          s = z;
          var v = s.child;
          if (2064 & s.subtreeFlags && v !== null) (v.return = s), (z = v);
          else
            e: for (s = h; z !== null; ) {
              if (((a = z), 2048 & a.flags))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oc(9, a);
                  }
                } catch (k) {
                  Ae(a, a.return, k);
                }
              if (a === s) {
                z = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (z = x);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((le = i), Xr(), Wn && typeof Wn.onPostCommitFiberRoot == "function")
        )
          try {
            Wn.onPostCommitFiberRoot(Ec, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (pe = n), (hn.transition = t);
    }
  }
  return !1;
}
function gb(e, t, n) {
  (t = Fo(n, t)),
    (t = Xx(e, t, 1)),
    (e = Br(e, t, 1)),
    (t = Tt()),
    e !== null && (ca(e, 1, t), Bt(e, t));
}
function Ae(e, t, n) {
  if (e.tag === 3) gb(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gb(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($r === null || !$r.has(r)))
        ) {
          (e = Fo(n, e)),
            (e = Yx(t, e, 1)),
            (t = Br(t, e, 1)),
            (e = Tt()),
            t !== null && (ca(t, 1, e), Bt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function DI(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Tt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ze === e &&
      (st & n) === n &&
      (Ke === 4 || (Ke === 3 && (130023424 & st) === st && 500 > ze() - lp)
        ? Si(e, 0)
        : (ap |= n)),
    Bt(e, t);
}
function p1(e, t) {
  t === 0 &&
    (1 & e.mode
      ? ((t = Fl), (Fl <<= 1), !(130023424 & Fl) && (Fl = 4194304))
      : (t = 1));
  var n = Tt();
  (e = fr(e, t)), e !== null && (ca(e, t, n), Bt(e, n));
}
function AI(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), p1(e, n);
}
function VI(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), p1(e, n);
}
var m1;
m1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || At.current) Dt = !0;
    else {
      if (!(e.lanes & n) && !(128 & t.flags)) return (Dt = !1), CI(e, t, n);
      Dt = (131072 & e.flags) !== 0;
    }
  else (Dt = !1), Te && 1048576 & t.flags && gx(t, pc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Zl(e, t), (e = t.pendingProps);
      var i = Ro(t, vt.current);
      Co(t, n), (i = tp(null, t, r, e, i, n));
      var o = np();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Vt(r) ? ((o = !0), dc(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            qh(t),
            (i.updater = Lc),
            (t.stateNode = i),
            (i._reactInternals = t),
            hh(t, r, e, n),
            (t = vh(null, t, r, !0, o, n)))
          : ((t.tag = 0), Te && o && jh(t), Ct(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = $I(r)),
          (e = wn(r, e)),
          i)
        ) {
          case 0:
            t = mh(null, t, r, e, n);
            break e;
          case 1:
            t = ab(null, t, r, e, n);
            break e;
          case 11:
            t = ob(null, t, r, e, n);
            break e;
          case 14:
            t = sb(null, t, r, wn(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wn(r, i)),
        mh(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wn(r, i)),
        ab(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Qx(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Sx(e, t),
          gc(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated)) {
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            256 & t.flags)
          ) {
            (i = Fo(Error(L(423)), t)), (t = lb(e, t, r, n, i));
            break e;
          }
          if (r !== i) {
            (i = Fo(Error(L(424)), t)), (t = lb(e, t, r, n, i));
            break e;
          }
          for (
            Gt = Vr(t.stateNode.containerInfo.firstChild),
              Kt = t,
              Te = !0,
              Cn = null,
              n = Tx(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((Po(), r === i)) {
            t = dr(e, t, n);
            break e;
          }
          Ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ex(t),
        e === null && uh(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        oh(r, i) ? (s = null) : o !== null && oh(r, o) && (t.flags |= 32),
        qx(e, t),
        Ct(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && uh(t), null;
    case 13:
      return Zx(e, t, n);
    case 4:
      return (
        Qh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = _o(t, null, r, n)) : Ct(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wn(r, i)),
        ob(e, t, r, i, n)
      );
    case 7:
      return Ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          ge(mc, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Rn(o.value, s)) {
            if (o.children === i.children && !At.current) {
              t = dr(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = lr(-1, n & -n)), (l.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      fh(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(L(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  fh(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ct(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Co(t, n),
        (i = pn(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ct(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = wn(r, t.pendingProps)),
        (i = wn(r.type, i)),
        sb(e, t, r, i, n)
      );
    case 15:
      return Gx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : wn(r, i)),
        Zl(e, t),
        (t.tag = 1),
        Vt(r) ? ((e = !0), dc(t)) : (e = !1),
        Co(t, n),
        kx(t, r, i),
        hh(t, r, i, n),
        vh(null, t, r, !0, e, n)
      );
    case 19:
      return Jx(e, t, n);
    case 22:
      return Kx(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function v1(e, t) {
  return Nb(e, t);
}
function BI(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function dn(e, t, n, r) {
  return new BI(e, t, n, r);
}
function dp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $I(e) {
  if (typeof e == "function") return dp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Fh)) return 11;
    if (e === Lh) return 14;
  }
  return 2;
}
function Nr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = dn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function tc(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) dp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case lo:
        return wi(n.children, i, o, t);
      case Ih:
        (s = 8), (i |= 8);
        break;
      case Vd:
        return (
          (e = dn(12, n, t, 2 | i)), (e.elementType = Vd), (e.lanes = o), e
        );
      case Bd:
        return (e = dn(13, n, t, i)), (e.elementType = Bd), (e.lanes = o), e;
      case $d:
        return (e = dn(19, n, t, i)), (e.elementType = $d), (e.lanes = o), e;
      case Cb:
        return Ac(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case wb:
              s = 10;
              break e;
            case kb:
              s = 9;
              break e;
            case Fh:
              s = 11;
              break e;
            case Lh:
              s = 14;
              break e;
            case Pr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = dn(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function wi(e, t, n, r) {
  return (e = dn(7, e, r, t)), (e.lanes = n), e;
}
function Ac(e, t, n, r) {
  return (
    (e = dn(22, e, r, t)),
    (e.elementType = Cb),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Od(e, t, n) {
  return (e = dn(6, e, null, t)), (e.lanes = n), e;
}
function Dd(e, t, n) {
  return (
    (t = dn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function zI(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yd(0)),
    (this.expirationTimes = yd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function hp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new zI(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = dn(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qh(o),
    e
  );
}
function NI(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ao,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function g1(e) {
  if (!e) return jr;
  e = e._reactInternals;
  e: {
    if (_i(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Vt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Vt(n)) return mx(e, n, t);
  }
  return t;
}
function y1(e, t, n, r, i, o, s, a, l) {
  return (
    (e = hp(n, r, !0, e, i, o, s, a, l)),
    (e.context = g1(null)),
    (n = e.current),
    (r = Tt()),
    (i = zr(n)),
    (o = lr(r, i)),
    (o.callback = t ?? null),
    Br(n, o, i),
    (e.current.lanes = i),
    ca(e, i, r),
    Bt(e, r),
    e
  );
}
function Vc(e, t, n, r) {
  var i = t.current,
    o = Tt(),
    s = zr(i);
  return (
    (n = g1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = lr(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Br(i, t, s)),
    e !== null && (En(e, i, s, o), Kl(e, i, s)),
    s
  );
}
function Tc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yb(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pp(e, t) {
  yb(e, t), (e = e.alternate) && yb(e, t);
}
function HI() {
  return null;
}
var b1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function mp(e) {
  this._internalRoot = e;
}
Bc.prototype.render = mp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Vc(e, t, null, null);
};
Bc.prototype.unmount = mp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ri(function () {
      Vc(null, e, null, null);
    }),
      (t[ur] = null);
  }
};
function Bc(e) {
  this._internalRoot = e;
}
Bc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Gb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ir.length && t !== 0 && t < Ir[n].priority; n++);
    Ir.splice(n, 0, e), n === 0 && qb(e);
  }
};
function vp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $c(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function bb() {}
function jI(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Tc(s);
        o.call(c);
      };
    }
    var s = y1(t, r, e, 0, null, !1, !1, "", bb);
    return (
      (e._reactRootContainer = s),
      (e[ur] = s.current),
      ea(e.nodeType === 8 ? e.parentNode : e),
      Ri(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Tc(l);
      a.call(c);
    };
  }
  var l = hp(e, 0, !1, null, null, !1, !1, "", bb);
  return (
    (e._reactRootContainer = l),
    (e[ur] = l.current),
    ea(e.nodeType === 8 ? e.parentNode : e),
    Ri(function () {
      Vc(t, l, n, r);
    }),
    l
  );
}
function zc(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Tc(s);
        a.call(l);
      };
    }
    Vc(t, s, e, i);
  } else s = jI(n, t, e, i, r);
  return Tc(s);
}
Xb = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ds(t.pendingLanes);
        n !== 0 &&
          (Dh(t, 1 | n), Bt(t, ze()), !(6 & le) && ((Lo = ze() + 500), Xr()));
      }
      break;
    case 13:
      Ri(function () {
        var r = fr(e, 1);
        if (r !== null) {
          var i = Tt();
          En(r, e, 1, i);
        }
      }),
        pp(e, 1);
  }
};
Ah = function (e) {
  if (e.tag === 13) {
    var t = fr(e, 134217728);
    if (t !== null) {
      var n = Tt();
      En(t, e, 134217728, n);
    }
    pp(e, 134217728);
  }
};
Yb = function (e) {
  if (e.tag === 13) {
    var t = zr(e),
      n = fr(e, t);
    if (n !== null) {
      var r = Tt();
      En(n, e, t, r);
    }
    pp(e, t);
  }
};
Gb = function () {
  return pe;
};
Kb = function (e, t) {
  var n = pe;
  try {
    return (pe = e), t();
  } finally {
    pe = n;
  }
};
Kd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Hd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ic(r);
            if (!i) throw Error(L(90));
            Eb(r), Hd(r, i);
          }
        }
      }
      break;
    case "textarea":
      Pb(e, n);
      break;
    case "select":
      (t = n.value), t != null && xo(e, !!n.multiple, t, !1);
  }
};
Db = cp;
Ab = Ri;
var WI = { usingClientEntryPoint: !1, Events: [fa, ho, Ic, Mb, Ob, cp] },
  Fs = {
    findFiberByHostInstance: yi,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  UI = {
    bundleType: Fs.bundleType,
    version: Fs.version,
    rendererPackageName: Fs.rendererPackageName,
    rendererConfig: Fs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $b(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fs.findFiberByHostInstance || HI,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
  ((Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Ls.isDisabled && Ls.supportsFiber)
)
  try {
    (Ec = Ls.inject(UI)), (Wn = Ls);
  } catch {}
var Ls;
Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WI;
Qt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vp(t)) throw Error(L(200));
  return NI(e, t, null, n);
};
Qt.createRoot = function (e, t) {
  if (!vp(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = b1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = hp(e, 1, !1, null, null, n, !1, r, i)),
    (e[ur] = t.current),
    ea(e.nodeType === 8 ? e.parentNode : e),
    new mp(t)
  );
};
Qt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = $b(t)), (e = e === null ? null : e.stateNode), e;
};
Qt.flushSync = function (e) {
  return Ri(e);
};
Qt.hydrate = function (e, t, n) {
  if (!$c(t)) throw Error(L(200));
  return zc(null, e, t, !0, n);
};
Qt.hydrateRoot = function (e, t, n) {
  if (!vp(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = b1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = y1(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[ur] = t.current),
    ea(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Bc(t);
};
Qt.render = function (e, t, n) {
  if (!$c(t)) throw Error(L(200));
  return zc(null, e, t, !1, n);
};
Qt.unmountComponentAtNode = function (e) {
  if (!$c(e)) throw Error(L(40));
  return (
    !!e._reactRootContainer &&
    (Ri(function () {
      zc(null, null, e, !1, function () {
        (e._reactRootContainer = null), (e[ur] = null);
      });
    }),
    !0)
  );
};
Qt.unstable_batchedUpdates = cp;
Qt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$c(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return zc(e, t, n, !1, r);
};
Qt.version = "18.2.0-next-9e3b772b8-20220608";
function x1() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function"
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x1);
    } catch (e) {
      console.error(e);
    }
}
x1();
var Jt = Qt,
  S1 = Jt,
  XI = Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  YI = Jt.createPortal,
  GI = Jt.createRoot,
  KI = Jt.findDOMNode,
  qI = Jt.flushSync,
  QI = Jt.hydrate,
  ZI = Jt.hydrateRoot,
  JI = Jt.render,
  eF = Jt.unmountComponentAtNode,
  tF = Jt.unstable_batchedUpdates,
  nF = Jt.unstable_renderSubtreeIntoContainer,
  rF = Jt.version;
var oF = ln({
    "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0);
      var t = class {
        constructor() {
          (this.hex = "#000000"),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0);
        }
        static fromLinear(n) {
          return n <= 0.0031308
            ? 12.92 * n
            : 1.055 * Math.pow(n, 1 / 2.4) - 0.055;
        }
        static toLinear(n) {
          return n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
        }
        static yToL(n) {
          return n <= t.epsilon
            ? (n / t.refY) * t.kappa
            : 116 * Math.pow(n / t.refY, 1 / 3) - 16;
        }
        static lToY(n) {
          return n <= 8
            ? (t.refY * n) / t.kappa
            : t.refY * Math.pow((n + 16) / 116, 3);
        }
        static rgbChannelToHex(n) {
          let r = Math.round(n * 255),
            i = r % 16,
            o = ((r - i) / 16) | 0;
          return t.hexChars.charAt(o) + t.hexChars.charAt(i);
        }
        static hexToRgbChannel(n, r) {
          let i = t.hexChars.indexOf(n.charAt(r)),
            o = t.hexChars.indexOf(n.charAt(r + 1));
          return (i * 16 + o) / 255;
        }
        static distanceFromOriginAngle(n, r, i) {
          let o = r / (Math.sin(i) - n * Math.cos(i));
          return o < 0 ? 1 / 0 : o;
        }
        static distanceFromOrigin(n, r) {
          return Math.abs(r) / Math.sqrt(Math.pow(n, 2) + 1);
        }
        static min6(n, r, i, o, s, a) {
          return Math.min(
            n,
            Math.min(r, Math.min(i, Math.min(o, Math.min(s, a))))
          );
        }
        rgbToHex() {
          (this.hex = "#"),
            (this.hex += t.rgbChannelToHex(this.rgb_r)),
            (this.hex += t.rgbChannelToHex(this.rgb_g)),
            (this.hex += t.rgbChannelToHex(this.rgb_b));
        }
        hexToRgb() {
          (this.hex = this.hex.toLowerCase()),
            (this.rgb_r = t.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = t.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = t.hexToRgbChannel(this.hex, 5));
        }
        xyzToRgb() {
          (this.rgb_r = t.fromLinear(
            t.m_r0 * this.xyz_x + t.m_r1 * this.xyz_y + t.m_r2 * this.xyz_z
          )),
            (this.rgb_g = t.fromLinear(
              t.m_g0 * this.xyz_x + t.m_g1 * this.xyz_y + t.m_g2 * this.xyz_z
            )),
            (this.rgb_b = t.fromLinear(
              t.m_b0 * this.xyz_x + t.m_b1 * this.xyz_y + t.m_b2 * this.xyz_z
            ));
        }
        rgbToXyz() {
          let n = t.toLinear(this.rgb_r),
            r = t.toLinear(this.rgb_g),
            i = t.toLinear(this.rgb_b);
          (this.xyz_x =
            0.41239079926595 * n + 0.35758433938387 * r + 0.18048078840183 * i),
            (this.xyz_y =
              0.21263900587151 * n +
              0.71516867876775 * r +
              0.072192315360733 * i),
            (this.xyz_z =
              0.019330818715591 * n +
              0.11919477979462 * r +
              0.95053215224966 * i);
        }
        xyzToLuv() {
          let n = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            r = 4 * this.xyz_x,
            i = 9 * this.xyz_y;
          n !== 0 ? ((r /= n), (i /= n)) : ((r = NaN), (i = NaN)),
            (this.luv_l = t.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (r - t.refU)),
                (this.luv_v = 13 * this.luv_l * (i - t.refV)));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            (this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0);
            return;
          }
          let n = this.luv_u / (13 * this.luv_l) + t.refU,
            r = this.luv_v / (13 * this.luv_l) + t.refV;
          (this.xyz_y = t.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * n) / ((n - 4) * r - n * r)),
            (this.xyz_z =
              (9 * this.xyz_y - 15 * r * this.xyz_y - r * this.xyz_x) /
              (3 * r));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(
              this.luv_u * this.luv_u + this.luv_v * this.luv_v
            )),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let n = Math.atan2(this.luv_v, this.luv_u);
            (this.lch_h = (n * 180) / Math.PI),
              this.lch_h < 0 && (this.lch_h = 360 + this.lch_h);
          }
        }
        lchToLuv() {
          let n = (this.lch_h / 180) * Math.PI;
          (this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(n) * this.lch_c),
            (this.luv_v = Math.sin(n) * this.lch_c);
        }
        calculateBoundingLines(n) {
          let r = Math.pow(n + 16, 3) / 1560896,
            i = r > t.epsilon ? r : n / t.kappa,
            o = i * (284517 * t.m_r0 - 94839 * t.m_r2),
            s = i * (838422 * t.m_r2 + 769860 * t.m_r1 + 731718 * t.m_r0),
            a = i * (632260 * t.m_r2 - 126452 * t.m_r1),
            l = i * (284517 * t.m_g0 - 94839 * t.m_g2),
            c = i * (838422 * t.m_g2 + 769860 * t.m_g1 + 731718 * t.m_g0),
            u = i * (632260 * t.m_g2 - 126452 * t.m_g1),
            f = i * (284517 * t.m_b0 - 94839 * t.m_b2),
            d = i * (838422 * t.m_b2 + 769860 * t.m_b1 + 731718 * t.m_b0),
            p = i * (632260 * t.m_b2 - 126452 * t.m_b1);
          (this.r0s = o / a),
            (this.r0i = (s * n) / a),
            (this.r1s = o / (a + 126452)),
            (this.r1i = ((s - 769860) * n) / (a + 126452)),
            (this.g0s = l / u),
            (this.g0i = (c * n) / u),
            (this.g1s = l / (u + 126452)),
            (this.g1i = ((c - 769860) * n) / (u + 126452)),
            (this.b0s = f / p),
            (this.b0i = (d * n) / p),
            (this.b1s = f / (p + 126452)),
            (this.b1i = ((d - 769860) * n) / (p + 126452));
        }
        calcMaxChromaHpluv() {
          let n = t.distanceFromOrigin(this.r0s, this.r0i),
            r = t.distanceFromOrigin(this.r1s, this.r1i),
            i = t.distanceFromOrigin(this.g0s, this.g0i),
            o = t.distanceFromOrigin(this.g1s, this.g1i),
            s = t.distanceFromOrigin(this.b0s, this.b0i),
            a = t.distanceFromOrigin(this.b1s, this.b1i);
          return t.min6(n, r, i, o, s, a);
        }
        calcMaxChromaHsluv(n) {
          let r = (n / 360) * Math.PI * 2,
            i = t.distanceFromOriginAngle(this.r0s, this.r0i, r),
            o = t.distanceFromOriginAngle(this.r1s, this.r1i, r),
            s = t.distanceFromOriginAngle(this.g0s, this.g0i, r),
            a = t.distanceFromOriginAngle(this.g1s, this.g1i, r),
            l = t.distanceFromOriginAngle(this.b0s, this.b0i, r),
            c = t.distanceFromOriginAngle(this.b1s, this.b1i, r);
          return t.min6(i, o, s, a, l, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hsluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hsluv_l),
              this.calculateBoundingLines(this.hsluv_l);
            let n = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (n / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) (this.hsluv_s = 0), (this.hsluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hsluv_s = 0), (this.hsluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHsluv(this.lch_h);
            (this.hsluv_s = (this.lch_c / n) * 100),
              (this.hsluv_l = this.lch_l);
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hpluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hpluv_l),
              this.calculateBoundingLines(this.hpluv_l);
            let n = this.calcMaxChromaHpluv();
            this.lch_c = (n / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) (this.hpluv_p = 0), (this.hpluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hpluv_p = 0), (this.hpluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHpluv();
            (this.hpluv_p = (this.lch_c / n) * 100),
              (this.hpluv_l = this.lch_l);
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hpluvToRgb() {
          this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hsluvToHex() {
          this.hsluvToRgb(), this.rgbToHex();
        }
        hpluvToHex() {
          this.hpluvToRgb(), this.rgbToHex();
        }
        rgbToHsluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHsluv();
        }
        rgbToHpluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHpluv();
        }
        hexToHsluv() {
          this.hexToRgb(), this.rgbToHsluv();
        }
        hexToHpluv() {
          this.hexToRgb(), this.rgbToHpluv();
        }
      };
      (e.Hsluv = t),
        (t.hexChars = "0123456789abcdef"),
        (t.refY = 1),
        (t.refU = 0.19783000664283),
        (t.refV = 0.46831999493879),
        (t.kappa = 903.2962962),
        (t.epsilon = 0.0088564516),
        (t.m_r0 = 3.240969941904521),
        (t.m_r1 = -1.537383177570093),
        (t.m_r2 = -0.498610760293),
        (t.m_g0 = -0.96924363628087),
        (t.m_g1 = 1.87596750150772),
        (t.m_g2 = 0.041555057407175),
        (t.m_b0 = 0.055630079696993),
        (t.m_b1 = -0.20397695888897),
        (t.m_b2 = 1.056971514242878);
    },
  }),
  sF = ln({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        r = "~";
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function o(c, u, f) {
        (this.fn = c), (this.context = u), (this.once = f || !1);
      }
      function s(c, u, f, d, p) {
        if (typeof f != "function")
          throw new TypeError("The listener must be a function");
        var y = new o(f, d || c, p),
          g = r ? r + u : u;
        return (
          c._events[g]
            ? c._events[g].fn
              ? (c._events[g] = [c._events[g], y])
              : c._events[g].push(y)
            : ((c._events[g] = y), c._eventsCount++),
          c
        );
      }
      function a(c, u) {
        --c._eventsCount === 0 ? (c._events = new i()) : delete c._events[u];
      }
      function l() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      (l.prototype.eventNames = function () {
        var u = [],
          f,
          d;
        if (this._eventsCount === 0) return u;
        for (d in (f = this._events))
          n.call(f, d) && u.push(r ? d.slice(1) : d);
        return Object.getOwnPropertySymbols
          ? u.concat(Object.getOwnPropertySymbols(f))
          : u;
      }),
        (l.prototype.listeners = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          if (!d) return [];
          if (d.fn) return [d.fn];
          for (var p = 0, y = d.length, g = new Array(y); p < y; p++)
            g[p] = d[p].fn;
          return g;
        }),
        (l.prototype.listenerCount = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          return d ? (d.fn ? 1 : d.length) : 0;
        }),
        (l.prototype.emit = function (u, f, d, p, y, g) {
          var S = r ? r + u : u;
          if (!this._events[S]) return !1;
          var m = this._events[S],
            h = arguments.length,
            v,
            x;
          if (m.fn) {
            switch ((m.once && this.removeListener(u, m.fn, void 0, !0), h)) {
              case 1:
                return m.fn.call(m.context), !0;
              case 2:
                return m.fn.call(m.context, f), !0;
              case 3:
                return m.fn.call(m.context, f, d), !0;
              case 4:
                return m.fn.call(m.context, f, d, p), !0;
              case 5:
                return m.fn.call(m.context, f, d, p, y), !0;
              case 6:
                return m.fn.call(m.context, f, d, p, y, g), !0;
            }
            for (x = 1, v = new Array(h - 1); x < h; x++)
              v[x - 1] = arguments[x];
            m.fn.apply(m.context, v);
          } else {
            var k = m.length,
              w;
            for (x = 0; x < k; x++)
              switch (
                (m[x].once && this.removeListener(u, m[x].fn, void 0, !0), h)
              ) {
                case 1:
                  m[x].fn.call(m[x].context);
                  break;
                case 2:
                  m[x].fn.call(m[x].context, f);
                  break;
                case 3:
                  m[x].fn.call(m[x].context, f, d);
                  break;
                case 4:
                  m[x].fn.call(m[x].context, f, d, p);
                  break;
                default:
                  if (!v)
                    for (w = 1, v = new Array(h - 1); w < h; w++)
                      v[w - 1] = arguments[w];
                  m[x].fn.apply(m[x].context, v);
              }
          }
          return !0;
        }),
        (l.prototype.on = function (u, f, d) {
          return s(this, u, f, d, !1);
        }),
        (l.prototype.once = function (u, f, d) {
          return s(this, u, f, d, !0);
        }),
        (l.prototype.removeListener = function (u, f, d, p) {
          var y = r ? r + u : u;
          if (!this._events[y]) return this;
          if (!f) return a(this, y), this;
          var g = this._events[y];
          if (g.fn)
            g.fn === f &&
              (!p || g.once) &&
              (!d || g.context === d) &&
              a(this, y);
          else {
            for (var S = 0, m = [], h = g.length; S < h; S++)
              (g[S].fn !== f ||
                (p && !g[S].once) ||
                (d && g[S].context !== d)) &&
                m.push(g[S]);
            m.length
              ? (this._events[y] = m.length === 1 ? m[0] : m)
              : a(this, y);
          }
          return this;
        }),
        (l.prototype.removeAllListeners = function (u) {
          var f;
          return (
            u
              ? ((f = r ? r + u : u), this._events[f] && a(this, f))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.addListener = l.prototype.on),
        (l.prefixed = r),
        (l.EventEmitter = l),
        typeof t < "u" && (t.exports = l);
    },
  }),
  Kp = ln({
    "../../../node_modules/process/browser.js"(e, t) {
      var n = (t.exports = {}),
        r,
        i;
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          typeof setTimeout == "function" ? (r = setTimeout) : (r = o);
        } catch {
          r = o;
        }
        try {
          typeof clearTimeout == "function" ? (i = clearTimeout) : (i = s);
        } catch {
          i = s;
        }
      })();
      function a(m) {
        if (r === setTimeout) return setTimeout(m, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(m, 0);
        try {
          return r(m, 0);
        } catch {
          try {
            return r.call(null, m, 0);
          } catch {
            return r.call(this, m, 0);
          }
        }
      }
      function l(m) {
        if (i === clearTimeout) return clearTimeout(m);
        if ((i === s || !i) && clearTimeout)
          return (i = clearTimeout), clearTimeout(m);
        try {
          return i(m);
        } catch {
          try {
            return i.call(null, m);
          } catch {
            return i.call(this, m);
          }
        }
      }
      var c = [],
        u = !1,
        f,
        d = -1;
      function p() {
        !u ||
          !f ||
          ((u = !1), f.length ? (c = f.concat(c)) : (d = -1), c.length && y());
      }
      function y() {
        if (!u) {
          var m = a(p);
          u = !0;
          for (var h = c.length; h; ) {
            for (f = c, c = []; ++d < h; ) f && f[d].run();
            (d = -1), (h = c.length);
          }
          (f = null), (u = !1), l(m);
        }
      }
      n.nextTick = function (m) {
        var h = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var v = 1; v < arguments.length; v++) h[v - 1] = arguments[v];
        c.push(new g(m, h)), c.length === 1 && !u && a(y);
      };
      function g(m, h) {
        (this.fun = m), (this.array = h);
      }
      (g.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {});
      function S() {}
      (n.on = S),
        (n.addListener = S),
        (n.once = S),
        (n.off = S),
        (n.removeListener = S),
        (n.removeAllListeners = S),
        (n.emit = S),
        (n.prependListener = S),
        (n.prependOnceListener = S),
        (n.listeners = function (m) {
          return [];
        }),
        (n.binding = function (m) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (m) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
  }),
  aF = ln({
    "../../../node_modules/@juggle/resize-observer/lib/exports/resize-observer.umd.js"(
      e,
      t
    ) {
      (function (n, r) {
        typeof e == "object" && typeof t < "u"
          ? r(e)
          : typeof define == "function" && define.amd
          ? define(["exports"], r)
          : ((n = typeof globalThis < "u" ? globalThis : n || self),
            r((n.ResizeObserver = {})));
      })(e, function (n) {
        "use strict";
        var r = [],
          i = function () {
            return r.some(function (P) {
              return P.activeTargets.length > 0;
            });
          },
          o = function () {
            return r.some(function (P) {
              return P.skippedTargets.length > 0;
            });
          },
          s = "ResizeObserver loop completed with undelivered notifications.",
          a = function () {
            var P;
            typeof ErrorEvent == "function"
              ? (P = new ErrorEvent("error", { message: s }))
              : ((P = document.createEvent("Event")),
                P.initEvent("error", !1, !1),
                (P.message = s)),
              O.dispatchEvent(P);
          },
          l;
        (function (P) {
          (P.BORDER_BOX = "border-box"),
            (P.CONTENT_BOX = "content-box"),
            (P.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
        })(l || (l = {}));
        var c = function (P) {
            return Object.freeze(P);
          },
          u = (function () {
            function P(_, M) {
              (this.inlineSize = _), (this.blockSize = M), c(this);
            }
            return P;
          })(),
          f = (function () {
            function P(_, M, H, ae) {
              return (
                (this.x = _),
                (this.y = M),
                (this.width = H),
                (this.height = ae),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                c(this)
              );
            }
            return (
              (P.prototype.toJSON = function () {
                var _ = this,
                  M = _.x,
                  H = _.y,
                  ae = _.top,
                  bt = _.right,
                  nt = _.bottom,
                  $e = _.left,
                  Zn = _.width,
                  Wt = _.height;
                return {
                  x: M,
                  y: H,
                  top: ae,
                  right: bt,
                  bottom: nt,
                  left: $e,
                  width: Zn,
                  height: Wt,
                };
              }),
              (P.fromRect = function (_) {
                return new P(_.x, _.y, _.width, _.height);
              }),
              P
            );
          })(),
          d = function (P) {
            return P instanceof SVGElement && "getBBox" in P;
          },
          p = function (P) {
            if (d(P)) {
              var _ = P.getBBox(),
                M = _.width,
                H = _.height;
              return !M && !H;
            }
            var ae = P,
              bt = ae.offsetWidth,
              nt = ae.offsetHeight;
            return !(bt || nt || P.getClientRects().length);
          },
          y = function (P) {
            var _, M;
            if (P instanceof Element) return !0;
            var H =
              (M =
                (_ = P) === null || _ === void 0 ? void 0 : _.ownerDocument) ===
                null || M === void 0
                ? void 0
                : M.defaultView;
            return !!(H && P instanceof H.Element);
          },
          g = function (P) {
            switch (P.tagName) {
              case "INPUT":
                if (P.type !== "image") break;
              case "VIDEO":
              case "AUDIO":
              case "EMBED":
              case "OBJECT":
              case "CANVAS":
              case "IFRAME":
              case "IMG":
                return !0;
            }
            return !1;
          },
          S = typeof O < "u" ? O : {},
          m = new WeakMap(),
          h = /auto|scroll/,
          v = /^tb|vertical/,
          x = /msie|trident/i.test(S.navigator && S.navigator.userAgent),
          k = function (P) {
            return parseFloat(P || "0");
          },
          w = function (P, _, M) {
            return (
              P === void 0 && (P = 0),
              _ === void 0 && (_ = 0),
              M === void 0 && (M = !1),
              new u((M ? _ : P) || 0, (M ? P : _) || 0)
            );
          },
          T = c({
            devicePixelContentBoxSize: w(),
            borderBoxSize: w(),
            contentBoxSize: w(),
            contentRect: new f(0, 0, 0, 0),
          }),
          E = function (P, _) {
            if ((_ === void 0 && (_ = !1), m.has(P) && !_)) return m.get(P);
            if (p(P)) return m.set(P, T), T;
            var M = getComputedStyle(P),
              H = d(P) && P.ownerSVGElement && P.getBBox(),
              ae = !x && M.boxSizing === "border-box",
              bt = v.test(M.writingMode || ""),
              nt = !H && h.test(M.overflowY || ""),
              $e = !H && h.test(M.overflowX || ""),
              Zn = H ? 0 : k(M.paddingTop),
              Wt = H ? 0 : k(M.paddingRight),
              ni = H ? 0 : k(M.paddingBottom),
              zi = H ? 0 : k(M.paddingLeft),
              Nk = H ? 0 : k(M.borderTopWidth),
              Hk = H ? 0 : k(M.borderRightWidth),
              jk = H ? 0 : k(M.borderBottomWidth),
              Wk = H ? 0 : k(M.borderLeftWidth),
              Sm = zi + Wt,
              wm = Zn + ni,
              Cu = Wk + Hk,
              Tu = Nk + jk,
              km = $e ? P.offsetHeight - Tu - P.clientHeight : 0,
              Cm = nt ? P.offsetWidth - Cu - P.clientWidth : 0,
              Uk = ae ? Sm + Cu : 0,
              Xk = ae ? wm + Tu : 0,
              Va = H ? H.width : k(M.width) - Uk - Cm,
              Ba = H ? H.height : k(M.height) - Xk - km,
              Yk = Va + Sm + Cm + Cu,
              Gk = Ba + wm + km + Tu,
              Tm = c({
                devicePixelContentBoxSize: w(
                  Math.round(Va * devicePixelRatio),
                  Math.round(Ba * devicePixelRatio),
                  bt
                ),
                borderBoxSize: w(Yk, Gk, bt),
                contentBoxSize: w(Va, Ba, bt),
                contentRect: new f(zi, Zn, Va, Ba),
              });
            return m.set(P, Tm), Tm;
          },
          F = function (P, _, M) {
            var H = E(P, M),
              ae = H.borderBoxSize,
              bt = H.contentBoxSize,
              nt = H.devicePixelContentBoxSize;
            switch (_) {
              case l.DEVICE_PIXEL_CONTENT_BOX:
                return nt;
              case l.BORDER_BOX:
                return ae;
              default:
                return bt;
            }
          },
          I = (function () {
            function P(_) {
              var M = E(_);
              (this.target = _),
                (this.contentRect = M.contentRect),
                (this.borderBoxSize = c([M.borderBoxSize])),
                (this.contentBoxSize = c([M.contentBoxSize])),
                (this.devicePixelContentBoxSize = c([
                  M.devicePixelContentBoxSize,
                ]));
            }
            return P;
          })(),
          D = function (P) {
            if (p(P)) return 1 / 0;
            for (var _ = 0, M = P.parentNode; M; ) (_ += 1), (M = M.parentNode);
            return _;
          },
          $ = function () {
            var P = 1 / 0,
              _ = [];
            r.forEach(function (nt) {
              if (nt.activeTargets.length !== 0) {
                var $e = [];
                nt.activeTargets.forEach(function (Wt) {
                  var ni = new I(Wt.target),
                    zi = D(Wt.target);
                  $e.push(ni),
                    (Wt.lastReportedSize = F(Wt.target, Wt.observedBox)),
                    zi < P && (P = zi);
                }),
                  _.push(function () {
                    nt.callback.call(nt.observer, $e, nt.observer);
                  }),
                  nt.activeTargets.splice(0, nt.activeTargets.length);
              }
            });
            for (var M = 0, H = _; M < H.length; M++) {
              var ae = H[M];
              ae();
            }
            return P;
          },
          J = function (P) {
            r.forEach(function (M) {
              M.activeTargets.splice(0, M.activeTargets.length),
                M.skippedTargets.splice(0, M.skippedTargets.length),
                M.observationTargets.forEach(function (ae) {
                  ae.isActive() &&
                    (D(ae.target) > P
                      ? M.activeTargets.push(ae)
                      : M.skippedTargets.push(ae));
                });
            });
          },
          Z = function () {
            var P = 0;
            for (J(P); i(); ) (P = $()), J(P);
            return o() && a(), P > 0;
          },
          B,
          j = [],
          te = function () {
            return j.splice(0).forEach(function (P) {
              return P();
            });
          },
          ne = function (P) {
            if (!B) {
              var _ = 0,
                M = document.createTextNode(""),
                H = { characterData: !0 };
              new MutationObserver(function () {
                return te();
              }).observe(M, H),
                (B = function () {
                  M.textContent = "" + (_ ? _-- : _++);
                });
            }
            j.push(P), B();
          },
          U = function (P) {
            ne(function () {
              requestAnimationFrame(P);
            });
          },
          re = 0,
          ie = function () {
            return !!re;
          },
          be = 250,
          de = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          },
          ee = [
            "resize",
            "load",
            "transitionend",
            "animationend",
            "animationstart",
            "animationiteration",
            "keyup",
            "keydown",
            "mouseup",
            "mousedown",
            "mouseover",
            "mouseout",
            "blur",
            "focus",
          ],
          yt = function (P) {
            return P === void 0 && (P = 0), Date.now() + P;
          },
          Be = !1,
          Ye = (function () {
            function P() {
              var _ = this;
              (this.stopped = !0),
                (this.listener = function () {
                  return _.schedule();
                });
            }
            return (
              (P.prototype.run = function (_) {
                var M = this;
                if ((_ === void 0 && (_ = be), !Be)) {
                  Be = !0;
                  var H = yt(_);
                  U(function () {
                    var ae = !1;
                    try {
                      ae = Z();
                    } finally {
                      if (((Be = !1), (_ = H - yt()), !ie())) return;
                      ae ? M.run(1e3) : _ > 0 ? M.run(_) : M.start();
                    }
                  });
                }
              }),
              (P.prototype.schedule = function () {
                this.stop(), this.run();
              }),
              (P.prototype.observe = function () {
                var _ = this,
                  M = function () {
                    return _.observer && _.observer.observe(document.body, de);
                  };
                document.body ? M() : S.addEventListener("DOMContentLoaded", M);
              }),
              (P.prototype.start = function () {
                var _ = this;
                this.stopped &&
                  ((this.stopped = !1),
                  (this.observer = new MutationObserver(this.listener)),
                  this.observe(),
                  ee.forEach(function (M) {
                    return S.addEventListener(M, _.listener, !0);
                  }));
              }),
              (P.prototype.stop = function () {
                var _ = this;
                this.stopped ||
                  (this.observer && this.observer.disconnect(),
                  ee.forEach(function (M) {
                    return S.removeEventListener(M, _.listener, !0);
                  }),
                  (this.stopped = !0));
              }),
              P
            );
          })(),
          ct = new Ye(),
          yr = function (P) {
            !re && P > 0 && ct.start(), (re += P), !re && ct.stop();
          },
          ue = function (P) {
            return !d(P) && !g(P) && getComputedStyle(P).display === "inline";
          },
          Qn = (function () {
            function P(_, M) {
              (this.target = _),
                (this.observedBox = M || l.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
            }
            return (
              (P.prototype.isActive = function () {
                var _ = F(this.target, this.observedBox, !0);
                return (
                  ue(this.target) && (this.lastReportedSize = _),
                  this.lastReportedSize.inlineSize !== _.inlineSize ||
                    this.lastReportedSize.blockSize !== _.blockSize
                );
              }),
              P
            );
          })(),
          Ht = (function () {
            function P(_, M) {
              (this.activeTargets = []),
                (this.skippedTargets = []),
                (this.observationTargets = []),
                (this.observer = _),
                (this.callback = M);
            }
            return P;
          })(),
          In = new WeakMap(),
          yn = function (P, _) {
            for (var M = 0; M < P.length; M += 1)
              if (P[M].target === _) return M;
            return -1;
          },
          jt = (function () {
            function P() {}
            return (
              (P.connect = function (_, M) {
                var H = new Ht(_, M);
                In.set(_, H);
              }),
              (P.observe = function (_, M, H) {
                var ae = In.get(_),
                  bt = ae.observationTargets.length === 0;
                yn(ae.observationTargets, M) < 0 &&
                  (bt && r.push(ae),
                  ae.observationTargets.push(new Qn(M, H && H.box)),
                  yr(1),
                  ct.schedule());
              }),
              (P.unobserve = function (_, M) {
                var H = In.get(_),
                  ae = yn(H.observationTargets, M),
                  bt = H.observationTargets.length === 1;
                ae >= 0 &&
                  (bt && r.splice(r.indexOf(H), 1),
                  H.observationTargets.splice(ae, 1),
                  yr(-1));
              }),
              (P.disconnect = function (_) {
                var M = this,
                  H = In.get(_);
                H.observationTargets.slice().forEach(function (ae) {
                  return M.unobserve(_, ae.target);
                }),
                  H.activeTargets.splice(0, H.activeTargets.length);
              }),
              P
            );
          })(),
          $i = (function () {
            function P(_) {
              if (arguments.length === 0)
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (typeof _ != "function")
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
                );
              jt.connect(this, _);
            }
            return (
              (P.prototype.observe = function (_, M) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!y(_))
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                jt.observe(this, _, M);
              }),
              (P.prototype.unobserve = function (_) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!y(_))
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                jt.unobserve(this, _);
              }),
              (P.prototype.disconnect = function () {
                jt.disconnect(this);
              }),
              (P.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
              }),
              P
            );
          })();
        (n.ResizeObserver = $i),
          (n.ResizeObserverEntry = I),
          (n.ResizeObserverSize = u),
          Object.defineProperty(n, "__esModule", { value: !0 });
      });
    },
  }),
  lF = ln({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
      e
    ) {
      "use strict";
      var t = typeof Symbol == "function" && Symbol.for,
        n = t ? Symbol.for("react.element") : 60103,
        r = t ? Symbol.for("react.portal") : 60106,
        i = t ? Symbol.for("react.fragment") : 60107,
        o = t ? Symbol.for("react.strict_mode") : 60108,
        s = t ? Symbol.for("react.profiler") : 60114,
        a = t ? Symbol.for("react.provider") : 60109,
        l = t ? Symbol.for("react.context") : 60110,
        c = t ? Symbol.for("react.async_mode") : 60111,
        u = t ? Symbol.for("react.concurrent_mode") : 60111,
        f = t ? Symbol.for("react.forward_ref") : 60112,
        d = t ? Symbol.for("react.suspense") : 60113,
        p = t ? Symbol.for("react.suspense_list") : 60120,
        y = t ? Symbol.for("react.memo") : 60115,
        g = t ? Symbol.for("react.lazy") : 60116,
        S = t ? Symbol.for("react.block") : 60121,
        m = t ? Symbol.for("react.fundamental") : 60117,
        h = t ? Symbol.for("react.responder") : 60118,
        v = t ? Symbol.for("react.scope") : 60119;
      function x(w) {
        if (typeof w == "object" && w !== null) {
          var T = w.$$typeof;
          switch (T) {
            case n:
              switch (((w = w.type), w)) {
                case c:
                case u:
                case i:
                case s:
                case o:
                case d:
                  return w;
                default:
                  switch (((w = w && w.$$typeof), w)) {
                    case l:
                    case f:
                    case g:
                    case y:
                    case a:
                      return w;
                    default:
                      return T;
                  }
              }
            case r:
              return T;
          }
        }
      }
      function k(w) {
        return x(w) === u;
      }
      (e.AsyncMode = c),
        (e.ConcurrentMode = u),
        (e.ContextConsumer = l),
        (e.ContextProvider = a),
        (e.Element = n),
        (e.ForwardRef = f),
        (e.Fragment = i),
        (e.Lazy = g),
        (e.Memo = y),
        (e.Portal = r),
        (e.Profiler = s),
        (e.StrictMode = o),
        (e.Suspense = d),
        (e.isAsyncMode = function (w) {
          return k(w) || x(w) === c;
        }),
        (e.isConcurrentMode = k),
        (e.isContextConsumer = function (w) {
          return x(w) === l;
        }),
        (e.isContextProvider = function (w) {
          return x(w) === a;
        }),
        (e.isElement = function (w) {
          return typeof w == "object" && w !== null && w.$$typeof === n;
        }),
        (e.isForwardRef = function (w) {
          return x(w) === f;
        }),
        (e.isFragment = function (w) {
          return x(w) === i;
        }),
        (e.isLazy = function (w) {
          return x(w) === g;
        }),
        (e.isMemo = function (w) {
          return x(w) === y;
        }),
        (e.isPortal = function (w) {
          return x(w) === r;
        }),
        (e.isProfiler = function (w) {
          return x(w) === s;
        }),
        (e.isStrictMode = function (w) {
          return x(w) === o;
        }),
        (e.isSuspense = function (w) {
          return x(w) === d;
        }),
        (e.isValidElementType = function (w) {
          return (
            typeof w == "string" ||
            typeof w == "function" ||
            w === i ||
            w === u ||
            w === s ||
            w === o ||
            w === d ||
            w === p ||
            (typeof w == "object" &&
              w !== null &&
              (w.$$typeof === g ||
                w.$$typeof === y ||
                w.$$typeof === a ||
                w.$$typeof === l ||
                w.$$typeof === f ||
                w.$$typeof === m ||
                w.$$typeof === h ||
                w.$$typeof === v ||
                w.$$typeof === S))
          );
        }),
        (e.typeOf = x);
    },
  }),
  cF = ln({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(
      e,
      t
    ) {
      "use strict";
      t.exports = lF();
    },
  }),
  fu = ln({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t
    ) {
      "use strict";
      var n = cF(),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      (a[n.ForwardRef] = o), (a[n.Memo] = s);
      function l(S) {
        return n.isMemo(S) ? s : a[S.$$typeof] || r;
      }
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        y = Object.prototype;
      function g(S, m, h) {
        if (typeof m != "string") {
          if (y) {
            var v = p(m);
            v && v !== y && g(S, v, h);
          }
          var x = u(m);
          f && (x = x.concat(f(m)));
          for (var k = l(S), w = l(m), T = 0; T < x.length; ++T) {
            var E = x[T];
            if (!i[E] && !(h && h[E]) && !(w && w[E]) && !(k && k[E])) {
              var F = d(m, E);
              try {
                c(S, E, F);
              } catch {}
            }
          }
        }
        return S;
      }
      t.exports = g;
    },
  }),
  uF = ln({
    "../../../node_modules/archy/index.js"(e, t) {
      t.exports = function n(r, i, o) {
        i === void 0 && (i = ""), o || (o = {});
        var s = function (u) {
          var f = {
            "\u2502": "|",
            "\u2514": "`",
            "\u251C": "+",
            "\u2500": "-",
            "\u252C": "-",
          };
          return o.unicode === !1 ? f[u] : u;
        };
        typeof r == "string" && (r = { label: r });
        var a = r.nodes || [],
          l = (r.label || "").split(`
`),
          c =
            `
` +
            i +
            (a.length ? s("\u2502") : " ") +
            " ";
        return (
          i +
          l.join(c) +
          `
` +
          a
            .map(function (u, f) {
              var d = f === a.length - 1,
                p = u.nodes && u.nodes.length,
                y = i + (d ? " " : s("\u2502")) + " ";
              return (
                i +
                s(d ? "\u2514" : "\u251C") +
                s("\u2500") +
                s(p ? "\u252C" : "\u2500") +
                " " +
                n(u, y, o).slice(i.length + 2)
              );
            })
            .join("")
        );
      };
    },
  }),
  fF = ln({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
      e,
      t
    ) {
      (function () {
        function n(m, h) {
          document.addEventListener
            ? m.addEventListener("scroll", h, !1)
            : m.attachEvent("scroll", h);
        }
        function r(m) {
          document.body
            ? m()
            : document.addEventListener
            ? document.addEventListener("DOMContentLoaded", function h() {
                document.removeEventListener("DOMContentLoaded", h), m();
              })
            : document.attachEvent("onreadystatechange", function h() {
                (document.readyState == "interactive" ||
                  document.readyState == "complete") &&
                  (document.detachEvent("onreadystatechange", h), m());
              });
        }
        function i(m) {
          (this.a = document.createElement("div")),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(m)),
            (this.b = document.createElement("span")),
            (this.c = document.createElement("span")),
            (this.h = document.createElement("span")),
            (this.f = document.createElement("span")),
            (this.g = -1),
            (this.b.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.c.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.f.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.h.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c);
        }
        function o(m, h) {
          m.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            h +
            ";";
        }
        function s(m) {
          var h = m.a.offsetWidth,
            v = h + 100;
          return (
            (m.f.style.width = v + "px"),
            (m.c.scrollLeft = v),
            (m.b.scrollLeft = m.b.scrollWidth + 100),
            m.g !== h ? ((m.g = h), !0) : !1
          );
        }
        function a(m, h) {
          function v() {
            var k = x;
            s(k) && k.a.parentNode && h(k.g);
          }
          var x = m;
          n(m.b, v), n(m.c, v), s(m);
        }
        function l(m, h) {
          var v = h || {};
          (this.family = m),
            (this.style = v.style || "normal"),
            (this.weight = v.weight || "normal"),
            (this.stretch = v.stretch || "normal");
        }
        var c = null,
          u = null,
          f = null,
          d = null;
        function p() {
          if (u === null)
            if (y() && /Apple/.test(O.navigator.vendor)) {
              var m = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                O.navigator.userAgent
              );
              u = !!m && 603 > parseInt(m[1], 10);
            } else u = !1;
          return u;
        }
        function y() {
          return d === null && (d = !!document.fonts), d;
        }
        function g() {
          if (f === null) {
            var m = document.createElement("div");
            try {
              m.style.font = "condensed 100px sans-serif";
            } catch {}
            f = m.style.font !== "";
          }
          return f;
        }
        function S(m, h) {
          return [m.style, m.weight, g() ? m.stretch : "", "100px", h].join(
            " "
          );
        }
        (l.prototype.load = function (m, h) {
          var v = this,
            x = m || "BESbswy",
            k = 0,
            w = h || 3e3,
            T = new Date().getTime();
          return new Promise(function (E, F) {
            if (y() && !p()) {
              var I = new Promise(function ($, J) {
                  function Z() {
                    new Date().getTime() - T >= w
                      ? J(Error("" + w + "ms timeout exceeded"))
                      : document.fonts
                          .load(S(v, '"' + v.family + '"'), x)
                          .then(function (B) {
                            1 <= B.length ? $() : setTimeout(Z, 25);
                          }, J);
                  }
                  Z();
                }),
                D = new Promise(function ($, J) {
                  k = setTimeout(function () {
                    J(Error("" + w + "ms timeout exceeded"));
                  }, w);
                });
              Promise.race([D, I]).then(function () {
                clearTimeout(k), E(v);
              }, F);
            } else
              r(function () {
                function $() {
                  var ee;
                  (ee =
                    (te != -1 && ne != -1) ||
                    (te != -1 && U != -1) ||
                    (ne != -1 && U != -1)) &&
                    ((ee = te != ne && te != U && ne != U) ||
                      (c === null &&
                        ((ee = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          O.navigator.userAgent
                        )),
                        (c =
                          !!ee &&
                          (536 > parseInt(ee[1], 10) ||
                            (parseInt(ee[1], 10) === 536 &&
                              11 >= parseInt(ee[2], 10))))),
                      (ee =
                        c &&
                        ((te == re && ne == re && U == re) ||
                          (te == ie && ne == ie && U == ie) ||
                          (te == be && ne == be && U == be)))),
                    (ee = !ee)),
                    ee &&
                      (de.parentNode && de.parentNode.removeChild(de),
                      clearTimeout(k),
                      E(v));
                }
                function J() {
                  if (new Date().getTime() - T >= w)
                    de.parentNode && de.parentNode.removeChild(de),
                      F(Error("" + w + "ms timeout exceeded"));
                  else {
                    var ee = document.hidden;
                    (ee === !0 || ee === void 0) &&
                      ((te = Z.a.offsetWidth),
                      (ne = B.a.offsetWidth),
                      (U = j.a.offsetWidth),
                      $()),
                      (k = setTimeout(J, 50));
                  }
                }
                var Z = new i(x),
                  B = new i(x),
                  j = new i(x),
                  te = -1,
                  ne = -1,
                  U = -1,
                  re = -1,
                  ie = -1,
                  be = -1,
                  de = document.createElement("div");
                (de.dir = "ltr"),
                  o(Z, S(v, "sans-serif")),
                  o(B, S(v, "serif")),
                  o(j, S(v, "monospace")),
                  de.appendChild(Z.a),
                  de.appendChild(B.a),
                  de.appendChild(j.a),
                  document.body.appendChild(de),
                  (re = Z.a.offsetWidth),
                  (ie = B.a.offsetWidth),
                  (be = j.a.offsetWidth),
                  J(),
                  a(Z, function (ee) {
                    (te = ee), $();
                  }),
                  o(Z, S(v, '"' + v.family + '",sans-serif')),
                  a(B, function (ee) {
                    (ne = ee), $();
                  }),
                  o(B, S(v, '"' + v.family + '",serif')),
                  a(j, function (ee) {
                    (U = ee), $();
                  }),
                  o(j, S(v, '"' + v.family + '",monospace'));
              });
          });
        }),
          typeof t == "object"
            ? (t.exports = l)
            : ((O.FontFaceObserver = l),
              (O.FontFaceObserver.prototype.load = l.prototype.load));
      })();
    },
  });
function Vp(e, t) {
  let n = { style: t };
  return b.isValidElement(e) ? b.cloneElement(e, n) : b.createElement(e, n);
}
var dF = class extends Error {},
  qS = class extends Error {},
  hF = class extends ve {
    constructor(e) {
      super(e),
        (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      if (e.forceUpdateKey !== t.forceUpdateKey) {
        let n = { forceUpdateKey: e.forceUpdateKey };
        return t.error && (n.error = void 0), n;
      }
      return null;
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (!(this.state.error instanceof dF)) {
        let n = new qS();
        throw ((n.cause = this.state.error), n);
      }
      let { notFoundPage: e, defaultPageStyle: t } = this.props;
      if (!e) throw this.state.error;
      return Vp(e, t);
    }
  },
  pF = ":([a-z]\\w*)",
  Oi = new RegExp(pF, "gi");
function QS(e, t) {
  return e.replace(Oi, (n, r) => {
    let i = t[r];
    return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i);
  });
}
function ZS(e, t) {
  if (!e.startsWith("/") || !t.startsWith("/"))
    throw new Error("from/to paths are expected to be absolute");
  let [n] = w1(e),
    [r, i] = w1(t),
    o = mF(n, r);
  return (
    o === "" && (o = "."),
    !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o),
    o + "/" + i
  );
}
function w1(e) {
  let t = e.lastIndexOf("/");
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
var gp = 46,
  Bo = 47,
  Zr = (e, t) => e.charCodeAt(t),
  k1 = (e, t) => e.lastIndexOf(t),
  zo = (e, t, n) => e.slice(t, n);
function mF(e, t) {
  if (e === t || ((e = "/" + T1(e)), (t = "/" + T1(t)), e === t)) return "";
  let n = 1,
    r = e.length,
    i = r - n,
    o = 1,
    s = t.length - o,
    a = i < s ? i : s,
    l = -1,
    c = 0;
  for (; c < a; c++) {
    let f = Zr(e, n + c);
    if (f !== Zr(t, o + c)) break;
    f === Bo && (l = c);
  }
  if (c === a)
    if (s > a) {
      if (Zr(t, o + c) === Bo) return zo(t, o + c + 1);
      if (c === 0) return zo(t, o + c);
    } else i > a && (Zr(e, n + c) === Bo ? (l = c) : c === 0 && (l = 0));
  let u = "";
  for (c = n + l + 1; c <= r; ++c)
    (c === r || Zr(e, c) === Bo) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${zo(t, o + l)}`;
}
var vF = !1,
  Nc = "/",
  C1 = (e) => e === Bo;
function T1(e) {
  let t = "",
    n = 0,
    r = -1,
    i = 0,
    o = 0;
  for (let s = 0; s <= e.length; ++s) {
    if (s < e.length) o = Zr(e, s);
    else {
      if (C1(o)) break;
      o = Bo;
    }
    if (C1(o)) {
      if (!(r === s - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            Zr(t, t.length - 1) !== gp ||
            Zr(t, t.length - 2) !== gp
          ) {
            if (t.length > 2) {
              let a = k1(t, Nc);
              a === -1
                ? ((t = ""), (n = 0))
                : ((t = zo(t, 0, a)), (n = t.length - 1 - k1(t, Nc))),
                (r = s),
                (i = 0);
              continue;
            } else if (t.length !== 0) {
              (t = ""), (n = 0), (r = s), (i = 0);
              continue;
            }
          }
          vF && ((t += t.length > 0 ? `${Nc}..` : ".."), (n = 2));
        } else
          t.length > 0
            ? (t += `${Nc}${zo(e, r + 1, s)}`)
            : (t = zo(e, r + 1, s)),
            (n = s - r - 1);
      (r = s), (i = 0);
    } else o === gp && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function JS(e) {
  let t = typeof O < "u" ? O.location.search : "";
  return t ? gF(t, e) : e;
}
function gF(e, t) {
  let n = t.indexOf("#"),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? "" : t.substring(n),
    o = r.indexOf("?");
  if (o === -1) return r + e + i;
  let s = new URLSearchParams(e),
    a = r.substring(o + 1),
    l = new URLSearchParams(a);
  for (let [c, u] of s) l.has(c) || l.append(c, u);
  return r.substring(0, o + 1) + l.toString() + i;
}
function nu(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function va(e) {
  return typeof e == "string";
}
var yF = "preload";
function ew(e) {
  return typeof e == "object" && e !== null && !b.isValidElement(e) && yF in e;
}
function oz(e) {
  let t = b.lazy(e),
    n,
    r,
    i = b.forwardRef(function (s, a) {
      return b.createElement(r ?? t, a ? { ref: a, ...s } : s);
    });
  return (
    (i.preload = () => (n || (n = e().then((o) => ((r = o.default), r))), n)), i
  );
}
function du(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function bF(e) {
  return /bot|-google|google-|yandex|ia_archiver/iu.test(e);
}
function tw(e) {
  if ("scheduler" in O) {
    if ("yield" in scheduler) return scheduler.yield(e);
    if ("postTask" in scheduler) return scheduler.postTask(() => {}, e);
  }
  return e?.priority === "user-blocking"
    ? Promise.resolve()
    : new Promise((t) => {
        setTimeout(t);
      });
}
async function xF(e, t) {
  return await tw(t), e();
}
function SF(e, t = !0) {
  return new Promise((n) => {
    t && setTimeout(n, 100),
      requestAnimationFrame(() => {
        xF(n, e);
      });
  });
}
function nw(e, t, n) {
  ut(() => {
    (async () => {
      await SF(n, !1), e();
    })();
  }, t);
}
async function wF(e, t, n, r, i, o, s) {
  var a, l, c;
  let u = e,
    f = !1,
    d = { ...o },
    p = Array.from(u.matchAll(Oi)),
    y = await Promise.all(
      p.map(async (h) => {
        var v;
        let x = h?.[0],
          k = h?.[1];
        if (!x || !k)
          throw new Error(
            "Failed to replace path variables: unexpected regex match group"
          );
        let w = o[k];
        if (!w || !va(w))
          throw new Error(`No slug found for path variable ${k}`);
        let T = await ((v = s?.[i]) === null || v === void 0
          ? void 0
          : v.call(s));
        if (!T || !t) return w;
        let E = await T.getRecordIdBySlug(w, t);
        if (!E) return w;
        let F = await T.getSlugByRecordId(E, n);
        if (!F) {
          f = !0;
          let I = await T.getSlugByRecordId(E, r);
          return I && (d[k] = I), I ?? w;
        }
        return (d[k] = F), F;
      })
    ),
    g = 0,
    S = "",
    m = !1;
  for (let h = 0; h < p.length; h++) {
    let v = p[h],
      x = y[h];
    !v ||
      !x ||
      ((S += u.substring(g, v.index)),
      (g =
        ((a = v.index) !== null && a !== void 0 ? a : 0) +
        ((c = (l = v[0]) === null || l === void 0 ? void 0 : l.length) !==
          null && c !== void 0
          ? c
          : 0)),
      (S += y[h]),
      (m = !0));
  }
  return m && (u = S), { path: u, pathVariables: d, isMissingInLocale: f };
}
async function kF({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: o,
  preserveQueryParams: s,
}) {
  let { path: a } = r,
    l = { path: a, pathVariables: i, isMissingInLocale: !1 };
  if (!a) return l;
  if (i && r.collectionId)
    try {
      l = await wF(a, e, t, n, r.collectionId, i, o);
    } catch {}
  return (
    t.slug && (l.path = "/" + t.slug + l.path),
    s && l.path && (l.path = JS(l.path)),
    l
  );
}
function CF(e, t, { global: n, routes: r }) {
  var i;
  return ((i = r[e]) === null || i === void 0 ? void 0 : i[t]) || n;
}
var TF = { global: void 0, routes: {} },
  rw = b.createContext(TF);
function cz({ children: e, value: t }) {
  return C(rw.Provider, { value: t, children: e });
}
function EF() {
  return b.useContext(rw);
}
var yp = 10,
  RF = 1e4;
function PF(e) {
  let t = yp,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < RF; ) (n = e.next(t)), r.push(n.value), (t += yp);
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(",")})`, duration: t - yp }
  );
}
var gr = (e) => `--view-transition-${e}`;
function Bp(e) {
  return [parseFloat(e), e.endsWith("px") ? "px" : "%"];
}
function iw(e) {
  let { innerWidth: t, innerHeight: n } = O,
    [r, i] = Bp(e.x),
    [o, s] = Bp(e.y);
  return {
    x: i === "px" ? r : t * (r / 100),
    y: s === "px" ? o : n * (o / 100),
  };
}
var _F = {
    makeKeyframe: (e, t, n) => {
      let r = 0;
      return (
        ((n === "exit" &&
          e.angularDirection === "clockwise" &&
          t === "start") ||
          (n === "exit" &&
            e.angularDirection === "counter-clockwise" &&
            t === "end") ||
          (n === "enter" &&
            e.angularDirection === "counter-clockwise" &&
            t === "start") ||
          (n === "enter" &&
            e.angularDirection === "clockwise" &&
            t === "end")) &&
          (r = (e.sweepAngle / 360) * 100),
        `${gr("conic-offset")}: ${r}%;`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${gr("conic-offset")})`,
        r =
          (t === "exit" && e.angularDirection === "clockwise") ||
          (t === "enter" && e.angularDirection === "counter-clockwise"),
        i = r ? "transparent" : "black",
        o = r ? "black" : "transparent",
        s = "conic-gradient(from ";
      return (
        (s += `${e.angle}deg at ${e.x} ${e.y}, `),
        (s += `${i} 0%, ${i} ${n}, `),
        (s += `${o} ${n}, ${o} 100%)`),
        `mask-image: ${s}; -webkit-mask-image: ${s};`
      );
    },
    makePropertyRules: () => `
        @property ${gr("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
  },
  IF = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = iw(e);
      return t === "start"
        ? `clip-path: circle(0 at ${n}px ${r}px);`
        : `clip-path: circle(${Math.hypot(
            Math.max(n, O.innerWidth - n),
            Math.max(r, O.innerHeight - r)
          )}px at ${n}px ${r}px);`;
    },
  },
  FF = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = iw(e),
        i = O.innerHeight - r,
        o = O.innerWidth - n;
      return t === "start"
        ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);`
        : "clip-path: inset(0 round 0);";
    },
  },
  LF = {
    makeKeyframe: (e, t, n) => {
      let [, r] = Bp(e.width),
        i = `0${r}`;
      return (
        ((t === "start" && n === "exit") || (t === "end" && n === "enter")) &&
          (i = e.width),
        `${gr("blinds-width")}: ${i};`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${gr("blinds-width")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "repeating-linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} 0px, ${r} ${n}, `),
        (o += `${i} ${n}, ${i} ${e.width})`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${gr("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
  },
  MF = {
    makeKeyframe: (e, t, n) => {
      let r =
        (t === "start" && n === "exit") || (t === "end" && n === "enter")
          ? 1
          : 0;
      return `${gr("wipe-offset")}: ${r};`;
    },
    makeStyles: (e, t) => {
      let n = `var(${gr("wipe-offset")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
        (o += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${gr("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
  },
  OF = { circle: IF, conic: _F, inset: FF, blinds: LF, wipe: MF },
  DF = {
    opacity: 1,
    x: "0px",
    y: "0px",
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
  };
function E1(e, t, n, r) {
  var i;
  let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (
    e.mask &&
      (o +=
        ((i = r?.makeKeyframe) === null || i === void 0
          ? void 0
          : i.call(r, e.mask, t, n)) || ""),
    o
  );
}
function AF(e) {
  return e ? OF[e] : void 0;
}
function R1(e, { transition: t, ...n }) {
  var r;
  let i = "view-transition-" + e,
    o = { duration: "0s", easing: "linear" };
  if (t.type === "tween")
    (o.duration = t.duration + "s"),
      (o.easing = `cubic-bezier(${t.ease.join(",")})`);
  else if (t.type === "spring") {
    let { easing: c, duration: u } = PF(
      xs({
        keyframes: [0, 1],
        stiffness: t.stiffness,
        damping: t.damping,
        mass: t.mass,
        restDelta: 0.001,
        restSpeed: 1e-4,
      })
    );
    (o.duration = u + "ms"), (o.easing = c);
  }
  let s = AF((r = n?.mask) === null || r === void 0 ? void 0 : r.type),
    a = E1(n, "start", e, s),
    l = E1({ ...DF, mask: n.mask }, "end", e, s);
  return (
    e === "exit" && ([a, l] = [l, a]),
    `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ""}
        }
    `
  );
}
var ow = "view-transition-styles",
  VF = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {
      type: "tween",
      delay: 0,
      duration: 0.2,
      ease: [0.27, 0, 0.51, 1],
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  };
function BF({ exit: e = VF, enter: t }) {
  let n = document.createElement("style");
  n.id = ow;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  (e.mask ||
    t.mask ||
    e.opacity ||
    t.opacity ||
    e.transition.delay ||
    t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += R1("exit", e)),
    (r += R1("enter", t)),
    (n.textContent = r),
    document.head.appendChild(n);
}
function $F() {
  G.render(() => {
    let e = document.getElementById(ow);
    e && document.head.removeChild(e);
  });
}
function zF() {
  return !!document.startViewTransition;
}
function NF(e, t) {
  if (!zF()) return void e();
  BF(t);
  let n = document.startViewTransition(e);
  return (
    Promise.all([n.ready, n.finished])
      .then($F)
      .catch(() => {}),
    n
  );
}
function sw() {
  let e = EF(),
    t = V(void 0);
  return (
    N(() => {
      t.current && (t.current(), (t.current = void 0));
    }),
    fe(
      (n, r, i) => {
        let o = CF(n, r, e);
        if (o) {
          let s = new Promise((l) => {
            t.current = l;
          });
          return NF(async () => {
            i(), await s;
          }, o);
        } else return i();
      },
      [e]
    )
  );
}
function P1(
  e,
  t,
  {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: a,
  }
) {
  let { path: l } = t;
  if (l)
    try {
      let c = qp(t, {
        currentRoutePath: n,
        currentPathVariables: r,
        hash: i,
        pathVariables: o,
        preserveQueryParams: a,
      });
      aw({ routeId: e, hash: i, pathVariables: o, localeId: s }, c);
    } catch {}
}
function HF(e, t) {
  O.history.replaceState(e, "", t);
}
function aw(e, t) {
  O.history.pushState(e, "", t);
}
function jF({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
}) {
  b.useLayoutEffect(() => {
    e ||
      (performance.mark("framer-history-set-initial-state"),
      HF({ routeId: t, pathVariables: n, localeId: r }));
  }, []);
}
function WF(e, t) {
  let n = sw(),
    r = b.useRef(void 0),
    i = b.useCallback(
      ({ state: s }) => {
        var a, l, c;
        if (!nu(s)) return;
        let { routeId: u, hash: f, pathVariables: d, localeId: p } = s;
        if (!va(u)) return;
        let y = () => {
            t(
              u,
              va(p) ? p : void 0,
              va(f) ? f : void 0,
              nu(d) ? d : void 0,
              !1,
              !0
            );
          },
          g = n(e.current, u, y);
        g
          ? g.updateCallbackDone
              .then(
                (a = r.current) === null || a === void 0 ? void 0 : a.resolve
              )
              .catch(
                (l = r.current) === null || l === void 0 ? void 0 : l.reject
              )
          : (c = r.current) === null || c === void 0 || c.resolve();
      },
      [e, t, n]
    ),
    o = fe((s) => {
      s.navigationType === "traverse" &&
        s.intercept({
          async handler() {
            await new Promise((a, l) => {
              r.current = { resolve: a, reject: l };
            });
          },
          scroll: "after-transition",
        });
    }, []);
  b.useEffect(() => {
    var s;
    return (
      O.addEventListener("popstate", i),
      (s = O.navigation) === null ||
        s === void 0 ||
        s.addEventListener("navigate", o),
      () => {
        var a;
        O.removeEventListener("popstate", i),
          (a = O.navigation) === null ||
            a === void 0 ||
            a.removeEventListener("navigate", o);
      }
    );
  }, [i, o]);
}
function UF(e, t, n) {
  let r = du(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Oi, (o, s) => {
    var a;
    return String((a = i[s]) !== null && a !== void 0 ? a : o);
  });
}
function qp(
  e,
  {
    currentRoutePath: t,
    currentPathVariables: n,
    hash: r,
    pathVariables: i,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: a,
  }
) {
  var l;
  let c = t ?? "/";
  n && (c = c.replace(Oi, (y, g) => String(n[g] || y)));
  let f = (l = e?.path) !== null && l !== void 0 ? l : "/";
  i && (f = f.replace(Oi, (y, g) => String(i[g] || y)));
  let d = UF(r, e, o),
    p = c === f && d;
  return (
    s && (f = ZS(c, f)), (a || p) && (f = JS(f)), d && (f = `${f}#${d}`), f
  );
}
async function XF(e, t, n) {
  if (!e.path || !t) return !1;
  let i = `${n.slug ? `/${n.slug}` : ""}${QS(e.path, t)}`;
  return (await fetch(i, { method: "HEAD", redirect: "manual" })).type ===
    "opaqueredirect"
    ? ((O.location.href = O.location.origin + i), !0)
    : !1;
}
async function YF(e) {
  let t = await kF(e);
  if (t) {
    try {
      localStorage.setItem("preferredLocale", e.nextLocale.code);
    } catch {}
    try {
      if (typeof t.path != "string")
        throw new Error("Expected result.path to be a string");
      if (
        t.isMissingInLocale &&
        (await XF(e.route, t.pathVariables, e.nextLocale))
      )
        return;
      aw(
        {
          routeId: e.routeId,
          pathVariables: t.pathVariables,
          localeId: e.nextLocale.id,
          paginationInfo: O.history.state.paginationInfo,
        },
        t.path
      );
    } catch {}
    return t;
  }
}
function pr(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (r) {
    console.warn(`Could not measure ${e}`, r);
  }
}
var Pn = !1;
function fz() {
  (Pn = !0), performance.mark("framer-hydration-start");
}
var _1 = !1,
  I1 = !1,
  F1 = !1;
function GF() {
  let e = "framer-hydration-router";
  qe(() => {
    _1 || !Pn || ((_1 = !0), performance.mark(`${e}-insertion-effect`));
  }, []),
    ut(() => {
      I1 || !Pn || ((I1 = !0), performance.mark(`${e}-layout-effect`));
    }, []),
    N(() => {
      F1 || !Pn || ((F1 = !0), performance.mark(`${e}-effect`));
    }, []);
}
var L1 = !1,
  M1 = !1,
  O1 = !1;
function KF() {
  let e = "framer-hydration-",
    t = `${e}layout-effects-end`,
    n = `${e}effects-end`,
    r = `${e}browser-render-start`,
    i = `${e}render-end`;
  return (
    qe(() => {
      L1 ||
        !Pn ||
        ((L1 = !0),
        performance.mark(i),
        pr(`${e}render`, `${e}start`, i),
        performance.mark(`${e}insertion-effects-start`));
    }, []),
    ut(() => {
      M1 ||
        !Pn ||
        ((M1 = !0),
        performance.mark(`${e}layout-effects-start`),
        requestAnimationFrame(() => {
          var o, s, a;
          performance.mark(r),
            pr(
              `${e}uho`,
              (s =
                (o = performance.getEntriesByName(n)[0]) === null ||
                o === void 0
                  ? void 0
                  : o.name) !== null && s !== void 0
                ? s
                : (a = performance.getEntriesByName(t)[0]) === null ||
                  a === void 0
                ? void 0
                : a.name,
              r
            );
        }));
    }, []),
    N(() => {
      var o;
      if (O1 || !Pn) return;
      O1 = !0;
      let s = `${e}effects-start`;
      performance.mark(s),
        ((o = performance.getEntriesByName(r)[0]) === null || o === void 0
          ? void 0
          : o.name) ||
          (pr(`${e}commit`, t, s), performance.mark(`${e}effects-sync`));
    }, []),
    null
  );
}
var D1 = !1,
  A1 = !1,
  V1 = !1,
  B1 = !1;
function qF() {
  let e = "framer-hydration-",
    t = `${e}layout-effects-end`,
    n = `${e}effects-end`,
    r = `${e}browser-render-start`,
    i = `${e}start`,
    o = `${e}insertion-effects-end`,
    s = `${e}first-paint`,
    a = `${e}browser-raf-end`;
  return (
    qe(() => {
      D1 ||
        !Pn ||
        ((D1 = !0),
        performance.mark(o),
        pr(`${e}insertion-effects`, `${e}insertion-effects-start`, o));
    }, []),
    ut(() => {
      A1 ||
        !Pn ||
        ((A1 = !0),
        performance.mark(t),
        pr(`${e}layout-effects`, `${e}layout-effects-start`, t),
        requestAnimationFrame(() => {
          performance.mark(a), pr(`${e}raf`, r, a);
        }));
    }, []),
    N(() => {
      var l, c, u;
      V1 ||
        !Pn ||
        ((V1 = !0),
        performance.mark(n),
        pr(
          `${e}effects`,
          (c =
            (l = performance.getEntriesByName(s)[0]) === null || l === void 0
              ? void 0
              : l.name) !== null && c !== void 0
            ? c
            : (u = performance.getEntriesByName(`${e}effects-start`)[0]) ===
                null || u === void 0
            ? void 0
            : u.name,
          n
        ));
    }, []),
    nw(
      () => {
        B1 ||
          !Pn ||
          ((B1 = !0),
          performance.mark(s),
          pr(`${e}time-to-first-paint`, i, s),
          pr(`${e}browser-render`, a, s));
      },
      [],
      { priority: "user-blocking" }
    ),
    null
  );
}
function QF() {
  return KF(), null;
}
function ZF() {
  return qF(), null;
}
var $1 = { Start: QF, End: ZF },
  ga = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
  ],
  lw = (e) => {
    var t, n;
    !(
      (n = (t = e.target) === null || t === void 0 ? void 0 : t.closest) ===
        null || n === void 0
    ) &&
      n.call(t, "#main") &&
      (e.stopPropagation(),
      performance.mark("framer-react-event-handling-prevented"));
  },
  cw = !1;
function dz() {
  if (!ga) return;
  (cw = !0), performance.mark("framer-react-event-handling-start");
  let e = { capture: !0 };
  ga.forEach((t) => document.body.addEventListener(t, lw, e));
}
function JF() {
  return (
    nw(
      () => {
        if (!cw || !ga) return;
        let e = { capture: !0 };
        ga.forEach((t) => document.body.removeEventListener(t, lw, e)),
          (ga = void 0),
          performance.mark("framer-react-event-handling-end");
      },
      [],
      { priority: "user-blocking" }
    ),
    null
  );
}
function eL(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((i) => n[i] === r[i]);
}
function uw(e) {
  return b.useCallback((t) => e[t], [e]);
}
var Qp = (() => b.createContext({}))();
function tL({ api: e, children: t }) {
  return C(Qp.Provider, { value: e, children: t });
}
function Ko() {
  return b.useContext(Qp);
}
function nL({ routes: e, children: t }) {
  let n = uw(e);
  return C(Qp.Provider, { value: { getRoute: n }, children: t });
}
var rL = class extends ve {
    constructor() {
      super(...arguments), (this.state = { error: void 0 });
    }
    static getDerivedStateFromError(e) {
      return (
        console.error("Derived error in SuspenseErrorBoundary", e), { error: e }
      );
    }
    componentDidCatch(e, t) {
      var n;
      console.error("Caught error in SuspenseErrorBoundary", e, t),
        (n = O.__framer_events) === null ||
          n === void 0 ||
          n.push([
            "published_site_load_recoverable_error",
            { message: String(e), componentStack: t?.componentStack },
          ]);
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (this.state.error instanceof qS) throw this.state.error.cause;
      return C(ns, { children: this.props.fallbackChildren });
    }
  },
  iL = (() => (typeof O < "u" ? new Promise(() => {}) : null))();
function oL() {
  if (typeof O > "u") return null;
  throw iL;
}
function sL({ children: e }) {
  return C(rL, {
    fallbackChildren: e,
    children: C(ns, { fallback: C(oL, {}), children: e }),
  });
}
var z1 = "default";
function aL() {
  let [e, t] = b.useState(0);
  return [e, b.useCallback(() => t((n) => n + 1), [])];
}
var lL = async () => {},
  cL = { activeLocale: null, locales: [], setLocale: lL },
  fw = b.createContext(cL);
function uL() {
  return b.useContext(fw);
}
function fL(e) {
  let t = `start-${e}`,
    n = `end-${e}`,
    r = V(void 0);
  return (
    N(() => {
      r.current && (r.current(), (r.current = void 0));
    }),
    fe(() => {
      let i = new Promise((o) => {
        r.current = o;
      });
      performance.mark(t),
        i
          .then(() => {
            performance.mark(n), performance.measure(e, t, n);
          })
          .catch(() => {});
    }, [e, t, n])
  );
}
function N1(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    pL(r, t);
    return;
  }
  n || O.scrollTo(0, 0);
}
function dL(e) {
  let t = V([]);
  return (
    ut(() => {
      var n;
      !((n = t.current) === null || n === void 0) &&
        n.length &&
        (t.current.forEach((r) => r()), (t.current = []));
    }, [e]),
    fe((n) => {
      t.current.push(n);
    }, [])
  );
}
function hL({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: o,
  routes: s,
  initialLocaleId: a,
  locales: l = [],
  preserveQueryParams: c = !1,
}) {
  GF(),
    jF({
      disabled: t,
      routeId: r,
      initialPathVariables: n,
      initialLocaleId: a,
    });
  let u = sw(),
    f = fL("route-change"),
    d = V(r),
    p = V(n),
    y = V(a),
    g = y.current,
    S = se(() => {
      var B;
      return (B = l.find(({ id: j }) => (g ? j === g : j === z1))) !== null &&
        B !== void 0
        ? B
        : null;
    }, [g, l]),
    [m, h] = aL(),
    v = se(
      () => ({
        activeLocale: S,
        locales: l,
        setLocale: async (B) => {
          let j;
          va(B) ? (j = B) : nu(B) && (j = B.id);
          let te = l.find(({ id: ie }) => ie === z1),
            ne = l.find(({ id: ie }) => ie === j);
          if (!ne) return;
          let U = d.current,
            re = s[U];
          if (re)
            try {
              let ie = await YF({
                currentLocale: S,
                nextLocale: ne,
                route: re,
                routeId: U,
                defaultLocale: te,
                pathVariables: p.current,
                collectionUtils: o,
                preserveQueryParams: c,
              });
              if (!ie) return;
              (p.current = ie.pathVariables),
                (y.current = ne.id),
                u(d.current, U, () => Hi(h)),
                f();
            } catch {}
        },
      }),
      [S, o, h, l, f, c, s, u]
    ),
    x = dL(m),
    k = fe(
      (B, j, te, ne, U = !1, re = !1) => {
        (d.current = B),
          (p.current = ne),
          (y.current = j),
          x(() => {
            N1(te, U, re);
          }),
          Hi(h),
          f();
      },
      [h, f, x]
    );
  WF(d, k);
  let w = fe(
      (B, j, te, ne) => {
        var U, re;
        let ie = s[B];
        if (te) {
          let ee = new Set(),
            yt = (U = ie?.path) !== null && U !== void 0 ? U : "/";
          for (let Be of yt.matchAll(Oi)) {
            let Ye = Be[1];
            if (Ye === void 0)
              throw new Error(
                "A matching path variable should not be undefined"
              );
            ee.add(Ye);
          }
          te = Object.fromEntries(
            Object.entries(te).filter(([Be]) => ee.has(Be))
          );
        }
        let be = du(ie, j);
        if (
          eL(
            { routeId: d.current, pathVariables: p.current },
            { routeId: B, pathVariables: te }
          )
        ) {
          if (
            ((re = O.history.state) === null || re === void 0
              ? void 0
              : re.hash) !== j &&
            !t
          ) {
            let ee = s[B];
            ee &&
              P1(B, ee, {
                currentRoutePath: ee.path,
                currentPathVariables: p.current,
                pathVariables: te,
                hash: j,
                localeId: y.current,
                preserveQueryParams: c,
              });
          }
          N1(be, ne, !1);
          return;
        }
        if (!ie) return;
        if (!t) {
          let ee = s[d.current];
          P1(B, ie, {
            currentRoutePath: ee?.path,
            currentPathVariables: p.current,
            hash: j,
            pathVariables: te,
            localeId: y.current,
            preserveQueryParams: c,
          });
        }
        let de = () => k(B, y.current, be, te, ne, !1);
        u(d.current, B, de);
      },
      [s, t, k, u, c]
    ),
    T = uw(s),
    E = d.current,
    F = p.current,
    I = se(
      () => ({
        navigate: w,
        getRoute: T,
        currentRouteId: E,
        currentPathVariables: F,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: c,
      }),
      [w, T, E, F, s, o, c]
    ),
    D = s[d.current];
  if (!D) throw new Error(`Router cannot find route for ${d.current}`);
  let $ = !S || !D.includedLocales || D.includedLocales.includes(S.id),
    J = D.path && F ? QS(D.path, F) : D.path,
    Z = String(g) + J;
  return C(tL, {
    api: I,
    children: C(fw.Provider, {
      value: v,
      children: oe(sL, {
        children: [
          C(hF, {
            notFoundPage: i,
            defaultPageStyle: e,
            forceUpdateKey: m,
            children: oe(
              ri,
              {
                children: [C($1.Start, {}), $ ? Vp(D.page, e) : i && Vp(i, e)],
              },
              Z
            ),
          }),
          C(JF, {}),
          C($1.End, {}),
        ],
      }),
    }),
  });
}
function pL(e, t) {
  let n = t
    ? { behavior: "smooth", block: "start", inline: "nearest" }
    : void 0;
  e.scrollIntoView(n);
}
var Hc, bp, H1;
function mL(e) {
  if (H1 !== e) {
    Hc = {};
    for (let [t, { path: n }] of Object.entries(e))
      n && (Hc[n] = { path: n, depth: vL(n), routeId: t });
    (bp = Object.values(Hc)),
      bp.sort(({ depth: t }, { depth: n }) => n - t),
      (H1 = e);
  }
  return [Hc, bp];
}
function dw(e, t, n = !0, r = []) {
  let [i, o] = mL(e),
    s,
    a,
    l = t;
  if (r.length > 0) {
    let d = l.split("/").find(Boolean);
    if (
      (d &&
        ((s = r.find(({ slug: p }) => p === d)),
        s && ((a = s.id), (l = l.substring(s.slug.length + 1)))),
      !a)
    ) {
      let p = r.find(({ slug: y }) => y === "");
      p && (a = p.id);
    }
  }
  let c = i[l];
  if (c) {
    let d = j1(l, c.path);
    if (d.isMatch)
      return {
        routeId: c.routeId,
        localeId: a,
        pathVariables: d.pathVariables,
      };
  }
  for (let { path: d, routeId: p } of o) {
    let y = j1(l, d);
    if (y.isMatch)
      return { routeId: p, localeId: a, pathVariables: y.pathVariables };
  }
  if (!n) throw new Error("No exact match found for path");
  let u = i["/"];
  if (u) return { routeId: u.routeId, localeId: a };
  let f = Object.keys(e)[0];
  if (!f) throw new Error("Router should not have undefined routes");
  return { routeId: f, localeId: a };
}
function vL(e) {
  let t = e.replace(/^\/|\/$/gu, "");
  return t === "" ? 0 : t.split("/").length;
}
function j1(e, t) {
  let n = [],
    i = gL(t).replace(Oi, (c, u) => (n.push(u), "([^/]+)")),
    o = new RegExp(i + "$"),
    s = e.match(o);
  if (!s) return { isMatch: !1 };
  if (s.length === 1) return { isMatch: !0 };
  let a = {},
    l = s.slice(1);
  for (let c = 0; c < n.length; ++c) {
    let u = n[c];
    if (u === void 0) continue;
    let f = l[c],
      d = a[u];
    if (d) {
      if (d !== f) return { isMatch: !1 };
      continue;
    }
    if (f === void 0)
      throw new Error("Path variable values cannot be undefined");
    a[u] = f;
  }
  return { isMatch: !0, pathVariables: a };
}
function gL(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d");
}
var yL = "page";
function W1(e) {
  return nu(e) && yL in e && e.page !== void 0;
}
var bL = (() => b.createContext(void 0))();
function qo() {
  var e;
  let t = Ko(),
    n = A(bL),
    r = n ?? t.currentRouteId;
  if (!r) return;
  let i = (e = t.getRoute) === null || e === void 0 ? void 0 : e.call(t, r);
  if (i)
    return { ...i, id: r, pathVariables: n ? void 0 : t.currentPathVariables };
}
function xL(e) {
  var t;
  let n = Ko();
  if (e)
    return (t = n.getRoute) === null || t === void 0 ? void 0 : t.call(n, e);
}
var Zp = (() => typeof O < "u" && !bF(Le.userAgent))();
function hw(e, t = !0) {
  let { getRoute: n } = Ko();
  N(() => {
    if (!(!n || !t || !Zp)) for (let r of e) pw(n(r));
  }, [e, n, t]);
}
async function pw(e) {
  if (!Zp || !e) return;
  let t = e.page;
  if (!(!t || !ew(t))) {
    await tw();
    try {
      await t.preload();
    } catch {}
  }
}
function _z(e, t) {
  var n;
  let r = qo(),
    i = (n = xL(t)) !== null && n !== void 0 ? n : r;
  return b.useMemo(() => (i ? du(i, e) : e), [e, i]);
}
var U1 = new Set();
function ba(e, ...t) {
  U1.has(e) || (U1.add(e), console.warn(e, ...t));
}
function SL(e, t, n) {
  let r = n ? `, use ${n} instead` : "",
    i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  ba(i);
}
var mw = class {
    constructor() {
      R(this, "observers", new Set()), R(this, "transactions", {});
    }
    add(e) {
      this.observers.add(e);
      let t = !1;
      return () => {
        t || ((t = !0), this.remove(e));
      };
    }
    remove(e) {
      this.observers.delete(e);
    }
    notify(e, t) {
      if (t) {
        let n = this.transactions[t] || e;
        (n.value = e.value), (this.transactions[t] = n);
      } else this.callObservers(e);
    }
    finishTransaction(e) {
      let t = this.transactions[e];
      return delete this.transactions[e], this.callObservers(t, e);
    }
    callObservers(e, t) {
      let n = [];
      return (
        new Set(this.observers).forEach((r) => {
          typeof r == "function" ? r(e, t) : (r.update(e, t), n.push(r.finish));
        }),
        n
      );
    }
  },
  Xe = (() => {
    function e(t) {
      return (
        SL(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        _n(t) ? t : new kL(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let n = Math.random(),
          r = new Set();
        t((s, a) => {
          s.set(a, n), r.add(s);
        }, n);
        let o = [];
        r.forEach((s) => {
          o.push(...s.finishTransaction(n));
        }),
          o.forEach((s) => {
            s(n);
          });
      }),
      (e.getNumber = (t, n = 0) => e.get(t, n)),
      (e.get = (t, n) => (t == null ? n : _n(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
          let i = t[r];
          _n(i) ? (n[r] = i.get()) : (n[r] = i);
        }
        return n;
      }),
      e
    );
  })(),
  X1 = "onUpdate",
  Y1 = "finishTransaction";
function _n(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    X1 in e &&
    e[X1] instanceof Function &&
    Y1 in e &&
    e[Y1] instanceof Function
  );
}
function wL(e, t) {
  return {
    interpolate(n, r) {
      let i = n.get(),
        o = r.get(),
        s = Xe(i);
      return (a) => {
        let l = t.interpolate(i, o)(a);
        return s.set(l), s;
      };
    },
    difference(n, r) {
      let i = n.get();
      return t.difference(i, r.get());
    },
  };
}
var kL = class {
  constructor(e) {
    (this.value = e), R(this, "observers", new mw());
  }
  static interpolationFor(e, t) {
    if (_n(e)) return wL(e, t);
  }
  get() {
    return this.value;
  }
  set(e, t) {
    let n = this.value;
    _n(e) && (e = e.get()), (this.value = e);
    let r = { value: e, oldValue: n };
    this.observers.notify(r, t);
  }
  finishTransaction(e) {
    return this.observers.finishTransaction(e);
  }
  onUpdate(e) {
    return this.observers.add(e);
  }
};
function jc(e, t) {
  let r = 10 ** Math.round(Math.abs(t));
  return Math.round(e * r) / r;
}
function G1(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function tn(e, t) {
  return { x: e, y: t };
}
((e) => {
  (e.add = (...i) =>
    i.reduce((o, s) => ({ x: o.x + s.x, y: o.y + s.y }), { x: 0, y: 0 })),
    (e.subtract = (i, o) => ({ x: i.x - o.x, y: i.y - o.y })),
    (e.multiply = (i, o) => ({ x: i.x * o, y: i.y * o })),
    (e.divide = (i, o) => ({ x: i.x / o, y: i.y / o })),
    (e.absolute = (i) => ({ x: Math.abs(i.x), y: Math.abs(i.y) })),
    (e.reverse = (i) => ({ x: i.x * -1, y: i.y * -1 })),
    (e.pixelAligned = (i, o = { x: 0, y: 0 }) => ({
      x: G1(i.x, o.x),
      y: G1(i.y, o.y),
    })),
    (e.distance = (i, o) => {
      let s = Math.abs(i.x - o.x),
        a = Math.abs(i.y - o.y);
      return Math.sqrt(s * s + a * a);
    }),
    (e.angle = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI - 90),
    (e.angleFromX = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI),
    (e.isEqual = (i, o) => i.x === o.x && i.y === o.y),
    (e.rotationNormalizer = () => {
      let i;
      return (o) => {
        typeof i != "number" && (i = o);
        let s = i - o,
          a = Math.abs(s) + 180,
          l = Math.floor(a / 360);
        return s < 180 && (o -= l * 360), s > 180 && (o += l * 360), (i = o), o;
      };
    });
  function t(i, o) {
    return { x: (i.x + o.x) / 2, y: (i.y + o.y) / 2 };
  }
  e.center = t;
  function n(i) {
    let o = 0,
      s = 0;
    i.forEach((c) => {
      (o += c.x), (s += c.y);
    });
    let a = o / i.length,
      l = s / i.length;
    return { x: a, y: l };
  }
  e.centroid = n;
  function r(i) {
    let o = e.centroid(i),
      s = new Map();
    for (let a = 0; a < i.length; a++) {
      let l = i[a];
      s.set(l, Math.atan2(l.x - o.x, l.y - o.y));
    }
    return i.sort((a, l) => s.get(a) - s.get(l));
  }
  e.sortClockwise = r;
})(tn || (tn = {}));
var $p = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function Yr(e, t, n, r = !1) {
  let [i, o] = t,
    [s, a] = n,
    l = o - i;
  if (l === 0) return (a + s) / 2;
  let c = a - s;
  if (c === 0) return s;
  let u = s + ((e - i) / l) * c;
  if (r === !0)
    if (s < a) {
      if (u < s) return s;
      if (u > a) return a;
    } else {
      if (u > s) return s;
      if (u < a) return a;
    }
  return u;
}
function No(e) {
  return !isNaN(e) && isFinite(e);
}
function Gr(e) {
  let t = zp(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function zp(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var CL = (() => oF().Hsluv)(),
  $t = new CL();
function TL(e, t, n) {
  return (
    ($t.rgb_r = e / 255),
    ($t.rgb_g = t / 255),
    ($t.rgb_b = n / 255),
    $t.rgbToHsluv(),
    { h: $t.hsluv_h, s: $t.hsluv_s, l: $t.hsluv_l }
  );
}
function EL(e, t, n, r = 1) {
  return (
    ($t.hsluv_h = e),
    ($t.hsluv_s = t),
    ($t.hsluv_l = n),
    $t.hsluvToRgb(),
    { r: $t.rgb_r * 255, g: $t.rgb_g * 255, b: $t.rgb_b * 255, a: r }
  );
}
function Wc(e, t, n, r) {
  let i = Math.round(e),
    o = Math.round(t * 100),
    s = Math.round(n * 100);
  return r === void 0 || r === 1
    ? "hsv(" + i + ", " + o + "%, " + s + "%)"
    : "hsva(" + i + ", " + o + "%, " + s + "%, " + r + ")";
}
function RL(e, t, n) {
  return {
    r: No(e) ? _t(e, 255) * 255 : 0,
    g: No(t) ? _t(t, 255) * 255 : 0,
    b: No(n) ? _t(n, 255) * 255 : 0,
  };
}
function K1(e, t, n, r) {
  let i = [
    Sp(Math.round(e).toString(16)),
    Sp(Math.round(t).toString(16)),
    Sp(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function Jp(e, t, n) {
  let r,
    i,
    o = _t(e, 255),
    s = _t(t, 255),
    a = _t(n, 255),
    l = Math.max(o, s, a),
    c = Math.min(o, s, a),
    u = (i = r = (l + c) / 2);
  if (l === c) u = i = 0;
  else {
    let f = l - c;
    switch (((i = r > 0.5 ? f / (2 - l - c) : f / (l + c)), l)) {
      case o:
        u = (s - a) / f + (s < a ? 6 : 0);
        break;
      case s:
        u = (a - o) / f + 2;
        break;
      case a:
        u = (o - s) / f + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function xp(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function PL(e, t, n) {
  let r, i, o;
  if (
    ((e = _t(e, 360)), (t = _t(t * 100, 100)), (n = _t(n * 100, 100)), t === 0)
  )
    r = i = o = n;
  else {
    let s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - s;
    (r = xp(a, s, e + 1 / 3)), (i = xp(a, s, e)), (o = xp(a, s, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function q1(e, t, n) {
  (e = _t(e, 255)), (t = _t(t, 255)), (n = _t(n, 255));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = r - i,
    s,
    a = r === 0 ? 0 : o / r,
    l = r;
  if (r === i) s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / o + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / o + 2;
        break;
      case n:
        s = (e - t) / o + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, v: l };
}
function _L(e, t, n) {
  (e = _t(e, 360) * 6), (t = _t(t * 100, 100)), (n = _t(n * 100, 100));
  let r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    s = n * (1 - i * t),
    a = n * (1 - (1 - i) * t),
    l = r % 6,
    c = [n, s, o, o, a, n][l],
    u = [a, n, n, s, o, o][l],
    f = [o, o, a, n, n, s][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function _t(e, t) {
  let n, r;
  if (
    (typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")
  ) {
    IL(e) && (e = "100%");
    let i = FL(e);
    (r = Math.min(n, Math.max(0, parseFloat(e)))),
      i && (r = Math.floor(r * n) / 100);
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function IL(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function FL(e) {
  return typeof e == "string" && e.includes("%");
}
function Sp(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var Xn = (() => {
  let e = "[-\\+]?\\d+%?",
    n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")",
    r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
    i =
      "[\\s|\\(]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + i),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + i),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + i),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function em(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    r = $p[n];
  if ((r && (n = r), n === "transparent"))
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let i;
  return (i = Xn.rgb.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (i = Xn.rgba.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "rgb",
      }
    : (i = Xn.hsl.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Gr(i[2] ?? ""),
        l: Gr(i[3] ?? ""),
        a: 1,
        format: "hsl",
      }
    : (i = Xn.hsla.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Gr(i[2] ?? ""),
        l: Gr(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsl",
      }
    : (i = Xn.hsv.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Gr(i[2] ?? ""),
        v: Gr(i[3] ?? ""),
        a: 1,
        format: "hsv",
      }
    : (i = Xn.hsva.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Gr(i[2] ?? ""),
        v: Gr(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsv",
      }
    : (i = Xn.hex8.exec(n))
    ? {
        r: en(i[1] ?? ""),
        g: en(i[2] ?? ""),
        b: en(i[3] ?? ""),
        a: Q1(i[4] ?? ""),
        format: r ? "name" : "hex",
      }
    : (i = Xn.hex6.exec(n))
    ? {
        r: en(i[1] ?? ""),
        g: en(i[2] ?? ""),
        b: en(i[3] ?? ""),
        a: 1,
        format: r ? "name" : "hex",
      }
    : (i = Xn.hex4.exec(n))
    ? {
        r: en(`${i[1]}${i[1]}`),
        g: en(`${i[2]}${i[2]}`),
        b: en(`${i[3]}${i[3]}`),
        a: Q1(i[4] + "" + i[4]),
        format: r ? "name" : "hex",
      }
    : (i = Xn.hex3.exec(n))
    ? {
        r: en(`${i[1]}${i[1]}`),
        g: en(`${i[2]}${i[2]}`),
        b: en(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? "name" : "hex",
      }
    : !1;
}
function en(e) {
  return parseInt(e, 16);
}
function Q1(e) {
  return en(e) / 255;
}
var Z1 = new Map(),
  W = (() => {
    function e(o, s, a, l) {
      if (typeof o == "string") {
        let u = Z1.get(o);
        return (
          u ||
          ((u = t(o)),
          u === void 0 ? { ...e("black"), isValid: !1 } : (Z1.set(o, u), u))
        );
      }
      let c = t(o, s, a, l);
      return c !== void 0 ? c : { ...e("black"), isValid: !1 };
    }
    function t(o, s, a, l) {
      if (o === "") return;
      let c = LL(o, s, a, l);
      if (c) {
        let u = {
          r: c.r,
          g: c.g,
          b: c.b,
          a: c.a,
          h: c.h,
          s: c.s,
          l: c.l,
          initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
          roundA: Math.round(100 * c.a) / 100,
          format: c.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let n = {
      isRGB(o) {
        return o === "rgb" || o === "rgba";
      },
      isHSL(o) {
        return o === "hsl" || o === "hsla";
      },
    };
    (e.inspect = (o, s) =>
      o.format === "hsl"
        ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>`
        : o.format === "hex" || o.format === "name"
        ? `<${o.constructor.name} "${s}">`
        : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`),
      (e.isColor = (o) =>
        typeof o == "string" ? e.isColorString(o) : e.isColorObject(o)),
      (e.isColorString = (o) => (typeof o == "string" ? em(o) !== !1 : !1)),
      (e.isColorObject = (o) =>
        o &&
        typeof o != "string" &&
        typeof o.r == "number" &&
        typeof o.g == "number" &&
        typeof o.b == "number" &&
        typeof o.h == "number" &&
        typeof o.s == "number" &&
        typeof o.l == "number" &&
        typeof o.a == "number" &&
        typeof o.roundA == "number" &&
        typeof o.format == "string"),
      (e.toString = (o) => e.toRgbString(o)),
      (e.toHex = (o, s = !1) => K1(o.r, o.g, o.b, s)),
      (e.toHexString = (o, s = !1) => `#${e.toHex(o, s)}`),
      (e.toRgbString = (o) =>
        o.a === 1
          ? "rgb(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ")"
          : "rgba(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ", " +
            o.roundA +
            ")"),
      (e.toHusl = (o) => ({ ...TL(o.r, o.g, o.b), a: o.roundA })),
      (e.toHslString = (o) => {
        let s = e.toHsl(o),
          a = Math.round(s.h),
          l = Math.round(s.s * 100),
          c = Math.round(s.l * 100);
        return o.a === 1
          ? "hsl(" + a + ", " + l + "%, " + c + "%)"
          : "hsla(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toHsv = (o) => {
        let s = q1(o.r, o.g, o.b);
        return { h: s.h * 360, s: s.s, v: s.v, a: o.a };
      }),
      (e.toHsvString = (o) => {
        let s = q1(o.r, o.g, o.b),
          a = Math.round(s.h * 360),
          l = Math.round(s.s * 100),
          c = Math.round(s.v * 100);
        return o.a === 1
          ? "hsv(" + a + ", " + l + "%, " + c + "%)"
          : "hsva(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toName = (o) => {
        if (o.a === 0) return "transparent";
        if (o.a < 1) return !1;
        let s = K1(o.r, o.g, o.b, !0);
        for (let a of Object.keys($p)) if ($p[a] === s) return a;
        return !1;
      }),
      (e.toHsl = (o) => ({ h: Math.round(o.h), s: o.s, l: o.l, a: o.a })),
      (e.toRgb = (o) => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a,
      })),
      (e.brighten = (o, s = 10) => {
        let a = e.toRgb(o);
        return (
          (a.r = Math.max(
            0,
            Math.min(255, a.r - Math.round(255 * -(s / 100)))
          )),
          (a.g = Math.max(
            0,
            Math.min(255, a.g - Math.round(255 * -(s / 100)))
          )),
          (a.b = Math.max(
            0,
            Math.min(255, a.b - Math.round(255 * -(s / 100)))
          )),
          e(a)
        );
      }),
      (e.lighten = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l += s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.darken = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l -= s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.saturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s += s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.desaturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s -= s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.grayscale = (o) => e.desaturate(o, 100)),
      (e.hueRotate = (o, s) => {
        let a = e.toHsl(o);
        return (a.h += s), (a.h = a.h > 360 ? a.h - 360 : a.h), e(a);
      }),
      (e.alpha = (o, s = 1) => e({ r: o.r, g: o.g, b: o.b, a: s })),
      (e.transparent = (o) => e.alpha(o, 0)),
      (e.multiplyAlpha = (o, s = 1) =>
        e({ r: o.r, g: o.g, b: o.b, a: o.a * s })),
      (e.interpolate = (o, s, a = "rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(s))
          throw new TypeError(
            "Both arguments for Color.interpolate must be Color objects"
          );
        return (l) => e.mixAsColor(o, s, l, !1, a);
      }),
      (e.mix = (o, s, { model: a = "rgb" } = {}) => {
        let l = typeof o == "string" ? e(o) : o,
          c = e.interpolate(l, s, a);
        return (u) => e.toRgbString(c(u));
      }),
      (e.mixAsColor = (o, s, a = 0.5, l = !1, c = "rgb") => {
        let u = null;
        if (n.isRGB(c))
          u = e({
            r: Yr(a, [0, 1], [o.r, s.r], l),
            g: Yr(a, [0, 1], [o.g, s.g], l),
            b: Yr(a, [0, 1], [o.b, s.b], l),
            a: Yr(a, [0, 1], [o.a, s.a], l),
          });
        else {
          let f, d;
          n.isHSL(c)
            ? ((f = e.toHsl(o)), (d = e.toHsl(s)))
            : ((f = e.toHusl(o)), (d = e.toHusl(s))),
            f.s === 0 ? (f.h = d.h) : d.s === 0 && (d.h = f.h);
          let p = f.h,
            y = d.h,
            g = y - p;
          g > 180 ? (g = y - 360 - p) : g < -180 && (g = y + 360 - p);
          let S = {
            h: Yr(a, [0, 1], [p, p + g], l),
            s: Yr(a, [0, 1], [f.s, d.s], l),
            l: Yr(a, [0, 1], [f.l, d.l], l),
            a: Yr(a, [0, 1], [o.a, s.a], l),
          };
          n.isHSL(c) ? (u = e(S)) : (u = e(EL(S.h, S.s, S.l, S.a)));
        }
        return u;
      }),
      (e.random = (o = 1) => {
        function s() {
          return Math.floor(Math.random() * 255);
        }
        return e("rgba(" + s() + ", " + s() + ", " + s() + ", " + o + ")");
      }),
      (e.grey = (o = 0.5, s = 1) => (
        (o = Math.floor(o * 255)),
        e("rgba(" + o + ", " + o + ", " + o + ", " + s + ")")
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (o, s, a) => Jp(o, s, a)),
      (e.isValidColorProperty = (o, s) =>
        !!(
          (o.toLowerCase().slice(-5) === "color" ||
            o === "fill" ||
            o === "stroke") &&
          typeof s == "string" &&
          e.isColorString(s)
        )),
      (e.difference = (o, s) => {
        let a = (o.r + s.r) / 2,
          l = o.r - s.r,
          c = o.g - s.g,
          u = o.b - s.b,
          f = Math.pow(l, 2),
          d = Math.pow(c, 2),
          p = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * p + (a * (f - p)) / 256);
      }),
      (e.equal = (o, s, a = 0.1) =>
        !(
          Math.abs(o.r - s.r) >= a ||
          Math.abs(o.g - s.g) >= a ||
          Math.abs(o.b - s.b) >= a ||
          Math.abs(o.a - s.a) * 256 >= a
        ));
    let r = no([0, 255], [0, 1]);
    function i(o) {
      o = r(o);
      let s = Math.abs(o);
      return s < 0.04045
        ? o / 12.92
        : (Math.sign(o) || 1) * Math.pow((s + 0.055) / 1.055, 2.4);
    }
    return (
      (e.luminance = (o) => {
        let { r: s, g: a, b: l } = e.toRgb(o);
        return 0.2126 * i(s) + 0.7152 * i(a) + 0.0722 * i(l);
      }),
      (e.contrast = (o, s) => {
        let a = e.luminance(o),
          l = e.luminance(s);
        return (Math.max(a, l) + 0.05) / (Math.min(a, l) + 0.05);
      }),
      e
    );
  })();
function LL(e, t, n, r = 1) {
  let i;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (i = Np({ r: e, g: t, b: n, a: r }))
      : typeof e == "string"
      ? (i = ML(e))
      : typeof e == "object" &&
        (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
          ? (i = Np(e))
          : (i = vw(e))),
    i
  );
}
function ML(e) {
  let t = em(e);
  if (t) return t.format === "hsl" ? vw(t) : t.format === "hsv" ? OL(t) : Np(t);
}
function OL(e) {
  let t = _L(e.h, e.s, e.v);
  return {
    ...Jp(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? gw(e.a) : 1,
  };
}
function Np(e) {
  let t = RL(e.r, e.g, e.b);
  return {
    ...Jp(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? gw(e.a) : 1,
  };
}
function vw(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    o = { h: 0, s: 0, l: 0 };
  return (
    (t = No(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = No(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = zp(e.s)),
    (r = No(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (r = zp(e.l)),
    (i = PL(t, n, r)),
    (o = { h: t, s: n, l: r }),
    { ...i, ...o, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function gw(e) {
  return (
    (e = parseFloat(e)), e < 0 && (e = 0), (isNaN(e) || e > 1) && (e = 1), e
  );
}
var J1 = (e) => e instanceof gl;
var DL = (() => sF().EventEmitter)(),
  AL = class {
    constructor() {
      R(this, "_emitter", new DL());
    }
    eventNames() {
      return this._emitter.eventNames();
    }
    eventListeners() {
      let e = {};
      for (let t of this._emitter.eventNames())
        e[t] = this._emitter.listeners(t);
      return e;
    }
    on(e, t) {
      this.addEventListener(e, t, !1, !1, this);
    }
    off(e, t) {
      this.removeEventListeners(e, t);
    }
    once(e, t) {
      this.addEventListener(e, t, !0, !1, this);
    }
    unique(e, t) {
      this.addEventListener(e, t, !1, !0, this);
    }
    addEventListener(e, t, n, r, i) {
      if (r) {
        for (let o of this._emitter.eventNames())
          if (t === this._emitter.listeners(o)) return;
      }
      n === !0
        ? this._emitter.once(e, t, i)
        : this._emitter.addListener(e, t, i);
    }
    removeEventListeners(e, t) {
      e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
    }
    removeAllEventListeners() {
      this._emitter.removeAllListeners();
    }
    countEventListeners(e, t) {
      if (e) return this._emitter.listeners(e).length;
      {
        let n = 0;
        for (let r of this._emitter.eventNames())
          n += this._emitter.listeners(r).length;
        return n;
      }
    }
    emit(e, ...t) {
      this._emitter.emit(e, ...t);
    }
  },
  VL = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: { href: "" },
    setTimeout: () => 0,
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    getSelection: () => null,
    matchMedia: (e) => ({
      matches: !1,
      media: e,
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => !1,
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
    open: function (e, t, n) {},
  },
  zt = typeof O > "u" ? VL : O,
  BL = (e) => {
    setTimeout(e, 1 / 60);
  },
  $L = (() => zt.requestAnimationFrame || BL)(),
  eS = (e) => $L(e),
  ha = (() => 1 / 60)(),
  zL = class extends AL {
    constructor(e = !1) {
      super(),
        R(this, "_started", !1),
        R(this, "_frame", 0),
        R(this, "_frameTasks", []),
        R(this, "tick", () => {
          this._started &&
            (eS(this.tick),
            this.emit("update", this._frame, ha),
            this.emit("render", this._frame, ha),
            this._processFrameTasks(),
            this._frame++);
        }),
        e && this.start();
    }
    addFrameTask(e) {
      this._frameTasks.push(e);
    }
    _processFrameTasks() {
      var e;
      let t = this._frameTasks,
        n = t.length;
      if (n !== 0) {
        for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
        t.length = 0;
      }
    }
    static set TimeStep(e) {
      ha = e;
    }
    static get TimeStep() {
      return ha;
    }
    start() {
      return this._started
        ? this
        : ((this._frame = 0), (this._started = !0), eS(this.tick), this);
    }
    stop() {
      return (this._started = !1), this;
    }
    get frame() {
      return this._frame;
    }
    get time() {
      return this._frame * ha;
    }
  },
  yw = new zL(),
  ru = { target: "PREVIEW", zoom: 1 };
var K = {
  canvas: "CANVAS",
  export: "EXPORT",
  thumbnail: "THUMBNAIL",
  preview: "PREVIEW",
  current: () => ru.target,
  hasRestrictions: () => {
    let e = ru.target;
    return e === "CANVAS" || e === "EXPORT";
  },
};
var Uc = (e) => ({
  correct: (t, { delta: n, treeScale: r }) => {
    if ((typeof t == "string" && (t = parseFloat(t)), t === 0)) return "0px";
    let i = t;
    return (
      n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
      i + "px"
    );
  },
});
yf({
  borderTopWidth: Uc("y"),
  borderLeftWidth: Uc("x"),
  borderRightWidth: Uc("x"),
  borderBottomWidth: Uc("y"),
});
function he(e, ...t) {
  var n, r;
  if (e) return;
  let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
  if (i.stack)
    try {
      let o = i.stack.split(`
`);
      (n = o[1]) != null && n.includes("assert")
        ? (o.splice(1, 1),
          (i.stack = o.join(`
`)))
        : (r = o[0]) != null &&
          r.includes("assert") &&
          (o.splice(0, 1),
          (i.stack = o.join(`
`)));
    } catch {}
  throw i;
}
function Pt(e, t) {
  throw (
    t ||
    new Error(
      e ? `Unexpected value: ${e}` : "Application entered invalid state"
    )
  );
}
var jo = b.createContext({
  getLayoutId: (e) => null,
  persistLayoutIdCache: () => {},
  top: !1,
  enabled: !0,
});
function NL({ children: e }) {
  if (A(jo).top) return C(Re, { children: e });
  let n = V({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = V({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    i = V(new Set()).current,
    o = fe(({ id: l, name: c, duplicatedFrom: u }) => {
      if (!l) return null;
      let f = c ? "byName" : "byId",
        d = n.current[f][l];
      if (d) return d;
      let p = c || l;
      if (
        !u &&
        !i.has(p) &&
        (!n.current.byLayoutId[p] || n.current.byLayoutId[p] === p)
      )
        return (
          n.current.count[f][p] === void 0 &&
            ((n.current.count[f][p] = 0),
            (n.current.byLayoutId[p] = p),
            (r.current[f][l] = p)),
          i.add(p),
          p
        );
      let y;
      if (u?.length)
        for (let w = u.length - 1; w >= 0; w--) {
          let T = u[w];
          he(!!T, "duplicatedId must be defined");
          let E = n.current[f][T],
            F = n.current.byLastId[T];
          if (F && !y) {
            let $ = n.current.byLayoutId[F],
              J = !$ || $ === c;
            F && !i.has(F) && (!c || J) && (y = [F, T]);
          }
          let I = E ? n.current.byLayoutId[E] : void 0,
            D = !I || I === c;
          if (E && !i.has(E) && (!c || D))
            return (
              (r.current[f][l] = E), (r.current.byLastId[T] = E), i.add(E), E
            );
        }
      let g = n.current.byLastId[l];
      if (g && !i.has(g)) return i.add(g), (r.current.byId[l] = g), g;
      if (y) {
        let [w, T] = y;
        return (r.current[f][l] = w), (r.current.byLastId[T] = w), i.add(w), w;
      }
      let S = n.current.byPossibleId[l];
      if (S && !i.has(S)) return i.add(S), (r.current.byId[l] = S), S;
      let m = u?.[0],
        h = c || m || l,
        v = (n.current.count[f][h] ?? -1) + 1,
        { layoutId: x, value: k } = HL(h, v, i);
      if (
        ((n.current.count[f][h] = k), (r.current[f][l] = x), u?.length && !c)
      ) {
        let w = u[u.length - 1];
        if ((w && (r.current.byLastId[w] = x), u.length > 1))
          for (let T = 0; T < u.length - 1; T++) {
            let E = u[T];
            E !== void 0 &&
              (r.current.byPossibleId[E] || (r.current.byPossibleId[E] = x));
          }
      }
      return (r.current.byLayoutId[x] = p), i.add(x), x;
    }, []),
    s = fe(() => {
      (n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear();
    }, []),
    a = V({
      getLayoutId: o,
      persistLayoutIdCache: s,
      top: !0,
      enabled: !0,
    }).current;
  return C(jo.Provider, { value: a, children: e });
}
function HL(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) r++, (i = `${e}-${r}`);
  return { layoutId: i, value: r };
}
function jL({ enabled: e = !0, ...t }) {
  let n = A(jo),
    r = se(() => ({ ...n, enabled: e }), [e]);
  return C(jo.Provider, { ...t, value: r });
}
function rn(e) {
  let t = V(null);
  return t.current === null && (t.current = e()), t.current;
}
var WL = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%",
  },
  UL = (() => ({
    ...WL,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5",
  }))(),
  bw = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px",
  },
  XL = (() => ({ ...bw, fontWeight: 500 }))(),
  YL = (() => ({
    ...bw,
    whiteSpace: "pre",
    maxHeight:
      "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  }))();
function Vz(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${GL(n)}` : "Error",
    i = t instanceof Error ? t.message : "" + t;
  return oe("div", {
    style: UL,
    children: [
      C("div", { className: "text", style: XL, children: r }),
      i && C("div", { className: "text", style: YL, children: i }),
    ],
  });
}
function GL(e) {
  return e.startsWith("./") ? e.replace("./", "") : e;
}
function Y(e) {
  return typeof e == "number" && isFinite(e);
}
function KL(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Qc(e) {
  return typeof e != "string" && typeof e != "number";
}
function Zc(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !KL(e);
}
function qL(e) {
  return e * (Math.PI / 180);
}
var vn = (() => {
    function e(t, n) {
      return { a: t, b: n };
    }
    return (
      (e.offset = (t, n) => {
        let r = tn.angleFromX(t.a, t.b),
          i = qL(r),
          o = n * Math.sin(i),
          s = n * Math.cos(i);
        return e(
          { x: t.a.x + o, y: t.a.y - s },
          { x: t.b.x + o, y: t.b.y - s }
        );
      }),
      (e.intersection = (t, n, r) => {
        let i = t.a.x,
          o = t.a.y,
          s = t.b.x,
          a = t.b.y,
          l = n.a.x,
          c = n.a.y,
          u = n.b.x,
          f = n.b.y,
          d = (u - l) * (c - o) - (f - c) * (l - i),
          p = (u - l) * (a - o) - (f - c) * (s - i),
          y = (s - i) * (c - o) - (a - o) * (l - i);
        if ((d === 0 && p === 0) || p === 0) return null;
        let g = d / p,
          S = y / p;
        return r && (g < 0 || g > 1 || S < 0 || S > 1)
          ? null
          : { x: i + g * (s - i), y: o + g * (a - o) };
      }),
      (e.intersectionAngle = (t, n) => {
        let r = t.b.x - t.a.x,
          i = t.b.y - t.a.y,
          o = n.b.x - n.a.x,
          s = n.b.y - n.a.y;
        return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI);
      }),
      (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
      (e.perpendicular = (t, n) => {
        let r = t.a.x - t.b.x,
          i = t.a.y - t.b.y,
          o = tn(n.x - i, n.y + r);
        return e(o, n);
      }),
      (e.projectPoint = (t, n) => {
        let r = e.perpendicular(t, n);
        return e.intersection(t, r);
      }),
      (e.pointAtPercentDistance = (t, n) => {
        let r = e.distance(t),
          i = (n * r) / r;
        return {
          x: i * t.b.x + (1 - i) * t.a.x,
          y: i * t.b.y + (1 - i) * t.a.y,
        };
      }),
      (e.distance = (t) => tn.distance(t.a, t.b)),
      e
    );
  })(),
  Q = {
    equals: function (e, t) {
      return e === t
        ? !0
        : !e || !t
        ? !1
        : e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height;
    },
    atOrigin: (e) => ({ ...e, x: 0, y: 0 }),
    fromTwoPoints: (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      width: Math.abs(e.x - t.x),
      height: Math.abs(e.y - t.y),
    }),
    fromRect: (e) => ({
      x: e.left,
      y: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top,
    }),
    multiply: (e, t) => ({
      x: e.x * t,
      y: e.y * t,
      width: e.width * t,
      height: e.height * t,
    }),
    divide: (e, t) => Q.multiply(e, 1 / t),
    offset: (e, t) => {
      let n = typeof t.x == "number" ? t.x : 0,
        r = typeof t.y == "number" ? t.y : 0;
      return { ...e, x: e.x + n, y: e.y + r };
    },
    inflate: (e, t) => {
      if (t === 0) return e;
      let n = 2 * t;
      return {
        x: e.x - t,
        y: e.y - t,
        width: e.width + n,
        height: e.height + n,
      };
    },
    pixelAligned: (e) => {
      let t = Math.round(e.x),
        n = Math.round(e.y),
        r = Math.round(e.x + e.width),
        i = Math.round(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    halfPixelAligned: (e) => {
      let t = Math.round(e.x * 2) / 2,
        n = Math.round(e.y * 2) / 2,
        r = Math.round((e.x + e.width) * 2) / 2,
        i = Math.round((e.y + e.height) * 2) / 2,
        o = Math.max(r - t, 1),
        s = Math.max(i - n, 1);
      return { x: t, y: n, width: o, height: s };
    },
    round: (e, t = 0) => {
      let n = jc(e.x, t),
        r = jc(e.y, t),
        i = jc(e.width, t),
        o = jc(e.height, t);
      return { x: n, y: r, width: i, height: o };
    },
    roundToOutside: (e) => {
      let t = Math.floor(e.x),
        n = Math.floor(e.y),
        r = Math.ceil(e.x + e.width),
        i = Math.ceil(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    minX: (e) => e.x,
    maxX: (e) => e.x + e.width,
    minY: (e) => e.y,
    maxY: (e) => e.y + e.height,
    positions: (e) => ({
      minX: e.x,
      midX: e.x + e.width / 2,
      maxX: Q.maxX(e),
      minY: e.y,
      midY: e.y + e.height / 2,
      maxY: Q.maxY(e),
    }),
    center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
    boundingRectFromPoints: (e) => {
      let t = 1 / 0,
        n = -1 / 0,
        r = 1 / 0,
        i = -1 / 0;
      for (let o = 0; o < e.length; o++) {
        let s = e[o];
        (t = Math.min(t, s.x)),
          (n = Math.max(n, s.x)),
          (r = Math.min(r, s.y)),
          (i = Math.max(i, s.y));
      }
      return { x: t, y: r, width: n - t, height: i - r };
    },
    fromPoints: (e) => {
      let [t, n, r, i] = e,
        { x: o, y: s } = t,
        a = tn.distance(t, n),
        l = tn.distance(t, i);
      return { x: o, y: s, width: a, height: l };
    },
    merge: (...e) => {
      let t = { x: Math.min(...e.map(Q.minX)), y: Math.min(...e.map(Q.minY)) },
        n = { x: Math.max(...e.map(Q.maxX)), y: Math.max(...e.map(Q.maxY)) };
      return Q.fromTwoPoints(t, n);
    },
    intersection: (e, t) => {
      let n = Math.max(e.x, t.x),
        r = Math.min(e.x + e.width, t.x + t.width),
        i = Math.max(e.y, t.y),
        o = Math.min(e.y + e.height, t.y + t.height);
      return { x: n, y: i, width: r - n, height: o - i };
    },
    points: (e) => [
      { x: Q.minX(e), y: Q.minY(e) },
      { x: Q.minX(e), y: Q.maxY(e) },
      { x: Q.maxX(e), y: Q.minY(e) },
      { x: Q.maxX(e), y: Q.maxY(e) },
    ],
    pointsAtOrigin: (e) => [
      { x: 0, y: 0 },
      { x: e.width, y: 0 },
      { x: e.width, y: e.height },
      { x: 0, y: e.height },
    ],
    transform: (e, t) => {
      let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
        { x: i, y: o } = t.transformPoint({ x: e.x + e.width, y: e.y }),
        { x: s, y: a } = t.transformPoint({
          x: e.x + e.width,
          y: e.y + e.height,
        }),
        { x: l, y: c } = t.transformPoint({ x: e.x, y: e.y + e.height }),
        u = Math.min(n, i, s, l),
        f = Math.max(n, i, s, l) - u,
        d = Math.min(r, o, a, c),
        p = Math.max(r, o, a, c) - d;
      return { x: u, y: d, width: f, height: p };
    },
    containsPoint: (e, t) =>
      !(
        t.x < Q.minX(e) ||
        t.x > Q.maxX(e) ||
        t.y < Q.minY(e) ||
        t.y > Q.maxY(e) ||
        isNaN(e.x) ||
        isNaN(e.y)
      ),
    containsRect: (e, t) => {
      for (let n of Q.points(t)) if (!Q.containsPoint(e, n)) return !1;
      return !0;
    },
    toCSS: (e) => ({
      display: "block",
      transform: `translate(${e.x}px, ${e.y}px)`,
      width: `${e.width}px`,
      height: `${e.height}px`,
    }),
    inset: (e, t) => ({
      x: e.x + t,
      y: e.y + t,
      width: Math.max(0, e.width - 2 * t),
      height: Math.max(0, e.height - 2 * t),
    }),
    intersects: (e, t) =>
      !(
        t.x >= Q.maxX(e) ||
        Q.maxX(t) <= e.x ||
        t.y >= Q.maxY(e) ||
        Q.maxY(t) <= e.y
      ),
    overlapHorizontally: (e, t) => {
      let n = Q.maxX(e),
        r = Q.maxX(t);
      return n > t.x && r > e.x;
    },
    overlapVertically: (e, t) => {
      let n = Q.maxY(e),
        r = Q.maxY(t);
      return n > t.y && r > e.y;
    },
    doesNotIntersect: (e, t) => t.find((n) => Q.intersects(n, e)) === void 0,
    isEqual: (e, t) => Q.equals(e, t),
    cornerPoints: (e) => {
      let t = e.x,
        n = e.x + e.width,
        r = e.y,
        i = e.y + e.height;
      return [
        { x: t, y: r },
        { x: n, y: r },
        { x: n, y: i },
        { x: t, y: i },
      ];
    },
    midPoints: (e) => {
      let t = e.x,
        n = e.x + e.width / 2,
        r = e.x + e.width,
        i = e.y,
        o = e.y + e.height / 2,
        s = e.y + e.height;
      return [
        { x: n, y: i },
        { x: r, y: o },
        { x: n, y: s },
        { x: t, y: o },
      ];
    },
    pointDistance: (e, t) => {
      let n = 0,
        r = 0;
      return (
        t.x < e.x ? (n = e.x - t.x) : t.x > Q.maxX(e) && (n = t.x - Q.maxX(e)),
        t.y < e.y ? (r = e.y - t.y) : t.y > Q.maxY(e) && (r = t.y - Q.maxY(e)),
        tn.distance({ x: n, y: r }, { x: 0, y: 0 })
      );
    },
    fromAny: (e, t = { x: 0, y: 0, width: 0, height: 0 }) => ({
      x: e.x || t.x,
      y: e.y || t.y,
      width: e.width || t.width,
      height: e.height || t.height,
    }),
    delta: (e, t) => {
      let n = { x: Q.minX(e), y: Q.minY(e) },
        r = { x: Q.minX(t), y: Q.minY(t) };
      return { x: n.x - r.x, y: n.y - r.y };
    },
    withMinSize: (e, t) => {
      let { width: n, height: r } = t,
        i = e.width - n,
        o = e.height - r;
      return {
        width: Math.max(e.width, n),
        height: Math.max(e.height, r),
        x: e.width < n ? e.x + i / 2 : e.x,
        y: e.height < r ? e.y + o / 2 : e.y,
      };
    },
    anyPointsOutsideRect: (e, t) => {
      let n = Q.minX(e),
        r = Q.minY(e),
        i = Q.maxX(e),
        o = Q.maxY(e);
      for (let s of t) if (s.x < n || s.x > i || s.y < r || s.y > o) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, n, r, i] = Q.cornerPoints(e);
      return [vn(t, n), vn(n, r), vn(r, i), vn(i, t)];
    },
    rebaseRectOnto: (e, t, n, r) => {
      let i = { ...e };
      switch (n) {
        case "bottom":
        case "top":
          switch (r) {
            case "start":
              i.x = t.x;
              break;
            case "center":
              i.x = t.x + t.width / 2 - e.width / 2;
              break;
            case "end":
              i.x = t.x + t.width - e.width;
              break;
            default:
              Pt(r);
          }
          break;
        case "left":
          i.x = t.x - e.width;
          break;
        case "right":
          i.x = t.x + t.width;
          break;
        default:
          Pt(n);
      }
      switch (n) {
        case "left":
        case "right":
          switch (r) {
            case "start":
              i.y = t.y;
              break;
            case "center":
              i.y = t.y + t.height / 2 - e.height / 2;
              break;
            case "end":
              i.y = t.y + t.height - e.height;
              break;
            default:
              Pt(r);
          }
          break;
        case "top":
          i.y = t.y - e.height;
          break;
        case "bottom":
          i.y = t.y + t.height;
          break;
        default:
          Pt(n);
      }
      return i;
    },
  };
var xw = {
  quickfix: (e) => (
    (e.widthType === 2 || e.heightType === 2) && (e.aspectRatio = null),
    Y(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || e.widthType === 2 || Y(e.maxWidth)) && (e.right = !1),
      (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || e.heightType === 2 || Y(e.maxHeight)) && (e.bottom = !1),
      (e.heightType = 0)),
    e
  ),
};
function iu(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var Sw = {
    fromProperties: (e) => {
      let {
          left: t,
          right: n,
          top: r,
          bottom: i,
          width: o,
          height: s,
          centerX: a,
          centerY: l,
          aspectRatio: c,
          autoSize: u,
        } = e,
        f = xw.quickfix({
          left: Y(t) || _n(t),
          right: Y(n) || _n(n),
          top: Y(r) || _n(r),
          bottom: Y(i) || _n(i),
          widthType: iu(o),
          heightType: iu(s),
          aspectRatio: c || null,
          fixedSize: u === !0,
        }),
        d = null,
        p = null,
        y = 0,
        g = 0;
      if (f.widthType !== 0 && typeof o == "string") {
        let h = parseFloat(o);
        o.endsWith("fr")
          ? ((y = 3), (d = h))
          : o === "auto"
          ? (y = 2)
          : ((y = 1), (d = h / 100));
      } else o !== void 0 && typeof o != "string" && (d = Xe.getNumber(o));
      if (f.heightType !== 0 && typeof s == "string") {
        let h = parseFloat(s);
        s.endsWith("fr")
          ? ((g = 3), (p = h))
          : s === "auto"
          ? (g = 2)
          : ((g = 1), (p = parseFloat(s) / 100));
      } else s !== void 0 && typeof s != "string" && (p = Xe.getNumber(s));
      let S = 0.5,
        m = 0.5;
      return (
        a && (S = parseFloat(a) / 100),
        l && (m = parseFloat(l) / 100),
        {
          left: f.left ? Xe.getNumber(t) : null,
          right: f.right ? Xe.getNumber(n) : null,
          top: f.top ? Xe.getNumber(r) : null,
          bottom: f.bottom ? Xe.getNumber(i) : null,
          widthType: y,
          heightType: g,
          width: d,
          height: p,
          aspectRatio: f.aspectRatio || null,
          centerAnchorX: S,
          centerAnchorY: m,
        }
      );
    },
    toSize: (e, t, n, r) => {
      let i = null,
        o = null,
        s = t?.sizing ? Xe.getNumber(t?.sizing.width) : null,
        a = t?.sizing ? Xe.getNumber(t?.sizing.height) : null,
        l = tS(e.left, e.right);
      if (s && Y(l)) i = s - l;
      else if (n && e.widthType === 2) i = n.width;
      else if (Y(e.width))
        switch (e.widthType) {
          case 0:
            i = e.width;
            break;
          case 3:
            i = r
              ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) *
                e.width
              : null;
            break;
          case 1:
          case 4:
            s && (i = s * e.width);
            break;
          case 2:
            break;
          default:
            Pt(e.widthType);
        }
      let c = tS(e.top, e.bottom);
      if (a && Y(c)) o = a - c;
      else if (n && e.heightType === 2) o = n.height;
      else if (Y(e.height))
        switch (e.heightType) {
          case 0:
            o = e.height;
            break;
          case 3:
            o = r
              ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) *
                e.height
              : null;
            break;
          case 1:
          case 4:
            a && (o = a * e.height);
            break;
          case 2:
            break;
          default:
            Pt(e.heightType);
        }
      return tM(i, o, e, { height: a ?? 0, width: s ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, r = !1, i = null) => {
      let o = e.left || 0,
        s = e.top || 0,
        { width: a, height: l } = Sw.toSize(e, t, n, i),
        c = t?.positioning ?? null,
        u = c ? Xe.getNumber(c.width) : null,
        f = c ? Xe.getNumber(c.height) : null;
      e.left !== null
        ? (o = e.left)
        : u && e.right !== null
        ? (o = u - e.right - a)
        : u && (o = e.centerAnchorX * u - a / 2),
        e.top !== null
          ? (s = e.top)
          : f && e.bottom !== null
          ? (s = f - e.bottom - l)
          : f && (s = e.centerAnchorY * f - l / 2);
      let d = { x: o, y: s, width: a, height: l };
      return r ? Q.pixelAligned(d) : d;
    },
  },
  QL = 200,
  ZL = 200;
function ou(e, t, n, r) {
  if (typeof t == "string") {
    if (t.endsWith("%") && n)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * n.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith("vh") && r)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * r.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    return parseFloat(t);
  }
  return t;
}
function JL(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(ou("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(ou("maxHeight", t.maxHeight, n, r), e)),
    e
  );
}
function eM(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(ou("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(ou("maxWidth", t.maxWidth, n, r), e)),
    e
  );
}
function tM(e, t, n, r, i) {
  let o = eM(Y(e) ? e : QL, n, r, i),
    s = JL(Y(t) ? t : ZL, n, r, i);
  return (
    Y(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (Y(n.left) && Y(n.right)
        ? (s = o / n.aspectRatio)
        : Y(n.top) && Y(n.bottom)
        ? (o = s * n.aspectRatio)
        : n.widthType !== 0
        ? (s = o / n.aspectRatio)
        : (o = s * n.aspectRatio)),
    { width: o, height: s }
  );
}
function tS(e, t) {
  return !Y(e) || !Y(t) ? null : e + t;
}
function nM(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function Fa(e) {
  return !e._constraints || nM(e) ? !1 : e._constraints.enabled;
}
function rM(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    Y(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    Y(n) && Y(r) ? { width: n, height: r } : null
  );
}
function iM(e) {
  let t = rM(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return Y(n) && Y(r) ? { x: n, y: r, ...t } : null;
}
function Wo(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Fa(e) || r) return iM(e);
  let i = oM(e),
    o = sM(t),
    s = o ? { sizing: o, positioning: o, viewport: null } : null;
  return Sw.toRect(i, s, null, n, null);
}
function oM(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: o,
      _constraints: s,
      size: a,
    } = e,
    { width: l, height: c } = e;
  l === void 0 && (l = a), c === void 0 && (c = a);
  let { aspectRatio: u, autoSize: f } = s,
    d = xw.quickfix({
      left: Y(t),
      right: Y(n),
      top: Y(r),
      bottom: Y(i),
      widthType: iu(l),
      heightType: iu(c),
      aspectRatio: u || null,
      fixedSize: f === !0,
    }),
    p = null,
    y = null,
    g = 0,
    S = 0;
  if (d.widthType !== 0 && typeof l == "string") {
    let v = parseFloat(l);
    l.endsWith("fr")
      ? ((g = 3), (p = v))
      : l === "auto"
      ? (g = 2)
      : ((g = 1), (p = v / 100));
  } else l !== void 0 && typeof l != "string" && (p = l);
  if (d.heightType !== 0 && typeof c == "string") {
    let v = parseFloat(c);
    c.endsWith("fr")
      ? ((S = 3), (y = v))
      : c === "auto"
      ? (S = 2)
      : ((S = 1), (y = parseFloat(c) / 100));
  } else c !== void 0 && typeof c != "string" && (y = c);
  let m = 0.5,
    h = 0.5;
  return (
    (o === !0 || o === "x") &&
      ((d.left = !1), typeof t == "string" && (m = parseFloat(t) / 100)),
    (o === !0 || o === "y") &&
      ((d.top = !1), typeof r == "string" && (h = parseFloat(r) / 100)),
    {
      left: d.left ? t : null,
      right: d.right ? n : null,
      top: d.top ? r : null,
      bottom: d.bottom ? i : null,
      widthType: g,
      heightType: S,
      width: p,
      height: y,
      aspectRatio: d.aspectRatio || null,
      centerAnchorX: m,
      centerAnchorY: h,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var ww = b.createContext({ parentSize: 0 });
function sM(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Qo() {
  return b.useContext(ww).parentSize;
}
function kw(e) {
  return typeof e == "object";
}
var aM = (e) => {
  let t = Qo(),
    { parentSize: n, children: r } = e,
    i = b.useMemo(() => ({ parentSize: n }), [lM(n), cM(n)]);
  return t === 1
    ? r
      ? C(Re, { children: r })
      : null
    : C(ww.Provider, { value: i, children: r });
};
function lM(e) {
  return kw(e) ? e.width : e;
}
function cM(e) {
  return kw(e) ? e.height : e;
}
function uM(e, t) {
  return C(aM, { parentSize: t, children: e });
}
function fM(e) {
  let t = Qo();
  return Wo(e, t, !0);
}
function Cw({ width: e, height: t }) {
  return (
    e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
  );
}
var dM = ((e) => (
    (e.Boolean = "boolean"),
    (e.Number = "number"),
    (e.String = "string"),
    (e.RichText = "richtext"),
    (e.FusedNumber = "fusednumber"),
    (e.Enum = "enum"),
    (e.SegmentedEnum = "segmentedenum"),
    (e.Color = "color"),
    (e.Image = "image"),
    (e.ResponsiveImage = "responsiveimage"),
    (e.File = "file"),
    (e.ComponentInstance = "componentinstance"),
    (e.Array = "array"),
    (e.EventHandler = "eventhandler"),
    (e.Transition = "transition"),
    (e.BoxShadow = "boxshadow"),
    (e.Link = "link"),
    (e.Date = "date"),
    (e.Object = "object"),
    (e.Font = "font"),
    (e.PageScope = "pagescope"),
    (e.ScrollSectionRef = "scrollsectionref"),
    (e.CustomCursor = "customcursor"),
    (e.Border = "border"),
    (e.Cursor = "cursor"),
    (e.Padding = "padding"),
    (e.BorderRadius = "borderradius"),
    (e.CollectionReference = "collectionreference"),
    e
  ))(dM || {}),
  wp;
function hM() {
  if (wp !== void 0) return wp;
  let e = document.createElement("div");
  Object.assign(e.style, {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    rowGap: "1px",
  }),
    e.appendChild(document.createElement("div")),
    e.appendChild(document.createElement("div")),
    document.body.appendChild(e);
  let t = e.scrollHeight === 1;
  return e.parentNode && e.parentNode.removeChild(e), (wp = t), t;
}
var Di = "flexbox-gap-not-supported",
  nS = !1;
function Hz() {
  nS || ((nS = !0), !hM() && document.body.classList.add(Di));
}
var pM = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
  mM = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
  vM = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
  gM = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
  yM = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  bM = `
a[data-framer-page-link-current],
a[data-framer-page-link-current] span:not([data-text-fill]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  xM = `
a[data-framer-page-link-current]:hover,
a[data-framer-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
  SM = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
  wM = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
  kM = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
  CM = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
  TM = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
}
`,
  EM = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
  RM = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
  PM = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
  _M = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
  IM = [
    '[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }',
    TM,
    CM,
    pM,
    mM,
    vM,
    gM,
    yM,
    bM,
    xM,
    SM,
    wM,
    kM,
    EM,
    RM,
    PM,
    _M,
  ],
  FM = [
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, none));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
        }
    `,
    `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
    `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
        }
    `,
    `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
        }
    `,
    `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
        }
    `,
    `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
    `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
    `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
    `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-code-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            line-height: var(--framer-line-height, 1.2em);
        }
    `,
    `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
    `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `,
    `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
    `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
        }
    `,
    `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
    `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `,
    `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `,
    `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `,
    `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `,
    `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `,
  ],
  LM = new Set(),
  kp;
function Tw(e, t, n = LM) {
  if (!(!e || n.has(e) || typeof document > "u")) {
    if ((n.add(e), !t)) {
      if (!kp) {
        let r = document.createElement("style");
        if (
          (r.setAttribute("type", "text/css"),
          r.setAttribute("data-framer-css", "true"),
          !document.head)
        ) {
          console.warn(
            "not injecting CSS: the document is missing a <head> element"
          );
          return;
        }
        if ((document.head.appendChild(r), r.sheet)) kp = r.sheet;
        else {
          console.warn(
            "not injecting CSS: injected <style> element does not have a sheet",
            r
          );
          return;
        }
      }
      t = kp;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
var MM = ["[data-framer-component-type] { position: absolute; }"],
  OM = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
  DM = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
  AM = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
  VM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`,
  BM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`,
  $M = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`,
  zM = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  NM = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  HM = [
    '[data-framer-component-type="Text"] { cursor: inherit; }',
    "[data-framer-component-text-autosized] * { white-space: pre; }",
    OM,
    DM,
    AM,
    VM,
    BM,
    $M,
    zM,
    NM,
  ],
  jM = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`,
  WM = (() => [
    `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
    `.${Di} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
  ])(),
  UM = (() => `
.${Di} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(),
  XM = (() => `
.${Di}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Di}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(),
  YM = (() => `
.${Di}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Di}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(),
  GM = (() => [jM, UM, ...WM, XM, YM])(),
  KM = [
    `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
  ],
  qM = [
    '[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }',
    '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }',
  ],
  QM = [
    '[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }',
    '[data-framer-component-type="NativeScroll"] > * { position: relative; }',
    '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }',
  ],
  ZM = [
    '[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }',
  ],
  JM = [
    '[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }',
  ],
  eO = [
    '[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }',
  ],
  tO = [
    '[data-framer-cursor="pointer"] { cursor: pointer; }',
    '[data-framer-cursor="grab"] { cursor: grab; }',
    '[data-framer-cursor="grab"]:active { cursor: grabbing; }',
  ],
  nO = [
    '[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }',
    "[data-framer-generated] * { pointer-events: unset }",
  ],
  rO = [
    `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
  ],
  iO = [
    '[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  oO = (e) => (e ? nO : []),
  sO = [".svgContainer svg { display: block; }"],
  Ew = (e) => [
    ...MM,
    ...HM,
    ...FM,
    ...IM,
    ...GM,
    ...KM,
    ...qM,
    ...QM,
    ...JM,
    ...ZM,
    ...eO,
    ...tO,
    ...oO(e),
    ...sO,
    ...rO,
    ...iO,
  ],
  aO = Ew(!1),
  lO = Ew(!0),
  rS = !1;
function Zo() {
  if (rS) return;
  rS = !0;
  let e = K.current() === K.preview ? lO : aO;
  for (let t of e) Tw(t, void 0, void 0);
}
function Uo(e) {
  return typeof e == "function";
}
function Rw(e) {
  return typeof e == "boolean";
}
function me(e) {
  return typeof e == "string";
}
function on(e) {
  return Number.isFinite(e);
}
function tm(e) {
  return Array.isArray(e);
}
function Ve(e) {
  return e !== null && typeof e == "object" && !tm(e);
}
function Nt(e) {
  return typeof e > "u";
}
function Ne(e) {
  return e === null;
}
function Xo(e) {
  return e == null;
}
function Pw(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
function cO(e) {
  return Ve(e) || Uo(e);
}
var iS = "optional";
function uO(e) {
  return !!e && iS in e && e[iS] === !0;
}
function fO(e) {
  try {
    switch (e.type) {
      case "string":
      case "collectionreference":
      case "color":
      case "date":
      case "link":
      case "boxshadow":
      case "padding":
      case "borderradius":
        return me(e.defaultValue) ? e.defaultValue : void 0;
      case "boolean":
        return Rw(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return Nt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
          ? e.defaultValue
          : void 0;
      case "fusednumber":
      case "number":
        return on(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return Ve(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return Ve(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
        return Ve(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = Ve(e.defaultValue) ? e.defaultValue : {};
        return Ve(e.controls) && _w(t, e.controls), t;
      }
      case "array":
        return tm(e.defaultValue) ? e.defaultValue : void 0;
      case "file":
      case "image":
      case "richtext":
      case "pagescope":
      case "eventhandler":
      case "segmentedenum":
      case "responsiveimage":
      case "componentinstance":
      case "scrollsectionref":
      case "customcursor":
      case "cursor":
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function _w(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Nt(i) || uO(r)) continue;
    let o = fO(r);
    Nt(o) || (e[n] = o);
  }
}
function dO(e) {
  if (Ve(e.defaultProps)) return e.defaultProps;
  let t = {};
  return (e.defaultProps = t), t;
}
function hO(e, t) {
  if (!cO(e)) return;
  let n = dO(e);
  _w(n, t);
}
function jz(e, t) {
  Object.assign(e, { propertyControls: t }), hO(e, t);
}
function Iw(e) {
  return e.propertyControls;
}
var Ee = (e) => e;
function pO(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var mO =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/,
  vO = pO(
    (e) =>
      mO.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
  ),
  Fw = b.createContext(void 0),
  qz = (() => Fw.Provider)(),
  gO = () => b.useContext(Fw) ?? {},
  yO = Bn(Kp(), 1),
  tt = typeof Le < "u" ? Le : void 0,
  Jr = () => typeof document == "object";
var bO = () =>
    tt && /Chrome/.test(tt.userAgent) && /Google Inc/.test(tt.vendor) && !wO(),
  xO = () =>
    tt && /Safari/.test(tt.userAgent) && /Apple Computer/.test(tt.vendor);
var SO = () => tt && /FramerX/.test(tt.userAgent),
  wO = () => tt && /Edg\//.test(tt.userAgent),
  kO = () => tt && /android/i.test(tt.userAgent),
  CO = () => tt && /iPhone|iPod|iPad/i.test(tt.platform),
  TO = () => tt && /Mac/.test(tt.platform),
  EO = () => tt && /Win/.test(tt.platform);
var Lw = () => yO.default.env.NODE_ENV === "test";
var RO = () => {
    if (TO()) return "macos";
    if (CO()) return "ios";
    if (kO()) return "android";
    if (EO()) return "windows";
  },
  PO = (e) => {
    e || (e = RO());
    let t = {
      apple:
        "-apple-system, BlinkMacSystemFont, SF Pro Text, SF UI Text, Helvetica Neue",
      google: "Roboto, Helvetica Neue",
      microsoft: "Segoe UI, Helvetica Neue",
    };
    return e === "macos" || e === "ios"
      ? t.apple
      : e === "android"
      ? t.google
      : e === "windows"
      ? t.microsoft
      : t.apple;
  };
var oS = (e) => () => {
    ba(e);
  },
  _O = () => () => {},
  IO = {
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, t, n) {
      let r = new Image();
      return (
        (r.src = et.useImageSource(e, t, n)),
        e.srcSet && (r.srcset = e.srcSet),
        r
      );
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
  },
  FO = !1,
  LO = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : ["getLogger"].includes(String(t))
        ? _O()
        : oS(
            FO
              ? `${String(t)} is not available in this version of Framer.`
              : `${String(
                  t
                )} is only available inside of Framer. https://www.framer.com/`
          );
    },
  },
  et = new Proxy(IO, LO);
function MO(e, t, n = 1) {
  let { width: r, height: i } = t,
    o = e.pixelWidth ?? e.intrinsicWidth ?? 0,
    s = e.pixelHeight ?? e.intrinsicHeight ?? 0;
  if (r < 1 || i < 1 || o < 1 || s < 1) return;
  (r *= n), (i *= n);
  let a = r / i,
    l = o / s;
  switch (e.fit) {
    case "fill":
      return l > a ? s / i : o / r;
    case "fit":
    case "stretch":
      return Math.max(o / r, s / i);
  }
}
function sS(e, t) {
  return t && Math.max(1, e) > t ? "pixelated" : "auto";
}
var aS = {
    position: "absolute",
    borderRadius: "inherit",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  OO = {
    backgroundSize: "16px 16px",
    backgroundImage:
      "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%)",
    border: "1px solid #c4c4c4",
  };
function DO(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Mw(e, t) {
  let n = e ?? "center",
    r = t ?? "center";
  return n === "center" && r === "center" ? "center" : n + " " + r;
}
function AO(e, t) {
  if (!t) return "auto";
  let n = K.current() === K.canvas ? zt.devicePixelRatio : 1,
    r = MO(e, t, n);
  return K.current() === K.canvas ? sS(1, r) : sS(ru.zoom, r);
}
function nm(e, t) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: Mw(e.positionX, e.positionY),
    objectFit: DO(e.fit),
    imageRendering: AO(e, t),
  };
}
function VO({ image: e, containerSize: t, nodeId: n, alt: r }) {
  let i = et.useImageSource(e, t, n),
    o = nm(e, t),
    [s, a] = b.useState(),
    l = b.useRef(null),
    c = gO();
  return (
    b.useEffect(() => {
      if (!c.imgSizesWorkaroundEnabled) return;
      let u = l.current;
      if (!u || Lw() || !e.sizes || !u.closest("[data-framer-name]")) return;
      let d = u.clientWidth,
        p = Number(e.sizes.replace("px", ""));
      (!isNaN(p) && d < p) || a(d + "px");
    }, [e.sizes]),
    C("img", {
      ref: l,
      decoding: "async",
      loading: e.loading,
      sizes: s ?? e.sizes,
      srcSet: e.srcSet,
      src: i,
      alt: r ?? e.alt,
      style: o,
    })
  );
}
function BO({ image: e, containerSize: t, nodeId: n }) {
  let r = b.useRef(null),
    i = et.useImageElement(e, t, n),
    o = nm(e, t);
  return (
    b.useLayoutEffect(() => {
      let s = r.current;
      if (s !== null)
        return (
          s.appendChild(i),
          () => {
            s.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, o),
    C("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function $O({ nodeId: e, image: t, containerSize: n }) {
  let r = b.useRef(null),
    i = et.useImageSource(t, n, e);
  return (
    b.useLayoutEffect(() => {
      let o = r.current;
      if (o === null) return;
      let s = nm(t, n);
      et.renderOptimizedCanvasImage(o, i, s, e);
    }, [e, t, i, n]),
    C("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function Ow({ layoutId: e, image: t, ...n }) {
  e && (e = e + "-background");
  let r = { ...aS, ...OO },
    i = null;
  if (me(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let o = on(t.backgroundSize) ? t.backgroundSize : 1,
        s = {
          width: Math.round(o * t.pixelWidth),
          height: Math.round(o * t.pixelHeight),
        },
        a = et.useImageSource(t, s);
      (r.backgroundImage = `url(${a})`),
        (r.backgroundRepeat = "repeat"),
        (r.backgroundPosition = Mw(t.positionX, t.positionY)),
        t.pixelWidth &&
          (r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`),
        (r.border = 0),
        (i = null);
    } else
      K.current() !== K.canvas
        ? (i = C(VO, { image: t, ...n }))
        : et.canRenderOptimizedCanvasImage(et.useImageSource(t))
        ? (i = C($O, { image: t, ...n }))
        : (i = C(BO, { image: t, ...n }));
  return C(Mt.div, {
    layoutId: e,
    style: i ? aS : r,
    "data-framer-background-image-wrapper": !0,
    children: i,
  });
}
var zO = "src",
  Ii = {
    isImageObject: function (e) {
      return !e || typeof e == "string" ? !1 : zO in e;
    },
  };
function NO(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    o = n ?? i,
    s = r && o ? r[o] : void 0;
  return s && typeof s == "string" && (e = { ...e, src: s }), e;
}
function HO(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Ii.isImageObject(t)) return;
  let r = null;
  if (
    (me(n) ? (r = { alt: "", src: n }) : (r = Xe.get(t, null)),
    !!Ii.isImageObject(r))
  )
    return NO(r, e);
}
function jO(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: o } = e;
  if (!r) return;
  let s, a, l, c;
  if (
    (typeof r == "number"
      ? (s = a = l = c = r)
      : ((s = r.top || 0),
        (a = r.bottom || 0),
        (l = r.left || 0),
        (c = r.right || 0)),
    !(s === 0 && a === 0 && l === 0 && c === 0))
  ) {
    if (n && s === a && s === l && s === c) {
      t.border = `${s}px ${i} ${o}`;
      return;
    }
    (t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${s}px`),
      (t.borderBottomWidth = `${a}px`),
      (t.borderLeftWidth = `${l}px`),
      (t.borderRightWidth = `${c}px`);
  }
}
function WO(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), C(Mt.div, { style: n }))
    : (jO(e, n, !1),
      C(Mt.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function hu(e) {
  return e && e !== "search" && e !== "slot" && e !== "template"
    ? Mt[e]
    : Mt.div;
}
var UO = bO();
function rm(e) {
  let t = {};
  return (
    !UO ||
      K.current() !== K.canvas ||
      ((e === !0 || e === "x") && (t["data-framer-layout-hint-center-x"] = !0),
      (e === !0 || e === "y") && (t["data-framer-layout-hint-center-y"] = !0)),
    t
  );
}
function im(e) {
  return e.replace(/^id_/, "").replace(/\\/g, "");
}
function XO(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return n
    ? ((t = b.Children.map(t, (r) =>
        b.isValidElement(r) ? b.cloneElement(r, { _forwardedOverrides: n }) : r
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
function La(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
      ? `translateX(-50%) ${n}`
      : e === "y"
      ? `translateY(-50%) ${n}`
      : n || "none";
}
function Jo(e, { specificLayoutId: t, postfix: n } = {}) {
  let {
      name: r,
      layoutIdKey: i,
      duplicatedFrom: o,
      __fromCodeComponentNode: s = !1,
      drag: a,
    } = e,
    { getLayoutId: l, enabled: c } = A(jo);
  return se(() => {
    if (!c) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (a || !i || s)) return;
    let f = u || l({ id: i, name: r, duplicatedFrom: o });
    if (f) return n ? `${f}-${n}` : f;
  }, [c]);
}
var Dw = typeof document < "u" ? ut : N,
  Vi = b.createContext(!1);
function pu() {
  let [e, t] = b.useState(0);
  return b.useCallback(() => t((n) => n + 1), []);
}
var YO = (() => aF().ResizeObserver)();
var GO = class {
    constructor() {
      R(this, "sharedResizeObserver"), R(this, "callbacks", new WeakMap());
      let e = zt.ResizeObserver ?? YO;
      this.sharedResizeObserver = new e(this.updateResizedElements.bind(this));
    }
    updateResizedElements(e) {
      for (let t of e) {
        let n = this.callbacks.get(t.target);
        n && n(t.contentRect);
      }
    }
    observeElementWithCallback(e, t) {
      this.sharedResizeObserver.observe(e), this.callbacks.set(e, t);
    }
    unobserve(e) {
      this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e);
    }
  },
  Xc = (() => (Jr() ? new GO() : void 0))();
function KO(e) {
  let t = pu();
  N(() => {
    let n = e?.current;
    if (n)
      return (
        Xc?.observeElementWithCallback(e.current, t),
        () => {
          Xc?.unobserve(n);
        }
      );
  }, [e, t]);
}
var qO = "data-framer-size-compatibility-wrapper";
function QO(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(qO)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Aw)
    .map(Vw);
}
function Aw(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Vw(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== "contents"
  )
    return e;
  let t = [...e.children].find(Aw);
  return t ? Vw(t) : e;
}
function Ma(e, t, n = () => [], r = {}) {
  let { id: i, visible: o, _needsMeasure: s } = e,
    { skipHook: a = !1 } = r,
    l = !!A(Vi),
    c = K.current() === K.canvas;
  Dw(() => {
    !c ||
      l ||
      a ||
      (t.current &&
        i &&
        o &&
        s &&
        et.queueMeasureRequest(im(i), t.current, n(t.current)));
  });
}
function Bw(e) {
  let t = e.closest("[data-framer-component-container]");
  t && et.queueMeasureRequest(im(t.id), t, QO(t));
}
var Ai = Object.keys;
function xa(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function lS(e) {
  return xa(e, "equals") ? typeof e.equals == "function" : !1;
}
function om(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function ZO(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!om(e[r], t[r])) return !1;
  return !0;
}
function JO(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!mu(e[r], t[r], !0)) return !1;
  return !0;
}
function eD(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!om(r, t.get(n))) return !1;
  return !0;
}
function tD(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!mu(r, t.get(n), !0)) return !1;
  return !0;
}
function nD(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function rD(e, t) {
  let n = Ai(e);
  if (n.length !== Ai(t).length) return !1;
  for (let r of n) {
    if (!xa(t, r)) return !1;
    if (!(r === "_owner" && xa(e, "$$typeof") && e.$$typeof) && !om(e[r], t[r]))
      return !1;
  }
  return !0;
}
function iD(e, t) {
  let n = Ai(e);
  if (n.length !== Ai(t).length) return !1;
  for (let r of n) {
    if (!xa(t, r)) return !1;
    if (
      !(r === "_owner" && xa(e, "$$typeof") && e.$$typeof) &&
      !mu(e[r], t[r], !0)
    )
      return !1;
  }
  return !0;
}
function mu(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== "object") return !1;
  let o = Array.isArray(e),
    s = Array.isArray(t);
  if (o && s) return n ? JO(e, t) : ZO(e, t);
  if (o !== s) return !1;
  let a = e instanceof Map,
    l = t instanceof Map;
  if (a && l) return n ? tD(e, t) : eD(e, t);
  if (a !== l) return !1;
  let c = e instanceof Set,
    u = t instanceof Set;
  if (c && u) return nD(e, t);
  if (c !== u) return !1;
  let f = e instanceof Date,
    d = t instanceof Date;
  if (f && d) return e.getTime() === t.getTime();
  if (f !== d) return !1;
  let p = e instanceof RegExp,
    y = t instanceof RegExp;
  return p && y
    ? e.toString() === t.toString()
    : p !== y
    ? !1
    : lS(e) && lS(t)
    ? e.equals(t)
    : n
    ? iD(e, t)
    : rD(e, t);
}
function je(e, t, n = !0) {
  try {
    return mu(e, t, n);
  } catch (r) {
    if (r instanceof Error && /stack|recursion/iu.exec(r.message))
      return (
        console.warn(
          "Warning: isEqual does not handle circular references.",
          r.name,
          r.message
        ),
        !1
      );
    throw r;
  }
}
var $w = "0.000001px",
  Cp = (() => ` translateZ(${$w})`)(),
  zw = (() => SO() || xO() || Lw())();
function oD(e) {
  e.willChange = "transform";
  let t = K.current() === K.canvas;
  zw && t && (e.translateZ = $w);
}
function vu(e) {
  (e.willChange = "transform"), sD(e, !0);
}
function sD(e, t) {
  let n = K.current() === K.canvas;
  if (!zw || !n) return;
  let r = (me(e.transform) && e.transform) || "";
  t
    ? r.includes(Cp) || (e.transform = r + Cp)
    : (e.transform = r.replace(Cp, ""));
}
function Nw(e, t, n, r = !0) {
  if (!e) return;
  let i = Ee(e.style),
    o = n || i[t],
    s = () => {
      i[t] = o;
    };
  (i[t] = null), r ? Promise.resolve().then(s) : setTimeout(s, 0);
}
var Ho = (() => {
  class e extends ve {
    constructor() {
      super(...arguments),
        R(this, "layerElement", null),
        R(this, "setLayerElement", (n) => {
          this.layerElement = n;
        });
    }
    static applyWillChange(n, r, i) {
      n.willChangeTransform && (i ? oD(r) : vu(r));
    }
    shouldComponentUpdate(n, r) {
      return n._needsMeasure || this.state !== r || !je(this.props, n);
    }
    componentDidUpdate(n) {
      Ee(this.props).clip &&
        Ee(this.props).radius === 0 &&
        Ee(n).radius !== 0 &&
        Nw(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return R(e, "defaultProps", {}), e;
})();
function aD(e, t) {
  if (e.size < t) return;
  let r = Math.round(Math.random());
  for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i);
}
function lD(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  aD(t, e);
  let o = r(n);
  return t.set(n, o), o;
}
var Hw = (e) => {
    let t = 0,
      n,
      r;
    if (e.length === 0) return t;
    for (n = 0; n < e.length; n++)
      (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0);
    return t;
  },
  sm = {
    hueRotate: (e, t) => W.toHslString(W.hueRotate(W(e), t)),
    setAlpha: (e, t) => W.toRgbString(W.alpha(W(e), t)),
    getAlpha: (e) => {
      let t = em(e);
      return t ? t.a : 1;
    },
    multiplyAlpha: (e, t) => W.toRgbString(W.multiplyAlpha(W(e), t)),
    toHex: (e) => W.toHexString(W(e)).toUpperCase(),
    toRgb: (e) => W.toRgb(W(e)),
    toRgbString: (e) => W.toRgbString(W(e)),
    toHSV: (e) => W.toHsv(W(e)),
    toHSL: (e) => W.toHsl(W(e)),
    toHslString: (e) => W.toHslString(W(e)),
    toHsvString: (e) => W.toHsvString(W(e)),
    hsvToHSLString: (e) => W.toHslString(W(Wc(e.h, e.s, e.v, e.a))),
    hsvToHex: (e) => W.toHexString(W(Wc(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: (e) => W.toRgbString(W(Wc(e.h, e.s, e.v, e.a))),
    hsvToString: (e) => Wc(e.h, e.s, e.v),
    rgbaToString: (e) => W.toRgbString(W(e)),
    rgbToHexString: (e) => W.toHexString(W(e)),
    hslToString: (e) => W.toHslString(W(e)),
    hslToRgbString: (e) => W.toRgbString(W(e)),
    toColorPickerSquare: (e) => W.toRgbString(W({ h: e, s: 1, l: 0.5, a: 1 })),
    isValid: (e) => W(e).isValid !== !1,
    equals: (e, t) => (
      typeof e == "string" && (e = W(e)),
      typeof t == "string" && (t = W(t)),
      W.equal(e, t)
    ),
    toHexOrRgbaString: (e) => {
      let t = W(e);
      return t.a !== 1 ? W.toRgbString(t) : W.toHexString(t);
    },
  },
  cD = /var\(.+\)/,
  uD = new Map();
function fD(e, t) {
  let n = [e, t];
  return cD.test(e) ? e : lD(1e3, uD, n, () => sm.multiplyAlpha(e, t));
}
function Oa(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((r) => ({ ...r, value: fD(r.value, t) }))
  );
}
function jw(e, t) {
  let n = 0;
  return (
    Oa(e, t).forEach((r) => {
      n ^= Hw(r.value) ^ r.position;
    }),
    n
  );
}
var dD = ["stops"];
function Ww(e) {
  return e && dD.every((t) => t in e);
}
var hD = ["start", "end"];
function Uw(e) {
  return e && hD.every((t) => t in e);
}
var pD = ["angle", "alpha"],
  Sa = {
    isLinearGradient: (e) => e && pD.every((t) => t in e) && (Uw(e) || Ww(e)),
    hash: (e) => e.angle ^ jw(e, e.alpha),
    toCSS: (e, t) => {
      let n = Oa(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = n.map((o) => `${o.value} ${o.position * 100}%`);
      return `linear-gradient(${r}deg, ${i.join(", ")})`;
    },
  },
  mD = [
    "widthFactor",
    "heightFactor",
    "centerAnchorX",
    "centerAnchorY",
    "alpha",
  ],
  wa = {
    isRadialGradient: (e) => e && mD.every((t) => t in e) && (Uw(e) || Ww(e)),
    hash: (e) =>
      e.centerAnchorX ^
      e.centerAnchorY ^
      e.widthFactor ^
      e.heightFactor ^
      jw(e, e.alpha),
    toCSS: (e) => {
      let {
          alpha: t,
          widthFactor: n,
          heightFactor: r,
          centerAnchorX: i,
          centerAnchorY: o,
        } = e,
        s = Oa(e, t),
        a = s.map((l, c) => {
          let u = s[c + 1],
            f =
              l.position === 1 && u?.position === 1
                ? l.position - 1e-4
                : l.position;
          return `${l.value} ${f * 100}%`;
        });
      return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${
        o * 100
      }%, ${a.join(", ")})`;
    },
  };
function vD({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || J1(t)
      ? (n.backgroundColor = t)
      : W.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || W.toRgbString(e))
    : e &&
      ((e = Xe.get(e, null)),
      typeof e == "string" || J1(e)
        ? (n.background = e)
        : Sa.isLinearGradient(e)
        ? (n.background = Sa.toCSS(e))
        : wa.isRadialGradient(e)
        ? (n.background = wa.toCSS(e))
        : W.isColorObject(e) &&
          (n.backgroundColor = e.initialValue || W.toRgbString(e)));
}
function ce(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function gD(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function yD(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function bD(e) {
  if (!e) return {};
  let t = {};
  return (
    e.preserve3d === !0
      ? (t.transformStyle = "preserve-3d")
      : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = "visible")
      : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = "50%"), (t.top = "50%"))
        : e.center === "x"
        ? (t.left = "50%")
        : e.center === "y" && (t.top = "50%")),
    ce(e, "size", t),
    ce(e, "width", t),
    ce(e, "height", t),
    ce(e, "minWidth", t),
    ce(e, "minHeight", t),
    ce(e, "top", t),
    ce(e, "right", t),
    ce(e, "bottom", t),
    ce(e, "left", t),
    ce(e, "position", t),
    ce(e, "overflow", t),
    ce(e, "opacity", t),
    (!e._border || !e._border.borderWidth) && ce(e, "border", t),
    ce(e, "borderRadius", t),
    ce(e, "radius", t, "borderRadius"),
    ce(e, "color", t),
    ce(e, "shadow", t, "boxShadow"),
    ce(e, "x", t),
    ce(e, "y", t),
    ce(e, "z", t),
    ce(e, "rotate", t),
    ce(e, "rotateX", t),
    ce(e, "rotateY", t),
    ce(e, "rotateZ", t),
    ce(e, "scale", t),
    ce(e, "scaleX", t),
    ce(e, "scaleY", t),
    ce(e, "skew", t),
    ce(e, "skewX", t),
    ce(e, "skewY", t),
    ce(e, "originX", t),
    ce(e, "originY", t),
    ce(e, "originZ", t),
    vD(e, t),
    t
  );
}
function xD(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof Ee(e)[t] == "function" &&
        t.startsWith("on") &&
        !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var cS = [
    "onClick",
    "onDoubleClick",
    "onMouse",
    "onMouseDown",
    "onMouseUp",
    "onTapDown",
    "onTap",
    "onTapUp",
    "onPointer",
    "onPointerDown",
    "onPointerUp",
    "onTouch",
    "onTouchDown",
    "onTouchUp",
  ],
  SD = (() => new Set([...cS, ...cS.map((e) => `${e}Capture`)]))();
function wD(e) {
  if (e.drag) return "grab";
  for (let t in e) if (SD.has(t)) return "pointer";
}
var Tp = "overflow";
function kD(e) {
  return uS(e) ? !0 : e.style ? !!uS(e.style) : !1;
}
function uS(e) {
  return Tp in e && (e[Tp] === "scroll" || e[Tp] === "auto");
}
function Xw(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: o,
      height: s,
      center: a,
      _constraints: l,
      size: c,
      widthType: u,
      heightType: f,
      positionFixed: d,
      positionAbsolute: p,
    } = e,
    y = ft(e.minWidth),
    g = ft(e.minHeight),
    S = ft(e.maxWidth),
    m = ft(e.maxHeight);
  return {
    top: ft(n),
    left: ft(t),
    bottom: ft(r),
    right: ft(i),
    width: ft(o),
    height: ft(s),
    size: ft(c),
    center: a,
    _constraints: l,
    widthType: u,
    heightType: f,
    positionFixed: d,
    positionAbsolute: p,
    minWidth: y,
    minHeight: g,
    maxWidth: S,
    maxHeight: m,
  };
}
var fS = { x: 0, y: 0, width: 200, height: 200 };
function CD(e) {
  b.useInsertionEffect(() => {
    Zo();
  }, []);
  let t = !!A(Vi),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: o } = e,
    s = Xw(e),
    a = fM(s),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: K.current() !== K.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor =
      e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let c = !xD(e) && !e.__fromCanvasComponent && !kD(e),
    u = e.style ? !("pointerEvents" in e.style) : !0;
  c && u && (l.pointerEvents = "none");
  let d = b.Children.count(e.children) > 0 &&
      b.Children.toArray(e.children).every(
        (m) => typeof m == "string" || typeof m == "number"
      ) && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    p = bD(e);
  o === void 0 &&
    !i &&
    (gD(p) || (l.width = fS.width), yD(p) || (l.height = fS.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight);
  let y = {};
  Fa(s) &&
    a &&
    !Cw(e) &&
    (y = {
      left: a.x,
      top: a.y,
      width: a.width,
      height: a.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(l, d, r, p, y, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Ho.applyWillChange(e, l, !0);
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let S = K.current() === K.canvas;
  return (
    e.positionSticky
      ? (!S || t) &&
        ((g.position = "sticky"),
        (g.willChange = "transform"),
        (g.zIndex = 1),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : S &&
        (e.positionFixed || e.positionAbsolute) &&
        (g.position = "absolute"),
    "rotate" in g && g.rotate === void 0 && delete g.rotate,
    [g, a]
  );
}
var TD = new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ",
]);
function ED(e) {
  let t = {};
  for (let n in e)
    (Ki(n) || vO(n)) && !TD.has(n)
      ? (t[n] = Ee(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof Ee(e)[n] != "boolean" &&
          !e.transition &&
          (t.transition = Ee(e)[n]));
  return t;
}
function RD(e) {
  return "data-framer-name" in e;
}
var PD = We(function (t, n) {
    let { name: r, center: i, border: o, _border: s, __portal: a } = t,
      { props: l, children: c } = XO(t),
      u = ED(l),
      f = Jo(t),
      d = wD(t),
      p = V(null),
      y = n ?? p,
      g = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": d,
        "data-framer-highlight": d === "pointer" ? !0 : void 0,
        "data-layoutid": f,
        "data-framer-offset-parent-id": Ee(t)["data-framer-offset-parent-id"],
      };
    !RD(t) && r && (Ee(g)["data-framer-name"] = r);
    let [S, m] = CD(l),
      h = Xw(l),
      v = Cw(h);
    i && !(m && !v && Fa(h))
      ? (u.transformTemplate || (u.transformTemplate = La(i)),
        Object.assign(g, rm(i)))
      : u.transformTemplate || (u.transformTemplate = void 0),
      Ma(t, y);
    let x = HO(t),
      k = !!A(Vi),
      w = _D(l, h, m, k),
      T = uM(
        oe(Re, {
          children: [
            x
              ? C(Ow, {
                  alt: t.alt ?? "",
                  image: x,
                  containerSize: m ?? void 0,
                  nodeId: t.id && im(t.id),
                  layoutId: f,
                })
              : null,
            c,
            C(WO, { ...s, border: o, layoutId: f }),
          ],
        }),
        w
      ),
      E = hu(t.as),
      { size: F, radius: I, shadow: D } = S;
    return (
      F !== void 0 &&
        (delete S.size,
        S.height === void 0 && (S.height = F),
        S.width === void 0 && (S.width = F)),
      I !== void 0 && (delete S.radius, (S.borderRadius = I)),
      D !== void 0 && (delete S.shadow, (S.boxShadow = D)),
      oe(E, { ...g, ...u, layoutId: f, style: S, ref: y, children: [T, a] })
    );
  }),
  Jc = We(function (t, n) {
    let { visible: r = !0 } = t;
    return r ? C(PD, { ...t, ref: n }) : null;
  });
function _D(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: o = 0, heightType: s = 0, width: a, height: l } = t;
  return n && !i
    ? n
    : o === 0 && s === 0 && typeof a == "number" && typeof l == "number"
    ? { width: a, height: l }
    : i || e.positionFixed || e.positionAbsolute
    ? 2
    : 0;
}
var am = "__LAYOUT_TREE_ROOT",
  Yw = b.createContext({
    schedulePromoteTree: () => {},
    scheduleProjectionDidUpdate: () => {},
    initLead: () => {},
  }),
  ID = class extends ve {
    constructor() {
      super(...arguments),
        R(this, "shouldAnimate", !1),
        R(this, "transition"),
        R(this, "lead"),
        R(this, "follow"),
        R(this, "scheduledPromotion", !1),
        R(this, "scheduledDidUpdate", !1),
        R(this, "scheduleProjectionDidUpdate", () => {
          this.scheduledDidUpdate = !0;
        }),
        R(this, "schedulePromoteTree", (e, t, n) => {
          (this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0);
        }),
        R(this, "initLead", (e, t) => {
          (this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0);
        }),
        R(this, "sharedLayoutContext", {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        });
    }
    getSnapshotBeforeUpdate() {
      var e;
      if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
      let t =
        !!((e = this.lead) != null && e.layoutMaybeMutated) &&
        !this.shouldAnimate;
      return (
        this.lead.projectionNodes.forEach((n) => {
          var r;
          n?.promote({
            needsReset: t,
            transition: this.shouldAnimate ? this.transition : void 0,
            preserveFollowOpacity:
              n.options.layoutId === am &&
              !((r = this.follow) != null && r.isExiting),
          });
        }),
        this.shouldAnimate
          ? (this.follow.layoutMaybeMutated = !0)
          : this.scheduleProjectionDidUpdate(),
        (this.lead.layoutMaybeMutated = !1),
        (this.transition = void 0),
        (this.scheduledPromotion = !1),
        null
      );
    }
    componentDidUpdate() {
      var e, t;
      if (!this.lead) return null;
      this.scheduledDidUpdate &&
        ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) ==
          null || t.didUpdate(),
        (this.scheduledDidUpdate = !1));
    }
    render() {
      return C(Yw.Provider, {
        value: this.sharedLayoutContext,
        children: this.props.children,
      });
    }
  },
  FD = { width: "100%", height: "100%", backgroundColor: "none" };
function LD(e) {
  return C(Mt.div, { layoutId: am, style: FD, children: e.children });
}
var MD = class {
    constructor(e) {
      R(this, "sharedIntersectionObserver"),
        R(this, "callbacks", new WeakMap()),
        document &&
          (this.sharedIntersectionObserver = new IntersectionObserver(
            this.resizeObserverCallback.bind(this),
            e
          ));
    }
    resizeObserverCallback(e, t) {
      for (let n of e) {
        let r = this.callbacks.get(n.target);
        r && r([n], t);
      }
    }
    observeElementWithCallback(e, t) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
    }
    unobserve(e) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.unobserve(e),
        this.callbacks.delete(e));
    }
    get root() {
      var e;
      return (e = this.sharedIntersectionObserver) == null ? void 0 : e.root;
    }
  },
  OD = b.createContext(new Map());
function DD(e, t, n) {
  if (typeof IntersectionObserver > "u") return;
  let r = rn(() => `${n.rootMargin}`),
    i = b.useContext(OD),
    { enabled: o } = n;
  b.useEffect(() => {
    var s;
    let a = e.current;
    if (!o || !a) return;
    let l = i.get(r);
    if (!l || l.root !== ((s = n.root) == null ? void 0 : s.current)) {
      let { root: c, ...u } = n;
      (l = new MD({ ...u, root: c?.current })), i.set(r, l);
    }
    return l.observeElementWithCallback(a, t), () => l?.unobserve(a);
  }, [o]);
}
var AD = new Array(100).fill(void 0).map((e, t) => t * 0.01),
  VD = b.createContext(null);
function BD(e, t, n) {
  let r = b.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    {
      enabled: i,
      animateOnce: o,
      threshold: s,
      rootMargin: a = "0px 0px 0px 0px",
    } = n,
    l = b.useCallback(
      ([c]) => {
        if (!c) return;
        let { isInView: u, hasAnimatedOnce: f } = r.current,
          d = zD(c, s?.y ?? 0);
        if (d && !u) {
          if (o && f) return;
          (r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0);
          return;
        }
        if (!d && u) {
          if (((r.current.isInView = !1), o)) return;
          t(!1);
          return;
        }
      },
      [o, s?.y, t]
    );
  DD(e, l, { threshold: AD, rootMargin: a, enabled: i ?? !0 });
}
function $D(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, zt.innerHeight);
}
function zD(
  { boundingClientRect: e, intersectionRect: t, isIntersecting: n },
  r
) {
  return e.height === 0 ? n : n && $D(t, e) >= r;
}
var x6 = Bn(fu(), 1);
var w6 = Bn(fu(), 1);
var dS = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  mr = Symbol("private"),
  Ep = (() => {
    function e(t = {}, n = !1, r = !0) {
      let i = {
          [mr]: {
            makeAnimatables: n,
            observeAnimatables: r,
            observers: new mw(),
            reset() {
              for (let s in o)
                if (dS(o, s)) {
                  let a = dS(t, s) ? Ee(t)[s] : void 0;
                  a !== void 0 ? (o[s] = a) : delete o[s];
                }
            },
            transactions: new Set(),
          },
        },
        o = new Proxy(i, HD);
      return Object.assign(o, t), o;
    }
    return (
      (e.resetObject = (t) => t[mr].reset()),
      (e.addObserver = (t, n) => t[mr].observers.add(n)),
      e
    );
  })(),
  ND = class {
    constructor() {
      R(this, "set", (e, t, n, r) => {
        if (t === mr) return !1;
        let i = e[mr],
          o,
          s;
        if (
          (_n(n) ? ((o = n), (s = o.get())) : (s = n),
          i.makeAnimatables &&
            typeof n != "function" &&
            typeof n != "object" &&
            !o &&
            (o = Xe(n)),
          i.observeAnimatables && o)
        ) {
          let u = i.transactions;
          o.onUpdate({
            update: (f, d) => {
              d && u.add(d), i.observers.notify({ value: r }, d);
            },
            finish: (f) => {
              u.delete(f) && i.observers.finishTransaction(f);
            },
          });
        }
        let a = !1,
          l = !0,
          c = Ee(e)[t];
        if (c !== void 0) {
          _n(c)
            ? ((l = c.get() !== s), c.set(s))
            : ((l = c !== s), (Ee(e)[t] = s));
          let u = s !== null && typeof s == "object";
          (Array.isArray(s) || u) && (l = !0), (a = !0);
        } else o && (n = o), (a = Reflect.set(e, t, n));
        return l && i.observers.notify({ value: r }), a;
      }),
        R(this, "get", (e, t, n) => {
          if (t === mr) return Ee(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == "function" ? r.bind(n) : r;
        });
    }
    deleteProperty(e, t) {
      let n = Reflect.deleteProperty(e, t);
      return e[mr].observers.notify({ value: e }), n;
    }
    ownKeys(e) {
      let t = Reflect.ownKeys(e),
        n = t.indexOf(mr);
      return n !== -1 && t.splice(n, 1), t;
    }
    getOwnPropertyDescriptor(e, t) {
      if (t !== mr) return Reflect.getOwnPropertyDescriptor(e, t);
    }
  },
  HD = new ND();
var jD = "opacity";
function WD(e) {
  return jD in e;
}
function UD(e, t) {
  if (!WD(e)) return;
  let n = Xe.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function XD(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (r) => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`
    );
    t.push(...n);
  }
  return t;
}
function lm(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((r) => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`)
    .join(", ");
  n && (t.textShadow = n);
}
function YD(e, t) {
  let n = [];
  Y(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    Y(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    Y(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    Y(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    Y(e.invert) && n.push(`invert(${e.invert / 100})`),
    Y(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    Y(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    Y(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...XD(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" "));
}
function GD(e, t) {
  Y(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function gu(e, t) {
  GD(e, t), YD(e, t);
}
var KD = class extends ve {
    constructor() {
      super(...arguments),
        R(this, "layoutMaybeMutated"),
        R(this, "projectionNodes", new Map()),
        R(this, "rootProjectionNode"),
        R(this, "isExiting"),
        R(
          this,
          "shouldPreserveFollowOpacity",
          (e) => e.options.layoutId === am && !this.props.isExiting
        ),
        R(this, "switchLayoutGroupContext", {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        });
    }
    componentDidMount() {
      this.props.isLead &&
        this.props.sharedLayoutContext.initLead(
          this,
          !!this.props.animatesLayout
        );
    }
    shouldComponentUpdate(e) {
      let {
        isLead: t,
        isExiting: n,
        isOverlayed: r,
        animatesLayout: i,
        transition: o,
        sharedLayoutContext: s,
      } = e;
      if (((this.isExiting = n), t === void 0)) return !0;
      let a = !this.props.isLead && !!t,
        l = this.props.isExiting && !n,
        c = a || l,
        u = !!this.props.isLead && !t,
        f = this.props.isOverlayed !== r;
      return (
        (c || u) && this.projectionNodes.forEach((d) => d?.willUpdate()),
        c
          ? s.schedulePromoteTree(this, o, !!i)
          : f && s.scheduleProjectionDidUpdate(),
        !!c && !!i
      );
    }
    addChild(e) {
      let t = e.options.layoutId;
      t && (this.projectionNodes.set(t, e), this.setRootChild(e));
    }
    setRootChild(e) {
      if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
      this.rootProjectionNode =
        this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
    }
    removeChild(e) {
      let t = e.options.layoutId;
      t && this.projectionNodes.delete(t);
    }
    render() {
      return C(al.Provider, {
        value: this.switchLayoutGroupContext,
        children: this.props.children,
      });
    }
  },
  qD = (e) => {
    let t = b.useContext(Yw);
    return C(KD, { ...e, sharedLayoutContext: t });
  },
  Gw = b.createContext(!0);
function M6() {
  return A(Gw);
}
function QD() {
  return new Map();
}
function ZD() {
  return rn(QD);
}
var Kw = xe({ register: () => {}, deregister: () => {} }),
  JD = ({ isCurrent: e, isOverlayed: t, children: n }) => {
    let r = ZD(),
      i = fe(
        (a) => {
          if (r.has(a)) {
            console.warn("NavigationTargetWrapper: already registered");
            return;
          }
          r.set(a, void 0);
        },
        [r]
      ),
      o = fe(
        (a) => {
          let l = r.get(a);
          l?.(), r.delete(a);
        },
        [r]
      ),
      s = V({ register: i, deregister: o }).current;
    return (
      N(
        () => (
          r.forEach((a, l) => {
            let c = l(e, t);
            r.set(l, Uo(c) ? c : void 0);
          }),
          () => {
            r.forEach((a, l) => {
              a && (a(), r.set(l, void 0));
            });
          }
        ),
        [e, t, r]
      ),
      C(Kw.Provider, { value: s, children: n })
    );
  };
function qw(e, t = []) {
  let { register: n, deregister: r } = A(Kw);
  N(() => {
    if (e) return n(e), () => r(e);
  }, [n, r, ...t]);
}
var Rp = b.memo(function ({
  isLayeredContainer: t,
  isCurrent: n,
  isPrevious: r,
  isOverlayed: i = !1,
  visible: o,
  transitionProps: s,
  children: a,
  backdropColor: l,
  onTapBackdrop: c,
  backfaceVisible: u,
  exitBackfaceVisible: f,
  animation: d,
  exitAnimation: p,
  instant: y,
  initialProps: g,
  exitProps: S,
  position: m = { top: 0, right: 0, bottom: 0, left: 0 },
  withMagicMotion: h,
  index: v,
  areMagicMotionLayersPresent: x,
  id: k,
  isInitial: w,
}) {
  let T = e0(),
    E = A(Zi),
    { persistLayoutIdCache: F } = A(jo),
    I = V({
      wasCurrent: void 0,
      wasPrevious: !1,
      wasBeingRemoved: !1,
      wasReset: !0,
      origins: hS({}, g, s),
    }),
    D = V(null),
    $ = E !== null && !E.isPresent;
  n && I.current.wasCurrent === void 0 && F(),
    N(() => {
      if (t || !T) return;
      if ($) {
        I.current = { ...I.current, wasBeingRemoved: $ };
        return;
      }
      let { wasPrevious: de, wasCurrent: ee } = I.current,
        yt = (n && !ee) || (!$ && I.current.wasBeingRemoved && n),
        Be = r && !de,
        Ye = hS(I.current.origins, g, s),
        ct = I.current.wasReset;
      yt || Be
        ? (T.stop(), T.start({ zIndex: v, ...Ye, ...s }), (ct = !1))
        : ct === !1 &&
          (T.stop(), T.set({ zIndex: v, ...Fi, opacity: 0 }), (ct = !0)),
        (I.current = {
          wasCurrent: !!n,
          wasPrevious: !!r,
          wasBeingRemoved: !1,
          wasReset: ct,
          origins: Ye,
        });
    }, [n, r, $]);
  let J = y ? { type: !1 } : "velocity" in d ? { ...d, velocity: 0 } : d,
    Z = y ? { type: !1 } : p || d,
    B = { ...m };
  (B.left === void 0 || B.right === void 0) && (B.width = "auto"),
    (B.top === void 0 || B.bottom === void 0) && (B.height = "auto");
  let te = (pS(s) || pS(g)) && (t || n || r) ? 1200 : void 0,
    ne = { ...Fi, ...I.current.origins },
    U = t
      ? {
          initial: { ...ne, ...g },
          animate: { ...ne, ...s, transition: J },
          exit: { ...ne, ...S, transition: d },
        }
      : { animate: T, exit: { ...ne, ...S, transition: Z } },
    re = !($ || x === !1),
    ie = !!n && re;
  return oe(Jc, {
    "data-framer-component-type": "NavigationContainerWrapper",
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      transformStyle: "flat",
      backgroundColor: "transparent",
      overflow: "hidden",
      zIndex: t || $ || (n && h) ? v : void 0,
      pointerEvents: void 0,
      visibility: o ? "visible" : "hidden",
      perspective: te,
    },
    children: [
      t &&
        C(Jc, {
          width: "100%",
          height: "100%",
          "data-framer-component-type": "NavigationContainerBackdrop",
          transition: d,
          initial: { opacity: y && o ? 1 : 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          backgroundColor: l || "transparent",
          onTap: $ ? void 0 : c,
        }),
      C(Jc, {
        ...B,
        ...U,
        transition: {
          default: J,
          originX: { type: !1 },
          originY: { type: !1 },
          originZ: { type: !1 },
        },
        backgroundColor: "transparent",
        backfaceVisible: $ ? f : u,
        "data-framer-component-type": "NavigationContainer",
        "data-framer-is-current-navigation-target": !!n,
        style: {
          pointerEvents: void 0,
          opacity: (n && w) || t || (n && h) ? 1 : 0,
        },
        "data-is-present": re ? void 0 : !1,
        ref: D,
        children: C(VD.Provider, {
          value: D,
          children: C(Gw.Provider, {
            value: ie,
            children: C(JD, {
              isCurrent: ie,
              isOverlayed: i,
              children: C(qD, {
                isLead: n,
                animatesLayout: !!h,
                transition: J,
                isExiting: !re,
                isOverlayed: i,
                id: k,
                children: a,
              }),
            }),
          }),
        }),
      }),
    ],
  });
},
eA);
function eA(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function hS(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (Y(t.originX) && (r.originX = t.originX),
      Y(t.originY) && (r.originY = t.originY),
      Y(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (Y(n.originX) && (r.originX = n.originX),
      Y(n.originY) && (r.originY = n.originY),
      Y(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function pS(e) {
  var t, n, r;
  if (!e || !("rotateX" in e || "rotateY" in e || "z" in e)) return !1;
  let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    s =
      ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 ||
      ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 ||
      ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
  return o || s;
}
var Fi = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: 0.5,
    originY: 0.5,
    originZ: 0,
    opacity: 1,
  },
  tA = class {
    constructor() {
      R(this, "warning", () => {
        ba(
          "The Navigator API is only available inside of Framer: https://www.framer.com/"
        );
      }),
        R(this, "goBack", () => this.warning()),
        R(this, "instant", () => this.warning()),
        R(this, "fade", () => this.warning()),
        R(this, "push", () => this.warning()),
        R(this, "modal", () => this.warning()),
        R(this, "overlay", () => this.warning()),
        R(this, "flip", () => this.warning()),
        R(this, "customTransition", () => this.warning()),
        R(this, "magicMotion", () => this.warning());
    }
  },
  nA = new tA(),
  rA = xe(nA),
  Je = {
    Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
    PushLeft: { exit: { x: "-30%" }, enter: { x: "100%" } },
    PushRight: { exit: { x: "30%" }, enter: { x: "-100%" } },
    PushUp: { exit: { y: "-30%" }, enter: { y: "100%" } },
    PushDown: { exit: { y: "30%" }, enter: { y: "-100%" } },
    Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
    Modal: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { center: !0 },
      enter: { opacity: 0, scale: 1.2 },
    },
    OverlayLeft: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { right: 0, top: 0, bottom: 0 },
      enter: { x: "100%" },
    },
    OverlayRight: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { left: 0, top: 0, bottom: 0 },
      enter: { x: "-100%" },
    },
    OverlayUp: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { bottom: 0, left: 0, right: 0 },
      enter: { y: "100%" },
    },
    OverlayDown: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { top: 0, left: 0, right: 0 },
      enter: { y: "-100%" },
    },
    FlipLeft: {
      backfaceVisible: !1,
      exit: { rotateY: -180 },
      enter: { rotateY: 180 },
    },
    FlipRight: {
      backfaceVisible: !1,
      exit: { rotateY: 180 },
      enter: { rotateY: -180 },
    },
    FlipUp: {
      backfaceVisible: !1,
      exit: { rotateX: 180 },
      enter: { rotateX: -180 },
    },
    FlipDown: {
      backfaceVisible: !1,
      exit: { rotateX: -180 },
      enter: { rotateX: 180 },
    },
    MagicMotion: { withMagicMotion: !0 },
  };
function iA(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
      return Je.PushLeft;
    case "left":
      return Je.PushRight;
    case "bottom":
      return Je.PushUp;
    case "top":
      return Je.PushDown;
  }
}
function oA(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return Je.OverlayLeft;
    case "left":
      return Je.OverlayRight;
    case "bottom":
      return Je.OverlayUp;
    case "top":
      return Je.OverlayDown;
  }
}
function sA(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return Je.FlipLeft;
    case "left":
      return Je.FlipRight;
    case "bottom":
      return Je.FlipUp;
    case "top":
      return Je.FlipDown;
  }
}
var aA = () => ({
  current: -1,
  previous: -1,
  currentOverlay: -1,
  previousOverlay: -1,
  visualIndex: 0,
  overlayItemId: 0,
  historyItemId: 0,
  history: [],
  overlayStack: [],
  containers: {},
  containerIndex: {},
  containerVisualIndex: {},
  containerIsRemoved: {},
  transitionForContainer: {},
  previousTransition: null,
});
function mS(e, t) {
  switch (t.type) {
    case "addOverlay":
      return cA(e, t.transition, t.component);
    case "removeOverlay":
      return uA(e);
    case "add":
      return Qw(e, t.key, t.transition, t.component);
    case "remove":
      return Zw(e);
    case "update":
      return lA(e, t.key, t.component);
    case "back":
      return fA(e);
    case "forward":
      return dA(e);
    default:
      return;
  }
}
function lA(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function cA(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    o = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: o,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function uA(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function Qw(e, t, n, r) {
  e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0));
  let i = e.history[e.history.length - 1],
    o = i && i.key === t;
  if (((e.overlayStack = []), o && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (o) return;
  let s = e.containerVisualIndex[t],
    a = e.containerIsRemoved[t],
    l = i?.key && n.withMagicMotion ? vA(t, s, a, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let c = e.current + 1,
    u = e.current;
  for (let y in e.containerIndex)
    e.containerIndex[y] === c && (e.containerIndex[y] = mA(y, e.history));
  e.containerIndex[t] = c;
  let { containerVisualIndex: f, containerIsRemoved: d } = hA(e, t, l),
    p = Jw(c, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: c,
    previous: u,
    containerVisualIndex: f,
    containerIsRemoved: d,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function fA(e) {
  let t = { ...e.containers },
    n = Zw(e);
  if (n) return (n.containers = t), n;
}
function dA(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    o = [...e.history],
    s = Qw(e, n, r, i);
  if (s) return (s.history = o), s;
}
function Zw(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  he(r, "The navigation history must have at least one component"),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((d) => d.key !== n.key) && delete e.containers[n.key];
  let o = e.current - 1,
    s = e.current,
    {
      containerIsRemoved: a,
      containerVisualIndex: l,
      previousTransition: c,
      visualIndex: u,
    } = pA(e, r, n),
    f = Jw(o, s, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: o,
    previous: s,
    containerIsRemoved: a,
    containerVisualIndex: l,
    previousTransition: c,
    visualIndex: u,
    transitionForContainer: f,
  };
}
function hA(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    (r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1);
  else {
    let i = e.containerVisualIndex[t];
    for (let [o, s] of Object.entries(e.containerVisualIndex))
      i !== void 0 && s > i && (r.containerIsRemoved[o] = !0);
  }
  return r;
}
function pA(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    o = e.previousTransition === null ? null : { ...e.previousTransition },
    s = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: o,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let a = e.containerVisualIndex[t.key],
    l = e.containerVisualIndex[n.key],
    c =
      (a !== void 0 && l !== void 0 && a <= l) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    c
      ? ((s.containerIsRemoved[n.key] = !0),
        (s.containerVisualIndex[t.key] =
          u !== void 0 ? u : e.history.length - 1))
      : ((s.visualIndex = e.visualIndex + 1),
        (s.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (s.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    s
  );
}
function mA(e, t) {
  var n;
  for (let r = t.length; r > t.length; r--)
    if (((n = t[r]) == null ? void 0 : n.key) === e) return r;
  return -1;
}
function Jw(e, t, n, r, i) {
  let o = { ...i };
  for (let [s, a] of Object.entries(r)) {
    let l = gA(a, { current: e, previous: t, history: n });
    l && (o[s] = l);
  }
  return o;
}
function vA(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
    ? !1
    : r.slice(t, r.length).findIndex((s) => s.key === e) > -1
    ? !0
    : !(r.slice(0, t - 1).findIndex((s) => s.key === e) > -1);
}
function gA(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let o = i[e];
      return Yc("enter", o?.transition.enter, o?.transition.animation);
    }
    if (e === r && n > r) {
      let o = i[e + 1];
      return Yc("exit", o?.transition.exit, o?.transition.animation);
    }
    if (e === n && n < r) {
      let o = i[e + 1];
      return Yc("enter", o?.transition.exit, o?.transition.animation);
    }
    if (e === r && n < r) {
      let o = i[e];
      return Yc("exit", o?.transition.enter, o?.transition.animation);
    }
  }
}
var yA = Ai(Fi);
function Yc(e, t, n) {
  let r = {},
    i = {};
  return (
    yA.forEach((o) => {
      (r[o] = Fi[o]), (i[o] = { ...n, from: Fi[o] });
    }),
    t &&
      Object.keys(t).forEach((o) => {
        if (t[o] === void 0) return;
        let s = t[o],
          a = typeof t[o] == "string" ? `${Ee(Fi)[o]}%` : Ee(Fi)[o];
        (Ee(r)[o] = e === "enter" ? a : s),
          (i[o] = { ...n, from: e === "enter" ? s : a, velocity: 0 });
      }),
    { ...r, transition: { ...i } }
  );
}
var bA = b.createContext(void 0);
var ek = b.createContext(void 0),
  xA = (() => {
    var e, t, n, r, i, o, s, a, l;
    return (
      (t = class extends ve {
        constructor(c) {
          var u;
          super(c),
            Qi(this, n),
            Qi(this, i),
            Qi(this, a),
            Qi(this, e, null),
            R(this, "state", aA()),
            Qi(this, s, (S) => {
              if (!this.props.enabled && this.state.history.length > 0) return;
              let m = mS(this.state, S);
              if (!m) return;
              let { skipLayoutAnimation: h } = this.props,
                v = m.history[m.current],
                x =
                  (S.type === "add" && S.transition.withMagicMotion) ||
                  (S.type === "forward" && v?.transition.withMagicMotion) ||
                  (S.type === "remove" && !!m.previousTransition),
                k = () => {
                  var w;
                  this.setState(m),
                    v?.key &&
                      ((w = this.context) == null || w.call(this, v.key));
                };
              h && !x ? h(k) : k();
            }),
            R(this, "goBack", () => {
              var S;
              if (!Lt(this, i, o).call(this))
                return (
                  df(
                    this,
                    e,
                    ((S = globalThis.event) == null ? void 0 : S.timeStamp) ||
                      null
                  ),
                  this.state.currentOverlay !== -1
                    ? di(this, s).call(this, { type: "removeOverlay" })
                    : di(this, s).call(this, { type: "remove" })
                );
            });
          let f = this.props.children;
          if (!f || !Zc(f) || !Qc(f)) return;
          let d = { ...Je.Instant },
            y = {
              type: "add",
              key:
                ((u = f.key) == null ? void 0 : u.toString()) ||
                `stack-${this.state.historyItemId + 1}`,
              transition: d,
              component: f,
            },
            g = mS(this.state, y);
          g && (this.state = g);
        }
        componentDidMount() {
          var c;
          let u = this.state.history[this.state.current];
          u && ((c = this.context) == null || c.call(this, u.key));
        }
        UNSAFE_componentWillReceiveProps(c) {
          var u;
          let f = c.children;
          if (!Zc(f) || !Qc(f)) return;
          let d = (u = f.key) == null ? void 0 : u.toString();
          d &&
            (this.state.history.length === 0
              ? Lt(this, a, l).call(this, f, Je.Instant)
              : di(this, s).call(this, {
                  type: "update",
                  key: d,
                  component: f,
                }));
        }
        componentWillUnmount() {
          var c, u;
          (u = (c = this.props).resetProjection) == null || u.call(c);
        }
        instant(c) {
          Lt(this, a, l).call(this, c, Je.Instant, void 0);
        }
        fade(c, u) {
          Lt(this, a, l).call(this, c, Je.Fade, u);
        }
        push(c, u) {
          Lt(this, a, l).call(this, c, iA(u), u);
        }
        modal(c, u) {
          Lt(this, a, l).call(this, c, Je.Modal, u);
        }
        overlay(c, u) {
          Lt(this, a, l).call(this, c, oA(u), u);
        }
        flip(c, u) {
          Lt(this, a, l).call(this, c, sA(u), u);
        }
        magicMotion(c, u) {
          Lt(this, a, l).call(this, c, Je.MagicMotion, u);
        }
        customTransition(c, u) {
          Lt(this, a, l).call(this, c, u);
        }
        render() {
          var c, u, f, d, p;
          let y = Lt(this, n, r).call(this, { overCurrentContext: !1 }),
            g = Lt(this, n, r).call(this, { overCurrentContext: !0 }),
            S = SA(g),
            m = g.current > -1,
            h = this.state.history.length === 1,
            v = [];
          for (let [k, w] of Object.entries(this.state.containers)) {
            let T = this.state.containerIndex[k];
            he(T !== void 0, "Container's index must be registered");
            let E = this.state.containerVisualIndex[k];
            he(E !== void 0, "Container's visual index must be registered");
            let F = this.state.containerIsRemoved[k],
              I = this.state.history[T],
              D = this.state.transitionForContainer[k],
              $ = T === this.state.current,
              J = T === this.state.previous,
              Z = $ ? !1 : F,
              B =
                ((c = I?.transition) == null ? void 0 : c.withMagicMotion) ||
                ($ && !!this.state.previousTransition);
            v.push(
              C(
                Rp,
                {
                  id: k,
                  index: E,
                  isInitial: h,
                  isCurrent: $,
                  isPrevious: J,
                  isOverlayed: m,
                  visible: $ || J,
                  position: (u = I?.transition) == null ? void 0 : u.position,
                  instant: gS(T, y),
                  transitionProps: D,
                  animation: vS(T, y),
                  backfaceVisible: PA(T, y),
                  exitAnimation:
                    (f = I?.transition) == null ? void 0 : f.animation,
                  exitBackfaceVisible:
                    (d = I?.transition) == null ? void 0 : d.backfaceVisible,
                  exitProps: (p = I?.transition) == null ? void 0 : p.enter,
                  withMagicMotion: B,
                  areMagicMotionLayersPresent: Z ? !1 : void 0,
                  children: C(LD, {
                    children: yS({ component: w, transition: I?.transition }),
                  }),
                },
                k
              )
            );
          }
          let x = this.state.overlayStack.map((k, w) =>
            C(
              Rp,
              {
                isLayeredContainer: !0,
                isCurrent: w === this.state.currentOverlay,
                position: k.transition.position,
                initialProps: RA(w, g),
                transitionProps: _A(w, g),
                instant: gS(w, g, !0),
                animation: vS(w, g),
                exitProps: k.transition.enter,
                visible: IA(w, g),
                backdropColor: TA(k.transition),
                backfaceVisible: EA(w, g),
                onTapBackdrop: FA(k.transition, this.goBack),
                index: this.state.current + 1 + w,
                children: yS({
                  component: k.component,
                  transition: k.transition,
                }),
              },
              k.key
            )
          );
          return C(Jc, {
            "data-framer-component-type": "NavigationRoot",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            style: {
              overflow: "hidden",
              backgroundColor: "unset",
              pointerEvents: void 0,
              ...this.props.style,
            },
            children: C(rA.Provider, {
              value: this,
              children: oe(ek.Provider, {
                value: h,
                children: [
                  C(Rp, {
                    isLayeredContainer: !0,
                    position: void 0,
                    initialProps: {},
                    instant: !1,
                    transitionProps: wA(S),
                    animation: kA(S),
                    backfaceVisible: CA(S),
                    visible: !0,
                    backdropColor: void 0,
                    onTapBackdrop: void 0,
                    index: 0,
                    children: C(NL, {
                      children: C(ID, {
                        children: C(td, {
                          presenceAffectsLayout: !1,
                          children: v,
                        }),
                      }),
                    }),
                  }),
                  C(td, { children: x }),
                ],
              }),
            }),
          });
        }
      }),
      (e = new WeakMap()),
      (n = new WeakSet()),
      (r = function (c) {
        let {
          current: u,
          previous: f,
          currentOverlay: d,
          previousOverlay: p,
        } = this.state;
        return c.overCurrentContext
          ? { current: d, previous: p, history: this.state.overlayStack }
          : { current: u, previous: f, history: this.state.history };
      }),
      (i = new WeakSet()),
      (o = function () {
        return globalThis.event
          ? di(this, e) === globalThis.event.timeStamp
          : !1;
      }),
      (s = new WeakMap()),
      (a = new WeakSet()),
      (l = function (c, u, f) {
        var d, p;
        if (
          Lt(this, i, o).call(this) ||
          (df(
            this,
            e,
            ((d = globalThis.event) == null ? void 0 : d.timeStamp) || null
          ),
          !c || !Zc(c) || !Qc(c))
        )
          return;
        let y = { ...u, ...f };
        if (!!y.overCurrentContext)
          return di(this, s).call(this, {
            type: "addOverlay",
            transition: y,
            component: c,
          });
        let S =
          ((p = c.key) == null ? void 0 : p.toString()) ||
          `stack-${this.state.historyItemId + 1}`;
        di(this, s).call(this, {
          type: "add",
          key: S,
          transition: y,
          component: c,
        });
      }),
      R(t, "defaultProps", { enabled: !0 }),
      R(t, "contextType", bA),
      t
    );
  })(),
  tk = { stiffness: 500, damping: 50, restDelta: 1, type: "spring" };
function SA(e) {
  let t, n;
  return (
    e.current !== -1 ? (t = e.history[e.current]) : (n = e.history[e.previous]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function wA({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function kA({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
    ? t.transition.animation
    : tk;
}
function CA({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function TA(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return "rgba(4,4,15,.4)";
}
function EA(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else if (e < n) {
    let i = r[e + 1];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  }
}
function RA(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function PA(e, t) {
  var n, r, i, o;
  let { current: s, previous: a, history: l } = t;
  return (e === a && s > a) || (e === s && s < a)
    ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null
      ? void 0
      : r.backfaceVisible
    : (o = (i = l[e]) == null ? void 0 : i.transition) == null
    ? void 0
    : o.backfaceVisible;
}
function _A(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let i = r[e + 1];
      if (i && i.transition) return i.transition.exit;
    } else {
      let i = r[e];
      if (i && i.transition) return i.transition.enter;
    }
}
function vS(e, t) {
  let { current: n, previous: r, history: i } = t,
    o = r > n ? r : n;
  if (e < o) {
    let s = i[e + 1];
    if (s && s.transition.animation) return s.transition.animation;
  } else if (e !== o) {
    let s = i[e];
    if (s && s.transition.animation) return s.transition.animation;
  } else {
    let s = i[e];
    if (s?.transition.animation) return s.transition.animation;
  }
  return tk;
}
function gS(e, t, n) {
  let { current: r, previous: i, history: o } = t;
  return !!((n && o.length > 1) || (e !== i && e !== r) || r === i);
}
function IA(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function yS(e) {
  return b.Children.map(e.component, (n) => {
    var r;
    if (!Zc(n) || !Qc(n) || !n.props) return n;
    let i = { style: n.props.style ?? {} },
      o = (r = e?.transition) == null ? void 0 : r.position,
      s = !o || (o.left !== void 0 && o.right !== void 0),
      a = !o || (o.top !== void 0 && o.bottom !== void 0),
      l = "style" in n.props ? Ve(n.props.style) : !0;
    return (
      s &&
        ("width" in n.props && (i.width = "100%"),
        l && (i.style.width = "100%")),
      a &&
        ("height" in n.props && (i.height = "100%"),
        l && (i.style.height = "100%")),
      b.cloneElement(n, i)
    );
  });
}
function FA(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function LA(e) {
  let t = i0(),
    n = id();
  return (
    b.useInsertionEffect(() => {
      Zo();
    }, []),
    C(xA, {
      ...e,
      resetProjection: t,
      skipLayoutAnimation: n,
      children: e.children,
    })
  );
}
var $6 = Bn(fu(), 1);
var W6 = Bn(Kp(), 1);
function ka(...e) {
  return e.filter(Boolean).join(" ");
}
var MA = (() => {
    function e(t = {}) {
      let n = Ep(t, !1, !1);
      return e.addData(n), n;
    }
    return (
      (e._stores = []),
      (e.addData = (t) => {
        e._stores.push(t);
      }),
      (e.reset = () => {
        e._stores.forEach((t) => Ep.resetObject(t));
      }),
      (e.addObserver = (t, n) => Ep.addObserver(t, n)),
      e
    );
  })(),
  Pp = MA;
var OA = { update: 0 },
  DA = b.createContext({ update: NaN });
var AA = class extends ve {
    constructor() {
      super(...arguments),
        R(this, "observers", []),
        R(this, "state", OA),
        R(this, "taskAdded", !1),
        R(this, "frameTask", () => {
          this.setState({ update: this.state.update + 1 }),
            (this.taskAdded = !1);
        }),
        R(this, "observer", () => {
          this.taskAdded ||
            ((this.taskAdded = !0), yw.addFrameTask(this.frameTask));
        });
    }
    componentWillUnmount() {
      this.observers.map((e) => e()), Pp.reset();
    }
    render() {
      let { children: e } = this.props;
      return (
        this.observers.map((t) => t()),
        (this.observers = []),
        Pp._stores.forEach((t) => {
          let n = Pp.addObserver(t, this.observer);
          this.observers.push(n);
        }),
        C(DA.Provider, { value: { ...this.state }, children: e })
      );
    }
  },
  vN = Bn(fu(), 1);
var nk = "__framer__",
  VA = (() => nk.length)();
function BA(e) {
  if (e.startsWith(nk)) return e.substr(VA);
}
var Gn = [
    "opacity",
    "x",
    "y",
    "scale",
    "rotate",
    "rotateX",
    "rotateY",
    "skewX",
    "skewY",
    "transformPerspective",
  ],
  su = (e) => ({
    x: De(e?.x ?? 0),
    y: De(e?.y ?? 0),
    opacity: De(e?.opacity ?? 1),
    scale: De(e?.scale ?? 1),
    rotate: De(e?.rotate ?? 0),
    rotateX: De(e?.rotateX ?? 0),
    rotateY: De(e?.rotateY ?? 0),
    skewX: De(e?.skewX ?? 0),
    skewY: De(e?.skewY ?? 0),
    transformPerspective: De(e?.transformPerspective ?? 0),
  }),
  He = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    skewX: 0,
    skewY: 0,
    transformPerspective: 0,
  };
function rk(e) {
  return e in He;
}
function ik(e, t) {
  let n = rn(() => ({ values: su(t ? e : void 0) }));
  return (
    b.useEffect(() => {
      if (!t)
        for (let r of Gn) {
          let i = He[r];
          Nt(i) || n.values[r].set(i);
        }
    }, [n, t]),
    n
  );
}
var $A = new Set([
    "loopEffectEnabled",
    "loopTransition",
    "loop",
    "loopRepeatType",
    "loopRepeatDelay",
  ]),
  zA = () => {
    let e = V();
    return (
      N(
        () => () => {
          clearTimeout(e.current);
        },
        []
      ),
      async (t) =>
        new Promise((n) => {
          e.current = setTimeout(() => {
            n(!0);
          }, t * 1e3);
        })
    );
  };
function NA({
  loopEffectEnabled: e,
  loopRepeatDelay: t,
  loopTransition: n,
  loopRepeatType: r,
  loop: i,
}) {
  let o = pi(),
    s = rn(() => ({ values: su() })),
    a = b.useRef(!1),
    l = zA(),
    c = async () => {
      if (!i) return;
      let d = n || void 0,
        p = a.current && r === "mirror",
        y = p ? He : i,
        g = p ? i : He;
      return (
        (a.current = !a.current),
        Promise.all(
          Gn.map((S) => {
            if (!(o && S !== "opacity"))
              return (
                s.values[S].set(g[S] ?? He[S]),
                new Promise((m) => {
                  let h = { ...d, onComplete: () => m() };
                  io(s.values[S], y[S] ?? g[S], h);
                })
              );
          })
        )
      );
    },
    u = async () => {
      e && (await c(), await l(t ?? 0), await u());
    },
    f = fe(() => {
      Gn.forEach((d) => {
        s.values[d].stop();
      }),
        Gn.forEach((d) => {
          s.values[d].set(He[d]);
        }),
        (a.current = !1);
    }, [s]);
  return b.useEffect(() => (e && i ? u() : f(), () => f()), [e]), s;
}
function HA(e, t, n, r, i) {
  let o = n / 100 - 1,
    s = i ? (t - r) * o : 0,
    a = -e * o;
  return s + a;
}
var jA = new Set([
  "speed",
  "adjustPosition",
  "offset",
  "parallaxTransformEnabled",
]);
function WA(e, t, n) {
  let {
      speed: r = 100,
      offset: i = 0,
      adjustPosition: o = !1,
      parallaxTransformEnabled: s,
    } = e,
    a = b.useRef(null),
    l = pi(),
    c = b.useCallback(
      (y) => (a.current === null || r === 100 ? 0 : HA(y, a.current, r, i, o)),
      [a, r, i, o]
    );
  b.useLayoutEffect(() => {
    G.read(() => {
      var y, g;
      a.current =
        ((g = (y = t.current) == null ? void 0 : y.getBoundingClientRect()) ==
        null
          ? void 0
          : g.top) ?? 0;
    }),
      G.update(() => {
        f.set(c(u.get())), o && d.set(n ?? "initial");
      });
  }, [t, a, o]);
  let { scrollY: u } = Yy(),
    f = kt(u, c),
    d = $n(o && a.current === null ? "hidden" : n),
    p = $n(0);
  return {
    values: { y: l || !s ? p : f },
    style: s ? { visibility: d } : void 0,
  };
}
function UA(e) {
  if (!(me(e) || !Ve(e))) return e?.transition;
}
async function _p(e, t, n, r, i, o) {
  let s = UA(e);
  return Promise.all(
    Gn.map(
      (a) =>
        new Promise((l) => {
          if (n && a !== "opacity") return l();
          let c = t.values[a];
          c.stop();
          let u = Ve(e) ? e?.[a] ?? He[a] : He[a];
          if ((Ce(u) && (u = u.get()), !on(u))) return l();
          let f = nr.get(r.current);
          f && f.setBaseTarget(a, u);
          let d =
            me(i) && !c?.hasAnimated && zt.HandoffAppearAnimations
              ? { elapsed: zt.HandoffAppearAnimations(i, a, c, G) }
              : void 0;
          o
            ? c.set(u)
            : io(c, u, {
                ...s,
                velocity: 0,
                elapsed: 0,
                ...d,
                onComplete: () => l(),
              });
        })
    )
  );
}
var XA = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);
function YA(
  {
    initial: e,
    animate: t,
    exit: n,
    presenceInitial: r,
    presenceAnimate: i,
    presenceExit: o,
  },
  s,
  a,
  l,
  c
) {
  let u = r ?? e,
    f = i ?? t,
    d = o ?? n,
    p = V(!1),
    y = V(f),
    [g, S] = Xf(),
    m = V(!1),
    h = rn(() => {
      let x = u ?? l;
      if (!Ve(x)) return { values: su() };
      let k = {};
      for (let w in x) {
        let T = Ve(x) ? x[w] : void 0;
        on(T) && (k[w] = T);
      }
      return { values: su(k) };
    });
  ut(() => {
    if (p.current && f) return;
    let x = nr.get(s.current);
    if (x) {
      p.current = !0;
      for (let k in h.values) {
        if (!rk(k)) continue;
        let w = l?.[k];
        x.setBaseTarget(k, on(w) ? w : He[k]);
      }
    }
  }, [f]);
  let v = pi();
  return (
    ut(() => {
      if (!a) {
        S?.();
        return;
      }
      if (g !== m.current)
        (m.current = g),
          g
            ? u && f && _p(f, h, v, s, c)
            : d
            ? _p(d, h, v, s, c).then(() => S())
            : S();
      else {
        if (!!je(f, y.current) || !f) return;
        (y.current = f), _p(f, h, v, s, c, !0);
      }
    }),
    h
  );
}
function GA(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; )
    (n += r.offsetTop), (r = r.offsetParent);
  return n;
}
var KA = 1;
function ok(e, t = 0, n) {
  var r;
  let i = [],
    o = [];
  for (let s = e.length; s >= 0; s--) {
    let { ref: a, offset: l } = e[s] ?? {};
    if (!a || !a.current) continue;
    let u = GA(a.current, document.documentElement) - KA - (l ?? 0) - t,
      f = ((r = a.current) == null ? void 0 : r.clientHeight) ?? 0,
      d = i[i.length - 1],
      p = Math.max(u + f, 0);
    i.push(u),
      o.unshift(
        Math.max(u, 0),
        d === void 0 ? p : Math.min(p, Math.max(d - 1, 0))
      ),
      n?.(s);
  }
  return o;
}
function qA(e, t = 0) {
  return e < t ? "up" : "down";
}
var QA = 4;
function ZA(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: o = !0, enabled: s = !0 } = n;
  b.useEffect(() => {
    if (!r || !s) return;
    let a,
      l = 0,
      c,
      u;
    return ro(({ y: f }) => {
      if ((!o && u === i) || f.current > f.scrollLength || f.current < 0)
        return;
      let d = qA(f.current, a);
      a = f.current;
      let p = d !== c;
      if (((c = d), p)) l = f.current;
      else {
        if (Math.abs(f.current - l) < QA) return;
        let g = d === r ? i : void 0;
        g !== u && t(g), (u = g);
      }
    });
  }, [r, o, i, s, t]);
}
var JA = new Set([
    "threshold",
    "animateOnce",
    "opacity",
    "targetOpacity",
    "x",
    "y",
    "scale",
    "transition",
    "rotate",
    "rotateX",
    "rotateY",
    "perspective",
    "enter",
    "exit",
    "animate",
    "styleAppearEffectEnabled",
    "targets",
    "scrollDirection",
  ]),
  eV = ["animate", "animate"],
  bS = { inputRange: [], outputRange: [] };
function tV(e, t, n) {
  let r = ok(e, t),
    i = [...eV],
    o = r[0];
  if (!on(o)) return bS;
  if ((o > 1 && (r.unshift(0, o - 1), i.unshift("initial", "initial")), n)) {
    let s = r.length - 1,
      a = r[s];
    if (!on(a)) return bS;
    r.push(a + 1), i.push("exit");
  }
  return { inputRange: r, outputRange: i };
}
function Ip(e) {
  return {
    x: e?.x ?? He.x,
    y: e?.y ?? He.y,
    scale: e?.scale ?? He.scale,
    opacity: e?.opacity ?? He.opacity,
    transformPerspective: e?.transformPerspective ?? He.transformPerspective,
    rotate: e?.rotate ?? He.rotate,
    rotateX: e?.rotateX ?? He.rotateX,
    rotateY: e?.rotateY ?? He.rotateY,
    skewX: e?.skewX ?? He.skewX,
    skewY: e?.skewY ?? He.skewY,
    transition: e?.transition ?? void 0,
  };
}
function nV({
  opacity: e,
  targetOpacity: t,
  perspective: n,
  enter: r,
  exit: i,
  animate: o,
  ...s
}) {
  return b.useMemo(
    () => ({
      initial: r ?? Ip({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: o ?? Ip({ opacity: t }),
      exit: i ?? Ip(),
    }),
    [o, s, r, i, e, t, n]
  );
}
function rV(e, t) {
  let n = pi(),
    r = nV(e),
    i = e.styleAppearEffectEnabled,
    o = ik(i ? r.initial : r.animate, i),
    s = b.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    a = b.useRef(),
    l = b.useCallback(async ({ transition: d, ...p }, y) => {
      let g = d ?? r.animate.transition ?? e.transition;
      await a.current,
        (a.current = Promise.all(
          Gn.map((S) => {
            y && o.values[S].set(r.initial[S] ?? He[S]);
            let m = p[S] ?? He[S],
              h = nr.get(t.current);
            return (
              h && typeof m != "object" && h.setBaseTarget(S, m),
              new Promise((v) => {
                if (n && S !== "opacity") on(m) && o.values[S].set(m), v();
                else {
                  let x = {
                    restDelta: S === "scale" ? 0.001 : void 0,
                    ...g,
                    onComplete: () => v(),
                  };
                  io(o.values[S], m, x);
                }
              })
            );
          })
        ));
    }, []),
    c = e.animateOnce && s.current.lastAppearState === !0,
    u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
  BD(
    t,
    (d) => {
      let { isPlaying: p, lastAppearState: y } = s.current;
      if (p) {
        s.current.scheduledAppearState = d;
        return;
      }
      (s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = d),
        y !== d && l(d ? r.animate : r.exit, d);
    },
    { enabled: u, animateOnce: !!e.animateOnce, threshold: { y: e.threshold } }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    b.useEffect(() => {
      if (!f) return;
      let d = { initial: !0 },
        p = "initial";
      return ro(({ y }) => {
        let { targets: g } = e;
        if (!g || !g[0] || (g[0].ref && !g[0].ref.current)) return;
        let { inputRange: S, outputRange: m } = tV(
          g,
          (e.threshold ?? 0) * y.containerLength,
          !!e.exit
        );
        if (S.length === 0 || S.length !== m.length) return;
        let h = Ss(y.current, S, m);
        if ((e.animateOnce && d[h]) || ((d[h] = !0), p === h)) return;
        p = h;
        let v = Ee(r)[h];
        v && l(v);
      });
    }, [f]),
    ZA(e.scrollDirection, (d) => l(d ?? r.animate), {
      enabled: i,
      repeat: !e.animateOnce,
    }),
    o
  );
}
var iV = new Set([
    "transformViewportThreshold",
    "styleTransformEffectEnabled",
    "transformTargets",
    "spring",
    "transformTrigger",
  ]),
  oV = (e, t) => {
    var n;
    let r = (n = e?.[0]) == null ? void 0 : n.target;
    return t ? { opacity: r?.opacity ?? 1 } : r;
  },
  sk = () => ({
    opacity: [],
    x: [],
    y: [],
    scale: [],
    rotate: [],
    rotateX: [],
    rotateY: [],
    skewX: [],
    skewY: [],
    transformPerspective: [],
  });
function sV(e, t) {
  let n = b.useRef({});
  b.useEffect(() => {
    if (t !== void 0)
      for (let r of Ai(e)) {
        let i = e[r];
        i.attach((o, s) => {
          let a = n.current[r];
          if (
            (a && a.stop(),
            (n.current[r] = Of({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: s,
            })),
            !Oe.isProcessing)
          ) {
            let l = performance.now() - Oe.timestamp;
            l < 40 && (n.current[r].time = l / 1e3);
          }
          return i.get();
        });
      }
  }, [JSON.stringify(t)]);
}
function aV(e, t) {
  let n = sk();
  return {
    inputRange: ok(e, t, (i) => {
      var o, s, a;
      let l = (o = e[i - 1]) == null ? void 0 : o.target,
        c = (s = e[i]) == null ? void 0 : s.target;
      for (let u of Gn)
        (a = n[u]) == null || a.unshift(l?.[u] ?? 0, c?.[u] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function lV(e) {
  var t;
  let n = sk();
  for (let { target: r } of e)
    for (let i of Gn) (t = n[i]) == null || t.push(r[i]);
  return n;
}
var xS = [0, 1];
function cV(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  o
) {
  let s = pi(),
    a = ik(oV(n, s), t);
  return (
    b.useLayoutEffect(() => {
      if (!(!t || !n))
        if (e !== "onScrollTarget") {
          let l = lV(n);
          return ro(
            ({ y: c }) => {
              for (let u of Gn)
                (s && u !== "opacity") ||
                  (xS.length === l[u].length &&
                    l[u][0] !== void 0 &&
                    a.values[u].set(Ss(c.progress, xS, l[u])));
            },
            e === "onInView"
              ? {
                  target: o.current ?? void 0,
                  offset: ["start end", "end end"],
                }
              : void 0
          );
        } else
          return ro(({ y: l }) => {
            if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
            let { inputRange: c, effectKeyOutputRange: u } = aV(
              n,
              i * l.containerLength
            );
            if (c.length !== 0)
              for (let f of Gn)
                (s && f !== "opacity") ||
                  (c.length === u[f].length &&
                    u[f][0] !== void 0 &&
                    a.values[f].set(Ss(l.current, c, u[f])));
          });
    }, [s, e, o, i, t, a, n]),
    sV(a.values, r),
    a
  );
}
var ak = {
    parallax: jA,
    styleAppear: JA,
    styleTransform: iV,
    loop: $A,
    presence: XA,
  },
  uV = Ai(ak);
function SS(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function fV(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
  };
  for (let n in e) {
    let r = BA(n);
    if (r)
      for (let i of uV) {
        let o = ak[i];
        if (o?.has(r)) {
          t[i][r] = Ee(e)[n];
          break;
        }
      }
    else t.forwardedProps[n] = Ee(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = SS(
      "parallaxTransformEnabled",
      "speed",
      t.parallax
    )),
    (t.styleAppear.styleAppearEffectEnabled = SS(
      "styleAppearEffectEnabled",
      "animateOnce",
      t.styleAppear
    )),
    t
  );
}
var Kr = (e) => e.reduce((t, n) => (t += n), 0),
  wS = (e) => e.reduce((t, n) => (t = t * n), 1),
  dV = "current";
function hV(e) {
  return Ve(e) && dV in e;
}
function pV(e, t) {
  if (!e || !Ve(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Ce(r) || !rk(n) || (on(r.get()) && t[n].push(r));
  }
}
function pa(e) {
  return me(e) || Array.isArray(e);
}
var PN = (e) =>
  b.forwardRef((t, n) => {
    if (t.__withFX)
      return C(e, {
        ...t,
        animate: void 0,
        initial: void 0,
        exit: void 0,
        ref: n,
      });
    if (K.current() === K.canvas) {
      let de = pa(t.animate) ? t.animate : void 0,
        ee = pa(t.initial) ? t.initial : void 0;
      return C(e, { ...t, animate: de, initial: ee, exit: void 0, ref: n });
    }
    let r = b.useRef(null),
      i = n ?? r,
      {
        parallax: o = {},
        styleAppear: s = {},
        styleTransform: a = {},
        presence: l = {},
        loop: c = {},
        forwardedProps: u,
      } = fV(t),
      {
        __targetOpacity: f,
        __perspectiveFX: d,
        __smartComponentFX: p = !1,
      } = t,
      y = $n(f ?? 1),
      { values: g } = YA(l, i, p, t.style, t[ol]),
      { values: S, style: m } = WA(o, i),
      { values: h } = cV(a, i),
      { values: v } = rV(s, i),
      { values: x } = NA(c),
      k = b.useMemo(
        () => ({
          scale: [v.scale, x.scale, g.scale, h.scale],
          opacity: [v.opacity, x.opacity, g.opacity, y, h.opacity],
          x: [v.x, x.x, g.x, h.x],
          y: [v.y, x.y, S.y, g.y, h.y],
          rotate: [v.rotate, x.rotate, g.rotate, h.rotate],
          rotateX: [v.rotateX, x.rotateX, g.rotateX, h.rotateX],
          rotateY: [v.rotateY, x.rotateY, g.rotateY, h.rotateY],
          skewX: [v.skewX, x.skewX, g.skewX, h.skewX],
          skewY: [v.skewY, x.skewY, g.skewY, h.skewY],
          transformPerspective: [
            h.transformPerspective,
            v.transformPerspective,
          ],
        }),
        [y, h, S, v, x, g]
      );
    pV(t.style, k);
    let w = kt(k.scale, wS),
      T = kt(k.opacity, wS),
      E = kt(k.x, Kr),
      F = kt(k.y, Kr),
      I = kt(k.rotate, Kr),
      D = kt(k.rotateX, Kr),
      $ = kt(k.rotateY, Kr),
      J = kt(k.skewX, Kr),
      Z = kt(k.skewY, Kr),
      B = kt(k.transformPerspective, Kr),
      { drag: j, dragConstraints: te } = u;
    KO(j && hV(te) ? te : void 0);
    let ne = {
      opacity: T,
      scale: w,
      x: E,
      y: F,
      rotate: I,
      rotateX: D,
      rotateY: $,
      skewX: J,
      skewY: Z,
    };
    Nt(d) && (ne.transformPerspective = B);
    let U = pa(t.animate) ? t.animate : void 0,
      re = pa(t.initial) ? t.initial : void 0,
      ie = pa(t.exit) ? t.exit : void 0,
      be = p && !l.presenceInitial ? { initial: re, animate: U, exit: ie } : {};
    return C(e, {
      ...u,
      ...be,
      __withFX: !0,
      style: { ...t.style, ...m, ...ne },
      values: g,
      ref: i,
    });
  });
function Hp(e, t) {
  Uo(e) ? e(t) : lk(e) && (e.current = t);
}
function lk(e) {
  return Ve(e) && "current" in e;
}
function kS(e, t) {
  return {
    get current() {
      return e.current;
    },
    set current(n) {
      (e.current = n), t(n);
    },
  };
}
function mV(...e) {
  return (t) => e.forEach((n) => Hp(n, t));
}
function cm(e) {
  let t = rn(() => vV(e));
  return t.useSetup(e), t.cloneAsElement;
}
function vV(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = CS(t);
  let n = (s, a) => {
      if (!t.forwardedRef && t.forwardedRef === s) {
        t.ref = a;
        return;
      }
      let l = !1;
      t.childRef !== a && ((t.childRef = a), (l = !0)),
        t.forwardedRef !== s && ((t.forwardedRef = s), (l = !0)),
        l && (t.ref = CS(t));
    },
    r = !1;
  function i(s, a) {
    if (r)
      throw new ReferenceError(
        "useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle."
      );
    return (
      (r = !0),
      Fn.count(s) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      Fn.map(s, (l) => {
        if (Ut(l)) {
          let c = "ref" in l ? l.ref : void 0;
          n(t.forwardedRef, c);
          let u = t.ref !== c ? { ...a, ref: t.ref } : a;
          return bn(l, u);
        }
        return l;
      })
    );
  }
  let o = function (a, l) {
    return C(Re, { children: i(a, l) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (s) => {
        (r = !1), n(s, t.childRef);
      },
      cloneAsElement: o,
    }
  );
}
function CS(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (r) => {
    Hp(n, r), Hp(t, r);
  };
}
var ck = b.createContext({});
function ON() {
  return b.useContext(ck);
}
var DN = b.forwardRef(({ width: e, children: t, ...n }, r) => {
    let i = b.useMemo(() => ({ width: e }), [e]),
      o = cm(r);
    return C(ck.Provider, { value: i, children: o(t, n) });
  }),
  gV = (e) =>
    b.forwardRef((t, n) => {
      let r = Jo(t);
      return C(e, {
        layoutId: r,
        ...t,
        layoutIdKey: void 0,
        duplicatedFrom: void 0,
        ref: n,
      });
    }),
  yV = class extends ve {
    constructor() {
      super(...arguments), R(this, "state", { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return (
        console.error(
          "Error in component (see previous error log). This component has been hidden."
        ),
        { hasError: !0 }
      );
    }
    render() {
      let { children: e } = this.props,
        { hasError: t } = this.state;
      return t ? null : e;
    }
  },
  bV = b.forwardRef(({ children: e, layoutId: t, ...n }, r) => {
    let i = rn(() => (t ? `${t}-container` : void 0));
    return C(Mt.div, {
      layoutId: i,
      ...n,
      ref: r,
      children: C(Vi.Provider, {
        value: !0,
        children: C(jL, {
          enabled: !1,
          children: C(jy, {
            id: t ?? "",
            inherit: "id",
            children: C(yV, {
              children: b.Children.map(e, (o) =>
                b.isValidElement(o) ? b.cloneElement(o, { layoutId: t }) : o
              ),
            }),
          }),
        }),
      }),
    });
  }),
  NN = gV(bV),
  xV = b.createContext(void 0),
  SV = (() => {
    var e;
    if (!Jr()) return new Set();
    let t =
      (e = document.querySelector("style[data-framer-css-ssr-minified]")) ==
      null
        ? void 0
        : e.getAttribute("data-framer-components");
    return t ? new Set(t.split(" ")) : new Set();
  })(),
  uk = "data-framer-css-ssr",
  wV = (e, t, n) =>
    b.forwardRef((r, i) => {
      let { sheet: o, cache: s } = b.useContext(xV) ?? {};
      if (!Jr()) {
        let a = Array.isArray(t)
          ? t.join(`
`)
          : t;
        return oe(Re, {
          children: [
            C("style", {
              [uk]: !0,
              "data-framer-component": n,
              dangerouslySetInnerHTML: { __html: a },
            }),
            C(e, { ...r, ref: i }),
          ],
        });
      }
      return (
        b.useInsertionEffect(() => {
          if (n && SV.has(n)) return;
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).forEach((l) => l && Tw(l, o, s));
        }, []),
        C(e, { ...r, ref: i })
      );
    }),
  um = b.createContext({
    onRegisterCursors: () => () => {},
    registerCursors: () => {},
  }),
  au = "framer-cursor-none",
  jp = "framer-pointer-events-none",
  kV = b.memo(function ({ children: t }) {
    let n = rn(() => {
        let i = new Set(),
          o = {};
        return {
          onRegisterCursors: (s) => (s(o), i.add(s), () => i.delete(s)),
          registerCursors: (s) => {
            let a = {};
            for (let l in s) {
              let c = o[l] ?? s[l];
              c && (a[l] = c);
            }
            o = a;
            for (let l of i) l(o);
          },
        };
      }),
      r = pi();
    return oe(um.Provider, { value: n, children: [t, !r && C(_V, {})] });
  }),
  CV = (() =>
    wV(kV, [
      `.${au}, .${au} * { cursor: none !important; }`,
      `.${jp}, .${jp} * { pointer-events: none !important; }`,
    ]))(),
  TV = (() => ({
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 12 + 1,
    pointerEvents: "none",
  }))();
function EV(e) {
  return !(!e || e.placement || e.alignment);
}
function Gc(e) {
  switch (e) {
    case "start":
      return "0%";
    case "center":
      return "-50%";
    case "end":
      return "-100%";
    default:
      Pt(e);
  }
}
function RV(e, t = "center") {
  switch (e) {
    case "top":
      return `${Gc(t)}, -100%`;
    case "right":
      return `0%, ${Gc(t)}`;
    case "bottom":
      return `${Gc(t)}, 0%`;
    case "left":
      return `-100%, ${Gc(t)}`;
    default:
      return "-50%, -50%";
  }
}
var TS = "data-framer-portal-id";
function ES(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let r = n.getAttribute("data-framer-cursor");
    if (r) return r;
    if (n.hasAttribute(TS)) {
      let i = n.getAttribute(TS);
      (n = n.parentElement), i && (n = document.getElementById(i) ?? n);
    } else n = n.parentElement;
  }
}
function PV(e) {
  for (let t in e) return !1;
  return !0;
}
var _V = b.memo(function () {
  let { onRegisterCursors: t } = A(um),
    n = $n(0),
    r = $n(0),
    i = $n(0),
    o = b.useRef(null),
    s = b.useRef({ cursors: {}, cursorHash: void 0 }),
    a = pu(),
    l = !PV(s.current.cursors);
  b.useEffect(() => {
    let w = 0,
      T = 0;
    function E() {
      n.set(w), r.set(T), io(i, 1, { type: "tween", duration: 0.2 });
    }
    function F($) {
      $.pointerType !== "touch" &&
        ((w = $.clientX), (T = $.clientY), G.update(E));
    }
    let I = () => {
      if (!l) return;
      let $ = ES(w, T);
      $ !== s.current.cursorHash &&
        ((s.current.cursorHash = $), G.update(() => a()));
    };
    G.read(I, !0);
    function D($) {
      if ($.target === o.current || !o.current) return;
      let J = new PointerEvent($.type, {
        bubbles: !0,
        cancelable: $.cancelable,
        pointerType: $.pointerType,
        pointerId: $.pointerId,
        composed: $.composed,
        isPrimary: $.isPrimary,
        buttons: $.buttons,
        button: $.button,
      });
      G.update(() => {
        var Z;
        (Z = o.current) == null || Z.dispatchEvent(J);
      });
    }
    return (
      zt.addEventListener("pointermove", F),
      document.addEventListener("pointerdown", D),
      document.addEventListener("pointerup", D),
      () => {
        zt.removeEventListener("pointermove", F),
          document.removeEventListener("pointerdown", D),
          document.removeEventListener("pointerup", D),
          wt(I);
      }
    );
  }, [i, n, r, l, a]),
    b.useEffect(() => {
      function w() {
        io(i, 0, { type: "tween", duration: 0.2 });
      }
      return (
        document.addEventListener("mouseleave", w),
        zt.addEventListener("blur", w),
        () => {
          document.removeEventListener("mouseleave", w),
            zt.removeEventListener("blur", w);
        }
      );
    }, [i]),
    b.useLayoutEffect(() => {
      function w(E) {
        (s.current.cursors = E),
          (s.current.cursorHash = ES(n.get(), r.get())),
          a();
      }
      let T = t(w);
      return () => {
        T(), document.body.classList.toggle(au, !1);
      };
    }, [n, r, t, a]);
  let { cursors: c, cursorHash: u } = s.current,
    f = u ? c[u] : null,
    d = EV(f);
  b.useLayoutEffect(() => {
    document.body.classList.toggle(au, d);
  }, [d]);
  let p = f?.component,
    y = f?.transition ?? { duration: 0 },
    g = nd(n, y),
    S = nd(r, y),
    m = kt(() => {
      var w;
      return g.get() + (((w = f?.offset) == null ? void 0 : w.x) ?? 0);
    }),
    h = kt(() => {
      var w;
      return S.get() + (((w = f?.offset) == null ? void 0 : w.y) ?? 0);
    }),
    v = f?.alignment,
    x = f?.placement,
    k = b.useCallback((w, T) => `translate(${RV(x, v)}) ${T}`, [v, x]);
  return !f || !p
    ? null
    : C(p, {
        transformTemplate: k,
        style: { ...TV, x: m, y: h, opacity: i },
        globalTapTarget: !0,
        variant: f?.variant,
        ref: o,
        className: jp,
      });
});
function YN(e) {
  let { registerCursors: t } = A(um),
    n = rn(() => e);
  b.useLayoutEffect(() => {
    t(n);
  }, [n, t]);
}
var IV = b.createContext(void 0),
  fm = class {
    constructor(e) {
      (this.resolver = e), R(this, "status");
    }
    static is(e) {
      return e instanceof fm;
    }
    preload() {
      if (this.status) {
        let t = this.status;
        return t.type !== "pending" ? void 0 : t.promise;
      }
      let e = this.resolver().then(
        (t) => {
          this.status = { type: "fulfilled", value: t };
        },
        (t) => {
          this.status = { type: "rejected", error: t };
        }
      );
      return (this.status = { type: "pending", promise: e }), e;
    }
    read() {
      let e = this.status;
      if (!e) throw new Error("Need to call preload() before read()");
      switch (e.type) {
        case "pending":
          throw new Error("Need to wait for preload() to resolve");
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.error;
        default:
          Pt(e);
      }
    }
  };
function yu(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
    ? e === t
      ? null
      : yu(e.parentElement, t)
    : null;
}
var RS = "element",
  FV = "collection",
  LV = "collectionItemId",
  MV = "pathVariables",
  fk = "framer/page-link,";
function dk(e) {
  return me(e) && e.startsWith(`data:${fk}`);
}
function dm(e) {
  if (dk(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(fk.length),
        r = t.searchParams,
        i = r.has(RS) ? r.get(RS) : void 0,
        o,
        s = r.get(FV),
        a = r.get(LV),
        l = r.get(MV);
      if (s && a && l) {
        let c = Object.fromEntries(new URLSearchParams(l).entries());
        o = { collection: s, collectionItemId: a, pathVariables: c };
      }
      return {
        target: n === "none" ? null : n,
        element: i === "none" ? void 0 : i,
        collectionItem: o,
      };
    } catch {
      return;
    }
}
function hk(e, t, n) {
  var r;
  let i = t.getAttribute("data-framer-page-link-target"),
    o,
    s;
  if (i) {
    o = t.getAttribute("data-framer-page-link-element") ?? void 0;
    let l = t.getAttribute("data-framer-page-link-path-variables");
    l && (s = Object.fromEntries(new URLSearchParams(l).entries()));
  } else {
    let l = t.getAttribute("href");
    if (!l) return !1;
    let c = dm(l);
    if (!c || !c.target) return !1;
    (i = c.target),
      (o = c.element ?? void 0),
      (s = (r = c.collectionItem) == null ? void 0 : r.pathVariables);
  }
  let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return e(i, o, Object.assign({}, n, s), a), !0;
}
var OV = 500,
  DV = 0.9,
  AV = 1.7,
  VV = 4,
  BV = 1 / 0,
  Do = new WeakMap(),
  Kc = new Set(),
  Ao = new Map();
function $V() {
  var e;
  let t = Le.connection || Le.mozConnection || Le.webkitConnection || {},
    n = Le.deviceMemory && Le.deviceMemory > AV,
    r,
    i,
    o;
  function s() {
    (r = t.effectiveType || ""),
      (i = t.saveData || r.includes("2g")),
      (o = r === "3g" || n ? VV : BV);
  }
  (e = t.addEventListener) == null || e.call(t, "change", s), s();
  let a = new IntersectionObserver(u, { threshold: DV }),
    l = 0;
  async function c(f, d) {
    if (i) return;
    let p = Ao.get(f);
    if (!p?.size || Kc.has(f)) return;
    ++l, Kc.add(f);
    let y = pw(f).catch(() => {});
    a.unobserve(d), Do.delete(d);
    for (let g of p) a.unobserve(g), Do.delete(g);
    p.clear(), Ao.delete(f), await y, --l;
  }
  function u(f) {
    var d;
    for (let p of f) {
      let y = p.target,
        g = Do.get(y);
      if (!g || Kc.has(g)) {
        a.unobserve(y), Do.delete(y);
        continue;
      }
      let S = Ao.get(g),
        m = ((d = Ao.get(g)) == null ? void 0 : d.size) ?? 0;
      if (p.isIntersecting) {
        if (l >= o) continue;
        S ? S.add(y) : Ao.set(g, new Set([y])),
          setTimeout(c.bind(void 0, g, y), OV);
      } else S && S.delete(y), m <= 1 && Ao.delete(g);
    }
  }
  return (f, d) => {
    if (!Kc.has(f))
      return (
        Do.set(d, f),
        a.observe(d),
        () => {
          Do.delete(d), a.unobserve(d);
        }
      );
  };
}
var zV = !Zp || typeof IntersectionObserver > "u" ? null : $V(),
  Fp = {},
  qc = new WeakMap();
function NV(e, t, n) {
  var r, i;
  let o =
    (i = (r = qc?.get(n ?? Fp)) == null ? void 0 : r.get(e.collectionId)) ==
    null
      ? void 0
      : i.get(e.collectionItemId);
  if (o) return o;
  let s = qc.get(n ?? Fp) ?? new Map();
  qc.set(n ?? Fp, s);
  let a = s.get(e.collectionId) ?? new Map();
  s.set(e.collectionId, a);
  let l = new fm(async () => {
    try {
      let c = t[e.collectionId];
      if (!c)
        throw new Error(
          `Key not found in collection utils for collection id: "${e.collectionId}`
        );
      let u = await c();
      if (!u) throw new Error("Collection does not contain utility functions");
      return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    } catch (c) {
      console.warn(
        `Failed to resolve slug: ${
          c instanceof Error ? c.message : "Unknown error"
        }`
      );
      return;
    }
  });
  return a.set(e.collectionItemId, l), l;
}
var HV = "webPageId";
function Wp(e) {
  return !!(e && typeof e == "object" && HV in e);
}
function jV(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function lu(e) {
  if (!dk(e)) return e;
  let t = dm(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: jV(i) };
}
var pk = /:([a-z]\w*)/gi,
  mk = xe(void 0);
function hm() {
  var e;
  let t = A(mk),
    n = (e = qo()) == null ? void 0 : e.pathVariables;
  return t || n;
}
function pm(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let o = Object.assign({}, i, r);
    for (let [, s] of e.path.matchAll(pk))
      if (!s || e.pathVariables[s] !== o[s]) return !1;
  }
  return !0;
}
function WV(e) {
  let t = qo(),
    n = A(mk);
  if (!t) return !1;
  let r = me(e) ? lu(e) : e;
  return Wp(r) ? pm(t, r, n) : !1;
}
function mm(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."));
}
function UV(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function vm(e, t) {
  return e !== void 0 ? (e ? "_blank" : void 0) : t ? void 0 : "_blank";
}
function PS(e, t = void 0) {
  let n = mm(e),
    r = vm(t, n);
  return {
    href: UV(e, n) ? e : `https://${e}`,
    target: r,
    rel: n ? void 0 : "noopener",
  };
}
function vk(e, t, n, r, i) {
  return async (o) => {
    var s, a;
    if (o.metaKey) return;
    let l = yu(o.target);
    if (!l || l.getAttribute("target") === "_blank") return;
    o.preventDefault();
    let c = (s = e.getRoute) == null ? void 0 : s.call(e, t);
    c && ew(c?.page) && (await c.page.preload()),
      (a = e.navigate) == null || a.call(e, t, n, r, i);
  };
}
function XV(e, t, n, r) {
  let i = [];
  function o(a) {
    if (!a || !n) return;
    let l = {};
    for (let c in a) {
      let u = a[c];
      he(u, "unresolvedSlug should be defined");
      let f = NV(u, n, r),
        d = f.preload();
      if (d) i.push(d);
      else {
        let p = f.read();
        p && (l[c] = p);
      }
    }
    return l;
  }
  let s = { path: o(e), hash: o(t) };
  if (i.length) throw Promise.allSettled(i);
  return s;
}
function YV(e, t, n, r, i, o) {
  let s = mm(e);
  if (!n.routes || !n.getRoute || !r || !s) return PS(e, t);
  try {
    let [a, l] = e.split("#", 2);
    he(a !== void 0, "A href must have a defined pathname.");
    let [c] = a.split("?", 2);
    he(c !== void 0, "A href must have a defined pathname.");
    let { routeId: u, pathVariables: f } = dw(n.routes, c),
      d = n.getRoute(u);
    if (d) {
      let p = Object.assign({}, i, f),
        y = qp(d, {
          currentRoutePath: r.path,
          currentPathVariables: r.pathVariables,
          hash: l || void 0,
          pathVariables: p,
          preserveQueryParams: n.preserveQueryParams,
        }),
        g = vm(t, !0);
      return { href: y, target: g, onClick: vk(n, u, l || void 0, p, o) };
    }
  } catch {}
  return PS(e, t);
}
function GV(e, t, n) {
  var r;
  if (me(e)) {
    let o = mm(e);
    if (!t.routes || !t.getRoute || !n || !o) return;
    let [s] = e.split("#", 2);
    if (s === void 0) return;
    let [a] = s.split("?", 2);
    if (a === void 0) return;
    let { routeId: l } = dw(t.routes, a);
    return t.getRoute(l);
  }
  let { webPageId: i } = e;
  return (r = t.getRoute) == null ? void 0 : r.call(t, i);
}
var JN = We(
  ({ children: e, href: t, openInNewTab: n, smoothScroll: r, ...i }, o) => {
    let s = Ko(),
      a = qo(),
      l = hm(),
      { activeLocale: c } = uL(),
      u = V(null),
      f = se(() => {
        let y,
          g = (m) => {
            var h;
            if (m === null) {
              y?.(), (y = void 0);
              return;
            }
            let v = Wp(t) ? t : lu(t);
            if (!v) return;
            let x = GV(v, s, a);
            x && (y = (h = zV) == null ? void 0 : h(x, m));
          },
          S = Ut(e) && "ref" in e;
        return S && lk(e.ref)
          ? kS(e.ref, g)
          : S && Uo(e.ref)
          ? mV(e.ref, g)
          : kS(u, g);
      }, [t, s, a, e]),
      d = cm(o),
      p = se(() => {
        var y;
        if (!t) return {};
        let g = Wp(t) ? t : lu(t);
        if (!g) return {};
        if (me(g)) return YV(g, n, s, a, l, r);
        let {
            webPageId: S,
            hash: m,
            pathVariables: h,
            hashVariables: v,
            unresolvedHashSlugs: x,
            unresolvedPathSlugs: k,
          } = g,
          w = XV(k, x, s.collectionUtils, c),
          T = { ...l, ...h, ...w?.path },
          E = { ...l, ...v, ...w?.hash },
          F = vm(n, !0),
          I = (y = s.getRoute) == null ? void 0 : y.call(s, S),
          D = qp(I, {
            currentRoutePath: a?.path,
            currentPathVariables: a?.pathVariables,
            hash: m,
            pathVariables: T,
            hashVariables: E,
            preserveQueryParams: s.preserveQueryParams,
          }),
          $ = D.split("#", 2)[1];
        return {
          href: D,
          target: F,
          onClick: vk(s, S, $, T, r),
          "data-framer-page-link-current": (a && pm(a, g, l)) || void 0,
        };
      }, [t, s, c, l, n, a, r]);
    return d(e, { ...i, ...p, ref: f });
  }
);
var KV = b.createContext(void 0);
function i8({
  RootComponent: e,
  isWebsite: t,
  routeId: n,
  framerSiteId: r,
  pathVariables: i,
  routes: o,
  collectionUtils: s,
  notFoundPage: a,
  isReducedMotion: l = !1,
  includeDataObserver: c = !1,
  localeId: u,
  locales: f,
  preserveQueryParams: d,
}) {
  if (
    (b.useEffect(() => {
      t || yw.start();
    }, []),
    t)
  )
    return C(zy, {
      reducedMotion: l ? "user" : "never",
      children: C(CV, {
        children: C(KV.Provider, {
          value: r,
          children: C(hL, {
            initialRoute: n,
            initialPathVariables: i,
            initialLocaleId: u,
            routes: o,
            collectionUtils: s,
            notFoundPage: a,
            locales: f,
            defaultPageStyle: { minHeight: "100vh", width: "auto" },
            preserveQueryParams: d,
          }),
        }),
      }),
    });
  {
    let p = c ? AA : b.Fragment;
    return C(p, {
      children: C(nL, {
        routes: o,
        children: C(LA, {
          children: b.isValidElement(e) ? e : b.createElement(e, { key: n }),
        }),
      }),
    });
  }
}
function qV(e, t, n) {
  let r = Fn.map(e, (i) => (Ut(i) ? bn(i, t) : i));
  return n ? r : C(Re, { children: r });
}
var gk = b.createContext(void 0),
  _S = "ssr-variant";
function IS(e, t, n, r, i, o, s, a) {
  let l = b.Children.toArray(t),
    c = l[0];
  if (l.length !== 1 || !b.isValidElement(c))
    return (
      console.warn(
        "PropertyOverrides: expected exactly one React element for a child",
        t
      ),
      s(t, n)
    );
  let u = [],
    f = [];
  for (let [S] of Object.entries(r)) {
    if (S === i) continue;
    let m = e[S];
    if (!m || !ZV(c.props, m)) {
      f.push(S);
      continue;
    }
    let h = FS([S], o);
    h.length && u.push({ variants: h, propOverrides: m });
  }
  if (u.length === 0) return s(c, n);
  let d = [i, ...f],
    p = FS(d, o);
  p.length && u.unshift({ variants: p });
  let y = `.${_S} { display: contents }`,
    g = [];
  for (let { variants: S, propOverrides: m } of u) {
    if (a && !S.includes(a)) continue;
    let h = S.join("+"),
      v = C(
        gk.Provider,
        { value: new Set(S), children: s(c, m ? { ...n, ...m } : n) },
        h
      ),
      x = QV(S, o, r);
    x.length
      ? (he(u.length > 1, "Must branch out when there are hiddenClassNames"),
        (v = C("div", { className: `${_S} ${x.join(" ")}`, children: v }, h)))
      : he(u.length === 1, "Cannot branch out when hiddenClassNames is empty"),
      g.push(v);
  }
  return (
    he(
      !a || g.length === 1,
      "Must render exactly one branch when activeVariantId is given"
    ),
    oe(Re, {
      children: [!o && !Jr() && C("style", { [uk]: !0, children: y }), g],
    })
  );
}
function QV(e, t, n) {
  let r = [];
  for (let [i, o] of Object.entries(n)) {
    let s = t && !t.has(i);
    if (e.includes(i) || s) continue;
    let a = o.split("-")[2];
    r.push(`hidden-${a}`);
  }
  return r;
}
function FS(e, t) {
  return t ? e.filter((n) => t.has(n)) : e;
}
function ZV(e, t) {
  for (let n of Object.keys(t)) if (!je(e[n], t[n], !0)) return !0;
  return !1;
}
function JV(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
var e3 = () => () => {},
  t3 = () => !0,
  n3 = () => !1,
  l8 = b.forwardRef(function (
    { breakpoint: t, overrides: n, children: r, ...i },
    o
  ) {
    let s = cm(o),
      a = b.useContext(gk),
      l = b.useSyncExternalStore(e3, n3, t3),
      c = rn(() => (l ? (Jr() ? 1 : 2) : 0)),
      u = b.useContext(IV);
    if (!u)
      return (
        console.warn("PropertyOverrides is missing GeneratedComponentContext"),
        s(r, i)
      );
    let { primaryVariantId: f, variantClassNames: d } = u;
    switch (c) {
      case 0:
        return s(r, JV(t, i, n));
      case 1:
        return IS(n, r, i, d, f, a, s, t);
      case 2:
        return IS(n, r, i, d, f, a, qV, void 0);
      default:
        Pt(c);
    }
  });
var r3 = Bn(uF(), 1);
function i3(e) {
  return {
    trace(...t) {
      var n;
      return (n = et.getLogger(e)) == null ? void 0 : n.trace(...t);
    },
    debug(...t) {
      var n;
      return (n = et.getLogger(e)) == null ? void 0 : n.debug(...t);
    },
    info(...t) {
      var n;
      return (n = et.getLogger(e)) == null ? void 0 : n.info(...t);
    },
    warn(...t) {
      var n;
      return (n = et.getLogger(e)) == null ? void 0 : n.warn(...t);
    },
    error(...t) {
      var n;
      return (n = et.getLogger(e)) == null ? void 0 : n.error(...t);
    },
  };
}
function o3(e) {
  return tm(e) && e.every(Ve);
}
function yk(e) {
  return Ve(e) && Uo(e.read) && Uo(e.preload);
}
function s3(e) {
  return o3(e) || yk(e);
}
function a3(e) {
  return Ve(e) && Ve(e.schema);
}
function gm(e) {
  return Ve(e) && Ve(e.collectionByLocaleId);
}
async function LS(e, t) {
  return yk(e) ? (await e.preload(t), e.read(t)) : e;
}
var l3 = class {
    constructor(e, t) {
      (this.collection = e),
        (this.locale = t),
        R(this, "schema"),
        R(this, "indexes", []);
      let n = Iw(e);
      he(n, "Collection does not have properties");
      let r = { id: { type: "string", isNullable: !1 } },
        i = Object.entries(n);
      for (let [o, s] of i) s && (r[o] = { type: s.type, isNullable: !0 });
      this.schema = r;
    }
    getDatabaseItem(e, t) {
      let n = {};
      for (let r in this.schema) {
        let i = e[r];
        if (Xo(i)) continue;
        let o = this.schema[r];
        Nt(o) || (n[r] = { type: o.type, value: i });
      }
      return { pointer: t, data: n };
    }
    async resolveRichText(e) {
      if (fm.is(e)) {
        let t = e.preload();
        return t && (await t), e.read();
      }
      return e;
    }
    async scanItems() {
      return (await LS(this.collection, this.locale)).map((t, n) => {
        let r = String(n);
        return this.getDatabaseItem(t, r);
      });
    }
    async resolveItems(e) {
      let t = await LS(this.collection, this.locale);
      return e.map((n) => {
        let r = Number(n),
          i = t[r];
        return he(i, "Can't find collection item"), this.getDatabaseItem(i, n);
      });
    }
    compareItems(e, t) {
      return Number(e.pointer) - Number(t.pointer);
    }
  },
  gn = {
    equal(e, t, n) {
      return e?.type !== t?.type ? !1 : ma(e, t, n) === 0;
    },
    lessThan(e, t, n) {
      return e?.type !== t?.type ? !1 : ma(e, t, n) < 0;
    },
    lessThanOrEqual(e, t, n) {
      return e?.type !== t?.type ? !1 : ma(e, t, n) <= 0;
    },
    greaterThan(e, t, n) {
      return e?.type !== t?.type ? !1 : ma(e, t, n) > 0;
    },
    greaterThanOrEqual(e, t, n) {
      return e?.type !== t?.type ? !1 : ma(e, t, n) >= 0;
    },
    stringify(e) {
      if (e === null) return "null";
      switch (e.type) {
        case "boolean":
        case "number":
          return String(e.value);
        case "string":
          return `'${e.value}'`;
        case "enum":
          return `'${e.value}' /* Enum */`;
        case "color":
          return `'${e.value}' /* Color */`;
        case "date":
          return `'${e.value}' /* Date */`;
        case "richtext":
          return "RichText";
        case "responsiveimage":
          return "ResponsiveImage";
        case "file":
          return "File";
        case "link":
          return me(e.value) ? `'${e.value}' /* Link */` : "Link";
        default:
          Pt(e);
      }
    },
  };
function ma(e, t, n) {
  if (Ne(e) || Ne(t)) return he(e === t), 0;
  switch (e.type) {
    case "boolean":
      return (
        he(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "color":
      return (
        he(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "date": {
      he(e.type === t.type);
      let r = new Date(e.value),
        i = new Date(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "enum":
      return (
        he(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "file":
      return (
        he(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "responsiveimage": {
      he(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "link": {
      he(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "number":
      return (
        he(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "richtext": {
      he(e.type === t.type);
      let r = e.value,
        i = t.value;
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "string": {
      he(e.type === t.type);
      let r = e.value,
        i = t.value;
      return (
        n.type === 0 &&
          ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
        r < i ? -1 : r > i ? 1 : 0
      );
    }
    default:
      Pt(e);
  }
}
var Up = "index",
  Rt = class {
    static from(e, t) {
      return Yn(e, t, void 0);
    }
  },
  lt = class extends Rt {
    constructor(e, t) {
      super(),
        (this.schema = e),
        (this.name = t),
        R(this, "definition"),
        t === Up
          ? (this.definition = { type: "number", isNullable: !1 })
          : (this.definition = e[t] ?? null);
    }
    stringify() {
      return this.name;
    }
    equals(e) {
      return (
        e instanceof lt &&
        je(this.definition, e.definition) &&
        je(e.name, this.name)
      );
    }
    evaluate(e) {
      let t = this.name;
      if (Nt(e) || t === Up) throw new Error(`Can't evaluate identifier: ${t}`);
      return e.data[t] ?? null;
    }
    canEvaluate() {
      return !1;
    }
  },
  Fe = class extends Rt {
    constructor(e, t) {
      super(), (this.definition = e), (this.value = t);
    }
    stringify() {
      return gn.stringify(this.value);
    }
    static fromNull() {
      return new Fe(null, null);
    }
    static fromBoolean(e) {
      return new Fe(
        { type: "boolean", isNullable: Ne(e) },
        Ne(e) ? null : { type: "boolean", value: e }
      );
    }
    static fromDate(e) {
      return new Fe(
        { type: "date", isNullable: Ne(e) },
        Ne(e) ? null : { type: "date", value: e.toISOString() }
      );
    }
    static fromEnum(e) {
      return new Fe(
        { type: "enum", isNullable: Ne(e) },
        Ne(e) ? null : { type: "enum", value: e }
      );
    }
    static fromNumber(e) {
      return new Fe(
        { type: "number", isNullable: Ne(e) },
        Ne(e) ? null : { type: "number", value: e }
      );
    }
    static fromString(e) {
      return new Fe(
        { type: "string", isNullable: Ne(e) },
        Ne(e) ? null : { type: "string", value: e }
      );
    }
    equals(e) {
      return (
        e instanceof Fe &&
        je(this.definition, e.definition) &&
        je(e.value, this.value)
      );
    }
    evaluate() {
      return this.value;
    }
    canEvaluate() {
      return !0;
    }
  },
  Da = class extends Rt {
    constructor(e) {
      super(),
        (this.argumentExpressions = e),
        R(this, "collation", { type: 0 });
    }
    getArgumentExpression(e) {
      let t = this.argumentExpressions[e];
      if (Nt(t)) throw new Error("Missing argument in function call");
      return t;
    }
    equals(e) {
      return (
        e instanceof Da &&
        je(this.constructor, e.constructor) &&
        je(this.argumentExpressions, e.argumentExpressions)
      );
    }
    canEvaluate() {
      return this.argumentExpressions.every((e) => e.canEvaluate());
    }
  },
  bu = class extends Da {
    constructor() {
      super(...arguments),
        R(this, "definition", bu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `CONTAINS(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Ne(e) || e.type !== "string" || Ne(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.includes(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  xu = class extends Da {
    constructor() {
      super(...arguments),
        R(this, "definition", xu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `STARTS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Ne(e) || e.type !== "string" || Ne(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.startsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  Su = class extends Da {
    constructor() {
      super(...arguments),
        R(this, "definition", Su.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `ENDS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Ne(e) || e.type !== "string" || Ne(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.endsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  cu = class extends Rt {
    constructor(e, t, n) {
      super(),
        (this.valueExpression = e),
        (this.conditions = t),
        (this.elseExpression = n),
        R(this, "definition"),
        R(this, "collation", { type: 0 });
      let r = [];
      for (let { thenExpression: i } of t) r.push(i.definition);
      n && r.push(n.definition), (this.definition = cu.getDefinition(r));
    }
    static getDefinition(e) {
      let t = null,
        n = !1;
      for (let r of e) {
        if ((t ?? (t = r), t && r && t.type !== r.type))
          throw new Error("Incompatible types in CASE expression");
        n || (n = r?.isNullable ?? !0);
      }
      return t ? { type: t.type, isNullable: n } : null;
    }
    stringify() {
      let e = "CASE";
      this.valueExpression && (e += ` ${this.valueExpression.stringify()}`);
      for (let { whenExpression: t, thenExpression: n } of this.conditions)
        e += ` WHEN ${t.stringify()} THEN ${n.stringify()}`;
      return (
        this.elseExpression &&
          (e += ` ELSE ${this.elseExpression.stringify()}`),
        (e += " END"),
        e
      );
    }
    equals(e) {
      return (
        e instanceof cu &&
        je(this.valueExpression, e.valueExpression) &&
        je(this.conditions, e.conditions) &&
        je(this.elseExpression, e.elseExpression)
      );
    }
    evaluate(e) {
      var t, n;
      let r =
        ((t = this.valueExpression) == null ? void 0 : t.evaluate(e)) ?? null;
      for (let { whenExpression: i, thenExpression: o } of this.conditions) {
        let s = i.evaluate(e);
        if (this.valueExpression ? gn.equal(s, r, this.collation) : Bi(s))
          return o.evaluate(e);
      }
      return (
        ((n = this.elseExpression) == null ? void 0 : n.evaluate(e)) ?? null
      );
    }
    canEvaluate() {
      let e = [];
      this.valueExpression && e.push(this.valueExpression);
      for (let t of this.conditions)
        e.push(t.whenExpression), e.push(t.thenExpression);
      return (
        this.elseExpression && e.push(this.elseExpression),
        e.every((t) => t.canEvaluate())
      );
    }
  },
  c3 = class {
    constructor(e, t) {
      (this.whenExpression = e), (this.thenExpression = t);
    }
  },
  bk = class extends Rt {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    equals(e) {
      return (
        e instanceof bk &&
        je(this.constructor, e.constructor) &&
        je(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  Ca = class extends bk {
    constructor() {
      super(...arguments), R(this, "definition", Ca.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `NOT ${this.valueExpression.stringify()}`;
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: "boolean", value: !Bi(t) };
    }
  },
  Ta = class extends Rt {
    constructor(e) {
      super(),
        (this.operandExpressions = e),
        R(this, "definition", Ta.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return this.operandExpressions.map((e) => e.stringify()).join(" AND ");
    }
    equals(e) {
      return (
        e instanceof Ta &&
        je(this.constructor, e.constructor) &&
        je(this.operandExpressions, e.operandExpressions)
      );
    }
    canEvaluate() {
      return this.operandExpressions.every((e) => e.canEvaluate());
    }
  },
  Li = class extends Ta {
    constructor() {
      super(...arguments), R(this, "operator", "AND");
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.every((n) => {
          let r = n.evaluate(e);
          return Bi(r);
        }),
      };
    }
  },
  ya = class extends Ta {
    constructor() {
      super(...arguments), R(this, "operator", "OR");
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.some((n) => {
          let r = n.evaluate(e);
          return Bi(r);
        }),
      };
    }
  },
  Kn = class extends Rt {
    constructor(e, t) {
      super(),
        (this.leftExpression = e),
        (this.rightExpression = t),
        R(this, "definition", Kn.getDefinition()),
        R(this, "collation", { type: 0 });
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `${this.leftExpression.stringify()} ${
        this.operator
      } ${this.rightExpression.stringify()}`;
    }
    equals(e) {
      return (
        e instanceof Kn &&
        je(this.constructor, e.constructor) &&
        je(this.leftExpression, e.leftExpression) &&
        je(this.rightExpression, e.rightExpression)
      );
    }
    canEvaluate() {
      return (
        this.leftExpression.canEvaluate() && this.rightExpression.canEvaluate()
      );
    }
  },
  Yo = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", "=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: gn.equal(t, n, this.collation) };
    }
  },
  Go = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", "!=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: !gn.equal(t, n, this.collation) };
    }
  },
  Ea = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", "<");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: gn.lessThan(t, n, this.collation) };
    }
  },
  Ra = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", "<=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: gn.lessThanOrEqual(t, n, this.collation),
      };
    }
  },
  Pa = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", ">");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: gn.greaterThan(t, n, this.collation) };
    }
  },
  _a = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", ">=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: gn.greaterThanOrEqual(t, n, this.collation),
      };
    }
  },
  Aa = class extends Rt {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    stringify() {
      return `CAST(${this.valueExpression.stringify()} AS ${this.dataType})`;
    }
    equals(e) {
      return (
        e instanceof Aa &&
        je(this.constructor, e.constructor) &&
        je(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  wu = class extends Aa {
    constructor() {
      super(...arguments),
        R(this, "dataType", "BOOLEAN"),
        R(this, "definition", wu.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: "boolean", value: Bi(t) };
    }
  };
function Bi(e) {
  switch (e?.type) {
    case "boolean":
    case "number":
    case "string":
      return !!e.value;
  }
  return !1;
}
var ym = class extends Aa {
  constructor() {
    super(...arguments),
      R(this, "dataType", "DATE"),
      R(this, "definition", ym.getDefinition());
  }
  static getDefinition() {
    return { type: "date", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = xk(t);
    return Ne(n) ? null : { type: "date", value: n.toISOString() };
  }
};
function xk(e) {
  switch (e?.type) {
    case "date":
    case "number":
    case "string": {
      let t = new Date(e.value);
      return Pw(t) ? t : null;
    }
  }
  return null;
}
var bm = class extends Aa {
  constructor() {
    super(...arguments),
      R(this, "dataType", "NUMBER"),
      R(this, "definition", bm.getDefinition());
  }
  static getDefinition() {
    return { type: "number", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = Sk(t);
    return Ne(n) ? null : { type: "number", value: n };
  }
};
function Sk(e) {
  switch (e?.type) {
    case "number":
    case "string": {
      let t = Number(e.value);
      return Number.isFinite(t) ? t : null;
    }
  }
  return null;
}
var xm = class extends Aa {
  constructor() {
    super(...arguments),
      R(this, "dataType", "STRING"),
      R(this, "definition", xm.getDefinition());
  }
  static getDefinition() {
    return { type: "string", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = wk(t);
    return Ne(n) ? null : { type: "string", value: n };
  }
};
function wk(e) {
  switch (e?.type) {
    case "string":
    case "number":
      return String(e.value);
  }
  return null;
}
function Yn(e, t, n) {
  let r = u3(e, t, n),
    i = r instanceof Fe;
  if (r.canEvaluate() && !i) {
    let o = r.evaluate();
    return new Fe(r.definition, o);
  }
  return r;
}
function u3(e, t, n) {
  switch (e.type) {
    case "Identifier":
      return f3(e, t);
    case "LiteralValue":
      return d3(e, n);
    case "FunctionCall":
      return p3(e, t);
    case "Case":
      return m3(e, t, n);
    case "UnaryOperation":
      return v3(e, t);
    case "BinaryOperation":
      return g3(e, t);
    case "TypeCast":
      return E3(e, t);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function f3(e, t) {
  return new lt(t, e.name);
}
function d3(e, t) {
  var n;
  let r = h3(e.value);
  switch (t?.type) {
    case "boolean": {
      let i = Bi(r.value);
      return Fe.fromBoolean(i);
    }
    case "date": {
      let i = xk(r.value);
      return Fe.fromDate(i);
    }
    case "enum":
      return ((n = r.value) == null ? void 0 : n.type) === "string"
        ? Fe.fromEnum(r.value.value)
        : r;
    case "number": {
      let i = Sk(r.value);
      return Fe.fromNumber(i);
    }
    case "string": {
      let i = wk(r.value);
      return Fe.fromString(i);
    }
  }
  return r;
}
function h3(e) {
  return Rw(e)
    ? Fe.fromBoolean(e)
    : Pw(e)
    ? Fe.fromDate(e)
    : on(e)
    ? Fe.fromNumber(e)
    : me(e)
    ? Fe.fromString(e)
    : Fe.fromNull();
}
function p3(e, t) {
  let n = e.arguments.map((r) => Yn(r, t, void 0));
  switch (e.functionName) {
    case "CONTAINS":
      return new bu(n);
    case "STARTS_WITH":
      return new xu(n);
    case "ENDS_WITH":
      return new Su(n);
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function m3(e, t, n) {
  let r = e.value && Yn(e.value, t, void 0),
    i = e.value && Ia(e.value, t),
    o = e.conditions.map((a) => {
      let l = Yn(a.when, t, i),
        c = Yn(a.then, t, n);
      return new c3(l, c);
    }),
    s = e.else && Yn(e.else, t, n);
  return new cu(r, o, s);
}
function v3(e, t) {
  let n = Yn(e.value, t, void 0);
  switch (e.operator) {
    case "not":
      return Xp(n);
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function Xp(e) {
  var t;
  if (e instanceof Ca) {
    let n = e.valueExpression;
    return ((t = n.definition) == null ? void 0 : t.type) === "boolean"
      ? n
      : new wu(n);
  }
  if (e instanceof Yo) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Go(n, r);
  }
  if (e instanceof Go) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Yo(n, r);
  }
  if (e instanceof Ea) {
    let { leftExpression: n, rightExpression: r } = e;
    return new _a(n, r);
  }
  if (e instanceof Ra) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Pa(n, r);
  }
  if (e instanceof Pa) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Ra(n, r);
  }
  if (e instanceof _a) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Ea(n, r);
  }
  if (e instanceof Li) {
    let { operandExpressions: n } = e,
      r = n.map(Xp);
    return new ya(r);
  }
  if (e instanceof Li) {
    let { operandExpressions: n } = e,
      r = n.map(Xp);
    return new Li(r);
  }
  return new Ca(e);
}
function g3(e, t) {
  let n =
      e.operator !== "and" && e.operator !== "or"
        ? Ia(e.left, t) || Ia(e.right, t)
        : void 0,
    r = Yn(e.left, t, n),
    i = Yn(e.right, t, n);
  switch (e.operator) {
    case "and":
      return y3(r, i);
    case "or":
      return b3(r, i);
    case "==":
      return x3(r, i);
    case "!=":
      return S3(r, i);
    case "<":
      return w3(r, i);
    case "<=":
      return k3(r, i);
    case ">":
      return C3(r, i);
    case ">=":
      return T3(r, i);
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function y3(e, t) {
  let n = [];
  return (
    e instanceof Li ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof Li ? n.push(...t.operandExpressions) : n.push(t),
    new Li(n)
  );
}
function b3(e, t) {
  let n = [];
  return (
    e instanceof ya ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof ya ? n.push(...t.operandExpressions) : n.push(t),
    new ya(n)
  );
}
function x3(e, t) {
  let n = e instanceof lt;
  return t instanceof lt && !n ? new Yo(t, e) : new Yo(e, t);
}
function S3(e, t) {
  let n = e instanceof lt;
  return t instanceof lt && !n ? new Go(t, e) : new Go(e, t);
}
function w3(e, t) {
  let n = e instanceof lt;
  return t instanceof lt && !n ? new Pa(t, e) : new Ea(e, t);
}
function k3(e, t) {
  let n = e instanceof lt;
  return t instanceof lt && !n ? new _a(t, e) : new Ra(e, t);
}
function C3(e, t) {
  let n = e instanceof lt;
  return t instanceof lt && !n ? new Ea(t, e) : new Pa(e, t);
}
function T3(e, t) {
  let n = e instanceof lt;
  return t instanceof lt && !n ? new Ra(t, e) : new _a(e, t);
}
function E3(e, t) {
  let n = Yn(e.value, t, void 0);
  switch (e.dataType) {
    case "BOOLEAN":
      return R3(n);
    case "DATE":
      return P3(n);
    case "NUMBER":
      return _3(n);
    case "STRING":
      return I3(n);
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function R3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "boolean"
    ? e
    : new wu(e);
}
function P3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "date"
    ? e
    : new ym(e);
}
function _3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "number"
    ? e
    : new bm(e);
}
function I3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "string"
    ? e
    : new xm(e);
}
function Ia(e, t) {
  switch (e.type) {
    case "Identifier":
      return F3(e, t);
    case "LiteralValue":
      return;
    case "FunctionCall":
      return L3(e);
    case "Case":
      return M3(e, t);
    case "UnaryOperation":
      return O3(e);
    case "BinaryOperation":
      return D3(e);
    case "TypeCast":
      return A3(e);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function F3(e, t) {
  return t[e.name];
}
function L3(e) {
  switch (e.functionName) {
    case "CONTAINS":
      return bu.getDefinition();
    case "STARTS_WITH":
      return xu.getDefinition();
    case "ENDS_WITH":
      return Su.getDefinition();
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function M3(e, t) {
  let n = [];
  for (let r of e.conditions) {
    let i = Ia(r.then, t);
    Nt(i) || n.push(i);
  }
  if (e.else) {
    let r = Ia(e.else, t);
    Nt(r) || n.push(r);
  }
  return cu.getDefinition(n) ?? void 0;
}
function O3(e) {
  switch (e.operator) {
    case "not":
      return Ca.getDefinition();
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function D3(e) {
  switch (e.operator) {
    case "and":
    case "or":
      return Ta.getDefinition();
    case "==":
    case "!=":
    case "<":
    case "<=":
    case ">":
    case ">=":
      return Kn.getDefinition();
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function A3(e) {
  switch (e.dataType) {
    case "BOOLEAN":
      return wu.getDefinition();
    case "DATE":
      return ym.getDefinition();
    case "NUMBER":
      return bm.getDefinition();
    case "STRING":
      return xm.getDefinition();
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function ei(e, t) {
  return `(self: ${e}ms${t ? `, total: ${t}ms` : ""})`;
}
function qn(e) {
  return `(items: ${e})`;
}
var ti = class {
    constructor() {
      R(this, "executionTime", 0), R(this, "itemCount", 0);
    }
    async execute() {
      let e = performance.now(),
        t = await this._execute();
      return (
        (this.executionTime = performance.now() - e),
        (this.itemCount = t.length),
        t
      );
    }
  },
  kk = class extends ti {
    constructor(e) {
      super(), (this.collection = e);
    }
    inspect() {
      return {
        label: `ScanCollectionPlan ${ei(this.executionTime)} ${qn(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      return this.collection.scanItems();
    }
  },
  vr = class extends ti {
    constructor(e, t) {
      super(), (this.index = e), (this.query = t);
    }
    inspect() {
      let e = [],
        t = (n) => {
          switch (n.type) {
            case "All":
              return n.type;
            case "Equals":
            case "NotEquals":
            case "LessThan":
            case "GreaterThan":
            case "Contains":
            case "StartsWith":
            case "EndsWith":
              return `${n.type} ${gn.stringify(n.value)}`;
            default:
              Pt(n);
          }
        };
      for (let n = 0; n < this.index.fields.length; n++) {
        let r = this.index.fields[n],
          i = this.query[n];
        !r ||
          r.type !== "Identifier" ||
          !i ||
          i.type === "All" ||
          e.push(`${r.name} ${t(i)}`);
      }
      return {
        label: `LookupIndexPlan(${e.join(", ")}) ${ei(this.executionTime)} ${qn(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      return this.index.lookupItems(this.query);
    }
  },
  V3 = class extends ti {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `UnionPlan ${ei(
          this.executionTime - e,
          this.executionTime
        )} ${qn(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new uu(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.union(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  B3 = class extends ti {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `IntersectionPlan ${ei(
          this.executionTime - e,
          this.executionTime
        )} ${qn(this.itemCount)} ${qn(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new uu(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.intersection(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  $3 = class extends ti {
    constructor(e, t, n, r) {
      super(),
        (this.childPlan = e),
        (this.collection = t),
        (this.richTextResolver = n),
        (this.select = r);
    }
    inspect() {
      return {
        label: `ResolveItemsPlan ${ei(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${qn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = e.map((n) => n.pointer);
      for (let n of e)
        for (let r of this.select) {
          if (r.type !== "Identifier") continue;
          let i = n.data[r.name];
          i?.type === "richtext" && this.richTextResolver.resolve(i.value);
        }
      return this.collection.resolveItems(t);
    }
  },
  z3 = class extends ti {
    constructor(e, t) {
      super(), (this.childPlan = e), (this.filterExpression = t);
    }
    inspect() {
      return {
        label: `FilterItemsPlan(${this.filterExpression.stringify()}) ${ei(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${qn(this.itemCount)} ${qn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).filter((t) => {
        let n = this.filterExpression.evaluate(t);
        return Bi(n);
      });
    }
  },
  N3 = class extends ti {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.orderExpressions = t),
        (this.collection = n);
    }
    inspect() {
      return {
        label: `SortItemsPlan(${this.orderExpressions
          .map(
            (t) => `${t.expression.stringify()} ${t.direction.toUpperCase()}`
          )
          .join(", ")}) ${ei(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${qn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).sort((t, n) => {
        for (let { expression: r, direction: i, collation: o } of this
          .orderExpressions) {
          let s = i === "asc";
          if (r instanceof lt && r.name === Up) {
            let c = this.collection.compareItems(t, n);
            return s ? c : -c;
          }
          let a = r.evaluate(t),
            l = r.evaluate(n);
          if (!gn.equal(a, l, o)) {
            if (gn.lessThan(a, l, o) || Xo(a)) return s ? -1 : 1;
            if (gn.greaterThan(a, l, o) || Xo(l)) return s ? 1 : -1;
            throw new Error("Invalid comparison result.");
          }
        }
        return this.collection.compareItems(t, n);
      });
    }
  },
  H3 = class {
    constructor(e, t, n) {
      (this.expression = e), (this.direction = t), (this.collation = n);
    }
  },
  j3 = class extends ti {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.offsetExpression = t),
        (this.limitExpression = n);
    }
    inspect() {
      var e, t;
      return {
        label: `SliceItemsPlan(LIMIT ${
          ((e = this.limitExpression) == null ? void 0 : e.stringify()) ??
          "Infinity"
        }, OFFSET ${
          ((t = this.offsetExpression) == null ? void 0 : t.stringify()) ?? "0"
        }) ${ei(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${qn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    getOffset() {
      var e;
      let t = (e = this.offsetExpression) == null ? void 0 : e.evaluate();
      if (!(Xo(t) || t.type !== "number")) return t.value;
    }
    getLimit() {
      var e;
      let t = (e = this.limitExpression) == null ? void 0 : e.evaluate();
      if (!(Xo(t) || t.type !== "number")) return t.value;
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = this.getOffset() ?? 0,
        n = this.getLimit() ?? 1 / 0;
      return e.slice(t, t + n);
    }
  },
  uu = class extends Map {
    constructor(e = []) {
      super();
      for (let t of e) this.set(t.pointer, t);
    }
    union(e) {
      let t = new uu();
      for (let [n, r] of this) t.set(n, r);
      for (let [n, r] of e) t.set(n, r);
      return t;
    }
    intersection(e) {
      let t = new uu();
      for (let [n, r] of this) e.has(n) && t.set(n, r);
      return t;
    }
    items() {
      return [...this.values()];
    }
  },
  W3 = class {
    constructor(e) {
      (this.collection = e), R(this, "cache", new Map());
    }
    resolve(e) {
      let t = this.cache.get(e);
      if (t) return t;
      let n = this.collection.resolveRichText(e);
      return this.cache.set(e, n), n;
    }
  };
function U3(e, t) {
  var n;
  if (gm(e)) {
    let r = Iw(e),
      i = (n = r?.[t.name]) == null ? void 0 : n.title;
    if (i) return `"${t.name}" /* ${i} */`;
  }
  return `"${t.name}"`;
}
function X3(e) {
  return typeof e.value == "string" ? `'${e.value}'` : e.value;
}
function Y3(e, t) {
  return `${t.functionName}(${t.arguments.map((n) => nn(e, n)).join(", ")})`;
}
function G3(e, t) {
  let n = "CASE";
  t.value && (n += ` ${nn(e, t.value)}`);
  for (let r of t.conditions)
    n += ` WHEN ${nn(e, r.when)} THEN ${nn(e, r.then)}`;
  return t.else && (n += ` ELSE ${t.else}`), (n += " END"), n;
}
function K3(e, t) {
  let n = nn(e, t.value);
  return `${t.operator.toUpperCase()} ${n}`;
}
function q3(e, t) {
  let n = nn(e, t.left),
    r = nn(e, t.right),
    i = t.operator.toUpperCase();
  return `${n} ${i} ${r}`;
}
function Q3(e, t) {
  return `CAST(${nn(e, t.value)} as ${t.dataType})`;
}
function nn(e, t) {
  switch (t.type) {
    case "Identifier":
      return U3(e, t);
    case "LiteralValue":
      return X3(t);
    case "FunctionCall":
      return Y3(e, t);
    case "Case":
      return G3(e, t);
    case "UnaryOperation":
      return K3(e, t);
    case "BinaryOperation":
      return q3(e, t);
    case "TypeCast":
      return Q3(e, t);
    default:
      Pt(t);
  }
}
function Z3(e) {
  let t = "";
  return (
    e.split(/\s+/u).forEach((r) => {
      r !== "" &&
        (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r)
          ? (t += `
${r}`)
          : ["AND", "OR"].includes(r)
          ? (t += `
	${r}`)
          : (t += ` ${r}`));
    }),
    t.trim()
  );
}
function J3(e) {
  let t = "";
  return (
    (t += `SELECT ${e.select
      .map((n) => {
        let r = nn(e.from.data, n);
        return n.alias ? `${r} AS ${n.alias}` : r;
      })
      .join(", ")}`),
    gm(e.from.data)
      ? (t += ` FROM ${e.from.data.displayName}`)
      : (t += ` FROM ${e.from.data.displayName}`),
    e.where && (t += ` WHERE ${nn(e.from.data, e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy
        .map((n) => `${nn(e.from.data, n)} ${n.direction ?? "asc"}`)
        .join(", ")}`),
    e.limit && (t += ` LIMIT ${nn(e.from.data, e.limit)}`),
    e.offset && (t += ` OFFSET ${nn(e.from.data, e.offset)}`),
    Z3(t)
  );
}
var e5 = i3("query-engine");
function t5({ data: e }, t) {
  if (s3(e)) return new l3(e, t);
  if (a3(e)) return e;
  if (gm(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  Pt(e, "Unsupported collection type");
}
var c8 = class {
  async query(e, t) {
    let n = t5(e.from, t),
      r = new W3(n),
      i = this.createQueryPlan(n, r, e),
      o = await this.executeQueryPlan(n, r, e, i);
    return (
      e5.debug(`Query:
${J3(e)}

${(0, r3.default)(i.inspect())}`),
      o
    );
  }
  createQueryPlan(e, t, n) {
    var r;
    let i = new kk(e);
    if (n.where) {
      let l = Rt.from(n.where, e.schema);
      i = Yp(e, l);
    }
    let o =
      (r = n.orderBy) == null
        ? void 0
        : r.map(
            (l) =>
              new H3(Rt.from(l, e.schema), l.direction ?? "asc", { type: 0 })
          );
    i = new N3(i, o ?? [], e);
    let s;
    n.offset && (s = Rt.from(n.offset, e.schema));
    let a;
    return (
      n.limit && (a = Rt.from(n.limit, e.schema)),
      (s || a) && (i = new j3(i, s, a)),
      n.select.length > 0 && (i = new $3(i, e, t, n.select)),
      i
    );
  }
  async executeQueryPlan(e, t, n, r) {
    let i = await r.execute();
    return Promise.all(
      i.map(async (o) => {
        let s = {};
        for (let a of n.select) {
          let l = Rt.from(a, e.schema),
            c = n5(a),
            u = l.evaluate(o);
          s[c] = await r5(t, u);
        }
        return s;
      })
    );
  }
};
function n5(e) {
  if (e.alias) return e.alias;
  if (e.type === "Identifier") return e.name;
  throw new Error("Can't serialize expression");
}
async function r5(e, t) {
  return Xo(t) ? null : t.type === "richtext" ? e.resolve(t.value) : t.value;
}
function Yp(e, t) {
  if (t instanceof Li) {
    let n = t.operandExpressions.map((r) => Yp(e, r));
    return new B3(n);
  }
  if (t instanceof ya) {
    let n = t.operandExpressions.map((r) => Yp(e, r));
    return new V3(n);
  }
  return i5(e, t) ?? s5(e, t);
}
function i5(e, t) {
  var n, r;
  if (t instanceof Kn) return Lp(e, t);
  if (t instanceof Da) return o5(e, t);
  if (
    t instanceof lt &&
    ((n = t.definition) == null ? void 0 : n.type) === "boolean"
  ) {
    let i = Fe.fromBoolean(!0),
      o = new Yo(t, i);
    return Lp(e, o);
  }
  if (
    t instanceof Ca &&
    t.valueExpression instanceof lt &&
    ((r = t.valueExpression.definition) == null ? void 0 : r.type) === "boolean"
  ) {
    let i = Fe.fromBoolean(!0),
      o = new Go(t.valueExpression, i);
    return Lp(e, o);
  }
}
function Lp(e, t) {
  let n = t.leftExpression,
    r = t.rightExpression;
  if (r instanceof Fe)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (Nt(o)) continue;
      let s = Rt.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof Yo && i.supportedLookupTypes.includes("Equals"))
        return new vr(i, [{ type: "Equals", value: r.evaluate() }, ...a]);
      if (t instanceof Go && i.supportedLookupTypes.includes("NotEquals"))
        return new vr(i, [{ type: "NotEquals", value: r.evaluate() }, ...a]);
      if (t instanceof Ea && i.supportedLookupTypes.includes("LessThan"))
        return new vr(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof Ra && i.supportedLookupTypes.includes("LessThan"))
        return new vr(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
      if (t instanceof Pa && i.supportedLookupTypes.includes("GreaterThan"))
        return new vr(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof _a && i.supportedLookupTypes.includes("GreaterThan"))
        return new vr(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
    }
}
function o5(e, t) {
  if (t.argumentExpressions.length !== 2) return;
  let n = t.argumentExpressions[0],
    r = t.argumentExpressions[1];
  if (!Nt(n) && !Nt(r) && r instanceof Fe)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (Nt(o)) continue;
      let s = Rt.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof bu && i.supportedLookupTypes.includes("Contains"))
        return new vr(i, [{ type: "Contains", value: r.evaluate() }, ...a]);
      if (t instanceof xu && i.supportedLookupTypes.includes("StartsWith"))
        return new vr(i, [{ type: "StartsWith", value: r.evaluate() }, ...a]);
      if (t instanceof Su && i.supportedLookupTypes.includes("EndsWith"))
        return new vr(i, [{ type: "EndsWith", value: r.evaluate() }, ...a]);
    }
}
function s5(e, t) {
  let n = new kk(e);
  return new z3(n, t);
}
var a5 = class {
    constructor() {
      R(this, "entries", new Map());
    }
    set(e, t, n, r) {
      let i = this.entries.get(e);
      switch (t) {
        case "transformTemplate": {
          he(
            typeof n == "string",
            `transformTemplate must be a string, received: ${n}`
          ),
            i
              ? (i.transformTemplate = n)
              : this.entries.set(e, { transformTemplate: n });
          break;
        }
        case "initial":
        case "animate": {
          he(
            typeof n == "object",
            `${t} must be a valid object, received: ${n}`
          ),
            i
              ? ((i[t] = n), i.variantHash || (i.variantHash = r))
              : this.entries.set(e, { [t]: n, variantHash: r });
          break;
        }
        default:
          break;
      }
    }
    clear() {
      this.entries.clear();
    }
    toObject() {
      return Object.fromEntries(this.entries);
    }
  },
  l5 = new a5(),
  u8 = (e, t, n, r) => (Jr() || l5.set(t, e, n, r), n),
  f8 = "__Appear_Animation_Transform__";
var d8 = "data-framer-appear-id",
  h8 = "data-framer-appear-animation";
function Mp(e, t) {
  e.forEach((n) => clearTimeout(n)),
    e.clear(),
    t.forEach((n) => n && n("Callback cancelled by variant change")),
    t.clear();
}
function MS() {
  return new Set();
}
function m8(e) {
  let t = rn(MS),
    n = rn(MS);
  return (
    qw(() => () => Mp(n, t)),
    b.useEffect(() => () => Mp(n, t), [t, n]),
    b.useEffect(() => {
      Mp(n, t);
    }, [e, t, n]),
    b.useRef({
      activeVariantCallback:
        (r) =>
        (...i) =>
          new Promise((o, s) => {
            t.add(s), r(...i).then(o);
          }).catch(() => {}),
      delay: async (r, i) => {
        await new Promise((o) => n.add(globalThis.setTimeout(() => o(!0), i))),
          r();
      },
    }).current
  );
}
function c5(e, t, n) {
  return b.useCallback(
    (r) => {
      var i, o, s;
      return n
        ? e
          ? t
            ? Object.assign(
                {},
                (i = n[e]) == null ? void 0 : i[r],
                (o = n[t]) == null ? void 0 : o[r]
              )
            : ((s = n[e]) == null ? void 0 : s[r]) || {}
          : {}
        : {};
    },
    [e, t, n]
  );
}
function u5(e) {
  for (let [t, n] of Object.entries(e)) if (zt.matchMedia(n).matches) return t;
}
function f5(e) {
  var t;
  for (let { hash: n, mediaQuery: r } of e) {
    if (!r) continue;
    if (zt.matchMedia(r).matches) return n;
  }
  return (t = e[0]) == null ? void 0 : t.hash;
}
function y8(e, t, n = !0) {
  let r = A(ek),
    i = V(Jr() ? u5(t) ?? e : e),
    o = V(n && r ? e : i.current),
    s = pu(),
    a = r0(),
    l = fe(
      (c) => {
        (c !== i.current || c !== o.current) &&
          a(() => {
            (i.current = o.current = c),
              Hi(() => {
                s();
              });
          });
      },
      [a, s]
    );
  return (
    Dw(() => {
      !n || r !== !0 || l(i.current);
    }, []),
    N(() => {
      let c = [];
      for (let [u, f] of Object.entries(t)) {
        let d = zt.matchMedia(f),
          p = (y) => {
            y.matches && l(u);
          };
        d5(d, p), c.push([d, p]);
      }
      return () => c.forEach(([u, f]) => h5(u, f));
    }, [t, l]),
    [i.current, o.current]
  );
}
function d5(e, t) {
  e.addEventListener ? e.addEventListener("change", t) : e.addListener(t);
}
function h5(e, t) {
  e.removeEventListener
    ? e.removeEventListener("change", t)
    : e.removeListener(t);
}
function b8(e) {
  var t, n;
  let r = f5(e);
  if (r)
    for (let i of document.querySelectorAll(".hidden-" + r))
      (t = i.parentNode) == null || t.removeChild(i);
  for (let i of document.querySelectorAll(".ssr-variant:empty"))
    (n = i.parentNode) == null || n.removeChild(i);
}
function ku() {
  return K.current() === K.canvas;
}
function OS(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function T8(e, t) {
  if (ku()) return;
  let r = b.useRef(!0),
    i = b.useRef(t);
  qw((o, s) => {
    let a = o && !s;
    if (!r.current && a) {
      let l = OS(i.current, e);
      l && l();
    }
    r.current = a;
  }, []),
    b.useEffect(() => {
      if (r.current) {
        let o = OS(i.current, e);
        o && o();
      }
    }, [e]);
}
function p5(e, t) {
  return `${e}-${t}`;
}
function m5(e, t) {
  let r = e.indexOf(t) + 1;
  r >= e.length && (r = 0);
  let i = e[r];
  return he(i !== void 0, "nextVariant should be defined"), i;
}
function v5(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function DS(e, t, n) {
  let { hover: r, pressed: i } = e || {};
  if (i && n) return "pressed";
  if (r && t) return "hover";
}
function g5(e, t) {
  let n = t[e];
  return n || `framer-v-${e}`;
}
function AS(e, t, n) {
  return e && n.has(e) ? e : t;
}
var y5 = Symbol("cycle");
function I8({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: o = {},
  variantClassNames: s = {},
}) {
  let a = pu(),
    l = rn(() => new Set(i)),
    c = b.useRef({
      isHovered: !1,
      isPressed: !1,
      hasPressedVariants: !0,
      baseVariant: AS(e, t, l),
      lastVariant: e,
      gestureVariant: void 0,
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    u = b.useCallback(
      (x) => {
        let {
            isHovered: k,
            isPressed: w,
            enabledGestures: T,
            defaultVariant: E,
          } = c.current,
          F = AS(x, E, l),
          I = DS(T?.[F], k, w),
          D = I ? p5(F, I) : void 0;
        return [F, D];
      },
      [l]
    ),
    f = b.useCallback(
      ({ isHovered: x, isPressed: k }) => {
        x !== void 0 && (c.current.isHovered = x),
          k !== void 0 && (c.current.isPressed = k);
        let {
            baseVariant: w,
            gestureVariant: T,
            defaultVariant: E,
          } = c.current,
          [F, I] = u(w);
        (F !== w || I !== T) &&
          ((c.current.baseVariant = F || E),
          (c.current.gestureVariant = I),
          a());
      },
      [u, a]
    ),
    d = b.useCallback(
      (x) => {
        let {
            defaultVariant: k,
            cycleOrder: w,
            baseVariant: T,
            gestureVariant: E,
          } = c.current,
          F = x === y5 ? m5(w || [], T || k) : x,
          [I, D] = u(F);
        (I !== T || D !== E) &&
          ((c.current.baseVariant = I || k),
          (c.current.gestureVariant = D),
          a());
      },
      [u, a]
    );
  if (e !== c.current.lastVariant) {
    let [x, k] = u(e);
    (c.current.lastVariant = x),
      (x !== c.current.baseVariant || k !== c.current.gestureVariant) &&
        ((c.current.baseVariant = x), (c.current.gestureVariant = k));
  }
  let {
      baseVariant: p,
      gestureVariant: y,
      defaultVariant: g,
      enabledGestures: S,
      isHovered: m,
      isPressed: h,
    } = c.current,
    v = c5(c.current.baseVariant, c.current.gestureVariant, o);
  return b.useMemo(() => {
    let x = [];
    p !== g && x.push(p), y && x.push(y);
    let k = S?.[p],
      w = {
        onMouseEnter: () => f({ isHovered: !0 }),
        onMouseLeave: () => f({ isHovered: !1 }),
      };
    return (
      k?.pressed &&
        Object.assign(w, {
          onTapStart: () => f({ isPressed: !0 }),
          onTapCancel: () => f({ isPressed: !1 }),
          onTap: () => f({ isPressed: !1 }),
        }),
      {
        variants: x,
        baseVariant: p,
        gestureVariant: y,
        transition: v5(c.current.transitions, p),
        setVariant: d,
        setGestureState: f,
        addVariantProps: v,
        gestureHandlers: w,
        classNames: ka(g5(p, s), DS(k, m, h)),
      }
    );
  }, [p, y, m, h, v, d, g, S, f, s]);
}
var b5 = b.createContext(void 0),
  x5 = () => b.useContext(b5);
var S5 = {
    Arial: {
      Regular: { selector: "Arial", weight: void 0 },
      Black: { selector: "Arial-Black", weight: void 0 },
      Narrow: { selector: "Arial Narrow", weight: void 0 },
      "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 },
    },
    Avenir: {
      Book: { selector: "Avenir", weight: void 0 },
      Light: { selector: "Avenir-Light", weight: void 0 },
      Medium: { selector: "Avenir-Medium", weight: void 0 },
      Heavy: { selector: "Avenir-Heavy", weight: void 0 },
      Black: { selector: "Avenir-Black", weight: void 0 },
    },
    "Avenir Next": {
      Regular: { selector: "Avenir Next", weight: void 0 },
      "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNext-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNext-Heavy", weight: void 0 },
    },
    "Avenir Next Condensed": {
      Regular: { selector: "Avenir Next Condensed", weight: void 0 },
      "Ultra Light": {
        selector: "AvenirNextCondensed-UltraLight",
        weight: void 0,
      },
      Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 },
    },
    Baskerville: {
      Regular: { selector: "Baskerville", weight: void 0 },
      "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 },
    },
    "Bodoni 72": {
      Book: { selector: "Bodoni 72", weight: void 0 },
      Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
      Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 },
    },
    Courier: { Regular: { selector: "Courier", weight: void 0 } },
    "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
    Futura: {
      Medium: { selector: "Futura", weight: void 0 },
      Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
      "Condensed ExtraBold": {
        selector: "Futura-CondensedExtraBold",
        weight: void 0,
      },
    },
    Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
    "Gill Sans": {
      Regular: { selector: "Gill Sans", weight: void 0 },
      Light: { selector: "GillSans-Light", weight: void 0 },
      SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
      UltraBold: { selector: "GillSans-UltraBold", weight: void 0 },
    },
    Helvetica: {
      Regular: { selector: "Helvetica", weight: void 0 },
      Light: { selector: "Helvetica-Light", weight: void 0 },
      Bold: { selector: "Helvetica-Bold", weight: void 0 },
      Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
      "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
      "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 },
    },
    "Helvetica Neue": {
      Regular: { selector: "Helvetica Neue", weight: void 0 },
      UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
      Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
      Light: { selector: "HelveticaNeue-Light", weight: void 0 },
      Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
      Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
      Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
      "UltraLight Italic": {
        selector: "HelveticaNeue-UltraLightItalic",
        weight: void 0,
      },
      "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
      "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
      "Medium Italic": {
        selector: "HelveticaNeue-MediumItalic",
        weight: void 0,
      },
      "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
      "Condensed Bold": {
        selector: "HelveticaNeue-CondensedBold",
        weight: void 0,
      },
      "Condensed Black": {
        selector: "HelveticaNeue-CondensedBlack",
        weight: void 0,
      },
    },
    "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
    Impact: { Regular: { selector: "Impact", weight: void 0 } },
    "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
    Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
    Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
    Optima: {
      Regular: { selector: "Optima", weight: void 0 },
      ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 },
    },
    Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
    "SF Pro Display": {
      Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
      Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
      "Ultralight Italic": {
        selector: "__SF-UI-Display-Ultralight-Italic__",
        weight: 100,
      },
      "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
      "Light Italic": {
        selector: "__SF-UI-Display-Light-Italic__",
        weight: 300,
      },
      "Medium Italic": {
        selector: "__SF-UI-Display-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Display-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
      "Heavy Italic": {
        selector: "__SF-UI-Display-Heavy-Italic__",
        weight: 800,
      },
      "Black Italic": {
        selector: "__SF-UI-Display-Black-Italic__",
        weight: 900,
      },
    },
    "SF Pro Display Condensed": {
      Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
      Ultralight: {
        selector: "__SF-UI-Display-Condensed-Ultralight__",
        weight: 100,
      },
      Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
      Semibold: {
        selector: "__SF-UI-Display-Condensed-Semibold__",
        weight: 600,
      },
      Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 },
    },
    "SF Pro Text": {
      Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
      Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
      "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
      "Medium Italic": {
        selector: "__SF-UI-Text-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Text-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 },
    },
    "SF Pro Text Condensed": {
      Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 },
    },
    Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
    Times: { Regular: { selector: "Times", weight: void 0 } },
    "Times New Roman": {
      Regular: { selector: "Times New Roman", weight: void 0 },
    },
    Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
    Verdana: { Regular: { selector: "Verdana", weight: void 0 } },
  },
  w5 = {
    "__SF-Compact-Display-Regular__":
      "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__":
      "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__":
      "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__":
      "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__":
      "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__":
      "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__":
      "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__":
      "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__":
      "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__":
      ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__":
      ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__":
      ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__":
      ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__":
      ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__":
      ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__":
      ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__":
      ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__":
      ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__":
      ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__":
      ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__":
      "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__":
      "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__":
      "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__":
      "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__":
      "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__":
      "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__":
      "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__":
      ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__":
      ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__":
      ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__":
      ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__":
      ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__":
      ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__":
      ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__":
      ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__":
      ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__":
      ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__":
      ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__":
      ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__":
      ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__":
      ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__":
      ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__":
      ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__":
      ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__":
      ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__":
      ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__":
      ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__":
      ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__":
      ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__":
      ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__":
      ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__":
      ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__":
      ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__":
      ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__":
      ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__":
      ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__":
      ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__":
      ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__":
      ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__":
      ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__":
      "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__":
      "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__":
      "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__":
      "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__":
      "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__":
      "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__":
      "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__":
      "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__":
      "SFCompactRounded-Black|.SFCompactRounded-Black",
  },
  VS = S5;
var k5 = "System Default",
  C5 = class {
    constructor() {
      R(this, "name", "local"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map()),
        R(this, "fontAliasBySelector", new Map()),
        R(this, "fontAliases", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.addFontFamily(t), t;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts() {
      let e = [];
      for (let r of Object.keys(VS)) {
        let i = VS[r];
        if (!i) continue;
        let o = this.createFontFamily(r);
        for (let s of Object.keys(i)) {
          let a = i[s];
          if (!a) continue;
          let { selector: l, weight: c } = a,
            u = { variant: s, selector: l, weight: c, family: o };
          o.fonts.push(u);
        }
        e.push(...o.fonts);
      }
      for (let [r, i] of Object.entries(w5)) this.addFontAlias(r, i);
      let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
      this.addFontFamily(t);
      for (let [r, i] of n) this.addFontAlias(r, i);
      return e.push(...t.fonts), e;
    }
    addFontAlias(e, t) {
      this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e);
    }
    getSystemFontFamily() {
      let e =
          "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
        t = { name: k5, fonts: [], source: this.name },
        n = new Map(),
        r = [400, 100, 200, 300, 500, 600, 700, 800, 900],
        i = ["normal", "italic"];
      for (let o of i)
        for (let s of r) {
          let a = T5(s, o),
            l = `__SystemDefault-${s}-${o}__`,
            c = { variant: a, selector: l, style: o, weight: s, family: t };
          t.fonts.push(c), n.set(l, e);
        }
      return { fontFamily: t, aliases: n };
    }
    getFontAliasBySelector(e) {
      return this.fontAliasBySelector.get(e) || null;
    }
    getFontSelectorByAlias(e) {
      return this.fontAliases.get(e) || null;
    }
    isFontFamilyAlias(e) {
      return !!(e && /^__.*__$/u.exec(e));
    }
  },
  BS = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };
function T5(e, t) {
  let n = t === "normal" ? "Regular" : "Italic";
  return e === 400 ? n : t !== "normal" ? `${BS[e]} ${n}` : `${BS[e]}`;
}
var E5 = Bn(Kp(), 1),
  $o = "CUSTOM;";
function R5(e, t) {
  if (!t) return e.substring(0, e.lastIndexOf("."));
  let n =
      t.font.preferredFamily === ""
        ? t.font.fontFamily
        : t.font.preferredFamily,
    r =
      t.font.preferredSubFamily === ""
        ? t.font.fontSubFamily
        : t.font.preferredSubFamily;
  return `${n} ${r}`;
}
var P5 = class {
  constructor() {
    R(this, "name", "custom"),
      R(this, "fontFamilies", []),
      R(this, "byFamilyName", new Map()),
      R(this, "assetsByFamily", new Map());
  }
  importFonts(e) {
    var t;
    (this.fontFamilies.length = 0),
      this.byFamilyName.clear(),
      this.assetsByFamily.clear();
    let n = [];
    for (let r of e) {
      if (!this.isValidCustomFontAsset(r)) continue;
      let i = R5(r.name, r.properties),
        o = this.createFontFamily(i),
        s = {
          family: o,
          selector: `${$o}${i}`,
          variant: this.inferVariantName(i),
          postscriptName:
            (t = r.properties) == null ? void 0 : t.font.postscriptName,
          file: r.url,
        };
      o.fonts.push(s),
        (o.owner = r.ownerType === "team" ? "team" : "project"),
        this.assetsByFamily.set(i, r),
        n.push(...o.fonts);
    }
    return n;
  }
  isValidCustomFontAsset(e) {
    var t;
    return !e.mimeType.startsWith("font/") ||
      ((t = e.properties) == null ? void 0 : t.kind) !== "font" ||
      !e.properties.font
      ? !1
      : "fontFamily" in e.properties.font;
  }
  inferVariantName(e) {
    let t = [
        "thin",
        "ultra light",
        "extra light",
        "light",
        "normal",
        "medium",
        "semi bold",
        "bold",
        "extra bold",
        "black",
      ],
      n = [...t.map((s) => `${s} italic`), ...t],
      r = e.toLowerCase(),
      i = [...r.split(" "), ...r.split("-"), ...r.split("_")],
      o = n.find((s) => i.includes(s) || i.includes(s.replace(/\s+/g, "")));
    return o ? o.replace(/^\w|\s\w/g, (s) => s.toUpperCase()) : "Regular";
  }
  createFontFamily(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: this.name, name: e, fonts: [] };
    return this.addFontFamily(n), n;
  }
  addFontFamily(e) {
    this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
  }
  parseSelector(e) {
    if (!e.startsWith($o)) return null;
    let t = e.split($o);
    return t[1] === void 0 ? null : { source: "custom", name: t[1] };
  }
  getFontBySelector(e, t = !0) {
    let n = this.parseSelector(e);
    if (!n || (!t && !this.byFamilyName.get(n.name))) return;
    let r = this.getFontFamilyByName(n.name).fonts;
    return (
      r.find((o) => {
        var s;
        return (s = o.file) == null ? void 0 : s.endsWith(".woff2");
      }) || r[0]
    );
  }
  getFontFamilyByName(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: "custom", name: e, fonts: [] };
    return (
      n.fonts.push({
        selector: `${$o}${e}`,
        variant: this.inferVariantName(e),
        family: n,
      }),
      n
    );
  }
};
function Ck(e, t, n) {
  if (t.length === 0) return {};
  let r = n(e);
  if (!r) return {};
  let { weight: i, style: o } = r,
    s = new Map(),
    a = new Map();
  t.forEach((f) => {
    let d = me(f) ? f : f.name.toLocaleLowerCase(),
      p = n(d);
    p &&
      (s.set(`${p.weight}-${p.style}`, d),
      !(p.weight <= i) && (a.has(p.style) || a.set(p.style, d)));
  });
  let l = a.get(o),
    c = a.get("italic") ?? a.get("oblique");
  r.weight <= 300
    ? ((l = s.get(`400-${o}`) ?? l),
      (c = s.get("400-italic") ?? s.get("400-oblique") ?? c))
    : r.weight <= 500
    ? ((l = s.get(`700-${o}`) ?? l),
      (c = s.get("700-italic") ?? s.get("700-oblique") ?? c))
    : ((l = s.get(`900-${o}`) ?? l),
      (c = s.get("900-italic") ?? s.get("900-oblique") ?? c));
  let u = s.get(`${i}-italic`) ?? s.get(`${i}-oblique`);
  return { variantBold: l, variantItalic: u, variantBoldItalic: c };
}
var _5 = ["display", "sans", "serif", "slab", "handwritten", "script"];
function I5(e) {
  return e
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(F5);
}
function F5(e) {
  return _5.includes(e);
}
var eu = "FS;",
  Tk = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
  },
  Ek = Object.keys(Tk),
  L5 = (() => new RegExp(`^(?:${[...Ek, "italic"].join("|")})`, "u"))(),
  qr = class {
    constructor() {
      R(this, "name", "fontshare"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      let t = e.split(" "),
        n = Ek.find((s) => t.includes(s)),
        r = e.includes("italic") ? "italic" : "normal";
      return {
        weight: (n && Tk[n]) || 400,
        style: r === "italic" ? r : "normal",
      };
    }
    parseSelector(e) {
      if (!e.startsWith(eu)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(eu, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${eu}${e}-${t}`;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      for (let n of e) {
        let r = n.font_styles.filter((i) => {
          let o = i.name.toLowerCase();
          return !(!L5.exec(o) || o.endsWith("wide"));
        });
        for (let i of r) {
          let { name: o } = n,
            s = i.name.toLowerCase(),
            a = this.getFontFamilyByName(o);
          a ||
            ((a = { name: o, fonts: [], source: this.name }),
            this.addFontFamily(a));
          let l = qr.createSelector(o, s),
            c = qr.parseVariant(s) || { weight: void 0, style: void 0 },
            { weight: u, style: f } = c,
            {
              variantBold: d,
              variantBoldItalic: p,
              variantItalic: y,
            } = Ck(s, r, qr.parseVariant),
            g = {
              family: a,
              variant: s,
              selector: l,
              selectorBold: d ? qr.createSelector(o, d) : void 0,
              selectorBoldItalic: p ? qr.createSelector(o, p) : void 0,
              selectorItalic: y ? qr.createSelector(o, y) : void 0,
              weight: u,
              style: f,
              file: i.file,
              category: M5(n.category),
            };
          a.fonts.push(g), t.push(g);
        }
      }
      return t;
    }
  };
function M5(e) {
  let t = {
      serif: "serif",
      sans: "sans-serif",
      slab: "slab",
      display: "display",
      handwritten: "handwriting",
      script: "handwriting",
    },
    n = I5(e)[0];
  return n && t[n];
}
var O5 = "Inter",
  D5 = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  },
  $S = class {
    constructor() {
      R(this, "name", "framer"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    static getDraftFontPropertiesBySelector(e) {
      if (!e.startsWith(O5)) return null;
      let t = e.split("-"),
        [n, r = ""] = t;
      if (!n) return null;
      let i = r.includes("Italic") ? "italic" : "normal",
        o = r.replace("Italic", ""),
        s = (o && D5[o]) || 400;
      return {
        family: n,
        style: i,
        weight: s,
        source: "framer",
        variant: void 0,
        category: "sans-serif",
      };
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          let { familyName: r, ...i } = n,
            o = this.getFontFamilyByName(r);
          o || (o = this.addFontFamily(r));
          let s = { ...i, family: o };
          o.fonts.push(s), t.push(s);
        }),
        t
      );
    }
  },
  tu = "GF;",
  Qr = class {
    constructor() {
      R(this, "name", "google"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      if (e === "regular") return { style: "normal", weight: 400 };
      let t = /(\d*)(normal|italic)?/.exec(e);
      if (!t) return null;
      let n = parseInt(t[1] || "400"),
        r = t[2] === "italic" ? "italic" : "normal";
      return { weight: n, style: r };
    }
    parseSelector(e) {
      if (!e.startsWith(tu)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(tu, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${tu}${e}-${t}`;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          n.variants.forEach((r) => {
            var i;
            let o = n.family,
              s = this.getFontFamilyByName(o);
            s || (s = this.addFontFamily(o));
            let a = Qr.parseVariant(r) ?? {},
              { weight: l, style: c } = a,
              u = Qr.createSelector(o, r),
              {
                variantBold: f,
                variantItalic: d,
                variantBoldItalic: p,
              } = Ck(r, n.variants, Qr.parseVariant),
              y = {
                family: s,
                variant: r,
                selector: u,
                selectorBold: f ? Qr.createSelector(o, f) : void 0,
                selectorBoldItalic: p ? Qr.createSelector(o, p) : void 0,
                selectorItalic: d ? Qr.createSelector(o, d) : void 0,
                weight: l,
                style: c,
                category: A5(n.category),
                file:
                  (i = n.files[r]) == null
                    ? void 0
                    : i.replace("http://", "https://"),
              };
            s.fonts.push(y), t.push(y);
          });
        }),
        t
      );
    }
  };
function A5(e) {
  let t = {
    serif: "serif",
    "sans-serif": "sans-serif",
    display: "display",
    handwriting: "handwriting",
    monospace: "monospace",
  };
  if (e) return t[e];
}
var V5 = Bn(fF(), 1),
  zS = 5e3,
  B5 = 3,
  Rk = class extends Error {
    constructor(e) {
      super(e), (this.name = "FontLoadingError");
    }
  },
  Op = new Map(),
  Dp = new Map(),
  $5 = (e, t) => Pk(e, t);
async function Pk(e, t, n = 0) {
  let { family: r, url: i, stretch: o, unicodeRange: s } = e,
    a = e.weight || 500,
    l = e.style || "normal",
    c = `${r}-${l}-${a}-${i}`;
  if (!Op.has(c) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: me(a) ? a : a?.toString(),
        style: l,
        stretch: o,
        unicodeRange: s,
      }),
      f = u
        .load()
        .then(() => (t.fonts.add(u), _k(r, l, a)))
        .catch((d) => {
          if (d.name !== "NetworkError") throw d;
          if (n < B5) return Pk(e, t, n + 1);
          throw new Rk(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify(
              {
                family: r,
                style: l,
                weight: a,
                url: i,
                stretch: o,
                unicodeRange: s,
              }
            )}`
          );
        });
    Op.set(c, f);
  }
  await Op.get(c);
}
async function _k(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!Dp.has(r)) {
    let o = new V5.default(e, { style: t, weight: n }).load(null, zS);
    Dp.set(r, o);
  }
  try {
    await Dp.get(r);
  } catch {
    throw new Rk(
      `Failed to check if font is ready (${zS}ms timeout exceeded): ${JSON.stringify(
        { family: e, style: t, weight: n }
      )}`
    );
  }
}
var z5 = class {
    constructor() {
      R(this, "enabled", !1),
        R(this, "bySelector", new Map()),
        R(this, "getGoogleFontsListPromise"),
        R(this, "getFontshareFontsListPromise"),
        R(this, "loadedSelectors", new Set()),
        R(this, "googleFamilyNames", new Set()),
        R(this, "local"),
        R(this, "google"),
        R(this, "fontshare"),
        R(this, "framer"),
        R(this, "custom"),
        (this.local = new C5()),
        (this.google = new Qr()),
        (this.fontshare = new qr()),
        (this.framer = new $S()),
        (this.custom = new P5()),
        (this.bySelector = new Map()),
        this.importLocalFonts();
    }
    addFont(e) {
      this.bySelector.set(e.selector, e);
    }
    getAvailableFonts() {
      return Array.from(this.bySelector.values());
    }
    importLocalFonts() {
      for (let e of this.local.importFonts()) this.addFont(e), this.loadFont(e);
    }
    async importGoogleFonts() {
      if (!this.getGoogleFontsListPromise) {
        this.getGoogleFontsListPromise = et.fetchGoogleFontsList();
        let e = await this.getGoogleFontsListPromise;
        for (let t of this.google.importFonts(e))
          this.googleFamilyNames.add(t.family.name.toLowerCase()),
            this.addFont(t);
      }
      return this.getGoogleFontsListPromise;
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = et.fetchFontshareFontsList();
        let e = await this.getFontshareFontsListPromise;
        for (let t of this.fontshare.importFonts(e))
          this.googleFamilyNames.has(t.family.name.toLowerCase()) ||
            this.addFont(t);
      }
      return this.getFontshareFontsListPromise;
    }
    importFramerFonts(e) {
      this.framer.importFonts(e).forEach((t) => {
        this.addFont(t);
      });
    }
    importCustomFonts(e) {
      this.bySelector.forEach((t, n) => {
        n.startsWith($o) && this.bySelector.delete(n);
      });
      for (let t of this.custom.importFonts(e)) this.addFont(t);
    }
    getFontFamily(e) {
      return this[e.source].getFontFamilyByName(e.name);
    }
    getFontBySelector(e, t = !0) {
      if (e)
        return e.startsWith($o)
          ? this.custom.getFontBySelector(e, t)
          : this.bySelector.get(e);
    }
    getDraftPropertiesBySelector(e) {
      let t = this.getFontBySelector(e);
      if (t)
        return {
          style: t.style,
          weight: t.weight,
          variant: t.variant,
          family: t.family.name,
          source: t.family.source,
          category: t.category,
        };
      let n = this.google.parseSelector(e);
      if (n) {
        let o = Qr.parseVariant(n.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: n.variant,
            family: n.name,
            source: "google",
            category: void 0,
          };
      }
      let r = this.fontshare.parseSelector(e);
      if (r) {
        let o = qr.parseVariant(r.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: r.variant,
            family: r.name,
            source: "fontshare",
            category: void 0,
          };
      }
      let i = $S.getDraftFontPropertiesBySelector(e);
      return i || null;
    }
    isSelectorLoaded(e) {
      return this.loadedSelectors.has(e);
    }
    async loadFont(e) {
      if (this.isSelectorLoaded(e.selector)) return 0;
      let t = e.family.source;
      switch (t) {
        case "local":
          return this.loadedSelectors.add(e.selector), 1;
        case "framer":
          return (
            E5.default.env.NODE_ENV !== "test" &&
              (await _k(e.family.name, e.style, e.weight)),
            this.loadedSelectors.add(e.selector),
            1
          );
        case "google":
        case "fontshare":
        case "custom":
          return e.file
            ? (await $5(
                {
                  family: e.family.name,
                  url: e.file,
                  weight: e.weight,
                  style: e.style,
                },
                document
              ),
              this.loadedSelectors.add(e.selector),
              1)
            : Promise.reject(`Unable to load font: ${e.selector}`);
        default:
          Pt(t);
      }
    }
    async loadFontsFromSelectors(e) {
      if (!this.enabled) return [];
      let t = e.some((i) => i.startsWith(tu)),
        n = e.some((i) => i.startsWith(eu));
      if (t || n) {
        try {
          await this.importGoogleFonts();
        } catch (i) {
          ba("Failed to load Google fonts:", i);
        }
        try {
          await this.importFontshareFonts();
        } catch (i) {
          ba("Failed to load Fontshare fonts:", i);
        }
      }
      let r = e.map((i) => this.bySelector.get(i)).filter((i) => !!i);
      return Promise.allSettled(r.map((i) => this.loadFont(i)));
    }
    async loadFonts(e) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
          (r) => r.status === "fulfilled" && r.value === 1
        ).length,
      };
    }
    async loadMissingFonts(e, t) {
      let n = e.filter((i) => !Mi.isSelectorLoaded(i));
      if (n.length === 0) return;
      await Mi.loadWebFontsFromSelectors(n),
        n.every((i) => Mi.isSelectorLoaded(i)) && t && t();
    }
    async loadWebFontsFromSelectors(e) {
      return this.loadFontsFromSelectors(e);
    }
    get defaultFont() {
      let e = this.getFontBySelector("Inter");
      return he(e, "Can\u2019t find Inter font"), e;
    }
  },
  Mi = new z5();
Promise.allSettled =
  Promise.allSettled ||
  ((e) =>
    Promise.all(
      e.map((t) =>
        t
          .then((n) => ({ status: "fulfilled", value: n }))
          .catch((n) => ({ status: "rejected", reason: n }))
      )
    ));
var Ik = ((e) => (
    (e.Padding = "--framer-input-padding"),
    (e.BorderRadiusTopLeft = "--framer-input-border-radius-top-left"),
    (e.BorderRadiusTopRight = "--framer-input-border-radius-top-right"),
    (e.BorderRadiusBottomRight = "--framer-input-border-radius-bottom-right"),
    (e.BorderRadiusBottomLeft = "--framer-input-border-radius-bottom-left"),
    (e.BorderColor = "--framer-input-border-color"),
    (e.BorderTopWidth = "--framer-input-border-top-width"),
    (e.BorderRightWidth = "--framer-input-border-right-width"),
    (e.BorderBottomWidth = "--framer-input-border-bottom-width"),
    (e.BorderLeftWidth = "--framer-input-border-left-width"),
    (e.BorderStyle = "--framer-input-border-style"),
    (e.Background = "--framer-input-background"),
    (e.FontFamily = "--framer-input-font-family"),
    (e.FontWeight = "--framer-input-font-weight"),
    (e.FontSize = "--framer-input-font-size"),
    (e.FontColor = "--framer-input-font-color"),
    (e.FontLetterSpacing = "--framer-input-font-letter-spacing"),
    (e.FontTextAlignment = "--framer-input-font-text-alignment"),
    (e.FontLineHeight = "--framer-input-font-line-height"),
    (e.PlaceholderColor = "--framer-input-placeholder-color"),
    (e.BoxShadow = "--framer-input-box-shadow"),
    (e.FocusedBorderColor = "--framer-input-focused-border-color"),
    (e.FocusedBorderWidth = "--framer-input-focused-border-width"),
    (e.FocusedBorderStyle = "--framer-input-focused-border-style"),
    (e.FocusedBackground = "--framer-input-focused-background"),
    (e.FocusedBoxShadow = "--framer-input-focused-box-shadow"),
    (e.FocusedTransition = "--framer-input-focused-transition"),
    (e.BooleanCheckedBackground = "--framer-input-boolean-checked-background"),
    (e.BooleanCheckedBorderColor =
      "--framer-input-boolean-checked-border-color"),
    (e.BooleanCheckedBorderWidth =
      "--framer-input-boolean-checked-border-width"),
    (e.BooleanCheckedBorderStyle =
      "--framer-input-boolean-checked-border-style"),
    (e.BooleanCheckedBoxShadow = "--framer-input-boolean-checked-box-shadow"),
    (e.BooleanCheckedTransition = "--framer-input-boolean-checked-transition"),
    (e.InvalidTextColor = "--framer-input-invalid-text-color"),
    (e.IconBackgroundImage = "--framer-input-icon-image"),
    (e.IconMaskImage = "--framer-input-icon-mask-image"),
    (e.IconColor = "--framer-input-icon-color"),
    (e.WrapperHeight = "--framer-input-wrapper-height"),
    e
  ))(Ik || {}),
  ye = Ik,
  NS = "framer-form-input",
  N5 = "framer-form-input-wrapper";
function H5(e) {
  return typeof e == "number"
    ? e
    : e.startsWith("--")
    ? gt.variable(e)
    : e === ""
    ? '""'
    : e;
}
function gt(e, t) {
  let n = " ";
  for (let r in t) {
    let i = t[r];
    n += `${r.replace(/([A-Z])/gu, "-$1").toLowerCase()}: ${H5(i)}; `;
  }
  return e + " {" + n + "}";
}
((e) => {
  function t(...n) {
    let r = n[n.length - 1],
      i = r.startsWith("--") ? `var(${r})` : r;
    for (let o = n.length - 2; o >= 0; o--) i = `var(${n[o]}, ${i})`;
    return i;
  }
  e.variable = t;
})(gt || (gt = {}));
var H8 = [
  gt(`.${NS}`, {
    padding: gt.variable(ye.Padding),
    background: "transparent",
    fontFamily: gt.variable(ye.FontFamily),
    fontWeight: gt.variable(ye.FontWeight),
    fontSize: gt.variable(ye.FontSize),
    color: gt.variable(ye.FontColor),
    border: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    height: gt.variable(ye.WrapperHeight, "100%"),
    letterSpacing: gt.variable(ye.FontLetterSpacing),
    textAlign: gt.variable(ye.FontTextAlignment),
    lineHeight: gt.variable(ye.FontLineHeight),
  }),
  gt(`.${NS}:focus-visible`, { outline: "none" }),
];
var j8 = `var(${ye.BorderTopWidth}) var(${ye.BorderRightWidth}) var(${ye.BorderBottomWidth}) var(${ye.BorderLeftWidth})`,
  W8 = [
    `.${N5}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${ye.BorderRadiusTopLeft});
        border-top-right-radius: var(${ye.BorderRadiusTopRight});
        border-bottom-right-radius: var(${ye.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${ye.BorderRadiusBottomLeft});
        border-color: var(${ye.BorderColor});
        border-top-width: var(${ye.BorderTopWidth});
        border-right-width: var(${ye.BorderRightWidth});
        border-bottom-width: var(${ye.BorderBottomWidth});
        border-left-width: var(${ye.BorderLeftWidth});
        border-style: var(${ye.BorderStyle});
        transition: var(${ye.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;
    }`,
  ];
var Ap = 16,
  U8 = {
    content: "",
    display: "block",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: `${Ap}px`,
    boxSizing: "content-box",
    padding: gt.variable(ye.Padding),
    border: "none",
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${Ap}px`,
    maskRepeat: "no-repeat",
    maskSize: `${Ap}px`,
    backgroundColor: gt.variable(ye.IconColor),
  };
var eH = b.forwardRef(function (t, n) {
  let { background: r, children: i, alt: o, ...s } = t,
    a = { ...s.style };
  r && delete a.background;
  let l = hu(t.as);
  return oe(l, {
    ...s,
    style: a,
    ref: n,
    children: [r && C(Ow, { image: r, alt: o }), i],
  });
});
function Fk(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
var j5 = /[^\p{Letter}\p{Number}()]+/gu,
  W5 = /^-+|-+$/gu;
function U5(e) {
  return e.toLowerCase().replace(j5, "-").replace(W5, "");
}
var X5 = /[&<>'"]/g,
  Y5 = (e) =>
    e.replace(
      X5,
      (t) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[t] || t)
    ),
  G5 =
    /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function Lk(e, t, n, r) {
  return e.replace(G5, (i, o, s, a, l, c, u) => {
    var f, d;
    if (s.toLowerCase() !== "a") return i;
    let p = l || c,
      y = dm(p.replace(/&amp;/g, "&"));
    if (!y || !y.target) return i;
    let g = t(y.target);
    if (!W1(g) || !W1(n)) return i;
    let S = g.path,
      m = n.path;
    if (!S || !m) return i;
    let h = ` data-framer-page-link-target="${y.target}"`,
      v = du(g, y.element ?? void 0);
    v && (h += ` data-framer-page-link-element="${y.element}"`);
    let x = lu(p);
    if (!x || me(x)) return i;
    pm(n, x, r) && (h += " data-framer-page-link-current");
    let k = S,
      w = Object.assign(
        {},
        r,
        (f = y.collectionItem) == null ? void 0 : f.pathVariables
      );
    if (
      (Object.keys(w).length > 0 && (k = k.replace(pk, (T, E) => "" + w[E])),
      (d = y.collectionItem) != null && d.pathVariables)
    ) {
      let T = new URLSearchParams(y.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${T}"`;
    }
    return (k = ZS(m, k)), o + a + `"${Y5(k + (v ? `#${v}` : ""))}"` + h + u;
  });
}
var K5 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  Mk = /[&<>"']/gu,
  q5 = (() => new RegExp(Mk.source))();
function HS(e) {
  return e && q5.test(e) ? e.replace(Mk, (t) => K5[t] ?? "") : e || "";
}
var jS = "{{ text-placeholder }}",
  Q5 = "rich-text-wrapper",
  Z5 = We(function (t, n) {
    let {
        id: r,
        name: i,
        html: o,
        htmlFromDesign: s,
        text: a,
        textFromDesign: l,
        fonts: c = [],
        width: u,
        height: f,
        left: d,
        right: p,
        top: y,
        bottom: g,
        center: S,
        className: m,
        stylesPresetsClassName: h,
        visible: v = !0,
        opacity: x,
        rotation: k = 0,
        verticalAlignment: w = "top",
        isEditable: T = !1,
        willChangeTransform: E,
        environment: F = K.current,
        withExternalLayout: I = !1,
        positionSticky: D,
        positionStickyTop: $,
        positionStickyRight: J,
        positionStickyBottom: Z,
        positionStickyLeft: B,
        __htmlStructure: j,
        __fromCanvasComponent: te = !1,
        _forwardedOverrideId: ne,
        _forwardedOverrides: U,
        _usesDOMRect: re,
        children: ie,
        ...be
      } = t,
      de = Qo(),
      ee = Jo(t),
      yt = V(null),
      Be = n ?? yt,
      { navigate: Ye, getRoute: ct } = Ko(),
      yr = qo();
    hw(t.preload ?? []), Ma(t, Be);
    let ue = A(Vi),
      Qn = ku(),
      Ht = a,
      In = ne ?? r;
    if (In && U) {
      let $e = U[In];
      typeof $e == "string" && (Ht = $e);
    }
    let yn = "";
    if (Ht) {
      let $e = HS(Ht);
      yn = j ? j.replace(jS, $e) : `<p>${$e}</p>`;
    } else if (o) yn = o;
    else if (l) {
      let $e = HS(l);
      yn = j ? j.replace(jS, $e) : `<p>${$e}</p>`;
    } else s && (yn = s);
    let jt = hm(),
      $i = se(
        () => (Qn || !ct || !yr ? yn : Lk(yn, ct, yr, jt)),
        [Qn, yn, ct, yr, jt]
      );
    if (
      (N(() => {
        let $e = Be.current;
        if ($e === null) return;
        function Zn(Wt) {
          let ni = yu(Wt.target, Be.current);
          if (
            Wt.metaKey ||
            !Ye ||
            !ni ||
            ni.getAttribute("target") === "_blank"
          )
            return;
          hk(Ye, ni, jt) && Wt.preventDefault();
        }
        return (
          $e.addEventListener("click", Zn),
          () => {
            $e.removeEventListener("click", Zn);
          }
        );
      }, [Ye, jt]),
      Dk(c, te, Be),
      qe(() => {
        Zo();
      }, []),
      !v)
    )
      return null;
    let P = T && F() === K.canvas,
      _ = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: Ok(w),
        opacity: P ? 0 : x,
        flexShrink: 0,
      },
      M = K.hasRestrictions(),
      H = Wo(t, de || 0, !1),
      ae = re && (u === "auto" || f === "auto"),
      nt =
        !!t.transformTemplate || !H || !M || te || ae
          ? t.transformTemplate ?? La(S)
          : void 0;
    if (!I) {
      if (H && M && !ae) {
        let $e = Xe.getNumber(k).toFixed(4);
        (_.transform = `translate(${H.x}px, ${H.y}px) rotate(${$e}deg)`),
          (_.width = H.width),
          (_.minWidth = H.width),
          (_.height = H.height);
      } else
        (_.left = d),
          (_.right = p),
          (_.top = y),
          (_.bottom = g),
          (_.width = u),
          (_.height = f),
          (_.rotate = k);
      D
        ? (!Qn || ue) &&
          ((_.position = "sticky"),
          (_.willChange = "transform"),
          (_.zIndex = 1),
          (_.top = $),
          (_.right = J),
          (_.bottom = Z),
          (_.left = B))
        : Qn &&
          (t.positionFixed || t.positionAbsolute) &&
          (_.position = "absolute");
    }
    return (
      gu(t, _),
      lm(t, _),
      E && vu(_),
      Object.assign(_, t.style),
      C(Mt.div, {
        id: r,
        ref: Be,
        ...be,
        style: _,
        layoutId: ee,
        "data-framer-name": i,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": S,
        className: ka(m, h, Q5),
        transformTemplate: nt,
        dangerouslySetInnerHTML: { __html: $i },
      })
    );
  });
function Ok(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function Dk(e, t, n) {
  let r = V([]);
  Fk(r.current, e) ||
    ((r.current = e),
    Mi.loadFonts(e).then(({ newlyLoadedFontCount: i }) => {
      !t || !n.current || K.current() !== K.canvas || (i > 0 && Bw(n.current));
    }));
}
var WS = We(({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) =>
    C(Mt.svg, {
      ref: i,
      ...r,
      viewBox: t,
      children: C(Mt.foreignObject, {
        width: "100%",
        height: "100%",
        className: "framer-fit-text",
        transform: `scale(${e})`,
        style: { overflow: "visible", transformOrigin: "center center" },
        children: n,
      }),
    })
  ),
  J5 = We((e, t) => {
    let {
        __fromCanvasComponent: n = !1,
        _forwardedOverrideId: r,
        _forwardedOverrides: i,
        _usesDOMRect: o,
        anchorLinkOffsetY: s,
        as: a,
        bottom: l,
        center: c,
        children: u,
        environment: f = K.current,
        fonts: d = [],
        height: p,
        isEditable: y = !1,
        left: g,
        name: S,
        opacity: m,
        positionSticky: h,
        positionStickyBottom: v,
        positionStickyLeft: x,
        positionStickyRight: k,
        positionStickyTop: w,
        right: T,
        rotation: E = 0,
        style: F,
        _initialStyle: I,
        stylesPresetsClassNames: D,
        text: $,
        top: J,
        verticalAlignment: Z = "top",
        visible: B = !0,
        width: j,
        willChangeTransform: te,
        withExternalLayout: ne = !1,
        viewBox: U,
        viewBoxScale: re = 1,
        ...ie
      } = e,
      be = Qo(),
      de = ku(),
      ee = A(Vi),
      yt = Jo(e),
      Be = V(null),
      Ye = t ?? Be;
    Ma(e, Ye),
      Dk(d, n, Ye),
      qe(() => {
        Zo();
      }, []);
    let ct = se(() => {
      if (u) return Ak(u, D, $, s);
    }, [u, D, $, s]);
    if (!B) return null;
    let yr = y && f() === K.canvas,
      ue = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: Ok(Z),
        opacity: yr ? 0 : m,
        flexShrink: 0,
      },
      Qn = K.hasRestrictions(),
      Ht = Wo(e, be || 0, !1),
      In = o && (j === "auto" || p === "auto"),
      jt =
        !!e.transformTemplate || !Ht || !Qn || n || In
          ? e.transformTemplate ?? La(c)
          : void 0;
    ne ||
      (Ht && Qn && !In
        ? ((ue.x = Ht.x),
          (ue.y = Ht.y),
          (ue.rotate = Xe.getNumber(E)),
          (ue.width = Ht.width),
          (ue.minWidth = Ht.width),
          (ue.height = Ht.height))
        : ((ue.left = g),
          (ue.right = T),
          (ue.top = J),
          (ue.bottom = l),
          (ue.width = j),
          (ue.height = p),
          (ue.rotate = E)),
      h
        ? (!de || ee) &&
          ((ue.position = "sticky"),
          (ue.willChange = "transform"),
          (ue.zIndex = 1),
          (ue.top = w),
          (ue.right = k),
          (ue.bottom = v),
          (ue.left = x))
        : de &&
          (e.positionFixed || e.positionAbsolute) &&
          (ue.position = "absolute")),
      gu(e, ue),
      lm(e, ue),
      te && vu(ue),
      Object.assign(ue, I, F),
      yt && (ie.layout = "preserve-aspect");
    let $i = hu(e.as);
    return me(e.viewBox)
      ? e.as !== void 0
        ? C($i, {
            ...ie,
            ref: Ye,
            style: ue,
            layoutId: yt,
            transformTemplate: jt,
            "data-framer-name": S,
            "data-framer-component-type": "RichTextContainer",
            children: C(WS, {
              viewBox: U,
              viewBoxScale: re,
              style: { width: "100%", height: "100%" },
              children: ct,
            }),
          })
        : C(WS, {
            ...ie,
            ref: Ye,
            style: ue,
            layoutId: yt,
            viewBox: U,
            viewBoxScale: re,
            transformTemplate: jt,
            "data-framer-name": S,
            "data-framer-component-type": "RichTextContainer",
            children: ct,
          })
      : C($i, {
          ...ie,
          ref: Ye,
          style: ue,
          layoutId: yt,
          transformTemplate: jt,
          "data-framer-name": S,
          "data-framer-component-type": "RichTextContainer",
          children: ct,
        });
  });
function Ak(e, t, n, r, i = {}) {
  let o = Fn.toArray(e.props.children);
  me(n) && (o = o.slice(0, 1)),
    (o = o.map((l) => (Ut(l) ? Ak(l, t, n, r, i) : me(n) ? n : l)));
  let { ["data-preset-tag"]: s, ...a } = e.props;
  if (me(e.type) || rd(e.type)) {
    let l = n0(e.type) || e.type,
      c = s || l,
      u = me(c) ? t?.[c] : void 0;
    a.className = ka("framer-text", a.className, u);
    let f =
        l === "h1" ||
        l === "h2" ||
        l === "h3" ||
        l === "h4" ||
        l === "h5" ||
        l === "h6",
      d = t?.anchor;
    if (f && d) {
      let p = e4(o, i);
      a.id = p;
      let y = ka("framer-text", d),
        g = C("a", { href: `#${p}`, className: y, children: o });
      (a.style = { ...(a.style ?? {}), scrollMarginTop: r }), (o = [g]);
    }
  }
  return bn(e, a, ...o);
}
function e4(e, t) {
  let n = e.map(Gp).join(""),
    r = U5(n),
    i = t[r] ?? 0;
  return i > 0 && (r += `-${i}`), (t[r] = i + 1), r;
}
function Gp(e) {
  return me(e) || on(e)
    ? e.toString()
    : Ut(e)
    ? Gp(e.props.children)
    : Array.isArray(e)
    ? e.map(Gp).join("")
    : "";
}
var oH = We(({ children: e, html: t, htmlFromDesign: n, ...r }, i) => {
  let o = t || e || n;
  if (me(o)) {
    !r.stylesPresetsClassName &&
      Ve(r.stylesPresetsClassNames) &&
      (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(
        " "
      ));
    let s = { [me(t) ? "html" : "htmlFromDesign"]: o };
    return C(Z5, { ...r, ...s, ref: i });
  }
  if (!r.stylesPresetsClassNames && me(r.stylesPresetsClassName)) {
    let [s, a, l, c, u] = r.stylesPresetsClassName.split(" ");
    s === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0
      ? console.warn(
          `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
        )
      : (r.stylesPresetsClassNames = { h1: s, h2: a, h3: l, p: c, a: u });
  }
  return C(J5, { ...r, ref: i, children: Ut(o) ? o : void 0 });
});
function t4(e) {
  var t, n;
  let r = (e * Math.PI) / 180,
    i = { x: -Math.sin(r) * 100, y: Math.cos(r) * 100 },
    o = tn(i.x, i.y),
    s = vn(tn(0.5, 0.5), o),
    a = Q.points({ x: 0, y: 0, width: 1, height: 1 }),
    l = a
      .map((g) => ({ point: g, distance: tn.distance(o, g) }))
      .sort((g, S) => g.distance - S.distance),
    c = (t = l[0]) == null ? void 0 : t.point,
    u = (n = l[1]) == null ? void 0 : n.point;
  he(c && u, "linearGradientLine: Must have 2 closest points.");
  let [f, d] = a.filter((g) => !tn.isEqual(g, c) && !tn.isEqual(g, u));
  he(f && d, "linearGradientLine: Must have 2 opposing points.");
  let p = vn.intersection(s, vn(c, u)),
    y = vn.intersection(s, vn(f, d));
  return (
    he(p && y, "linearGradientLine: Must have a start and end point."), vn(p, y)
  );
}
function n4(e, t) {
  var n, r;
  let i = t4(e.angle),
    o = Oa(e),
    s = ((n = o[0]) == null ? void 0 : n.position) ?? 0,
    a = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1,
    l = vn.pointAtPercentDistance(i, s),
    c = vn.pointAtPercentDistance(i, a),
    u = no([s, a], [0, 1]);
  return {
    id: `id${t}g${Sa.hash(e)}`,
    x1: l.x,
    y1: l.y,
    x2: c.x,
    y2: c.y,
    stops: o.map((f) => ({
      color: f.value,
      alpha: sm.getAlpha(f.value) * e.alpha,
      position: u(f.position),
    })),
  };
}
function r4(e, t) {
  return {
    id: `id${t}g${wa.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Oa(e).map((n) => ({
      color: n.value,
      alpha: sm.getAlpha(n.value) * e.alpha,
      position: n.position,
    })),
  };
}
function Vk(e) {
  if (!me(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    r = parseFloat(n);
  return on(r);
}
function Bk(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return on(n) ? n : 50;
}
function US(e) {
  return Vk(e) ? Bk(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : 0.5;
}
function XS(e) {
  return Vk(e) ? Bk(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : 0.5;
}
function i4(e, t, n, r) {
  if (
    ((e = Xe.get(e, "#09F")),
    !Ii.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
  )
    return;
  let i = e.pixelWidth,
    o = e.pixelHeight,
    s,
    { fit: a } = e,
    l = 1,
    c = 1,
    u = 0,
    f = 0;
  if (a === "fill" || a === "fit" || a === "tile" || !a) {
    let p = 1,
      y = 1,
      g = i / o,
      S = t.height * g,
      m = t.width / g,
      h = S / t.width,
      v = m / t.height;
    if (a === "tile") {
      e.backgroundSize ?? (e.backgroundSize = 1),
        (l = Math.round(e.backgroundSize * (i / 2))),
        (c = Math.round(e.backgroundSize * (o / 2)));
      let x = t.x ?? 0,
        k = t.y ?? 0,
        w = 0,
        T = 0;
      r && ((w = x), (T = k)),
        (u = (t.width - l) * US(e.positionX) + w),
        (f = (t.height - c) * XS(e.positionY) + T),
        (s = `translate(${u + x}, ${f + k})`);
    } else
      (a === "fill" || !a ? v > h : v < h)
        ? ((y = v), (f = (1 - v) * XS(e.positionY)))
        : ((p = h), (u = (1 - h) * US(e.positionX))),
        (s = `translate(${u}, ${f}) scale(${p}, ${y})`);
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? "",
    transform: s,
    width: l,
    height: c,
    offsetX: u,
    offsetY: f,
  };
}
var o4 = "framer/asset-reference,";
function s4(e) {
  return e.startsWith(`data:${o4}`);
}
function a4(e, t) {
  if (/^\w+:/.test(e) && !s4(e)) return e;
  typeof t != "number"
    ? (t = void 0)
    : t <= 512
    ? (t = 512)
    : t <= 1024
    ? (t = 1024)
    : t <= 2048
    ? (t = 2048)
    : (t = 4096);
  let n = K.current() === K.export;
  return et.assetResolver(e, { pixelSize: t, isExport: n }) ?? "";
}
var l4 = ({
    id: e,
    path: t,
    transform: n,
    repeat: r,
    width: i,
    height: o,
    offsetX: s,
    offsetY: a,
  }) => {
    let l = a4(t);
    return C("pattern", {
      id: e,
      width: r ? i : "100%",
      height: r ? o : "100%",
      patternContentUnits: r ? void 0 : "objectBoundingBox",
      patternUnits: r ? "userSpaceOnUse" : void 0,
      x: r ? s : void 0,
      y: r ? a : void 0,
      children: C(
        "image",
        {
          width: r ? i : 1,
          height: r ? o : 1,
          href: l,
          preserveAspectRatio: "none",
          transform: r ? void 0 : n,
          x: r ? 0 : void 0,
          y: r ? 0 : void 0,
        },
        l
      ),
    });
  },
  YS = Jr(),
  c4 = class {
    constructor(e, t, n, r, i = 0) {
      (this.id = e),
        (this.svg = t),
        (this.innerHTML = n),
        (this.viewBox = r),
        (this.count = i);
    }
  },
  u4 = class {
    constructor() {
      R(this, "entries", new Map());
    }
    debugGetEntries() {
      return this.entries;
    }
    subscribe(e, t, n) {
      if (!e || e === "") return "";
      let r = this.entries.get(e);
      if (!r) {
        n || (n = "svg" + String(Hw(e)) + "_" + String(e.length));
        let i = e,
          o,
          s = f4(e);
        s && (t && d4(s, n), (s.id = n), (o = v4(s)), (i = s.outerHTML)),
          (r = this.createDOMElementFor(i, n, o)),
          this.entries.set(e, r);
      }
      return (r.count += 1), r.innerHTML;
    }
    getViewBox(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      return t?.viewBox;
    }
    unsubscribe(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      t &&
        ((t.count -= 1),
        !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
    }
    maybeRemoveEntry(e) {
      let t = this.entries.get(e);
      t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
    }
    removeDOMElement(e) {
      let t = "container_" + e.id;
      if (YS) {
        let n = document?.querySelector("#" + t);
        n?.remove();
      }
    }
    createDOMElementFor(e, t, n) {
      let r = "container_" + t;
      if (YS) {
        let a = document.querySelector("#svg-templates");
        if (
          (a ||
            ((a = document.createElement("div")),
            (a.id = "svg-templates"),
            (a.style.position = "absolute"),
            (a.style.top = "0"),
            (a.style.left = "0"),
            (a.style.width = "0"),
            (a.style.height = "0"),
            (a.style.overflow = "hidden"),
            document.body.appendChild(a)),
          !document.querySelector("#" + r))
        ) {
          let l = document.createElement("div");
          (l.id = r),
            (l.innerHTML = e),
            l.firstElementChild && (l.firstElementChild.id = t),
            a.appendChild(l);
        }
      }
      let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
        s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%"${
          i ? ` viewBox="${i}"` : ""
        }><use href="#${t}"></use></svg>`;
      return new c4(t, e, s, i);
    }
    clear() {
      this.entries.clear();
    }
    generateTemplates() {
      let e = [],
        t =
          "position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0";
      e.push(`<div id="svg-templates" style="${t}">`);
      for (let n of this.entries.values()) {
        let r = "container_" + n.id;
        e.push(`  <div id="${r}">`), e.push(`    ${n.svg}`), e.push("  </div>");
      }
      return (
        e.push("</div>"),
        e.join(`
`)
      );
    }
  },
  Vo = new u4();
function f4(e) {
  if (typeof DOMParser > "u") {
    console.warn("unable to find DOMParser");
    return;
  }
  try {
    let r = new DOMParser()
      .parseFromString(e, "text/html")
      .getElementsByTagName("svg")[0];
    if (!r) throw Error("no svg element found");
    return r;
  } catch {
    return;
  }
}
function d4(e, t) {
  let n = h4(t);
  $k(e, n);
}
function h4(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "");
}
function $k(e, t) {
  p4(e, t),
    Array.from(e.children).forEach((r) => {
      $k(r, t);
    });
}
function p4(e, t) {
  e.getAttributeNames().forEach((r) => {
    let i = e.getAttribute(r);
    if (!i) return;
    if (
      (r === "id" && e.setAttribute(r, `${t}_${i}`),
      r === "href" || r === "xlink:href")
    ) {
      let [s, a] = i.split("#");
      if (s) return;
      e.setAttribute(r, `#${t}_${a}`);
      return;
    }
    let o = "url(#";
    if (i.includes(o)) {
      let s = i.replace(o, `${o}${t}_`);
      e.setAttribute(r, s);
    }
  });
}
var m4 = (() => ({
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16,
}))();
function GS(e) {
  var t;
  if (!e) return;
  let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (
    !(n?.[1] === void 0 || n?.[2] === void 0) &&
    !((t = n[2]) != null && t.startsWith("%"))
  )
    return Math.round(parseFloat(n[1]) * (m4[n[2]] || 1));
}
function v4(e) {
  let t = GS(e.getAttribute("width")),
    n = GS(e.getAttribute("height"));
  if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function cH(e) {
  let t = Qo(),
    n = Jo(e),
    r = b.useRef(null),
    i = x5();
  return (
    Ma(e, r),
    C(w4, { ...e, innerRef: r, parentSize: t, layoutId: n, providedWindow: i })
  );
}
var g4 = 5e4;
function y4(e) {
  return e.indexOf("image") >= 0;
}
function b4(e) {
  return e.indexOf("var(--") >= 0;
}
function x4(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function KS(e, t) {
  var n, r;
  let i = e.current;
  if (!i) return;
  let o = t.providedWindow ?? zt,
    s = i.firstElementChild;
  if (!s || !(s instanceof o.SVGSVGElement)) return;
  if (!s.getAttribute("viewBox")) {
    let p = Vo.getViewBox(t.svg);
    p && s.setAttribute("viewBox", p);
  }
  let { withExternalLayout: a, parentSize: l } = t;
  if (!a && Fa(t) && l !== 1 && l !== 2) return;
  let { intrinsicWidth: u, intrinsicHeight: f, _constraints: d } = t;
  ((n = s.viewBox.baseVal) == null ? void 0 : n.width) === 0 &&
    ((r = s.viewBox.baseVal) == null ? void 0 : r.height) === 0 &&
    Y(u) &&
    Y(f) &&
    s.setAttribute("viewBox", `0 0 ${u} ${f}`),
    d && d.aspectRatio
      ? s.setAttribute("preserveAspectRatio", "")
      : s.setAttribute("preserveAspectRatio", "none"),
    s.setAttribute("width", "100%"),
    s.setAttribute("height", "100%");
}
function S4() {
  return (
    b.useInsertionEffect(() => {
      Zo();
    }, []),
    null
  );
}
var w4 = (() => {
  var e;
  return (
    (e = class extends Ho {
      constructor() {
        super(...arguments),
          R(this, "container", b.createRef()),
          R(this, "svgElement", null),
          R(this, "setSVGElement", (t) => {
            (this.svgElement = t), this.setLayerElement(t);
          }),
          R(this, "previouslyRenderedSVG", ""),
          R(this, "unmountedSVG", "");
      }
      static frame(t) {
        return Wo(t, t.parentSize || 0);
      }
      get frame() {
        return Wo(this.props, this.props.parentSize || 0);
      }
      componentDidMount() {
        if (this.unmountedSVG) {
          let { svgContentId: t } = this.props,
            n = t ? "svg" + t : null;
          Vo.subscribe(this.unmountedSVG, !t, n),
            (this.previouslyRenderedSVG = this.unmountedSVG);
        }
        this.props.svgContentId || KS(this.container, this.props);
      }
      componentWillUnmount() {
        Vo.unsubscribe(this.previouslyRenderedSVG),
          (this.unmountedSVG = this.previouslyRenderedSVG),
          (this.previouslyRenderedSVG = "");
      }
      componentDidUpdate(t) {
        if ((super.componentDidUpdate(t), this.props.svgContentId)) return;
        let { fill: n } = this.props;
        Ii.isImageObject(n) &&
          Ii.isImageObject(t.fill) &&
          n.src !== t.fill.src &&
          Nw(this.svgElement, "fill", null, !1),
          KS(this.container, this.props);
      }
      collectLayout(t, n) {
        if (this.props.withExternalLayout) {
          (n.width = "100%"), (n.height = "100%"), (n.aspectRatio = "inherit");
          return;
        }
        let r = this.frame,
          {
            rotation: i,
            intrinsicWidth: o,
            intrinsicHeight: s,
            width: a,
            height: l,
          } = this.props,
          c = Xe.getNumber(i);
        if (
          ((t.opacity = Y(this.props.opacity) ? this.props.opacity : 1),
          K.hasRestrictions() && r)
        ) {
          Object.assign(t, {
            transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(
              4
            )}deg)`,
            width: `${r.width}px`,
            height: `${r.height}px`,
          }),
            Fa(this.props) && (t.position = "absolute");
          let u = r.width / (o || 1),
            f = r.height / (s || 1);
          n.transformOrigin = "top left";
          let { zoom: d, target: p } = ru;
          if (p === K.export) {
            let y = d > 1 ? d : 1;
            (n.transform = `scale(${u * y}, ${f * y})`), (n.zoom = 1 / y);
          } else n.transform = `scale(${u}, ${f})`;
          o && s && ((n.width = o), (n.height = s));
        } else {
          let { left: u, right: f, top: d, bottom: p } = this.props;
          Object.assign(t, {
            left: u,
            right: f,
            top: d,
            bottom: p,
            width: a,
            height: l,
            rotate: c,
          }),
            Object.assign(n, {
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
            });
        }
      }
      render() {
        let {
          id: t,
          visible: n,
          style: r,
          fill: i,
          svg: o,
          intrinsicHeight: s,
          intrinsicWidth: a,
          title: l,
          description: c,
          layoutId: u,
          className: f,
          variants: d,
          withExternalLayout: p,
          innerRef: y,
          svgContentId: g,
          height: S,
          opacity: m,
          width: h,
          ...v
        } = this.props;
        if (!p && (!n || !t)) return null;
        let x = t ?? u ?? "svg",
          k = this.frame,
          w = k || { width: a || 100, height: s || 100 },
          T = { ...r, imageRendering: "pixelated", flexShrink: 0 },
          E = {};
        this.collectLayout(T, E),
          UD(this.props, T),
          gu(this.props, T),
          Ho.applyWillChange(this.props, T, !1);
        let F = null;
        if (typeof i == "string" || W.isColorObject(i)) {
          let U = W.isColorObject(i) ? i.initialValue || W.toRgbString(i) : i;
          (T.fill = U), (T.color = U);
        } else if (Sa.isLinearGradient(i)) {
          let U = i,
            re = `${encodeURI(t || "")}g${Sa.hash(U)}`;
          T.fill = `url(#${re})`;
          let { stops: ie, x1: be, x2: de, y1: ee, y2: yt } = n4(U, x);
          F = C("svg", {
            ref: this.setSVGElement,
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            style: { position: "absolute" },
            children: C("linearGradient", {
              id: re,
              x1: be,
              x2: de,
              y1: ee,
              y2: yt,
              children: ie.map((Be, Ye) =>
                C(
                  "stop",
                  {
                    offset: Be.position,
                    stopColor: Be.color,
                    stopOpacity: Be.alpha,
                  },
                  Ye
                )
              ),
            }),
          });
        } else if (wa.isRadialGradient(i)) {
          let U = i,
            re = `${encodeURI(t || "")}g${wa.hash(U)}`;
          T.fill = `url(#${re})`;
          let ie = r4(U, x);
          F = C("svg", {
            ref: this.setSVGElement,
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            style: { position: "absolute" },
            children: C("radialGradient", {
              id: re,
              cy: U.centerAnchorY,
              cx: U.centerAnchorX,
              r: U.widthFactor,
              children: ie.stops.map((be, de) =>
                C(
                  "stop",
                  {
                    offset: be.position,
                    stopColor: be.color,
                    stopOpacity: be.alpha,
                  },
                  de
                )
              ),
            }),
          });
        } else if (Ii.isImageObject(i)) {
          let U = i4(i, w, x);
          U &&
            ((T.fill = `url(#${U.id})`),
            (F = C("svg", {
              ref: this.setSVGElement,
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              width: "100%",
              height: "100%",
              style: { position: "absolute" },
              children: C("defs", { children: C(l4, { ...U }) }),
            })));
        }
        let I = { "data-framer-component-type": "SVG" },
          D = !k;
        D && Object.assign(I, rm(this.props.center));
        let $ =
            !F &&
            !T.fill &&
            !T.background &&
            !T.backgroundImage &&
            o.length < g4 &&
            !y4(o) &&
            !b4(o),
          J = null;
        if ($)
          (T.backgroundSize = "100% 100%"),
            (T.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(
              o
            )}')`),
            Vo.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = "");
        else {
          let U = g ? "svg" + g : null,
            re = Vo.subscribe(o, !g, U);
          Vo.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = o),
            x4(T) && (T.overflow = "hidden"),
            (J = oe(Re, {
              children: [
                F,
                C(
                  "div",
                  {
                    className: "svgContainer",
                    style: E,
                    ref: this.container,
                    dangerouslySetInnerHTML: { __html: re },
                  },
                  Ii.isImageObject(i) ? i.src : ""
                ),
              ],
            }));
        }
        let Z = hu(this.props.as),
          { href: B, target: j, rel: te, onClick: ne } = this.props;
        return oe(Z, {
          ...I,
          ...v,
          layoutId: u,
          transformTemplate: D ? La(this.props.center) : void 0,
          id: t,
          ref: y,
          style: T,
          className: f,
          variants: d,
          tabIndex: this.props.tabIndex,
          role: l || c ? "img" : void 0,
          "aria-label": l,
          "aria-description": c,
          href: B,
          target: j,
          rel: te,
          onClick: ne,
          children: [J, C(S4, {})],
        });
      }
    }),
    R(e, "supportsConstraints", !0),
    R(e, "defaultSVGProps", {
      left: void 0,
      right: void 0,
      top: void 0,
      bottom: void 0,
      style: void 0,
      _constraints: { enabled: !0, aspectRatio: null },
      parentSize: 0,
      rotation: 0,
      visible: !0,
      svg: "",
      shadows: [],
    }),
    R(e, "defaultProps", { ...Ho.defaultProps, ...e.defaultSVGProps }),
    e
  );
})();
function k4(e = [], t = 5e3) {
  let n = e.filter((o) => !Mi.isSelectorLoaded(o)),
    [r, i] = b.useState(n.length ? "loading" : "done");
  return (
    b.useEffect(() => {
      if (!n.length) return;
      i("loading");
      let o = setTimeout(() => {
        i("timeout");
      }, t);
      Mi.loadFonts(n).then(() => {
        clearTimeout(o), i("done");
      });
    }, [e.join(", "), n.join(", ")]),
    r
  );
}
function C4() {
  return (
    b.useInsertionEffect(() => {
      Zo();
    }, []),
    null
  );
}
var hH = b.forwardRef(function (t, n) {
    let r = Qo(),
      i = Jo(t),
      o = V(null),
      s = n ?? o,
      { navigate: a, getRoute: l } = Ko(),
      c = qo();
    hw(t.preload ?? []);
    let u = ku(),
      f = WV(t.__link),
      d = k4(t.fonts);
    Ma(t, s);
    let { fonts: p, __fromCanvasComponent: y } = t,
      g = V([]),
      S = !Fk(g.current ?? [], p ?? []);
    (g.current = p),
      N(() => {
        !S ||
          !p ||
          Mi.loadFonts(p).then(({ newlyLoadedFontCount: x }) => {
            !y ||
              !s.current ||
              K.current() !== K.canvas ||
              (x !== 0 && Bw(s.current));
          });
      }, [p]);
    let m = hm(),
      h = b.useCallback(
        (x) => {
          let k = yu(x.target, s.current);
          if (x.metaKey || !a || !k) return;
          hk(a, k, m) && x.preventDefault();
        },
        [a, m]
      );
    N(() => {
      var x;
      (x = s.current) == null || x.addEventListener("click", h);
      let k = s.current;
      return () => k?.removeEventListener("click", h);
    }, [h]);
    let v = b.useMemo(
      () => (!t.rawHTML || u || !l || !c ? t.rawHTML : Lk(t.rawHTML, l, c, m)),
      [t.rawHTML, l, u, c, m]
    );
    return C(T4, {
      ...t,
      innerRef: s,
      layoutId: i,
      parentSize: r,
      fontLoadStatus: d,
      rawHTML: v,
      matchesCurrentRoute: f,
    });
  }),
  T4 = (() => {
    var e;
    return (
      (e = class extends Ho {
        constructor() {
          super(...arguments),
            R(this, "editorText"),
            R(this, "setElement", (t) => {
              this.props.innerRef && (this.props.innerRef.current = t),
                this.setLayerElement(t);
            }),
            R(this, "renderMain", (t) => {
              let {
                font: n,
                visible: r,
                alignment: i,
                willChangeTransform: o,
                opacity: s,
                id: a,
                layoutId: l,
                className: c,
                transition: u,
                variants: f,
                name: d,
                __fromCanvasComponent: p,
                _initialStyle: y,
                widthType: g,
                heightType: S,
                _usesDOMRect: m,
                autoSize: h,
                style: v,
                fontLoadStatus: x,
                matchesCurrentRoute: k,
                preload: w,
                tabIndex: T,
                ...E
              } = this.props;
              if (!r) return null;
              let F =
                  this.props.isEditable &&
                  this.props.environment() === K.canvas,
                D = {
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: A4(this.props.verticalAlignment),
                  opacity: F ? 0 : s,
                  flexShrink: 0,
                };
              if (y)
                for (let j in y)
                  j.startsWith("--framer") && (Ee(D)[j] = Ee(y)[j]);
              let $ = {
                "data-framer-component-type": "Text",
                "data-framer-name": d,
              };
              h && (Ee($)["data-framer-component-text-autosized"] = "true"),
                this.collectLayout(D, t),
                gu(this.props, D),
                lm(this.props, D),
                (D.opacity === 1 || D.opacity === void 0) && delete D.opacity,
                o && vu(D);
              let J = this.props.rawHTML,
                Z = this.getOverrideText() || this.props.text;
              me(Z) &&
                (J ? (J = D4(J, Z)) : (J = `<p style="font: ${n}">${Z}</p>`)),
                this.props.style && Object.assign(D, this.props.style);
              let B = this.transformTemplate;
              if ((B && Object.assign($, rm(this.props.center)), J)) {
                (D.lineHeight = "1px"),
                  (D.fontSize = "0px"),
                  K.current() === K.canvas &&
                    x === "loading" &&
                    (D.visibility = "hidden"),
                  K.current() === K.canvas &&
                    x === "timeout" &&
                    (D.backgroundColor = "rgba(255, 0, 0, 0.3)"),
                  Object.assign(D, v),
                  i && (Ee(D)["--framer-text-alignment"] = i);
                let j = V4(T);
                return C(Mt.div, {
                  layoutId: l,
                  id: a,
                  ...j,
                  ...$,
                  ...E,
                  style: D,
                  transformTemplate: B,
                  dangerouslySetInnerHTML: { __html: J },
                  "data-center": this.props.center,
                  className: ka(c, k && "isCurrent"),
                  transition: u,
                  variants: f,
                  ref: this.setElement,
                });
              }
            });
        }
        get frame() {
          return Wo(this.props, this.props.parentSize || 0, !1);
        }
        getOverrideText() {
          let {
              _forwardedOverrideId: t,
              _forwardedOverrides: n,
              id: r,
            } = this.props,
            i = t ?? r;
          if (i && n) {
            let o = n[i];
            if (me(o)) return o;
          }
        }
        render() {
          return oe(Re, {
            children: [
              C(Vi.Consumer, { children: this.renderMain }),
              C(C4, {}),
            ],
          });
        }
        collectLayout(t, n) {
          if (this.props.withExternalLayout) return;
          let r = this.frame,
            {
              rotation: i,
              autoSize: o,
              positionSticky: s,
              positionStickyTop: a,
              positionStickyRight: l,
              positionStickyBottom: c,
              positionStickyLeft: u,
              width: f,
              height: d,
              _usesDOMRect: p,
              positionFixed: y,
              positionAbsolute: g,
            } = this.props,
            S = Xe.getNumber(i);
          if (
            r &&
            !(p && (f === "auto" || d === "auto")) &&
            K.hasRestrictions()
          )
            Object.assign(t, {
              transform: `translate(${r.x}px, ${r.y}px) rotate(${S.toFixed(
                4
              )}deg)`,
              width: o ? "auto" : `${r.width}px`,
              minWidth: `${r.width}px`,
              height: `${r.height}px`,
            });
          else {
            let { left: v, right: x, top: k, bottom: w } = this.props,
              T,
              E;
            o
              ? ((T = "auto"), (E = "auto"))
              : ((!Y(v) || !Y(x)) && (T = f), (!Y(k) || !Y(w)) && (E = d)),
              Object.assign(t, {
                left: v,
                right: x,
                top: k,
                bottom: w,
                width: T,
                height: E,
                rotate: S,
              });
          }
          let h = K.current() === K.canvas;
          s
            ? (!h || n) &&
              ((t.position = "sticky"),
              (t.willChange = "transform"),
              (t.zIndex = 1),
              (t.top = a),
              (t.right = l),
              (t.bottom = c),
              (t.left = u))
            : h && (y || g) && (t.position = "absolute");
        }
        get transformTemplate() {
          let {
            _usesDOMRect: t,
            widthType: n,
            heightType: r,
            __fromCanvasComponent: i,
          } = this.props;
          if (this.props.transformTemplate) return this.props.transformTemplate;
          let o = this.frame,
            s = t && (n === 2 || r === 2);
          if (!o || !K.hasRestrictions() || i || s)
            return La(this.props.center);
        }
      }),
      R(e, "supportsConstraints", !0),
      R(e, "defaultTextProps", {
        opacity: void 0,
        left: void 0,
        right: void 0,
        top: void 0,
        bottom: void 0,
        _constraints: { enabled: !0, aspectRatio: null },
        rotation: 0,
        visible: !0,
        alignment: void 0,
        verticalAlignment: "top",
        shadows: [],
        font: "16px " + PO(),
      }),
      R(e, "defaultProps", {
        ...Ho.defaultProps,
        ...e.defaultTextProps,
        isEditable: !1,
        environment: K.current,
        withExternalLayout: !1,
        fontLoadStatus: "loading",
      }),
      e
    );
  })(),
  E4 = "(?:<a[^>]*>)?",
  R4 = "(?:</a>)?",
  P4 = "<[^>]+>",
  _4 = "</[^>]+>",
  I4 = "<(?:div|span)[^>]*>",
  F4 = "</(?:div|span)>",
  L4 = "<[^>]+>",
  M4 = "</[^>]+>",
  O4 = (() =>
    new RegExp(
      `^(${E4}${P4}${I4}${L4}).*?(${M4}).*?(${F4}${_4}${R4})$`,
      "s"
    ))();
function D4(e, t) {
  return e.replace(O4, (n, r, i, o) => r + t + i + "<br>" + o);
}
function A4(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function V4(e) {
  return e === void 0 ? {} : { tabIndex: e };
}
function xH(e, t, n) {
  let r = zk(t);
  !n?.supportsExplicitInterCodegen &&
    !r.some((i) => i.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r });
}
function SH(e) {
  return e.fonts ?? [];
}
function wH(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : zk(e);
}
function zk(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e) $4(r) ? n.push(r) : t.fonts.push(z4(r));
  return t.fonts.length > 0 && n.push(t), n;
}
var B4 = "explicitInter";
function $4(e) {
  return B4 in e;
}
function z4(e) {
  let t;
  return (
    e.url.startsWith("https://fonts.gstatic.com/s/")
      ? (t = "google")
      : e.url.startsWith("/third-party-assets/fontshare/")
      ? (t = "fontshare")
      : (t = "custom"),
    { ...e, source: t }
  );
}
function kH(e, t) {
  let n = `${e}-start`;
  performance.mark(n), t();
  let r = `${e}-end`;
  performance.mark(r), performance.measure(e, n, r);
}
gl.prototype.addChild = function ({ transformer: e = (t) => t }) {
  let t = De(e(this.get()));
  return this.onChange((n) => t.set(e(n))), t;
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ export {
  b as a,
  Fn as b,
  ri as c,
  bn as d,
  Ha as e,
  Am as f,
  We as g,
  vC as h,
  Hi as i,
  fe as j,
  A as k,
  N as l,
  ii as m,
  qe as n,
  ut as o,
  se as p,
  SC as q,
  V as r,
  St as s,
  It as t,
  C as u,
  oe as v,
  Vn as w,
  Ce as x,
  G as y,
  Mt as z,
  jy as A,
  $n as B,
  kt as C,
  t_ as D,
  Gy as E,
  qy as F,
  io as G,
  x_ as H,
  w_ as I,
  S1 as J,
  iF as K,
  oz as L,
  cz as M,
  fz as N,
  dz as O,
  uL as P,
  dw as Q,
  _z as R,
  K as S,
  Vz as T,
  dM as U,
  Hz as V,
  lO as W,
  jz as X,
  Iw as Y,
  qz as Z,
  M6 as _,
  ka as $,
  PN as aa,
  ON as ba,
  DN as ca,
  NN as da,
  uk as ea,
  wV as fa,
  YN as ga,
  IV as ha,
  JN as ia,
  i8 as ja,
  l8 as ka,
  c8 as la,
  l5 as ma,
  u8 as na,
  f8 as oa,
  d8 as pa,
  h8 as qa,
  m8 as ra,
  y8 as sa,
  b8 as ta,
  T8 as ua,
  I8 as va,
  Mi as wa,
  eH as xa,
  oH as ya,
  Vo as za,
  cH as Aa,
  hH as Ba,
  xH as Ca,
  SH as Da,
  wH as Ea,
  kH as Fa,
};
//# sourceMappingURL=chunk-PQMD5WSJ.mjs.map
