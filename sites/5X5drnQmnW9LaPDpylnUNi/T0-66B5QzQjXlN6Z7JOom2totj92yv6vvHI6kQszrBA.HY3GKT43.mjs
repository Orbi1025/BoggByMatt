import { a as R, b as I } from "./chunk-DT26FUON.mjs";
import "./chunk-LDBPEOI5.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as L,
  A as M,
  Ca as Z,
  Da as y,
  P as Y,
  U as s,
  X as D,
  c,
  ca as n,
  da as f,
  fa as O,
  g as W,
  ga as F,
  ha as A,
  ka as e,
  m as X,
  n as C,
  r as q,
  sa as J,
  u as r,
  v as t,
  xa as o,
  ya as B,
  z as w,
} from "./chunk-PQMD5WSJ.mjs";
import { a as H } from "./chunk-ZO3H4Q5X.mjs";
import "./chunk-TM2PBHWD.mjs";
import { b as z } from "./chunk-ELYU6EKT.mjs";
function m(i) {
  let { border: h } = i,
    N = r("div", {
      onClick: async () => {
        try {
          let d = await fetch(i.image).then((k) => k.blob());
          if (!d) {
            console.error("Failed to fetch image");
            return;
          }
          let u = [
            new ClipboardItem({
              [d.type]: d,
            }),
          ];
          await z.clipboard.write(u), console.log("Image copied to clipboard!");
        } catch (d) {
          console.error("Failed to copy image to clipboard:", d);
        }
      },
      style: {
        backgroundColor: i.fill,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "max-content",
        textDecoration: "none",
        userSelect: "none",
        color: i.fontColor,
        padding: i.paddingIsMixed
          ? `${i.paddingTopLeft}px ${i.paddingTopRight}px ${i.paddingBottomRight}px ${i.paddingBottomLeft}px`
          : `${i.padding}px`,
        ...(h
          ? {
              borderWidth: h.widthIsMixed
                ? `${h.widthTop}px ${h.widthRight}px ${h.widthBottom}px ${h.widthLeft}px`
                : `${h.width}px`,
              borderStyle: h.style,
              borderColor: h.color,
            }
          : []),
        borderRadius: i.radiusIsMixed
          ? `${i.radiusTopLeft}px ${i.radiusTopRight}px ${i.radiusBottomRight}px ${i.radiusBottomLeft}px`
          : `${i.radius}px`,
        ...i.font,
        ...i.style,
        boxSizing: "border-box",
      },
      children: i.text,
    }),
    g = N;
  return (
    i.effects &&
      (g = r(w.div, {
        whileHover: {
          scale: i.effects.hoverScale,
        },
        whileTap: {
          scale: i.effects.pressScale,
        },
        initial: !1,
        transition: i.effects.transition,
        style: i.style,
        children: N,
      })),
    g
  );
}
m.displayName = "Copy Image Button";
var T = {
  hoverScale: 1.1,
  pressScale: 0.9,
};
D(m, {
  image: {
    type: s.Image,
  },
  text: {
    type: s.String,
    defaultValue: "Copy Image to Clipboard",
  },
  fill: {
    type: s.Color,
    defaultValue: "#EDEDED",
    optional: !0,
  },
  fontColor: {
    type: s.Color,
    defaultValue: "#000",
  },
  font: {
    type: "font",
    controls: "extended",
  },
  padding: {
    type: s.FusedNumber,
    defaultValue: 12,
    toggleKey: "paddingIsMixed",
    toggleTitles: ["All", "Individual"],
    valueKeys: [
      "paddingTopLeft",
      "paddingTopRight",
      "paddingBottomRight",
      "paddingBottomLeft",
    ],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  border: {
    type: s.Object,
    optional: !0,
    controls: {
      color: {
        type: s.Color,
        defaultValue: "#222",
      },
      width: {
        type: s.FusedNumber,
        defaultValue: 1,
        toggleKey: "widthIsMixed",
        toggleTitles: ["All", "Individual"],
        valueKeys: ["widthTop", "widthRight", "widthBottom", "widthLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
      },
      style: {
        type: s.Enum,
        defaultValue: "solid",
        options: ["solid", "dashed", "dotted", "double"],
        optionTitles: ["Solid", "Dashed", "Dotted", "Double"],
      },
    },
  },
  radius: {
    type: s.FusedNumber,
    defaultValue: 8,
    toggleKey: "radiusIsMixed",
    toggleTitles: ["All", "Individual"],
    valueKeys: [
      "radiusTopLeft",
      "radiusTopRight",
      "radiusBottomRight",
      "radiusBottomLeft",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
  effects: {
    type: s.Object,
    defaultValue: T,
    optional: !0,
    buttonTitle: "Hover & Press",
    icon: "effect",
    controls: {
      hoverScale: {
        type: s.Number,
        defaultValue: T.hoverScale,
        min: 0,
        step: 0.01,
        displayStepper: !0,
      },
      pressScale: {
        type: s.Number,
        defaultValue: T.pressScale,
        min: 0,
        step: 0.01,
        displayStepper: !0,
      },
      transition: {
        type: s.Transition,
      },
    },
  },
});
var K = y(m),
  _ = y(I),
  $ = y(R);
var rr = {
  aLyUMwTJA: "(min-width: 810px) and (max-width: 1251px)",
  ap8fgW5BT: "(min-width: 1252px) and (max-width: 1449px)",
  GxI3o1qvS: "(min-width: 1450px) and (max-width: 1909px)",
  Pe4Yz6Nre: "(min-width: 2210px)",
  tkBQYJMl4: "(min-width: 1910px) and (max-width: 2209px)",
  tmMme0ZrH: "(max-width: 809px)",
};
var U = "framer-BNih9",
  er = {
    aLyUMwTJA: "framer-v-uim53p",
    ap8fgW5BT: "framer-v-tnfe4s",
    GxI3o1qvS: "framer-v-1hunhxp",
    Pe4Yz6Nre: "framer-v-113tg7x",
    tkBQYJMl4: "framer-v-1ftorz7",
    tmMme0ZrH: "framer-v-1af9jlq",
  },
  x = H(),
  ar = {
    "1080p": "tkBQYJMl4",
    1450: "GxI3o1qvS",
    "Desktop 2": "Pe4Yz6Nre",
    Desktop: "ap8fgW5BT",
    Phone: "tmMme0ZrH",
    Tablet: "aLyUMwTJA",
  },
  tr = ({ height: i, id: h, width: b, ...N }) => {
    var g, d;
    return {
      ...N,
      variant:
        (d = (g = ar[N.variant]) !== null && g !== void 0 ? g : N.variant) !==
          null && d !== void 0
          ? d
          : "ap8fgW5BT",
    };
  },
  ir = W(function (i, h) {
    let { activeLocale: b, setLocale: N } = Y(),
      { style: g, className: d, layoutId: u, variant: k, ...G } = tr(i);
    C(() => {
      let p = H(void 0, b);
      if (((document.title = p.title || ""), p.viewport)) {
        var j;
        (j = document.querySelector('meta[name="viewport"]')) === null ||
          j === void 0 ||
          j.setAttribute("content", p.viewport);
      }
      if (p.robots) {
        let l = document.querySelector('meta[name="robots"]');
        l
          ? l.setAttribute("content", p.robots)
          : ((l = document.createElement("meta")),
            l.setAttribute("name", "robots"),
            l.setAttribute("content", p.robots),
            document.head.appendChild(l));
      }
      if (p.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((l) => l.startsWith("framer-body-"))
            .map((l) => document.body.classList.remove(l)),
          document.body.classList.add(`${p.bodyClassName}-framer-BNih9`),
          () => {
            document.body.classList.remove(`${p.bodyClassName}-framer-BNih9`);
          }
        );
    }, [void 0, b]);
    let [a, nr] = J(k, rr, !1),
      fr = void 0,
      Q = q(null),
      P = X(),
      S = [];
    return (
      F({}),
      r(A.Provider, {
        value: {
          primaryVariantId: "ap8fgW5BT",
          variantClassNames: er,
        },
        children: t(M, {
          id: u ?? P,
          children: [
            t(w.div, {
              ...G,
              className: L(U, ...S, "framer-tnfe4s", d),
              ref: h ?? Q,
              style: {
                ...g,
              },
              children: [
                r("header", {
                  className: "framer-nqrqaa",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: t("div", {
                    className: "framer-i5ycv2",
                    children: [
                      r(e, {
                        breakpoint: a,
                        overrides: {
                          aLyUMwTJA: {
                            children: t(c, {
                              children: [
                                r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "76px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "BOGG CONTENT",
                                }),
                                r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "83px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: r("br", {
                                    className: "trailing-break",
                                  }),
                                }),
                              ],
                            }),
                          },
                          tmMme0ZrH: {
                            children: t(c, {
                              children: [
                                r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "40px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "BOGG CONTENT",
                                }),
                                r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "83px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: r("br", {
                                    className: "trailing-break",
                                  }),
                                }),
                              ],
                            }),
                          },
                        },
                        children: r(B, {
                          __fromCanvasComponent: !0,
                          children: t(c, {
                            children: [
                              r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "83px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children: "BOGG CONTENT",
                              }),
                              r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "83px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children: r("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-15n93w4",
                          fonts: ["GF;Chelsea Market-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      r(e, {
                        breakpoint: a,
                        overrides: {
                          tmMme0ZrH: {
                            children: r(c, {
                              children: r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Coming Soon", sans-serif',
                                  "--framer-font-size": "21px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children: "GO FORTH AND SHILL MY BOGGS",
                              }),
                            }),
                          },
                        },
                        children: r(B, {
                          __fromCanvasComponent: !0,
                          children: r(c, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Coming Soon", sans-serif',
                                "--framer-font-size": "34px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: "GO FORTH AND SHILL MY BOGGS",
                            }),
                          }),
                          className: "framer-1whz10l",
                          fonts: ["GF;Coming Soon-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
                }),
                r("header", {
                  className: "framer-bkwavs",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: t("div", {
                    className: "framer-1lkblc1",
                    children: [
                      t("div", {
                        className: "framer-1szxrht",
                        children: [
                          t("div", {
                            className: "framer-djshff",
                            children: [
                              r("div", {
                                className: "framer-ik1c4u",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-pn7sza",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          pixelHeight: 2341,
                                          pixelWidth: 4e3,
                                          sizes: "336px",
                                          src: "/images/RTWg1hXLxWm4ybMbZazbIqWy7iM.png?scale-down-to=2048",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        pixelHeight: 2341,
                                        pixelWidth: 4e3,
                                        sizes: "265px",
                                        src: "/images/RTWg1hXLxWm4ybMbZazbIqWy7iM.png?scale-down-to=2048",
                                      },
                                      className: "framer-y27qmp",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-yv86w7",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-lobnmy-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "tB6DCo643",
                                        image:
                                          "/images/RTWg1hXLxWm4ybMbZazbIqWy7iM.png",
                                        layoutId: "tB6DCo643",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-r7wkt4",
                            children: [
                              r("div", {
                                className: "framer-b8o0bx",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-1qm43q0",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          pixelHeight: 1800,
                                          pixelWidth: 3200,
                                          sizes: "336px",
                                          src: "/images/J1Ju7d7mUPhiC0HLfGAm36sws.png?scale-down-to=2048",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        pixelHeight: 1800,
                                        pixelWidth: 3200,
                                        sizes: "265px",
                                        src: "/images/J1Ju7d7mUPhiC0HLfGAm36sws.png?scale-down-to=2048",
                                      },
                                      className: "framer-7j4mup",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-1kes4hg",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-1mxu9e-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "c0W61nqwG",
                                        image:
                                          "/images/J1Ju7d7mUPhiC0HLfGAm36sws.png",
                                        layoutId: "c0W61nqwG",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-1k9u2f4",
                            children: [
                              r("div", {
                                className: "framer-16ymonv",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-h64zmz",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 1e3,
                                          pixelWidth: 1e3,
                                          sizes: "336px",
                                          src: "/images/yoX2LA2bkkFLcABxqJb9LgnlMg.png",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        pixelHeight: 1e3,
                                        pixelWidth: 1e3,
                                        sizes: "265px",
                                        src: "/images/yoX2LA2bkkFLcABxqJb9LgnlMg.png",
                                      },
                                      className: "framer-j0b9xn",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-ruz4z6",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-idniyl-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "aT9RMzdTB",
                                        image:
                                          "/images/yoX2LA2bkkFLcABxqJb9LgnlMg.png",
                                        layoutId: "aT9RMzdTB",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-vbmr88",
                            children: [
                              r("div", {
                                className: "framer-18txsya",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-1g00cne",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 3640,
                                          pixelWidth: 4822,
                                          positionX: "center",
                                          positionY: "top",
                                          sizes: "336px",
                                          src: "/images/GtBRkVXbLGWD7vsoHrsjLqUAow.jpg?scale-down-to=2048",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        pixelHeight: 3640,
                                        pixelWidth: 4822,
                                        positionX: "center",
                                        positionY: "top",
                                        sizes: "265px",
                                        src: "/images/GtBRkVXbLGWD7vsoHrsjLqUAow.jpg?scale-down-to=2048",
                                      },
                                      className: "framer-jh0lcu",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-1kbhv67",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-bonyfu-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "TbpxvqFLu",
                                        image:
                                          "/images/GtBRkVXbLGWD7vsoHrsjLqUAow.jpg",
                                        layoutId: "TbpxvqFLu",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t("div", {
                        className: "framer-1kyb736",
                        children: [
                          t("div", {
                            className: "framer-1aozjw8",
                            children: [
                              r("div", {
                                className: "framer-1jfydbb",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-1f9flnd",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 1e3,
                                          pixelWidth: 1e3,
                                          sizes: "336px",
                                          src: "/images/ummOp2K6kpeJ9bIsq1dJggjU.png",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        pixelHeight: 1e3,
                                        pixelWidth: 1e3,
                                        sizes: "265px",
                                        src: "/images/ummOp2K6kpeJ9bIsq1dJggjU.png",
                                      },
                                      className: "framer-1f1rg0r",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-1sxs780",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-g0pdti-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "buTkGdpbF",
                                        image:
                                          "/images/ummOp2K6kpeJ9bIsq1dJggjU.png",
                                        layoutId: "buTkGdpbF",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-1snq30t",
                            children: [
                              r("div", {
                                className: "framer-h183gv",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-rud7g2",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 1280,
                                          pixelWidth: 1280,
                                          sizes: "336px",
                                          src: "/images/SujqoXqdpDcIIR56bybmewRfg.jpg",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        pixelHeight: 1280,
                                        pixelWidth: 1280,
                                        sizes: "265px",
                                        src: "/images/SujqoXqdpDcIIR56bybmewRfg.jpg",
                                      },
                                      className: "framer-1s5g5ff",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-hp98t5",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-18eaevo-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "rq7AdILPX",
                                        image:
                                          "/images/SujqoXqdpDcIIR56bybmewRfg.jpg",
                                        layoutId: "rq7AdILPX",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-1j1vr29",
                            children: [
                              r("div", {
                                className: "framer-15kdbsn",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-1qdcr4y",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 3568,
                                          pixelWidth: 4822,
                                          sizes: "336px",
                                          src: "/images/YuvRnDdcvfQBqDv2Ke2HNNYeQ.png?scale-down-to=2048",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        pixelHeight: 3568,
                                        pixelWidth: 4822,
                                        sizes: "265px",
                                        src: "/images/YuvRnDdcvfQBqDv2Ke2HNNYeQ.png?scale-down-to=2048",
                                      },
                                      className: "framer-1qhhtkx",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-rseakw",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-iz77dx-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "IUTZkt_t0",
                                        image:
                                          "/images/YuvRnDdcvfQBqDv2Ke2HNNYeQ.png",
                                        layoutId: "IUTZkt_t0",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-n2biok",
                            children: [
                              r("div", {
                                className: "framer-1ahvdgn",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-lx9wsu",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 4800,
                                          pixelWidth: 3e3,
                                          positionX: "center",
                                          positionY: "top",
                                          sizes: "336px",
                                          src: "/images/Mbw5wUJoiyayFkKbIhtC45Rhhg.png?scale-down-to=2048",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        pixelHeight: 4800,
                                        pixelWidth: 3e3,
                                        positionX: "center",
                                        positionY: "top",
                                        sizes: "265px",
                                        src: "/images/Mbw5wUJoiyayFkKbIhtC45Rhhg.png?scale-down-to=2048",
                                      },
                                      className: "framer-1qwf6z2",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-3qc25b",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-1qfx2cx-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "y26uTcdNp",
                                        image:
                                          "/images/Mbw5wUJoiyayFkKbIhtC45Rhhg.png",
                                        layoutId: "y26uTcdNp",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t("div", {
                        className: "framer-3oumjk",
                        children: [
                          t("div", {
                            className: "framer-1q2mpd",
                            children: [
                              r("div", {
                                className: "framer-lvqmvc",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-l8743b",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 731,
                                          pixelWidth: 1280,
                                          sizes: "336px",
                                          src: "/images/y27ZQYhPhWaznffihcNDmDcIgE.jpg",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        loading: "lazy",
                                        pixelHeight: 731,
                                        pixelWidth: 1280,
                                        sizes: "265px",
                                        src: "/images/y27ZQYhPhWaznffihcNDmDcIgE.jpg",
                                      },
                                      className: "framer-eg9906",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-nxyhkj",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-bo07kl-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "Pa7vt_f1m",
                                        image:
                                          "/images/y27ZQYhPhWaznffihcNDmDcIgE.jpg",
                                        layoutId: "Pa7vt_f1m",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-l66vqc",
                            children: [
                              r("div", {
                                className: "framer-fx2yr1",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-1xuon2l",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 720,
                                          pixelWidth: 1280,
                                          sizes: "336px",
                                          src: "/images/NUIylPb01FvwkHTaHOm5dF2XXV0.jpg",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        loading: "lazy",
                                        pixelHeight: 720,
                                        pixelWidth: 1280,
                                        sizes: "265px",
                                        src: "/images/NUIylPb01FvwkHTaHOm5dF2XXV0.jpg",
                                      },
                                      className: "framer-1f2s9vs",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-cbwejy",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-1q2i4f4-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "osDrjDNC0",
                                        image:
                                          "/images/NUIylPb01FvwkHTaHOm5dF2XXV0.jpg",
                                        layoutId: "osDrjDNC0",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-a96vi5",
                            children: [
                              r("div", {
                                className: "framer-1m1if9c",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-w4l5fa",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 1280,
                                          pixelWidth: 1280,
                                          sizes: "336px",
                                          src: "/images/hQ2YK29ev0wNrY7LQ67QHFLAZ0.png",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        loading: "lazy",
                                        pixelHeight: 1280,
                                        pixelWidth: 1280,
                                        sizes: "265px",
                                        src: "/images/hQ2YK29ev0wNrY7LQ67QHFLAZ0.png",
                                      },
                                      className: "framer-14dcqaf",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-jnpxgt",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-1s4ae3w-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "ISV6Rg05M",
                                        image:
                                          "/images/hQ2YK29ev0wNrY7LQ67QHFLAZ0.png",
                                        layoutId: "ISV6Rg05M",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-95chor",
                            children: [
                              r("div", {
                                className: "framer-1nm814m",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-105h1g4",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 720,
                                          pixelWidth: 1280,
                                          positionX: "center",
                                          positionY: "top",
                                          sizes: "336px",
                                          src: "/images/gckBzotDRaHzbUh9J4ZPFAQCpho.jpg",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        loading: "lazy",
                                        pixelHeight: 720,
                                        pixelWidth: 1280,
                                        positionX: "center",
                                        positionY: "top",
                                        sizes: "265px",
                                        src: "/images/gckBzotDRaHzbUh9J4ZPFAQCpho.jpg",
                                      },
                                      className: "framer-1nc4dpw",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-msjbz2",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-a3p6l9-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "xXd4m8tev",
                                        image:
                                          "/images/gckBzotDRaHzbUh9J4ZPFAQCpho.jpg",
                                        layoutId: "xXd4m8tev",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t("div", {
                        className: "framer-1g1xsub",
                        children: [
                          t("div", {
                            className: "framer-1t7gzay",
                            children: [
                              r("div", {
                                className: "framer-vza93r",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-12osyle",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 1280,
                                          pixelWidth: 1280,
                                          sizes: "336px",
                                          src: "/images/dBW6DlIo13Y1hj0Lpf5kzObk3nY.png",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        loading: "lazy",
                                        pixelHeight: 1280,
                                        pixelWidth: 1280,
                                        sizes: "265px",
                                        src: "/images/dBW6DlIo13Y1hj0Lpf5kzObk3nY.png",
                                      },
                                      className: "framer-1r7xumy",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-j8o08x",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-15spagz-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "rmUTSZ2Ym",
                                        image:
                                          "/images/dBW6DlIo13Y1hj0Lpf5kzObk3nY.png",
                                        layoutId: "rmUTSZ2Ym",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-imcgaw",
                            children: [
                              r("div", {
                                className: "framer-zx0yt5",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-yghyxh",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 3568,
                                          pixelWidth: 4822,
                                          sizes: "336px",
                                          src: "/images/2hU0TA5zNTousVeeBLJjTxo3k.jpg?scale-down-to=2048",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        loading: "lazy",
                                        pixelHeight: 3568,
                                        pixelWidth: 4822,
                                        sizes: "265px",
                                        src: "/images/2hU0TA5zNTousVeeBLJjTxo3k.jpg?scale-down-to=2048",
                                      },
                                      className: "framer-1evclxm",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-la6tby",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-1g0ys4u-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "xKByXU4FF",
                                        image:
                                          "/images/2hU0TA5zNTousVeeBLJjTxo3k.jpg",
                                        layoutId: "xKByXU4FF",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-1x5vqhj",
                            children: [
                              r("div", {
                                className: "framer-b997s4",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-dwf758",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 731,
                                          pixelWidth: 1280,
                                          positionX: "left",
                                          positionY: "center",
                                          sizes: "336px",
                                          src: "/images/D6Lf5LOpYgZRjJXc2eY4agJg0Mg.jpg",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        loading: "lazy",
                                        pixelHeight: 731,
                                        pixelWidth: 1280,
                                        positionX: "left",
                                        positionY: "center",
                                        sizes: "265px",
                                        src: "/images/D6Lf5LOpYgZRjJXc2eY4agJg0Mg.jpg",
                                      },
                                      className: "framer-1xjiv2r",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-mlp7j4",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-1us8be0-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "VmWF8FtXi",
                                        image:
                                          "/images/D6Lf5LOpYgZRjJXc2eY4agJg0Mg.jpg",
                                        layoutId: "VmWF8FtXi",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          t("div", {
                            className: "framer-uu6vcy",
                            children: [
                              r("div", {
                                className: "framer-11nlanz",
                                "data-border": !0,
                                children: r("div", {
                                  className: "framer-19hmcdf",
                                  children: r(e, {
                                    breakpoint: a,
                                    overrides: {
                                      tmMme0ZrH: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 1266.804173530664,
                                          intrinsicWidth: 1266.804173530664,
                                          loading: "lazy",
                                          pixelHeight: 833,
                                          pixelWidth: 1280,
                                          positionX: "center",
                                          positionY: "top",
                                          sizes: "336px",
                                          src: "/images/ZmOmUmB0xElIGQUvbWEPXnwplIg.jpg",
                                        },
                                      },
                                    },
                                    children: r(o, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1266.804173530664,
                                        intrinsicWidth: 1266.804173530664,
                                        loading: "lazy",
                                        pixelHeight: 833,
                                        pixelWidth: 1280,
                                        positionX: "center",
                                        positionY: "top",
                                        sizes: "265px",
                                        src: "/images/ZmOmUmB0xElIGQUvbWEPXnwplIg.jpg",
                                      },
                                      className: "framer-tyim85",
                                      "data-framer-name": "image",
                                      name: "image",
                                    }),
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-1yoer1n",
                                "data-border": !0,
                                children: r(n, {
                                  children: r(f, {
                                    className: "framer-1up2pub-container",
                                    children: r(e, {
                                      breakpoint: a,
                                      overrides: {
                                        tmMme0ZrH: {
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                        },
                                      },
                                      children: r(m, {
                                        effects: {
                                          hoverScale: 1.1,
                                          pressScale: 0.9,
                                          transition: {
                                            damping: 60,
                                            delay: 0,
                                            duration: 0.3,
                                            ease: [0.44, 0, 0.56, 1],
                                            mass: 1,
                                            stiffness: 500,
                                            type: "spring",
                                          },
                                        },
                                        fill: "rgb(237, 237, 237)",
                                        font: {
                                          fontFamily:
                                            '"Coming Soon", sans-serif',
                                          fontSize: "16px",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          letterSpacing: "0em",
                                          lineHeight: "1em",
                                        },
                                        fontColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        id: "sLclrVyeu",
                                        image:
                                          "/images/ZmOmUmB0xElIGQUvbWEPXnwplIg.jpg",
                                        layoutId: "sLclrVyeu",
                                        padding: 12,
                                        paddingBottomLeft: 12,
                                        paddingBottomRight: 12,
                                        paddingIsMixed: !1,
                                        paddingTopLeft: 12,
                                        paddingTopRight: 12,
                                        radius: 8,
                                        radiusBottomLeft: 8,
                                        radiusBottomRight: 8,
                                        radiusIsMixed: !1,
                                        radiusTopLeft: 8,
                                        radiusTopRight: 8,
                                        style: {
                                          width: "100%",
                                        },
                                        text: "COPY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                t("header", {
                  className: "framer-jkt88t",
                  "data-border": !0,
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    r(B, {
                      __fromCanvasComponent: !0,
                      children: r(c, {
                        children: r("p", {
                          style: {
                            "--font-selector":
                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                            "--framer-font-family":
                              '"Chelsea Market", sans-serif',
                            "--framer-font-size": "83px",
                            "--framer-letter-spacing": "0.05em",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "rgb(38, 38, 38)",
                          },
                          children: "BOGG",
                        }),
                      }),
                      className: "framer-x5ex4r",
                      fonts: ["GF;Chelsea Market-regular"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    r("section", {
                      className: "framer-1ekmakh",
                      "data-border": !0,
                      children: r("div", {
                        className: "framer-md8vkr",
                        children: r(e, {
                          breakpoint: a,
                          overrides: {
                            tmMme0ZrH: {
                              width: "calc(100vw - 24px)",
                            },
                          },
                          children: r(n, {
                            width: "534px",
                            children: r(f, {
                              className: "framer-698st3-container",
                              children: r(e, {
                                breakpoint: a,
                                overrides: {
                                  aLyUMwTJA: {
                                    ACbcH4bn0: 16,
                                  },
                                  tmMme0ZrH: {
                                    ACbcH4bn0: 12,
                                  },
                                },
                                children: r(I, {
                                  ACbcH4bn0: 17,
                                  DvQBipYeb: "0xcomingsoon",
                                  FRpg2PxcG: "0xcomingsoon",
                                  height: "100%",
                                  id: "jJlKAqr52",
                                  iroNXaN6O: "rgb(0, 0, 0)",
                                  layoutId: "jJlKAqr52",
                                  style: {
                                    height: "100%",
                                    width: "100%",
                                  },
                                  variant: "Tr0xuHlDV",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    r(e, {
                      breakpoint: a,
                      overrides: {
                        aLyUMwTJA: {
                          children: r(c, {
                            children: t("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Coming Soon", sans-serif',
                                "--framer-font-size": "20px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: [
                                "DISCLAIMER: $BOGG is a MEMECOIN WITH NO INTRINSIC VALUE. DON\u2019T RISK MONEY YOU ARE AFRAID OF LOSING. THE PRICE MAY GO UP OR IT MAY GO DOWN. WE ARE NOT RESPONSIBLE FOR THE PRICE OF THE TOKEN.",
                                r("br", {}),
                                r("br", {}),
                                "",
                              ],
                            }),
                          }),
                        },
                        tmMme0ZrH: {
                          children: r(c, {
                            children: t("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Coming Soon", sans-serif',
                                "--framer-font-size": "12px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: [
                                r("span", {
                                  style: {
                                    "--framer-font-size": "15px",
                                  },
                                  children:
                                    "DISCLAIMER: $BOGG is a MEMECOIN WITH NO INTRINSIC VALUE. DON\u2019T RISK MONEY YOU ARE AFRAID OF LOSING. THE PRICE MAY GO UP OR IT MAY GO DOWN. WE ARE NOT RESPONSIBLE FOR THE PRICE OF THE TOKEN.",
                                }),
                                t("span", {
                                  style: {
                                    "--framer-font-size": "15px",
                                  },
                                  children: [r("br", {}), r("br", {})],
                                }),
                                r("span", {
                                  style: {
                                    "--framer-font-size": "15px",
                                  },
                                  children: "",
                                }),
                              ],
                            }),
                          }),
                        },
                      },
                      children: r(B, {
                        __fromCanvasComponent: !0,
                        children: r(c, {
                          children: t("p", {
                            style: {
                              "--font-selector":
                                "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                              "--framer-font-family":
                                '"Coming Soon", sans-serif',
                              "--framer-font-size": "20px",
                              "--framer-letter-spacing": "0.05em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(38, 38, 38)",
                            },
                            children: [
                              r("span", {
                                style: {
                                  "--framer-font-size": "27px",
                                },
                                children:
                                  "DISCLAIMER: $BOGG is a MEMECOIN WITH NO INTRINSIC VALUE. DON\u2019T RISK MONEY YOU ARE AFRAID OF LOSING. THE PRICE MAY GO UP OR IT MAY GO DOWN. WE ARE NOT RESPONSIBLE FOR THE PRICE OF THE TOKEN.",
                              }),
                              t("span", {
                                style: {
                                  "--framer-font-size": "27px",
                                },
                                children: [r("br", {}), r("br", {})],
                              }),
                              r("span", {
                                style: {
                                  "--framer-font-size": "27px",
                                },
                                children: "",
                              }),
                            ],
                          }),
                        }),
                        className: "framer-11j2qpv",
                        fonts: ["GF;Coming Soon-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
                r(n, {
                  width: "100vw",
                  children: r(e, {
                    breakpoint: a,
                    overrides: {
                      tmMme0ZrH: {
                        layoutScroll: !0,
                      },
                    },
                    children: r(f, {
                      className: "framer-3gw49k-container",
                      children: r(e, {
                        breakpoint: a,
                        overrides: {
                          aLyUMwTJA: {
                            lADySZ6HS: "rgba(18, 18, 18, 0.22)",
                            variant: "iVd8OmJTR",
                          },
                          tmMme0ZrH: {
                            ah9qjiq38: 20,
                            lADySZ6HS: "rgba(18, 18, 18, 0.2)",
                            tbGiGAZ87: "column",
                            variant: "iVd8OmJTR",
                          },
                        },
                        children: r(R, {
                          ah9qjiq38: 10,
                          FTpeBrC3k: "jup.ag",
                          height: "100%",
                          id: "AQlWeNczq",
                          lADySZ6HS: "rgba(18, 18, 18, 0.15)",
                          layoutId: "AQlWeNczq",
                          style: {
                            width: "100%",
                          },
                          tbGiGAZ87: "row",
                          variant: "NqbNnRmWy",
                          VytlcRlRZ: "rgba(0, 0, 0, 0.17)",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            r("div", {
              className: L(U, ...S),
              id: "overlay",
            }),
          ],
        }),
      })
    );
  }),
  mr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${x.bodyClassName}-framer-BNih9 { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; }`,
    ".framer-BNih9.framer-1s32f24, .framer-BNih9 .framer-1s32f24 { display: block; }",
    ".framer-BNih9.framer-tnfe4s { align-content: center; align-items: center; background-color: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, #ffec45); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1252px; }",
    ".framer-BNih9 .framer-nqrqaa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: center; overflow: hidden; padding: 193px 40px 100px 40px; position: relative; width: 100%; }",
    ".framer-BNih9 .framer-i5ycv2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-BNih9 .framer-15n93w4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 92px; position: relative; white-space: pre-wrap; width: 1096px; word-break: break-word; word-wrap: break-word; }",
    ".framer-BNih9 .framer-1whz10l { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 36px; position: relative; white-space: pre-wrap; width: 1096px; word-break: break-word; word-wrap: break-word; }",
    ".framer-BNih9 .framer-bkwavs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 40px 193px 40px; position: relative; width: 100%; }",
    ".framer-BNih9 .framer-1lkblc1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 61px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-BNih9 .framer-1szxrht, .framer-BNih9 .framer-1kyb736, .framer-BNih9 .framer-3oumjk, .framer-BNih9 .framer-1g1xsub { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 21px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-BNih9 .framer-djshff, .framer-BNih9 .framer-r7wkt4, .framer-BNih9 .framer-1k9u2f4, .framer-BNih9 .framer-vbmr88, .framer-BNih9 .framer-1aozjw8, .framer-BNih9 .framer-1snq30t, .framer-BNih9 .framer-1j1vr29, .framer-BNih9 .framer-n2biok, .framer-BNih9 .framer-1q2mpd, .framer-BNih9 .framer-l66vqc, .framer-BNih9 .framer-a96vi5, .framer-BNih9 .framer-95chor, .framer-BNih9 .framer-1t7gzay, .framer-BNih9 .framer-imcgaw, .framer-BNih9 .framer-1x5vqhj, .framer-BNih9 .framer-uu6vcy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-BNih9 .framer-ik1c4u, .framer-BNih9 .framer-b8o0bx, .framer-BNih9 .framer-1jfydbb, .framer-BNih9 .framer-h183gv, .framer-BNih9 .framer-lvqmvc, .framer-BNih9 .framer-fx2yr1, .framer-BNih9 .framer-zx0yt5 { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ededed; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 8px 8px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-BNih9 .framer-pn7sza, .framer-BNih9 .framer-1qm43q0, .framer-BNih9 .framer-h64zmz, .framer-BNih9 .framer-1g00cne, .framer-BNih9 .framer-1f9flnd, .framer-BNih9 .framer-rud7g2, .framer-BNih9 .framer-1qdcr4y, .framer-BNih9 .framer-lx9wsu, .framer-BNih9 .framer-l8743b, .framer-BNih9 .framer-1xuon2l, .framer-BNih9 .framer-w4l5fa, .framer-BNih9 .framer-105h1g4, .framer-BNih9 .framer-12osyle, .framer-BNih9 .framer-yghyxh, .framer-BNih9 .framer-dwf758, .framer-BNih9 .framer-19hmcdf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-BNih9 .framer-y27qmp, .framer-BNih9 .framer-7j4mup, .framer-BNih9 .framer-j0b9xn, .framer-BNih9 .framer-jh0lcu, .framer-BNih9 .framer-1f1rg0r, .framer-BNih9 .framer-1s5g5ff, .framer-BNih9 .framer-1qhhtkx, .framer-BNih9 .framer-1qwf6z2, .framer-BNih9 .framer-eg9906, .framer-BNih9 .framer-1f2s9vs, .framer-BNih9 .framer-14dcqaf, .framer-BNih9 .framer-1nc4dpw, .framer-BNih9 .framer-1r7xumy, .framer-BNih9 .framer-1evclxm, .framer-BNih9 .framer-1xjiv2r, .framer-BNih9 .framer-tyim85 { aspect-ratio: 1 / 1; border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; border-top-left-radius: 11px; border-top-right-radius: 11px; flex: none; height: var(--framer-aspect-ratio-supported, 265px); overflow: visible; position: relative; width: 265px; }",
    ".framer-BNih9 .framer-yv86w7, .framer-BNih9 .framer-1kes4hg, .framer-BNih9 .framer-ruz4z6, .framer-BNih9 .framer-1kbhv67, .framer-BNih9 .framer-1sxs780, .framer-BNih9 .framer-hp98t5, .framer-BNih9 .framer-rseakw, .framer-BNih9 .framer-3qc25b, .framer-BNih9 .framer-nxyhkj, .framer-BNih9 .framer-cbwejy, .framer-BNih9 .framer-jnpxgt, .framer-BNih9 .framer-msjbz2, .framer-BNih9 .framer-j8o08x, .framer-BNih9 .framer-la6tby, .framer-BNih9 .framer-mlp7j4, .framer-BNih9 .framer-1yoer1n { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ededed; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 7px 6px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: 1px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-BNih9 .framer-lobnmy-container, .framer-BNih9 .framer-1mxu9e-container, .framer-BNih9 .framer-idniyl-container, .framer-BNih9 .framer-bonyfu-container, .framer-BNih9 .framer-g0pdti-container, .framer-BNih9 .framer-18eaevo-container, .framer-BNih9 .framer-iz77dx-container, .framer-BNih9 .framer-1qfx2cx-container, .framer-BNih9 .framer-bo07kl-container, .framer-BNih9 .framer-1q2i4f4-container, .framer-BNih9 .framer-1s4ae3w-container, .framer-BNih9 .framer-a3p6l9-container, .framer-BNih9 .framer-15spagz-container, .framer-BNih9 .framer-1g0ys4u-container, .framer-BNih9 .framer-1us8be0-container, .framer-BNih9 .framer-1up2pub-container { flex: none; height: auto; position: relative; width: 120px; }",
    ".framer-BNih9 .framer-16ymonv, .framer-BNih9 .framer-18txsya, .framer-BNih9 .framer-15kdbsn, .framer-BNih9 .framer-1ahvdgn, .framer-BNih9 .framer-1m1if9c, .framer-BNih9 .framer-1nm814m, .framer-BNih9 .framer-vza93r, .framer-BNih9 .framer-b997s4, .framer-BNih9 .framer-11nlanz { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 8px 8px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-BNih9 .framer-jkt88t { --border-bottom-width: 0px; --border-color: #1f1f1f; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 49px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 100%; }",
    ".framer-BNih9 .framer-x5ex4r { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 76px; position: relative; white-space: pre-wrap; width: 1096px; word-break: break-word; word-wrap: break-word; }",
    ".framer-BNih9 .framer-1ekmakh { --border-bottom-width: 3.96px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.08), inset 5px 5px 0px 0px rgba(255, 255, 255, 0.2); flex: none; height: 81px; overflow: visible; position: relative; width: 534px; }",
    ".framer-BNih9 .framer-md8vkr { align-content: center; align-items: center; background-color: rgba(253, 194, 56, 0); bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: center; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-BNih9 .framer-698st3-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }",
    ".framer-BNih9 .framer-11j2qpv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1096px; word-break: break-word; word-wrap: break-word; }",
    ".framer-BNih9 .framer-3gw49k-container { flex: none; height: auto; left: 1px; position: absolute; right: -1px; top: 0px; z-index: 10; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-BNih9.framer-tnfe4s, .framer-BNih9 .framer-nqrqaa, .framer-BNih9 .framer-i5ycv2, .framer-BNih9 .framer-bkwavs, .framer-BNih9 .framer-1lkblc1, .framer-BNih9 .framer-1szxrht, .framer-BNih9 .framer-djshff, .framer-BNih9 .framer-ik1c4u, .framer-BNih9 .framer-pn7sza, .framer-BNih9 .framer-yv86w7, .framer-BNih9 .framer-r7wkt4, .framer-BNih9 .framer-b8o0bx, .framer-BNih9 .framer-1qm43q0, .framer-BNih9 .framer-1kes4hg, .framer-BNih9 .framer-1k9u2f4, .framer-BNih9 .framer-16ymonv, .framer-BNih9 .framer-h64zmz, .framer-BNih9 .framer-ruz4z6, .framer-BNih9 .framer-vbmr88, .framer-BNih9 .framer-18txsya, .framer-BNih9 .framer-1g00cne, .framer-BNih9 .framer-1kbhv67, .framer-BNih9 .framer-1kyb736, .framer-BNih9 .framer-1aozjw8, .framer-BNih9 .framer-1jfydbb, .framer-BNih9 .framer-1f9flnd, .framer-BNih9 .framer-1sxs780, .framer-BNih9 .framer-1snq30t, .framer-BNih9 .framer-h183gv, .framer-BNih9 .framer-rud7g2, .framer-BNih9 .framer-hp98t5, .framer-BNih9 .framer-1j1vr29, .framer-BNih9 .framer-15kdbsn, .framer-BNih9 .framer-1qdcr4y, .framer-BNih9 .framer-rseakw, .framer-BNih9 .framer-n2biok, .framer-BNih9 .framer-1ahvdgn, .framer-BNih9 .framer-lx9wsu, .framer-BNih9 .framer-3qc25b, .framer-BNih9 .framer-3oumjk, .framer-BNih9 .framer-1q2mpd, .framer-BNih9 .framer-lvqmvc, .framer-BNih9 .framer-l8743b, .framer-BNih9 .framer-nxyhkj, .framer-BNih9 .framer-l66vqc, .framer-BNih9 .framer-fx2yr1, .framer-BNih9 .framer-1xuon2l, .framer-BNih9 .framer-cbwejy, .framer-BNih9 .framer-a96vi5, .framer-BNih9 .framer-1m1if9c, .framer-BNih9 .framer-w4l5fa, .framer-BNih9 .framer-jnpxgt, .framer-BNih9 .framer-95chor, .framer-BNih9 .framer-1nm814m, .framer-BNih9 .framer-105h1g4, .framer-BNih9 .framer-msjbz2, .framer-BNih9 .framer-1g1xsub, .framer-BNih9 .framer-1t7gzay, .framer-BNih9 .framer-vza93r, .framer-BNih9 .framer-12osyle, .framer-BNih9 .framer-j8o08x, .framer-BNih9 .framer-imcgaw, .framer-BNih9 .framer-zx0yt5, .framer-BNih9 .framer-yghyxh, .framer-BNih9 .framer-la6tby, .framer-BNih9 .framer-1x5vqhj, .framer-BNih9 .framer-b997s4, .framer-BNih9 .framer-dwf758, .framer-BNih9 .framer-mlp7j4, .framer-BNih9 .framer-uu6vcy, .framer-BNih9 .framer-11nlanz, .framer-BNih9 .framer-19hmcdf, .framer-BNih9 .framer-1yoer1n, .framer-BNih9 .framer-jkt88t, .framer-BNih9 .framer-md8vkr { gap: 0px; } .framer-BNih9.framer-tnfe4s > *, .framer-BNih9 .framer-md8vkr > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-BNih9.framer-tnfe4s > :first-child, .framer-BNih9 .framer-nqrqaa > :first-child, .framer-BNih9 .framer-i5ycv2 > :first-child, .framer-BNih9 .framer-bkwavs > :first-child, .framer-BNih9 .framer-1lkblc1 > :first-child, .framer-BNih9 .framer-djshff > :first-child, .framer-BNih9 .framer-ik1c4u > :first-child, .framer-BNih9 .framer-pn7sza > :first-child, .framer-BNih9 .framer-yv86w7 > :first-child, .framer-BNih9 .framer-r7wkt4 > :first-child, .framer-BNih9 .framer-b8o0bx > :first-child, .framer-BNih9 .framer-1qm43q0 > :first-child, .framer-BNih9 .framer-1kes4hg > :first-child, .framer-BNih9 .framer-1k9u2f4 > :first-child, .framer-BNih9 .framer-16ymonv > :first-child, .framer-BNih9 .framer-h64zmz > :first-child, .framer-BNih9 .framer-ruz4z6 > :first-child, .framer-BNih9 .framer-vbmr88 > :first-child, .framer-BNih9 .framer-18txsya > :first-child, .framer-BNih9 .framer-1g00cne > :first-child, .framer-BNih9 .framer-1kbhv67 > :first-child, .framer-BNih9 .framer-1aozjw8 > :first-child, .framer-BNih9 .framer-1jfydbb > :first-child, .framer-BNih9 .framer-1f9flnd > :first-child, .framer-BNih9 .framer-1sxs780 > :first-child, .framer-BNih9 .framer-1snq30t > :first-child, .framer-BNih9 .framer-h183gv > :first-child, .framer-BNih9 .framer-rud7g2 > :first-child, .framer-BNih9 .framer-hp98t5 > :first-child, .framer-BNih9 .framer-1j1vr29 > :first-child, .framer-BNih9 .framer-15kdbsn > :first-child, .framer-BNih9 .framer-1qdcr4y > :first-child, .framer-BNih9 .framer-rseakw > :first-child, .framer-BNih9 .framer-n2biok > :first-child, .framer-BNih9 .framer-1ahvdgn > :first-child, .framer-BNih9 .framer-lx9wsu > :first-child, .framer-BNih9 .framer-3qc25b > :first-child, .framer-BNih9 .framer-1q2mpd > :first-child, .framer-BNih9 .framer-lvqmvc > :first-child, .framer-BNih9 .framer-l8743b > :first-child, .framer-BNih9 .framer-nxyhkj > :first-child, .framer-BNih9 .framer-l66vqc > :first-child, .framer-BNih9 .framer-fx2yr1 > :first-child, .framer-BNih9 .framer-1xuon2l > :first-child, .framer-BNih9 .framer-cbwejy > :first-child, .framer-BNih9 .framer-a96vi5 > :first-child, .framer-BNih9 .framer-1m1if9c > :first-child, .framer-BNih9 .framer-w4l5fa > :first-child, .framer-BNih9 .framer-jnpxgt > :first-child, .framer-BNih9 .framer-95chor > :first-child, .framer-BNih9 .framer-1nm814m > :first-child, .framer-BNih9 .framer-105h1g4 > :first-child, .framer-BNih9 .framer-msjbz2 > :first-child, .framer-BNih9 .framer-1t7gzay > :first-child, .framer-BNih9 .framer-vza93r > :first-child, .framer-BNih9 .framer-12osyle > :first-child, .framer-BNih9 .framer-j8o08x > :first-child, .framer-BNih9 .framer-imcgaw > :first-child, .framer-BNih9 .framer-zx0yt5 > :first-child, .framer-BNih9 .framer-yghyxh > :first-child, .framer-BNih9 .framer-la6tby > :first-child, .framer-BNih9 .framer-1x5vqhj > :first-child, .framer-BNih9 .framer-b997s4 > :first-child, .framer-BNih9 .framer-dwf758 > :first-child, .framer-BNih9 .framer-mlp7j4 > :first-child, .framer-BNih9 .framer-uu6vcy > :first-child, .framer-BNih9 .framer-11nlanz > :first-child, .framer-BNih9 .framer-19hmcdf > :first-child, .framer-BNih9 .framer-1yoer1n > :first-child, .framer-BNih9 .framer-jkt88t > :first-child, .framer-BNih9 .framer-md8vkr > :first-child { margin-top: 0px; } .framer-BNih9.framer-tnfe4s > :last-child, .framer-BNih9 .framer-nqrqaa > :last-child, .framer-BNih9 .framer-i5ycv2 > :last-child, .framer-BNih9 .framer-bkwavs > :last-child, .framer-BNih9 .framer-1lkblc1 > :last-child, .framer-BNih9 .framer-djshff > :last-child, .framer-BNih9 .framer-ik1c4u > :last-child, .framer-BNih9 .framer-pn7sza > :last-child, .framer-BNih9 .framer-yv86w7 > :last-child, .framer-BNih9 .framer-r7wkt4 > :last-child, .framer-BNih9 .framer-b8o0bx > :last-child, .framer-BNih9 .framer-1qm43q0 > :last-child, .framer-BNih9 .framer-1kes4hg > :last-child, .framer-BNih9 .framer-1k9u2f4 > :last-child, .framer-BNih9 .framer-16ymonv > :last-child, .framer-BNih9 .framer-h64zmz > :last-child, .framer-BNih9 .framer-ruz4z6 > :last-child, .framer-BNih9 .framer-vbmr88 > :last-child, .framer-BNih9 .framer-18txsya > :last-child, .framer-BNih9 .framer-1g00cne > :last-child, .framer-BNih9 .framer-1kbhv67 > :last-child, .framer-BNih9 .framer-1aozjw8 > :last-child, .framer-BNih9 .framer-1jfydbb > :last-child, .framer-BNih9 .framer-1f9flnd > :last-child, .framer-BNih9 .framer-1sxs780 > :last-child, .framer-BNih9 .framer-1snq30t > :last-child, .framer-BNih9 .framer-h183gv > :last-child, .framer-BNih9 .framer-rud7g2 > :last-child, .framer-BNih9 .framer-hp98t5 > :last-child, .framer-BNih9 .framer-1j1vr29 > :last-child, .framer-BNih9 .framer-15kdbsn > :last-child, .framer-BNih9 .framer-1qdcr4y > :last-child, .framer-BNih9 .framer-rseakw > :last-child, .framer-BNih9 .framer-n2biok > :last-child, .framer-BNih9 .framer-1ahvdgn > :last-child, .framer-BNih9 .framer-lx9wsu > :last-child, .framer-BNih9 .framer-3qc25b > :last-child, .framer-BNih9 .framer-1q2mpd > :last-child, .framer-BNih9 .framer-lvqmvc > :last-child, .framer-BNih9 .framer-l8743b > :last-child, .framer-BNih9 .framer-nxyhkj > :last-child, .framer-BNih9 .framer-l66vqc > :last-child, .framer-BNih9 .framer-fx2yr1 > :last-child, .framer-BNih9 .framer-1xuon2l > :last-child, .framer-BNih9 .framer-cbwejy > :last-child, .framer-BNih9 .framer-a96vi5 > :last-child, .framer-BNih9 .framer-1m1if9c > :last-child, .framer-BNih9 .framer-w4l5fa > :last-child, .framer-BNih9 .framer-jnpxgt > :last-child, .framer-BNih9 .framer-95chor > :last-child, .framer-BNih9 .framer-1nm814m > :last-child, .framer-BNih9 .framer-105h1g4 > :last-child, .framer-BNih9 .framer-msjbz2 > :last-child, .framer-BNih9 .framer-1t7gzay > :last-child, .framer-BNih9 .framer-vza93r > :last-child, .framer-BNih9 .framer-12osyle > :last-child, .framer-BNih9 .framer-j8o08x > :last-child, .framer-BNih9 .framer-imcgaw > :last-child, .framer-BNih9 .framer-zx0yt5 > :last-child, .framer-BNih9 .framer-yghyxh > :last-child, .framer-BNih9 .framer-la6tby > :last-child, .framer-BNih9 .framer-1x5vqhj > :last-child, .framer-BNih9 .framer-b997s4 > :last-child, .framer-BNih9 .framer-dwf758 > :last-child, .framer-BNih9 .framer-mlp7j4 > :last-child, .framer-BNih9 .framer-uu6vcy > :last-child, .framer-BNih9 .framer-11nlanz > :last-child, .framer-BNih9 .framer-19hmcdf > :last-child, .framer-BNih9 .framer-1yoer1n > :last-child, .framer-BNih9 .framer-jkt88t > :last-child, .framer-BNih9 .framer-md8vkr > :last-child { margin-bottom: 0px; } .framer-BNih9 .framer-nqrqaa > *, .framer-BNih9 .framer-bkwavs > * { margin: 0px; margin-bottom: calc(53px / 2); margin-top: calc(53px / 2); } .framer-BNih9 .framer-i5ycv2 > *, .framer-BNih9 .framer-djshff > *, .framer-BNih9 .framer-pn7sza > *, .framer-BNih9 .framer-r7wkt4 > *, .framer-BNih9 .framer-1qm43q0 > *, .framer-BNih9 .framer-1k9u2f4 > *, .framer-BNih9 .framer-h64zmz > *, .framer-BNih9 .framer-vbmr88 > *, .framer-BNih9 .framer-1g00cne > *, .framer-BNih9 .framer-1aozjw8 > *, .framer-BNih9 .framer-1f9flnd > *, .framer-BNih9 .framer-1snq30t > *, .framer-BNih9 .framer-rud7g2 > *, .framer-BNih9 .framer-1j1vr29 > *, .framer-BNih9 .framer-1qdcr4y > *, .framer-BNih9 .framer-n2biok > *, .framer-BNih9 .framer-lx9wsu > *, .framer-BNih9 .framer-1q2mpd > *, .framer-BNih9 .framer-l8743b > *, .framer-BNih9 .framer-l66vqc > *, .framer-BNih9 .framer-1xuon2l > *, .framer-BNih9 .framer-a96vi5 > *, .framer-BNih9 .framer-w4l5fa > *, .framer-BNih9 .framer-95chor > *, .framer-BNih9 .framer-105h1g4 > *, .framer-BNih9 .framer-1t7gzay > *, .framer-BNih9 .framer-12osyle > *, .framer-BNih9 .framer-imcgaw > *, .framer-BNih9 .framer-yghyxh > *, .framer-BNih9 .framer-1x5vqhj > *, .framer-BNih9 .framer-dwf758 > *, .framer-BNih9 .framer-uu6vcy > *, .framer-BNih9 .framer-19hmcdf > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-BNih9 .framer-1lkblc1 > * { margin: 0px; margin-bottom: calc(61px / 2); margin-top: calc(61px / 2); } .framer-BNih9 .framer-1szxrht > *, .framer-BNih9 .framer-1kyb736 > *, .framer-BNih9 .framer-3oumjk > *, .framer-BNih9 .framer-1g1xsub > * { margin: 0px; margin-left: calc(21px / 2); margin-right: calc(21px / 2); } .framer-BNih9 .framer-1szxrht > :first-child, .framer-BNih9 .framer-1kyb736 > :first-child, .framer-BNih9 .framer-3oumjk > :first-child, .framer-BNih9 .framer-1g1xsub > :first-child { margin-left: 0px; } .framer-BNih9 .framer-1szxrht > :last-child, .framer-BNih9 .framer-1kyb736 > :last-child, .framer-BNih9 .framer-3oumjk > :last-child, .framer-BNih9 .framer-1g1xsub > :last-child { margin-right: 0px; } .framer-BNih9 .framer-ik1c4u > *, .framer-BNih9 .framer-yv86w7 > *, .framer-BNih9 .framer-b8o0bx > *, .framer-BNih9 .framer-1kes4hg > *, .framer-BNih9 .framer-16ymonv > *, .framer-BNih9 .framer-ruz4z6 > *, .framer-BNih9 .framer-18txsya > *, .framer-BNih9 .framer-1kbhv67 > *, .framer-BNih9 .framer-1jfydbb > *, .framer-BNih9 .framer-1sxs780 > *, .framer-BNih9 .framer-h183gv > *, .framer-BNih9 .framer-hp98t5 > *, .framer-BNih9 .framer-15kdbsn > *, .framer-BNih9 .framer-rseakw > *, .framer-BNih9 .framer-1ahvdgn > *, .framer-BNih9 .framer-3qc25b > *, .framer-BNih9 .framer-lvqmvc > *, .framer-BNih9 .framer-nxyhkj > *, .framer-BNih9 .framer-fx2yr1 > *, .framer-BNih9 .framer-cbwejy > *, .framer-BNih9 .framer-1m1if9c > *, .framer-BNih9 .framer-jnpxgt > *, .framer-BNih9 .framer-1nm814m > *, .framer-BNih9 .framer-msjbz2 > *, .framer-BNih9 .framer-vza93r > *, .framer-BNih9 .framer-j8o08x > *, .framer-BNih9 .framer-zx0yt5 > *, .framer-BNih9 .framer-la6tby > *, .framer-BNih9 .framer-b997s4 > *, .framer-BNih9 .framer-mlp7j4 > *, .framer-BNih9 .framer-11nlanz > *, .framer-BNih9 .framer-1yoer1n > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-BNih9 .framer-jkt88t > * { margin: 0px; margin-bottom: calc(49px / 2); margin-top: calc(49px / 2); } }",
    "@media (min-width: 1252px) and (max-width: 1449px) { .framer-BNih9 .hidden-tnfe4s { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1251px) { .framer-BNih9 .hidden-uim53p { display: none !important; } .${x.bodyClassName}-framer-BNih9 { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-BNih9.framer-tnfe4s { width: 810px; } .framer-BNih9 .framer-nqrqaa { padding: 139px 40px 100px 40px; } .framer-BNih9 .framer-15n93w4 { order: 0; width: 100%; } .framer-BNih9 .framer-1whz10l { order: 1; width: 100%; } .framer-BNih9 .framer-bkwavs { padding: 50px 40px 139px 40px; } .framer-BNih9 .framer-1lkblc1 { overflow: auto; } .framer-BNih9 .framer-jkt88t { padding: 43px 25px 43px 25px; } .framer-BNih9 .framer-x5ex4r, .framer-BNih9 .framer-11j2qpv { width: 100%; }}`,
    `@media (max-width: 809px) { .framer-BNih9 .hidden-1af9jlq { display: none !important; } .${x.bodyClassName}-framer-BNih9 { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-BNih9.framer-tnfe4s { width: 390px; } .framer-BNih9 .framer-nqrqaa { order: 0; padding: 140px 10px 50px 10px; } .framer-BNih9 .framer-15n93w4 { height: 47px; width: 100%; } .framer-BNih9 .framer-1whz10l, .framer-BNih9 .framer-x5ex4r, .framer-BNih9 .framer-11j2qpv { width: 100%; } .framer-BNih9 .framer-bkwavs { order: 1; padding: 50px 10px 140px 10px; } .framer-BNih9 .framer-1szxrht, .framer-BNih9 .framer-1kyb736, .framer-BNih9 .framer-3oumjk, .framer-BNih9 .framer-1g1xsub { flex-direction: column; } .framer-BNih9 .framer-ik1c4u, .framer-BNih9 .framer-b8o0bx, .framer-BNih9 .framer-16ymonv, .framer-BNih9 .framer-18txsya, .framer-BNih9 .framer-1jfydbb, .framer-BNih9 .framer-h183gv, .framer-BNih9 .framer-15kdbsn, .framer-BNih9 .framer-1ahvdgn, .framer-BNih9 .framer-lvqmvc, .framer-BNih9 .framer-fx2yr1, .framer-BNih9 .framer-1m1if9c, .framer-BNih9 .framer-1nm814m, .framer-BNih9 .framer-vza93r, .framer-BNih9 .framer-zx0yt5, .framer-BNih9 .framer-b997s4, .framer-BNih9 .framer-11nlanz { height: 300px; width: 336px; } .framer-BNih9 .framer-pn7sza, .framer-BNih9 .framer-lobnmy-container, .framer-BNih9 .framer-1qm43q0, .framer-BNih9 .framer-1mxu9e-container, .framer-BNih9 .framer-h64zmz, .framer-BNih9 .framer-idniyl-container, .framer-BNih9 .framer-1g00cne, .framer-BNih9 .framer-bonyfu-container, .framer-BNih9 .framer-1f9flnd, .framer-BNih9 .framer-g0pdti-container, .framer-BNih9 .framer-rud7g2, .framer-BNih9 .framer-18eaevo-container, .framer-BNih9 .framer-1qdcr4y, .framer-BNih9 .framer-iz77dx-container, .framer-BNih9 .framer-lx9wsu, .framer-BNih9 .framer-1qfx2cx-container, .framer-BNih9 .framer-l8743b, .framer-BNih9 .framer-bo07kl-container, .framer-BNih9 .framer-1xuon2l, .framer-BNih9 .framer-1q2i4f4-container, .framer-BNih9 .framer-w4l5fa, .framer-BNih9 .framer-1s4ae3w-container, .framer-BNih9 .framer-105h1g4, .framer-BNih9 .framer-a3p6l9-container, .framer-BNih9 .framer-12osyle, .framer-BNih9 .framer-15spagz-container, .framer-BNih9 .framer-yghyxh, .framer-BNih9 .framer-1g0ys4u-container, .framer-BNih9 .framer-dwf758, .framer-BNih9 .framer-1us8be0-container, .framer-BNih9 .framer-19hmcdf, .framer-BNih9 .framer-1up2pub-container { flex: 1 0 0px; height: 1px; width: 100%; } .framer-BNih9 .framer-y27qmp, .framer-BNih9 .framer-7j4mup, .framer-BNih9 .framer-j0b9xn, .framer-BNih9 .framer-jh0lcu, .framer-BNih9 .framer-1f1rg0r, .framer-BNih9 .framer-1s5g5ff, .framer-BNih9 .framer-1qhhtkx, .framer-BNih9 .framer-1qwf6z2, .framer-BNih9 .framer-eg9906, .framer-BNih9 .framer-1f2s9vs, .framer-BNih9 .framer-14dcqaf, .framer-BNih9 .framer-1nc4dpw, .framer-BNih9 .framer-1r7xumy, .framer-BNih9 .framer-1evclxm, .framer-BNih9 .framer-1xjiv2r, .framer-BNih9 .framer-tyim85 { height: var(--framer-aspect-ratio-supported, 336px); width: 100%; } .framer-BNih9 .framer-yv86w7, .framer-BNih9 .framer-1kes4hg, .framer-BNih9 .framer-ruz4z6, .framer-BNih9 .framer-1kbhv67, .framer-BNih9 .framer-1sxs780, .framer-BNih9 .framer-hp98t5, .framer-BNih9 .framer-rseakw, .framer-BNih9 .framer-3qc25b, .framer-BNih9 .framer-nxyhkj, .framer-BNih9 .framer-cbwejy, .framer-BNih9 .framer-jnpxgt, .framer-BNih9 .framer-msjbz2, .framer-BNih9 .framer-j8o08x, .framer-BNih9 .framer-la6tby, .framer-BNih9 .framer-mlp7j4, .framer-BNih9 .framer-1yoer1n { height: 59px; width: 338px; } .framer-BNih9 .framer-jkt88t { order: 2; padding: 46px 12px 46px 12px; } .framer-BNih9 .framer-1ekmakh { height: 66px; width: 100%; } .framer-BNih9 .framer-3gw49k-container { left: 0px; order: 3; position: fixed; right: 0px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-BNih9 .framer-1szxrht, .framer-BNih9 .framer-1kyb736, .framer-BNih9 .framer-3oumjk, .framer-BNih9 .framer-1g1xsub { gap: 0px; } .framer-BNih9 .framer-1szxrht > *, .framer-BNih9 .framer-1kyb736 > *, .framer-BNih9 .framer-3oumjk > *, .framer-BNih9 .framer-1g1xsub > * { margin: 0px; margin-bottom: calc(21px / 2); margin-top: calc(21px / 2); } .framer-BNih9 .framer-1szxrht > :first-child, .framer-BNih9 .framer-1kyb736 > :first-child, .framer-BNih9 .framer-3oumjk > :first-child, .framer-BNih9 .framer-1g1xsub > :first-child { margin-top: 0px; } .framer-BNih9 .framer-1szxrht > :last-child, .framer-BNih9 .framer-1kyb736 > :last-child, .framer-BNih9 .framer-3oumjk > :last-child, .framer-BNih9 .framer-1g1xsub > :last-child { margin-bottom: 0px; } }}`,
    `@media (min-width: 2210px) { .framer-BNih9 .hidden-113tg7x { display: none !important; } .${x.bodyClassName}-framer-BNih9 { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-BNih9.framer-tnfe4s { width: 2210px; }}`,
    `@media (min-width: 1910px) and (max-width: 2209px) { .framer-BNih9 .hidden-1ftorz7 { display: none !important; } .${x.bodyClassName}-framer-BNih9 { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-BNih9.framer-tnfe4s { width: 1910px; }}`,
    `@media (min-width: 1450px) and (max-width: 1909px) { .framer-BNih9 .hidden-1hunhxp { display: none !important; } .${x.bodyClassName}-framer-BNih9 { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-BNih9.framer-tnfe4s { width: 1450px; }}`,
    '.framer-BNih9[data-border="true"]::after, .framer-BNih9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  v = O(ir, mr, "framer-BNih9"),
  wr = v;
v.displayName = "Burn";
v.defaultProps = {
  height: 2582,
  width: 1252,
};
Z(
  v,
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
        {
          family: "Coming Soon",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/comingsoon/v19/qWcuB6mzpYL7AJ2VfdQR1u-XUjjzsykh.woff2",
          weight: "400",
        },
      ],
    },
    ...K,
    ..._,
    ...$,
  ],
  {
    supportsExplicitInterCodegen: !0,
  }
);
var yr = {
  exports: {
    Props: {
      type: "tsType",
      annotations: {
        framerContractVersion: "1",
      },
    },
    default: {
      type: "reactComponent",
      name: "FramerK3ptZr0Ff",
      slots: [],
      annotations: {
        framerResponsiveScreen: "",
        framerIntrinsicHeight: "2582",
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "1252",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"aLyUMwTJA":{"layout":["fixed","auto"]},"tmMme0ZrH":{"layout":["fixed","auto"]},"Pe4Yz6Nre":{"layout":["fixed","auto"]},"tkBQYJMl4":{"layout":["fixed","auto"]},"GxI3o1qvS":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
      },
    },
    __FramerMetadata__: {
      type: "variable",
    },
  },
};
export { yr as __FramerMetadata__, wr as default };
//# sourceMappingURL=T0-66B5QzQjXlN6Z7JOom2totj92yv6vvHI6kQszrBA.HY3GKT43.mjs.map
