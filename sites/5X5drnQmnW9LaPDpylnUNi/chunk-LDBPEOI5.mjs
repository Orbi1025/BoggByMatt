import {
  S as f,
  U as l,
  _ as y,
  l as c,
  p as m,
  s as d,
  u as g,
  wa as b,
} from "./chunk-PQMD5WSJ.mjs";
import { b as n } from "./chunk-ELYU6EKT.mjs";
var D = (t) => (e) => {
  let [s, r] = d(0),
    u = () => {
      let i = 0;
      do i = Math.floor(Math.random() * 15) - 7;
      while (i >= -2 && i <= 2);
      return i;
    };
  return g(t, {
    ...e,
    whileHover: {
      rotate: s,
    },
    onMouseEnter: () => r(u()),
  });
};
var C =
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  S = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  M = {
    ...S,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  R = {
    onClick: {
      type: l.EventHandler,
    },
    onMouseEnter: {
      type: l.EventHandler,
    },
    onMouseLeave: {
      type: l.EventHandler,
    },
  },
  F = {
    type: l.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  T = {
    font: {
      type: l.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: l.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: t }) => !t,
    },
    fontWeight: {
      type: l.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: t }) => !t,
    },
  };
function k(t, e) {
  return x(!0, t, e);
}
function A(t, e) {
  return x(!1, t, e);
}
function x(t, e, s = !0) {
  let r = y();
  c(() => {
    s && r === t && e();
  }, [r]);
}
var E = () => {
    if (typeof n < "u") {
      let t = n.userAgent.toLowerCase();
      return (
        (t.indexOf("safari") > -1 ||
          t.indexOf("framermobile") > -1 ||
          t.indexOf("framerx") > -1) &&
        t.indexOf("chrome") < 0
      );
    } else return !1;
  },
  w = () => m(() => E(), []);
function I() {
  return m(() => f.current() === f.canvas, []);
}
function B(t) {
  let {
    borderRadius: e,
    isMixedBorderRadius: s,
    topLeftRadius: r,
    topRightRadius: u,
    bottomRightRadius: i,
    bottomLeftRadius: p,
  } = t;
  return m(
    () => (s ? `${r}px ${u}px ${i}px ${p}px` : `${e}px`),
    [e, s, r, u, i, p]
  );
}
var O = {
  borderRadius: {
    title: "Radius",
    type: l.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
function P(t) {
  let {
    padding: e,
    paddingPerSide: s,
    paddingTop: r,
    paddingRight: u,
    paddingBottom: i,
    paddingLeft: p,
  } = t;
  return m(() => (s ? `${r}px ${u}px ${i}px ${p}px` : e), [e, s, r, u, i, p]);
}
var z = {
  padding: {
    type: l.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
var K = {
  100: "Thin",
  200: "Extra-light",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "Semi-bold",
  700: "Bold",
  800: "Extra-bold",
  900: "Black",
};
function j(t) {
  let {
      fontFamily: e = "Inter",
      fontSize: s = 16,
      fontWeight: r = 400,
      font: u = !1,
    } = t,
    i = K[r],
    p = `"${e} ${i}", "${e}", ${C}`,
    h = e
      ? {
          fontSize: s,
          fontWeight: r,
          fontFamily: p,
        }
      : {
          fontSize: s,
          fontWeight: r,
        },
    V = async () => {
      await b
        .loadWebFontsFromSelectors([
          `CUSTOM;${e}`,
          `CUSTOM;${e} ${i}`,
          `GF;${e}-${i.toLowerCase()}`,
        ])
        .catch((_) => console.error(_));
    };
  return (
    c(() => {
      u && V();
    }, [u, e, r]),
    h
  );
}
export {
  S as a,
  M as b,
  R as c,
  T as d,
  k as e,
  A as f,
  w as g,
  j as h,
  I as i,
  B as j,
  O as k,
  P as l,
  z as m,
  D as n,
};
//# sourceMappingURL=chunk-LDBPEOI5.mjs.map
