import { a as Z } from "./chunk-AMO4H24I.mjs";
import { a as z } from "./chunk-BZ6M34U5.mjs";
import { a as F, b as R } from "./chunk-DT26FUON.mjs";
import { n as A } from "./chunk-LDBPEOI5.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as k,
  A as B,
  Ca as J,
  Da as Y,
  P as _,
  c as e,
  ca as N,
  da as C,
  fa as G,
  g as X,
  ga as T,
  ha as S,
  ia as i,
  ka as n,
  m as q,
  n as V,
  r as j,
  sa as L,
  u as r,
  v as m,
  xa as Q,
  ya as a,
  z as l,
} from "./chunk-PQMD5WSJ.mjs";
import "./chunk-TM2PBHWD.mjs";
import "./chunk-ELYU6EKT.mjs";
var t = Z(a),
  o = A(l.a),
  $ = Y(R),
  O = Y(F);
var D = {
  BNKJcpYKo: "(min-width: 1252px) and (max-width: 1449px)",
  bWcsxgobB: "(min-width: 2210px)",
  IX1_eIcqx: "(min-width: 1450px) and (max-width: 1909px)",
  r5toFGBTN: "(max-width: 809px)",
  sKNWzCq5X: "(min-width: 1910px) and (max-width: 2209px)",
  SumsYfhUR: "(min-width: 810px) and (max-width: 1251px)",
};
var W = "framer-aKgdt",
  U = {
    BNKJcpYKo: "framer-v-qdc40b",
    bWcsxgobB: "framer-v-1pl4nj8",
    IX1_eIcqx: "framer-v-gkh1pp",
    r5toFGBTN: "framer-v-1c0usoo",
    sKNWzCq5X: "framer-v-129b6x3",
    SumsYfhUR: "framer-v-tcpaua",
  },
  rr = (y, g) => `translateX(-50%) ${g}`,
  h = z(),
  er = {
    "1080p": "sKNWzCq5X",
    1450: "IX1_eIcqx",
    "Desktop 2": "bWcsxgobB",
    Desktop: "BNKJcpYKo",
    Phone: "r5toFGBTN",
    Tablet: "SumsYfhUR",
  },
  ar = ({ height: y, id: g, width: K, ...u }) => {
    var p, x;
    return {
      ...u,
      variant:
        (x = (p = er[u.variant]) !== null && p !== void 0 ? p : u.variant) !==
          null && x !== void 0
          ? x
          : "BNKJcpYKo",
    };
  },
  tr = X(function (y, g) {
    let { activeLocale: K, setLocale: u } = _(),
      {
        style: p,
        className: x,
        layoutId: v,
        variant: E,
        FTpeBrC3kjC87BBo3w: d,
        ...H
      } = ar(y);
    V(() => {
      let c = z(void 0, K);
      if (((document.title = c.title || ""), c.viewport)) {
        var w;
        (w = document.querySelector('meta[name="viewport"]')) === null ||
          w === void 0 ||
          w.setAttribute("content", c.viewport);
      }
      if (c.robots) {
        let s = document.querySelector('meta[name="robots"]');
        s
          ? s.setAttribute("content", c.robots)
          : ((s = document.createElement("meta")),
            s.setAttribute("name", "robots"),
            s.setAttribute("content", c.robots),
            document.head.appendChild(s));
      }
      if (c.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((s) => s.startsWith("framer-body-"))
            .map((s) => document.body.classList.remove(s)),
          document.body.classList.add(`${c.bodyClassName}-framer-aKgdt`),
          () => {
            document.body.classList.remove(`${c.bodyClassName}-framer-aKgdt`);
          }
        );
    }, [void 0, K]);
    let [f, nr] = L(E, D, !1),
      fr = void 0,
      I = j(null),
      P = q(),
      M = [];
    return (
      T({}),
      r(S.Provider, {
        value: {
          primaryVariantId: "BNKJcpYKo",
          variantClassNames: U,
        },
        children: m(B, {
          id: v ?? P,
          children: [
            m(l.div, {
              ...H,
              className: k(W, ...M, "framer-qdc40b", x),
              ref: g ?? I,
              style: {
                ...p,
              },
              children: [
                m("header", {
                  className: "framer-17rjfpi",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    r(n, {
                      breakpoint: f,
                      overrides: {
                        r5toFGBTN: {
                          children: r(e, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Chelsea Market", sans-serif',
                                "--framer-font-size": "34px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: "BOGG BURNS SUPPLY EVERY 2M MARKETCAP",
                            }),
                          }),
                        },
                      },
                      children: r(t, {
                        __fromCanvasComponent: !0,
                        children: r(e, {
                          children: r("p", {
                            style: {
                              "--font-selector":
                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                              "--framer-font-family":
                                '"Chelsea Market", sans-serif',
                              "--framer-font-size": "76px",
                              "--framer-letter-spacing": "0.05em",
                              "--framer-line-height": "1.1em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(38, 38, 38)",
                            },
                            children: "BOGG BURNS SUPPLY EVERY 2M MARKETCAP",
                          }),
                        }),
                        className: "framer-10tfaof",
                        fonts: ["GF;Chelsea Market-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    r("div", {
                      className: "framer-1s17pl3",
                      children: r("div", {
                        className: "framer-15e4n50",
                        "data-border": !0,
                        children: r(n, {
                          breakpoint: f,
                          overrides: {
                            r5toFGBTN: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1266.804173530664,
                                intrinsicWidth: 1266.804173530664,
                                pixelHeight: 1280,
                                pixelWidth: 1280,
                                sizes: "352px",
                                src: "/images/dBW6DlIo13Y1hj0Lpf5kzObk3nY.png",
                              },
                              transformTemplate: rr,
                            },
                          },
                          children: r(Q, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 1266.804173530664,
                              intrinsicWidth: 1266.804173530664,
                              pixelHeight: 1280,
                              pixelWidth: 1280,
                              sizes: "651px",
                              src: "/images/dBW6DlIo13Y1hj0Lpf5kzObk3nY.png",
                            },
                            className: "framer-1anshjz",
                            "data-framer-name": "image",
                            name: "image",
                          }),
                        }),
                      }),
                    }),
                    m("div", {
                      className: "framer-nyvxur",
                      children: [
                        m("div", {
                          className: "framer-6mtirt",
                          children: [
                            m("div", {
                              className: "framer-1m1qrvd",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burnt at ",
                                    }),
                                  }),
                                  className: "framer-wy6mxi",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(a, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("h2", {
                                      style: {
                                        "--font-selector":
                                          "RlM7VGFua2VyLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Tanker", "Tanker Placeholder", sans-serif',
                                        "--framer-font-size": "69px",
                                        "--framer-line-height": "36px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgba(26, 26, 26, 0.08)",
                                        "--framer-text-decoration":
                                          "line-through",
                                      },
                                      children: "$2M",
                                    }),
                                  }),
                                  className: "framer-yfhu0p",
                                  fonts: ["FS;Tanker-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 1",
                                    }),
                                  }),
                                  className: "framer-calp4n",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: "https://Etherscan.io/tx/3JzQ3WgFJQwW5aT59zEfCVRYNt3yQmRrhWa6crRv718WuatX8qQqWjYP5xz89E9s8A2hRSGcQg5GSMuNZRidVNu5",
                                  children: r(o, {
                                    className: "framer-vizupd framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-tfdb3u",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-147k2a9",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-13smkml",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-1l0ikya",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$4M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$4M",
                                      }),
                                    }),
                                    className: "framer-w0l4sq",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 2",
                                    }),
                                  }),
                                  className: "framer-1e61e5a",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-heu2pl framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-1o533gv",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-vwbynx",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-17gnzm0",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-1iwyze5",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$6M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$6M",
                                      }),
                                    }),
                                    className: "framer-y6jtu4",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 3",
                                    }),
                                  }),
                                  className: "framer-9x5yfc",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-zf4fof framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-gahfkb",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-1n7f95l",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-15eoyo4",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-90jvfb",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$8M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$8M",
                                      }),
                                    }),
                                    className: "framer-vsi0da",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 4",
                                    }),
                                  }),
                                  className: "framer-cglt3j",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-jn5ikz framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-1r1bftl",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-r6fu6n",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        m("div", {
                          className: "framer-lxe6eo",
                          children: [
                            m("div", {
                              className: "framer-1a8bu7m",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-1gd64am",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$10M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$10M",
                                      }),
                                    }),
                                    className: "framer-kqz9ni",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 1",
                                    }),
                                  }),
                                  className: "framer-1eew8vm",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-yjp3sh framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-bcv5p2",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-1gibx6l",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-mh3a3u",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-1y176qp",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$12M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$12M",
                                      }),
                                    }),
                                    className: "framer-1s5a64t",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 2",
                                    }),
                                  }),
                                  className: "framer-1ub4f20",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-1p9fkvr framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-10xoc2f",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-1otr4i1",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-h70c1h",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-1ynjm88",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$14M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$14M",
                                      }),
                                    }),
                                    className: "framer-1uc2t6g",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 3",
                                    }),
                                  }),
                                  className: "framer-1ilfrh4",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-7meoi2 framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-ae56v5",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-1e64ys3",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-7mjoyb",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-1baomjb",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$16M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$16M",
                                      }),
                                    }),
                                    className: "framer-15ty12f",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 4",
                                    }),
                                  }),
                                  className: "framer-1sl8wyb",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-11r8zhd framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-su0hgv",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-6a3ks4",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        m("div", {
                          className: "framer-1qq4dcs",
                          children: [
                            m("div", {
                              className: "framer-1zdzcz",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-1p5yk6",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$18M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$18M",
                                      }),
                                    }),
                                    className: "framer-1ixei98",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 1",
                                    }),
                                  }),
                                  className: "framer-cdarjj",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-1bqfvc5 framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-3s1vy1",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-x6r6z7",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-1l5ogw0",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-pokyse",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$20M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$20M",
                                      }),
                                    }),
                                    className: "framer-19hj0yx",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 2",
                                    }),
                                  }),
                                  className: "framer-g9f4by",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-zr7sd0 framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-13tqpdc",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-19m7xx9",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-130kw0b",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-zw9vzv",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$22M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$22M",
                                      }),
                                    }),
                                    className: "framer-1e7tean",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 3",
                                    }),
                                  }),
                                  className: "framer-7bc9xb",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-ur4c5r framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-n0uhrk",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-196tlcg",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-1e6moj",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-1953hdn",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$24M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$24M",
                                      }),
                                    }),
                                    className: "framer-hvuy3g",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 4",
                                    }),
                                  }),
                                  className: "framer-qur1lt",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-1wl013d framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-120bp6y",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-aypjxt",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        m("div", {
                          className: "framer-jmeqz0",
                          children: [
                            m("div", {
                              className: "framer-bzge87",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-1hhjqiv",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$26M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$26M",
                                      }),
                                    }),
                                    className: "framer-1wktzwg",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 1",
                                    }),
                                  }),
                                  className: "framer-ams7gj",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-i33npa framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-16d02sp",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-yv19n8",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-1qt5xyn",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-709onh",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$28M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$28M",
                                      }),
                                    }),
                                    className: "framer-1rp3w3k",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 2",
                                    }),
                                  }),
                                  className: "framer-ysonrc",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-1p6sz4c framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-1q8i9zg",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-dddwe5",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-ejrf3c",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-mjjnbi",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$30M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$30M",
                                      }),
                                    }),
                                    className: "framer-19588lz",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 3",
                                    }),
                                  }),
                                  className: "framer-zfvvek",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-1pe1nh4 framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-1ae8my7",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-134lhyq",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m("div", {
                              className: "framer-1q6u2o9",
                              "data-border": !0,
                              children: [
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burns at ",
                                    }),
                                  }),
                                  className: "framer-117u2dt",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(n, {
                                  breakpoint: f,
                                  overrides: {
                                    r5toFGBTN: {
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "60px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "$32M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(a, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "69px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$32M",
                                      }),
                                    }),
                                    className: "framer-1v5otse",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "22px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "Burn 4",
                                    }),
                                  }),
                                  className: "framer-i7bx8y",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(i, {
                                  href: d,
                                  children: r(o, {
                                    className: "framer-1weg08o framer-cq8djc",
                                    "data-border": !0,
                                    children: r(l.div, {
                                      className: "framer-fha0qo",
                                      children: r(a, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "0.09em",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(204, 191, 73)",
                                            },
                                            children: "Etherscan",
                                          }),
                                        }),
                                        className: "framer-96d58i",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
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
                    r(n, {
                      breakpoint: f,
                      overrides: {
                        r5toFGBTN: {
                          children: r(e, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Chelsea Market", sans-serif',
                                "--framer-font-size": "34px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: "MORE BURNS COMING",
                            }),
                          }),
                        },
                      },
                      children: r(t, {
                        __fromCanvasComponent: !0,
                        children: r(e, {
                          children: r("p", {
                            style: {
                              "--font-selector":
                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                              "--framer-font-family":
                                '"Chelsea Market", sans-serif',
                              "--framer-font-size": "76px",
                              "--framer-letter-spacing": "0.05em",
                              "--framer-line-height": "1.1em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(38, 38, 38)",
                            },
                            children: "MORE BURNS COMING",
                          }),
                        }),
                        className: "framer-18hjjcq",
                        fonts: ["GF;Chelsea Market-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
                m("header", {
                  className: "framer-2wo673",
                  "data-border": !0,
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    r(a, {
                      __fromCanvasComponent: !0,
                      children: r(e, {
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
                      className: "framer-n3mp6y",
                      fonts: ["GF;Chelsea Market-regular"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    r("section", {
                      className: "framer-spgono",
                      "data-border": !0,
                      children: r("div", {
                        className: "framer-d75oj2",
                        children: r(n, {
                          breakpoint: f,
                          overrides: {
                            r5toFGBTN: {
                              width: "calc(100vw - 24px)",
                            },
                          },
                          children: r(N, {
                            width: "534px",
                            children: r(C, {
                              className: "framer-2pzjsx-container",
                              children: r(n, {
                                breakpoint: f,
                                overrides: {
                                  r5toFGBTN: {
                                    ACbcH4bn0: 12,
                                  },
                                  SumsYfhUR: {
                                    ACbcH4bn0: 16,
                                  },
                                },
                                children: r(R, {
                                  ACbcH4bn0: 17,
                                  DvQBipYeb: "0xcomingsoon",
                                  FRpg2PxcG: "0xcomingsoon",
                                  height: "100%",
                                  id: "yUx1NAyqg",
                                  iroNXaN6O: "rgb(0, 0, 0)",
                                  layoutId: "yUx1NAyqg",
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
                    r(n, {
                      breakpoint: f,
                      overrides: {
                        r5toFGBTN: {
                          children: r(e, {
                            children: m("p", {
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
                                m("span", {
                                  style: {
                                    "--framer-font-size": "27px",
                                  },
                                  children: [
                                    r("strong", {
                                      children: "DISCLAIMER:",
                                    }),
                                    " $BOGG is a memecoin with no inherent value. Only invest money you can afford to lose. $BOGG is only meant to be for fun. We are not liable for any changes in the token's price. ",
                                  ],
                                }),
                                r("span", {
                                  style: {
                                    "--framer-font-size": "27px",
                                  },
                                  children: r("br", {}),
                                }),
                                r("span", {
                                  style: {
                                    "--framer-font-size": "27px",
                                  },
                                  children: "",
                                }),
                                r("span", {
                                  style: {
                                    "--framer-font-size": "27px",
                                  },
                                  children: r("br", {}),
                                }),
                              ],
                            }),
                          }),
                        },
                      },
                      children: r(a, {
                        __fromCanvasComponent: !0,
                        children: r(e, {
                          children: m("p", {
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
                              m("span", {
                                style: {
                                  "--framer-font-size": "27px",
                                },
                                children: [
                                  r("strong", {
                                    children: "DISCLAIMER:",
                                  }),
                                  " $BOGG is a memecoin with no inherent value. Only invest money you can afford to lose. $BOGG is only meant to be for fun. We are not liable for any changes in the token's price. ",
                                ],
                              }),
                              r("span", {
                                style: {
                                  "--framer-font-size": "27px",
                                },
                                children: r("br", {}),
                              }),
                              r("span", {
                                style: {
                                  "--framer-font-size": "27px",
                                },
                                children: "",
                              }),
                              r("span", {
                                style: {
                                  "--framer-font-size": "27px",
                                },
                                children: r("br", {}),
                              }),
                            ],
                          }),
                        }),
                        className: "framer-1g1sqqy",
                        fonts: ["GF;Coming Soon-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
                r(N, {
                  width: "100vw",
                  children: r(n, {
                    breakpoint: f,
                    overrides: {
                      r5toFGBTN: {
                        layoutScroll: !0,
                      },
                    },
                    children: r(C, {
                      className: "framer-1dl0w5e-container",
                      children: r(n, {
                        breakpoint: f,
                        overrides: {
                          r5toFGBTN: {
                            ah9qjiq38: 20,
                            lADySZ6HS: "rgba(18, 18, 18, 0.2)",
                            tbGiGAZ87: "column",
                            variant: "iVd8OmJTR",
                          },
                          SumsYfhUR: {
                            lADySZ6HS: "rgba(18, 18, 18, 0.22)",
                            variant: "iVd8OmJTR",
                          },
                        },
                        children: r(F, {
                          ah9qjiq38: 10,
                          FTpeBrC3k: "jup.ag",
                          height: "100%",
                          id: "nrR3L2ONQ",
                          lADySZ6HS: "rgba(18, 18, 18, 0.15)",
                          layoutId: "nrR3L2ONQ",
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
              className: k(W, ...M),
              id: "overlay",
            }),
          ],
        }),
      })
    );
  }),
  mr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${h.bodyClassName}-framer-aKgdt { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; }`,
    ".framer-aKgdt.framer-cq8djc, .framer-aKgdt .framer-cq8djc { display: block; }",
    ".framer-aKgdt.framer-qdc40b { align-content: center; align-items: center; background-color: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, #ffec45); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1252px; }",
    ".framer-aKgdt .framer-17rjfpi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: center; overflow: hidden; padding: 193px 40px 193px 40px; position: relative; width: 100%; }",
    ".framer-aKgdt .framer-10tfaof { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 931px; word-break: break-word; word-wrap: break-word; }",
    ".framer-aKgdt .framer-1s17pl3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 21px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-aKgdt .framer-15e4n50 { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ededed; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: 369px; justify-content: flex-end; overflow: hidden; padding: 31px; position: relative; width: 633px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-aKgdt .framer-1anshjz { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 651px); left: -9px; overflow: visible; position: absolute; right: -9px; top: -141px; z-index: 1; }",
    ".framer-aKgdt .framer-nyvxur { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-aKgdt .framer-6mtirt, .framer-aKgdt .framer-lxe6eo, .framer-aKgdt .framer-1qq4dcs, .framer-aKgdt .framer-jmeqz0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-aKgdt .framer-1m1qrvd { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ededed; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: inset 58px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-aKgdt .framer-wy6mxi, .framer-aKgdt .framer-1l0ikya, .framer-aKgdt .framer-1iwyze5, .framer-aKgdt .framer-90jvfb, .framer-aKgdt .framer-1gd64am, .framer-aKgdt .framer-1y176qp, .framer-aKgdt .framer-1ynjm88, .framer-aKgdt .framer-1baomjb, .framer-aKgdt .framer-1p5yk6, .framer-aKgdt .framer-pokyse, .framer-aKgdt .framer-zw9vzv, .framer-aKgdt .framer-1953hdn, .framer-aKgdt .framer-1hhjqiv, .framer-aKgdt .framer-709onh, .framer-aKgdt .framer-mjjnbi, .framer-aKgdt .framer-117u2dt { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: stretch; flex: none; height: auto; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    ".framer-aKgdt .framer-yfhu0p, .framer-aKgdt .framer-w0l4sq, .framer-aKgdt .framer-y6jtu4, .framer-aKgdt .framer-vsi0da, .framer-aKgdt .framer-kqz9ni, .framer-aKgdt .framer-1s5a64t, .framer-aKgdt .framer-1uc2t6g, .framer-aKgdt .framer-15ty12f, .framer-aKgdt .framer-1ixei98, .framer-aKgdt .framer-19hj0yx, .framer-aKgdt .framer-1e7tean, .framer-aKgdt .framer-hvuy3g, .framer-aKgdt .framer-1wktzwg, .framer-aKgdt .framer-1rp3w3k, .framer-aKgdt .framer-19588lz, .framer-aKgdt .framer-1v5otse { -webkit-user-select: none; flex: none; height: 37px; pointer-events: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-aKgdt .framer-calp4n, .framer-aKgdt .framer-1e61e5a, .framer-aKgdt .framer-9x5yfc, .framer-aKgdt .framer-cglt3j, .framer-aKgdt .framer-1eew8vm, .framer-aKgdt .framer-1ub4f20, .framer-aKgdt .framer-1ilfrh4, .framer-aKgdt .framer-1sl8wyb, .framer-aKgdt .framer-cdarjj, .framer-aKgdt .framer-g9f4by, .framer-aKgdt .framer-7bc9xb, .framer-aKgdt .framer-qur1lt, .framer-aKgdt .framer-ams7gj, .framer-aKgdt .framer-ysonrc, .framer-aKgdt .framer-zfvvek, .framer-aKgdt .framer-i7bx8y { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-aKgdt .framer-vizupd, .framer-aKgdt .framer-heu2pl, .framer-aKgdt .framer-zf4fof, .framer-aKgdt .framer-jn5ikz, .framer-aKgdt .framer-yjp3sh, .framer-aKgdt .framer-1p9fkvr, .framer-aKgdt .framer-7meoi2, .framer-aKgdt .framer-11r8zhd, .framer-aKgdt .framer-1bqfvc5, .framer-aKgdt .framer-zr7sd0, .framer-aKgdt .framer-ur4c5r, .framer-aKgdt .framer-1wl013d, .framer-aKgdt .framer-1p6sz4c, .framer-aKgdt .framer-1pe1nh4, .framer-aKgdt .framer-1weg08o { --border-bottom-width: 1.98px; --border-color: #191919; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px); background-color: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, #ffec45); border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 8px 7px 1px -3px rgba(0, 0, 0, 0.2), 3px 3px 0px -1px rgb(25, 25, 25); flex: none; height: 52px; overflow: visible; position: relative; text-decoration: none; width: 189px; }",
    ".framer-aKgdt .framer-tfdb3u, .framer-aKgdt .framer-1o533gv, .framer-aKgdt .framer-gahfkb, .framer-aKgdt .framer-1r1bftl, .framer-aKgdt .framer-bcv5p2, .framer-aKgdt .framer-10xoc2f, .framer-aKgdt .framer-ae56v5, .framer-aKgdt .framer-su0hgv, .framer-aKgdt .framer-3s1vy1, .framer-aKgdt .framer-13tqpdc, .framer-aKgdt .framer-n0uhrk, .framer-aKgdt .framer-120bp6y, .framer-aKgdt .framer-16d02sp, .framer-aKgdt .framer-1q8i9zg, .framer-aKgdt .framer-1ae8my7, .framer-aKgdt .framer-fha0qo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 5px; width: 100%; }",
    ".framer-aKgdt .framer-147k2a9, .framer-aKgdt .framer-vwbynx, .framer-aKgdt .framer-1n7f95l, .framer-aKgdt .framer-r6fu6n, .framer-aKgdt .framer-1gibx6l, .framer-aKgdt .framer-1otr4i1, .framer-aKgdt .framer-1e64ys3, .framer-aKgdt .framer-6a3ks4, .framer-aKgdt .framer-x6r6z7, .framer-aKgdt .framer-19m7xx9, .framer-aKgdt .framer-196tlcg, .framer-aKgdt .framer-aypjxt, .framer-aKgdt .framer-yv19n8, .framer-aKgdt .framer-dddwe5, .framer-aKgdt .framer-134lhyq, .framer-aKgdt .framer-96d58i { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 42px; position: relative; white-space: pre-wrap; width: 98%; word-break: break-word; word-wrap: break-word; }",
    ".framer-aKgdt .framer-13smkml, .framer-aKgdt .framer-17gnzm0, .framer-aKgdt .framer-15eoyo4, .framer-aKgdt .framer-1a8bu7m, .framer-aKgdt .framer-mh3a3u, .framer-aKgdt .framer-h70c1h, .framer-aKgdt .framer-7mjoyb, .framer-aKgdt .framer-1zdzcz, .framer-aKgdt .framer-1l5ogw0, .framer-aKgdt .framer-130kw0b, .framer-aKgdt .framer-1e6moj, .framer-aKgdt .framer-bzge87, .framer-aKgdt .framer-1qt5xyn, .framer-aKgdt .framer-ejrf3c, .framer-aKgdt .framer-1q6u2o9 { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ededed; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-aKgdt .framer-i33npa { --border-bottom-width: 1.98px; --border-color: #191919; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px); background-color: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, #ffec45); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: 8px 7px 1px -3px rgba(0, 0, 0, 0.2), 3px 3px 0px -1px rgb(25, 25, 25); flex: none; height: 52px; overflow: visible; position: relative; text-decoration: none; width: 189px; }",
    ".framer-aKgdt .framer-18hjjcq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1074px; word-break: break-word; word-wrap: break-word; }",
    ".framer-aKgdt .framer-2wo673 { --border-bottom-width: 0px; --border-color: #1f1f1f; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 49px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 100%; }",
    ".framer-aKgdt .framer-n3mp6y { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 76px; position: relative; white-space: pre-wrap; width: 1096px; word-break: break-word; word-wrap: break-word; }",
    ".framer-aKgdt .framer-spgono { --border-bottom-width: 3.96px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.08), inset 5px 5px 0px 0px rgba(255, 255, 255, 0.2); flex: none; height: 81px; overflow: visible; position: relative; width: 534px; }",
    ".framer-aKgdt .framer-d75oj2 { align-content: center; align-items: center; background-color: rgba(253, 194, 56, 0); bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: center; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-aKgdt .framer-2pzjsx-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }",
    ".framer-aKgdt .framer-1g1sqqy { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1096px; word-break: break-word; word-wrap: break-word; }",
    ".framer-aKgdt .framer-1dl0w5e-container { flex: none; height: auto; left: 1px; position: absolute; right: -1px; top: 0px; z-index: 10; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aKgdt.framer-qdc40b, .framer-aKgdt .framer-17rjfpi, .framer-aKgdt .framer-1s17pl3, .framer-aKgdt .framer-15e4n50, .framer-aKgdt .framer-nyvxur, .framer-aKgdt .framer-6mtirt, .framer-aKgdt .framer-1m1qrvd, .framer-aKgdt .framer-tfdb3u, .framer-aKgdt .framer-13smkml, .framer-aKgdt .framer-1o533gv, .framer-aKgdt .framer-17gnzm0, .framer-aKgdt .framer-gahfkb, .framer-aKgdt .framer-15eoyo4, .framer-aKgdt .framer-1r1bftl, .framer-aKgdt .framer-lxe6eo, .framer-aKgdt .framer-1a8bu7m, .framer-aKgdt .framer-bcv5p2, .framer-aKgdt .framer-mh3a3u, .framer-aKgdt .framer-10xoc2f, .framer-aKgdt .framer-h70c1h, .framer-aKgdt .framer-ae56v5, .framer-aKgdt .framer-7mjoyb, .framer-aKgdt .framer-su0hgv, .framer-aKgdt .framer-1qq4dcs, .framer-aKgdt .framer-1zdzcz, .framer-aKgdt .framer-3s1vy1, .framer-aKgdt .framer-1l5ogw0, .framer-aKgdt .framer-13tqpdc, .framer-aKgdt .framer-130kw0b, .framer-aKgdt .framer-n0uhrk, .framer-aKgdt .framer-1e6moj, .framer-aKgdt .framer-120bp6y, .framer-aKgdt .framer-jmeqz0, .framer-aKgdt .framer-bzge87, .framer-aKgdt .framer-16d02sp, .framer-aKgdt .framer-1qt5xyn, .framer-aKgdt .framer-1q8i9zg, .framer-aKgdt .framer-ejrf3c, .framer-aKgdt .framer-1ae8my7, .framer-aKgdt .framer-1q6u2o9, .framer-aKgdt .framer-fha0qo, .framer-aKgdt .framer-2wo673, .framer-aKgdt .framer-d75oj2 { gap: 0px; } .framer-aKgdt.framer-qdc40b > *, .framer-aKgdt .framer-d75oj2 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-aKgdt.framer-qdc40b > :first-child, .framer-aKgdt .framer-17rjfpi > :first-child, .framer-aKgdt .framer-1s17pl3 > :first-child, .framer-aKgdt .framer-15e4n50 > :first-child, .framer-aKgdt .framer-nyvxur > :first-child, .framer-aKgdt .framer-1m1qrvd > :first-child, .framer-aKgdt .framer-13smkml > :first-child, .framer-aKgdt .framer-17gnzm0 > :first-child, .framer-aKgdt .framer-15eoyo4 > :first-child, .framer-aKgdt .framer-1a8bu7m > :first-child, .framer-aKgdt .framer-mh3a3u > :first-child, .framer-aKgdt .framer-h70c1h > :first-child, .framer-aKgdt .framer-7mjoyb > :first-child, .framer-aKgdt .framer-1zdzcz > :first-child, .framer-aKgdt .framer-1l5ogw0 > :first-child, .framer-aKgdt .framer-130kw0b > :first-child, .framer-aKgdt .framer-1e6moj > :first-child, .framer-aKgdt .framer-bzge87 > :first-child, .framer-aKgdt .framer-1qt5xyn > :first-child, .framer-aKgdt .framer-ejrf3c > :first-child, .framer-aKgdt .framer-1q6u2o9 > :first-child, .framer-aKgdt .framer-2wo673 > :first-child, .framer-aKgdt .framer-d75oj2 > :first-child { margin-top: 0px; } .framer-aKgdt.framer-qdc40b > :last-child, .framer-aKgdt .framer-17rjfpi > :last-child, .framer-aKgdt .framer-1s17pl3 > :last-child, .framer-aKgdt .framer-15e4n50 > :last-child, .framer-aKgdt .framer-nyvxur > :last-child, .framer-aKgdt .framer-1m1qrvd > :last-child, .framer-aKgdt .framer-13smkml > :last-child, .framer-aKgdt .framer-17gnzm0 > :last-child, .framer-aKgdt .framer-15eoyo4 > :last-child, .framer-aKgdt .framer-1a8bu7m > :last-child, .framer-aKgdt .framer-mh3a3u > :last-child, .framer-aKgdt .framer-h70c1h > :last-child, .framer-aKgdt .framer-7mjoyb > :last-child, .framer-aKgdt .framer-1zdzcz > :last-child, .framer-aKgdt .framer-1l5ogw0 > :last-child, .framer-aKgdt .framer-130kw0b > :last-child, .framer-aKgdt .framer-1e6moj > :last-child, .framer-aKgdt .framer-bzge87 > :last-child, .framer-aKgdt .framer-1qt5xyn > :last-child, .framer-aKgdt .framer-ejrf3c > :last-child, .framer-aKgdt .framer-1q6u2o9 > :last-child, .framer-aKgdt .framer-2wo673 > :last-child, .framer-aKgdt .framer-d75oj2 > :last-child { margin-bottom: 0px; } .framer-aKgdt .framer-17rjfpi > * { margin: 0px; margin-bottom: calc(53px / 2); margin-top: calc(53px / 2); } .framer-aKgdt .framer-1s17pl3 > * { margin: 0px; margin-bottom: calc(21px / 2); margin-top: calc(21px / 2); } .framer-aKgdt .framer-15e4n50 > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } .framer-aKgdt .framer-nyvxur > * { margin: 0px; margin-bottom: calc(19px / 2); margin-top: calc(19px / 2); } .framer-aKgdt .framer-6mtirt > *, .framer-aKgdt .framer-lxe6eo > *, .framer-aKgdt .framer-1qq4dcs > *, .framer-aKgdt .framer-jmeqz0 > * { margin: 0px; margin-left: calc(22px / 2); margin-right: calc(22px / 2); } .framer-aKgdt .framer-6mtirt > :first-child, .framer-aKgdt .framer-tfdb3u > :first-child, .framer-aKgdt .framer-1o533gv > :first-child, .framer-aKgdt .framer-gahfkb > :first-child, .framer-aKgdt .framer-1r1bftl > :first-child, .framer-aKgdt .framer-lxe6eo > :first-child, .framer-aKgdt .framer-bcv5p2 > :first-child, .framer-aKgdt .framer-10xoc2f > :first-child, .framer-aKgdt .framer-ae56v5 > :first-child, .framer-aKgdt .framer-su0hgv > :first-child, .framer-aKgdt .framer-1qq4dcs > :first-child, .framer-aKgdt .framer-3s1vy1 > :first-child, .framer-aKgdt .framer-13tqpdc > :first-child, .framer-aKgdt .framer-n0uhrk > :first-child, .framer-aKgdt .framer-120bp6y > :first-child, .framer-aKgdt .framer-jmeqz0 > :first-child, .framer-aKgdt .framer-16d02sp > :first-child, .framer-aKgdt .framer-1q8i9zg > :first-child, .framer-aKgdt .framer-1ae8my7 > :first-child, .framer-aKgdt .framer-fha0qo > :first-child { margin-left: 0px; } .framer-aKgdt .framer-6mtirt > :last-child, .framer-aKgdt .framer-tfdb3u > :last-child, .framer-aKgdt .framer-1o533gv > :last-child, .framer-aKgdt .framer-gahfkb > :last-child, .framer-aKgdt .framer-1r1bftl > :last-child, .framer-aKgdt .framer-lxe6eo > :last-child, .framer-aKgdt .framer-bcv5p2 > :last-child, .framer-aKgdt .framer-10xoc2f > :last-child, .framer-aKgdt .framer-ae56v5 > :last-child, .framer-aKgdt .framer-su0hgv > :last-child, .framer-aKgdt .framer-1qq4dcs > :last-child, .framer-aKgdt .framer-3s1vy1 > :last-child, .framer-aKgdt .framer-13tqpdc > :last-child, .framer-aKgdt .framer-n0uhrk > :last-child, .framer-aKgdt .framer-120bp6y > :last-child, .framer-aKgdt .framer-jmeqz0 > :last-child, .framer-aKgdt .framer-16d02sp > :last-child, .framer-aKgdt .framer-1q8i9zg > :last-child, .framer-aKgdt .framer-1ae8my7 > :last-child, .framer-aKgdt .framer-fha0qo > :last-child { margin-right: 0px; } .framer-aKgdt .framer-1m1qrvd > *, .framer-aKgdt .framer-13smkml > *, .framer-aKgdt .framer-17gnzm0 > *, .framer-aKgdt .framer-15eoyo4 > *, .framer-aKgdt .framer-1a8bu7m > *, .framer-aKgdt .framer-mh3a3u > *, .framer-aKgdt .framer-h70c1h > *, .framer-aKgdt .framer-7mjoyb > *, .framer-aKgdt .framer-1zdzcz > *, .framer-aKgdt .framer-1l5ogw0 > *, .framer-aKgdt .framer-130kw0b > *, .framer-aKgdt .framer-1e6moj > *, .framer-aKgdt .framer-bzge87 > *, .framer-aKgdt .framer-1qt5xyn > *, .framer-aKgdt .framer-ejrf3c > *, .framer-aKgdt .framer-1q6u2o9 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-aKgdt .framer-tfdb3u > *, .framer-aKgdt .framer-1o533gv > *, .framer-aKgdt .framer-gahfkb > *, .framer-aKgdt .framer-1r1bftl > *, .framer-aKgdt .framer-bcv5p2 > *, .framer-aKgdt .framer-10xoc2f > *, .framer-aKgdt .framer-ae56v5 > *, .framer-aKgdt .framer-su0hgv > *, .framer-aKgdt .framer-3s1vy1 > *, .framer-aKgdt .framer-13tqpdc > *, .framer-aKgdt .framer-n0uhrk > *, .framer-aKgdt .framer-120bp6y > *, .framer-aKgdt .framer-16d02sp > *, .framer-aKgdt .framer-1q8i9zg > *, .framer-aKgdt .framer-1ae8my7 > *, .framer-aKgdt .framer-fha0qo > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-aKgdt .framer-2wo673 > * { margin: 0px; margin-bottom: calc(49px / 2); margin-top: calc(49px / 2); } }",
    "@media (min-width: 1252px) and (max-width: 1449px) { .framer-aKgdt .hidden-qdc40b { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1251px) { .framer-aKgdt .hidden-tcpaua { display: none !important; } .${h.bodyClassName}-framer-aKgdt { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-aKgdt.framer-qdc40b { width: 810px; } .framer-aKgdt .framer-17rjfpi { padding: 139px 40px 139px 40px; } .framer-aKgdt .framer-10tfaof, .framer-aKgdt .framer-18hjjcq, .framer-aKgdt .framer-n3mp6y, .framer-aKgdt .framer-1g1sqqy { width: 100%; } .framer-aKgdt .framer-6mtirt, .framer-aKgdt .framer-lxe6eo, .framer-aKgdt .framer-1qq4dcs, .framer-aKgdt .framer-jmeqz0 { flex-direction: column; gap: 34px; } .framer-aKgdt .framer-1m1qrvd, .framer-aKgdt .framer-1a8bu7m, .framer-aKgdt .framer-1zdzcz, .framer-aKgdt .framer-bzge87 { order: 0; } .framer-aKgdt .framer-13smkml, .framer-aKgdt .framer-mh3a3u, .framer-aKgdt .framer-1l5ogw0, .framer-aKgdt .framer-1qt5xyn { order: 1; } .framer-aKgdt .framer-17gnzm0, .framer-aKgdt .framer-h70c1h, .framer-aKgdt .framer-130kw0b, .framer-aKgdt .framer-ejrf3c { order: 2; } .framer-aKgdt .framer-15eoyo4, .framer-aKgdt .framer-7mjoyb, .framer-aKgdt .framer-1e6moj, .framer-aKgdt .framer-1q6u2o9 { order: 3; } .framer-aKgdt .framer-2wo673 { padding: 43px 25px 43px 25px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aKgdt .framer-6mtirt, .framer-aKgdt .framer-lxe6eo, .framer-aKgdt .framer-1qq4dcs, .framer-aKgdt .framer-jmeqz0 { gap: 0px; } .framer-aKgdt .framer-6mtirt > *, .framer-aKgdt .framer-lxe6eo > *, .framer-aKgdt .framer-1qq4dcs > *, .framer-aKgdt .framer-jmeqz0 > * { margin: 0px; margin-bottom: calc(34px / 2); margin-top: calc(34px / 2); } .framer-aKgdt .framer-6mtirt > :first-child, .framer-aKgdt .framer-lxe6eo > :first-child, .framer-aKgdt .framer-1qq4dcs > :first-child, .framer-aKgdt .framer-jmeqz0 > :first-child { margin-top: 0px; } .framer-aKgdt .framer-6mtirt > :last-child, .framer-aKgdt .framer-lxe6eo > :last-child, .framer-aKgdt .framer-1qq4dcs > :last-child, .framer-aKgdt .framer-jmeqz0 > :last-child { margin-bottom: 0px; } }}`,
    `@media (max-width: 809px) { .framer-aKgdt .hidden-1c0usoo { display: none !important; } .${h.bodyClassName}-framer-aKgdt { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-aKgdt.framer-qdc40b { width: 390px; } .framer-aKgdt .framer-17rjfpi { order: 0; padding: 140px 10px 140px 10px; } .framer-aKgdt .framer-10tfaof, .framer-aKgdt .framer-18hjjcq, .framer-aKgdt .framer-n3mp6y, .framer-aKgdt .framer-1g1sqqy { width: 100%; } .framer-aKgdt .framer-15e4n50 { height: 218px; width: 355px; } .framer-aKgdt .framer-1anshjz { bottom: -77px; height: unset; left: 50%; right: unset; top: -57px; transform: translateX(-50%); width: var(--framer-aspect-ratio-supported, 352px); } .framer-aKgdt .framer-6mtirt, .framer-aKgdt .framer-lxe6eo, .framer-aKgdt .framer-1qq4dcs, .framer-aKgdt .framer-jmeqz0 { flex-direction: column; gap: 12px; } .framer-aKgdt .framer-1m1qrvd, .framer-aKgdt .framer-13smkml, .framer-aKgdt .framer-17gnzm0, .framer-aKgdt .framer-15eoyo4, .framer-aKgdt .framer-1a8bu7m, .framer-aKgdt .framer-mh3a3u, .framer-aKgdt .framer-h70c1h, .framer-aKgdt .framer-7mjoyb, .framer-aKgdt .framer-1zdzcz, .framer-aKgdt .framer-1l5ogw0, .framer-aKgdt .framer-130kw0b, .framer-aKgdt .framer-1e6moj, .framer-aKgdt .framer-bzge87, .framer-aKgdt .framer-1qt5xyn, .framer-aKgdt .framer-ejrf3c, .framer-aKgdt .framer-1q6u2o9 { height: 175px; width: 285px; } .framer-aKgdt .framer-wy6mxi, .framer-aKgdt .framer-1l0ikya, .framer-aKgdt .framer-1iwyze5, .framer-aKgdt .framer-90jvfb, .framer-aKgdt .framer-1gd64am, .framer-aKgdt .framer-1y176qp, .framer-aKgdt .framer-1ynjm88, .framer-aKgdt .framer-1baomjb, .framer-aKgdt .framer-1p5yk6, .framer-aKgdt .framer-pokyse, .framer-aKgdt .framer-zw9vzv, .framer-aKgdt .framer-1953hdn, .framer-aKgdt .framer-1hhjqiv, .framer-aKgdt .framer-709onh, .framer-aKgdt .framer-mjjnbi, .framer-aKgdt .framer-117u2dt { align-self: unset; width: 100%; } .framer-aKgdt .framer-yfhu0p, .framer-aKgdt .framer-w0l4sq, .framer-aKgdt .framer-y6jtu4, .framer-aKgdt .framer-vsi0da, .framer-aKgdt .framer-kqz9ni, .framer-aKgdt .framer-1s5a64t, .framer-aKgdt .framer-1uc2t6g, .framer-aKgdt .framer-15ty12f, .framer-aKgdt .framer-1ixei98, .framer-aKgdt .framer-19hj0yx, .framer-aKgdt .framer-1e7tean, .framer-aKgdt .framer-hvuy3g, .framer-aKgdt .framer-1wktzwg, .framer-aKgdt .framer-1rp3w3k, .framer-aKgdt .framer-19588lz, .framer-aKgdt .framer-1v5otse { height: 32px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-aKgdt .framer-calp4n, .framer-aKgdt .framer-1e61e5a, .framer-aKgdt .framer-9x5yfc, .framer-aKgdt .framer-cglt3j, .framer-aKgdt .framer-1eew8vm, .framer-aKgdt .framer-1ub4f20, .framer-aKgdt .framer-1ilfrh4, .framer-aKgdt .framer-1sl8wyb, .framer-aKgdt .framer-cdarjj, .framer-aKgdt .framer-g9f4by, .framer-aKgdt .framer-7bc9xb, .framer-aKgdt .framer-qur1lt, .framer-aKgdt .framer-ams7gj, .framer-aKgdt .framer-ysonrc, .framer-aKgdt .framer-zfvvek, .framer-aKgdt .framer-i7bx8y { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-aKgdt .framer-2wo673 { order: 1; padding: 46px 12px 46px 12px; } .framer-aKgdt .framer-spgono { height: 66px; width: 100%; } .framer-aKgdt .framer-1dl0w5e-container { left: 0px; order: 2; position: fixed; right: 0px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aKgdt .framer-6mtirt, .framer-aKgdt .framer-lxe6eo, .framer-aKgdt .framer-1qq4dcs, .framer-aKgdt .framer-jmeqz0 { gap: 0px; } .framer-aKgdt .framer-6mtirt > *, .framer-aKgdt .framer-lxe6eo > *, .framer-aKgdt .framer-1qq4dcs > *, .framer-aKgdt .framer-jmeqz0 > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-aKgdt .framer-6mtirt > :first-child, .framer-aKgdt .framer-lxe6eo > :first-child, .framer-aKgdt .framer-1qq4dcs > :first-child, .framer-aKgdt .framer-jmeqz0 > :first-child { margin-top: 0px; } .framer-aKgdt .framer-6mtirt > :last-child, .framer-aKgdt .framer-lxe6eo > :last-child, .framer-aKgdt .framer-1qq4dcs > :last-child, .framer-aKgdt .framer-jmeqz0 > :last-child { margin-bottom: 0px; } }}`,
    `@media (min-width: 2210px) { .framer-aKgdt .hidden-1pl4nj8 { display: none !important; } .${h.bodyClassName}-framer-aKgdt { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-aKgdt.framer-qdc40b { width: 2210px; } .framer-aKgdt .framer-10tfaof, .framer-aKgdt .framer-18hjjcq { width: 960px; }}`,
    `@media (min-width: 1910px) and (max-width: 2209px) { .framer-aKgdt .hidden-129b6x3 { display: none !important; } .${h.bodyClassName}-framer-aKgdt { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-aKgdt.framer-qdc40b { width: 1910px; }}`,
    `@media (min-width: 1450px) and (max-width: 1909px) { .framer-aKgdt .hidden-gkh1pp { display: none !important; } .${h.bodyClassName}-framer-aKgdt { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-aKgdt.framer-qdc40b { width: 1450px; }}`,
    '.framer-aKgdt[data-border="true"]::after, .framer-aKgdt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  b = G(tr, mr, "framer-aKgdt"),
  yr = b;
b.displayName = "Home";
b.defaultProps = {
  height: 2436,
  width: 1252,
};
J(
  b,
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
          family: "Tanker",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/ATKS7EHYU4PKFTXRA4UFAHPY7XS75QMY/OYTCFLQCR7FVKK7FIO7TCJPY4YG22I3S/GKSURDSYOFIC3Y6F5SMWSENDSAB2YMKC.woff2",
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
    ...$,
    ...O,
  ],
  {
    supportsExplicitInterCodegen: !0,
  }
);
var Kr = {
  exports: {
    Props: {
      type: "tsType",
      annotations: {
        framerContractVersion: "1",
      },
    },
    default: {
      type: "reactComponent",
      name: "FramerNe3tezedl",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "1252",
        framerContractVersion: "1",
        framerResponsiveScreen: "",
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "2436",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"SumsYfhUR":{"layout":["fixed","auto"]},"r5toFGBTN":{"layout":["fixed","auto"]},"bWcsxgobB":{"layout":["fixed","auto"]},"sKNWzCq5X":{"layout":["fixed","auto"]},"IX1_eIcqx":{"layout":["fixed","auto"]}}}',
      },
    },
    __FramerMetadata__: {
      type: "variable",
    },
  },
};
export { Kr as __FramerMetadata__, yr as default };
//# sourceMappingURL=8ySHpfu2KkwTgUD6UBmKssgrQ-IIzvnpQIndo6RzerY.PRNHBCV3.mjs.map
