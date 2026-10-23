"use client";
import { c as E, h as G, i as T, j as ge, k as A, l as we, m as I, n as Ne, e as L, d as xe, g as W, f as _e, o as B, q as Se, r as D, s as Ee, a as M, p as je } from "./shorthand-Bjjv6Cn9.js";
import { jsx as i, jsxs as v } from "react/jsx-runtime";
import h, { forwardRef as $, useContext as H, createContext as U, createElement as F, useState as p, useEffect as J, useCallback as N } from "react";
import ze from "react-dom";
const X = $(
  ({
    direction: e = "column",
    spacing: t = "1rem",
    align: a = "stretch",
    justify: r = "start",
    wrap: n = !1,
    className: s = "",
    style: o,
    children: l,
    ...d
  }, m) => /* @__PURE__ */ i(
    "div",
    {
      ref: m,
      className: E("cr-stack", `cr-stack--${e}`, s),
      style: {
        display: "flex",
        flexDirection: e,
        gap: t,
        alignItems: a === "start" ? "flex-start" : a === "end" ? "flex-end" : a,
        justifyContent: r === "start" ? "flex-start" : r === "end" ? "flex-end" : r === "between" ? "space-between" : r,
        flexWrap: n ? "wrap" : "nowrap",
        ...o
      },
      ...d,
      children: l
    }
  )
);
X.displayName = "BaseStack";
function pe(e, t, a) {
  const r = (n) => O({ ...t, ...n }, a);
  return G(e, {
    build: () => e,
    row: () => r({ direction: "row" }),
    column: () => r({ direction: "column" }),
    gap: (n) => r({ spacing: n }),
    spacing: (n) => r({ spacing: n }),
    center: () => r({ align: "center", justify: "center" }),
    align: (n) => r({ align: n }),
    justify: (n) => r({ justify: n }),
    wrap: () => r({ wrap: !0 })
  });
}
function O(e, t) {
  const a = h.Children.map(
    t,
    (n, s) => h.isValidElement(n) ? h.cloneElement(n, { key: n.key || `stk-${s}` }) : n
  ), r = /* @__PURE__ */ i(X, { ...e, children: a });
  return pe(r, e, t);
}
function ee(e, ...t) {
  if (e && typeof e == "object" && !h.isValidElement(e) && !Array.isArray(e) && ("direction" in e || "spacing" in e || "align" in e || "justify" in e || "children" in e || "className" in e))
    return /* @__PURE__ */ i(X, { ...e });
  let a = [], r = "column", n = "1rem";
  return e === "row" || e === "column" ? (r = e, t.length === 1 && Array.isArray(t[0]) ? a = t[0] : a = t) : Array.isArray(e) ? a = e : e !== void 0 && (a = [e, ...t]), O({ direction: r, spacing: n }, a);
}
ee.displayName = "Stack";
const Q = $(
  ({ columns: e = 1, rows: t, minChildWidth: a, gap: r, rowGap: n, columnGap: s, className: o = "", style: l, children: d, ...m }, c) => {
    const u = a ? `repeat(auto-fit, minmax(${a}, 1fr))` : typeof e == "number" ? `repeat(${e}, minmax(0, 1fr))` : e, f = typeof t == "number" ? `repeat(${t}, minmax(0, 1fr))` : t;
    return /* @__PURE__ */ i(
      "div",
      {
        ref: c,
        className: E("cr-grid", o),
        style: {
          display: "grid",
          gridTemplateColumns: u,
          gridTemplateRows: f,
          gap: r,
          rowGap: n,
          columnGap: s,
          ...l
        },
        ...m,
        children: d
      }
    );
  }
);
Q.displayName = "BaseGrid";
function $e(e, t, a) {
  const r = (n) => te({ ...t, ...n }, a);
  return G(e, {
    build: () => e,
    columns: (n) => r({ columns: n }),
    gap: (n) => r({ gap: n }),
    autoFit: (n) => r({ minChildWidth: n })
  });
}
function te(e, t) {
  const a = h.Children.map(
    t,
    (n, s) => h.isValidElement(n) ? h.cloneElement(n, { key: n.key || `grd-${s}` }) : n
  ), r = /* @__PURE__ */ i(Q, { ...e, children: a });
  return $e(r, e, t);
}
function ae(e, ...t) {
  if (e && typeof e == "object" && !h.isValidElement(e) && !Array.isArray(e) && ("columns" in e || "rows" in e || "gap" in e || "children" in e || "className" in e))
    return /* @__PURE__ */ i(Q, { ...e });
  let a = 1, r = [], n = "1rem";
  return typeof e == "number" || typeof e == "string" && !Te(e) ? (a = e, t.length === 1 && Array.isArray(t[0]) ? r = t[0] : r = t) : Array.isArray(e) ? r = e : e !== void 0 && (r = [e, ...t]), te({ columns: a, gap: n }, r);
}
function Te(e) {
  return h.isValidElement(e) || typeof e == "object" && e !== null && "$$typeof" in e;
}
ae.displayName = "Grid";
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = (e) => e == null ? void 0 : e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function Ie(e, t, a = []) {
  if (t == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: Ae(e),
    size: 24,
    node: t,
    ...a.length > 0 ? { aliases: a } : {}
  };
}
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = (e) => {
  let t = "", a = !1;
  for (const r of e) {
    if (r === "-" || r === "_" || r <= " ") {
      a = t.length > 0;
      continue;
    }
    t.length === 0 ? t += r.toLowerCase() : t += a ? r.toUpperCase() : r, a = !1;
  }
  return t;
};
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = (e) => {
  const t = Le(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P = (...e) => e.filter((t, a, r) => !!t && t.trim() !== "" && r.indexOf(t) === a).join(" ").trim();
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function R(e) {
  return e != null;
}
function Be(e, t = {}) {
  var f, b;
  const a = t.attributeNames ?? {}, r = (y) => a[y] ?? y, n = e.size ?? e.width ?? w.width, s = e.size ?? e.height ?? w.height, o = ((f = e.aliases) == null ? void 0 : f.filter((y) => typeof y == "string" && y.trim() !== "").map((y) => `lucide-${y}`)) ?? [], l = [...e.name ? [`lucide-${e.name}`] : [], ...o], d = ((b = t.className) == null ? void 0 : b.split(" ").filter(Boolean)) ?? [], m = t.includeDefaultClasses === !1 ? P(...d) : P("lucide", ...l, ...d), c = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? w["stroke-width"]) * Number(e.size ?? e.width ?? w.width) / Number(t.size ?? t.width ?? w.width) : t.strokeWidth ?? w["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(w).reduce((y, [k, g]) => (y[r(k)] = g, y), {}),
      ..."color" in t && t.color && {
        [r("stroke")]: t.color
      },
      ..."size" in t && R(t.size) && {
        [r("width")]: t.size,
        [r("height")]: t.size
      },
      ..."width" in t && R(t.width) && {
        [r("width")]: t.width
      },
      ..."height" in t && R(t.height) && {
        [r("height")]: t.height
      },
      [r("stroke-width")]: c,
      ...m && {
        [r("class")]: m
      },
      [r("viewBox")]: `0 0 ${n} ${s}`,
      ...t.hasA11yProp === !1 ? {
        [r("aria-hidden")]: "true"
      } : {},
      ..."attributes" in t && t.attributes
    },
    e.node.map((y) => {
      const [k, g, j] = y, z = t.nonScalingStroke ? { [r("vector-effect")]: "non-scaling-stroke", ...g } : g;
      return j ? [k, z, j] : [k, z];
    })
  ];
}
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function De(e, t = {}) {
  return Be(e, {
    ...t,
    attributeNames: {
      ...t.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, Re = U({}), Fe = () => H(Re), Pe = $(
  ({
    color: e,
    size: t,
    width: a,
    height: r,
    strokeWidth: n,
    absoluteStrokeWidth: s,
    nonScalingStroke: o,
    className: l = "",
    children: d,
    iconNode: m = [],
    icon: c = {
      node: m,
      aliases: [],
      size: 24
    },
    ...u
  }, f) => {
    const {
      size: b = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: k = !1,
      nonScalingStroke: g = !1,
      color: j = "currentColor",
      className: z = ""
    } = Fe() ?? {}, me = !!d || Me(u), [ye, fe, be = []] = De(c, {
      color: e ?? j,
      width: a ?? t ?? b,
      height: r ?? t ?? b,
      strokeWidth: n ?? y,
      absoluteStrokeWidth: s ?? k,
      nonScalingStroke: o ?? g,
      className: P(z, l),
      hasA11yProp: me,
      attributes: u
    });
    return F(
      ye,
      {
        ref: f,
        ...fe
      },
      [
        ...be.map(([ve, ke]) => F(ve, ke)),
        ...Array.isArray(d) ? d : [d]
      ]
    );
  }
);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function _(e, t = [], a = []) {
  const r = typeof e == "string" ? Ie(e, t, a) : e, n = $(
    ({ className: s, ...o }, l) => F(Pe, {
      ref: l,
      icon: r,
      className: s,
      ...o
    })
  );
  return r.name && (n.displayName = We(r.name)), n;
}
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const re = {
  name: "circle-check",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }]
  ],
  aliases: ["check-circle-2"]
};
re.node;
const Ve = _(re);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ne = {
  name: "circle-x",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }]
  ],
  aliases: ["x-circle"]
};
ne.node;
const Ce = _(ne);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ce = {
  name: "info",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }]
  ]
};
ce.node;
const qe = _(ce);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = {
  name: "menu",
  size: 24,
  node: [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ]
};
ie.node;
const Ge = _(ie);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oe = {
  name: "triangle-alert",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ],
  aliases: ["alert-triangle"]
};
oe.node;
const He = _(oe);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const se = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
se.node;
const le = _(se);
function Y({
  brand: e,
  links: t,
  actions: a,
  sticky: r = !0,
  glass: n = !0,
  className: s = ""
}) {
  const [o, l] = p(!1);
  return /* @__PURE__ */ v(
    "header",
    {
      className: E(
        "cr-navbar",
        r && "cr-navbar--sticky",
        n && "cr-navbar--glass",
        s
      ),
      children: [
        /* @__PURE__ */ v("div", { className: "cr-navbar__container", children: [
          /* @__PURE__ */ i("div", { className: "cr-navbar__brand", children: e }),
          /* @__PURE__ */ i("nav", { className: "cr-navbar__links", children: t }),
          /* @__PURE__ */ v("div", { className: "cr-navbar__actions", children: [
            a,
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                className: "cr-navbar__toggle",
                onClick: () => l((d) => !d),
                "aria-label": "Toggle navigation menu",
                "aria-expanded": o,
                children: o ? /* @__PURE__ */ i(le, { size: 20 }) : /* @__PURE__ */ i(Ge, { size: 20 })
              }
            )
          ] })
        ] }),
        o && /* @__PURE__ */ v("div", { className: "cr-navbar__mobile-menu cr-animate-fade-in", children: [
          /* @__PURE__ */ i("div", { className: "cr-navbar__mobile-links", children: t }),
          a && /* @__PURE__ */ i("div", { className: "cr-navbar__mobile-actions", children: a })
        ] })
      ]
    }
  );
}
Y.displayName = "BaseNavbar";
function Ue(e, t) {
  const a = (r) => de({ ...t, ...r });
  return G(e, {
    build: () => e,
    sticky: (r = !0) => a({ sticky: r }),
    glass: (r = !0) => a({ glass: r }),
    actions: (r) => a({ actions: r })
  });
}
function de(e) {
  const t = /* @__PURE__ */ i(Y, { ...e });
  return Ue(t, e);
}
function V(e, t, a) {
  if (e && typeof e == "object" && !h.isValidElement(e) && ("brand" in e || "links" in e || "actions" in e))
    return /* @__PURE__ */ i(Y, { ...e });
  let r = e, n = t, s = a;
  return Array.isArray(t) && (n = /* @__PURE__ */ i("div", { style: { display: "flex", gap: "1.25rem", alignItems: "center" }, children: t.map((o, l) => {
    if (typeof o == "string") {
      const d = o === "Home" ? "/" : `/${o.toLowerCase().replace(/\s+/g, "-")}`;
      return /* @__PURE__ */ i("a", { href: d, className: "cr-navbar__link", style: { textDecoration: "none", color: "var(--cr-text-secondary)", fontWeight: 500 }, children: o }, l);
    }
    return h.isValidElement(o) ? h.cloneElement(o, { key: o.key || `nav-${l}` }) : o;
  }) })), de({ brand: r, links: n, actions: s });
}
V.displayName = "Navbar";
function C({
  copyright: e = "© 2026 Criation UI. All rights reserved.",
  links: t = ["Privacy Policy", "Terms of Service", "Support", "Contact"],
  className: a = ""
}) {
  return /* @__PURE__ */ v(
    "footer",
    {
      className: E("cr-footer", a),
      style: {
        width: "100%",
        padding: "2.5rem 1.5rem",
        borderTop: "1px solid var(--cr-border-subtle)",
        marginTop: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        color: "var(--cr-text-muted)",
        fontSize: "0.875rem"
      },
      children: [
        /* @__PURE__ */ i("div", { children: e }),
        t && /* @__PURE__ */ i("div", { style: { display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }, children: t.map((r, n) => {
          if (typeof r == "string") {
            const s = `/${r.toLowerCase().replace(/\s+/g, "-")}`;
            return /* @__PURE__ */ i(
              "a",
              {
                href: s,
                style: { color: "var(--cr-text-secondary)", textDecoration: "none", transition: "color 0.15s" },
                children: r
              },
              n
            );
          }
          return h.isValidElement(r) ? h.cloneElement(r, { key: r.key || `ftr-${n}` }) : r;
        }) })
      ]
    }
  );
}
C.displayName = "BaseFooter";
function q(e, t) {
  return e && typeof e == "object" && !h.isValidElement(e) && !Array.isArray(e) && ("copyright" in e || "links" in e || "className" in e) ? /* @__PURE__ */ i(C, { ...e }) : /* @__PURE__ */ i(C, { copyright: e, links: t });
}
q.displayName = "Footer";
function Xe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var x = {}, K;
function Qe() {
  if (K) return x;
  K = 1;
  var e = ze;
  if (process.env.NODE_ENV === "production")
    x.createRoot = e.createRoot, x.hydrateRoot = e.hydrateRoot;
  else {
    var t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    x.createRoot = function(a, r) {
      t.usingClientEntryPoint = !0;
      try {
        return e.createRoot(a, r);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    }, x.hydrateRoot = function(a, r, n) {
      t.usingClientEntryPoint = !0;
      try {
        return e.hydrateRoot(a, r, n);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    };
  }
  return x;
}
var Ye = Qe();
const Ze = /* @__PURE__ */ Xe(Ye), ue = U(void 0);
function Je({
  children: e,
  defaultTheme: t = "dark",
  storageKey: a = "cr-theme"
}) {
  const [r, n] = p(() => {
    if (typeof window < "u") {
      const c = localStorage.getItem(a);
      if (c === "light" || c === "dark" || c === "system")
        return c;
    }
    return t;
  }), [s, o] = p(() => typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : !0);
  J(() => {
    if (typeof window > "u" || !window.matchMedia) return;
    const c = window.matchMedia("(prefers-color-scheme: dark)"), u = (f) => o(f.matches);
    return c.addEventListener("change", u), () => c.removeEventListener("change", u);
  }, []);
  const l = r === "system" ? s ? "dark" : "light" : r;
  J(() => {
    if (typeof document > "u") return;
    const c = document.documentElement;
    c.setAttribute("data-theme", l), c.classList.remove("cr-theme-light", "cr-theme-dark"), c.classList.add(`cr-theme-${l}`);
    try {
      localStorage.setItem(a, r);
    } catch {
    }
  }, [r, l, a]);
  const d = (c) => {
    n(c);
  }, m = () => {
    n((c) => (c === "system" ? s ? "dark" : "light" : c) === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ i(
    ue.Provider,
    {
      value: {
        theme: r,
        activeTheme: l,
        setTheme: d,
        toggleTheme: m
      },
      children: e
    }
  );
}
function nt() {
  const e = H(ue);
  if (!e)
    throw new Error("useTheme must be used within a <ThemeProvider />");
  return e;
}
const he = U(void 0);
function Ke({ children: e }) {
  const [t, a] = p([]), r = N((c) => {
    a((u) => u.filter((f) => f.id !== c));
  }, []), n = N(
    ({ title: c, message: u, variant: f = "info", duration: b = 4e3 }) => {
      const y = Math.random().toString(36).substring(2, 9), k = { id: y, title: c, message: u, variant: f, duration: b };
      a((g) => [...g, k]), b > 0 && setTimeout(() => {
        r(y);
      }, b);
    },
    [r]
  ), s = N(
    (c, u) => n({ message: c, title: u, variant: "success" }),
    [n]
  ), o = N(
    (c, u) => n({ message: c, title: u, variant: "error" }),
    [n]
  ), l = N(
    (c, u) => n({ message: c, title: u, variant: "info" }),
    [n]
  ), d = N(
    (c, u) => n({ message: c, title: u, variant: "warning" }),
    [n]
  ), m = (c) => {
    switch (c) {
      case "success":
        return /* @__PURE__ */ i(Ve, { size: 18 });
      case "error":
        return /* @__PURE__ */ i(Ce, { size: 18 });
      case "warning":
        return /* @__PURE__ */ i(He, { size: 18 });
      default:
        return /* @__PURE__ */ i(qe, { size: 18 });
    }
  };
  return /* @__PURE__ */ v(he.Provider, { value: { toast: n, removeToast: r, success: s, error: o, info: l, warning: d }, children: [
    e,
    /* @__PURE__ */ i("div", { className: "cr-toast-container", children: t.map((c) => /* @__PURE__ */ v(
      "div",
      {
        role: "status",
        className: E("cr-toast", `cr-toast--${c.variant || "info"}`),
        children: [
          /* @__PURE__ */ i("span", { className: "cr-toast__icon", children: m(c.variant || "info") }),
          /* @__PURE__ */ v("div", { className: "cr-toast__content", children: [
            c.title && /* @__PURE__ */ i("div", { className: "cr-toast__title", children: c.title }),
            /* @__PURE__ */ i("div", { className: "cr-toast__message", children: c.message })
          ] }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "cr-toast__close",
              onClick: () => r(c.id),
              "aria-label": "Close notification",
              children: /* @__PURE__ */ i(le, { size: 14 })
            }
          )
        ]
      },
      c.id
    )) })
  ] });
}
function ct() {
  const e = H(he);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider />");
  return e;
}
function S(e, t) {
  const a = typeof t == "string" ? { rootId: t } : t || {}, r = a.rootId || "root", n = a.theme || "dark";
  if (typeof document > "u")
    return;
  a.title && (document.title = a.title);
  let s = document.getElementById(r);
  s || (s = document.createElement("div"), s.id = r, document.body.appendChild(s));
  let o;
  Array.isArray(e) ? o = Z(e, a) : typeof e == "function" || typeof e == "object" && e !== null && "$$typeof" in e && !("props" in e) ? o = /* @__PURE__ */ i(e, {}) : o = e, Ze.createRoot(s).render(
    /* @__PURE__ */ i(h.StrictMode, { children: /* @__PURE__ */ i(Je, { defaultTheme: n, children: /* @__PURE__ */ i(Ke, { children: o }) }) })
  );
}
const it = S, ot = S;
function Oe(e, ...t) {
  if (typeof e == "string") {
    const a = e;
    let r = [];
    t.length === 1 && Array.isArray(t[0]) ? r = t[0] : r = t, S(r, { title: a });
    return;
  }
  if (t.length > 0) {
    S([e, ...t]);
    return;
  }
  S(e);
}
function Z(e, t) {
  const {
    maxWidth: a = "1080px",
    padding: r = "3rem 2rem",
    gap: n = "1.5rem",
    header: s,
    footer: o,
    className: l = "",
    style: d = {}
  } = t || {};
  return /* @__PURE__ */ v(
    "div",
    {
      className: `cr-simple-website-layout ${l}`.trim(),
      style: {
        minHeight: "100vh",
        padding: r,
        maxWidth: a,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: n,
        alignItems: "stretch",
        width: "100%",
        ...d
      },
      children: [
        s && /* @__PURE__ */ i("header", { className: "cr-website-layout__header", children: s }),
        e.map((m, c) => h.isValidElement(m) ? m.key != null ? m : h.cloneElement(m, { key: `cr-item-${c}` }) : /* @__PURE__ */ i(h.Fragment, { children: m }, `cr-item-${c}`)),
        o && /* @__PURE__ */ i("footer", { className: "cr-website-layout__footer", children: o })
      ]
    }
  );
}
Oe.layout = Z;
const st = {
  /**
   * Fluent Button builder
   */
  button(e, t) {
    if (typeof e == "object" && e !== null)
      return M(e);
    if (t && typeof t == "object")
      return M({
        label: e || "Button",
        className: t.className,
        boxSize: t.size,
        id: t.id,
        color: t.color || t.variant,
        pathDirection: t.to || t.href,
        disabled: t.disabled,
        loading: t.loading,
        onClick: t.onClick
      });
    const a = je(e !== void 0 ? [e] : []);
    return M(a);
  },
  /**
   * Fluent Heading builder
   */
  heading(e, t) {
    if (typeof e == "object" && e !== null)
      return D(e);
    if (t && typeof t == "object")
      return D({
        text: e || "Heading",
        id: t.id,
        level: t.level,
        color: t.color || t.variant,
        align: t.align
      });
    const a = Ee(e !== void 0 ? [e] : []);
    return D(a);
  },
  /**
   * Fluent Text builder
   */
  text(e, t) {
    if (typeof e == "object" && e !== null)
      return B(e);
    if (t && typeof t == "object")
      return B({
        content: e || "",
        id: t.id,
        size: t.size,
        color: t.color || t.variant,
        align: t.align
      });
    const a = Se(e !== void 0 ? [e] : []);
    return B(a);
  },
  /**
   * Fluent Input builder
   */
  input(e, t) {
    if (typeof e == "object" && e !== null)
      return W(e);
    if (t && typeof t == "object")
      return W({
        placeholder: e || "",
        id: t.id,
        type: t.type || "text",
        label: t.label,
        boxSize: t.size || t.width,
        color: t.color
      });
    const a = _e(e !== void 0 ? [e] : []);
    return W(a);
  },
  /**
   * Fluent Card builder
   */
  card(e, t) {
    if (typeof e == "object" && e !== null && !("$$typeof" in e))
      return L(e);
    if (t && typeof t == "object")
      return L({
        content: e,
        id: t.id,
        boxSize: t.size || t.padding,
        variant: t.variant
      });
    const a = xe(e !== void 0 ? [e] : []);
    return L(a);
  },
  /**
   * Fluent Badge builder
   */
  badge(e, t) {
    if (typeof e == "object" && e !== null)
      return I(e);
    if (t && typeof t == "object")
      return I({
        label: e || "Badge",
        id: t.id,
        size: t.size,
        color: t.color || t.variant
      });
    const a = Ne(e !== void 0 ? [e] : []);
    return I(a);
  },
  /**
   * Fluent Link builder
   */
  link(e, t, a) {
    if (typeof e == "object" && e !== null)
      return A(e);
    if (t || a && typeof a == "object")
      return A({
        label: e || "Link",
        href: t || (a == null ? void 0 : a.href) || (a == null ? void 0 : a.to) || "#",
        id: a == null ? void 0 : a.id,
        color: a == null ? void 0 : a.color,
        isExternal: a == null ? void 0 : a.external
      });
    const r = we(e !== void 0 ? [e] : []);
    return A(r);
  },
  /**
   * Fluent Image builder
   */
  image(e, t, a) {
    if (typeof e == "object" && e !== null)
      return T(e);
    if (t || a && typeof a == "object")
      return T({
        src: e,
        alt: t || (a == null ? void 0 : a.alt) || "",
        id: a == null ? void 0 : a.id,
        boxSize: a == null ? void 0 : a.size,
        rounded: a == null ? void 0 : a.rounded
      });
    const r = ge(e !== void 0 ? [e] : []);
    return T(r);
  },
  /**
   * Fluent Stack builder
   */
  stack(...e) {
    return ee(...e);
  },
  /**
   * Fluent Grid builder
   */
  grid(...e) {
    return ae(...e);
  },
  /**
   * Fluent Navbar builder (supports positional arguments or typed options object)
   */
  navbar(e, t, a) {
    if (e && typeof e == "object" && !("$$typeof" in e) && "brand" in e) {
      const r = e;
      return V(r.brand, r.links, r.actions);
    }
    return V(e, t, a);
  },
  /**
   * Fluent Footer builder (supports positional arguments or typed options object)
   */
  footer(e, t) {
    if (e && typeof e == "object" && !("$$typeof" in e) && ("copyright" in e || "links" in e || "brand" in e)) {
      const a = e;
      return q(a.copyright || a.brand, a.links);
    }
    return q(e, t);
  },
  /**
   * Full Page / Website container builder
   */
  website(e, t) {
    return Z(e, t);
  }
};
export {
  X as B,
  Ve as C,
  q as F,
  ae as G,
  qe as I,
  V as N,
  ee as S,
  He as T,
  Oe as W,
  le as X,
  Ce as a,
  C as b,
  _ as c,
  Q as d,
  Y as e,
  Je as f,
  Ke as g,
  it as h,
  Z as i,
  nt as j,
  ct as k,
  ot as m,
  S as r,
  st as u
};
