import {
  c as he,
  h as ye,
  j as ge,
  l as be,
  n as ve,
} from "./chunk-LDBPEOI5.mjs";
import {
  $ as B,
  A,
  Ca as J,
  Da as K,
  Ea as xe,
  P as M,
  U as i,
  X as I,
  ba as H,
  c as f,
  ca as Z,
  fa as P,
  g as T,
  ia as R,
  j as ce,
  k as Y,
  m as _,
  p as D,
  r as j,
  ra as q,
  u as e,
  ua as pe,
  v as C,
  va as O,
  w as N,
  wa as ue,
  ya as v,
  z as r,
} from "./chunk-PQMD5WSJ.mjs";
import { b as z } from "./chunk-ELYU6EKT.mjs";
ue.loadFonts([]);
var we = [{ explicitInter: !0, fonts: [] }],
  Ce = [
    ".framer-moWL2 .framer-styles-preset-141kawf:not(.rich-text-wrapper), .framer-moWL2 .framer-styles-preset-141kawf.rich-text-wrapper a { --framer-link-current-text-color: #ffffff; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: #d4d4d4; --framer-link-hover-text-decoration: none; --framer-link-text-color: #ffffff; --framer-link-text-decoration: none; }",
  ],
  Re = "framer-moWL2";
var Fe = ["kyVF6d0iA", "am2i2OTPM"],
  ze = "framer-Euvfq",
  Te = { am2i2OTPM: "framer-v-5dl179", kyVF6d0iA: "framer-v-134m1vk" };
