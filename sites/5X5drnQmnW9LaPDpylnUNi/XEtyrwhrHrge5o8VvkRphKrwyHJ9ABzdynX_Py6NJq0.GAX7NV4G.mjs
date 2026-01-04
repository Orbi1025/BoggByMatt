import { a as Dr, b as Kr, c as Pr } from "./chunk-BGP6WJTJ.mjs";
import { a as Rr } from "./chunk-JUVV5DRK.mjs";
import { a as Ur } from "./chunk-AMO4H24I.mjs";
import { a as Wr, b as xr } from "./chunk-DT26FUON.mjs";
import {
  c as Vr,
  e as Jr,
  f as Ir,
  g as Tr,
  i as Or,
  j as _r,
  k as Ar,
  n as Br,
} from "./chunk-LDBPEOI5.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as ar,
  A as pr,
  Aa as A,
  Ca as gr,
  Da as tr,
  Ea as Gr,
  H as Mr,
  P as cr,
  R as er,
  U as x,
  X as dr,
  _ as Er,
  aa as Cr,
  ba as Sr,
  c as e,
  ca as R,
  da as Z,
  fa as hr,
  g as lr,
  ga as qr,
  h as Fr,
  ha as Xr,
  ia as w,
  j as or,
  k as zr,
  ka as t,
  l as V,
  m as fr,
  n as Hr,
  p as sr,
  r as y,
  s as jr,
  sa as Lr,
  u as r,
  v as n,
  va as Qr,
  w as yr,
  x as kr,
  xa as f,
  ya as s,
  z as b,
} from "./chunk-PQMD5WSJ.mjs";
import "./chunk-TM2PBHWD.mjs";
import "./chunk-ELYU6EKT.mjs";
var $r;
(function (i) {
  (i.Fill = "fill"),
    (i.Contain = "contain"),
    (i.Cover = "cover"),
    (i.None = "none"),
    (i.ScaleDown = "scale-down");
})($r || ($r = {}));
var re;
(function (i) {
  (i.Video = "Upload"), (i.Url = "URL");
})(re || (re = {}));
function oe(i) {
  let {
    width: l,
    height: o,
    topLeft: g,
    topRight: p,
    bottomRight: h,
    bottomLeft: c,
    id: j,
    children: N,
    ...u
  } = i;
  return u;
}
function B(i) {
  let l = oe(i);
  return r(pe, {
    ...l,
  });
}
function fe(i) {
  let l = Er(),
    o = y(!1),
    g = or((c) => {
      if (!i.current) return;
      let j = (c === 1 ? 0.999 : c) * i.current.duration,
        N = Math.abs(i.current.currentTime - j) < 0.1;
      i.current.duration > 0 && !N && (i.current.currentTime = j);
    }, []),
    p = or(() => {
      !(
        i.current.currentTime > 0 &&
        i.current.onplaying &&
        !i.current.paused &&
        !i.current.ended &&
        i.current.readyState > i.current.HAVE_CURRENT_DATA
      ) &&
        i.current &&
        !o.current &&
        l &&
        ((o.current = !0),
        i.current
          .play()
          .catch((j) => {})
          .finally(() => (o.current = !1)));
    }, []),
    h = or(() => {
      !i.current || o.current || i.current.pause();
    }, []);
  return {
    play: p,
    pause: h,
    setProgress: g,
  };
}
function se({
  playingProp: i,
  muted: l,
  loop: o,
  playsinline: g,
  controls: p,
}) {
  let [h] = jr(() => i),
    [c, j] = jr(!1);
  i !== h && !c && j(!0);
  let N = h && l && o && g && !p && !c,
    u;
  return (
    N ? (u = "on-viewport") : h ? (u = "on-mount") : (u = "no-autoplay"), u
  );
}
var ee = !1,
  pe = Fr(function (l) {
    let {
        srcType: o,
        srcFile: g,
        srcUrl: p,
        playing: h,
        muted: c,
        playsinline: j,
        controls: N,
        progress: u,
        objectFit: a,
        backgroundColor: mr,
        onSeeked: J,
        onPause: Y,
        onPlay: H,
        onEnd: L,
        onClick: Q,
        onMouseEnter: F,
        onMouseLeave: D,
        onMouseDown: K,
        onMouseUp: P,
        poster: $,
        posterEnabled: I,
        startTime: T,
        volume: M,
        loop: G,
      } = l,
      d = y(),
      wr = Tr(),
      O = y(null),
      C = y(null),
      z = Or(),
      W = _r(l),
      _ = z
        ? "no-autoplay"
        : se({
            playingProp: h,
            muted: c,
            loop: G,
            playsinline: j,
            controls: N,
          }),
      Yr = z ? !0 : Mr(d),
      E = T === 100 ? 99.9 : T,
      { play: rr, pause: Nr, setProgress: vr } = fe(d);
    V(() => {
      z || (h ? rr() : Nr());
    }, [h]),
      V(() => {
        z || (_ === "on-viewport" && (Yr ? rr() : Nr()));
      }, [_, Yr]),
      V(() => {
        if (!ee) {
          ee = !0;
          return;
        }
        let v = kr(u) ? u.get() : (u ?? 0) * 0.01;
        vr((v ?? 0) || (E ?? 0) / 100);
      }, [E, g, p, u]),
      V(() => {
        if (kr(u)) return u.on("change", (v) => vr(v));
      }, [u]),
      Jr(() => {
        O.current !== null && d.current && ((!C && G) || !O.current) && rr();
      }),
      Ir(() => {
        d.current &&
          ((C.current = d.current.ended), (O.current = d.current.paused), Nr());
      });
    let le = sr(() => {
      let v = "";
      if (o === "URL") return p + v;
      if (o === "Upload") return g + v;
    }, [o, g, p, E]);
    return (
      V(() => {
        wr && d.current && _ === "on-mount" && setTimeout(() => rr(), 50);
      }, []),
      V(() => {
        d.current && !c && (d.current.volume = (M ?? 0) / 100);
      }, [M]),
      r("video", {
        onClick: Q,
        onMouseEnter: F,
        onMouseLeave: D,
        onMouseDown: K,
        onMouseUp: P,
        src: le,
        loop: G,
        ref: d,
        onSeeked: (v) => J?.(v),
        onPause: (v) => Y?.(v),
        onPlay: (v) => H?.(v),
        onEnded: (v) => L?.(v),
        autoPlay: _ === "on-mount",
        preload: _ !== "on-mount" && I ? "metadata" : "auto",
        poster: I ? $ : void 0,
        onLoadedData: () => {
          d.current &&
            (d.current.currentTime < 0.3 && vr((E ?? 0) * 0.01),
            _ === "on-mount" && rr());
        },
        controls: N,
        muted: z ? !0 : c,
        playsInline: j,
        style: {
          cursor: Q ? "pointer" : "auto",
          width: "100%",
          height: "100%",
          borderRadius: W,
          display: "block",
          objectFit: a,
          backgroundColor: mr,
          objectPosition: "50% 50%",
        },
      })
    );
  });
B.displayName = "Video";
B.defaultProps = {
  srcType: "URL",
  srcUrl:
    "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
  srcFile: "",
  posterEnabled: !1,
  controls: !1,
  playing: !0,
  loop: !0,
  muted: !0,
  playsinline: !0,
  restartOnEnter: !1,
  objectFit: "cover",
  backgroundColor: "rgba(0,0,0,0)",
  radius: 0,
  volume: 25,
  startTime: 0,
};
var ce = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu;
function de(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
function he(i) {
  return (i.match(ce) || []).map(de).join(" ");
}
var ae = ["cover", "fill", "contain", "scale-down", "none"];
dr(B, {
  srcType: {
    type: x.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: ["URL", "Upload"],
  },
  srcUrl: {
    type: x.String,
    title: "URL",
    placeholder: "../example.mp4",
    hidden(i) {
      return i.srcType === "Upload";
    },
    description:
      "Hosted video file URL. For YouTube, use the YouTube component.",
  },
  srcFile: {
    type: x.File,
    title: "File",
    allowedFileTypes: ["mp4", "webm"],
    hidden(i) {
      return i.srcType === "URL";
    },
  },
  playing: {
    type: x.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  posterEnabled: {
    type: x.Boolean,
    title: "Poster",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  poster: {
    type: x.Image,
    title: " ",
    hidden: ({ posterEnabled: i }) => !i,
  },
  backgroundColor: {
    type: x.Color,
    title: "Background",
  },
  ...Ar,
  startTime: {
    title: "Start Time",
    type: x.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: "%",
  },
  loop: {
    type: x.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  objectFit: {
    type: x.Enum,
    title: "Fit",
    options: ae,
    optionTitles: ae.map(he),
  },
  controls: {
    type: x.Boolean,
    title: "Controls",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  muted: {
    type: x.Boolean,
    title: "Muted",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  volume: {
    type: x.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ muted: i }) => i,
  },
  onEnd: {
    type: x.EventHandler,
  },
  onSeeked: {
    type: x.EventHandler,
  },
  onPause: {
    type: x.EventHandler,
  },
  onPlay: {
    type: x.EventHandler,
  },
  ...Vr,
});
var xe = ["niQ593ero", "XFpkW11HK", "mRPEXY14G", "YyOT89saR", "VGAFOohXM"],
  ue = "framer-4W3Jg",
  be = {
    mRPEXY14G: "framer-v-xrlsv1",
    niQ593ero: "framer-v-n5bdum",
    VGAFOohXM: "framer-v-r4ydz2",
    XFpkW11HK: "framer-v-1yvijpd",
    YyOT89saR: "framer-v-1xhw5t1",
  };
function ur(i, ...l) {
  let o = {};
  return l?.forEach((g) => g && Object.assign(o, i[g])), o;
}
var we = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring",
  },
  Ne = ({ value: i, children: l }) => {
    let o = zr(yr),
      g = i ?? o.transition,
      p = sr(
        () => ({
          ...o,
          transition: g,
        }),
        [JSON.stringify(g)]
      );
    return r(yr.Provider, {
      value: p,
      children: l,
    });
  },
  ve = b(e),
  je = {
    "Variant 2": "XFpkW11HK",
    "Variant 3": "mRPEXY14G",
    "Variant 4": "YyOT89saR",
    "Variant 5": "VGAFOohXM",
    Desktop: "niQ593ero",
  },
  ye = ({ height: i, id: l, link: o, width: g, ...p }) => {
    var h, c;
    return {
      ...p,
      hCHXaDtKD: o ?? p.hCHXaDtKD,
      variant:
        (c = (h = je[p.variant]) !== null && h !== void 0 ? h : p.variant) !==
          null && c !== void 0
          ? c
          : "niQ593ero",
    };
  },
  ke = (i, l) =>
    i.layoutDependency ? l.join("-") + i.layoutDependency : l.join("-"),
  Ce = lr(function (i, l) {
    let { activeLocale: o, setLocale: g } = cr(),
      {
        style: p,
        className: h,
        layoutId: c,
        variant: j,
        hCHXaDtKD: N,
        ...u
      } = ye(i),
      {
        baseVariant: a,
        classNames: mr,
        gestureHandlers: J,
        gestureVariant: Y,
        setGestureState: H,
        setVariant: L,
        variants: Q,
      } = Qr({
        cycleOrder: xe,
        defaultVariant: "niQ593ero",
        variant: j,
        variantClassNames: be,
      }),
      F = ke(i, Q),
      D = y(null),
      K = () => a === "VGAFOohXM",
      P = () => a === "YyOT89saR",
      $ = () => a === "XFpkW11HK",
      I = () =>
        !["XFpkW11HK", "mRPEXY14G", "YyOT89saR", "VGAFOohXM"].includes(a),
      T = () => a === "mRPEXY14G",
      M = fr(),
      G = [],
      d = Sr();
    return r(pr, {
      id: c ?? M,
      children: r(ve, {
        animate: Q,
        initial: !1,
        children: r(Ne, {
          value: we,
          children: r(w, {
            href: N,
            children: n(b.a, {
              ...u,
              ...J,
              className: `${ar(
                ue,
                ...G,
                "framer-n5bdum",
                h,
                mr
              )} framer-1l6gvm6`,
              "data-border": !0,
              "data-framer-name": "Desktop",
              layoutDependency: F,
              layoutId: "niQ593ero",
              ref: l ?? D,
              style: {
                "--border-bottom-width": "4.95px",
                "--border-color": "rgb(0, 0, 0)",
                "--border-left-width": "1.98px",
                "--border-right-width": "1.98px",
                "--border-style": "solid",
                "--border-top-width": "1.98px",
                backgroundColor:
                  "var(--token-6e90f944-1cf6-4d41-98e6-4934c7c435d0, rgb(242, 242, 242))",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                boxShadow:
                  "inset 4px 4px 4px 0px rgba(255, 255, 255, 0.5), 3px 3px 1px 0px rgba(0, 0, 0, 0.2)",
                ...p,
              },
              ...ur(
                {
                  mRPEXY14G: {
                    "data-framer-name": "Variant 3",
                  },
                  VGAFOohXM: {
                    "data-framer-name": "Variant 5",
                  },
                  XFpkW11HK: {
                    "data-framer-name": "Variant 2",
                  },
                  YyOT89saR: {
                    "data-framer-name": "Variant 4",
                  },
                },
                a,
                Y
              ),
              children: [
                K() &&
                  r(f, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 1832.9072885771795,
                      intrinsicWidth: 2969.072281712494,
                      pixelHeight: 1852,
                      pixelWidth: 3e3,
                      src: "/images/pdbGEShENWkFUm6G8Larx9a6qVA.png",
                    },
                    className: "framer-1a3hytt",
                    "data-framer-name": "Raydium",
                    layoutDependency: F,
                    layoutId: "bOEzcQeJE",
                    ...ur(
                      {
                        VGAFOohXM: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1832.9072885771795,
                            intrinsicWidth: 2969.072281712494,
                            pixelHeight: 1852,
                            pixelWidth: 3e3,
                            sizes: "243px",
                            src: "/images/pdbGEShENWkFUm6G8Larx9a6qVA.png",
                          },
                        },
                      },
                      a,
                      Y
                    ),
                  }),
                P() &&
                  r(f, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 750,
                      intrinsicWidth: 2560,
                      pixelHeight: 750,
                      pixelWidth: 2560,
                      src: "/images/OSlJlisUJabI3VICVgQkXUEMpg.png",
                    },
                    className: "framer-1sbx23",
                    layoutDependency: F,
                    layoutId: "taeWEcVn4",
                    ...ur(
                      {
                        YyOT89saR: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 750,
                            intrinsicWidth: 2560,
                            pixelHeight: 750,
                            pixelWidth: 2560,
                            sizes: `max(${d?.width || "100vw"} - 40px, 1px)`,
                            src: "/images/OSlJlisUJabI3VICVgQkXUEMpg.png",
                          },
                        },
                      },
                      a,
                      Y
                    ),
                  }),
                $() &&
                  r(f, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 84,
                      intrinsicWidth: 300,
                      pixelHeight: 84,
                      pixelWidth: 300,
                      src: "/images/Pri3g15QUuGEwVXQJmbvAajtCRQ.webp",
                    },
                    className: "framer-s8jurf",
                    layoutDependency: F,
                    layoutId: "F6MpT3jlg",
                  }),
                I() &&
                  r(A, {
                    className: "framer-dz024l",
                    "data-framer-name": "logo_with_text_bright",
                    fill: "black",
                    intrinsicHeight: 32,
                    intrinsicWidth: 104,
                    layoutDependency: F,
                    layoutId: "eo8ZhtoSv",
                    svg: '<svg width="104" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.09 25.167a16.433 16.433 0 0 0 11.621 6.75c-1.185-1.784-2.907-3.424-5.057-4.673-2.15-1.25-4.428-1.931-6.563-2.077Z" fill="url(#a)"/><path d="M12.543 22.27C8.4 19.864 3.916 19.25.708 20.334c.31 1.024.718 2.015 1.22 2.96 2.787-.065 5.83.692 8.663 2.337 2.832 1.645 4.998 3.915 6.323 6.369 1.07-.033 2.134-.17 3.177-.407-.648-3.323-3.406-6.915-7.548-9.323Z" fill="url(#b)"/><path d="M32.285 12.5A16.42 16.42 0 0 0 11.846.627c3.546.434 7.48 1.765 11.34 4.007 3.86 2.242 6.967 5.001 9.1 7.868Z" fill="url(#c)"/><path d="M27.127 20.358c-1.815-3.013-4.923-5.9-8.753-8.124-3.83-2.225-7.875-3.495-11.389-3.58-3.091-.072-5.411.826-6.363 2.466l-.02.028c-.085.308-.159.616-.226.925 1.33-.525 2.87-.817 4.584-.85 3.81-.071 8.073 1.147 12.008 3.433 3.935 2.286 7.108 5.388 8.932 8.732.818 1.506 1.329 2.99 1.53 4.407.236-.21.467-.428.691-.654l.016-.032c.952-1.641.584-4.101-1.01-6.75Z" fill="url(#d)"/><path d="M15.46 17.248C9.598 13.842 3.117 13.309 0 15.685c.006.745.063 1.488.17 2.224a12.904 12.904 0 0 1 2.817-.522c3.483-.262 7.322.709 10.806 2.734 3.484 2.025 6.23 4.88 7.728 8.033.414.864.73 1.771.941 2.706a16.43 16.43 0 0 0 2.017-.953c.522-3.886-3.152-9.251-9.018-12.659Z" fill="url(#e)"/><path d="M30.143 15.314c-1.835-3.01-4.97-5.904-8.827-8.144-3.857-2.239-7.918-3.53-11.443-3.633-2.688-.078-4.77.574-5.848 1.804 4.48-.76 10.392.517 16.121 3.845 5.73 3.329 9.767 7.832 11.326 12.1.534-1.545.07-3.676-1.329-5.972Z" fill="url(#f)"/><path d="M46.664 9.91H49.4v9.127c0 .844-.19 1.577-.569 2.199a3.759 3.759 0 0 1-1.566 1.438c-.669.337-1.446.505-2.333.505-.788 0-1.504-.138-2.148-.415a3.433 3.433 0 0 1-1.52-1.279c-.376-.575-.561-1.297-.557-2.167h2.755c.009.345.079.641.211.889.136.243.322.43.556.562.239.128.52.192.844.192.34 0 .628-.072.863-.217.238-.15.42-.367.543-.652.124-.286.185-.637.185-1.055V9.909Zm11.27 8.91v-5.638h2.723V23h-2.615v-1.783h-.102a2.898 2.898 0 0 1-1.106 1.387c-.511.35-1.135.524-1.873.524-.656 0-1.233-.15-1.732-.448a3.076 3.076 0 0 1-1.17-1.272c-.277-.55-.417-1.208-.421-1.975v-6.251h2.723v5.765c.004.58.16 1.038.466 1.375.307.336.718.505 1.234.505.328 0 .635-.075.92-.224.286-.153.516-.38.69-.678.18-.298.267-.666.263-1.105Zm4.9 7.862v-13.5h2.685v1.649h.122c.12-.264.292-.533.518-.805a2.73 2.73 0 0 1 .894-.69c.371-.188.832-.282 1.381-.282a3.69 3.69 0 0 1 1.982.563c.605.37 1.088.93 1.45 1.68.363.746.544 1.682.544 2.807 0 1.095-.177 2.02-.53 2.774-.35.75-.827 1.319-1.432 1.706a3.672 3.672 0 0 1-2.02.576c-.529 0-.978-.088-1.349-.262a2.788 2.788 0 0 1-.901-.659 3.34 3.34 0 0 1-.537-.811h-.083v5.254h-2.723ZM65.5 18.09c0 .584.081 1.093.243 1.528.162.434.396.773.703 1.016.307.239.68.358 1.119.358.443 0 .818-.122 1.125-.364.307-.248.539-.588.697-1.023.162-.44.242-.944.242-1.515 0-.567-.078-1.065-.236-1.496-.158-.43-.39-.767-.697-1.01-.307-.243-.684-.364-1.131-.364-.443 0-.818.117-1.125.351-.303.235-.535.567-.697.998-.162.43-.243.937-.243 1.52ZM74.225 23v-9.818h2.723V23h-2.723Zm1.368-11.084a1.48 1.48 0 0 1-1.042-.402 1.306 1.306 0 0 1-.428-.978c0-.375.143-.697.428-.966.29-.272.637-.409 1.042-.409s.75.137 1.036.41c.29.268.434.59.434.965 0 .379-.144.705-.434.978-.286.268-.63.402-1.036.402Zm8.759 1.266v2.045h-5.913v-2.045h5.913Zm-4.57-2.353h2.723v9.154c0 .251.038.447.115.588a.635.635 0 0 0 .32.288c.14.055.302.083.485.083.128 0 .256-.01.384-.032l.294-.058.428 2.027a7.684 7.684 0 0 1-.575.147c-.248.06-.548.096-.902.108-.656.026-1.231-.062-1.725-.262a2.41 2.41 0 0 1-1.145-.933c-.272-.422-.407-.955-.402-1.598v-9.512Zm10.713 12.363c-1.01 0-1.88-.205-2.608-.614a4.201 4.201 0 0 1-1.675-1.751c-.392-.759-.588-1.656-.588-2.691 0-1.01.196-1.897.588-2.66a4.347 4.347 0 0 1 1.656-1.783c.716-.426 1.555-.639 2.518-.639.648 0 1.25.104 1.809.313a4.013 4.013 0 0 1 1.47.927c.422.413.75.933.985 1.56.234.622.351 1.35.351 2.186v.748h-8.29V17.1h5.727c0-.392-.085-.74-.256-1.042a1.831 1.831 0 0 0-.71-.71 2.024 2.024 0 0 0-1.041-.261c-.413 0-.78.095-1.1.287a2.016 2.016 0 0 0-.741.76c-.18.316-.27.668-.275 1.056v1.604c0 .486.09.906.269 1.26.183.353.44.626.773.818.332.191.727.287 1.183.287.302 0 .579-.043.83-.128.252-.085.467-.213.646-.383s.315-.38.41-.627l2.518.166a3.439 3.439 0 0 1-.787 1.586c-.392.447-.899.797-1.52 1.048-.619.247-1.333.37-2.142.37ZM96.778 23v-9.818h2.64v1.713h.102c.18-.61.48-1.07.902-1.38a2.366 2.366 0 0 1 1.457-.474 4.114 4.114 0 0 1 .857.096v2.416a3.555 3.555 0 0 0-.531-.102 4.778 4.778 0 0 0-.62-.045c-.401 0-.759.088-1.074.262a1.93 1.93 0 0 0-.741.716c-.18.307-.269.66-.269 1.061V23h-2.723Z" fill="#111726"/><defs><linearGradient id="a" x1="21.5" y1="6.5" x2="6.667" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#A4D756"/><stop offset="1" stop-color="#00B6E7"/></linearGradient><linearGradient id="b" x1="21.5" y1="6.5" x2="6.667" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#A4D756"/><stop offset="1" stop-color="#00B6E7"/></linearGradient><linearGradient id="c" x1="21.5" y1="6.5" x2="6.667" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#A4D756"/><stop offset="1" stop-color="#00B6E7"/></linearGradient><linearGradient id="d" x1="21.5" y1="6.5" x2="6.667" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#A4D756"/><stop offset="1" stop-color="#00B6E7"/></linearGradient><linearGradient id="e" x1="21.5" y1="6.5" x2="6.667" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#A4D756"/><stop offset="1" stop-color="#00B6E7"/></linearGradient><linearGradient id="f" x1="21.5" y1="6.5" x2="6.667" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#A4D756"/><stop offset="1" stop-color="#00B6E7"/></linearGradient></defs></svg>',
                    withExternalLayout: !0,
                  }),
                T() &&
                  r(f, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 480,
                      intrinsicWidth: 1671,
                      pixelHeight: 480,
                      pixelWidth: 1671,
                      src: "/images/JpQ3Hl3CnaHlJxd6vH8KsrIt10.png",
                    },
                    className: "framer-15gfhij",
                    layoutDependency: F,
                    layoutId: "lxfnF5kX_",
                    ...ur(
                      {
                        mRPEXY14G: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 480,
                            intrinsicWidth: 1671,
                            pixelHeight: 480,
                            pixelWidth: 1671,
                            sizes: `max(${d?.width || "100vw"} - 40px, 1px)`,
                            src: "/images/JpQ3Hl3CnaHlJxd6vH8KsrIt10.png",
                          },
                        },
                      },
                      a,
                      Y
                    ),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  We = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-4W3Jg.framer-1l6gvm6, .framer-4W3Jg .framer-1l6gvm6 { display: block; }",
    ".framer-4W3Jg.framer-n5bdum { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 83px; justify-content: center; overflow: hidden; padding: 12px 20px 12px 20px; position: relative; text-decoration: none; width: 256px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-4W3Jg .framer-1a3hytt { aspect-ratio: 1.6198704103671706 / 1; flex: none; height: 254%; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 324px); }",
    ".framer-4W3Jg .framer-1sbx23 { aspect-ratio: 3.4133333333333336 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 59px); position: relative; width: 1px; }",
    ".framer-4W3Jg .framer-s8jurf { aspect-ratio: 3.5714285714285716 / 1; flex: none; height: 100%; position: relative; width: var(--framer-aspect-ratio-supported, 714px); }",
    ".framer-4W3Jg .framer-dz024l { aspect-ratio: 3.25 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 53px); position: relative; width: 176px; }",
    ".framer-4W3Jg .framer-15gfhij { aspect-ratio: 3.48125 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 57px); position: relative; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-4W3Jg.framer-n5bdum { gap: 0px; } .framer-4W3Jg.framer-n5bdum > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-4W3Jg.framer-n5bdum > :first-child { margin-left: 0px; } .framer-4W3Jg.framer-n5bdum > :last-child { margin-right: 0px; } }",
    ".framer-4W3Jg.framer-v-1yvijpd .framer-s8jurf { width: var(--framer-aspect-ratio-supported, 210px); }",
    ".framer-4W3Jg.framer-v-xrlsv1 .framer-15gfhij, .framer-4W3Jg.framer-v-1xhw5t1 .framer-1sbx23 { height: var(--framer-aspect-ratio-supported, 63px); }",
    ".framer-4W3Jg.framer-v-r4ydz2 .framer-1a3hytt { width: var(--framer-aspect-ratio-supported, 242px); }",
    '.framer-4W3Jg[data-border="true"]::after, .framer-4W3Jg [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  nr = hr(Ce, We, "framer-4W3Jg"),
  S = nr;
nr.displayName = "LIL CARDS";
nr.defaultProps = {
  height: 83,
  width: 256,
};
dr(nr, {
  variant: {
    options: ["niQ593ero", "XFpkW11HK", "mRPEXY14G", "YyOT89saR", "VGAFOohXM"],
    optionTitles: [
      "Desktop",
      "Variant 2",
      "Variant 3",
      "Variant 4",
      "Variant 5",
    ],
    title: "Variant",
    type: x.Enum,
  },
  hCHXaDtKD: {
    title: "Link",
    type: x.Link,
  },
});
gr(
  nr,
  [
    {
      explicitInter: !0,
      fonts: [],
    },
  ],
  {
    supportsExplicitInterCodegen: !0,
  }
);
var Re = tr(B),
  Ze = Cr(Z),
  m = Ur(s),
  Ye = tr(xr),
  k = Br(b.a),
  Fe = tr(S),
  Zr = Cr(b.div),
  ze = tr(Wr);
var He = {
    gS42TDhYa: "(min-width: 1450px) and (max-width: 1909px)",
    qXK4Bqcdq: "(min-width: 810px) and (max-width: 1251px)",
    uvg25bhWK: "(max-width: 809px)",
    WQLkyLRf1: "(min-width: 1252px) and (max-width: 1449px)",
    Wr845EleD: "(min-width: 2210px)",
    ZxH2Lnjan: "(min-width: 1910px) and (max-width: 2209px)",
  },
  ir = () => typeof document < "u",
  me = "framer-jNnrp",
  Me = {
    gS42TDhYa: "framer-v-9k0o93",
    qXK4Bqcdq: "framer-v-2pzl18",
    uvg25bhWK: "framer-v-41k153",
    WQLkyLRf1: "framer-v-72rtr7",
    Wr845EleD: "framer-v-1di8qwd",
    ZxH2Lnjan: "framer-v-8uu72v",
  },
  q = (i, l) => `translateX(-50%) ${l}`,
  Ee = {
    damping: 30,
    delay: 0,
    mass: 1,
    stiffness: 400,
    type: "spring",
  },
  X = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.05,
    skewX: 0,
    skewY: 0,
    transition: Ee,
  },
  U = Rr(),
  Se = {
    "1080p": "ZxH2Lnjan",
    1450: "gS42TDhYa",
    "Desktop 2": "Wr845EleD",
    Desktop: "WQLkyLRf1",
    Phone: "uvg25bhWK",
    Tablet: "qXK4Bqcdq",
  },
  qe = ({ height: i, id: l, width: o, ...g }) => {
    var p, h;
    return {
      ...g,
      variant:
        (h = (p = Se[g.variant]) !== null && p !== void 0 ? p : g.variant) !==
          null && h !== void 0
          ? h
          : "WQLkyLRf1",
    };
  },
  Xe = lr(function (i, l) {
    let { activeLocale: o, setLocale: g } = cr(),
      {
        style: p,
        className: h,
        layoutId: c,
        variant: j,
        FTpeBrC3kjC87BBo3w: N,
        ...u
      } = qe(i);
    Hr(() => {
      let C = Rr(void 0, o);
      if (((document.title = C.title || ""), C.viewport)) {
        var z;
        (z = document.querySelector('meta[name="viewport"]')) === null ||
          z === void 0 ||
          z.setAttribute("content", C.viewport);
      }
      if (C.robots) {
        let W = document.querySelector('meta[name="robots"]');
        W
          ? W.setAttribute("content", C.robots)
          : ((W = document.createElement("meta")),
            W.setAttribute("name", "robots"),
            W.setAttribute("content", C.robots),
            document.head.appendChild(W));
      }
      if (C.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((W) => W.startsWith("framer-body-"))
            .map((W) => document.body.classList.remove(W)),
          document.body.classList.add(`${C.bodyClassName}-framer-jNnrp`),
          () => {
            document.body.classList.remove(`${C.bodyClassName}-framer-jNnrp`);
          }
        );
    }, [void 0, o]);
    let [a, mr] = Lr(j, He, !1),
      J = void 0,
      Y = y(null),
      H = () => !ir() || a === "uvg25bhWK",
      L = () => (ir() ? a !== "uvg25bhWK" : !0),
      Q = er("xghFiun02"),
      F = y(null),
      D = er("hxnxRhDHc"),
      K = y(null),
      P = er("PpRmvOzpr"),
      $ = y(null),
      I = er("R1imwfKEl"),
      T = y(null),
      M = () => (ir() ? a !== "qXK4Bqcdq" : !0),
      G = () => !ir() || a === "qXK4Bqcdq",
      d = () => (ir() ? !["qXK4Bqcdq", "uvg25bhWK"].includes(a) : !0),
      wr = fr(),
      O = [Pr];
    return (
      qr({}),
      r(Xr.Provider, {
        value: {
          primaryVariantId: "WQLkyLRf1",
          variantClassNames: Me,
        },
        children: n(pr, {
          id: c ?? wr,
          children: [
            n(b.div, {
              ...u,
              className: ar(me, ...O, "framer-72rtr7", h),
              ref: l ?? Y,
              style: {
                ...p,
              },
              children: [
                n("header", {
                  className: "framer-114b6t4",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    H() &&
                      r(t, {
                        breakpoint: a,
                        overrides: {
                          uvg25bhWK: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 2839.4227920777153,
                              intrinsicWidth: 3958.7630422833254,
                              pixelHeight: 2869,
                              pixelWidth: 4e3,
                              sizes: "129.2308vw",
                              src: "/images/jpJdCcae3waXh38AMPbWp4KGzE.png",
                            },
                          },
                        },
                        children: r(f, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 2839.4227920777153,
                            intrinsicWidth: 3958.7630422833254,
                            pixelHeight: 2869,
                            pixelWidth: 4e3,
                            src: "/images/jpJdCcae3waXh38AMPbWp4KGzE.png",
                          },
                          className:
                            "framer-10prsza hidden-72rtr7 hidden-2pzl18 hidden-1di8qwd hidden-8uu72v hidden-9k0o93",
                          "data-framer-name": "Mobile_HERO_min",
                          name: "Mobile_HERO_min",
                          transformTemplate: q,
                        }),
                      }),
                    r(R, {
                      children: r(Ze, {
                        __framer__adjustPosition: !1,
                        __framer__offset: 0,
                        __framer__parallaxTransformEnabled: !0,
                        __framer__speed: 70,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-19q0wri-container",
                        children: r(t, {
                          breakpoint: a,
                          overrides: {
                            uvg25bhWK: {
                              style: {
                                height: "100%",
                                width: "100%",
                              },
                            },
                          },
                          children: r(B, {
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: "100%",
                            id: "YYSCugE7D",
                            isMixedBorderRadius: !1,
                            layoutId: "YYSCugE7D",
                            loop: !0,
                            muted: !0,
                            objectFit: "cover",
                            playing: !0,
                            posterEnabled: !1,
                            srcFile: "/assets/L3fzwmrBrWf4cBQyktzUVLd1nE.mp4",
                            srcType: "Upload",
                            srcUrl:
                              "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                            startTime: 0,
                            style: {
                              width: "100%",
                            },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-nvty9t",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    n("div", {
                      className: "framer-13rmvq6",
                      children: [
                        r(t, {
                          breakpoint: a,
                          overrides: {
                            uvg25bhWK: {
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "64px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "DOGFROG",
                                }),
                              }),
                            },
                          },
                          children: r(m, {
                            __fromCanvasComponent: !0,
                            children: r(e, {
                              children: r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "87px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-line-height": "1.1em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children: "DOGFROG",
                              }),
                            }),
                            className: "framer-bf48il",
                            fonts: ["GF;Chelsea Market-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        r(t, {
                          breakpoint: a,
                          overrides: {
                            gS42TDhYa: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 307.79382653752856,
                                intrinsicWidth: 307.79382653752856,
                                loading: "lazy",
                                pixelHeight: 311,
                                pixelWidth: 311,
                                src: "/images/vtRQxYeqQaRUjQERbydWWzSLcQI.png",
                              },
                            },
                            Wr845EleD: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 307.79382653752856,
                                intrinsicWidth: 307.79382653752856,
                                loading: "lazy",
                                pixelHeight: 311,
                                pixelWidth: 311,
                                src: "/images/vtRQxYeqQaRUjQERbydWWzSLcQI.png",
                              },
                            },
                            ZxH2Lnjan: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 307.79382653752856,
                                intrinsicWidth: 307.79382653752856,
                                loading: "lazy",
                                pixelHeight: 311,
                                pixelWidth: 311,
                                src: "/images/vtRQxYeqQaRUjQERbydWWzSLcQI.png",
                              },
                            },
                          },
                          children: r(f, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 307.79382653752856,
                              intrinsicWidth: 307.79382653752856,
                              pixelHeight: 311,
                              pixelWidth: 311,
                              src: "/images/vtRQxYeqQaRUjQERbydWWzSLcQI.png",
                            },
                            className: "framer-12av69h",
                            "data-framer-name": "borderDOGG",
                            name: "borderDOGG",
                          }),
                        }),
                        r(t, {
                          breakpoint: a,
                          overrides: {
                            uvg25bhWK: {
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "26px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "A MATT FURIE ORIGINAL",
                                }),
                              }),
                            },
                          },
                          children: r(m, {
                            __fromCanvasComponent: !0,
                            children: r(e, {
                              children: r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "37px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-line-height": "1.1em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children: "A MATT FURIE ORIGINAL",
                              }),
                            }),
                            className: "framer-1rl27tn",
                            fonts: ["GF;Chelsea Market-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        r(t, {
                          breakpoint: a,
                          overrides: {
                            qXK4Bqcdq: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 4750.515650739991,
                                intrinsicWidth: 2969.072281712494,
                                pixelHeight: 4800,
                                pixelWidth: 3e3,
                                sizes: "350px",
                                src: "/images/Mbw5wUJoiyayFkKbIhtC45Rhhg.png",
                              },
                            },
                            uvg25bhWK: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 4750.515650739991,
                                intrinsicWidth: 2969.072281712494,
                                pixelHeight: 4800,
                                pixelWidth: 3e3,
                                sizes: "222px",
                                src: "/images/Mbw5wUJoiyayFkKbIhtC45Rhhg.png",
                              },
                            },
                            Wr845EleD: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 4750.515650739991,
                                intrinsicWidth: 2969.072281712494,
                                loading: "lazy",
                                pixelHeight: 4800,
                                pixelWidth: 3e3,
                                sizes: "546px",
                                src: "/images/Mbw5wUJoiyayFkKbIhtC45Rhhg.png",
                              },
                            },
                            ZxH2Lnjan: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 4750.515650739991,
                                intrinsicWidth: 2969.072281712494,
                                loading: "lazy",
                                pixelHeight: 4800,
                                pixelWidth: 3e3,
                                sizes: "500px",
                                src: "/images/Mbw5wUJoiyayFkKbIhtC45Rhhg.png",
                              },
                            },
                          },
                          children: n(f, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 4750.515650739991,
                              intrinsicWidth: 2969.072281712494,
                              pixelHeight: 4800,
                              pixelWidth: 3e3,
                              sizes: "500px",
                              src: "/images/Mbw5wUJoiyayFkKbIhtC45Rhhg.png",
                            },
                            className: "framer-1nlhh7o",
                            "data-framer-name": "MYDOGGG",
                            name: "MYDOGGG",
                            children: [
                              L() &&
                                r(m, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Coming Soon", sans-serif',
                                        "--framer-font-size": "17px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children:
                                        "So dope, even the boys want to be his friend",
                                    }),
                                  }),
                                  className: "framer-6lls3h hidden-41k153",
                                  fonts: ["GF;Coming Soon-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              H() &&
                                r(m, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Coming Soon", sans-serif',
                                        "--framer-font-size": "19px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children:
                                        "So cool, even the boys want to be his friend",
                                    }),
                                  }),
                                  className:
                                    "framer-iv36ss hidden-72rtr7 hidden-2pzl18 hidden-1di8qwd hidden-8uu72v hidden-9k0o93",
                                  fonts: ["GF;Coming Soon-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                            ],
                          }),
                        }),
                        r("section", {
                          className: "framer-pacupz",
                          "data-border": !0,
                          children: r("div", {
                            className: "framer-1lrl0yw",
                            children: r(t, {
                              breakpoint: a,
                              overrides: {
                                uvg25bhWK: {
                                  width: "378px",
                                },
                              },
                              children: r(R, {
                                width: "534px",
                                children: r(Z, {
                                  className: "framer-185668i-container",
                                  children: r(t, {
                                    breakpoint: a,
                                    overrides: {
                                      qXK4Bqcdq: {
                                        ACbcH4bn0: 16,
                                      },
                                      uvg25bhWK: {
                                        ACbcH4bn0: 12,
                                      },
                                    },
                                    children: r(xr, {
                                      ACbcH4bn0: 17,
                                      DvQBipYeb: "0xcomingsoon",
                                      FRpg2PxcG: "0xcomingsoon",
                                      height: "100%",
                                      id: "mn76V2yK_",
                                      iroNXaN6O: "rgb(0, 0, 0)",
                                      layoutId: "mn76V2yK_",
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
                        n("div", {
                          className: "framer-jwgh8f",
                          children: [
                            r(w, {
                              href: "https://x.com/bogg_meme",
                              openInNewTab: !0,
                              children: r(k, {
                                className: "framer-1xxryau framer-lux5qc",
                                "data-border": !0,
                                children: r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    qXK4Bqcdq: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 150,
                                        intrinsicWidth: 166,
                                        pixelHeight: 150,
                                        pixelWidth: 166,
                                        src: "/images/qSjTC2eL0VlbPC1DOFf3yqOtM0A.svg",
                                      },
                                    },
                                    uvg25bhWK: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 150,
                                        intrinsicWidth: 166,
                                        pixelHeight: 150,
                                        pixelWidth: 166,
                                        src: "/images/qSjTC2eL0VlbPC1DOFf3yqOtM0A.svg",
                                      },
                                    },
                                  },
                                  children: r(f, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 150,
                                      intrinsicWidth: 166,
                                      loading: "lazy",
                                      pixelHeight: 150,
                                      pixelWidth: 166,
                                      src: "/images/qSjTC2eL0VlbPC1DOFf3yqOtM0A.svg",
                                    },
                                    className: "framer-w9awjj",
                                    transformTemplate: q,
                                  }),
                                }),
                              }),
                            }),
                            r(w, {
                              href: "https://t.me/BoggMeme",
                              children: r(k, {
                                className: "framer-yyihay framer-lux5qc",
                                "data-border": !0,
                                children: r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    qXK4Bqcdq: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 150,
                                        intrinsicWidth: 178,
                                        pixelHeight: 150,
                                        pixelWidth: 178,
                                        src: "/images/40VWvBL5kCYMMMVlteAW36JkqQ.svg",
                                      },
                                    },
                                    uvg25bhWK: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 150,
                                        intrinsicWidth: 178,
                                        pixelHeight: 150,
                                        pixelWidth: 178,
                                        src: "/images/40VWvBL5kCYMMMVlteAW36JkqQ.svg",
                                      },
                                    },
                                  },
                                  children: r(f, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 150,
                                      intrinsicWidth: 178,
                                      loading: "lazy",
                                      pixelHeight: 150,
                                      pixelWidth: 178,
                                      src: "/images/40VWvBL5kCYMMMVlteAW36JkqQ.svg",
                                    },
                                    className: "framer-solnop",
                                    transformTemplate: q,
                                  }),
                                }),
                              }),
                            }),
                            r(w, {
                              href: "https://dexscreener.com/ethereum/0xcomingsoon",
                              children: r(k, {
                                className: "framer-19sav4e framer-lux5qc",
                                "data-border": !0,
                                children: r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    qXK4Bqcdq: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 74,
                                        intrinsicWidth: 63,
                                        pixelHeight: 74,
                                        pixelWidth: 63,
                                        src: "/images/Ky00IUxni9funOh9AtDcIoWAw0.svg",
                                      },
                                    },
                                    uvg25bhWK: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 74,
                                        intrinsicWidth: 63,
                                        pixelHeight: 74,
                                        pixelWidth: 63,
                                        src: "/images/Ky00IUxni9funOh9AtDcIoWAw0.svg",
                                      },
                                    },
                                  },
                                  children: r(f, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 74,
                                      intrinsicWidth: 63,
                                      loading: "lazy",
                                      pixelHeight: 74,
                                      pixelWidth: 63,
                                      src: "/images/Ky00IUxni9funOh9AtDcIoWAw0.svg",
                                    },
                                    className: "framer-1bbbkpt",
                                    transformTemplate: q,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    r(t, {
                      breakpoint: a,
                      overrides: {
                        gS42TDhYa: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1042.1443708810855,
                            intrinsicWidth: 5016.742465333544,
                            pixelHeight: 1053,
                            pixelWidth: 5069,
                            sizes: "1799px",
                            src: "/images/0bjx7tywxsFhpe1F6bLmiJuxUh8.png",
                          },
                        },
                        qXK4Bqcdq: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1042.1443708810855,
                            intrinsicWidth: 5016.742465333544,
                            pixelHeight: 1053,
                            pixelWidth: 5069,
                            sizes: "1247px",
                            src: "/images/0bjx7tywxsFhpe1F6bLmiJuxUh8.png",
                          },
                        },
                        uvg25bhWK: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1042.1443708810855,
                            intrinsicWidth: 5016.742465333544,
                            pixelHeight: 1053,
                            pixelWidth: 5069,
                            sizes: "635px",
                            src: "/images/0bjx7tywxsFhpe1F6bLmiJuxUh8.png",
                          },
                        },
                        Wr845EleD: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1042.1443708810855,
                            intrinsicWidth: 5016.742465333544,
                            loading: "lazy",
                            pixelHeight: 1053,
                            pixelWidth: 5069,
                            sizes: "2538px",
                            src: "/images/0bjx7tywxsFhpe1F6bLmiJuxUh8.png",
                          },
                        },
                        ZxH2Lnjan: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1042.1443708810855,
                            intrinsicWidth: 5016.742465333544,
                            pixelHeight: 1053,
                            pixelWidth: 5069,
                            sizes: "2370px",
                            src: "/images/0bjx7tywxsFhpe1F6bLmiJuxUh8.png",
                          },
                        },
                      },
                      children: r(f, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 1042.1443708810855,
                          intrinsicWidth: 5016.742465333544,
                          pixelHeight: 1053,
                          pixelWidth: 5069,
                          sizes: "1553px",
                          src: "/images/0bjx7tywxsFhpe1F6bLmiJuxUh8.png",
                        },
                        className: "framer-1s1zgnn",
                        "data-framer-name": "IMG_20240704_032501_837",
                        name: "IMG_20240704_032501_837",
                        transformTemplate: q,
                      }),
                    }),
                  ],
                }),
                r("header", {
                  className: "framer-jzq7ci",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: n("div", {
                    className: "framer-1taua5d",
                    children: [
                      r(m, {
                        __fromCanvasComponent: !0,
                        children: r(e, {
                          children: r("p", {
                            style: {
                              "--font-selector":
                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                              "--framer-font-family":
                                '"Chelsea Market", sans-serif',
                              "--framer-font-size": "27px",
                              "--framer-letter-spacing": "0.03em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(38, 38, 38)",
                            },
                            children: "FIND US ON",
                          }),
                        }),
                        className: "framer-vs65vf",
                        fonts: ["GF;Chelsea Market-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      n("div", {
                        className: "framer-1gj7n25",
                        children: [
                          n("div", {
                            className: "framer-8ji9lu",
                            children: [
                              L() &&
                                r(R, {
                                  width: "256px",
                                  children: r(Z, {
                                    className:
                                      "framer-1grsn27-container hidden-41k153",
                                    style: {
                                      rotate: -1,
                                    },
                                    whileHover: X,
                                    children: r(S, {
                                      hCHXaDtKD:
                                        "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                                      height: "100%",
                                      id: "Co3YSl7M2",
                                      layoutId: "Co3YSl7M2",
                                      style: {
                                        width: "100%",
                                      },
                                      variant: "mRPEXY14G",
                                      width: "100%",
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
                n("header", {
                  className: "framer-8nvlbu",
                  "data-framer-name": "Header",
                  id: Q,
                  name: "Header",
                  ref: F,
                  children: [
                    n("div", {
                      className: "framer-e7732x",
                      children: [
                        r(t, {
                          breakpoint: a,
                          overrides: {
                            qXK4Bqcdq: {
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "82px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "MAKE YOUR OWN BOGGPFP",
                                }),
                              }),
                            },
                            uvg25bhWK: {
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "42px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "MAKE YOUR OWN BOGGPFP",
                                }),
                              }),
                            },
                          },
                          children: r(m, {
                            __fromCanvasComponent: !0,
                            children: r(e, {
                              children: r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "87px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-line-height": "1.1em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children: "MAKE YOUR OWN BOGGPFP",
                              }),
                            }),
                            className: "framer-10u0dt9",
                            fonts: ["GF;Chelsea Market-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        r(m, {
                          __fromCanvasComponent: !0,
                          children: r(e, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Coming Soon", sans-serif',
                                "--framer-font-size": "23px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children:
                                "Become an official member of the BOGG club by making your TG and twitter profile pictures your very own BOGG.",
                            }),
                          }),
                          className: "framer-198sc39",
                          fonts: ["GF;Coming Soon-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        r(m, {
                          __fromCanvasComponent: !0,
                          children: r(e, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Coming Soon", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: "Special rewards to BOGG club members.",
                            }),
                          }),
                          className: "framer-u2elw4",
                          fonts: ["GF;Coming Soon-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    n("div", {
                      className: "framer-kydqsj",
                      children: [
                        r("div", {
                          className: "framer-u8ue1i",
                          "data-border": !0,
                          children: r("div", {
                            className: "framer-3ofvj5",
                            children: r(f, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1266.804173530664,
                                intrinsicWidth: 1266.804173530664,
                                loading: "lazy",
                                pixelHeight: 236,
                                pixelWidth: 236,
                                src: "/images/z4W7JgZCZYLFjhubPZusqgR7slk.png",
                              },
                              className: "framer-1qss6n0",
                              "data-framer-name": "image",
                              name: "image",
                            }),
                          }),
                        }),
                        r("div", {
                          className: "framer-19172ml",
                          "data-border": !0,
                          children: r("div", {
                            className: "framer-4qqwap",
                            children: r(f, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1266.804173530664,
                                intrinsicWidth: 1266.804173530664,
                                loading: "lazy",
                                pixelHeight: 236,
                                pixelWidth: 236,
                                src: "/images/jwU5mDZTFK6bMroWKNcMmHexe9A.png",
                              },
                              className: "framer-w3xlup",
                              "data-framer-name": "image",
                              name: "image",
                            }),
                          }),
                        }),
                        r("div", {
                          className: "framer-1exrgem",
                          "data-border": !0,
                          children: r("div", {
                            className: "framer-4u2d0k",
                            children: r(f, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1266.804173530664,
                                intrinsicWidth: 1266.804173530664,
                                loading: "lazy",
                                pixelHeight: 236,
                                pixelWidth: 236,
                                src: "/images/echmOpymKZgLgKORij4unq8l9zU.png",
                              },
                              className: "framer-ptg5li",
                              "data-framer-name": "image",
                              name: "image",
                            }),
                          }),
                        }),
                      ],
                    }),
                    r(w, {
                      href: "https://pfp.bogg.club/",
                      children: r(k, {
                        className: "framer-1bz98jg framer-lux5qc",
                        "data-border": !0,
                        whileHover: X,
                        children: r(b.div, {
                          className: "framer-j3xz7u",
                          children: r(s, {
                            __fromCanvasComponent: !0,
                            children: r(e, {
                              children: r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "24px",
                                  "--framer-letter-spacing": "0.09em",
                                  "--framer-line-height": "1em",
                                  "--framer-text-alignment": "center",
                                },
                                children: "PFP MAKER",
                              }),
                            }),
                            className: "framer-uhv0yh",
                            fonts: ["GF;Chelsea Market-regular"],
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-89wenw",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    r(Zr, {
                      __framer__styleTransformEffectEnabled: !0,
                      __framer__transformTargets: [
                        {
                          target: {
                            opacity: 1,
                            rotate: -5,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: 439,
                            y: -67,
                          },
                        },
                        {
                          target: {
                            opacity: 1,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 0,
                          },
                        },
                      ],
                      __framer__transformTrigger: "onInView",
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-fmpmnm",
                      "data-border": !0,
                      style: {
                        rotate: 2,
                      },
                      children: r("div", {
                        className: "framer-1ujmciy",
                        children: n("div", {
                          className: "framer-h23mg0",
                          children: [
                            n("div", {
                              className: "framer-10dwnvb",
                              children: [
                                r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    qXK4Bqcdq: {
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "53px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children: "MEET BOGG",
                                        }),
                                      }),
                                    },
                                    uvg25bhWK: {
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "49px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-line-height": "1.1em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children: "MEET BOGG",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(m, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "82px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-line-height": "1.1em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                        children: "MEET BOGG",
                                      }),
                                    }),
                                    className: "framer-vha5y5",
                                    fonts: ["GF;Chelsea Market-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    qXK4Bqcdq: {
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "17px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children:
                                            "The wandering musician, cruising through life in his iconic reggae van. ",
                                        }),
                                      }),
                                    },
                                    uvg25bhWK: {
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "18px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children:
                                            "The wandering musician, cruising through life in his iconic reggae van. ",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(m, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "25px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                        children:
                                          "The wandering musician, cruising through life in his iconic reggae van. ",
                                      }),
                                    }),
                                    className: "framer-qro7dz",
                                    fonts: ["GF;Chelsea Market-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    qXK4Bqcdq: {
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "17px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children:
                                            "With his ears flapping in the wind and a spliff in hand, BOGG is the true definition of cool.",
                                        }),
                                      }),
                                    },
                                    uvg25bhWK: {
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "18px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children:
                                            "With his ears flapping in the wind and a spliff in hand, BOGG is the true definition of cool.",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(m, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "25px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                        children:
                                          "With his ears flapping in the wind and a spliff in hand, BOGG is the true definition of cool.",
                                      }),
                                    }),
                                    className: "framer-1xclrc9",
                                    fonts: ["GF;Chelsea Market-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    qXK4Bqcdq: {
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "17px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children:
                                            "As he chills in his van, the air thick with smoke, BOGG thinks about his next move.",
                                        }),
                                      }),
                                    },
                                    uvg25bhWK: {
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "18px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children:
                                            "As he chills in his van, the air thick with smoke, BOGG thinks about his next move.",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(m, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "25px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                        children:
                                          "As he chills in his van, the air thick with smoke, BOGG thinks about his next move.",
                                      }),
                                    }),
                                    className: "framer-1dgesh4",
                                    fonts: ["GF;Chelsea Market-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    qXK4Bqcdq: {
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "17px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children: '"Where mi a go next?" ',
                                        }),
                                      }),
                                    },
                                    uvg25bhWK: {
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "18px",
                                            "--framer-letter-spacing": "0.05em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children: '"Where mi a go next?" ',
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(m, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "25px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                        children: '"Where mi a go next?" ',
                                      }),
                                    }),
                                    className: "framer-17vpxqh",
                                    fonts: ["GF;Chelsea Market-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            r(t, {
                              breakpoint: a,
                              overrides: {
                                qXK4Bqcdq: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3602.474368477826,
                                    intrinsicWidth: 4772.288847472549,
                                    loading: "lazy",
                                    pixelHeight: 3640,
                                    pixelWidth: 4822,
                                    sizes: "483px",
                                    src: "/images/vQmPlsmLPo2LIoEo4TkAgmQ9dU.png",
                                  },
                                },
                                uvg25bhWK: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3602.474368477826,
                                    intrinsicWidth: 4772.288847472549,
                                    loading: "lazy",
                                    pixelHeight: 3640,
                                    pixelWidth: 4822,
                                    sizes: "433px",
                                    src: "/images/vQmPlsmLPo2LIoEo4TkAgmQ9dU.png",
                                  },
                                },
                              },
                              children: r(f, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 3602.474368477826,
                                  intrinsicWidth: 4772.288847472549,
                                  loading: "lazy",
                                  pixelHeight: 3640,
                                  pixelWidth: 4822,
                                  sizes: "727px",
                                  src: "/images/vQmPlsmLPo2LIoEo4TkAgmQ9dU.png",
                                },
                                className: "framer-lrb01r",
                                "data-framer-name":
                                  "IMG_20240704_043047_771_min",
                                name: "IMG_20240704_043047_771_min",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    r("div", {
                      className: "framer-b6sat",
                    }),
                    n(Zr, {
                      __framer__styleTransformEffectEnabled: !0,
                      __framer__transformTargets: [
                        {
                          target: {
                            opacity: 1,
                            rotate: 23,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: -404,
                            y: 26,
                          },
                        },
                        {
                          target: {
                            opacity: 1,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 0,
                          },
                        },
                      ],
                      __framer__transformTrigger: "onInView",
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-1fkskhf",
                      "data-border": !0,
                      style: {
                        rotate: -4,
                      },
                      children: [
                        r(t, {
                          breakpoint: a,
                          overrides: {
                            qXK4Bqcdq: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1781.4433690274964,
                                intrinsicWidth: 3167.01043382666,
                                loading: "lazy",
                                pixelHeight: 1800,
                                pixelWidth: 3200,
                                sizes: "611px",
                                src: "/images/J1Ju7d7mUPhiC0HLfGAm36sws.png",
                              },
                            },
                            uvg25bhWK: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1781.4433690274964,
                                intrinsicWidth: 3167.01043382666,
                                loading: "lazy",
                                pixelHeight: 1800,
                                pixelWidth: 3200,
                                sizes: "485px",
                                src: "/images/J1Ju7d7mUPhiC0HLfGAm36sws.png",
                              },
                            },
                          },
                          children: r(f, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 1781.4433690274964,
                              intrinsicWidth: 3167.01043382666,
                              loading: "lazy",
                              pixelHeight: 1800,
                              pixelWidth: 3200,
                              sizes: "964px",
                              src: "/images/J1Ju7d7mUPhiC0HLfGAm36sws.png",
                            },
                            className: "framer-e6e3vv",
                            "data-framer-name": "PEPEVERSE_mk35_min",
                            name: "PEPEVERSE_mk35_min",
                          }),
                        }),
                        n("div", {
                          className: "framer-uefsqx",
                          children: [
                            r(t, {
                              breakpoint: a,
                              overrides: {
                                qXK4Bqcdq: {
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "24px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "INTO THE PEPEVERSE",
                                    }),
                                  }),
                                },
                                uvg25bhWK: {
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "26px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "INTO THE PEPEVERSE",
                                    }),
                                  }),
                                },
                              },
                              children: r(m, {
                                __fromCanvasComponent: !0,
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
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": "rgb(38, 38, 38)",
                                    },
                                    children: "INTO THE PEPEVERSE",
                                  }),
                                }),
                                className: "framer-3xdv9l",
                                fonts: ["GF;Chelsea Market-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            r(t, {
                              breakpoint: a,
                              overrides: {
                                qXK4Bqcdq: {
                                  children: n(e, {
                                    children: [
                                      r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "20px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                        children:
                                          'Seeing a sign for the Pepeverse, BOGGgrins, "Why da fuck not, mon?" and swerves towards the exit. ',
                                      }),
                                      r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "17px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                        children: r("br", {
                                          className: "trailing-break",
                                        }),
                                      }),
                                      r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "20px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                        children: '"Time fi a new adventure!"',
                                      }),
                                    ],
                                  }),
                                },
                                uvg25bhWK: {
                                  children: n(e, {
                                    children: [
                                      r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "18px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                        children:
                                          'Seeing a sign for the Pepeverse, BOGGgrins, "Why da fuck not, mon?" and swerves towards the exit. ',
                                      }),
                                      r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "29px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                        children: r("br", {
                                          className: "trailing-break",
                                        }),
                                      }),
                                      r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "18px",
                                          "--framer-letter-spacing": "0.05em",
                                          "--framer-line-height": "1.5em",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                        children: '"Time fi a new adventure!"',
                                      }),
                                    ],
                                  }),
                                },
                              },
                              children: r(m, {
                                __fromCanvasComponent: !0,
                                children: n(e, {
                                  children: [
                                    r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "30px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children:
                                        'Seeing a sign for the Pepeverse, BOGGgrins, "Why da fuck not, mon?" and swerves towards the exit. ',
                                    }),
                                    r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "29px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: r("br", {
                                        className: "trailing-break",
                                      }),
                                    }),
                                    r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "30px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: '"Time fi a new adventure!"',
                                    }),
                                  ],
                                }),
                                className: "framer-l1znrm",
                                fonts: ["GF;Chelsea Market-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    r("div", {
                      className: "framer-1ersalg",
                    }),
                    n(Zr, {
                      __framer__styleTransformEffectEnabled: !0,
                      __framer__transformTargets: [
                        {
                          target: {
                            opacity: 1,
                            rotate: -25,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 547,
                          },
                        },
                        {
                          target: {
                            opacity: 1,
                            rotate: 0,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0,
                            x: 0,
                            y: 0,
                          },
                        },
                      ],
                      __framer__transformTrigger: "onInView",
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-6gr8qz",
                      children: [
                        r(t, {
                          breakpoint: a,
                          overrides: {
                            qXK4Bqcdq: {
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "30px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: `BOGGENDS UP PERFORMING AT A SMALL VENUE AND GUESS WHO'S THERE, THE BOYS. WOLF WHISPERS TO BRETT "Why are Jamaicans always so fucking cool" THINKING TO THEMSELVES\u2026`,
                                }),
                              }),
                            },
                            uvg25bhWK: {
                              children: r(e, {
                                children: n("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "20px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: [
                                    r("span", {
                                      style: {
                                        "--framer-font-size": "25px",
                                      },
                                      children: "BOGG",
                                    }),
                                    ` ENDS UP GETTING A GIG AND GUESS WHO'S THERE, THE BOYS. WOLF WHISPERS TO BRETT "Why are Jamaicans always so fucking cool" THINKING TO THEMSELVES\u2026`,
                                  ],
                                }),
                              }),
                            },
                          },
                          children: r(m, {
                            __fromCanvasComponent: !0,
                            children: r(e, {
                              children: n("p", {
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
                                children: [
                                  r("span", {
                                    style: {
                                      "--framer-font-size": "40px",
                                    },
                                    children: "BOGG",
                                  }),
                                  ` ENDS UP GETTING A GIG AND GUESS WHO'S THERE, THE BOYS. WOLF WHISPERS TO BRETT "Why are Jamaicans always so fucking cool" THINKING TO THEMSELVES\u2026`,
                                ],
                              }),
                            }),
                            className: "framer-g6oh5m",
                            fonts: ["GF;Chelsea Market-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        r(b.div, {
                          className: "framer-idsorq",
                          "data-border": !0,
                          style: {
                            rotate: 2,
                          },
                          children: r("div", {
                            className: "framer-nn9ghl",
                            children: r(t, {
                              breakpoint: a,
                              overrides: {
                                qXK4Bqcdq: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 712.5773476109986,
                                    intrinsicWidth: 1266.804173530664,
                                    loading: "lazy",
                                    pixelHeight: 720,
                                    pixelWidth: 1280,
                                    sizes: "761px",
                                    src: "/images/brUIjx5Caf3NurdcnqRH4vsw.png",
                                  },
                                },
                                uvg25bhWK: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 712.5773476109986,
                                    intrinsicWidth: 1266.804173530664,
                                    loading: "lazy",
                                    pixelHeight: 720,
                                    pixelWidth: 1280,
                                    sizes: "497px",
                                    src: "/images/brUIjx5Caf3NurdcnqRH4vsw.png",
                                  },
                                },
                              },
                              children: r(f, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 712.5773476109986,
                                  intrinsicWidth: 1266.804173530664,
                                  loading: "lazy",
                                  pixelHeight: 720,
                                  pixelWidth: 1280,
                                  sizes: "1205px",
                                  src: "/images/brUIjx5Caf3NurdcnqRH4vsw.png",
                                },
                                className: "framer-1ar9ocj",
                                "data-framer-name": "image",
                                name: "image",
                              }),
                            }),
                          }),
                        }),
                        r(t, {
                          breakpoint: a,
                          overrides: {
                            uvg25bhWK: {
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "30px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "THEY WERE DESTINED TO BE FRIENDS",
                                }),
                              }),
                            },
                          },
                          children: r(m, {
                            __fromCanvasComponent: !0,
                            children: r(e, {
                              children: r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "57px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-line-height": "1.1em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children: "THEY WERE DESTINED TO BE FRIENDS",
                              }),
                            }),
                            className: "framer-1r31ymr",
                            fonts: ["GF;Chelsea Market-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-jmzbt9",
                  "data-framer-name": "Header",
                  id: D,
                  name: "Header",
                  ref: K,
                  children: [
                    r(t, {
                      breakpoint: a,
                      overrides: {
                        qXK4Bqcdq: {
                          children: r(e, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Chelsea Market", sans-serif',
                                "--framer-font-size": "49px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children:
                                "REVEAL MORE OF THE STORY BY REACHING THESE MARKET CAP MILESTONES",
                            }),
                          }),
                        },
                        uvg25bhWK: {
                          children: r(e, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Chelsea Market", sans-serif',
                                "--framer-font-size": "38px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children:
                                "REVEAL MORE OF THE STORY BY REACHING THESE MARKET CAP MILESTONES",
                            }),
                          }),
                        },
                      },
                      children: r(m, {
                        __fromCanvasComponent: !0,
                        children: r(e, {
                          children: r("p", {
                            style: {
                              "--font-selector":
                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                              "--framer-font-family":
                                '"Chelsea Market", sans-serif',
                              "--framer-font-size": "75px",
                              "--framer-letter-spacing": "0.05em",
                              "--framer-line-height": "1.1em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(38, 38, 38)",
                            },
                            children:
                              "REVEAL MORE OF THE STORY BY REACHING THESE MARKET CAP MILESTONES",
                          }),
                        }),
                        className: "framer-1mujva",
                        fonts: ["GF;Chelsea Market-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    n("div", {
                      className: "framer-kxqz83",
                      children: [
                        r("div", {
                          className: "framer-xkiogx",
                          children: r(t, {
                            breakpoint: a,
                            overrides: {
                              uvg25bhWK: {
                                children: r(e, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Coming Soon", sans-serif',
                                      "--framer-font-size": "36px",
                                      "--framer-letter-spacing": "0.05em",
                                      "--framer-line-height": "1.1em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color": "rgb(38, 38, 38)",
                                    },
                                    children: "BOGGGOES INTO THE PEPEVERSE",
                                  }),
                                }),
                              },
                            },
                            children: r(m, {
                              __fromCanvasComponent: !0,
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Coming Soon", sans-serif',
                                    "--framer-font-size": "41px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "BOGGGOES INTO THE PEPEVERSE",
                                }),
                              }),
                              className: "framer-t2fdod",
                              fonts: ["GF;Coming Soon-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        n("div", {
                          className: "framer-1u5g4bc",
                          children: [
                            n("div", {
                              className: "framer-dtzhxt",
                              "data-border": !0,
                              children: [
                                r(m, {
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
                                      children: "Unlocks at ",
                                    }),
                                  }),
                                  className: "framer-776sek",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    uvg25bhWK: {
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
                                  children: r(s, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "104px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$10M",
                                      }),
                                    }),
                                    className: "framer-blfkmh",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(m, {
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
                                      children: "Chronicle 1",
                                    }),
                                  }),
                                  className: "framer-a1ezk",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(w, {
                                  href: N,
                                  children: r(k, {
                                    className: "framer-1gvp07w framer-lux5qc",
                                    "data-border": !0,
                                    children: r(b.div, {
                                      className: "framer-1kywjiy",
                                      children: r(s, {
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
                                            children: "READ NOW",
                                          }),
                                        }),
                                        className: "framer-bdpj6w",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-2fn8so",
                              "data-border": !0,
                              children: [
                                r(m, {
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
                                      children: "Unlocks at ",
                                    }),
                                  }),
                                  className: "framer-1e1kph8",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    uvg25bhWK: {
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
                                          children: "$15M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(s, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "104px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$15M",
                                      }),
                                    }),
                                    className: "framer-13vgkqd",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(m, {
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
                                      children: "Chronicle 2",
                                    }),
                                  }),
                                  className: "framer-eb0fpq",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(w, {
                                  href: N,
                                  children: r(k, {
                                    className: "framer-1b8wvpw framer-lux5qc",
                                    "data-border": !0,
                                    children: r(b.div, {
                                      className: "framer-19uy51d",
                                      children: r(s, {
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
                                            children: "WATCH NOW",
                                          }),
                                        }),
                                        className: "framer-t3niki",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-1buhui5",
                              "data-border": !0,
                              children: [
                                r(m, {
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
                                      children: "Unlocks at ",
                                    }),
                                  }),
                                  className: "framer-c73f03",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    uvg25bhWK: {
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
                                  children: r(s, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "104px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$20M",
                                      }),
                                    }),
                                    className: "framer-ppcku2",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(m, {
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
                                      children: "Chronicle 3",
                                    }),
                                  }),
                                  className: "framer-xb0ysa",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(w, {
                                  href: N,
                                  children: r(k, {
                                    className: "framer-l51av framer-lux5qc",
                                    "data-border": !0,
                                    children: r(b.div, {
                                      className: "framer-102nmxp",
                                      children: r(s, {
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
                                            children: "WATCH NOW",
                                          }),
                                        }),
                                        className: "framer-17fqiqb",
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
                        n("div", {
                          className: "framer-lg6vzt",
                          children: [
                            n("div", {
                              className: "framer-1s6d07n",
                              "data-border": !0,
                              children: [
                                r(m, {
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
                                      children: "Unlocks at ",
                                    }),
                                  }),
                                  className: "framer-17lgh0z",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    uvg25bhWK: {
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
                                          children: "$25M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(s, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "104px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$25M",
                                      }),
                                    }),
                                    className: "framer-1xvcej",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(m, {
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
                                      children: "Chronicle 4",
                                    }),
                                  }),
                                  className: "framer-1sow016",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(w, {
                                  href: N,
                                  children: r(k, {
                                    className: "framer-1fumzj6 framer-lux5qc",
                                    "data-border": !0,
                                    children: r(b.div, {
                                      className: "framer-tsx5p4",
                                      children: r(s, {
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
                                            children: "WATCH NOW",
                                          }),
                                        }),
                                        className: "framer-g9obth",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-10sgg3a",
                              "data-border": !0,
                              children: [
                                r(m, {
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
                                      children: "Unlocks at ",
                                    }),
                                  }),
                                  className: "framer-1v6o7am",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    uvg25bhWK: {
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
                                  children: r(s, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "104px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$30M",
                                      }),
                                    }),
                                    className: "framer-phc1xv",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(m, {
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
                                      children: "Chronicle 5",
                                    }),
                                  }),
                                  className: "framer-10nru07",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(w, {
                                  href: N,
                                  children: r(k, {
                                    className: "framer-1uws9uw framer-lux5qc",
                                    "data-border": !0,
                                    children: r(b.div, {
                                      className: "framer-1u8oxjk",
                                      children: r(s, {
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
                                            children: "WATCH NOW",
                                          }),
                                        }),
                                        className: "framer-1dbxbbl",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "center",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-1aixv4d",
                              "data-border": !0,
                              children: [
                                r(m, {
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
                                      children: "Unlocks at ",
                                    }),
                                  }),
                                  className: "framer-1rubxek",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(t, {
                                  breakpoint: a,
                                  overrides: {
                                    uvg25bhWK: {
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
                                          children: "$35M",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(s, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("h2", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGFua2VyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Tanker", "Tanker Placeholder", sans-serif',
                                          "--framer-font-size": "104px",
                                          "--framer-line-height": "36px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(26, 26, 26, 0.08)",
                                        },
                                        children: "$35M",
                                      }),
                                    }),
                                    className: "framer-v2utxd",
                                    fonts: ["FS;Tanker-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                r(m, {
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
                                      children: "Chronicle 6",
                                    }),
                                  }),
                                  className: "framer-1wllye",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                r(w, {
                                  href: N,
                                  children: r(k, {
                                    className: "framer-ovwdv5 framer-lux5qc",
                                    "data-border": !0,
                                    children: r(b.div, {
                                      className: "framer-f6coc0",
                                      children: r(s, {
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
                                            children: "WATCH NOW",
                                          }),
                                        }),
                                        className: "framer-tyaz3c",
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
                    r(t, {
                      breakpoint: a,
                      overrides: {
                        qXK4Bqcdq: {
                          children: r(e, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Chelsea Market", sans-serif',
                                "--framer-font-size": "43px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: "MORE STORY TO BE REVEALED..",
                            }),
                          }),
                        },
                        uvg25bhWK: {
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
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: "MORE STORY TO BE REVEALED..",
                            }),
                          }),
                        },
                      },
                      children: r(m, {
                        __fromCanvasComponent: !0,
                        children: r(e, {
                          children: r("p", {
                            style: {
                              "--font-selector":
                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                              "--framer-font-family":
                                '"Chelsea Market", sans-serif',
                              "--framer-font-size": "49px",
                              "--framer-letter-spacing": "0.05em",
                              "--framer-line-height": "1.1em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(38, 38, 38)",
                            },
                            children: "MORE STORY TO BE REVEALED..",
                          }),
                        }),
                        className: "framer-5wgzul",
                        fonts: ["GF;Chelsea Market-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-lglogn",
                  "data-framer-name": "Header",
                  id: P,
                  name: "Header",
                  ref: $,
                  children: [
                    r(t, {
                      breakpoint: a,
                      overrides: {
                        qXK4Bqcdq: {
                          children: r(e, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Chelsea Market", sans-serif',
                                "--framer-font-size": "63px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: "$BOGG BURNS EVERY 2M MARKETCAP",
                            }),
                          }),
                        },
                        uvg25bhWK: {
                          children: r(e, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Chelsea Market", sans-serif',
                                "--framer-font-size": "42px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: "$BOGG BURNS EVERY 2M MARKETCAP",
                            }),
                          }),
                        },
                      },
                      children: r(m, {
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
                            children: "$BOGG BURNS EVERY 2M MARKETCAP",
                          }),
                        }),
                        className: "framer-168x43m",
                        fonts: ["GF;Chelsea Market-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    r("div", {
                      className: "framer-kwueix",
                      children: n("div", {
                        className: "framer-9sf19l",
                        "data-border": !0,
                        children: [
                          r(t, {
                            breakpoint: a,
                            overrides: {
                              uvg25bhWK: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1266.804173530664,
                                  intrinsicWidth: 1266.804173530664,
                                  loading: "lazy",
                                  pixelHeight: 1280,
                                  pixelWidth: 1280,
                                  sizes: "352px",
                                  src: "/images/dBW6DlIo13Y1hj0Lpf5kzObk3nY.png",
                                },
                                transformTemplate: q,
                              },
                            },
                            children: r(f, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1266.804173530664,
                                intrinsicWidth: 1266.804173530664,
                                loading: "lazy",
                                pixelHeight: 1280,
                                pixelWidth: 1280,
                                sizes: "651px",
                                src: "/images/dBW6DlIo13Y1hj0Lpf5kzObk3nY.png",
                              },
                              className: "framer-1y2ifz9",
                              "data-framer-name": "image",
                              name: "image",
                            }),
                          }),
                          r(w, {
                            href: "https://etherscan.io",
                            children: r(k, {
                              className: "framer-sdu5g8 framer-lux5qc",
                              "data-border": !0,
                              whileHover: X,
                              children: r(b.div, {
                                className: "framer-u5hdwo",
                                children: r(s, {
                                  __fromCanvasComponent: !0,
                                  children: r(e, {
                                    children: r("p", {
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
                                          "rgb(237, 237, 237)",
                                      },
                                      children: "SEE DEM BURNS",
                                    }),
                                  }),
                                  className: "framer-17skxdn",
                                  fonts: ["GF;Chelsea Market-regular"],
                                  verticalAlignment: "center",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-qu9lha",
                  "data-framer-name": "Header",
                  id: I,
                  name: "Header",
                  ref: T,
                  children: [
                    r(t, {
                      breakpoint: a,
                      overrides: {
                        uvg25bhWK: {
                          children: r(e, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Chelsea Market", sans-serif',
                                "--framer-font-size": "38px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: "BOGGONOMICS",
                            }),
                          }),
                        },
                      },
                      children: r(m, {
                        __fromCanvasComponent: !0,
                        children: r(e, {
                          children: r("p", {
                            style: {
                              "--font-selector":
                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                              "--framer-font-family":
                                '"Chelsea Market", sans-serif',
                              "--framer-font-size": "82px",
                              "--framer-letter-spacing": "0.05em",
                              "--framer-line-height": "1.1em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(38, 38, 38)",
                            },
                            children: "BOGGONOMICS",
                          }),
                        }),
                        className: "framer-80p2p3",
                        fonts: ["GF;Chelsea Market-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    r("div", {
                      className: "framer-m1498h",
                      children: r(t, []),
                    }),
                    n("div", {
                      className: "framer-qzcb9z",
                      children: [
                        r("div", {
                          className: "framer-1ke1628",
                          "data-border": !0,
                          children: r(t, {
                            breakpoint: a,
                            overrides: {
                              uvg25bhWK: {
                                children: n(e, {
                                  children: [
                                    r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "26px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "LIQUIDITY",
                                    }),
                                    r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "26px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "BURNED",
                                    }),
                                  ],
                                }),
                              },
                            },
                            children: r(m, {
                              __fromCanvasComponent: !0,
                              children: n(e, {
                                children: [
                                  r("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Chelsea Market", sans-serif',
                                      "--framer-font-size": "45px",
                                      "--framer-letter-spacing": "0.05em",
                                      "--framer-line-height": "1.1em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color": "rgb(38, 38, 38)",
                                    },
                                    children: "LIQUIDITY",
                                  }),
                                  r("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Chelsea Market", sans-serif',
                                      "--framer-font-size": "45px",
                                      "--framer-letter-spacing": "0.05em",
                                      "--framer-line-height": "1.1em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color": "rgb(38, 38, 38)",
                                    },
                                    children: "BURNED",
                                  }),
                                ],
                              }),
                              className: "framer-1fd3ra8",
                              fonts: ["GF;Chelsea Market-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        r("div", {
                          className: "framer-dwb04x",
                          "data-border": !0,
                          children: r(t, {
                            breakpoint: a,
                            overrides: {
                              uvg25bhWK: {
                                children: r(e, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Chelsea Market", sans-serif',
                                      "--framer-font-size": "33px",
                                      "--framer-letter-spacing": "0.05em",
                                      "--framer-line-height": "1.1em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color": "rgb(38, 38, 38)",
                                    },
                                    children: "RENOUNCED",
                                  }),
                                }),
                              },
                            },
                            children: r(m, {
                              __fromCanvasComponent: !0,
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "42px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "RENOUNCED",
                                }),
                              }),
                              className: "framer-1o70zzn",
                              fonts: ["GF;Chelsea Market-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        M() &&
                          r("div", {
                            className: "framer-1s3jv2j hidden-2pzl18",
                            "data-border": !0,
                            children: r(t, {
                              breakpoint: a,
                              overrides: {
                                uvg25bhWK: {
                                  children: r(e, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                        "--framer-font-family":
                                          '"Chelsea Market", sans-serif',
                                        "--framer-font-size": "33px",
                                        "--framer-letter-spacing": "0.05em",
                                        "--framer-line-height": "1.1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgb(38, 38, 38)",
                                      },
                                      children: "O% TAX",
                                    }),
                                  }),
                                },
                              },
                              children: r(m, {
                                __fromCanvasComponent: !0,
                                children: r(e, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Chelsea Market", sans-serif',
                                      "--framer-font-size": "45px",
                                      "--framer-letter-spacing": "0.05em",
                                      "--framer-line-height": "1.1em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color": "rgb(38, 38, 38)",
                                    },
                                    children: "O% TAX",
                                  }),
                                }),
                                className: "framer-1uguzxm",
                                fonts: ["GF;Chelsea Market-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        G() &&
                          r("div", {
                            className:
                              "framer-1v9426r hidden-72rtr7 hidden-41k153 hidden-1di8qwd hidden-8uu72v hidden-9k0o93",
                            "data-border": !0,
                            children: r(m, {
                              __fromCanvasComponent: !0,
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "38px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "RENOUNCED",
                                }),
                              }),
                              className: "framer-1ac48b7",
                              fonts: ["GF;Chelsea Market-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                      ],
                    }),
                    n("div", {
                      className: "framer-199qkql",
                      "data-border": !0,
                      children: [
                        r(t, {
                          breakpoint: a,
                          overrides: {
                            qXK4Bqcdq: {
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "53px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "TOTAL SUPPLY",
                                }),
                              }),
                            },
                            uvg25bhWK: {
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "36px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "TOTAL SUPPLY",
                                }),
                              }),
                            },
                          },
                          children: r(m, {
                            __fromCanvasComponent: !0,
                            children: r(e, {
                              children: r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "58px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-line-height": "1.1em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children: "TOTAL SUPPLY",
                              }),
                            }),
                            className: "framer-3odbdf",
                            fonts: ["GF;Chelsea Market-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        r(t, {
                          breakpoint: a,
                          overrides: {
                            uvg25bhWK: {
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "26px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "1,000,000,000",
                                }),
                              }),
                            },
                          },
                          children: r(m, {
                            __fromCanvasComponent: !0,
                            children: r(e, {
                              children: r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chelsea Market", sans-serif',
                                  "--framer-font-size": "38px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-line-height": "1.1em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children: "1,000,000,000",
                              }),
                            }),
                            className: "framer-rthtya",
                            fonts: ["GF;Chelsea Market-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-1iaiajr",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    r(t, {
                      breakpoint: a,
                      overrides: {
                        qXK4Bqcdq: {
                          children: r(e, {
                            children: n("p", {
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
                              children: [
                                "HOW TO BUY ",
                                r("span", {
                                  style: {
                                    "--framer-font-size": "103px",
                                  },
                                  children: "$BOGG",
                                }),
                              ],
                            }),
                          }),
                        },
                        uvg25bhWK: {
                          children: r(e, {
                            children: r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Chelsea Market", sans-serif',
                                "--framer-font-size": "55px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-line-height": "1.1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: "HOW TO BUY $BOGG",
                            }),
                          }),
                        },
                      },
                      children: r(m, {
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
                            children: "HOW TO BUY $BOGG",
                          }),
                        }),
                        className: "framer-afcqg6",
                        fonts: ["GF;Chelsea Market-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    n("div", {
                      className: "framer-2ukt13",
                      children: [
                        n("div", {
                          className: "framer-ghwmg4",
                          children: [
                            r(t, {
                              breakpoint: a,
                              overrides: {
                                qXK4Bqcdq: {
                                  style: {
                                    rotate: -2,
                                  },
                                },
                                uvg25bhWK: {
                                  style: {
                                    rotate: -2,
                                  },
                                },
                              },
                              children: r(b.div, {
                                className: "framer-yy5q7w",
                                "data-border": !0,
                                style: {
                                  rotate: -5,
                                },
                                children: n("div", {
                                  className: "framer-3f4zt4",
                                  children: [
                                    r(t, {
                                      breakpoint: a,
                                      overrides: {
                                        uvg25bhWK: {
                                          children: r(e, {
                                            children: r("h2", {
                                              style: {
                                                "--font-selector":
                                                  "RlM7VGFua2VyLXJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Tanker", "Tanker Placeholder", sans-serif',
                                                "--framer-font-size": "60px",
                                                "--framer-line-height": "36px",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgba(26, 26, 26, 0.08)",
                                              },
                                              children: "1",
                                            }),
                                          }),
                                        },
                                      },
                                      children: r(s, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("h2", {
                                            style: {
                                              "--font-selector":
                                                "RlM7VGFua2VyLXJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Tanker", "Tanker Placeholder", sans-serif',
                                              "--framer-font-size": "104px",
                                              "--framer-line-height": "36px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgba(26, 26, 26, 0.08)",
                                            },
                                            children: "1",
                                          }),
                                        }),
                                        className: "framer-15ts10g",
                                        fonts: ["FS;Tanker-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    r(t, {
                                      breakpoint: a,
                                      overrides: {
                                        uvg25bhWK: {
                                          children: r(e, {
                                            children: r("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Chelsea Market", sans-serif',
                                                "--framer-font-size": "30px",
                                                "--framer-letter-spacing":
                                                  "0.03em",
                                                "--framer-line-height": "1.1em",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgb(38, 38, 38)",
                                                "--framer-text-transform":
                                                  "uppercase",
                                              },
                                              children:
                                                "Set up yuh wallet, easy peasy!",
                                            }),
                                          }),
                                        },
                                      },
                                      children: r(m, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "45px",
                                              "--framer-letter-spacing":
                                                "0.03em",
                                              "--framer-line-height": "1.1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(38, 38, 38)",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children:
                                              "Set up yuh wallet, easy peasy!",
                                          }),
                                        }),
                                        className: "framer-yx3tlh",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    r(t, {
                                      breakpoint: a,
                                      overrides: {
                                        uvg25bhWK: {
                                          children: r(e, {
                                            children: n("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Coming Soon", sans-serif',
                                                "--framer-font-size": "17px",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgb(38, 38, 38)",
                                              },
                                              children: [
                                                "Download a Ethereum based wallet. We recommend ",
                                                r(w, {
                                                  href: "metamask.io",
                                                  openInNewTab: !0,
                                                  smoothScroll: !1,
                                                  children: r("a", {
                                                    className:
                                                      "framer-styles-preset-825om3",
                                                    "data-styles-preset":
                                                      "eOSHOegwe",
                                                    children: "MetaMask",
                                                  }),
                                                }),
                                                ".app ",
                                              ],
                                            }),
                                          }),
                                        },
                                      },
                                      children: r(m, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: n("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Coming Soon", sans-serif',
                                              "--framer-font-size": "21px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(38, 38, 38)",
                                            },
                                            children: [
                                              "Download a Ethereum based wallet. We recommend ",
                                              r(w, {
                                                href: "metamask.io",
                                                openInNewTab: !0,
                                                smoothScroll: !1,
                                                children: r("a", {
                                                  className:
                                                    "framer-styles-preset-825om3",
                                                  "data-styles-preset":
                                                    "eOSHOegwe",
                                                  children: "MetaMask",
                                                }),
                                              }),
                                              ".app ",
                                            ],
                                          }),
                                        }),
                                        className: "framer-5mdfbo",
                                        fonts: ["GF;Coming Soon-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            d() &&
                              r(A, {
                                className:
                                  "framer-tbxxb4 hidden-2pzl18 hidden-41k153",
                                "data-framer-name": "arrow_right",
                                fill: "black",
                                intrinsicHeight: 133,
                                intrinsicWidth: 137,
                                name: "arrow_right",
                                svg: '<svg width="137" height="133" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.94 2.351a.14.14 0 0 1 .06 0c.48-.068 48.44-5.72 84.04 22.255 24.943 19.602 31.992 58.592 32.829 63.76l6.749-1.46a.11.11 0 0 1 .08-.002l6.26-1.403a.53.53 0 0 1 .523.182.555.555 0 0 1 .128.539l-15.292 38.401.001.08-4.496 5.697a.494.494 0 0 1-.342.206.518.518 0 0 1-.386-.105l-5.431-4.04-30.236-22.464a.537.537 0 0 1-.216-.356v-.06a.54.54 0 0 1 .114-.342l4.447-5.647a.69.69 0 0 1 .188-.103l7.655-1.803c-4.307-15.898-22.039-62.41-76.647-51.749a.24.24 0 0 1-.308.095c-1.576.313-3.19.667-4.835 1.072l-.1.001a.31.31 0 0 1-.1.002l-.1.001-.07.001a.39.39 0 0 1-.081-.099l-.002-.09L.346 8.85l-.002-.12a.51.51 0 0 1 .106-.31s2.273-3.184 4.446-5.697l.069-.05.079-.062a.5.5 0 0 1-.104-.259Zm126.972 90.186-4.723-4.24-.608.139a33.927 33.927 0 0 1 2.455 2.324 31.744 31.744 0 0 0 2.616 2.441l.26-.664Zm.579-1.449a18.571 18.571 0 0 1-3.558-3.177l-1.106.246 4.298 3.857.366-.925Zm.559-1.408-2.512-2.123-.997.225a17.962 17.962 0 0 0 3.132 2.794l.377-.896Zm.453-1.147a6.308 6.308 0 0 0-1.16-1.373l-1.148.207 2.027 1.74.281-.574Zm-.542-1.502c.287.276.549.576.783.899l.463-1.177-1.246.278Zm-2.051 8.031a43.05 43.05 0 0 1-3.554-2.947.266.266 0 0 1-.083-.189.248.248 0 0 1 .014-.097.25.25 0 0 1 .053-.084.271.271 0 0 1 .38-.006 43.266 43.266 0 0 0 3.392 2.78l.337-.855a31.212 31.212 0 0 1-2.768-2.539 28.967 28.967 0 0 0-2.758-2.55l-4.377.936a.517.517 0 0 1-.421-.084.557.557 0 0 1-.226-.367c-.056-.419-6.258-42.992-32.518-63.654C55.311-.616 11.357 2.766 5.724 3.32l8.75 34.954a96.334 96.334 0 0 1 9.834-1.866.24.24 0 0 1 .219-.063c16.15-2.16 30.301.55 42.127 8.265 25.345 16.336 31.61 49.657 31.665 49.996a.53.53 0 0 1-.4.616L85.39 98.168l34.2 25.376 11.319-28.482ZM1.722 10.59 5.74 7.71l-.436-1.714L1.46 9.764l.262.826Zm.585 2.342 4.092-2.591-.521-2.073-4.018 2.88.447 1.784Zm.627 2.5 4.103-2.5-.51-1.993-4.082 2.58.489 1.914Zm.606 2.442 4.135-2.412-.5-1.992-4.103 2.5.468 1.904Zm.787 3.149 4.04-2.79L7.812 16l-4.135 2.412.649 2.61Zm.68 2.72 3.956-3.06-.49-1.942-4.038 2.8.572 2.202Zm.543 2.162 4.092-2.571-.51-2.053-3.956 3.06.374 1.564Zm.5 1.993 4.049-2.76-.319-1.246-3.963 2.5h-.06l.292 1.506Zm.552 2.222 4.018-2.89-.393-1.544-4.04 2.76.415 1.674Zm.66 2.61 3.95-3.299-.414-1.644-4.027 2.9.49 2.043Zm.576 2.462 3.794-3.767-.34-1.365-3.952 3.3.498 1.832Zm1.307 5.221 3.567-4.303a.25.25 0 0 1 .09-.002l-.563-2.221-3.617 4.294.523 2.232Zm.755 2.99 3.592-4.594-.542-2.173-3.646 4.395.596 2.371Zm36.512-.112 3.088-4.867-1.344-.31-2.788 4.902c.371.075.722.17 1.064.264l-.02.01Zm3.727 1.114 4.394-4.505a46.003 46.003 0 0 0-2.352-.755 26.999 26.999 0 0 1-3.208 4.858c.382.124.784.258 1.186.392l-.02.01Zm2.323.846 4.556-4.358c-.644-.26-1.288-.521-1.952-.751l-4.355 4.415c.594.241 1.187.462 1.77.684l-.02.01Zm2.354.965a31.587 31.587 0 0 0 3.993-4.57h.06a50.156 50.156 0 0 0-1.289-.571l-4.585 4.368c.634.25 1.237.502 1.841.773h-.02Zm2.015.97a.239.239 0 0 1 .067-.18l3.935-4.4c-.523-.252-1.007-.495-1.59-.736a.23.23 0 0 1 .002.16 31.634 31.634 0 0 1-3.934 4.499c.553.162 1.056.394 1.55.637l-.03.02Zm3.68 2.006v-.07l5.143-3.837a48.245 48.245 0 0 0-1.807-1.093l-4.497 4.237c.404.274.797.508 1.19.743l-.029.02Zm2.2 1.367 5.478-3.611a47.34 47.34 0 0 0-2.02-1.36l-5.165 3.817c.586.401 1.172.762 1.738 1.134l-.03.02Zm2.123 1.48 5.701-3.316a37.567 37.567 0 0 0-1.891-1.432l-5.457 3.592c.585.35 1.13.743 1.677 1.135l-.03.02Zm2.954 2.266a31.623 31.623 0 0 0 4.945-3.764 48.632 48.632 0 0 0-1.722-1.455l-5.682 3.255a57.77 57.77 0 0 1 2.459 1.964Zm1.823 1.573a.321.321 0 0 1 .099-.102 23.269 23.269 0 0 0 4.696-3.7c-.416-.394-.852-.777-1.288-1.17a31.378 31.378 0 0 1-4.945 3.763c.516.372.972.776 1.438 1.189v.02Zm-10.636-7.753 4.458-4.227c-.676-.38-1.371-.73-2.016-1.08l-4.074 4.49-.11.002a39.36 39.36 0 0 1 1.582.827.22.22 0 0 1 .16-.032v.02ZM22.168 37.81l-1.598 4.154c.678-.08 1.337-.16 1.996-.23a.279.279 0 0 1 .177-.212 38.448 38.448 0 0 0 1.212-3.959c-.6.05-1.189.128-1.787.227v.02Zm16.938-.942-2.51 4.698c.65.06 1.292.13 1.923.201a30.107 30.107 0 0 1 2.45-4.756c-.622-.061-1.243-.132-1.863-.163v.02Zm-14.583.597a35.77 35.77 0 0 1-1.298 4.2c.56-.009 1.11-.097 1.659-.135l1.626-4.305c-.64.05-1.328.13-1.987.22v.02Zm6.932-.633L29.7 41.318l1.25-.018 1.863-4.538c-.45-.004-.95.024-1.36.08v-.01Zm-2.324 4.495 1.734-4.476c-.37.005-.75.01-1.13.066a19.388 19.388 0 0 0-1.794 4.427c.4-.026.79-.031 1.19-.037v.02Zm4.263-4.564-1.873 4.558c.667-.01 1.334.01 2.001.06l2.042-4.64c-.7-.03-1.44-.009-2.17.002v.02Zm-6.295.404-1.626 4.314c.64-.01 1.28-.019 1.909-.098.393-1.537.973-3.02 1.724-4.416-.66.03-1.338.11-2.007.18v.02Zm7.004 4.246c.64-.01 1.281.071 1.912.122l2.5-4.698c-.78.012-1.57-.077-2.361-.085l-2.051 4.661Zm14.307 2.418a27.17 27.17 0 0 0 3.269-4.86c-.533-.151-1.075-.283-1.617-.415l-3.098 4.866c.492.133 1.004.266 1.446.409Zm-3.564-.947 2.778-4.892c-.492-.103-1.004-.205-1.485-.298l-2.999 4.815c.582.151 1.144.243 1.706.375Zm-2.267-.477 2.999-4.775c-.662-.11-1.323-.2-2.005-.29l-2.087 4.902c.37.024.731.089 1.093.163Zm-1.461-.708-.001-.07 1.934-4.42c-.49-.062-1.001-.114-1.482-.167a29.692 29.692 0 0 0-2.49 4.777c.632.08 1.263.171 1.875.272l.164-.392Zm-21.178.314 1.589-4.144c-.549.098-1.107.217-1.666.315l-1.43 4.022c.51-.038 1.038-.106 1.507-.193Zm-2.155.322a.18.18 0 0 1 .07 0l1.4-4.022c-.598.119-1.206.238-1.814.367l-1.94 4.03c.818-.113 1.566-.244 2.314-.355l-.03-.02Zm-2.833.532 1.94-4.029c-.797.182-1.594.354-2.411.556l-3.367 4.31a60.34 60.34 0 0 1 3.838-.837Zm-2.854-9.738-.298-1.176-3.716 3.695-.08.002.457 1.813 3.636-4.334Zm60.385 25.496a26 26 0 0 0 5.131-3.306l-1.016-1.065-5.09 3.406c.385.354.68.67 1.025.995l-.05-.03Zm1.798 1.914 5.145-3.077a38.249 38.249 0 0 0-1.465-1.688 26.608 26.608 0 0 1-5.092 3.306c.528.482 1.005.985 1.463 1.488l-.05-.03Zm2.036 2.4 4.892-3.283a80.397 80.397 0 0 0-1.437-1.799l-5.125 3.077c.59.7 1.2 1.362 1.75 2.034l-.08-.029Zm1.233 1.542a.23.23 0 0 1 .098-.122l4.765-3.07a54.976 54.976 0 0 0-.908-1.217l-4.852 3.302.897 1.107Zm3.39 4.74 5.114-2.486-.86-1.367-5.204 2.447.95 1.406Zm1.443 2.189 5.065-2.395c-.339-.606-.688-1.2-1.027-1.805l-5.094 2.465c.36.595.718 1.17 1.056 1.735Zm1.026 1.735 4.966-2.324-.72-1.32-5.045 2.366.8 1.278Zm1.1 1.984a.27.27 0 0 1 .239-.064l4.655-2.35-.74-1.428-4.967 2.324c.287.455.565.981.832 1.447l-.02.07Zm.792 1.478 5.236-1.638-.877-1.817-4.865 2.393c.185.337.36.678.525 1.022l-.02.04Zm5.78 13.416 4.556-1.638-.505-1.623-4.406 2.266.355.995Zm5.284.922-4.52 1.447.368 1.184c1.537-.25 3.04-.671 4.482-1.256l-.33-1.375Zm-.138-.508-.433-1.524-4.546 1.637.44 1.314 4.54-1.427Zm-5.52-1.979 4.268-2.193-.355-1.045-4.676 1.67.563 1.531a.28.28 0 0 1 .2.017v.02Zm3.745-3.746-.49-1.403-4.736 1.68.53 1.333 4.696-1.61Zm-.678-1.9-.469-1.243-4.804 1.741.528 1.263 4.745-1.76Zm-.656-1.74-.592-1.492-4.905 1.723.672 1.52 4.825-1.751Zm-.79-1.989-.653-1.54-4.87 2.002.588 1.262 4.935-1.724Zm-.87-1.987-.692-1.55-5.199 1.497 1.03 1.985 4.862-1.932Zm-6.47-12.106a34.58 34.58 0 0 0-.839-1.267 33.8 33.8 0 0 1-5.254 2.418l.868 1.207 5.225-2.358Zm-1.135-1.713c-.338-.505-.695-.99-1.023-1.505l-4.785 3.072a.249.249 0 0 1-.12.001l.674.89a32.378 32.378 0 0 0 5.253-2.508v.05Zm-.431 42.371 3.303-5.159-.778-.579a37.752 37.752 0 0 0-3.426 5.052l.9.686Zm1.486 1.088 3.576-4.963-1.314-.981-3.177 4.978-.097.151 1.012.815Zm1.678 1.246a38.285 38.285 0 0 0 3.265-5.109l-1.011-.756-3.517 4.933 1.264.932Zm1.629 1.206a40.622 40.622 0 0 1 3.597-4.934l-1.457-1.089a37.697 37.697 0 0 1-3.424 5.131l1.284.892Zm1.547 1.167 3.567-4.964-1.113-.823a41.474 41.474 0 0 0-3.597 4.934l1.143.853Zm1.73 1.284 3.718-4.846-1.456-1.078-3.557 4.963 1.294.961Zm1.253.932 4.467-4.287-1.578-1.177-3.718 4.846.83.618Zm2.275 1.666a.366.366 0 0 1 .14-.002 33.003 33.003 0 0 1 3.741-4.686l-1.223-.902-4.497 4.287 1.84 1.303Zm1.901 1.412 3.678-4.875-1.264-.981a31.863 31.863 0 0 0-3.8 4.786l1.386 1.07Zm1.375.98 4.184-4.483-1.506-1.058-3.678 4.876 1 .665Zm2.023 1.54a24.427 24.427 0 0 1 4.063-4.551l-1.527-1.137-4.184 4.502 1.648 1.186Zm3.155 2.343a33.964 33.964 0 0 1 4.336-4.394l-1.416-1.04-3.85 4.738.93.696Zm1.659 1.246a31.636 31.636 0 0 0 4.073-4.571l-.961-.716a32.726 32.726 0 0 0-4.346 4.375l1.234.912Zm1.558 1.177 4.679-4.13-1.729-1.285a32.224 32.224 0 0 1-4.073 4.581l1.123.834Zm1.971 1.461a28.596 28.596 0 0 0 4.083-4.571l-.94-.696-4.65 4.129 1.507 1.138Zm1.527 1.117 4.315-4.404-1.304-.981a29.634 29.634 0 0 1-4.103 4.571l1.092.814Zm1.669 1.266a29.747 29.747 0 0 0 4.153-4.533l-1.102-.813-4.325 4.394 1.274.952Zm1.81 1.343 3.607-4.934-.839-.618a30.053 30.053 0 0 1-4.143 4.522l1.375 1.03Zm-7.689-13.377-1.143-.844a24.044 24.044 0 0 0-4.063 4.531l1.327 1.111 3.879-4.798Zm13.097 9.806-1.375-.979-3.608 4.864 1.214.902 3.769-4.787Zm-38.577-21.08 1.588 1.177a38.777 38.777 0 0 1 3.425-5.051l-1.254-.932-3.76 4.806Zm16.676-9.168-.332-1.465a21.744 21.744 0 0 1-4.482 1.236l.379 1.275 4.435-1.046ZM71.172 57.255l5.11-3.416a99.433 99.433 0 0 0-1.492-1.478 23.995 23.995 0 0 1-4.795 3.771l1.177 1.123ZM1.222 8.567l.138.548L5.155 5.37l-.352-1.435a108.324 108.324 0 0 0-3.58 4.683l-.001-.05Z" fill="#ECBF45"/><path d="M126.031 90.444a.254.254 0 0 1-.093-.199.244.244 0 0 1 .016-.092.256.256 0 0 1 .236-.159.26.26 0 0 1 .186.075l.598.52a.27.27 0 0 1 .005.38.279.279 0 0 1-.38.006l-.568-.531ZM96.93 62.873l-.002-.1.8-2.012a.261.261 0 0 1 .338-.155.28.28 0 0 1 .155.348l-.79 2.012a.26.26 0 0 1-.348.145.27.27 0 0 1-.153-.238Zm-1.573-2.867a.28.28 0 0 1-.002-.13l.68-1.29a.264.264 0 1 1 .465.253l-.671 1.28a.27.27 0 0 1-.502-.112h.03Zm-.632-2.2-.001-.06.215-1.004a.25.25 0 0 1 .317-.204.26.26 0 0 1 .204.306l-.215 1.004a.28.28 0 0 1-.317.205.27.27 0 0 1-.203-.247Zm-71.02-37.001a.26.26 0 0 1 .147-.232l1.33-.7a.27.27 0 0 1 .361.115.26.26 0 0 1-.115.351l-1.33.7a.27.27 0 0 1-.393-.234Zm-1.119-2.584a.27.27 0 0 1 .146-.242l1.49-.742a.26.26 0 0 1 .351.115.27.27 0 0 1-.115.361l-1.489.742a.27.27 0 0 1-.352-.124.228.228 0 0 1-.031-.11Zm-.516-3.242v-.09a.28.28 0 0 1 .176-.253l1.273-.479a.27.27 0 0 1 .338.36.261.261 0 0 1-.15.138l-1.274.478a.26.26 0 0 1-.362-.154Zm-.646-3.072a.281.281 0 0 1 .126-.232l1.15-.717a.27.27 0 1 1 .287.456l-1.15.717a.28.28 0 0 1-.371-.095.33.33 0 0 1-.042-.129ZM82.713 26.14a.27.27 0 0 1-.113-.218.27.27 0 0 1 .426-.216l5.742 4.075a.261.261 0 0 1-.106.477.27.27 0 0 1-.198-.042l-5.751-4.075Zm-5.038-2.425a.27.27 0 0 1 .137-.232l.803-.472a.262.262 0 0 1 .293.017.263.263 0 0 1 .051.37.264.264 0 0 1-.077.069l-.803.472a.259.259 0 0 1-.361-.085.25.25 0 0 1-.043-.14Zm-.628-1.221-.001-.06a.27.27 0 0 1 .196-.262l.926-.244a.262.262 0 0 1 .278.092.26.26 0 0 1 .045.093.258.258 0 0 1-.1.28.258.258 0 0 1-.095.043l-.917.244a.27.27 0 0 1-.332-.186Zm-.831-1.319a.27.27 0 0 1 .266-.273l.92-.014a.27.27 0 0 1 .008.54l-.92.014a.27.27 0 0 1-.274-.267Zm28.491 81.307-.922.564a.281.281 0 0 1-.371-.095.316.316 0 0 1-.002-.13.26.26 0 0 1 .127-.232l.921-.564a.262.262 0 0 1 .362.095.272.272 0 0 1 .032.101.267.267 0 0 1-.063.197.25.25 0 0 1-.084.064Zm.115-1.643a.278.278 0 0 1-.235.294l-.849.083a.261.261 0 0 1-.264-.136.252.252 0 0 1-.03-.1.269.269 0 0 1 .066-.182.27.27 0 0 1 .17-.092l.849-.082a.256.256 0 0 1 .191.048c.055.04.092.1.102.167Zm-.374-2.325a.281.281 0 0 1-.165.343l-.915.324a.263.263 0 0 1-.289-.066.262.262 0 0 1-.054-.09l-.001-.09a.272.272 0 0 1 .176-.253l.925-.323a.262.262 0 0 1 .323.156Zm-1.775-2.432-.001-.06a.265.265 0 0 1 .054-.165.267.267 0 0 1 .142-.098l.618-.16a.264.264 0 0 1 .323.186.263.263 0 0 1-.185.322l-.618.17a.26.26 0 0 1-.333-.195Z" fill="#ECBF45"/></svg>',
                                withExternalLayout: !0,
                              }),
                          ],
                        }),
                        n("div", {
                          className: "framer-1rkv8oj",
                          children: [
                            d() &&
                              r(A, {
                                className:
                                  "framer-aksphx hidden-2pzl18 hidden-41k153",
                                "data-framer-name": "arrow_left",
                                fill: "black",
                                intrinsicHeight: 133,
                                intrinsicWidth: 137,
                                name: "arrow_left",
                                svg: '<svg width="137" height="133" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M131.591 2.351a.14.14 0 0 0-.06 0c-.479-.068-48.44-5.72-84.04 22.255C22.549 44.208 15.5 83.198 14.663 88.366l-6.75-1.46a.11.11 0 0 0-.08-.002l-6.259-1.403a.53.53 0 0 0-.523.182.55.55 0 0 0-.128.539l15.292 38.401-.001.08 4.496 5.697a.5.5 0 0 0 .343.206.518.518 0 0 0 .386-.105l5.43-4.04 30.237-22.464a.538.538 0 0 0 .215-.356v-.06a.54.54 0 0 0-.114-.342l-4.447-5.647a.69.69 0 0 0-.188-.103l-7.654-1.803c4.306-15.898 22.038-62.41 76.646-51.749a.238.238 0 0 0 .309.095c1.575.313 3.19.667 4.834 1.072l.1.001a.31.31 0 0 0 .1.002l.1.001.07.001a.39.39 0 0 0 .082-.099l.001-.09 9.026-36.07.002-.12a.515.515 0 0 0-.105-.311s-2.273-3.184-4.446-5.697l-.07-.05-.079-.062a.492.492 0 0 0 .104-.259ZM4.619 92.537l4.723-4.24.608.139a33.814 33.814 0 0 0-2.454 2.324c-.826.862-1.7 1.677-2.617 2.441l-.26-.664Zm-.579-1.449a18.558 18.558 0 0 0 3.558-3.177l1.106.246-4.297 3.857-.367-.925Zm-.559-1.408 2.512-2.123.997.225a17.938 17.938 0 0 1-3.132 2.794l-.377-.896Zm-.453-1.147c.32-.51.71-.973 1.16-1.373l1.148.207-2.026 1.74-.282-.574Zm.543-1.502c-.288.276-.55.576-.784.899l-.462-1.177 1.246.278Zm2.05 8.031a43.22 43.22 0 0 0 3.555-2.947.27.27 0 0 0 .083-.189.24.24 0 0 0-.068-.181.27.27 0 0 0-.38-.006 43.194 43.194 0 0 1-3.391 2.78l-.338-.855a31.209 31.209 0 0 0 2.768-2.539 28.913 28.913 0 0 1 2.758-2.55l4.377.936a.52.52 0 0 0 .421-.084.55.55 0 0 0 .226-.367c.056-.419 6.258-42.992 32.518-63.654C81.22-.616 125.174 2.766 130.807 3.32l-8.75 34.954a96.306 96.306 0 0 0-9.833-1.866.238.238 0 0 0-.219-.063c-16.15-2.16-30.302.55-42.128 8.265-25.345 16.336-31.61 49.657-31.665 49.996a.53.53 0 0 0 .4.616l12.529 2.946-34.2 25.376L5.62 95.062ZM134.81 10.59l-4.017-2.88.435-1.714 3.845 3.768-.263.826Zm-.584 2.342-4.092-2.591.52-2.073 4.018 2.88-.446 1.784Zm-.628 2.5-4.103-2.5.51-1.993 4.082 2.58-.489 1.914Zm-.606 2.442-4.135-2.412.5-1.992 4.103 2.5-.468 1.904Zm-.787 3.149-4.039-2.79.553-2.233 4.135 2.412-.649 2.61Zm-.68 2.72-3.955-3.06.489-1.942 4.039 2.8-.573 2.202Zm-.542 2.162-4.093-2.571.511-2.053 3.955 3.06-.373 1.564Zm-.5 1.993-4.049-2.76.318-1.246 3.963 2.5h.06l-.292 1.506Zm-.553 2.222-4.018-2.89.393-1.544 4.04 2.76-.415 1.674Zm-.659 2.61-3.951-3.299.414-1.644 4.028 2.9-.491 2.043Zm-.576 2.462-3.795-3.767.34-1.365 3.952 3.3-.497 1.832Zm-1.308 5.221-3.567-4.303a.25.25 0 0 0-.09-.002l.563-2.221 3.617 4.294-.523 2.232Zm-.754 2.99-3.593-4.594.543-2.173 3.645 4.395-.595 2.371Zm-36.513-.112-3.088-4.867 1.345-.31 2.787 4.902c-.37.075-.722.17-1.064.264l.02.01Zm-3.727 1.114L82 39.9a46 46 0 0 1 2.351-.755 26.999 26.999 0 0 0 3.208 4.858c-.382.124-.784.258-1.186.392l.02.01Zm-2.323.846-4.555-4.358c.644-.26 1.287-.521 1.95-.751l4.356 4.415c-.594.241-1.187.462-1.77.684l.02.01Zm-2.354.965a31.586 31.586 0 0 1-3.993-4.57h-.06c.423-.194.856-.388 1.289-.571l4.586 4.368a43.75 43.75 0 0 0-1.842.773h.02Zm-2.015.97a.24.24 0 0 0-.067-.18l-3.935-4.4c.524-.252 1.007-.495 1.59-.736a.23.23 0 0 0-.002.16 31.646 31.646 0 0 0 3.934 4.499c-.552.162-1.056.394-1.55.637l.03.02Zm-3.68 2.006.001-.07-5.144-3.837a48.33 48.33 0 0 1 1.807-1.093l4.498 4.237c-.405.274-.798.508-1.192.743l.03.02Zm-2.2 1.367-5.477-3.611a46.85 46.85 0 0 1 2.02-1.36l5.164 3.817c-.586.401-1.172.762-1.737 1.134l.03.02Zm-2.123 1.48-5.701-3.316a38.6 38.6 0 0 1 1.891-1.432l5.458 3.592c-.586.35-1.132.743-1.677 1.135l.03.02Zm-2.954 2.266A31.614 31.614 0 0 1 63.8 50.54a48.629 48.629 0 0 1 1.721-1.455l5.683 3.255c-.84.637-1.66 1.285-2.46 1.964Zm-1.823 1.573a.32.32 0 0 0-.099-.102 23.265 23.265 0 0 1-4.695-3.7c.416-.394.851-.777 1.287-1.17a31.383 31.383 0 0 0 4.945 3.763c-.516.372-.972.776-1.438 1.189v.02Zm10.636-7.753-4.458-4.227c.676-.38 1.371-.73 2.017-1.08l4.073 4.49.11.002a39.19 39.19 0 0 0-1.582.827.22.22 0 0 0-.16-.032v.02Zm36.807-10.315 1.599 4.154c-.679-.08-1.338-.16-1.997-.23a.283.283 0 0 0-.177-.212 38.25 38.25 0 0 1-1.211-3.959c.599.05 1.188.128 1.786.227v.02Zm-16.938-.942 2.51 4.698c-.65.06-1.291.13-1.922.201a30.09 30.09 0 0 0-2.45-4.756c.62-.061 1.242-.132 1.863-.163v.02Zm14.583.597a35.81 35.81 0 0 0 1.298 4.2c-.56-.009-1.109-.097-1.658-.135l-1.627-4.305c.64.05 1.329.13 1.987.22v.02Zm-6.931-.633 1.753 4.486-1.25-.018-1.862-4.538c.45-.004.949.024 1.358.08l.001-.01Zm2.323 4.495-1.734-4.476c.37.005.75.01 1.13.066a19.387 19.387 0 0 1 1.794 4.427c-.4-.026-.79-.031-1.19-.037v.02Zm-4.263-4.564 1.873 4.558c-.667-.01-1.334.01-2.001.06l-2.041-4.64c.7-.03 1.44-.009 2.17.002l-.001.02Zm6.295.404 1.626 4.314c-.64-.01-1.28-.019-1.908-.098a19.564 19.564 0 0 0-1.725-4.416c.66.03 1.338.11 2.007.18v.02Zm-7.004 4.246c-.64-.01-1.281.071-1.912.122l-2.5-4.698c.78.012 1.571-.077 2.361-.085l2.051 4.661Zm-14.307 2.418a27.165 27.165 0 0 1-3.268-4.86c.532-.151 1.074-.283 1.616-.415l3.098 4.866c-.492.133-1.004.266-1.446.409Zm3.564-.947-2.777-4.892a97.463 97.463 0 0 1 1.484-.298l3 4.815c-.583.151-1.145.243-1.707.375Zm2.268-.477-3-4.775c.662-.11 1.323-.2 2.005-.29l2.087 4.902c-.37.024-.731.089-1.092.163Zm1.46-.708.001-.07-1.934-4.42c.49-.062 1.002-.114 1.482-.167a29.684 29.684 0 0 1 2.49 4.777c-.632.08-1.263.171-1.874.272l-.165-.392Zm21.178.314-1.589-4.144c.549.098 1.107.217 1.666.315l1.43 4.022a14.21 14.21 0 0 1-1.507-.193Zm2.155.322a.179.179 0 0 0-.07 0l-1.4-4.022c.598.119 1.207.238 1.815.367l1.94 4.03c-.818-.113-1.566-.244-2.315-.355l.03-.02Zm2.833.532-1.941-4.029c.798.182 1.595.354 2.412.556l3.367 4.31a60.355 60.355 0 0 0-3.838-.837Zm2.855-9.738.297-1.176 3.716 3.695.08.002-.457 1.813-3.636-4.334ZM64.049 58.625a26.002 26.002 0 0 1-5.132-3.306l1.016-1.065 5.09 3.406c-.385.354-.68.67-1.025.995l.05-.03ZM62.25 60.54l-5.145-3.077c.469-.573.957-1.136 1.465-1.688a26.608 26.608 0 0 0 5.092 3.306c-.527.482-1.005.985-1.462 1.488l.05-.03Zm-2.036 2.4-4.892-3.283a80.68 80.68 0 0 1 1.437-1.799l5.125 3.077c-.59.7-1.2 1.362-1.75 2.034l.08-.029Zm-1.233 1.542a.23.23 0 0 0-.098-.122l-4.765-3.07c.296-.406.602-.822.908-1.217l4.852 3.302-.897 1.107Zm-3.39 4.74-5.114-2.486.86-1.367 5.204 2.447-.95 1.406Zm-1.443 2.189-5.065-2.395c.339-.606.688-1.2 1.027-1.805l5.094 2.465c-.36.595-.718 1.17-1.056 1.735Zm-1.026 1.735-4.966-2.324.72-1.32 5.045 2.366-.799 1.278Zm-1.1 1.984a.269.269 0 0 0-.239-.064l-4.655-2.35.741-1.428 4.966 2.324c-.287.455-.565.981-.831 1.447l.019.07Zm-.791 1.478-5.237-1.638.877-1.817 4.865 2.393c-.185.337-.36.678-.525 1.022l.02.04Zm-5.78 13.416-4.556-1.638.504-1.623 4.407 2.266-.355.995Zm-5.285.922 4.52 1.447-.368 1.184a20.872 20.872 0 0 1-4.482-1.256l.33-1.375Zm.138-.508.433-1.524 4.546 1.637-.44 1.314-4.539-1.427Zm5.52-1.979-4.268-2.193.356-1.045 4.675 1.67-.562 1.531a.28.28 0 0 0-.2.017l-.001.02Zm-3.745-3.746.491-1.403 4.736 1.68-.53 1.333-4.697-1.61Zm.678-1.9.469-1.243 4.805 1.741-.53 1.263-4.743-1.76Zm.656-1.74.593-1.492 4.904 1.723-.672 1.52-4.825-1.751Zm.79-1.989.653-1.54 4.87 2.002-.588 1.262-4.935-1.724Zm.87-1.987.693-1.55 5.198 1.497-1.03 1.985-4.861-1.932Zm6.47-12.106c.266-.426.553-.851.839-1.267a33.806 33.806 0 0 0 5.255 2.418l-.868 1.207-5.226-2.358Zm1.135-1.713c.338-.505.695-.99 1.023-1.505l4.785 3.072c.04.01.08.01.12.001l-.674.89a32.377 32.377 0 0 1-5.253-2.508v.05Zm.432 42.371-3.304-5.159.779-.579a37.742 37.742 0 0 1 3.425 5.052l-.9.686Zm-1.487 1.088-3.576-4.963 1.314-.981 3.177 4.978.098.151-1.013.815Zm-1.678 1.246a38.295 38.295 0 0 1-3.265-5.109l1.011-.756 3.518 4.933-1.264.932Zm-1.628 1.206a40.611 40.611 0 0 0-3.598-4.934l1.457-1.089c1 1.801 2.144 3.517 3.424 5.131l-1.283.892Zm-1.548 1.167-3.566-4.964 1.112-.823a41.452 41.452 0 0 1 3.597 4.934l-1.143.853Zm-1.729 1.284-3.718-4.846 1.456-1.078 3.556 4.963-1.294.961Zm-1.254.932-4.467-4.287 1.578-1.177 3.718 4.846-.829.618Zm-2.275 1.666a.366.366 0 0 0-.14-.002 33.002 33.002 0 0 0-3.74-4.686l1.223-.902 4.497 4.287-1.84 1.303Zm-1.901 1.412-3.678-4.875 1.264-.981a31.87 31.87 0 0 1 3.8 4.786l-1.386 1.07Zm-1.375.98-4.184-4.483 1.506-1.058 3.678 4.876-1 .665Zm-2.023 1.54a24.416 24.416 0 0 0-4.063-4.551l1.527-1.137 4.184 4.502-1.648 1.186Zm-3.155 2.343a33.991 33.991 0 0 0-4.335-4.394l1.415-1.04 3.85 4.738-.93.696Zm-1.659 1.246a31.585 31.585 0 0 1-4.072-4.571l.96-.716a32.664 32.664 0 0 1 4.346 4.375l-1.234.912Zm-1.557 1.177-4.68-4.13 1.73-1.285a32.214 32.214 0 0 0 4.072 4.581l-1.122.834Zm-1.972 1.461a28.637 28.637 0 0 1-4.083-4.571l.94-.696 4.65 4.129-1.507 1.138Zm-1.527 1.117-4.315-4.404 1.305-.981a29.57 29.57 0 0 0 4.102 4.571l-1.092.814Zm-1.669 1.266a29.748 29.748 0 0 1-4.153-4.533l1.102-.813 4.325 4.394-1.274.952Zm-1.81 1.343-3.607-4.934.839-.618a30.072 30.072 0 0 0 4.143 4.522l-1.375 1.03Zm7.69-13.377 1.142-.844a24.024 24.024 0 0 1 4.063 4.531l-1.327 1.111-3.879-4.798Zm-13.098 9.806 1.375-.979 3.608 4.864-1.213.902-3.77-4.787Zm38.577-21.08-1.587 1.177a38.767 38.767 0 0 0-3.426-5.051l1.254-.932 3.76 4.806Zm-16.675-9.168.331-1.465a21.79 21.79 0 0 0 4.482 1.236l-.378 1.275-4.435-1.046Zm26.002-37.048-5.11-3.416c.488-.493.985-.986 1.492-1.478a24 24 0 0 0 4.795 3.771l-1.177 1.123Zm69.95-48.688-.138.548-3.795-3.746.352-1.435a108.594 108.594 0 0 1 3.581 4.683v-.05Z" fill="#ECBF45"/><path d="M10.5 90.444a.25.25 0 0 0 .093-.199.231.231 0 0 0-.068-.17.258.258 0 0 0-.284-.062.259.259 0 0 0-.086.056l-.597.52a.27.27 0 0 0-.006.38.28.28 0 0 0 .38.006l.568-.531Zm29.102-27.571.001-.1-.8-2.012a.26.26 0 0 0-.338-.155.28.28 0 0 0-.155.348l.79 2.012a.26.26 0 0 0 .348.145.271.271 0 0 0 .154-.238Zm1.572-2.867a.28.28 0 0 0 .002-.13l-.68-1.29a.264.264 0 1 0-.465.253l.672 1.28a.27.27 0 0 0 .435.041.27.27 0 0 0 .066-.153h-.03Zm.633-2.2v-.06l-.215-1.004a.25.25 0 0 0-.317-.204.258.258 0 0 0-.205.205.259.259 0 0 0 0 .101l.216 1.004a.28.28 0 0 0 .317.205.27.27 0 0 0 .204-.247Zm71.019-37.001a.256.256 0 0 0-.146-.232l-1.33-.7a.269.269 0 0 0-.39.213.25.25 0 0 0 .012.102.265.265 0 0 0 .131.152l1.33.7a.27.27 0 0 0 .393-.235Zm1.119-2.584a.271.271 0 0 0-.038-.142.275.275 0 0 0-.108-.1l-1.489-.742a.263.263 0 0 0-.289.034.271.271 0 0 0-.08.285.272.272 0 0 0 .132.157l1.489.742a.27.27 0 0 0 .352-.124.233.233 0 0 0 .031-.11Zm.516-3.242.001-.09a.287.287 0 0 0-.05-.153.288.288 0 0 0-.126-.1l-1.273-.479a.27.27 0 0 0-.361.258c0 .035.008.07.023.101a.262.262 0 0 0 .15.138l1.273.48a.264.264 0 0 0 .217.005.262.262 0 0 0 .146-.16Zm.647-3.072a.29.29 0 0 0-.127-.232l-1.15-.717a.264.264 0 0 0-.21-.048.276.276 0 0 0-.102.042.275.275 0 0 0-.109.293.28.28 0 0 0 .135.169l1.149.717a.282.282 0 0 0 .372-.095.346.346 0 0 0 .042-.129ZM53.818 26.14a.27.27 0 0 0 .114-.218.27.27 0 0 0-.427-.216l-5.741 4.075a.26.26 0 0 0-.066.37.27.27 0 0 0 .37.065l5.75-4.075Zm5.038-2.425a.269.269 0 0 0-.137-.232l-.803-.472a.263.263 0 0 0-.361.094.263.263 0 0 0 .094.362l.803.472a.259.259 0 0 0 .362-.085.25.25 0 0 0 .042-.14Zm.628-1.221.001-.06a.27.27 0 0 0-.196-.262l-.926-.244a.262.262 0 0 0-.278.092.262.262 0 0 0 .054.373c.03.02.062.035.096.043l.917.244a.27.27 0 0 0 .332-.186Zm.831-1.319a.27.27 0 0 0-.266-.273l-.92-.014a.27.27 0 0 0-.008.54l.92.014a.27.27 0 0 0 .274-.267Zm-28.491 81.307.922.564a.282.282 0 0 0 .371-.095.31.31 0 0 0 .002-.13.26.26 0 0 0-.126-.232l-.922-.564a.261.261 0 0 0-.362.095.26.26 0 0 0 .115.362Zm-.115-1.643a.281.281 0 0 0 .236.294l.848.083a.263.263 0 0 0 .294-.236.269.269 0 0 0-.236-.274l-.849-.082a.255.255 0 0 0-.19.048.258.258 0 0 0-.103.167Zm.375-2.325a.28.28 0 0 0 .164.343l.916.324a.26.26 0 0 0 .342-.155l.001-.09a.27.27 0 0 0-.176-.253l-.925-.324a.26.26 0 0 0-.322.156Zm1.774-2.432.001-.06a.27.27 0 0 0-.196-.263l-.618-.16a.263.263 0 1 0-.137.508l.617.17a.26.26 0 0 0 .333-.195Z" fill="#ECBF45"/></svg>',
                                withExternalLayout: !0,
                              }),
                            r(b.div, {
                              className: "framer-kg6t06",
                              "data-border": !0,
                              style: {
                                rotate: 3,
                              },
                              children: n("div", {
                                className: "framer-12n579u",
                                children: [
                                  r(t, {
                                    breakpoint: a,
                                    overrides: {
                                      uvg25bhWK: {
                                        children: r(e, {
                                          children: r("h2", {
                                            style: {
                                              "--font-selector":
                                                "RlM7VGFua2VyLXJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Tanker", "Tanker Placeholder", sans-serif',
                                              "--framer-font-size": "60px",
                                              "--framer-line-height": "36px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgba(26, 26, 26, 0.08)",
                                            },
                                            children: "2",
                                          }),
                                        }),
                                      },
                                    },
                                    children: r(s, {
                                      __fromCanvasComponent: !0,
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "104px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "2",
                                        }),
                                      }),
                                      className: "framer-oxk930",
                                      fonts: ["FS;Tanker-regular"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  r(t, {
                                    breakpoint: a,
                                    overrides: {
                                      uvg25bhWK: {
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "30px",
                                              "--framer-letter-spacing":
                                                "0.03em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(38, 38, 38)",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children:
                                              "Drop BNB in deh!",
                                          }),
                                        }),
                                      },
                                    },
                                    children: r(m, {
                                      __fromCanvasComponent: !0,
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "45px",
                                            "--framer-letter-spacing": "0.03em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children:
                                            "Drop BNB in deh!",
                                        }),
                                      }),
                                      className: "framer-1yt3lau",
                                      fonts: ["GF;Chelsea Market-regular"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  r(t, {
                                    breakpoint: a,
                                    overrides: {
                                      uvg25bhWK: {
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Coming Soon", sans-serif',
                                              "--framer-font-size": "17px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(38, 38, 38)",
                                            },
                                            children:
                                              "Purchase BNB or send BNB to your new wallet from an exchange.",
                                          }),
                                        }),
                                      },
                                    },
                                    children: r(m, {
                                      __fromCanvasComponent: !0,
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Coming Soon", sans-serif',
                                            "--framer-font-size": "21px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children:
                                            "Purchase BNB or send BNB to your new wallet from an exchange.",
                                        }),
                                      }),
                                      className: "framer-1txjxul",
                                      fonts: ["GF;Coming Soon-regular"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        n("div", {
                          className: "framer-ezpeo8",
                          children: [
                            r(t, {
                              breakpoint: a,
                              overrides: {
                                uvg25bhWK: {
                                  style: {},
                                },
                              },
                              children: r(b.div, {
                                className: "framer-xxl8gl",
                                "data-border": !0,
                                style: {
                                  rotate: -1,
                                },
                                children: n("div", {
                                  className: "framer-p3vys",
                                  children: [
                                    r(t, {
                                      breakpoint: a,
                                      overrides: {
                                        uvg25bhWK: {
                                          children: r(e, {
                                            children: r("h2", {
                                              style: {
                                                "--font-selector":
                                                  "RlM7VGFua2VyLXJlZ3VsYXI=",
                                                "--framer-font-family":
                                                  '"Tanker", "Tanker Placeholder", sans-serif',
                                                "--framer-font-size": "60px",
                                                "--framer-line-height": "36px",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgba(26, 26, 26, 0.08)",
                                              },
                                              children: "3",
                                            }),
                                          }),
                                        },
                                      },
                                      children: r(s, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("h2", {
                                            style: {
                                              "--font-selector":
                                                "RlM7VGFua2VyLXJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Tanker", "Tanker Placeholder", sans-serif',
                                              "--framer-font-size": "104px",
                                              "--framer-line-height": "36px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgba(26, 26, 26, 0.08)",
                                            },
                                            children: "3",
                                          }),
                                        }),
                                        className: "framer-16m468s",
                                        fonts: ["FS;Tanker-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    r(t, {
                                      breakpoint: a,
                                      overrides: {
                                        uvg25bhWK: {
                                          children: r(e, {
                                            children: r("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                                "--framer-font-family":
                                                  '"Chelsea Market", sans-serif',
                                                "--framer-font-size": "30px",
                                                "--framer-letter-spacing":
                                                  "0.03em",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgb(38, 38, 38)",
                                              },
                                              children:
                                                "SWAP YUH BNB FUH $BOGG",
                                            }),
                                          }),
                                        },
                                      },
                                      children: r(m, {
                                        __fromCanvasComponent: !0,
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "45px",
                                              "--framer-letter-spacing":
                                                "0.03em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(38, 38, 38)",
                                            },
                                            children: "SWAP YUH BNB FUH $BOGG",
                                          }),
                                        }),
                                        className: "framer-oia5vh",
                                        fonts: ["GF;Chelsea Market-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    r(m, {
                                      __fromCanvasComponent: !0,
                                      children: r(e, {
                                        children: n("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Coming Soon", sans-serif',
                                            "--framer-font-size": "21px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children: [
                                            "Go to exchange -  ",
                                            r(w, {
                                              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                                              openInNewTab: !0,
                                              smoothScroll: !1,
                                              children: r("a", {
                                                className:
                                                  "framer-styles-preset-825om3",
                                                "data-styles-preset":
                                                  "eOSHOegwe",
                                                children: "pancakeswap",
                                              }),
                                            }),
                                            " and connect your wallet. Convert BNB to $BOGG",
                                          ],
                                        }),
                                      }),
                                      className: "framer-1hohjpx",
                                      fonts: ["GF;Coming Soon-regular"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            d() &&
                              r(A, {
                                className:
                                  "framer-1nhsaw2 hidden-2pzl18 hidden-41k153",
                                "data-framer-name": "arrow_right",
                                fill: "black",
                                intrinsicHeight: 133,
                                intrinsicWidth: 137,
                                name: "arrow_right",
                                svg: '<svg width="137" height="133" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.94 2.351a.14.14 0 0 1 .06 0c.48-.068 48.44-5.72 84.04 22.255 24.943 19.602 31.992 58.592 32.829 63.76l6.749-1.46a.11.11 0 0 1 .08-.002l6.26-1.403a.53.53 0 0 1 .523.182.555.555 0 0 1 .128.539l-15.292 38.401.001.08-4.496 5.697a.494.494 0 0 1-.342.206.518.518 0 0 1-.386-.105l-5.431-4.04-30.236-22.464a.537.537 0 0 1-.216-.356v-.06a.54.54 0 0 1 .114-.342l4.447-5.647a.69.69 0 0 1 .188-.103l7.655-1.803c-4.307-15.898-22.039-62.41-76.647-51.749a.24.24 0 0 1-.308.095c-1.576.313-3.19.667-4.835 1.072l-.1.001a.31.31 0 0 1-.1.002l-.1.001-.07.001a.39.39 0 0 1-.081-.099l-.002-.09L.346 8.85l-.002-.12a.51.51 0 0 1 .106-.31s2.273-3.184 4.446-5.697l.069-.05.079-.062a.5.5 0 0 1-.104-.259Zm126.972 90.186-4.723-4.24-.608.139a33.927 33.927 0 0 1 2.455 2.324 31.744 31.744 0 0 0 2.616 2.441l.26-.664Zm.579-1.449a18.571 18.571 0 0 1-3.558-3.177l-1.106.246 4.298 3.857.366-.925Zm.559-1.408-2.512-2.123-.997.225a17.962 17.962 0 0 0 3.132 2.794l.377-.896Zm.453-1.147a6.308 6.308 0 0 0-1.16-1.373l-1.148.207 2.027 1.74.281-.574Zm-.542-1.502c.287.276.549.576.783.899l.463-1.177-1.246.278Zm-2.051 8.031a43.05 43.05 0 0 1-3.554-2.947.266.266 0 0 1-.083-.189.248.248 0 0 1 .014-.097.25.25 0 0 1 .053-.084.271.271 0 0 1 .38-.006 43.266 43.266 0 0 0 3.392 2.78l.337-.855a31.212 31.212 0 0 1-2.768-2.539 28.967 28.967 0 0 0-2.758-2.55l-4.377.936a.517.517 0 0 1-.421-.084.557.557 0 0 1-.226-.367c-.056-.419-6.258-42.992-32.518-63.654C55.311-.616 11.357 2.766 5.724 3.32l8.75 34.954a96.334 96.334 0 0 1 9.834-1.866.24.24 0 0 1 .219-.063c16.15-2.16 30.301.55 42.127 8.265 25.345 16.336 31.61 49.657 31.665 49.996a.53.53 0 0 1-.4.616L85.39 98.168l34.2 25.376 11.319-28.482ZM1.722 10.59 5.74 7.71l-.436-1.714L1.46 9.764l.262.826Zm.585 2.342 4.092-2.591-.521-2.073-4.018 2.88.447 1.784Zm.627 2.5 4.103-2.5-.51-1.993-4.082 2.58.489 1.914Zm.606 2.442 4.135-2.412-.5-1.992-4.103 2.5.468 1.904Zm.787 3.149 4.04-2.79L7.812 16l-4.135 2.412.649 2.61Zm.68 2.72 3.956-3.06-.49-1.942-4.038 2.8.572 2.202Zm.543 2.162 4.092-2.571-.51-2.053-3.956 3.06.374 1.564Zm.5 1.993 4.049-2.76-.319-1.246-3.963 2.5h-.06l.292 1.506Zm.552 2.222 4.018-2.89-.393-1.544-4.04 2.76.415 1.674Zm.66 2.61 3.95-3.299-.414-1.644-4.027 2.9.49 2.043Zm.576 2.462 3.794-3.767-.34-1.365-3.952 3.3.498 1.832Zm1.307 5.221 3.567-4.303a.25.25 0 0 1 .09-.002l-.563-2.221-3.617 4.294.523 2.232Zm.755 2.99 3.592-4.594-.542-2.173-3.646 4.395.596 2.371Zm36.512-.112 3.088-4.867-1.344-.31-2.788 4.902c.371.075.722.17 1.064.264l-.02.01Zm3.727 1.114 4.394-4.505a46.003 46.003 0 0 0-2.352-.755 26.999 26.999 0 0 1-3.208 4.858c.382.124.784.258 1.186.392l-.02.01Zm2.323.846 4.556-4.358c-.644-.26-1.288-.521-1.952-.751l-4.355 4.415c.594.241 1.187.462 1.77.684l-.02.01Zm2.354.965a31.587 31.587 0 0 0 3.993-4.57h.06a50.156 50.156 0 0 0-1.289-.571l-4.585 4.368c.634.25 1.237.502 1.841.773h-.02Zm2.015.97a.239.239 0 0 1 .067-.18l3.935-4.4c-.523-.252-1.007-.495-1.59-.736a.23.23 0 0 1 .002.16 31.634 31.634 0 0 1-3.934 4.499c.553.162 1.056.394 1.55.637l-.03.02Zm3.68 2.006v-.07l5.143-3.837a48.245 48.245 0 0 0-1.807-1.093l-4.497 4.237c.404.274.797.508 1.19.743l-.029.02Zm2.2 1.367 5.478-3.611a47.34 47.34 0 0 0-2.02-1.36l-5.165 3.817c.586.401 1.172.762 1.738 1.134l-.03.02Zm2.123 1.48 5.701-3.316a37.567 37.567 0 0 0-1.891-1.432l-5.457 3.592c.585.35 1.13.743 1.677 1.135l-.03.02Zm2.954 2.266a31.623 31.623 0 0 0 4.945-3.764 48.632 48.632 0 0 0-1.722-1.455l-5.682 3.255a57.77 57.77 0 0 1 2.459 1.964Zm1.823 1.573a.321.321 0 0 1 .099-.102 23.269 23.269 0 0 0 4.696-3.7c-.416-.394-.852-.777-1.288-1.17a31.378 31.378 0 0 1-4.945 3.763c.516.372.972.776 1.438 1.189v.02Zm-10.636-7.753 4.458-4.227c-.676-.38-1.371-.73-2.016-1.08l-4.074 4.49-.11.002a39.36 39.36 0 0 1 1.582.827.22.22 0 0 1 .16-.032v.02ZM22.168 37.81l-1.598 4.154c.678-.08 1.337-.16 1.996-.23a.279.279 0 0 1 .177-.212 38.448 38.448 0 0 0 1.212-3.959c-.6.05-1.189.128-1.787.227v.02Zm16.938-.942-2.51 4.698c.65.06 1.292.13 1.923.201a30.107 30.107 0 0 1 2.45-4.756c-.622-.061-1.243-.132-1.863-.163v.02Zm-14.583.597a35.77 35.77 0 0 1-1.298 4.2c.56-.009 1.11-.097 1.659-.135l1.626-4.305c-.64.05-1.328.13-1.987.22v.02Zm6.932-.633L29.7 41.318l1.25-.018 1.863-4.538c-.45-.004-.95.024-1.36.08v-.01Zm-2.324 4.495 1.734-4.476c-.37.005-.75.01-1.13.066a19.388 19.388 0 0 0-1.794 4.427c.4-.026.79-.031 1.19-.037v.02Zm4.263-4.564-1.873 4.558c.667-.01 1.334.01 2.001.06l2.042-4.64c-.7-.03-1.44-.009-2.17.002v.02Zm-6.295.404-1.626 4.314c.64-.01 1.28-.019 1.909-.098.393-1.537.973-3.02 1.724-4.416-.66.03-1.338.11-2.007.18v.02Zm7.004 4.246c.64-.01 1.281.071 1.912.122l2.5-4.698c-.78.012-1.57-.077-2.361-.085l-2.051 4.661Zm14.307 2.418a27.17 27.17 0 0 0 3.269-4.86c-.533-.151-1.075-.283-1.617-.415l-3.098 4.866c.492.133 1.004.266 1.446.409Zm-3.564-.947 2.778-4.892c-.492-.103-1.004-.205-1.485-.298l-2.999 4.815c.582.151 1.144.243 1.706.375Zm-2.267-.477 2.999-4.775c-.662-.11-1.323-.2-2.005-.29l-2.087 4.902c.37.024.731.089 1.093.163Zm-1.461-.708-.001-.07 1.934-4.42c-.49-.062-1.001-.114-1.482-.167a29.692 29.692 0 0 0-2.49 4.777c.632.08 1.263.171 1.875.272l.164-.392Zm-21.178.314 1.589-4.144c-.549.098-1.107.217-1.666.315l-1.43 4.022c.51-.038 1.038-.106 1.507-.193Zm-2.155.322a.18.18 0 0 1 .07 0l1.4-4.022c-.598.119-1.206.238-1.814.367l-1.94 4.03c.818-.113 1.566-.244 2.314-.355l-.03-.02Zm-2.833.532 1.94-4.029c-.797.182-1.594.354-2.411.556l-3.367 4.31a60.34 60.34 0 0 1 3.838-.837Zm-2.854-9.738-.298-1.176-3.716 3.695-.08.002.457 1.813 3.636-4.334Zm60.385 25.496a26 26 0 0 0 5.131-3.306l-1.016-1.065-5.09 3.406c.385.354.68.67 1.025.995l-.05-.03Zm1.798 1.914 5.145-3.077a38.249 38.249 0 0 0-1.465-1.688 26.608 26.608 0 0 1-5.092 3.306c.528.482 1.005.985 1.463 1.488l-.05-.03Zm2.036 2.4 4.892-3.283a80.397 80.397 0 0 0-1.437-1.799l-5.125 3.077c.59.7 1.2 1.362 1.75 2.034l-.08-.029Zm1.233 1.542a.23.23 0 0 1 .098-.122l4.765-3.07a54.976 54.976 0 0 0-.908-1.217l-4.852 3.302.897 1.107Zm3.39 4.74 5.114-2.486-.86-1.367-5.204 2.447.95 1.406Zm1.443 2.189 5.065-2.395c-.339-.606-.688-1.2-1.027-1.805l-5.094 2.465c.36.595.718 1.17 1.056 1.735Zm1.026 1.735 4.966-2.324-.72-1.32-5.045 2.366.8 1.278Zm1.1 1.984a.27.27 0 0 1 .239-.064l4.655-2.35-.74-1.428-4.967 2.324c.287.455.565.981.832 1.447l-.02.07Zm.792 1.478 5.236-1.638-.877-1.817-4.865 2.393c.185.337.36.678.525 1.022l-.02.04Zm5.78 13.416 4.556-1.638-.505-1.623-4.406 2.266.355.995Zm5.284.922-4.52 1.447.368 1.184c1.537-.25 3.04-.671 4.482-1.256l-.33-1.375Zm-.138-.508-.433-1.524-4.546 1.637.44 1.314 4.54-1.427Zm-5.52-1.979 4.268-2.193-.355-1.045-4.676 1.67.563 1.531a.28.28 0 0 1 .2.017v.02Zm3.745-3.746-.49-1.403-4.736 1.68.53 1.333 4.696-1.61Zm-.678-1.9-.469-1.243-4.804 1.741.528 1.263 4.745-1.76Zm-.656-1.74-.592-1.492-4.905 1.723.672 1.52 4.825-1.751Zm-.79-1.989-.653-1.54-4.87 2.002.588 1.262 4.935-1.724Zm-.87-1.987-.692-1.55-5.199 1.497 1.03 1.985 4.862-1.932Zm-6.47-12.106a34.58 34.58 0 0 0-.839-1.267 33.8 33.8 0 0 1-5.254 2.418l.868 1.207 5.225-2.358Zm-1.135-1.713c-.338-.505-.695-.99-1.023-1.505l-4.785 3.072a.249.249 0 0 1-.12.001l.674.89a32.378 32.378 0 0 0 5.253-2.508v.05Zm-.431 42.371 3.303-5.159-.778-.579a37.752 37.752 0 0 0-3.426 5.052l.9.686Zm1.486 1.088 3.576-4.963-1.314-.981-3.177 4.978-.097.151 1.012.815Zm1.678 1.246a38.285 38.285 0 0 0 3.265-5.109l-1.011-.756-3.517 4.933 1.264.932Zm1.629 1.206a40.622 40.622 0 0 1 3.597-4.934l-1.457-1.089a37.697 37.697 0 0 1-3.424 5.131l1.284.892Zm1.547 1.167 3.567-4.964-1.113-.823a41.474 41.474 0 0 0-3.597 4.934l1.143.853Zm1.73 1.284 3.718-4.846-1.456-1.078-3.557 4.963 1.294.961Zm1.253.932 4.467-4.287-1.578-1.177-3.718 4.846.83.618Zm2.275 1.666a.366.366 0 0 1 .14-.002 33.003 33.003 0 0 1 3.741-4.686l-1.223-.902-4.497 4.287 1.84 1.303Zm1.901 1.412 3.678-4.875-1.264-.981a31.863 31.863 0 0 0-3.8 4.786l1.386 1.07Zm1.375.98 4.184-4.483-1.506-1.058-3.678 4.876 1 .665Zm2.023 1.54a24.427 24.427 0 0 1 4.063-4.551l-1.527-1.137-4.184 4.502 1.648 1.186Zm3.155 2.343a33.964 33.964 0 0 1 4.336-4.394l-1.416-1.04-3.85 4.738.93.696Zm1.659 1.246a31.636 31.636 0 0 0 4.073-4.571l-.961-.716a32.726 32.726 0 0 0-4.346 4.375l1.234.912Zm1.558 1.177 4.679-4.13-1.729-1.285a32.224 32.224 0 0 1-4.073 4.581l1.123.834Zm1.971 1.461a28.596 28.596 0 0 0 4.083-4.571l-.94-.696-4.65 4.129 1.507 1.138Zm1.527 1.117 4.315-4.404-1.304-.981a29.634 29.634 0 0 1-4.103 4.571l1.092.814Zm1.669 1.266a29.747 29.747 0 0 0 4.153-4.533l-1.102-.813-4.325 4.394 1.274.952Zm1.81 1.343 3.607-4.934-.839-.618a30.053 30.053 0 0 1-4.143 4.522l1.375 1.03Zm-7.689-13.377-1.143-.844a24.044 24.044 0 0 0-4.063 4.531l1.327 1.111 3.879-4.798Zm13.097 9.806-1.375-.979-3.608 4.864 1.214.902 3.769-4.787Zm-38.577-21.08 1.588 1.177a38.777 38.777 0 0 1 3.425-5.051l-1.254-.932-3.76 4.806Zm16.676-9.168-.332-1.465a21.744 21.744 0 0 1-4.482 1.236l.379 1.275 4.435-1.046ZM71.172 57.255l5.11-3.416a99.433 99.433 0 0 0-1.492-1.478 23.995 23.995 0 0 1-4.795 3.771l1.177 1.123ZM1.222 8.567l.138.548L5.155 5.37l-.352-1.435a108.324 108.324 0 0 0-3.58 4.683l-.001-.05Z" fill="#ECBF45"/><path d="M126.031 90.444a.254.254 0 0 1-.093-.199.244.244 0 0 1 .016-.092.256.256 0 0 1 .236-.159.26.26 0 0 1 .186.075l.598.52a.27.27 0 0 1 .005.38.279.279 0 0 1-.38.006l-.568-.531ZM96.93 62.873l-.002-.1.8-2.012a.261.261 0 0 1 .338-.155.28.28 0 0 1 .155.348l-.79 2.012a.26.26 0 0 1-.348.145.27.27 0 0 1-.153-.238Zm-1.573-2.867a.28.28 0 0 1-.002-.13l.68-1.29a.264.264 0 1 1 .465.253l-.671 1.28a.27.27 0 0 1-.502-.112h.03Zm-.632-2.2-.001-.06.215-1.004a.25.25 0 0 1 .317-.204.26.26 0 0 1 .204.306l-.215 1.004a.28.28 0 0 1-.317.205.27.27 0 0 1-.203-.247Zm-71.02-37.001a.26.26 0 0 1 .147-.232l1.33-.7a.27.27 0 0 1 .361.115.26.26 0 0 1-.115.351l-1.33.7a.27.27 0 0 1-.393-.234Zm-1.119-2.584a.27.27 0 0 1 .146-.242l1.49-.742a.26.26 0 0 1 .351.115.27.27 0 0 1-.115.361l-1.489.742a.27.27 0 0 1-.352-.124.228.228 0 0 1-.031-.11Zm-.516-3.242v-.09a.28.28 0 0 1 .176-.253l1.273-.479a.27.27 0 0 1 .338.36.261.261 0 0 1-.15.138l-1.274.478a.26.26 0 0 1-.362-.154Zm-.646-3.072a.281.281 0 0 1 .126-.232l1.15-.717a.27.27 0 1 1 .287.456l-1.15.717a.28.28 0 0 1-.371-.095.33.33 0 0 1-.042-.129ZM82.713 26.14a.27.27 0 0 1-.113-.218.27.27 0 0 1 .426-.216l5.742 4.075a.261.261 0 0 1-.106.477.27.27 0 0 1-.198-.042l-5.751-4.075Zm-5.038-2.425a.27.27 0 0 1 .137-.232l.803-.472a.262.262 0 0 1 .293.017.263.263 0 0 1 .051.37.264.264 0 0 1-.077.069l-.803.472a.259.259 0 0 1-.361-.085.25.25 0 0 1-.043-.14Zm-.628-1.221-.001-.06a.27.27 0 0 1 .196-.262l.926-.244a.262.262 0 0 1 .278.092.26.26 0 0 1 .045.093.258.258 0 0 1-.1.28.258.258 0 0 1-.095.043l-.917.244a.27.27 0 0 1-.332-.186Zm-.831-1.319a.27.27 0 0 1 .266-.273l.92-.014a.27.27 0 0 1 .008.54l-.92.014a.27.27 0 0 1-.274-.267Zm28.491 81.307-.922.564a.281.281 0 0 1-.371-.095.316.316 0 0 1-.002-.13.26.26 0 0 1 .127-.232l.921-.564a.262.262 0 0 1 .362.095.272.272 0 0 1 .032.101.267.267 0 0 1-.063.197.25.25 0 0 1-.084.064Zm.115-1.643a.278.278 0 0 1-.235.294l-.849.083a.261.261 0 0 1-.264-.136.252.252 0 0 1-.03-.1.269.269 0 0 1 .066-.182.27.27 0 0 1 .17-.092l.849-.082a.256.256 0 0 1 .191.048c.055.04.092.1.102.167Zm-.374-2.325a.281.281 0 0 1-.165.343l-.915.324a.263.263 0 0 1-.289-.066.262.262 0 0 1-.054-.09l-.001-.09a.272.272 0 0 1 .176-.253l.925-.323a.262.262 0 0 1 .323.156Zm-1.775-2.432-.001-.06a.265.265 0 0 1 .054-.165.267.267 0 0 1 .142-.098l.618-.16a.264.264 0 0 1 .323.186.263.263 0 0 1-.185.322l-.618.17a.26.26 0 0 1-.333-.195Z" fill="#ECBF45"/></svg>',
                                withExternalLayout: !0,
                              }),
                          ],
                        }),
                        r("div", {
                          className: "framer-e5ivry",
                          children: r(t, {
                            breakpoint: a,
                            overrides: {
                              qXK4Bqcdq: {
                                style: {
                                  rotate: 1,
                                },
                              },
                              uvg25bhWK: {
                                style: {
                                  rotate: -2,
                                },
                              },
                            },
                            children: r(b.div, {
                              className: "framer-rh7enw",
                              "data-border": !0,
                              style: {
                                rotate: -3,
                              },
                              children: n("div", {
                                className: "framer-1btt5s9",
                                children: [
                                  r(t, {
                                    breakpoint: a,
                                    overrides: {
                                      uvg25bhWK: {
                                        children: r(e, {
                                          children: r("h2", {
                                            style: {
                                              "--font-selector":
                                                "RlM7VGFua2VyLXJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Tanker", "Tanker Placeholder", sans-serif',
                                              "--framer-font-size": "60px",
                                              "--framer-line-height": "36px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgba(26, 26, 26, 0.08)",
                                            },
                                            children: "4",
                                          }),
                                        }),
                                      },
                                    },
                                    children: r(s, {
                                      __fromCanvasComponent: !0,
                                      children: r(e, {
                                        children: r("h2", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGFua2VyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Tanker", "Tanker Placeholder", sans-serif',
                                            "--framer-font-size": "104px",
                                            "--framer-line-height": "36px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(26, 26, 26, 0.08)",
                                          },
                                          children: "4",
                                        }),
                                      }),
                                      className: "framer-1dk87jg",
                                      fonts: ["FS;Tanker-regular"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  r(m, {
                                    __fromCanvasComponent: !0,
                                    children: r(e, {
                                      children: r("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                          "--framer-font-family":
                                            '"Chelsea Market", sans-serif',
                                          "--framer-font-size": "38px",
                                          "--framer-letter-spacing": "0.03em",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(38, 38, 38)",
                                        },
                                      }),
                                    }),
                                    className: "framer-1hs86rs",
                                    fonts: ["GF;Chelsea Market-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  r(t, {
                                    breakpoint: a,
                                    overrides: {
                                      uvg25bhWK: {
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Chelsea Market", sans-serif',
                                              "--framer-font-size": "30px",
                                              "--framer-letter-spacing":
                                                "0.03em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(38, 38, 38)",
                                            },
                                            children: "YUH GOOD TO GO!",
                                          }),
                                        }),
                                      },
                                    },
                                    children: r(m, {
                                      __fromCanvasComponent: !0,
                                      children: r(e, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Chelsea Market", sans-serif',
                                            "--framer-font-size": "38px",
                                            "--framer-letter-spacing": "0.03em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children: "YUH GOOD TO GO!",
                                        }),
                                      }),
                                      className: "framer-hjkra7",
                                      fonts: ["GF;Chelsea Market-regular"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  r(t, {
                                    breakpoint: a,
                                    overrides: {
                                      uvg25bhWK: {
                                        children: r(e, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                              "--framer-font-family":
                                                '"Coming Soon", sans-serif',
                                              "--framer-font-size": "17px",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(38, 38, 38)",
                                            },
                                            children:
                                              "Your $BOGGtokens should now be in your wallet. Welcome to the CLUB, BOGG.",
                                          }),
                                        }),
                                      },
                                    },
                                    children: r(m, {
                                      __fromCanvasComponent: !0,
                                      children: r(e, {
                                        children: n("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                            "--framer-font-family":
                                              '"Coming Soon", sans-serif',
                                            "--framer-font-size": "21px",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(38, 38, 38)",
                                          },
                                          children: [
                                            "You should now have your $BOGG tokens. ",
                                            r("span", {
                                              style: {
                                                "--framer-font-size": "27px",
                                              },
                                              children:
                                                "Welcome to the $BOGG Club",
                                            }),
                                          ],
                                        }),
                                      }),
                                      className: "framer-1uebr1q",
                                      fonts: ["GF;Coming Soon-regular"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                r("header", {
                  className: "framer-v67r8",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: n("div", {
                    className: "framer-17e1j6i",
                    children: [
                      r(t, {
                        breakpoint: a,
                        overrides: {
                          qXK4Bqcdq: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 2969.072281712494,
                              intrinsicWidth: 2969.072281712494,
                              loading: "lazy",
                              pixelHeight: 3e3,
                              pixelWidth: 3e3,
                              sizes: "350px",
                              src: "/images/FO9wGglL8M0E9Si7qdbZH5Lgt28.png",
                            },
                          },
                          uvg25bhWK: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 2969.072281712494,
                              intrinsicWidth: 2969.072281712494,
                              loading: "lazy",
                              pixelHeight: 3e3,
                              pixelWidth: 3e3,
                              sizes: "163px",
                              src: "/images/FO9wGglL8M0E9Si7qdbZH5Lgt28.png",
                            },
                          },
                        },
                        children: r(f, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 2969.072281712494,
                            intrinsicWidth: 2969.072281712494,
                            loading: "lazy",
                            pixelHeight: 3e3,
                            pixelWidth: 3e3,
                            sizes: "500px",
                            src: "/images/FO9wGglL8M0E9Si7qdbZH5Lgt28.png",
                          },
                          className: "framer-1h9unhu",
                          "data-framer-name": "DOGG_CLUB",
                          name: "DOGG_CLUB",
                        }),
                      }),
                      n("div", {
                        className: "framer-1aj3hxr",
                        children: [
                          r(t, {
                            breakpoint: a,
                            overrides: {
                              uvg25bhWK: {
                                children: r(e, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Chelsea Market", sans-serif',
                                      "--framer-font-size": "26px",
                                      "--framer-letter-spacing": "0.05em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": "rgb(38, 38, 38)",
                                    },
                                    children: "JOIN THE BOGGCLUB",
                                  }),
                                }),
                              },
                            },
                            children: r(s, {
                              __fromCanvasComponent: !0,
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q2hlbHNlYSBNYXJrZXQtcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Chelsea Market", sans-serif',
                                    "--framer-font-size": "54px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children: "JOIN THE BOGGCLUB",
                                }),
                              }),
                              className: "framer-t4n7j",
                              fonts: ["GF;Chelsea Market-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          r(t, {
                            breakpoint: a,
                            overrides: {
                              qXK4Bqcdq: {
                                children: r(e, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Coming Soon", sans-serif',
                                      "--framer-font-size": "17px",
                                      "--framer-letter-spacing": "0.05em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": "rgb(38, 38, 38)",
                                    },
                                    children:
                                      "Our community is filled straight up BOGGs come see for yourself.",
                                  }),
                                }),
                              },
                              uvg25bhWK: {
                                children: r(e, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Coming Soon", sans-serif',
                                      "--framer-font-size": "13px",
                                      "--framer-letter-spacing": "0.05em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": "rgb(38, 38, 38)",
                                    },
                                    children:
                                      "Our community is filled straight up BOGGs come see for yourself.",
                                  }),
                                }),
                              },
                            },
                            children: r(s, {
                              __fromCanvasComponent: !0,
                              children: r(e, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                    "--framer-font-family":
                                      '"Coming Soon", sans-serif',
                                    "--framer-font-size": "29px",
                                    "--framer-letter-spacing": "0.05em",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(38, 38, 38)",
                                  },
                                  children:
                                    "Our community is filled straight up BOGGs come see for yourself.",
                                }),
                              }),
                              className: "framer-uqnphb",
                              fonts: ["GF;Coming Soon-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          n("div", {
                            className: "framer-pyjrkt",
                            children: [
                              r(w, {
                                href: "https://t.me/BoggMeme",
                                children: r(k, {
                                  className: "framer-1vgy4rv framer-lux5qc",
                                  "data-border": !0,
                                  children: r(f, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 150,
                                      intrinsicWidth: 178,
                                      loading: "lazy",
                                      pixelHeight: 150,
                                      pixelWidth: 178,
                                      src: "/images/40VWvBL5kCYMMMVlteAW36JkqQ.svg",
                                    },
                                    className: "framer-1bo9lpp",
                                    transformTemplate: q,
                                  }),
                                }),
                              }),
                              r(w, {
                                href: "https://x.com/bogg_meme",
                                openInNewTab: !0,
                                children: r(k, {
                                  className: "framer-141p044 framer-lux5qc",
                                  "data-border": !0,
                                  children: r(f, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 150,
                                      intrinsicWidth: 166,
                                      loading: "lazy",
                                      pixelHeight: 150,
                                      pixelWidth: 166,
                                      src: "/images/qSjTC2eL0VlbPC1DOFf3yqOtM0A.svg",
                                    },
                                    className: "framer-1darprw",
                                    transformTemplate: q,
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
                n("header", {
                  className: "framer-1ledgpu",
                  "data-border": !0,
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    r(s, {
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
                      className: "framer-19doyer",
                      fonts: ["GF;Chelsea Market-regular"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    r("section", {
                      className: "framer-n1h2xc",
                      "data-border": !0,
                      children: r("div", {
                        className: "framer-1bmzxyq",
                        children: r(t, {
                          breakpoint: a,
                          overrides: {
                            uvg25bhWK: {
                              width: "calc(100vw - 24px)",
                            },
                          },
                          children: r(R, {
                            width: "534px",
                            children: r(Z, {
                              className: "framer-1o038on-container",
                              children: r(t, {
                                breakpoint: a,
                                overrides: {
                                  qXK4Bqcdq: {
                                    ACbcH4bn0: 16,
                                  },
                                  uvg25bhWK: {
                                    ACbcH4bn0: 12,
                                  },
                                },
                                children: r(xr, {
                                  ACbcH4bn0: 17,
                                  DvQBipYeb: "0xcomingsoon",
                                  FRpg2PxcG: "0xcomingsoon",
                                  height: "100%",
                                  id: "pQnQGQqqb",
                                  iroNXaN6O: "rgb(0, 0, 0)",
                                  layoutId: "pQnQGQqqb",
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
                    r(t, {
                      breakpoint: a,
                      overrides: {
                        qXK4Bqcdq: {
                          children: n(e, {
                            children: [
                              r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Coming Soon", sans-serif',
                                  "--framer-font-size": "19px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children:
                                  "DISCLAIMER: $BOGG is a memecoin with no inherent value. Only invest money you can afford to lose. $BOGG is only meant to be for fun. We are not liable for any changes in the token's price. ",
                              }),
                              r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Coming Soon", sans-serif',
                                  "--framer-font-size": "19px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children: "",
                              }),
                            ],
                          }),
                        },
                        uvg25bhWK: {
                          children: n(e, {
                            children: [
                              r("p", {
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
                                children:
                                  "DISCLAIMER: $BOGG is a memecoin with no inherent value. Only invest money you can afford to lose. $BOGG is only meant to be for fun. We are not liable for any changes in the token's price. ",
                              }),
                              r("p", {
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
                                children: "",
                              }),
                            ],
                          }),
                        },
                        Wr845EleD: {
                          children: n(e, {
                            children: [
                              r("p", {
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
                                children:
                                  "DISCLAIMER: $BOGG is a memecoin with no inherent value. Only invest money you can afford to lose. $BOGG is only meant to be for fun. We are not liable for any changes in the token's price. ",
                              }),
                              r("p", {
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
                                children: "",
                              }),
                            ],
                          }),
                        },
                        ZxH2Lnjan: {
                          children: n(e, {
                            children: [
                              r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Coming Soon", sans-serif',
                                  "--framer-font-size": "25px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children:
                                  "DISCLAIMER: $BOGG is a memecoin with no inherent value. Only invest money you can afford to lose. $BOGG is only meant to be for fun. We are not liable for any changes in the token's price. ",
                              }),
                              r("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Coming Soon", sans-serif',
                                  "--framer-font-size": "25px",
                                  "--framer-letter-spacing": "0.05em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color": "rgb(38, 38, 38)",
                                },
                                children: "",
                              }),
                            ],
                          }),
                        },
                      },
                      children: r(s, {
                        __fromCanvasComponent: !0,
                        children: n(e, {
                          children: [
                            r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Coming Soon", sans-serif',
                                "--framer-font-size": "27px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children:
                                "DISCLAIMER: $BOGG is a memecoin with no inherent value. Only invest money you can afford to lose. $BOGG is only meant to be for fun. We are not liable for any changes in the token's price. ",
                            }),
                            r("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7Q29taW5nIFNvb24tcmVndWxhcg==",
                                "--framer-font-family":
                                  '"Coming Soon", sans-serif',
                                "--framer-font-size": "27px",
                                "--framer-letter-spacing": "0.05em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(38, 38, 38)",
                              },
                              children: "",
                            }),
                          ],
                        }),
                        className: "framer-16wlq0c",
                        fonts: ["GF;Coming Soon-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
                r(R, {
                  width: "100vw",
                  children: r(Z, {
                    className: "framer-2galm7-container",
                    children: r(t, {
                      breakpoint: a,
                      overrides: {
                        qXK4Bqcdq: {
                          variant: "iVd8OmJTR",
                        },
                        uvg25bhWK: {
                          ah9qjiq38: 20,
                          tbGiGAZ87: "column",
                          variant: "iVd8OmJTR",
                        },
                      },
                      children: r(Wr, {
                        ah9qjiq38: 10,
                        FTpeBrC3k:
                          "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                        height: "100%",
                        id: "FiGsct4Af",
                        lADySZ6HS: "rgba(18, 18, 18, 0.15)",
                        layoutId: "FiGsct4Af",
                        style: {
                          width: "100%",
                        },
                        tbGiGAZ87: "row",
                        variant: "NqbNnRmWy",
                        VytlcRlRZ: "rgba(209, 209, 209, 0.03)",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              ],
            }),
            r("div", {
              className: ar(me, ...O),
              id: "overlay",
            }),
          ],
        }),
      })
    );
  }),
  Le = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${U.bodyClassName}-framer-jNnrp { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; }`,
    ".framer-jNnrp.framer-lux5qc, .framer-jNnrp .framer-lux5qc { display: block; }",
    ".framer-jNnrp.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, #ffec45); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1252px; }",
    ".framer-jNnrp .framer-114b6t4 { align-content: center; align-items: center; background-color: #d0cecf; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-10prsza { aspect-ratio: 1.394214011850819 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 143px); left: 50%; overflow: visible; position: absolute; top: 0px; transform: translateX(-50%); width: 129%; z-index: 1; }",
    ".framer-jNnrp .framer-19q0wri-container { flex: none; height: auto; position: relative; width: 101%; }",
    ".framer-jNnrp .framer-nvty9t { align-content: center; align-items: center; background-color: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, #ffec45); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 762px; justify-content: center; overflow: visible; padding: 40px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-13rmvq6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1309px; }",
    ".framer-jNnrp .framer-bf48il { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1117px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-12av69h { -webkit-filter: drop-shadow(0px 4px 0px #756d22); aspect-ratio: 1 / 1; filter: drop-shadow(0px 4px 0px #756d22); flex: none; height: var(--framer-aspect-ratio-supported, 239px); left: 130px; overflow: visible; position: absolute; top: 16px; width: 239px; z-index: 1; }",
    ".framer-jNnrp .framer-1rl27tn, .framer-jNnrp .framer-afcqg6 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1051px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-1nlhh7o { -webkit-filter: drop-shadow(6px 5px 12px rgba(0, 0, 0, 0.35)); aspect-ratio: 0.6249999999999999 / 1; bottom: -368px; filter: drop-shadow(6px 5px 12px rgba(0, 0, 0, 0.35)); flex: none; height: var(--framer-aspect-ratio-supported, 800px); overflow: visible; position: absolute; right: 15px; width: 500px; z-index: 1; }",
    ".framer-jNnrp .framer-6lls3h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 31px; position: absolute; top: 8px; white-space: pre-wrap; width: 197px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-iv36ss { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: -133px; position: absolute; top: 47px; white-space: pre-wrap; width: 218px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-pacupz, .framer-jNnrp .framer-n1h2xc { --border-bottom-width: 3.96px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.08), inset 5px 5px 0px 0px rgba(255, 255, 255, 0.2); flex: none; height: 81px; overflow: visible; position: relative; width: 534px; }",
    ".framer-jNnrp .framer-1lrl0yw, .framer-jNnrp .framer-1bmzxyq { align-content: center; align-items: center; background-color: rgba(253, 194, 56, 0); bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: center; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-jNnrp .framer-185668i-container, .framer-jNnrp .framer-1o038on-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-jwgh8f, .framer-jNnrp .framer-16c08r6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-1xxryau, .framer-jNnrp .framer-yyihay { --border-bottom-width: 1.98px; --border-color: #191919; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 8px 8px 1px -3px rgba(0, 0, 0, 0.2), 3px 3px 0px -1px rgb(25, 25, 25); flex: none; height: 65px; overflow: visible; position: relative; text-decoration: none; width: 65px; }",
    ".framer-jNnrp .framer-w9awjj, .framer-jNnrp .framer-1darprw { aspect-ratio: 1.1066666666666667 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 29px); left: 50%; position: absolute; top: 18px; transform: translateX(-50%); width: 32px; }",
    ".framer-jNnrp .framer-solnop, .framer-jNnrp .framer-1bo9lpp { aspect-ratio: 1.1866666666666668 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); left: 50%; position: absolute; top: 18px; transform: translateX(-50%); width: 34px; }",
    ".framer-jNnrp .framer-19sav4e { --border-bottom-width: 1.98px; --border-color: #191919; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 8px 8px 1px -3px rgba(0, 0, 0, 0.2), 3px 3px 0px -1px rgb(25, 25, 25); flex: none; height: 65px; overflow: visible; position: relative; text-decoration: none; width: 65px; z-index: 2; }",
    ".framer-jNnrp .framer-1bbbkpt { aspect-ratio: 0.8513513513513513 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 29px); left: 50%; position: absolute; top: 18px; transform: translateX(-50%); width: 25px; }",
    ".framer-jNnrp .framer-1s1zgnn { aspect-ratio: 4.81386514719848 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 322px); left: 50%; overflow: visible; position: absolute; top: -185px; transform: translateX(-50%); width: 1553px; z-index: 1; }",
    ".framer-jNnrp .framer-jzq7ci { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 475px; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-1taua5d, .framer-jNnrp .framer-kwueix { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 21px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-vs65vf, .framer-jNnrp .framer-198sc39, .framer-jNnrp .framer-u2elw4, .framer-jNnrp .framer-3xdv9l, .framer-jNnrp .framer-l1znrm, .framer-jNnrp .framer-g6oh5m, .framer-jNnrp .framer-1r31ymr, .framer-jNnrp .framer-t2fdod, .framer-jNnrp .framer-776sek, .framer-jNnrp .framer-a1ezk, .framer-jNnrp .framer-1e1kph8, .framer-jNnrp .framer-eb0fpq, .framer-jNnrp .framer-c73f03, .framer-jNnrp .framer-xb0ysa, .framer-jNnrp .framer-17lgh0z, .framer-jNnrp .framer-1sow016, .framer-jNnrp .framer-1v6o7am, .framer-jNnrp .framer-10nru07, .framer-jNnrp .framer-1rubxek, .framer-jNnrp .framer-1wllye, .framer-jNnrp .framer-1o70zzn, .framer-jNnrp .framer-yx3tlh, .framer-jNnrp .framer-1hs86rs, .framer-jNnrp .framer-hjkra7, .framer-jNnrp .framer-t4n7j, .framer-jNnrp .framer-uqnphb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-1gj7n25 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-8ji9lu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-18buhca-container, .framer-jNnrp .framer-89xe50-container, .framer-jNnrp .framer-1grsn27-container, .framer-jNnrp .framer-3219nn-container, .framer-jNnrp .framer-1g23oud-container { flex: none; height: auto; position: relative; width: 256px; }",
    ".framer-jNnrp .framer-vjpn9o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-jNnrp .framer-ziih2v-container { flex: none; height: 60px; position: relative; width: 175px; }",
    ".framer-jNnrp .framer-8nvlbu { align-content: center; align-items: center; background-color: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, #ffec45); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: center; overflow: hidden; padding: 192px 40px 192px 40px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-e7732x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-10u0dt9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 864px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-kydqsj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 21px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-u8ue1i, .framer-jNnrp .framer-19172ml, .framer-jNnrp .framer-1exrgem { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ededed; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jNnrp .framer-3ofvj5 { align-content: center; align-items: center; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 265px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 265px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jNnrp .framer-1qss6n0 { aspect-ratio: 1 / 1; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; flex: none; height: var(--framer-aspect-ratio-supported, 279px); overflow: visible; position: relative; width: 279px; }",
    ".framer-jNnrp .framer-4qqwap { align-content: center; align-items: center; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 265px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 264px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jNnrp .framer-w3xlup { aspect-ratio: 1 / 1; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; flex: none; height: var(--framer-aspect-ratio-supported, 275px); overflow: visible; position: relative; width: 275px; }",
    ".framer-jNnrp .framer-4u2d0k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-jNnrp .framer-ptg5li { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 265px); overflow: visible; position: relative; width: 265px; }",
    ".framer-jNnrp .framer-1bz98jg { --border-bottom-width: 1.98px; --border-color: #191919; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); background-color: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, #ffec45); border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: 8px 8px 1px -3px rgba(0, 0, 0, 0.2), 3px 3px 0px -1px rgb(25, 25, 25); flex: none; height: 52px; overflow: visible; position: relative; text-decoration: none; width: 359px; z-index: 1; }",
    ".framer-jNnrp .framer-j3xz7u, .framer-jNnrp .framer-1kywjiy, .framer-jNnrp .framer-19uy51d, .framer-jNnrp .framer-102nmxp, .framer-jNnrp .framer-tsx5p4, .framer-jNnrp .framer-1u8oxjk, .framer-jNnrp .framer-f6coc0, .framer-jNnrp .framer-u5hdwo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 5px; width: 100%; }",
    ".framer-jNnrp .framer-uhv0yh, .framer-jNnrp .framer-bdpj6w, .framer-jNnrp .framer-t3niki, .framer-jNnrp .framer-17fqiqb, .framer-jNnrp .framer-g9obth, .framer-jNnrp .framer-1dbxbbl, .framer-jNnrp .framer-tyaz3c, .framer-jNnrp .framer-17skxdn { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 42px; position: relative; white-space: pre-wrap; width: 98%; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-89wenw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 50px 40px 198px 40px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-fmpmnm, .framer-jNnrp .framer-idsorq { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 538px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1175px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jNnrp .framer-1ujmciy { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 33px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 30px 0px 0px 30px; position: relative; width: 1px; }",
    ".framer-jNnrp .framer-h23mg0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-10dwnvb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 39px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-jNnrp .framer-vha5y5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 67px; position: relative; white-space: pre; width: auto; }",
    ".framer-jNnrp .framer-qro7dz, .framer-jNnrp .framer-1xclrc9, .framer-jNnrp .framer-1dgesh4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 589px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-17vpxqh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 649px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-lrb01r { aspect-ratio: 1.3247252747252747 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 549px); overflow: visible; position: absolute; right: -127px; top: -48px; width: 727px; z-index: 1; }",
    ".framer-jNnrp .framer-b6sat { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 37px; height: 133px; justify-content: center; overflow: hidden; padding: 8px 0px 8px 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-1fkskhf { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 26px; height: 538px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1175px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jNnrp .framer-e6e3vv { -webkit-filter: drop-shadow(9px 1px 1px rgba(255, 255, 255, 0.08)); aspect-ratio: 1.7777777777777777 / 1; filter: drop-shadow(9px 1px 1px rgba(255, 255, 255, 0.08)); flex: none; height: var(--framer-aspect-ratio-supported, 542px); overflow: visible; position: relative; width: 964px; z-index: 1; }",
    ".framer-jNnrp .framer-uefsqx { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 40px 15px 0px 0px; position: relative; width: 420px; }",
    ".framer-jNnrp .framer-1ersalg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 37px; height: 167px; justify-content: center; overflow: hidden; padding: 8px 0px 8px 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-6gr8qz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 49px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-nn9ghl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 33px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-jNnrp .framer-1ar9ocj { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 678px); overflow: visible; position: relative; width: 1205px; }",
    ".framer-jNnrp .framer-jmzbt9 { align-content: center; align-items: center; background-color: var(--token-6e90f944-1cf6-4d41-98e6-4934c7c435d0, #e8e8e8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 63px; height: min-content; justify-content: center; overflow: hidden; padding: 192px 40px 192px 40px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-1mujva { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1099px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-kxqz83 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1172px; }",
    ".framer-jNnrp .framer-xkiogx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-1u5g4bc, .framer-jNnrp .framer-lg6vzt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-dtzhxt, .framer-jNnrp .framer-2fn8so, .framer-jNnrp .framer-1buhui5, .framer-jNnrp .framer-1s6d07n, .framer-jNnrp .framer-10sgg3a, .framer-jNnrp .framer-1aixv4d { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ededed; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-top-left-radius: 5px; border-top-right-radius: 5px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: 212px; justify-content: center; overflow: hidden; padding: 31px; position: relative; width: 349px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jNnrp .framer-blfkmh, .framer-jNnrp .framer-13vgkqd, .framer-jNnrp .framer-ppcku2, .framer-jNnrp .framer-1xvcej, .framer-jNnrp .framer-phc1xv, .framer-jNnrp .framer-v2utxd { -webkit-user-select: none; flex: none; height: 63px; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 299px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-1gvp07w, .framer-jNnrp .framer-1b8wvpw, .framer-jNnrp .framer-l51av, .framer-jNnrp .framer-1fumzj6, .framer-jNnrp .framer-1uws9uw, .framer-jNnrp .framer-ovwdv5 { --border-bottom-width: 1.98px; --border-color: #191919; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px); background-color: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, #ffec45); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; box-shadow: 8px 7px 1px -3px rgba(0, 0, 0, 0.2), 3px 3px 0px -1px rgb(25, 25, 25); flex: none; height: 52px; overflow: visible; position: relative; text-decoration: none; width: 189px; }",
    ".framer-jNnrp .framer-5wgzul { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1172px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-lglogn { align-content: center; align-items: center; background-color: var(--token-6e90f944-1cf6-4d41-98e6-4934c7c435d0, #e8e8e8); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: center; overflow: hidden; padding: 192px 40px 192px 40px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-168x43m { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 931px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-9sf19l { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ededed; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: 369px; justify-content: flex-end; overflow: hidden; padding: 31px 31px 12px 31px; position: relative; width: 633px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jNnrp .framer-1y2ifz9 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 651px); left: -9px; overflow: visible; position: absolute; right: -9px; top: -141px; z-index: 1; }",
    ".framer-jNnrp .framer-sdu5g8 { --border-bottom-width: 1.98px; --border-color: #191919; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: 8px 8px 1px -3px rgba(0, 0, 0, 0.2), 3px 3px 0px -1px rgb(25, 25, 25); flex: none; height: 52px; overflow: visible; position: relative; text-decoration: none; width: 254px; z-index: 1; }",
    ".framer-jNnrp .framer-qu9lha { align-content: center; align-items: center; background-color: var(--token-6e90f944-1cf6-4d41-98e6-4934c7c435d0, #f2f2f2); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: center; overflow: hidden; padding: 192px 40px 192px 40px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-80p2p3, .framer-jNnrp .framer-3odbdf, .framer-jNnrp .framer-rthtya { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-jNnrp .framer-m1498h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-1v24haf { aspect-ratio: 1.75 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 674px); overflow: visible; position: relative; width: 1179px; }",
    ".framer-jNnrp .framer-qzcb9z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-1ke1628, .framer-jNnrp .framer-1s3jv2j { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 7px; border-bottom-right-radius: 7px; border-top-left-radius: 7px; border-top-right-radius: 7px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 160px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 349px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jNnrp .framer-1fd3ra8, .framer-jNnrp .framer-1uguzxm, .framer-jNnrp .framer-1ac48b7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-dwb04x { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 7px; border-bottom-right-radius: 7px; border-top-left-radius: 7px; border-top-right-radius: 7px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 160px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 360px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jNnrp .framer-1v9426r { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 160px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 349px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jNnrp .framer-199qkql { --border-bottom-width: 4.95px; --border-color: #000000; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 7px; border-bottom-right-radius: 7px; border-top-left-radius: 7px; border-top-right-radius: 7px; box-shadow: inset 10px 10px 0px 0px rgba(255, 255, 255, 0.2), 10px 10px 0px 0px rgba(0, 0, 0, 0.08); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 181px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 572px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-jNnrp .framer-1iaiajr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 142px; height: min-content; justify-content: center; overflow: hidden; padding: 167px 40px 167px 40px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-2ukt13 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 39px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1183px; }",
    ".framer-jNnrp .framer-ghwmg4, .framer-jNnrp .framer-ezpeo8 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-yy5q7w, .framer-jNnrp .framer-kg6t06, .framer-jNnrp .framer-xxl8gl, .framer-jNnrp .framer-rh7enw { --border-bottom-width: 4.95px; --border-color: #1a1a1a; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; aspect-ratio: 1.7777777777777777 / 1; background-color: var(--token-6e90f944-1cf6-4d41-98e6-4934c7c435d0, #f2f2f2); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.08), inset 5px 5px 0px 0px rgba(255, 255, 255, 0.5); flex: none; height: var(--framer-aspect-ratio-supported, 326px); overflow: visible; position: relative; width: 579px; }",
    ".framer-jNnrp .framer-3f4zt4 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 13px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-jNnrp .framer-15ts10g, .framer-jNnrp .framer-oxk930, .framer-jNnrp .framer-16m468s { -webkit-user-select: none; flex: none; height: 44px; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 510px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-5mdfbo { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 506px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-tbxxb4, .framer-jNnrp .framer-1nhsaw2 { -webkit-filter: brightness(0.67); aspect-ratio: 1.0300751879699248 / 1; filter: brightness(0.67); flex: none; height: var(--framer-aspect-ratio-supported, 229px); position: relative; width: 236px; }",
    ".framer-jNnrp .framer-1rkv8oj, .framer-jNnrp .framer-e5ivry { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-aksphx { -webkit-filter: brightness(0.67); aspect-ratio: 1.0300751879699248 / 1; filter: brightness(0.67); flex: none; height: var(--framer-aspect-ratio-supported, 235px); position: relative; width: 244px; }",
    ".framer-jNnrp .framer-12n579u { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-jNnrp .framer-1yt3lau { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 413px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-1txjxul, .framer-jNnrp .framer-1hohjpx, .framer-jNnrp .framer-1uebr1q { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 492px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-p3vys { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-jNnrp .framer-oia5vh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 392px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-1btt5s9 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-jNnrp .framer-1dk87jg { -webkit-user-select: none; flex: none; height: 36px; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 510px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-v67r8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 49px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 40px 0px 40px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-17e1j6i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-1h9unhu { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 500px); overflow: visible; position: relative; width: 500px; }",
    ".framer-jNnrp .framer-1aj3hxr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-jNnrp .framer-pyjrkt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 20px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-1vgy4rv, .framer-jNnrp .framer-141p044 { --border-bottom-width: 1.98px; --border-color: #191919; --border-left-width: 1.98px; --border-right-width: 1.98px; --border-style: solid; --border-top-width: 1.98px; background-color: #e6e6e6; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: 8px 8px 1px -3px rgba(0, 0, 0, 0.2), 3px 3px 0px -1px rgb(25, 25, 25); flex: none; height: 65px; overflow: visible; position: relative; text-decoration: none; width: 65px; }",
    ".framer-jNnrp .framer-1ledgpu { --border-bottom-width: 0px; --border-color: #1f1f1f; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 49px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 100%; }",
    ".framer-jNnrp .framer-19doyer { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 76px; position: relative; white-space: pre-wrap; width: 1096px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-16wlq0c { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1096px; word-break: break-word; word-wrap: break-word; }",
    ".framer-jNnrp .framer-2galm7-container { flex: none; height: auto; left: 1px; position: absolute; right: -1px; top: 0px; z-index: 10; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-jNnrp.framer-72rtr7, .framer-jNnrp .framer-114b6t4, .framer-jNnrp .framer-nvty9t, .framer-jNnrp .framer-13rmvq6, .framer-jNnrp .framer-1lrl0yw, .framer-jNnrp .framer-jwgh8f, .framer-jNnrp .framer-jzq7ci, .framer-jNnrp .framer-1taua5d, .framer-jNnrp .framer-1gj7n25, .framer-jNnrp .framer-8ji9lu, .framer-jNnrp .framer-vjpn9o, .framer-jNnrp .framer-16c08r6, .framer-jNnrp .framer-8nvlbu, .framer-jNnrp .framer-e7732x, .framer-jNnrp .framer-kydqsj, .framer-jNnrp .framer-u8ue1i, .framer-jNnrp .framer-3ofvj5, .framer-jNnrp .framer-19172ml, .framer-jNnrp .framer-4qqwap, .framer-jNnrp .framer-1exrgem, .framer-jNnrp .framer-4u2d0k, .framer-jNnrp .framer-j3xz7u, .framer-jNnrp .framer-89wenw, .framer-jNnrp .framer-fmpmnm, .framer-jNnrp .framer-1ujmciy, .framer-jNnrp .framer-h23mg0, .framer-jNnrp .framer-10dwnvb, .framer-jNnrp .framer-b6sat, .framer-jNnrp .framer-1fkskhf, .framer-jNnrp .framer-uefsqx, .framer-jNnrp .framer-1ersalg, .framer-jNnrp .framer-6gr8qz, .framer-jNnrp .framer-idsorq, .framer-jNnrp .framer-nn9ghl, .framer-jNnrp .framer-jmzbt9, .framer-jNnrp .framer-kxqz83, .framer-jNnrp .framer-xkiogx, .framer-jNnrp .framer-1u5g4bc, .framer-jNnrp .framer-dtzhxt, .framer-jNnrp .framer-1kywjiy, .framer-jNnrp .framer-2fn8so, .framer-jNnrp .framer-19uy51d, .framer-jNnrp .framer-1buhui5, .framer-jNnrp .framer-102nmxp, .framer-jNnrp .framer-lg6vzt, .framer-jNnrp .framer-1s6d07n, .framer-jNnrp .framer-tsx5p4, .framer-jNnrp .framer-10sgg3a, .framer-jNnrp .framer-1u8oxjk, .framer-jNnrp .framer-1aixv4d, .framer-jNnrp .framer-f6coc0, .framer-jNnrp .framer-lglogn, .framer-jNnrp .framer-kwueix, .framer-jNnrp .framer-9sf19l, .framer-jNnrp .framer-u5hdwo, .framer-jNnrp .framer-qu9lha, .framer-jNnrp .framer-m1498h, .framer-jNnrp .framer-qzcb9z, .framer-jNnrp .framer-1ke1628, .framer-jNnrp .framer-dwb04x, .framer-jNnrp .framer-1s3jv2j, .framer-jNnrp .framer-1v9426r, .framer-jNnrp .framer-199qkql, .framer-jNnrp .framer-1iaiajr, .framer-jNnrp .framer-2ukt13, .framer-jNnrp .framer-ghwmg4, .framer-jNnrp .framer-3f4zt4, .framer-jNnrp .framer-1rkv8oj, .framer-jNnrp .framer-12n579u, .framer-jNnrp .framer-ezpeo8, .framer-jNnrp .framer-p3vys, .framer-jNnrp .framer-e5ivry, .framer-jNnrp .framer-1btt5s9, .framer-jNnrp .framer-v67r8, .framer-jNnrp .framer-17e1j6i, .framer-jNnrp .framer-1aj3hxr, .framer-jNnrp .framer-pyjrkt, .framer-jNnrp .framer-1ledgpu, .framer-jNnrp .framer-1bmzxyq { gap: 0px; } .framer-jNnrp.framer-72rtr7 > *, .framer-jNnrp .framer-114b6t4 > *, .framer-jNnrp .framer-1lrl0yw > *, .framer-jNnrp .framer-1bmzxyq > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-jNnrp.framer-72rtr7 > :first-child, .framer-jNnrp .framer-114b6t4 > :first-child, .framer-jNnrp .framer-nvty9t > :first-child, .framer-jNnrp .framer-13rmvq6 > :first-child, .framer-jNnrp .framer-1lrl0yw > :first-child, .framer-jNnrp .framer-jzq7ci > :first-child, .framer-jNnrp .framer-1taua5d > :first-child, .framer-jNnrp .framer-1gj7n25 > :first-child, .framer-jNnrp .framer-8nvlbu > :first-child, .framer-jNnrp .framer-e7732x > :first-child, .framer-jNnrp .framer-u8ue1i > :first-child, .framer-jNnrp .framer-19172ml > :first-child, .framer-jNnrp .framer-1exrgem > :first-child, .framer-jNnrp .framer-89wenw > :first-child, .framer-jNnrp .framer-1ujmciy > :first-child, .framer-jNnrp .framer-10dwnvb > :first-child, .framer-jNnrp .framer-b6sat > :first-child, .framer-jNnrp .framer-uefsqx > :first-child, .framer-jNnrp .framer-1ersalg > :first-child, .framer-jNnrp .framer-6gr8qz > :first-child, .framer-jNnrp .framer-jmzbt9 > :first-child, .framer-jNnrp .framer-kxqz83 > :first-child, .framer-jNnrp .framer-xkiogx > :first-child, .framer-jNnrp .framer-dtzhxt > :first-child, .framer-jNnrp .framer-2fn8so > :first-child, .framer-jNnrp .framer-1buhui5 > :first-child, .framer-jNnrp .framer-1s6d07n > :first-child, .framer-jNnrp .framer-10sgg3a > :first-child, .framer-jNnrp .framer-1aixv4d > :first-child, .framer-jNnrp .framer-lglogn > :first-child, .framer-jNnrp .framer-kwueix > :first-child, .framer-jNnrp .framer-9sf19l > :first-child, .framer-jNnrp .framer-qu9lha > :first-child, .framer-jNnrp .framer-dwb04x > :first-child, .framer-jNnrp .framer-199qkql > :first-child, .framer-jNnrp .framer-1iaiajr > :first-child, .framer-jNnrp .framer-2ukt13 > :first-child, .framer-jNnrp .framer-3f4zt4 > :first-child, .framer-jNnrp .framer-12n579u > :first-child, .framer-jNnrp .framer-p3vys > :first-child, .framer-jNnrp .framer-1btt5s9 > :first-child, .framer-jNnrp .framer-v67r8 > :first-child, .framer-jNnrp .framer-1aj3hxr > :first-child, .framer-jNnrp .framer-1ledgpu > :first-child, .framer-jNnrp .framer-1bmzxyq > :first-child { margin-top: 0px; } .framer-jNnrp.framer-72rtr7 > :last-child, .framer-jNnrp .framer-114b6t4 > :last-child, .framer-jNnrp .framer-nvty9t > :last-child, .framer-jNnrp .framer-13rmvq6 > :last-child, .framer-jNnrp .framer-1lrl0yw > :last-child, .framer-jNnrp .framer-jzq7ci > :last-child, .framer-jNnrp .framer-1taua5d > :last-child, .framer-jNnrp .framer-1gj7n25 > :last-child, .framer-jNnrp .framer-8nvlbu > :last-child, .framer-jNnrp .framer-e7732x > :last-child, .framer-jNnrp .framer-u8ue1i > :last-child, .framer-jNnrp .framer-19172ml > :last-child, .framer-jNnrp .framer-1exrgem > :last-child, .framer-jNnrp .framer-89wenw > :last-child, .framer-jNnrp .framer-1ujmciy > :last-child, .framer-jNnrp .framer-10dwnvb > :last-child, .framer-jNnrp .framer-b6sat > :last-child, .framer-jNnrp .framer-uefsqx > :last-child, .framer-jNnrp .framer-1ersalg > :last-child, .framer-jNnrp .framer-6gr8qz > :last-child, .framer-jNnrp .framer-jmzbt9 > :last-child, .framer-jNnrp .framer-kxqz83 > :last-child, .framer-jNnrp .framer-xkiogx > :last-child, .framer-jNnrp .framer-dtzhxt > :last-child, .framer-jNnrp .framer-2fn8so > :last-child, .framer-jNnrp .framer-1buhui5 > :last-child, .framer-jNnrp .framer-1s6d07n > :last-child, .framer-jNnrp .framer-10sgg3a > :last-child, .framer-jNnrp .framer-1aixv4d > :last-child, .framer-jNnrp .framer-lglogn > :last-child, .framer-jNnrp .framer-kwueix > :last-child, .framer-jNnrp .framer-9sf19l > :last-child, .framer-jNnrp .framer-qu9lha > :last-child, .framer-jNnrp .framer-dwb04x > :last-child, .framer-jNnrp .framer-199qkql > :last-child, .framer-jNnrp .framer-1iaiajr > :last-child, .framer-jNnrp .framer-2ukt13 > :last-child, .framer-jNnrp .framer-3f4zt4 > :last-child, .framer-jNnrp .framer-12n579u > :last-child, .framer-jNnrp .framer-p3vys > :last-child, .framer-jNnrp .framer-1btt5s9 > :last-child, .framer-jNnrp .framer-v67r8 > :last-child, .framer-jNnrp .framer-1aj3hxr > :last-child, .framer-jNnrp .framer-1ledgpu > :last-child, .framer-jNnrp .framer-1bmzxyq > :last-child { margin-bottom: 0px; } .framer-jNnrp .framer-nvty9t > *, .framer-jNnrp .framer-jzq7ci > *, .framer-jNnrp .framer-89wenw > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-jNnrp .framer-13rmvq6 > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } .framer-jNnrp .framer-jwgh8f > *, .framer-jNnrp .framer-16c08r6 > * { margin: 0px; margin-left: calc(36px / 2); margin-right: calc(36px / 2); } .framer-jNnrp .framer-jwgh8f > :first-child, .framer-jNnrp .framer-8ji9lu > :first-child, .framer-jNnrp .framer-vjpn9o > :first-child, .framer-jNnrp .framer-16c08r6 > :first-child, .framer-jNnrp .framer-kydqsj > :first-child, .framer-jNnrp .framer-3ofvj5 > :first-child, .framer-jNnrp .framer-4qqwap > :first-child, .framer-jNnrp .framer-4u2d0k > :first-child, .framer-jNnrp .framer-j3xz7u > :first-child, .framer-jNnrp .framer-fmpmnm > :first-child, .framer-jNnrp .framer-h23mg0 > :first-child, .framer-jNnrp .framer-1fkskhf > :first-child, .framer-jNnrp .framer-idsorq > :first-child, .framer-jNnrp .framer-nn9ghl > :first-child, .framer-jNnrp .framer-1u5g4bc > :first-child, .framer-jNnrp .framer-1kywjiy > :first-child, .framer-jNnrp .framer-19uy51d > :first-child, .framer-jNnrp .framer-102nmxp > :first-child, .framer-jNnrp .framer-lg6vzt > :first-child, .framer-jNnrp .framer-tsx5p4 > :first-child, .framer-jNnrp .framer-1u8oxjk > :first-child, .framer-jNnrp .framer-f6coc0 > :first-child, .framer-jNnrp .framer-u5hdwo > :first-child, .framer-jNnrp .framer-m1498h > :first-child, .framer-jNnrp .framer-qzcb9z > :first-child, .framer-jNnrp .framer-1ke1628 > :first-child, .framer-jNnrp .framer-1s3jv2j > :first-child, .framer-jNnrp .framer-1v9426r > :first-child, .framer-jNnrp .framer-ghwmg4 > :first-child, .framer-jNnrp .framer-1rkv8oj > :first-child, .framer-jNnrp .framer-ezpeo8 > :first-child, .framer-jNnrp .framer-e5ivry > :first-child, .framer-jNnrp .framer-17e1j6i > :first-child, .framer-jNnrp .framer-pyjrkt > :first-child { margin-left: 0px; } .framer-jNnrp .framer-jwgh8f > :last-child, .framer-jNnrp .framer-8ji9lu > :last-child, .framer-jNnrp .framer-vjpn9o > :last-child, .framer-jNnrp .framer-16c08r6 > :last-child, .framer-jNnrp .framer-kydqsj > :last-child, .framer-jNnrp .framer-3ofvj5 > :last-child, .framer-jNnrp .framer-4qqwap > :last-child, .framer-jNnrp .framer-4u2d0k > :last-child, .framer-jNnrp .framer-j3xz7u > :last-child, .framer-jNnrp .framer-fmpmnm > :last-child, .framer-jNnrp .framer-h23mg0 > :last-child, .framer-jNnrp .framer-1fkskhf > :last-child, .framer-jNnrp .framer-idsorq > :last-child, .framer-jNnrp .framer-nn9ghl > :last-child, .framer-jNnrp .framer-1u5g4bc > :last-child, .framer-jNnrp .framer-1kywjiy > :last-child, .framer-jNnrp .framer-19uy51d > :last-child, .framer-jNnrp .framer-102nmxp > :last-child, .framer-jNnrp .framer-lg6vzt > :last-child, .framer-jNnrp .framer-tsx5p4 > :last-child, .framer-jNnrp .framer-1u8oxjk > :last-child, .framer-jNnrp .framer-f6coc0 > :last-child, .framer-jNnrp .framer-u5hdwo > :last-child, .framer-jNnrp .framer-m1498h > :last-child, .framer-jNnrp .framer-qzcb9z > :last-child, .framer-jNnrp .framer-1ke1628 > :last-child, .framer-jNnrp .framer-1s3jv2j > :last-child, .framer-jNnrp .framer-1v9426r > :last-child, .framer-jNnrp .framer-ghwmg4 > :last-child, .framer-jNnrp .framer-1rkv8oj > :last-child, .framer-jNnrp .framer-ezpeo8 > :last-child, .framer-jNnrp .framer-e5ivry > :last-child, .framer-jNnrp .framer-17e1j6i > :last-child, .framer-jNnrp .framer-pyjrkt > :last-child { margin-right: 0px; } .framer-jNnrp .framer-1taua5d > *, .framer-jNnrp .framer-kwueix > * { margin: 0px; margin-bottom: calc(21px / 2); margin-top: calc(21px / 2); } .framer-jNnrp .framer-1gj7n25 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-jNnrp .framer-8ji9lu > * { margin: 0px; margin-left: calc(35px / 2); margin-right: calc(35px / 2); } .framer-jNnrp .framer-vjpn9o > *, .framer-jNnrp .framer-3ofvj5 > *, .framer-jNnrp .framer-4qqwap > *, .framer-jNnrp .framer-4u2d0k > *, .framer-jNnrp .framer-j3xz7u > *, .framer-jNnrp .framer-h23mg0 > *, .framer-jNnrp .framer-1kywjiy > *, .framer-jNnrp .framer-19uy51d > *, .framer-jNnrp .framer-102nmxp > *, .framer-jNnrp .framer-tsx5p4 > *, .framer-jNnrp .framer-1u8oxjk > *, .framer-jNnrp .framer-f6coc0 > *, .framer-jNnrp .framer-u5hdwo > *, .framer-jNnrp .framer-m1498h > *, .framer-jNnrp .framer-17e1j6i > *, .framer-jNnrp .framer-pyjrkt > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-jNnrp .framer-8nvlbu > *, .framer-jNnrp .framer-lglogn > * { margin: 0px; margin-bottom: calc(54px / 2); margin-top: calc(54px / 2); } .framer-jNnrp .framer-e7732x > *, .framer-jNnrp .framer-xkiogx > *, .framer-jNnrp .framer-12n579u > *, .framer-jNnrp .framer-1aj3hxr > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-jNnrp .framer-kydqsj > * { margin: 0px; margin-left: calc(21px / 2); margin-right: calc(21px / 2); } .framer-jNnrp .framer-u8ue1i > *, .framer-jNnrp .framer-19172ml > *, .framer-jNnrp .framer-1exrgem > *, .framer-jNnrp .framer-p3vys > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-jNnrp .framer-fmpmnm > *, .framer-jNnrp .framer-idsorq > *, .framer-jNnrp .framer-1ke1628 > *, .framer-jNnrp .framer-1s3jv2j > *, .framer-jNnrp .framer-1v9426r > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-jNnrp .framer-1ujmciy > * { margin: 0px; margin-bottom: calc(33px / 2); margin-top: calc(33px / 2); } .framer-jNnrp .framer-10dwnvb > *, .framer-jNnrp .framer-2ukt13 > * { margin: 0px; margin-bottom: calc(39px / 2); margin-top: calc(39px / 2); } .framer-jNnrp .framer-b6sat > *, .framer-jNnrp .framer-1ersalg > * { margin: 0px; margin-bottom: calc(37px / 2); margin-top: calc(37px / 2); } .framer-jNnrp .framer-1fkskhf > * { margin: 0px; margin-left: calc(26px / 2); margin-right: calc(26px / 2); } .framer-jNnrp .framer-uefsqx > * { margin: 0px; margin-bottom: calc(26px / 2); margin-top: calc(26px / 2); } .framer-jNnrp .framer-6gr8qz > *, .framer-jNnrp .framer-v67r8 > *, .framer-jNnrp .framer-1ledgpu > * { margin: 0px; margin-bottom: calc(49px / 2); margin-top: calc(49px / 2); } .framer-jNnrp .framer-nn9ghl > * { margin: 0px; margin-left: calc(33px / 2); margin-right: calc(33px / 2); } .framer-jNnrp .framer-jmzbt9 > * { margin: 0px; margin-bottom: calc(63px / 2); margin-top: calc(63px / 2); } .framer-jNnrp .framer-kxqz83 > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-jNnrp .framer-1u5g4bc > *, .framer-jNnrp .framer-lg6vzt > *, .framer-jNnrp .framer-qzcb9z > * { margin: 0px; margin-left: calc(22px / 2); margin-right: calc(22px / 2); } .framer-jNnrp .framer-dtzhxt > *, .framer-jNnrp .framer-2fn8so > *, .framer-jNnrp .framer-1buhui5 > *, .framer-jNnrp .framer-1s6d07n > *, .framer-jNnrp .framer-10sgg3a > *, .framer-jNnrp .framer-1aixv4d > *, .framer-jNnrp .framer-9sf19l > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } .framer-jNnrp .framer-qu9lha > * { margin: 0px; margin-bottom: calc(19px / 2); margin-top: calc(19px / 2); } .framer-jNnrp .framer-dwb04x > *, .framer-jNnrp .framer-199qkql > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-jNnrp .framer-1iaiajr > * { margin: 0px; margin-bottom: calc(142px / 2); margin-top: calc(142px / 2); } .framer-jNnrp .framer-ghwmg4 > *, .framer-jNnrp .framer-1rkv8oj > *, .framer-jNnrp .framer-ezpeo8 > *, .framer-jNnrp .framer-e5ivry > * { margin: 0px; margin-left: calc(44px / 2); margin-right: calc(44px / 2); } .framer-jNnrp .framer-3f4zt4 > * { margin: 0px; margin-bottom: calc(13px / 2); margin-top: calc(13px / 2); } .framer-jNnrp .framer-1btt5s9 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } }",
    "@media (min-width: 1252px) and (max-width: 1449px) { .framer-jNnrp .hidden-72rtr7 { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1251px) { .framer-jNnrp .hidden-2pzl18 { display: none !important; } .${U.bodyClassName}-framer-jNnrp { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-jNnrp.framer-72rtr7, .framer-jNnrp .framer-2ukt13 { width: 810px; } .framer-jNnrp .framer-nvty9t { height: 623px; } .framer-jNnrp .framer-13rmvq6 { width: 738px; } .framer-jNnrp .framer-12av69h { height: var(--framer-aspect-ratio-supported, 123px); left: -20px; top: 13px; width: 123px; } .framer-jNnrp .framer-1nlhh7o { bottom: -162px; height: var(--framer-aspect-ratio-supported, 560px); right: -110px; width: 350px; } .framer-jNnrp .framer-6lls3h { left: -4px; right: 167px; top: -6px; width: unset; } .framer-jNnrp .framer-1s1zgnn { height: var(--framer-aspect-ratio-supported, 259px); top: -142px; width: 1247px; } .framer-jNnrp .framer-jzq7ci { height: min-content; } .framer-jNnrp .framer-1gj7n25, .framer-jNnrp .framer-8ji9lu { gap: 14px; } .framer-jNnrp .framer-16c08r6 { gap: 22px; } .framer-jNnrp .framer-8nvlbu, .framer-jNnrp .framer-jmzbt9, .framer-jNnrp .framer-lglogn, .framer-jNnrp .framer-qu9lha { padding: 139px 40px 139px 40px; } .framer-jNnrp .framer-10u0dt9, .framer-jNnrp .framer-1mujva, .framer-jNnrp .framer-kxqz83, .framer-jNnrp .framer-5wgzul, .framer-jNnrp .framer-168x43m, .framer-jNnrp .framer-19doyer, .framer-jNnrp .framer-16wlq0c { width: 100%; } .framer-jNnrp .framer-89wenw { padding: 73px 40px 198px 40px; } .framer-jNnrp .framer-fmpmnm, .framer-jNnrp .framer-idsorq { height: 338px; width: 739px; } .framer-jNnrp .framer-1ujmciy { gap: 14px; padding: 10px 0px 0px 30px; } .framer-jNnrp .framer-10dwnvb { gap: 13px; } .framer-jNnrp .framer-vha5y5 { height: 62px; } .framer-jNnrp .framer-qro7dz, .framer-jNnrp .framer-1xclrc9 { width: 363px; } .framer-jNnrp .framer-1dgesh4 { width: 357px; } .framer-jNnrp .framer-17vpxqh { width: 408px; } .framer-jNnrp .framer-lrb01r { bottom: -5px; height: unset; right: -99px; top: -30px; width: var(--framer-aspect-ratio-supported, 482px); } .framer-jNnrp .framer-b6sat { height: 99px; width: 754px; } .framer-jNnrp .framer-1fkskhf { gap: 11px; height: 338px; width: 739px; } .framer-jNnrp .framer-e6e3vv { height: 344px; width: var(--framer-aspect-ratio-supported, 612px); } .framer-jNnrp .framer-uefsqx { padding: 20px 15px 0px 0px; width: 281px; } .framer-jNnrp .framer-1ersalg { height: 119px; width: 754px; } .framer-jNnrp .framer-1ar9ocj { height: var(--framer-aspect-ratio-supported, 428px); width: 761px; } .framer-jNnrp .framer-1u5g4bc, .framer-jNnrp .framer-lg6vzt { flex-direction: column; gap: 34px; } .framer-jNnrp .framer-dtzhxt, .framer-jNnrp .framer-1s6d07n, .framer-jNnrp .framer-80p2p3, .framer-jNnrp .framer-1ke1628 { order: 0; } .framer-jNnrp .framer-2fn8so, .framer-jNnrp .framer-10sgg3a, .framer-jNnrp .framer-m1498h { order: 1; } .framer-jNnrp .framer-1buhui5, .framer-jNnrp .framer-1aixv4d { order: 2; } .framer-jNnrp .framer-1v24haf { height: var(--framer-aspect-ratio-supported, 442px); width: 775px; } .framer-jNnrp .framer-qzcb9z { flex-direction: column; gap: 34px; order: 3; } .framer-jNnrp .framer-dwb04x { height: 214px; order: 1; width: 465px; } .framer-jNnrp .framer-1v9426r { order: 3; } .framer-jNnrp .framer-199qkql { height: 214px; order: 2; width: 465px; } .framer-jNnrp .framer-afcqg6 { width: 549px; } .framer-jNnrp .framer-ghwmg4, .framer-jNnrp .framer-1rkv8oj, .framer-jNnrp .framer-ezpeo8, .framer-jNnrp .framer-e5ivry { justify-content: center; } .framer-jNnrp .framer-v67r8 { padding: 43px 25px 0px 25px; } .framer-jNnrp .framer-1h9unhu { height: var(--framer-aspect-ratio-supported, 350px); width: 350px; } .framer-jNnrp .framer-1darprw { height: var(--framer-aspect-ratio-supported, 28px); } .framer-jNnrp .framer-1ledgpu { padding: 43px 25px 43px 25px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-jNnrp .framer-1gj7n25, .framer-jNnrp .framer-8ji9lu, .framer-jNnrp .framer-16c08r6, .framer-jNnrp .framer-1ujmciy, .framer-jNnrp .framer-10dwnvb, .framer-jNnrp .framer-1fkskhf, .framer-jNnrp .framer-1u5g4bc, .framer-jNnrp .framer-lg6vzt, .framer-jNnrp .framer-qzcb9z { gap: 0px; } .framer-jNnrp .framer-1gj7n25 > *, .framer-jNnrp .framer-1ujmciy > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-jNnrp .framer-1gj7n25 > :first-child, .framer-jNnrp .framer-1ujmciy > :first-child, .framer-jNnrp .framer-10dwnvb > :first-child, .framer-jNnrp .framer-1u5g4bc > :first-child, .framer-jNnrp .framer-lg6vzt > :first-child, .framer-jNnrp .framer-qzcb9z > :first-child { margin-top: 0px; } .framer-jNnrp .framer-1gj7n25 > :last-child, .framer-jNnrp .framer-1ujmciy > :last-child, .framer-jNnrp .framer-10dwnvb > :last-child, .framer-jNnrp .framer-1u5g4bc > :last-child, .framer-jNnrp .framer-lg6vzt > :last-child, .framer-jNnrp .framer-qzcb9z > :last-child { margin-bottom: 0px; } .framer-jNnrp .framer-8ji9lu > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-jNnrp .framer-8ji9lu > :first-child, .framer-jNnrp .framer-16c08r6 > :first-child, .framer-jNnrp .framer-1fkskhf > :first-child { margin-left: 0px; } .framer-jNnrp .framer-8ji9lu > :last-child, .framer-jNnrp .framer-16c08r6 > :last-child, .framer-jNnrp .framer-1fkskhf > :last-child { margin-right: 0px; } .framer-jNnrp .framer-16c08r6 > * { margin: 0px; margin-left: calc(22px / 2); margin-right: calc(22px / 2); } .framer-jNnrp .framer-10dwnvb > * { margin: 0px; margin-bottom: calc(13px / 2); margin-top: calc(13px / 2); } .framer-jNnrp .framer-1fkskhf > * { margin: 0px; margin-left: calc(11px / 2); margin-right: calc(11px / 2); } .framer-jNnrp .framer-1u5g4bc > *, .framer-jNnrp .framer-lg6vzt > *, .framer-jNnrp .framer-qzcb9z > * { margin: 0px; margin-bottom: calc(34px / 2); margin-top: calc(34px / 2); } }}`,
    `@media (max-width: 809px) { .framer-jNnrp .hidden-41k153 { display: none !important; } .${U.bodyClassName}-framer-jNnrp { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-jNnrp.framer-72rtr7 { width: 390px; } .framer-jNnrp .framer-114b6t4 { padding: 65px 0px 0px 0px; } .framer-jNnrp .framer-10prsza { height: var(--framer-aspect-ratio-supported, 361px); order: 0; } .framer-jNnrp .framer-19q0wri-container { height: 332px; order: 1; width: 404px; z-index: 1; } .framer-jNnrp .framer-nvty9t { height: min-content; justify-content: flex-start; padding: 67px 15px 280px 15px; z-index: 2; } .framer-jNnrp .framer-13rmvq6 { gap: 10px; width: 378px; } .framer-jNnrp .framer-bf48il { order: 1; width: 100%; } .framer-jNnrp .framer-12av69h { height: var(--framer-aspect-ratio-supported, 165px); left: unset; order: 0; position: relative; top: unset; width: 165px; } .framer-jNnrp .framer-1rl27tn { order: 2; width: 100%; } .framer-jNnrp .framer-1nlhh7o { bottom: -328px; height: var(--framer-aspect-ratio-supported, 355px); order: 5; right: -66px; width: 222px; } .framer-jNnrp .framer-pacupz { height: 66px; order: 3; width: 100%; } .framer-jNnrp .framer-jwgh8f { gap: 14px; order: 4; } .framer-jNnrp .framer-solnop { height: var(--framer-aspect-ratio-supported, 29px); } .framer-jNnrp .framer-1s1zgnn { height: var(--framer-aspect-ratio-supported, 132px); top: -77px; width: 635px; } .framer-jNnrp .framer-jzq7ci { height: 457px; padding: 13px; } .framer-jNnrp .framer-1gj7n25 { gap: 12px; } .framer-jNnrp .framer-8ji9lu { flex-direction: column; gap: 19px; } .framer-jNnrp .framer-18buhca-container { order: 0; } .framer-jNnrp .framer-vjpn9o { order: 2; overflow: hidden; width: 100%; } .framer-jNnrp .framer-89xe50-container { height: 60px; width: 175px; } .framer-jNnrp .framer-16c08r6 { gap: 20px; } .framer-jNnrp .framer-3219nn-container, .framer-jNnrp .framer-1g23oud-container { height: 61px; width: 175px; } .framer-jNnrp .framer-8nvlbu, .framer-jNnrp .framer-jmzbt9, .framer-jNnrp .framer-qu9lha { padding: 100px 10px 100px 10px; } .framer-jNnrp .framer-10u0dt9, .framer-jNnrp .framer-1mujva, .framer-jNnrp .framer-kxqz83, .framer-jNnrp .framer-5wgzul, .framer-jNnrp .framer-168x43m, .framer-jNnrp .framer-afcqg6, .framer-jNnrp .framer-oxk930, .framer-jNnrp .framer-19doyer, .framer-jNnrp .framer-16wlq0c { width: 100%; } .framer-jNnrp .framer-kydqsj { flex-direction: column; } .framer-jNnrp .framer-u8ue1i { height: 300px; width: 343px; } .framer-jNnrp .framer-3ofvj5 { height: min-content; width: 347px; } .framer-jNnrp .framer-1qss6n0 { height: var(--framer-aspect-ratio-supported, 347px); width: 347px; } .framer-jNnrp .framer-19172ml { height: 300px; width: 338px; } .framer-jNnrp .framer-4qqwap, .framer-jNnrp .framer-4u2d0k { flex: 1 0 0px; height: 1px; width: 100%; } .framer-jNnrp .framer-w3xlup { height: var(--framer-aspect-ratio-supported, 360px); width: 360px; } .framer-jNnrp .framer-1exrgem { height: 300px; width: 336px; } .framer-jNnrp .framer-ptg5li { flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 336px); width: 1px; } .framer-jNnrp .framer-1bz98jg { width: 366px; } .framer-jNnrp .framer-89wenw { padding: 66px 10px 66px 10px; } .framer-jNnrp .framer-fmpmnm { height: 624px; width: 100%; } .framer-jNnrp .framer-1ujmciy { padding: 30px 0px 0px 15px; } .framer-jNnrp .framer-10dwnvb, .framer-jNnrp .framer-6gr8qz { gap: 17px; } .framer-jNnrp .framer-vha5y5, .framer-jNnrp .framer-3odbdf, .framer-jNnrp .framer-rthtya { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-jNnrp .framer-qro7dz, .framer-jNnrp .framer-1xclrc9, .framer-jNnrp .framer-1dgesh4, .framer-jNnrp .framer-17vpxqh { width: 339px; } .framer-jNnrp .framer-lrb01r { bottom: -25px; height: var(--framer-aspect-ratio-supported, 327px); right: -109px; top: unset; width: 433px; } .framer-jNnrp .framer-b6sat { height: 40px; } .framer-jNnrp .framer-1fkskhf { flex-direction: column; gap: 0px; width: 100%; } .framer-jNnrp .framer-e6e3vv { height: var(--framer-aspect-ratio-supported, 273px); width: 485px; } .framer-jNnrp .framer-uefsqx { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; gap: 12px; height: 1px; padding: 10px 15px 0px 15px; width: 100%; } .framer-jNnrp .framer-1ersalg { height: 41px; } .framer-jNnrp .framer-idsorq { height: 271px; width: 100%; } .framer-jNnrp .framer-1ar9ocj { height: var(--framer-aspect-ratio-supported, 279px); width: 497px; } .framer-jNnrp .framer-1u5g4bc, .framer-jNnrp .framer-lg6vzt { flex-direction: column; gap: 12px; } .framer-jNnrp .framer-dtzhxt, .framer-jNnrp .framer-2fn8so, .framer-jNnrp .framer-1buhui5, .framer-jNnrp .framer-1s6d07n, .framer-jNnrp .framer-10sgg3a, .framer-jNnrp .framer-1aixv4d { height: 175px; width: 285px; } .framer-jNnrp .framer-blfkmh, .framer-jNnrp .framer-13vgkqd, .framer-jNnrp .framer-ppcku2, .framer-jNnrp .framer-1xvcej, .framer-jNnrp .framer-phc1xv, .framer-jNnrp .framer-v2utxd, .framer-jNnrp .framer-15ts10g { height: 32px; width: 100%; } .framer-jNnrp .framer-lglogn { padding: 153px 10px 153px 10px; } .framer-jNnrp .framer-9sf19l { height: 218px; width: 355px; } .framer-jNnrp .framer-1y2ifz9 { bottom: -77px; height: unset; left: 50%; right: unset; top: -57px; transform: translateX(-50%); width: var(--framer-aspect-ratio-supported, 352px); } .framer-jNnrp .framer-80p2p3 { order: 0; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-jNnrp .framer-m1498h { order: 1; } .framer-jNnrp .framer-1v24haf { height: var(--framer-aspect-ratio-supported, 223px); width: 390px; } .framer-jNnrp .framer-qzcb9z { flex-direction: column; gap: 12px; order: 3; } .framer-jNnrp .framer-1ke1628, .framer-jNnrp .framer-1s3jv2j { height: 107px; width: 233px; } .framer-jNnrp .framer-dwb04x { height: 143px; width: 312px; } .framer-jNnrp .framer-199qkql { height: 143px; order: 2; width: 312px; } .framer-jNnrp .framer-1iaiajr { gap: 59px; padding: 59px 10px 59px 10px; } .framer-jNnrp .framer-2ukt13 { gap: 27px; width: 100%; } .framer-jNnrp .framer-ghwmg4, .framer-jNnrp .framer-1rkv8oj, .framer-jNnrp .framer-ezpeo8, .framer-jNnrp .framer-e5ivry { justify-content: center; } .framer-jNnrp .framer-yy5q7w, .framer-jNnrp .framer-xxl8gl { height: var(--framer-aspect-ratio-supported, 214px); width: 381px; } .framer-jNnrp .framer-3f4zt4 { gap: 4px; } .framer-jNnrp .framer-5mdfbo { width: 341px; } .framer-jNnrp .framer-kg6t06 { height: var(--framer-aspect-ratio-supported, 213px); width: 378px; } .framer-jNnrp .framer-12n579u, .framer-jNnrp .framer-p3vys { gap: 0px; } .framer-jNnrp .framer-1yt3lau { width: 317px; } .framer-jNnrp .framer-1txjxul { width: 337px; } .framer-jNnrp .framer-oia5vh { width: 265px; } .framer-jNnrp .framer-1hohjpx { width: 340px; } .framer-jNnrp .framer-rh7enw { height: var(--framer-aspect-ratio-supported, 214px); width: 380px; } .framer-jNnrp .framer-1btt5s9 { gap: 6px; } .framer-jNnrp .framer-1uebr1q { width: 357px; } .framer-jNnrp .framer-v67r8 { padding: 46px 12px 0px 12px; } .framer-jNnrp .framer-17e1j6i { align-content: flex-end; align-items: flex-end; } .framer-jNnrp .framer-1h9unhu { height: var(--framer-aspect-ratio-supported, 163px); width: 163px; } .framer-jNnrp .framer-1aj3hxr { padding: 0px 0px 10px 0px; } .framer-jNnrp .framer-pyjrkt { padding: 0px 0px 0px 2px; } .framer-jNnrp .framer-1ledgpu { padding: 46px 12px 46px 12px; } .framer-jNnrp .framer-n1h2xc { height: 66px; width: 100%; } .framer-jNnrp .framer-2galm7-container { left: 0px; right: 0px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-jNnrp .framer-13rmvq6, .framer-jNnrp .framer-jwgh8f, .framer-jNnrp .framer-1gj7n25, .framer-jNnrp .framer-8ji9lu, .framer-jNnrp .framer-16c08r6, .framer-jNnrp .framer-kydqsj, .framer-jNnrp .framer-10dwnvb, .framer-jNnrp .framer-1fkskhf, .framer-jNnrp .framer-uefsqx, .framer-jNnrp .framer-6gr8qz, .framer-jNnrp .framer-1u5g4bc, .framer-jNnrp .framer-lg6vzt, .framer-jNnrp .framer-qzcb9z, .framer-jNnrp .framer-1iaiajr, .framer-jNnrp .framer-2ukt13, .framer-jNnrp .framer-3f4zt4, .framer-jNnrp .framer-12n579u, .framer-jNnrp .framer-p3vys, .framer-jNnrp .framer-1btt5s9 { gap: 0px; } .framer-jNnrp .framer-13rmvq6 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-jNnrp .framer-13rmvq6 > :first-child, .framer-jNnrp .framer-1gj7n25 > :first-child, .framer-jNnrp .framer-8ji9lu > :first-child, .framer-jNnrp .framer-kydqsj > :first-child, .framer-jNnrp .framer-10dwnvb > :first-child, .framer-jNnrp .framer-1fkskhf > :first-child, .framer-jNnrp .framer-uefsqx > :first-child, .framer-jNnrp .framer-6gr8qz > :first-child, .framer-jNnrp .framer-1u5g4bc > :first-child, .framer-jNnrp .framer-lg6vzt > :first-child, .framer-jNnrp .framer-qzcb9z > :first-child, .framer-jNnrp .framer-1iaiajr > :first-child, .framer-jNnrp .framer-2ukt13 > :first-child, .framer-jNnrp .framer-3f4zt4 > :first-child, .framer-jNnrp .framer-12n579u > :first-child, .framer-jNnrp .framer-p3vys > :first-child, .framer-jNnrp .framer-1btt5s9 > :first-child { margin-top: 0px; } .framer-jNnrp .framer-13rmvq6 > :last-child, .framer-jNnrp .framer-1gj7n25 > :last-child, .framer-jNnrp .framer-8ji9lu > :last-child, .framer-jNnrp .framer-kydqsj > :last-child, .framer-jNnrp .framer-10dwnvb > :last-child, .framer-jNnrp .framer-1fkskhf > :last-child, .framer-jNnrp .framer-uefsqx > :last-child, .framer-jNnrp .framer-6gr8qz > :last-child, .framer-jNnrp .framer-1u5g4bc > :last-child, .framer-jNnrp .framer-lg6vzt > :last-child, .framer-jNnrp .framer-qzcb9z > :last-child, .framer-jNnrp .framer-1iaiajr > :last-child, .framer-jNnrp .framer-2ukt13 > :last-child, .framer-jNnrp .framer-3f4zt4 > :last-child, .framer-jNnrp .framer-12n579u > :last-child, .framer-jNnrp .framer-p3vys > :last-child, .framer-jNnrp .framer-1btt5s9 > :last-child { margin-bottom: 0px; } .framer-jNnrp .framer-jwgh8f > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-jNnrp .framer-jwgh8f > :first-child, .framer-jNnrp .framer-16c08r6 > :first-child { margin-left: 0px; } .framer-jNnrp .framer-jwgh8f > :last-child, .framer-jNnrp .framer-16c08r6 > :last-child { margin-right: 0px; } .framer-jNnrp .framer-1gj7n25 > *, .framer-jNnrp .framer-uefsqx > *, .framer-jNnrp .framer-1u5g4bc > *, .framer-jNnrp .framer-lg6vzt > *, .framer-jNnrp .framer-qzcb9z > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-jNnrp .framer-8ji9lu > * { margin: 0px; margin-bottom: calc(19px / 2); margin-top: calc(19px / 2); } .framer-jNnrp .framer-16c08r6 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-jNnrp .framer-kydqsj > * { margin: 0px; margin-bottom: calc(21px / 2); margin-top: calc(21px / 2); } .framer-jNnrp .framer-10dwnvb > *, .framer-jNnrp .framer-6gr8qz > * { margin: 0px; margin-bottom: calc(17px / 2); margin-top: calc(17px / 2); } .framer-jNnrp .framer-1fkskhf > *, .framer-jNnrp .framer-12n579u > *, .framer-jNnrp .framer-p3vys > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-jNnrp .framer-1iaiajr > * { margin: 0px; margin-bottom: calc(59px / 2); margin-top: calc(59px / 2); } .framer-jNnrp .framer-2ukt13 > * { margin: 0px; margin-bottom: calc(27px / 2); margin-top: calc(27px / 2); } .framer-jNnrp .framer-3f4zt4 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-jNnrp .framer-1btt5s9 > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } }}`,
    `@media (min-width: 2210px) { .framer-jNnrp .hidden-1di8qwd { display: none !important; } .${U.bodyClassName}-framer-jNnrp { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-jNnrp.framer-72rtr7 { width: 2210px; } .framer-jNnrp .framer-19q0wri-container { width: 103%; } .framer-jNnrp .framer-nvty9t { height: 875px; } .framer-jNnrp .framer-1nlhh7o { bottom: -371px; height: var(--framer-aspect-ratio-supported, 874px); right: -44px; width: 546px; } .framer-jNnrp .framer-6lls3h { left: 19px; top: 48px; } .framer-jNnrp .framer-w9awjj { height: var(--framer-aspect-ratio-supported, 28px); } .framer-jNnrp .framer-1s1zgnn { height: var(--framer-aspect-ratio-supported, 527px); top: -311px; width: 2538px; } .framer-jNnrp .framer-jzq7ci { height: 396px; } .framer-jNnrp .framer-10u0dt9, .framer-jNnrp .framer-168x43m { width: 960px; } .framer-jNnrp .framer-3ofvj5 { height: 274px; width: 260px; } .framer-jNnrp .framer-1qss6n0 { height: var(--framer-aspect-ratio-supported, 292px); width: 292px; } .framer-jNnrp .framer-4qqwap { height: 275px; } .framer-jNnrp .framer-w3xlup { height: var(--framer-aspect-ratio-supported, 285px); width: 285px; } .framer-jNnrp .framer-ptg5li { height: var(--framer-aspect-ratio-supported, 275px); width: 275px; } .framer-jNnrp .framer-6gr8qz { width: 1521px; } .framer-jNnrp .framer-1bo9lpp { height: var(--framer-aspect-ratio-supported, 29px); }}`,
    `@media (min-width: 1910px) and (max-width: 2209px) { .framer-jNnrp .hidden-8uu72v { display: none !important; } .${U.bodyClassName}-framer-jNnrp { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-jNnrp.framer-72rtr7 { width: 1910px; } .framer-jNnrp .framer-w9awjj { height: var(--framer-aspect-ratio-supported, 28px); } .framer-jNnrp .framer-1s1zgnn { height: var(--framer-aspect-ratio-supported, 493px); top: -279px; width: 2370px; } .framer-jNnrp .framer-6gr8qz { width: 1512px; } .framer-jNnrp .framer-1bo9lpp { height: var(--framer-aspect-ratio-supported, 29px); }}`,
    `@media (min-width: 1450px) and (max-width: 1909px) { .framer-jNnrp .hidden-9k0o93 { display: none !important; } .${U.bodyClassName}-framer-jNnrp { background: var(--token-5e9a96ff-9db4-4457-86de-6753e3355610, rgb(255, 236, 69)) /* {"name":"BG yellow"} */; } .framer-jNnrp.framer-72rtr7 { width: 1450px; } .framer-jNnrp .framer-solnop, .framer-jNnrp .framer-1bo9lpp { height: var(--framer-aspect-ratio-supported, 29px); } .framer-jNnrp .framer-1bbbkpt { height: var(--framer-aspect-ratio-supported, 30px); } .framer-jNnrp .framer-1s1zgnn { height: var(--framer-aspect-ratio-supported, 374px); left: 50%; top: -207px; width: 1799px; } .framer-jNnrp .framer-w3xlup { height: var(--framer-aspect-ratio-supported, 280px); width: 280px; } .framer-jNnrp .framer-ptg5li { height: var(--framer-aspect-ratio-supported, 264px); } .framer-jNnrp .framer-1v24haf { height: var(--framer-aspect-ratio-supported, 673px); }}`,
    ...Kr,
    '.framer-jNnrp[data-border="true"]::after, .framer-jNnrp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  br = hr(Xe, Le, "framer-jNnrp"),
  fa = br;
br.displayName = "Home";
br.defaultProps = {
  height: 12434,
  width: 1252,
};
gr(
  br,
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
        {
          family: "Tanker",
          source: "fontshare",
          style: "normal",
          url: "/third-party-assets/fontshare/wf/ATKS7EHYU4PKFTXRA4UFAHPY7XS75QMY/OYTCFLQCR7FVKK7FIO7TCJPY4YG22I3S/GKSURDSYOFIC3Y6F5SMWSENDSAB2YMKC.woff2",
          weight: "400",
        },
      ],
    },
    ...Re,
    ...Ye,
    ...Fe,
    ...ze,
    ...Gr(Dr),
  ],
  {
    supportsExplicitInterCodegen: !0,
  }
);
var sa = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerResponsiveScreen: "",
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "12434",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"qXK4Bqcdq":{"layout":["fixed","auto"]},"uvg25bhWK":{"layout":["fixed","auto"]},"Wr845EleD":{"layout":["fixed","auto"]},"ZxH2Lnjan":{"layout":["fixed","auto"]},"gS42TDhYa":{"layout":["fixed","auto"]}}}',
        framerIntrinsicWidth: "1252",
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
      },
    },
    Props: {
      type: "tsType",
      annotations: {
        framerContractVersion: "1",
      },
    },
    __FramerMetadata__: {
      type: "variable",
    },
  },
};
export { sa as __FramerMetadata__, fa as default };
//# sourceMappingURL=XEtyrwhrHrge5o8VvkRphKrwyHJ9ABzdynX_Py6NJq0.GAX7NV4G.mjs.map