function Ye(a, ...t) {
  let o = {};
  return t?.forEach((n) => n && Object.assign(o, a[n])), o;
}
var _e = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  De = ({ value: a, children: t }) => {
    let o = Y(N),
      n = a ?? o.transition,
      c = D(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(N.Provider, { value: c, children: t });
  },
  je = r(f),
  Ae = { Close: "am2i2OTPM", Menu: "kyVF6d0iA" },
  Me = ({ height: a, id: t, width: o, ...n }) => {
    var c, p;
    return {
      ...n,
      variant:
        (p = (c = Ae[n.variant]) !== null && c !== void 0 ? c : n.variant) !==
          null && p !== void 0
          ? p
          : "kyVF6d0iA",
    };
  },
  Be = (a, t) =>
    a.layoutDependency ? t.join("-") + a.layoutDependency : t.join("-"),
  He = T(function (a, t) {
    let { activeLocale: o, setLocale: n } = M(),
      { style: c, className: p, layoutId: d, variant: u, ...l } = Me(a),
      {
        baseVariant: x,
        classNames: h,
        gestureHandlers: y,
        gestureVariant: g,
        setGestureState: k,
        setVariant: m,
        variants: b,
      } = O({
        cycleOrder: Fe,
        defaultVariant: "kyVF6d0iA",
        variant: u,
        variantClassNames: Te,
      }),
      w = Be(a, b),
      V = j(null),
      E = _(),
      S = [],
      L = H();
    return e(A, {
      id: d ?? E,
      children: e(je, {
        animate: b,
        initial: !1,
        children: e(De, {
          value: _e,
          children: e(r.div, {
            ...l,
            ...y,
            className: B(ze, ...S, "framer-134m1vk", p, h),
            "data-border": !0,
            "data-framer-name": "Menu",
            layoutDependency: w,
            layoutId: "kyVF6d0iA",
            ref: t ?? V,
            style: {
              "--border-bottom-width": "1px",
              "--border-color": "rgba(33, 33, 33, 0.42)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(20, 20, 20, 0.08)",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.05)",
              WebkitBackdropFilter: "blur(5px)",
              ...c,
            },
            ...Ye({ am2i2OTPM: { "data-framer-name": "Close" } }, x, g),
            children: C(r.div, {
              className: "framer-8ahlvb",
              "data-framer-name": "Wrapper",
              layoutDependency: w,
              layoutId: "SScmrea7m",
              style: { rotate: 0 },
              variants: { am2i2OTPM: { rotate: 45 } },
              children: [
                e(r.div, {
                  className: "framer-roo3ov",
                  "data-framer-name": "Horizontal",
                  layoutDependency: w,
                  layoutId: "fOKjhPyqA",
                  style: {
                    backgroundColor: "rgb(255, 255, 255)",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  },
                }),
                e(r.div, {
                  className: "framer-18lzxou",
                  "data-framer-name": "Vertical",
                  layoutDependency: w,
                  layoutId: "sjdOfeujK",
                  style: {
                    backgroundColor: "rgb(255, 255, 255)",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  },
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Pe = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Euvfq.framer-1usgpiy, .framer-Euvfq .framer-1usgpiy { display: block; }",
    ".framer-Euvfq.framer-134m1vk { height: 44px; overflow: hidden; position: relative; width: 44px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Euvfq .framer-8ahlvb { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 20px; }",
    ".framer-Euvfq .framer-roo3ov { flex: none; height: 2px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: calc(50.00000000000002% - 2px / 2); will-change: var(--framer-will-change-override, transform); }",
    ".framer-Euvfq .framer-18lzxou { bottom: 0px; flex: none; left: calc(50.00000000000002% - 2px / 2); overflow: hidden; position: absolute; top: 0px; width: 2px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Euvfq.framer-v-5dl179.framer-134m1vk { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 44px); }",
    '.framer-Euvfq[data-border="true"]::after, .framer-Euvfq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  G = P(He, Pe, "framer-Euvfq"),
  fe = G;
G.displayName = "Icon";
G.defaultProps = { height: 44, width: 44 };
I(G, {
  variant: {
    options: ["kyVF6d0iA", "am2i2OTPM"],
    optionTitles: ["Menu", "Close"],
    title: "Variant",
    type: i.Enum,
  },
});
J(G, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var Oe = K(fe),
  Ve = ve(r.a),
  Je = ["uES8z4yMj", "iVd8OmJTR", "NqbNnRmWy"],
  Ee = "framer-yxCef",
  Ge = {
    iVd8OmJTR: "framer-v-157mmi8",
    NqbNnRmWy: "framer-v-tmljr9",
    uES8z4yMj: "framer-v-14ctnnr",
  };
function W(a, ...t) {
  let o = {};
  return t?.forEach((n) => n && Object.assign(o, a[n])), o;
}
var We = { damping: 35, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Ue = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Ne = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.05,
    skewX: 0,
    skewY: 0,
    transition: Ue,
  },
  Xe = ({ value: a, children: t }) => {
    let o = Y(N),
      n = a ?? o.transition,
      c = D(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(N.Provider, { value: c, children: t });
  },
  Qe = r(f),
  Ze = { Horizontal: "row", Vertical: "column" },
  qe = { "Variant 3": "NqbNnRmWy", Closed: "iVd8OmJTR", Open: "uES8z4yMj" },
  Ke = ({
    background: a,
    background2: t,
    direction: o,
    gap: n,
    height: c,
    id: p,
    link: d,
    width: u,
    ...l
  }) => {
    var x, h, y, g, k, m, b, w;
    return {
      ...l,
      ah9qjiq38: (x = n ?? l.ah9qjiq38) !== null && x !== void 0 ? x : 10,
      FTpeBrC3k: d ?? l.FTpeBrC3k,
      lADySZ6HS:
        (h = t ?? l.lADySZ6HS) !== null && h !== void 0
          ? h
          : "rgba(18, 18, 18, 0.15)",
      tbGiGAZ87:
        (k =
          (g = (y = Ze[o]) !== null && y !== void 0 ? y : o) !== null &&
          g !== void 0
            ? g
            : l.tbGiGAZ87) !== null && k !== void 0
          ? k
          : "row",
      variant:
        (b = (m = qe[l.variant]) !== null && m !== void 0 ? m : l.variant) !==
          null && b !== void 0
          ? b
          : "uES8z4yMj",
      VytlcRlRZ:
        (w = a ?? l.VytlcRlRZ) !== null && w !== void 0
          ? w
          : "rgba(209, 209, 209, 0.05)",
    };
  },
  $e = (a, t) =>
    a.layoutDependency ? t.join("-") + a.layoutDependency : t.join("-"),
  er = T(function (a, t) {
    let { activeLocale: o, setLocale: n } = M(),
      {
        style: c,
        className: p,
        layoutId: d,
        variant: u,
        tbGiGAZ87: l,
        ah9qjiq38: x,
        FTpeBrC3k: h,
        VytlcRlRZ: y,
        lADySZ6HS: g,
        ...k
      } = Ke(a),
      {
        baseVariant: m,
        classNames: b,
        gestureHandlers: w,
        gestureVariant: V,
        setGestureState: E,
        setVariant: S,
        variants: L,
      } = O({
        cycleOrder: Je,
        defaultVariant: "uES8z4yMj",
        variant: u,
        variantClassNames: Ge,
      }),
      s = $e(a, L),
      { activeVariantCallback: F, delay: re } = q(m),
      te = F(async (...Se) => {
        S("iVd8OmJTR");
      }),
      ae = F(async (...Se) => {
        S("uES8z4yMj");
      }),
      oe = j(null),
      ne = () => m !== "NqbNnRmWy",
      ie = () => m === "iVd8OmJTR",
      le = () => m === "NqbNnRmWy",
      se = _(),
      de = [Re],
      me = H();
    return e(A, {
      id: d ?? se,
      children: e(Qe, {
        animate: L,
        initial: !1,
        children: e(Xe, {
          value: We,
          children: C(r.nav, {
            ...k,
            ...w,
            className: B(Ee, ...de, "framer-14ctnnr", p, b),
            "data-framer-name": "Open",
            layoutDependency: s,
            layoutId: "uES8z4yMj",
            ref: t ?? oe,
            style: { ...c },
            ...W(
              {
                iVd8OmJTR: { "data-framer-name": "Closed" },
                NqbNnRmWy: { "data-framer-name": "Variant 3" },
              },
              m,
              V
            ),
            children: [
              ne() &&
                C(r.div, {
                  className: "framer-1h0u80t",
                  "data-framer-name": "Menu",
                  layoutDependency: s,
                  layoutId: "OxTMYkgxH",
                  style: {
                    "--border-bottom-width": "0px",
                    "--border-color": "rgba(0, 0, 0, 0)",
                    "--border-left-width": "0px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "0px",
                    backgroundColor: "rgb(17, 17, 17)",
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    boxShadow:
                      "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.05)",
                  },
                  variants: {
                    iVd8OmJTR: {
                      "--border-bottom-width": "1.98px",
                      "--border-color": "rgb(26, 26, 26)",
                      "--border-left-width": "1.98px",
                      "--border-right-width": "1.98px",
                      "--border-style": "solid",
                      "--border-top-width": "1.98px",
                      backgroundColor: g,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      boxShadow:
                        "inset 5px 5px 0px 0px rgba(255, 255, 255, 0.2), 5px 5px 0px 0px rgba(0, 0, 0, 0.08)",
                    },
                  },
                  ...W({ iVd8OmJTR: { "data-border": !0 } }, m, V),
                  children: [
                    C(r.div, {
                      className: "framer-1kyg9yo",
                      "data-framer-name": "Icon and Label",
                      "data-highlight": !0,
                      layoutDependency: s,
                      layoutId: "jR1ecZCBm",
                      onTap: te,
                      ...W({ iVd8OmJTR: { onTap: ae } }, m, V),
                      children: [
                        e(Z, {
                          ...W({ iVd8OmJTR: { width: "32px" } }, m, V),
                          children: e(r.div, {
                            className: "framer-gs12rg-container",
                            "data-framer-name": "Menu Icon",
                            layoutDependency: s,
                            layoutId: "amsoyo0Ng-container",
                            name: "Menu Icon",
                            children: e(fe, {
                              height: "100%",
                              id: "amsoyo0Ng",
                              layoutId: "amsoyo0Ng",
                              name: "Menu Icon",
                              variant: "am2i2OTPM",
                              width: "100%",
                              ...W(
                                {
                                  iVd8OmJTR: {
                                    style: { height: "100%", width: "100%" },
                                    variant: "kyVF6d0iA",
                                  },
                                },
                                m,
                                V
                              ),
                            }),
                          }),
                        }),
                        ie() &&
                          e(R, {
                            href: h,
                            children: e(Ve, {
                              className: "framer-h3cnr3 framer-3gv4az",
                              "data-border": !0,
                              layoutDependency: s,
                              layoutId: "aU7Zed4C9",
                              style: {
                                "--border-bottom-width": "1.98px",
                                "--border-color": "rgb(25, 25, 25)",
                                "--border-left-width": "1.98px",
                                "--border-right-width": "1.98px",
                                "--border-style": "solid",
                                "--border-top-width": "1.98px",
                                backdropFilter: "blur(3px)",
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                                boxShadow:
                                  "8px 8px 1px -3px rgba(0, 0, 0, 0.2), 3px 3px 0px -1px rgb(25, 25, 25)",
                                WebkitBackdropFilter: "blur(3px)",
                              },
                              whileHover: Ne,
                              children: e(r.div, {
                                className: "framer-1ejgkcc",
                                layoutDependency: s,
                                layoutId: "iSREyQBzr",
                                children: e(v, {
                                  __fromCanvasComponent: !0,
                                  children: e(f, {
                                    children: e(r.p, {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "17px",
                                        "--framer-letter-spacing": "0.09em",
                                        "--framer-line-height": "1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgb(222, 222, 222))",
                                      },
                                      children: "BUY $BOGG",
                                    }),
                                  }),
                                  className: "framer-1vcmcbp",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  layoutDependency: s,
                                  layoutId: "f127sPR3J",
                                  style: {
                                    "--extracted-r6o4lv": "rgb(222, 222, 222)",
                                    "--framer-link-text-color":
                                      "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration":
                                      "underline",
                                  },
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    C(r.div, {
                      className: "framer-1o40ko2",
                      "data-framer-name": "Links",
                      layoutDependency: s,
                      layoutId: "hZgoxp9vt",
                      style: {
                        "--18ia9vt": l,
                        "--19j821y":
                          l === "row"
                            ? 0
                            : "calc(calc(max(0, var(--1uzr0b9)) * 1px) / 2)",
                        "--1uzr0b9": x,
                        "--c8pbvt":
                          l === "column"
                            ? 0
                            : "calc(calc(max(0, var(--1uzr0b9)) * 1px) / 2)",
                        "--or6f9v": l === "column" ? "100%" : "1px",
                        "--rc7avp": l === "column" ? void 0 : "1 0 0px",
                        opacity: 1,
                      },
                      variants: { iVd8OmJTR: { opacity: 0 } },
                      children: [
                        e(r.ul, {
                          className: "framer-k43awb",
                          "data-framer-name": "Row",
                          layoutDependency: s,
                          layoutId: "DlWA5_TF9",
                          children: e(v, {
                            __fromCanvasComponent: !0,
                            as: "li",
                            children: e(f, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "15px",
                                  "--framer-letter-spacing": "-0.01em",
                                  "--framer-line-height": "2em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: e(R, {
                                  href: "https://x.com/Bogg_MattFurie",
                                  openInNewTab: !0,
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-141kawf",
                                    "data-styles-preset": "VhkBWhw4S",
                                    children: "TWITTER",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1fdt148",
                            fonts: ["GF;Chelsea Market-regular"],
                            layoutDependency: s,
                            layoutId: "DzXibrrcP",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              opacity: 0.5,
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(r.ul, {
                          className: "framer-1dzba2i",
                          "data-framer-name": "Row",
                          layoutDependency: s,
                          layoutId: "oqm9VujRw",
                          children: e(v, {
                            __fromCanvasComponent: !0,
                            as: "li",
                            children: e(f, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "15px",
                                  "--framer-letter-spacing": "-0.01em",
                                  "--framer-line-height": "2em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: e(R, {
                                  href: "https://t.me/Bogg_MattFurie",
                                  openInNewTab: !0,
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-141kawf",
                                    "data-styles-preset": "VhkBWhw4S",
                                    children: "TELEGRAM",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-17k3yec",
                            fonts: ["GF;Chelsea Market-regular"],
                            layoutDependency: s,
                            layoutId: "Dud8bd63j",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              opacity: 0.5,
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              le() &&
                e(r.div, {
                  className: "framer-smaopz",
                  "data-border": !0,
                  layoutDependency: s,
                  layoutId: "MhN6QqBxy",
                  style: {
                    "--border-bottom-width": "1.98px",
                    "--border-color": "rgb(26, 26, 26)",
                    "--border-left-width": "1.98px",
                    "--border-right-width": "1.98px",
                    "--border-style": "solid",
                    "--border-top-width": "1.98px",
                    backdropFilter: "blur(2px)",
                    backgroundColor: y,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    boxShadow:
                      "inset 5px 5px 0px 0px rgba(255, 255, 255, 0.2), 5px 5px 0px 0px rgba(0, 0, 0, 0.08)",
                    WebkitBackdropFilter: "blur(2px)",
                  },
                  children: C(r.div, {
                    className: "framer-1u2huyr",
                    layoutDependency: s,
                    layoutId: "IfN6W4t_l",
                    children: [
                      e(v, {
                        __fromCanvasComponent: !0,
                        children: e(f, {
                          children: e(r.p, {
                            style: {
                              "--font-selector":
                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                              "--framer-font-family":
                                '"Chelsea Market", sans-serif',
                              "--framer-font-size": "58px",
                              "--framer-letter-spacing": "-0.1em",
                              "--framer-line-height": "1em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children: e(R, {
                              href: { webPageId: "augiA20Il" },
                              openInNewTab: !1,
                              smoothScroll: !1,
                              children: e(r.a, {
                                className: "framer-styles-preset-141kawf",
                                "data-styles-preset": "VhkBWhw4S",
                                children: "B O G G",
                              }),
                            }),
                          }),
                        }),
                        className: "framer-1c5awek",
                        fonts: ["GF;Chelsea Market-regular"],
                        layoutDependency: s,
                        layoutId: "W6U7LQo6O",
                        style: {
                          "--extracted-r6o4lv": "rgb(255, 255, 255)",
                          textShadow: "0px 1px 2px rgba(0, 0, 0, 0.35)",
                        },
                        verticalAlignment: "center",
                        withExternalLayout: !0,
                      }),
                      e(R, {
                        href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x377848080A45F88ea818435137822Ff0009743eA",
                        children: e(Ve, {
                          className: "framer-5mp4wm framer-3gv4az",
                          "data-border": !0,
                          layoutDependency: s,
                          layoutId: "TseC70QRv",
                          style: {
                            "--border-bottom-width": "1.98px",
                            "--border-color": "rgb(25, 25, 25)",
                            "--border-left-width": "1.98px",
                            "--border-right-width": "1.98px",
                            "--border-style": "solid",
                            "--border-top-width": "1.98px",
                            backdropFilter: "blur(2px)",
                            backgroundColor: "rgba(181, 181, 181, 0.02)",
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                            boxShadow:
                              "8px 8px 1px -3px rgba(0, 0, 0, 0.2), 3px 3px 0px -1px rgb(25, 25, 25)",
                            WebkitBackdropFilter: "blur(2px)",
                          },
                          whileHover: Ne,
                          children: e(r.div, {
                            className: "framer-1ipoi2i",
                            layoutDependency: s,
                            layoutId: "X0N_nT_KZ",
                            children: e(v, {
                              __fromCanvasComponent: !0,
                              children: e(f, {
                                children: e(r.p, {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "24px",
                                    "--framer-letter-spacing": "0.09em",
                                    "--framer-line-height": "1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                  },
                                  children: "BUY $BOGG",
                                }),
                              }),
                              className: "framer-f062vu",
                              fonts: ["GF;Chelsea Market-regular"],
                              layoutDependency: s,
                              layoutId: "Ndsa8yE9n",
                              style: {
                                "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                textShadow: "0px 1px 2px rgba(0, 0, 0, 0.35)",
                              },
                              verticalAlignment: "center",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      }),
                      C(r.div, {
                        className: "framer-116ld3e",
                        layoutDependency: s,
                        layoutId: "n2DWa_Vk3",
                        children: [
                          e(v, {
                            __fromCanvasComponent: !0,
                            children: e(f, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "18px",
                                  "--framer-letter-spacing": "0.09em",
                                  "--framer-line-height": "1em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: e(R, {
                                  href: { webPageId: "Ne3tezedl" },
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-141kawf",
                                    "data-styles-preset": "VhkBWhw4S",
                                    children: "BURNS",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1ud8w16",
                            fonts: ["GF;Chelsea Market-regular"],
                            layoutDependency: s,
                            layoutId: "dblIUEW1W",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              textShadow: "0px 1px 2px rgba(0, 0, 0, 0.35)",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                          e(v, {
                            __fromCanvasComponent: !0,
                            children: e(f, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "18px",
                                  "--framer-letter-spacing": "0.09em",
                                  "--framer-line-height": "1em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: e(R, {
                                  href: { webPageId: "K3ptZr0Ff" },
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-141kawf",
                                    "data-styles-preset": "VhkBWhw4S",
                                    children: "CONTENT",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-538vfj",
                            fonts: ["GF;Chelsea Market-regular"],
                            layoutDependency: s,
                            layoutId: "dp2fGyWCg",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              textShadow: "0px 1px 2px rgba(0, 0, 0, 0.35)",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                          e(v, {
                            __fromCanvasComponent: !0,
                            children: e(f, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "18px",
                                  "--framer-letter-spacing": "0.09em",
                                  "--framer-line-height": "1em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: e(R, {
                                  href: {
                                    hash: ":R1imwfKEl",
                                    webPageId: "augiA20Il",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !0,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-141kawf",
                                    "data-styles-preset": "VhkBWhw4S",
                                    children: "BOGGENOMICS",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-ymli",
                            fonts: ["GF;Chelsea Market-regular"],
                            layoutDependency: s,
                            layoutId: "CBTcN9WYl",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              textShadow: "0px 1px 2px rgba(0, 0, 0, 0.35)",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                          e(v, {
                            __fromCanvasComponent: !0,
                            children: e(f, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "18px",
                                  "--framer-letter-spacing": "0.09em",
                                  "--framer-line-height": "1em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: e(R, {
                                  href: "https://pfp.bogg.club/",
                                  openInNewTab: !0,
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-141kawf",
                                    "data-styles-preset": "VhkBWhw4S",
                                    children: "",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-xj6hbc",
                            fonts: ["GF;Chelsea Market-regular"],
                            layoutDependency: s,
                            layoutId: "CCyAcdtJ9",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              textShadow: "0px 1px 2px rgba(0, 0, 0, 0.35)",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                          e(v, {
                            __fromCanvasComponent: !0,
                            children: e(f, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "18px",
                                  "--framer-letter-spacing": "0.09em",
                                  "--framer-line-height": "1em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: e(R, {
                                  href: {
                                    hash: ":hxnxRhDHc",
                                    webPageId: "augiA20Il",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !0,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-141kawf",
                                    "data-styles-preset": "VhkBWhw4S",
                                    children: "STORY",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1u5kiv1",
                            fonts: ["GF;Chelsea Market-regular"],
                            layoutDependency: s,
                            layoutId: "ySGTLYNbA",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              textShadow: "0px 1px 2px rgba(0, 0, 0, 0.35)",
                            },
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  rr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-yxCef.framer-3gv4az, .framer-yxCef .framer-3gv4az { display: block; }",
    ".framer-yxCef.framer-14ctnnr { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px; position: relative; width: 800px; }",
    ".framer-yxCef .framer-1h0u80t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 100%; overflow: hidden; padding: 20px 20px 12px 20px; position: relative; width: 620px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yxCef .framer-1kyg9yo { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-yxCef .framer-gs12rg-container { flex: none; height: auto; position: relative; width: auto; z-index: 3; }",
    ".framer-yxCef .framer-h3cnr3 { flex: none; height: 43px; overflow: visible; position: relative; text-decoration: none; width: 155px; }",
    ".framer-yxCef .framer-1ejgkcc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 5px; width: 100%; }",
    ".framer-yxCef .framer-1vcmcbp { flex: none; height: 35px; position: relative; white-space: pre-wrap; width: 99%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yxCef .framer-1o40ko2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: var(--18ia9vt); flex-wrap: nowrap; gap: calc(max(0, var(--1uzr0b9)) * 1px); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-yxCef .framer-k43awb, .framer-yxCef .framer-1dzba2i { align-content: center; align-items: center; display: flex; flex: var(--rc7avp); flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; list-style: none; margin: 0px; overflow: visible; padding: 0px; position: relative; width: var(--or6f9v); }",
    ".framer-yxCef .framer-1fdt148, .framer-yxCef .framer-17k3yec { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yxCef .framer-smaopz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 78px; justify-content: center; max-width: 1275px; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; }",
    ".framer-yxCef .framer-1u2huyr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-yxCef .framer-1c5awek { flex: none; height: 42px; position: relative; white-space: pre-wrap; width: 248px; word-break: break-word; word-wrap: break-word; }",
    ".framer-yxCef .framer-5mp4wm { flex: none; height: 52px; overflow: visible; position: relative; text-decoration: none; width: 189px; }",
    ".framer-yxCef .framer-1ipoi2i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 11px; width: 100%; }",
    ".framer-yxCef .framer-f062vu { flex: none; height: 42px; position: relative; white-space: pre-wrap; width: 98%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yxCef .framer-116ld3e { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 30px 0px 0px; position: relative; width: 1px; }",
    ".framer-yxCef .framer-1ud8w16, .framer-yxCef .framer-538vfj, .framer-yxCef .framer-ymli, .framer-yxCef .framer-xj6hbc, .framer-yxCef .framer-1u5kiv1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yxCef.framer-14ctnnr, .framer-yxCef .framer-1h0u80t, .framer-yxCef .framer-1kyg9yo, .framer-yxCef .framer-1ejgkcc, .framer-yxCef .framer-1o40ko2, .framer-yxCef .framer-k43awb, .framer-yxCef .framer-1dzba2i, .framer-yxCef .framer-smaopz, .framer-yxCef .framer-1ipoi2i, .framer-yxCef .framer-116ld3e { gap: 0px; } .framer-yxCef.framer-14ctnnr > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-yxCef.framer-14ctnnr > :first-child, .framer-yxCef .framer-1h0u80t > :first-child, .framer-yxCef .framer-k43awb > :first-child, .framer-yxCef .framer-1dzba2i > :first-child, .framer-yxCef .framer-smaopz > :first-child { margin-top: 0px; } .framer-yxCef.framer-14ctnnr > :last-child, .framer-yxCef .framer-1h0u80t > :last-child, .framer-yxCef .framer-k43awb > :last-child, .framer-yxCef .framer-1dzba2i > :last-child, .framer-yxCef .framer-smaopz > :last-child { margin-bottom: 0px; } .framer-yxCef .framer-1h0u80t > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-yxCef .framer-1kyg9yo > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-yxCef .framer-1kyg9yo > :first-child, .framer-yxCef .framer-1ejgkcc > :first-child, .framer-yxCef .framer-1ipoi2i > :first-child, .framer-yxCef .framer-116ld3e > :first-child { margin-left: 0px; } .framer-yxCef .framer-1kyg9yo > :last-child, .framer-yxCef .framer-1ejgkcc > :last-child, .framer-yxCef .framer-1ipoi2i > :last-child, .framer-yxCef .framer-116ld3e > :last-child { margin-right: 0px; } .framer-yxCef .framer-1ejgkcc > *, .framer-yxCef .framer-1ipoi2i > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-yxCef .framer-1o40ko2 > * { margin-bottom: var(--19j821y); margin-left: var(--c8pbvt); margin-right: var(--c8pbvt); margin-top: var(--19j821y); } .framer-yxCef .framer-1o40ko2 > :first-child { margin-left: 0px; margin-top: 0px; } .framer-yxCef .framer-1o40ko2 > :last-child { margin-bottom: 0px; margin-right: 0px; } .framer-yxCef .framer-k43awb > *, .framer-yxCef .framer-1dzba2i > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-yxCef .framer-smaopz > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-yxCef .framer-116ld3e > * { margin: 0px; margin-left: calc(26px / 2); margin-right: calc(26px / 2); } }",
    ".framer-yxCef.framer-v-157mmi8.framer-14ctnnr { padding: 9px 20px 9px 20px; }",
    ".framer-yxCef.framer-v-157mmi8 .framer-1h0u80t { gap: 17px; height: 71px; padding: 10px; width: 600px; }",
    ".framer-yxCef.framer-v-157mmi8 .framer-1kyg9yo { gap: unset; justify-content: space-between; padding: 0px 10px 0px 10px; }",
    ".framer-yxCef.framer-v-157mmi8 .framer-gs12rg-container { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 32px); order: 1; width: 32px; }",
    ".framer-yxCef.framer-v-157mmi8 .framer-h3cnr3, .framer-yxCef.framer-v-tmljr9 .framer-smaopz, .framer-yxCef.framer-v-tmljr9 .framer-1c5awek, .framer-yxCef.framer-v-tmljr9 .framer-1u5kiv1 { order: 0; }",
    ".framer-yxCef.framer-v-157mmi8 .framer-1o40ko2 { align-content: flex-start; align-items: flex-start; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yxCef.framer-v-157mmi8 .framer-1h0u80t, .framer-yxCef.framer-v-157mmi8 .framer-1kyg9yo { gap: 0px; } .framer-yxCef.framer-v-157mmi8 .framer-1h0u80t > * { margin: 0px; margin-bottom: calc(17px / 2); margin-top: calc(17px / 2); } .framer-yxCef.framer-v-157mmi8 .framer-1h0u80t > :first-child { margin-top: 0px; } .framer-yxCef.framer-v-157mmi8 .framer-1h0u80t > :last-child { margin-bottom: 0px; } .framer-yxCef.framer-v-157mmi8 .framer-1kyg9yo > *, .framer-yxCef.framer-v-157mmi8 .framer-1kyg9yo > :first-child, .framer-yxCef.framer-v-157mmi8 .framer-1kyg9yo > :last-child { margin: 0px; } }",
    ".framer-yxCef.framer-v-tmljr9.framer-14ctnnr { justify-content: center; padding: 20px; width: 1275px; }",
    ".framer-yxCef.framer-v-tmljr9 .framer-5mp4wm, .framer-yxCef.framer-v-tmljr9 .framer-1ud8w16 { order: 2; }",
    ".framer-yxCef.framer-v-tmljr9 .framer-1ipoi2i { top: 5px; }",
    ".framer-yxCef.framer-v-tmljr9 .framer-116ld3e, .framer-yxCef.framer-v-tmljr9 .framer-ymli { order: 1; }",
    ".framer-yxCef.framer-v-tmljr9 .framer-538vfj { order: 3; }",
    ".framer-yxCef.framer-v-tmljr9 .framer-xj6hbc { order: 4; }",
    ...Ce,
    '.framer-yxCef[data-border="true"]::after, .framer-yxCef [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  U = P(er, rr, "framer-yxCef"),
  Ir = U;
U.displayName = "Topbar";
U.defaultProps = { height: 166, width: 800 };
I(U, {
  variant: {
    options: ["uES8z4yMj", "iVd8OmJTR", "NqbNnRmWy"],
    optionTitles: ["Open", "Closed", "Variant 3"],
    title: "Variant",
    type: i.Enum,
  },
  tbGiGAZ87: {
    defaultValue: "row",
    displaySegmentedControl: !0,
    optionIcons: ["direction-horizontal", "direction-vertical"],
    options: ["row", "column"],
    optionTitles: ["Horizontal", "Vertical"],
    title: "Direction",
    type: i.Enum,
  },
  ah9qjiq38: { defaultValue: 10, min: 0, title: "Gap", type: i.Number },
  FTpeBrC3k: { title: "Link", type: i.Link },
  VytlcRlRZ: {
    defaultValue: "rgba(209, 209, 209, 0.05)",
    title: "Background",
    type: i.Color,
  },
  lADySZ6HS: {
    defaultValue: "rgba(18, 18, 18, 0.15)",
    title: "Background 2",
    type: i.Color,
  },
});
J(
  U,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Chelsea Market",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/chelseamarket/v13/BCawqZsHqfr89WNP_IApC8tzKBhgLA4uKkWk.woff2",
          weight: "400",
        },
      ],
    },
    ...Oe,
    ...xe(we),
  ],
  { supportsExplicitInterCodegen: !0 }
);
function X(a) {
  let {
      label: t,
      content: o,
      fill: n,
      color: c,
      style: p,
      onClick: d,
      font: u,
      hoverOptions: l,
      ...x
    } = a,
    h = ye({ fontWeight: 500, ...x }),
    y = ge(a),
    g = be(a),
    k = ce(() => {
      var m;
      (m = z.clipboard) === null || m === void 0 || m.writeText(o), d?.();
    }, [d, o]);
  return e(r.button, {
    style: {
      border: "none",
      outline: "none",
      resize: "none",
      width: "max-content",
      wordBreak: "break-word",
      overflowWrap: "break-word",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      letterSpacing: "-0.2px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: n,
      borderRadius: y,
      cursor: "pointer",
      padding: g,
      color: c,
      ...h,
      ...u,
      ...p,
    },
    onClick: k,
    ...x,
    whileHover: l,
    transition: l?.transition,
    children: t,
  });
}
I(X, {
  content: {
    type: i.String,
    title: "Content",
    displayTextArea: !0,
    description: "When clicked, this content will be copied to the clipboard.",
  },
  label: { type: i.String, title: "Label", defaultValue: "Copy to Clipboard" },
  fill: { type: i.Color, title: "Fill", defaultValue: "#06F" },
  color: { type: i.Color, title: "Text", defaultValue: "#fff" },
  font: { type: i.Font, controls: "extended", defaultValue: { fontSize: 16 } },
  hoverOptions: {
    type: i.Object,
    title: "Hover",
    buttonTitle: "Effect",
    optional: !0,
    controls: {
      scale: {
        type: i.Number,
        title: "Scale",
        min: 0,
        max: 10,
        displayStepper: !0,
        step: 0.01,
        defaultValue: 1.1,
      },
      backgroundColor: {
        type: i.Color,
        title: "Fill",
        defaultValue: "#0088FF",
        optional: !0,
      },
      color: {
        type: i.Color,
        title: "Color",
        defaultValue: "#FFF",
        optional: !0,
      },
      transition: {
        type: i.Transition,
        title: "Transition",
        defaultValue: { type: "spring", stiffness: 400, damping: 30 },
      },
    },
  },
  padding: {
    type: i.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
    defaultValue: 10,
  },
  borderRadius: {
    title: "Radius",
    type: i.FusedNumber,
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
    defaultValue: 50,
  },
  ...he,
});
var tr = K(X),
  ar = { fVYkg_IIL: { hover: !0 }, xSuunNrNL: { hover: !0 } },
  or = [
    "fVYkg_IIL",
    "IMhep3b9l",
    "CLLapAVUV",
    "YUabDGEHJ",
    "xSuunNrNL",
    "Tr0xuHlDV",
  ],
  nr = "framer-4Ykps",
  ir = {
    CLLapAVUV: "framer-v-xeaijb",
    fVYkg_IIL: "framer-v-8ld5oa",
    IMhep3b9l: "framer-v-7bq9du",
    Tr0xuHlDV: "framer-v-1yickva",
    xSuunNrNL: "framer-v-10wo600",
    YUabDGEHJ: "framer-v-1phwtlo",
  };
function Ie(a, ...t) {
  let o = {};
  return t?.forEach((n) => n && Object.assign(o, a[n])), o;
}
var lr = { duration: 0, type: "tween" },
  sr = ({ value: a, children: t }) => {
    let o = Y(N),
      n = a ?? o.transition,
      c = D(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return e(N.Provider, { value: c, children: t });
  },
  fr = r(f),
  dr = {
    "click-to-copy": "fVYkg_IIL",
    "Inverse colors": "xSuunNrNL",
    "Variant 3": "IMhep3b9l",
    "Variant 4": "CLLapAVUV",
    "Variant 5": "YUabDGEHJ",
    Centered: "Tr0xuHlDV",
  },
  mr = ({
    color2: a,
    cOPYContent: t,
    fontSize3: o,
    height: n,
    id: c,
    visibleContent: p,
    width: d,
    ...u
  }) => {
    var l, x, h, y, g;
    return {
      ...u,
      ACbcH4bn0: (l = o ?? u.ACbcH4bn0) !== null && l !== void 0 ? l : 16,
      DvQBipYeb: t ?? u.DvQBipYeb,
      FRpg2PxcG:
        (x = p ?? u.FRpg2PxcG) !== null && x !== void 0
          ? x
          : "YJBAJsrmQbZQdP6ofELwghasdsdcwzpUeWRYxA3QJFHANS",
      iroNXaN6O:
        (h = a ?? u.iroNXaN6O) !== null && h !== void 0 ? h : "rgb(0, 0, 0)",
      variant:
        (g = (y = dr[u.variant]) !== null && y !== void 0 ? y : u.variant) !==
          null && g !== void 0
          ? g
          : "fVYkg_IIL",
    };
  },
  cr = (a, t) =>
    a.layoutDependency ? t.join("-") + a.layoutDependency : t.join("-"),
  pr = T(function (a, t) {
    let { activeLocale: o, setLocale: n } = M(),
      {
        style: c,
        className: p,
        layoutId: d,
        variant: u,
        DvQBipYeb: l,
        FRpg2PxcG: x,
        iroNXaN6O: h,
        ACbcH4bn0: y,
        pL1gSXpuhSVRGtzIIz: g,
        ozHRs81Y8SVRGtzIIz: k,
        ...m
      } = mr(a),
      {
        baseVariant: b,
        classNames: w,
        gestureHandlers: V,
        gestureVariant: E,
        setGestureState: S,
        setVariant: L,
        variants: s,
      } = O({
        cycleOrder: or,
        defaultVariant: "fVYkg_IIL",
        enabledGestures: ar,
        variant: u,
        variantClassNames: ir,
      }),
      F = cr(a, s),
      { activeVariantCallback: re, delay: te } = q(b),
      ae = re(async (...me) => {
        S({ isPressed: !1 }), L("CLLapAVUV");
      }),
      oe = re(async (...me) => {
        await te(() => L("Tr0xuHlDV"), 3e3);
      });
    pe(b, { CLLapAVUV: oe });
    let ne = j(null),
      ie = () => b !== "CLLapAVUV",
      le = _(),
      se = [],
      de = H();
    return e(A, {
      id: d ?? le,
      children: e(fr, {
        animate: s,
        initial: !1,
        children: e(sr, {
          value: lr,
          children: C(r.div, {
            ...m,
            ...V,
            className: B(nr, ...se, "framer-8ld5oa", p, w),
            "data-framer-name": "click-to-copy",
            "data-highlight": !0,
            layoutDependency: F,
            layoutId: "fVYkg_IIL",
            onTap: ae,
            ref: t ?? ne,
            style: { ...c },
            ...Ie(
              {
                "fVYkg_IIL-hover": { "data-framer-name": void 0 },
                "xSuunNrNL-hover": { "data-framer-name": void 0 },
                CLLapAVUV: { "data-framer-name": "Variant 4", onTap: void 0 },
                IMhep3b9l: {
                  "data-framer-name": "Variant 3",
                  "data-highlight": void 0,
                  onTap: void 0,
                },
                Tr0xuHlDV: { "data-framer-name": "Centered" },
                xSuunNrNL: { "data-framer-name": "Inverse colors" },
                YUabDGEHJ: { "data-framer-name": "Variant 5" },
              },
              b,
              E
            ),
            children: [
              ie() &&
                e(Z, {
                  children: e(r.div, {
                    className: "framer-1k0bryk-container",
                    layoutDependency: F,
                    layoutId: "Vdy3gR4BB-container",
                    children: e(X, {
                      borderRadius: 50,
                      bottomLeftRadius: 50,
                      bottomRightRadius: 50,
                      color: "rgba(255, 255, 255, 0)",
                      content: l,
                      fill: "rgba(0, 102, 255, 0)",
                      font: {},
                      height: "100%",
                      id: "Vdy3gR4BB",
                      isMixedBorderRadius: !1,
                      label: "Copy to Clipboard",
                      layoutId: "Vdy3gR4BB",
                      padding: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingPerSide: !1,
                      paddingRight: 10,
                      paddingTop: 10,
                      style: { height: "100%", width: "100%" },
                      topLeftRadius: 50,
                      topRightRadius: 50,
                      width: "100%",
                    }),
                  }),
                }),
              e(v, {
                __fromCanvasComponent: !0,
                children: e(f, {
                  children: e(r.p, {
                    style: {
                      "--font-selector": "R0Y7U291cmNlIENvZGUgUHJvLXJlZ3VsYXI=",
                      "--framer-font-family": '"Source Code Pro", monospace',
                      "--framer-font-size":
                        "calc(var(--variable-reference-ozHRs81Y8-SVRGtzIIz) * 1px)",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--variable-reference-pL1gSXpuh-SVRGtzIIz))",
                    },
                    children: "YJBAJsrmQbZQdP6ofELwghasdsdcwzpUeWRYxA3QJFHANS",
                  }),
                }),
                className: "framer-12mt0yy",
                fonts: ["GF;Source Code Pro-regular"],
                layoutDependency: F,
                layoutId: "H9Hn1NJ0b",
                style: {
                  "--extracted-r6o4lv":
                    "var(--variable-reference-pL1gSXpuh-SVRGtzIIz)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  "--variable-reference-ACbcH4bn0-rzU6PsFOu": y,
                  "--variable-reference-iroNXaN6O-rzU6PsFOu": h,
                  "--variable-reference-ozHRs81Y8-SVRGtzIIz": k,
                  "--variable-reference-pL1gSXpuh-SVRGtzIIz": g,
                },
                text: x,
                variants: {
                  "fVYkg_IIL-hover": {
                    "--extracted-r6o4lv":
                      "var(--token-33fcadcc-ceae-4d1f-b49b-4951ebe43e14, rgb(133, 133, 133))",
                  },
                  "xSuunNrNL-hover": {
                    "--extracted-r6o4lv":
                      "var(--variable-reference-pL1gSXpuh-SVRGtzIIz)",
                  },
                  Tr0xuHlDV: {
                    "--extracted-r6o4lv":
                      "var(--variable-reference-iroNXaN6O-rzU6PsFOu)",
                    "--variable-reference-ACbcH4bn0-rzU6PsFOu": y,
                    "--variable-reference-iroNXaN6O-rzU6PsFOu": h,
                  },
                  xSuunNrNL: {
                    "--extracted-r6o4lv":
                      "var(--token-33fcadcc-ceae-4d1f-b49b-4951ebe43e14, rgb(133, 133, 133))",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...Ie(
                  {
                    "fVYkg_IIL-hover": {
                      children: e(f, {
                        children: e(r.p, {
                          style: {
                            "--font-selector":
                              "R0Y7U291cmNlIENvZGUgUHJvLXJlZ3VsYXI=",
                            "--framer-font-family":
                              '"Source Code Pro", monospace',
                            "--framer-font-size":
                              "calc(var(--variable-reference-ozHRs81Y8-SVRGtzIIz) * 1px)",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-33fcadcc-ceae-4d1f-b49b-4951ebe43e14, rgb(133, 133, 133)))",
                          },
                          children:
                            "YJBAJsrmQbZQdP6ofELwghasdsdcwzpUeWRYxA3QJFHANS",
                        }),
                      }),
                    },
                    "xSuunNrNL-hover": {
                      children: e(f, {
                        children: e(r.p, {
                          style: {
                            "--font-selector":
                              "R0Y7U291cmNlIENvZGUgUHJvLXJlZ3VsYXI=",
                            "--framer-font-family":
                              '"Source Code Pro", monospace',
                            "--framer-font-size":
                              "calc(var(--variable-reference-ozHRs81Y8-SVRGtzIIz) * 1px)",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--variable-reference-pL1gSXpuh-SVRGtzIIz))",
                          },
                          children:
                            "YJBAJsrmQbZQdP6ofELwghasdsdcwzpUeWRYxA3QJFHANS",
                        }),
                      }),
                    },
                    CLLapAVUV: {
                      children: e(f, {
                        children: e(r.p, {
                          style: {
                            "--font-selector":
                              "R0Y7U291cmNlIENvZGUgUHJvLXJlZ3VsYXI=",
                            "--framer-font-family":
                              '"Source Code Pro", monospace',
                            "--framer-text-alignment": "center",
                          },
                          children: "Copied!",
                        }),
                      }),
                      text: void 0,
                    },
                    Tr0xuHlDV: {
                      children: e(f, {
                        children: e(r.p, {
                          style: {
                            "--font-selector":
                              "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                            "--framer-font-family": '"Coming Soon", sans-serif',
                            "--framer-font-size":
                              "calc(var(--variable-reference-ACbcH4bn0-rzU6PsFOu) * 1px)",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--variable-reference-iroNXaN6O-rzU6PsFOu))",
                          },
                          children:
                            "YJBAJsrmQbZQdP6ofELwghasdsdcwzpUeWRYxA3QJFHANS",
                        }),
                      }),
                      fonts: ["GF;Coming Soon-regular"],
                    },
                    xSuunNrNL: {
                      children: e(f, {
                        children: e(r.p, {
                          style: {
                            "--font-selector":
                              "R0Y7U291cmNlIENvZGUgUHJvLXJlZ3VsYXI=",
                            "--framer-font-family":
                              '"Source Code Pro", monospace',
                            "--framer-font-size":
                              "calc(var(--variable-reference-ozHRs81Y8-SVRGtzIIz) * 1px)",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-33fcadcc-ceae-4d1f-b49b-4951ebe43e14, rgb(133, 133, 133)))",
                          },
                          children:
                            "YJBAJsrmQbZQdP6ofELwghasdsdcwzpUeWRYxA3QJFHANS",
                        }),
                      }),
                    },
                    YUabDGEHJ: {
                      children: e(f, {
                        children: e(r.p, {
                          style: {
                            "--font-selector":
                              "R0Y7U291cmNlIENvZGUgUHJvLXJlZ3VsYXI=",
                            "--framer-font-family":
                              '"Source Code Pro", monospace',
                            "--framer-font-size":
                              "calc(var(--variable-reference-ozHRs81Y8-SVRGtzIIz) * 1px)",
                            "--framer-letter-spacing": "-0.03em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--variable-reference-pL1gSXpuh-SVRGtzIIz))",
                          },
                          children:
                            "YJBAJsrmQbZQdP6ofELwghasdsdcwzpUeWRYxA3QJFHANS",
                        }),
                      }),
                    },
                  },
                  b,
                  E
                ),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ur = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-4Ykps.framer-1074fa1, .framer-4Ykps .framer-1074fa1 { display: block; }",
    ".framer-4Ykps.framer-8ld5oa { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 3px; position: relative; width: 468px; }",
    ".framer-4Ykps .framer-1k0bryk-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-4Ykps .framer-12mt0yy { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-4Ykps.framer-8ld5oa { gap: 0px; } .framer-4Ykps.framer-8ld5oa > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-4Ykps.framer-8ld5oa > :first-child { margin-top: 0px; } .framer-4Ykps.framer-8ld5oa > :last-child { margin-bottom: 0px; } }",
    ".framer-4Ykps.framer-v-7bq9du.framer-8ld5oa { cursor: unset; height: 33px; width: 174px; }",
    ".framer-4Ykps.framer-v-xeaijb.framer-8ld5oa { cursor: unset; width: 465px; }",
    ".framer-4Ykps.framer-v-1phwtlo.framer-8ld5oa { width: 584px; }",
  ],
  Q = P(pr, ur, "framer-4Ykps"),
  Pr = Q;
Q.displayName = "CLICK TO COPY";
Q.defaultProps = { height: 25, width: 468 };
I(Q, {
  variant: {
    options: [
      "fVYkg_IIL",
      "IMhep3b9l",
      "CLLapAVUV",
      "YUabDGEHJ",
      "xSuunNrNL",
      "Tr0xuHlDV",
    ],
    optionTitles: [
      "click-to-copy",
      "Variant 3",
      "Variant 4",
      "Variant 5",
      "Inverse colors",
      "Centered",
    ],
    title: "Variant",
    type: i.Enum,
  },
  DvQBipYeb: {
    defaultValue: "",
    displayTextArea: !0,
    title: "COPY Content",
    type: i.String,
  },
  FRpg2PxcG: {
    defaultValue: "YJBAJsrmQbZQdP6ofELwghasdsdcwzpUeWRYxA3QJFHANS",
    displayTextArea: !0,
    title: "Visible Content",
    type: i.String,
  },
  iroNXaN6O: { defaultValue: "rgb(0, 0, 0)", title: "Color 2", type: i.Color },
  ACbcH4bn0: { defaultValue: 16, title: "Font Size 3", type: i.Number },
});
J(
  Q,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Source Code Pro",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/sourcecodepro/v23/HI_diYsKILxRpg3hIP6sJ7fM7PqPMcMnZFqUwX28DMyQhMthTXUcdJg.woff2",
          weight: "400",
        },
        {
          family: "Coming Soon",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/comingsoon/v19/qWcuB6mzpYL7AJ2VfdQR1u-XUjjzsykh.woff2",
          weight: "400",
        },
      ],
    },
    ...tr,
  ],
  { supportsExplicitInterCodegen: !0 }
);
export { Ir as a, Pr as b };
//# sourceMappingURL=chunk-DT26FUON.mjs.map
