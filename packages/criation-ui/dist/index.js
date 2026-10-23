"use client";
var fr = Object.defineProperty;
var pr = (e, r, t) => r in e ? fr(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var le = (e, r, t) => pr(e, typeof r != "symbol" ? r + "" : r, t);
import { U as hr, p as gr, a as yr, f as br, g as vr, s as st, r as $e, q as ot, o as Ae, n as ct, m as Ie, d as xr, e as wr, l as lt, k as Te, j as dt, i as Le, c as N, h as F, t as Nr } from "./shorthand-Bjjv6Cn9.js";
import { D as Bi, u as Oi, P as Pi, S as Wi, T as ji, v as Fi, w as Hi, x as Vi, y as qi, z as Ui, A as Gi, B as Ki, C as Ji, E as Qi, F as Yi, G as Zi, H as Xi, b as es, I as ts, J as rs, K as ns, L as as, M as is, N as ss, O as os, Q as cs, R as ls, V as ds, W as us, X as ms, Y as fs, Z as ps } from "./shorthand-Bjjv6Cn9.js";
import { jsx as i, jsxs as m, Fragment as X } from "react/jsx-runtime";
import E, { useState as _, useEffect as B, useCallback as P, useRef as D, forwardRef as A, useImperativeHandle as kr, Component as _r, useMemo as rt, useContext as ut, createContext as mt } from "react";
import { c as W, C as ft, X as ze, a as Cr, T as Sr, I as Er, N as $r, B as pt } from "./builder-BbLA8DCE.js";
import { b as gs, d as ys, e as bs, F as vs, G as xs, S as ws, f as Ns, g as ks, W as _s, h as Cs, i as Ss, m as Es, r as $s, u as As, j as Is, k as Ts } from "./builder-BbLA8DCE.js";
import { Button as ht, BaseButton as Y } from "./button.js";
import { Input as pe, BaseInput as gt } from "./input.js";
import { Card as yt, BaseCard as Ar } from "./card.js";
import { createPortal as Me } from "react-dom";
import { u as zs, a as Ms } from "./createCrudWorkflow-BeKGVcvP.js";
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = {
  name: "arrow-down-right",
  size: 24,
  node: [
    ["path", { d: "m7 7 10 10", key: "1fmybs" }],
    ["path", { d: "M17 7v10H7", key: "6fjiku" }]
  ]
};
bt.node;
const Ir = W(bt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
vt.node;
const Tr = W(vt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = {
  name: "calendar",
  size: 24,
  node: [
    ["path", { d: "M8 2v3", key: "1ioesn" }],
    ["path", { d: "M16 2v3", key: "otl347" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }],
    ["path", { d: "M3 9h18", key: "1pudct" }]
  ]
};
xt.node;
const Lr = W(xt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
wt.node;
const Nt = W(wt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
kt.node;
const _t = W(kt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ct = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
Ct.node;
const zr = W(Ct);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
St.node;
const Et = W(St);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = {
  name: "circle-alert",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
  ],
  aliases: ["alert-circle"]
};
$t.node;
const At = W($t);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = {
  name: "cloud-upload",
  size: 24,
  node: [
    ["path", { d: "M12 13v8", key: "1l5pq0" }],
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
  ],
  aliases: ["upload-cloud"]
};
It.node;
const Mr = W(It);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
Tt.node;
const Rr = W(Tt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = {
  name: "external-link",
  size: 24,
  node: [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
  ]
};
Lt.node;
const Dr = W(Lt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = {
  name: "eye-off",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f"
      }
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a"
      }
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }]
  ]
};
zt.node;
const Br = W(zt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = {
  name: "eye",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
  ]
};
Mt.node;
const Or = W(Mt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = {
  name: "inbox",
  size: 24,
  node: [
    ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
    [
      "path",
      {
        d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
        key: "oot6mr"
      }
    ]
  ]
};
Rt.node;
const Pr = W(Rt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = {
  name: "mail",
  size: 24,
  node: [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
  ]
};
Dt.node;
const Wr = W(Dt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = {
  name: "pen",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
      }
    ]
  ],
  aliases: ["edit-2"]
};
Bt.node;
const jr = W(Bt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
Ot.node;
const Fr = W(Ot);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]
};
Pt.node;
const Hr = W(Pt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
Wt.node;
const Vr = W(Wt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = {
  name: "trash",
  size: 24,
  node: [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
  ],
  aliases: ["trash-2"]
};
jt.node;
const qr = W(jt);
/**
 * @license lucide-react v1.60.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ft = {
  name: "user",
  size: 24,
  node: [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
  ]
};
Ft.node;
const Ur = W(Ft), ha = {
  Button: {
    name: "Button",
    category: "buttons",
    description: "Interactive button supporting variants, sizes, loading state and icons.",
    props: ["variant", "size", "loading", "disabled", "onClick"]
  },
  IconButton: {
    name: "IconButton",
    category: "buttons",
    description: "Compact icon button with equal aspect ratio and accessible labels.",
    props: ["icon", "aria-label", "variant", "size"]
  },
  ButtonGroup: {
    name: "ButtonGroup",
    category: "buttons",
    description: "Groups multiple buttons with seamless connected borders.",
    props: ["attached", "vertical"]
  },
  TextInput: {
    name: "TextInput",
    category: "inputs",
    description: "Accessible text input with prefix/suffix icons, error states, and clear buttons.",
    props: ["value", "onChange", "placeholder", "error", "size"]
  },
  PasswordInput: {
    name: "PasswordInput",
    category: "inputs",
    description: "Secure password input with one-click show/hide visibility toggle.",
    props: ["value", "onChange", "error"]
  },
  Select: {
    name: "Select",
    category: "inputs",
    description: "Custom styled dropdown select element with clean keyboard navigation.",
    props: ["options", "value", "onChange", "placeholder"]
  },
  Card: {
    name: "Card",
    category: "data-display",
    description: "Versatile content container with glassmorphic, bordered, or elevated surfaces.",
    props: ["variant", "padding", "interactive"]
  },
  Modal: {
    name: "Modal",
    category: "overlays",
    description: "Accessible dialog overlay with backdrop blur, focus trapping, and animations.",
    props: ["isOpen", "onClose", "title", "size"]
  },
  Badge: {
    name: "Badge",
    category: "data-display",
    description: "Compact status indicator or pill for tags and notification counts.",
    props: ["variant", "size", "pill"]
  },
  Toast: {
    name: "Toast",
    category: "feedback",
    description: "Notification alert banner dispatched imperatively or via context.",
    props: ["title", "message", "variant", "duration"]
  }
}, Gr = {
  prefix: hr,
  defaultTheme: "dark",
  enableAnimations: !0,
  toastDurationMs: 4e3
};
let _e = { ...Gr };
function ga(e) {
  _e = { ..._e, ...e };
}
function ya() {
  return _e;
}
function Ht(e) {
  if (!e || typeof e != "string")
    return [];
  const r = e.split(`
`).map((n) => n.trim()).filter((n) => n && !n.startsWith("//") && !n.startsWith("#")), t = [];
  for (let n = 0; n < r.length; n++) {
    const a = r[n];
    try {
      if (a.startsWith("Button")) {
        const s = gr([a]);
        t.push(E.cloneElement(yr(s), { key: `dsl-btn-${n}` }));
      } else if (a.startsWith("Input")) {
        const s = br([a]);
        t.push(E.cloneElement(vr(s), { key: `dsl-input-${n}` }));
      } else if (a.startsWith("Heading")) {
        const s = st([a]);
        t.push(E.cloneElement($e(s), { key: `dsl-heading-${n}` }));
      } else if (a.startsWith("Text")) {
        const s = ot([a]);
        t.push(E.cloneElement(Ae(s), { key: `dsl-text-${n}` }));
      } else if (a.startsWith("Badge")) {
        const s = a.replace(/^Badge\s*=\s*/, "").split(/,\s*(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((c) => c.trim().replace(/^["']|["']$/g, "")), o = ct(s);
        t.push(E.cloneElement(Ie(o), { key: `dsl-badge-${n}` }));
      } else if (a.startsWith("Card")) {
        const s = a.replace(/^Card\s*=\s*/, "").split(/,\s*(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((c) => c.trim().replace(/^["']|["']$/g, "")), o = xr(s);
        t.push(E.cloneElement(wr(o), { key: `dsl-card-${n}` }));
      } else if (a.startsWith("Link")) {
        const s = a.replace(/^Link\s*=\s*/, "").split(/,\s*(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((c) => c.trim().replace(/^["']|["']$/g, "")), o = lt(s);
        t.push(E.cloneElement(Te(o), { key: `dsl-link-${n}` }));
      } else if (a.startsWith("Image")) {
        const s = a.replace(/^Image\s*=\s*/, "").split(/,\s*(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((c) => c.trim().replace(/^["']|["']$/g, "")), o = dt(s);
        t.push(E.cloneElement(Le(o), { key: `dsl-image-${n}` }));
      } else
        t.push(
          /* @__PURE__ */ m(
            "div",
            {
              className: "criation-dsl-error",
              style: {
                padding: "4px 8px",
                background: "#fee2e2",
                color: "#991b1b",
                borderRadius: "4px",
                fontSize: "12px",
                border: "1px solid #f87171"
              },
              children: [
                '[DSL Syntax Warning: Unrecognized line "',
                a.substring(0, 40),
                '..."]'
              ]
            },
            `dsl-err-${n}`
          )
        );
    } catch (s) {
      t.push(
        /* @__PURE__ */ m(
          "div",
          {
            className: "criation-dsl-error",
            style: {
              padding: "4px 8px",
              background: "#fee2e2",
              color: "#991b1b",
              borderRadius: "4px",
              fontSize: "12px",
              border: "1px solid #f87171"
            },
            children: [
              "[DSL Parse Error: ",
              (s == null ? void 0 : s.message) || "Invalid syntax",
              "]"
            ]
          },
          `dsl-err-${n}`
        )
      );
    }
  }
  return t;
}
const Kr = Ht;
function Jr(e) {
  const r = Kr(e);
  return /* @__PURE__ */ i("div", { className: "cr-describe-container", style: { display: "inline-flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }, children: r });
}
const ba = Jr;
function va({ children: e, code: r }) {
  const n = Ht(r || e || "");
  return /* @__PURE__ */ i("div", { className: "cr-criation-dsl-container", style: { display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }, children: n });
}
const xa = {
  transparent: "transparent",
  current: "currentColor",
  white: "#ffffff",
  black: "#000000",
  // Slate Neutrals
  neutral: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  // Primary: Electric Indigo
  primary: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81"
  },
  // Secondary: Cyan Sky
  secondary: {
    50: "#f0fdf4",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e"
  },
  // Success: Emerald
  success: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b"
  },
  // Warning: Amber
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  },
  // Danger: Rose Crimson
  danger: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  }
}, wa = {
  0: "0px",
  1: "0.25rem",
  // 4px
  2: "0.5rem",
  // 8px
  3: "0.75rem",
  // 12px
  4: "1rem",
  // 16px
  5: "1.25rem",
  // 20px
  6: "1.5rem",
  // 24px
  8: "2rem",
  // 32px
  10: "2.5rem",
  // 40px
  12: "3rem",
  // 48px
  16: "4rem",
  // 64px
  20: "5rem",
  // 80px
  24: "6rem"
  // 96px
}, Na = {
  fonts: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: "Outfit, Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  fontSizes: {
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    base: "1rem",
    // 16px
    lg: "1.125rem",
    // 18px
    xl: "1.25rem",
    // 20px
    "2xl": "1.5rem",
    // 24px
    "3xl": "1.875rem",
    // 30px
    "4xl": "2.25rem",
    // 36px
    "5xl": "3rem"
    // 48px
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em"
  }
}, ka = {
  buttonHeights: {
    xs: "1.75rem",
    // 28px
    sm: "2rem",
    // 32px
    md: "2.5rem",
    // 40px
    lg: "3rem",
    // 48px
    xl: "3.5rem"
    // 56px
  },
  inputHeights: {
    xs: "1.75rem",
    sm: "2rem",
    md: "2.5rem",
    lg: "3rem",
    xl: "3.5rem"
  },
  iconSizes: {
    xs: "0.875rem",
    // 14px
    sm: "1rem",
    // 16px
    md: "1.25rem",
    // 20px
    lg: "1.5rem",
    // 24px
    xl: "2rem"
    // 32px
  }
}, _a = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  glowPrimary: "0 0 20px rgba(99, 102, 241, 0.35)",
  glowSecondary: "0 0 20px rgba(14, 165, 233, 0.35)",
  glowSuccess: "0 0 20px rgba(16, 185, 129, 0.35)",
  glowDanger: "0 0 20px rgba(244, 63, 94, 0.35)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
}, Ca = {
  none: "0px",
  xs: "0.25rem",
  // 4px
  sm: "0.375rem",
  // 6px
  md: "0.5rem",
  // 8px
  lg: "0.75rem",
  // 12px
  xl: "1rem",
  // 16px
  "2xl": "1.5rem",
  // 24px
  full: "9999px"
}, Sa = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1600,
  tooltip: 1700
}, Vt = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};
function Ea(e) {
  return `@media (min-width: ${Vt[e]})`;
}
function $a(e) {
  return `@media (max-width: calc(${Vt[e]} - 1px))`;
}
const Aa = {
  name: "light",
  colors: {
    bgPage: "#f8fafc",
    bgSurface: "#ffffff",
    bgSurfaceHover: "#f1f5f9",
    bgSurfaceActive: "#e2e8f0",
    bgGlass: "rgba(255, 255, 255, 0.85)",
    borderSubtle: "#e2e8f0",
    borderMuted: "#cbd5e1",
    borderStrong: "#94a3b8",
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    textMuted: "#94a3b8",
    textInverse: "#ffffff",
    primary: "#4f46e5",
    primaryHover: "#4338ca",
    primaryActive: "#3730a3",
    primarySubtle: "#eef2ff",
    primaryText: "#4338ca",
    secondary: "#0284c7",
    secondaryHover: "#0369a1",
    secondarySubtle: "#e0f2fe",
    success: "#10b981",
    successSubtle: "#ecfdf5",
    warning: "#f59e0b",
    warningSubtle: "#fffbeb",
    danger: "#f43f5e",
    dangerHover: "#e11d48",
    dangerSubtle: "#fff1f2",
    focusRing: "rgba(99, 102, 241, 0.4)",
    shadowColor: "rgba(15, 23, 42, 0.08)"
  }
}, Ia = {
  name: "dark",
  colors: {
    bgPage: "#090d16",
    bgSurface: "#111726",
    bgSurfaceHover: "#182034",
    bgSurfaceActive: "#1e2842",
    bgGlass: "rgba(17, 23, 38, 0.8)",
    borderSubtle: "rgba(255, 255, 255, 0.08)",
    borderMuted: "rgba(255, 255, 255, 0.14)",
    borderStrong: "rgba(255, 255, 255, 0.25)",
    textPrimary: "#f8fafc",
    textSecondary: "#94a3b8",
    textMuted: "#64748b",
    textInverse: "#090d16",
    primary: "#6366f1",
    primaryHover: "#818cf8",
    primaryActive: "#4f46e5",
    primarySubtle: "rgba(99, 102, 241, 0.15)",
    primaryText: "#a5b4fc",
    secondary: "#38bdf8",
    secondaryHover: "#7dd3fc",
    secondarySubtle: "rgba(56, 189, 248, 0.15)",
    success: "#34d399",
    successSubtle: "rgba(52, 211, 153, 0.15)",
    warning: "#fbbf24",
    warningSubtle: "rgba(251, 191, 36, 0.15)",
    danger: "#fb7185",
    dangerHover: "#fda4af",
    dangerSubtle: "rgba(251, 113, 133, 0.15)",
    focusRing: "rgba(99, 102, 241, 0.55)",
    shadowColor: "rgba(0, 0, 0, 0.5)"
  }
};
function Ta(e) {
  const [r, t] = _(() => typeof window < "u" && window.matchMedia ? window.matchMedia(e).matches : !1);
  return B(() => {
    if (typeof window > "u" || !window.matchMedia) return;
    const n = window.matchMedia(e), a = () => t(n.matches);
    return a(), n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [e]), r;
}
function La(e, r) {
  const [t, n] = _(e);
  return B(() => {
    const a = setTimeout(() => {
      n(e);
    }, r);
    return () => {
      clearTimeout(a);
    };
  }, [e, r]), t;
}
function Re(e, r, t = !0) {
  B(() => {
    if (!t) return;
    const n = (a) => {
      const s = e.current;
      !s || s.contains(a.target || null) || r(a);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, r, t]);
}
const de = /* @__PURE__ */ new Map();
function za(e, r) {
  const t = P(() => {
    if (typeof window > "u") return r;
    try {
      const o = window.localStorage.getItem(e);
      return o !== null ? JSON.parse(o) : de.has(e) ? JSON.parse(de.get(e)) : r;
    } catch {
      if (de.has(e))
        try {
          return JSON.parse(de.get(e));
        } catch {
          return r;
        }
      return r;
    }
  }, [e, r]), [n, a] = _(t), s = P(
    (o) => {
      a((c) => {
        const l = o instanceof Function ? o(c) : o, d = JSON.stringify(l);
        if (de.set(e, d), typeof window < "u")
          try {
            window.localStorage.setItem(e, d), window.dispatchEvent(
              new StorageEvent("storage", {
                key: e,
                newValue: d
              })
            );
          } catch (p) {
            console.warn(`[useLocalStorage] Storage restricted for key "${e}", retained in memory fallback.`, p);
          }
        return l;
      });
    },
    [e]
  );
  return B(() => {
    if (a(t()), typeof window > "u") return;
    const o = (c) => {
      if (c.key === e && c.newValue !== null)
        try {
          a(JSON.parse(c.newValue));
        } catch {
        }
    };
    return window.addEventListener("storage", o), () => {
      window.removeEventListener("storage", o);
    };
  }, [e, t]), [n, s];
}
function Ma(e = !1) {
  const [r, t] = _(e), n = P(() => t(!0), []), a = P(() => t(!1), []), s = P(() => t((o) => !o), []);
  return {
    isOpen: r,
    onOpen: n,
    onClose: a,
    onToggle: s,
    setIsOpen: t
  };
}
function Ra(e = {}) {
  const { timeout: r = 2e3 } = e, [t, n] = _(!1), a = D(null), s = P(
    async (o) => {
      if (typeof navigator > "u" || !(navigator != null && navigator.clipboard))
        return !1;
      try {
        return await navigator.clipboard.writeText(o), a.current && clearTimeout(a.current), n(!0), a.current = setTimeout(() => {
          n(!1), a.current = null;
        }, r), !0;
      } catch {
        return n(!1), !1;
      }
    },
    [r]
  );
  return B(() => () => {
    a.current && clearTimeout(a.current);
  }, []), { hasCopied: t, copy: s };
}
function Da() {
  const [e, r] = _({
    width: typeof window < "u" ? window.innerWidth : 1200,
    height: typeof window < "u" ? window.innerHeight : 800
  });
  return B(() => {
    if (typeof window > "u") return;
    const t = () => {
      r({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t);
  }, []), e;
}
function Ba() {
  const [e, r] = _(
    typeof navigator < "u" ? navigator.onLine : !0
  );
  return B(() => {
    if (typeof window > "u") return;
    const t = () => r(!0), n = () => r(!1);
    return window.addEventListener("online", t), window.addEventListener("offline", n), () => {
      window.removeEventListener("online", t), window.removeEventListener("offline", n);
    };
  }, []), e;
}
function Oa(e, {
  threshold: r = 0,
  root: t = null,
  rootMargin: n = "0%",
  freezeOnceVisible: a = !1
} = {}) {
  const [s, o] = _(), c = (s == null ? void 0 : s.isIntersecting) && a;
  return B(() => {
    const l = e == null ? void 0 : e.current;
    if (!!!window.IntersectionObserver || c || !l) return;
    const p = { threshold: r, root: t, rootMargin: n }, u = new IntersectionObserver(([v]) => {
      o(v);
    }, p);
    return u.observe(l), () => u.disconnect();
  }, [e, JSON.stringify(r), t, n, c]), s;
}
function Pa(e) {
  const r = D(void 0);
  return B(() => {
    r.current = e;
  }, [e]), r.current;
}
function Wa(e, r, t) {
  const n = D(r);
  B(() => {
    n.current = r;
  }, [r]), B(() => {
    const a = t || (typeof window < "u" ? window : null);
    if (!a || !a.addEventListener) return;
    const s = (o) => n.current(o);
    return a.addEventListener(e, s), () => {
      a.removeEventListener(e, s);
    };
  }, [e, t]);
}
function ja(e) {
  const [r, t] = _(!1);
  return B(() => {
    if (typeof window > "u") return;
    const n = (s) => {
      s.key === e && t(!0);
    }, a = (s) => {
      s.key === e && t(!1);
    };
    return window.addEventListener("keydown", n), window.addEventListener("keyup", a), () => {
      window.removeEventListener("keydown", n), window.removeEventListener("keyup", a);
    };
  }, [e]), r;
}
function Fa(e, r, t = "en-US") {
  const n = typeof e == "object" ? e : new Date(e);
  if (isNaN(n.getTime())) return "";
  const a = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  return new Intl.DateTimeFormat(t, r || a).format(n);
}
function Ha(e, r = "en-US") {
  const t = typeof e == "object" ? e : new Date(e);
  if (isNaN(t.getTime())) return "";
  const n = t.getTime() - Date.now(), a = Math.round(n / 1e3), s = Math.round(a / 60), o = Math.round(s / 60), c = Math.round(o / 24), l = new Intl.RelativeTimeFormat(r, { numeric: "auto" });
  return Math.abs(a) < 60 ? l.format(a, "second") : Math.abs(s) < 60 ? l.format(s, "minute") : Math.abs(o) < 24 ? l.format(o, "hour") : l.format(c, "day");
}
function qt(e, r, t = "en-US") {
  return typeof e != "number" || isNaN(e) ? "0" : new Intl.NumberFormat(t, r).format(e);
}
function Va(e, r = "USD", t = "en-US") {
  return qt(e, { style: "currency", currency: r }, t);
}
function qa(e, r = "en-US") {
  return qt(e, { notation: "compact", compactDisplay: "short" }, r);
}
function Ua(e, r = 2) {
  if (e === 0) return "0 Bytes";
  const t = 1024, n = r < 0 ? 0 : r, a = ["Bytes", "KB", "MB", "GB", "TB", "PB"], s = Math.floor(Math.log(e) / Math.log(t));
  return parseFloat((e / Math.pow(t, s)).toFixed(n)) + " " + a[s];
}
const Ga = {
  required: (e = "This field is required") => (r) => r == null || r === "" || Array.isArray(r) && r.length === 0 ? e : null,
  email: (e = "Please enter a valid email address") => (r) => r ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r) ? null : e : null,
  minLength: (e, r) => (t) => t ? t.length >= e ? null : r || `Must be at least ${e} characters` : null,
  maxLength: (e, r) => (t) => t ? t.length <= e ? null : r || `Must not exceed ${e} characters` : null,
  matches: (e, r = "Invalid format") => (t) => t ? e.test(t) ? null : r : null
};
function Ka(e) {
  return e == null ? !1 : typeof e == "string" ? e.trim().length > 0 : Array.isArray(e) ? e.length > 0 : !0;
}
function Ja(e) {
  return e ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim()) : !1;
}
function Qa(e, r) {
  return typeof e == "string" && e.length >= r;
}
function Ya(e) {
  try {
    const r = new URL(e);
    return r.protocol === "http:" || r.protocol === "https:";
  } catch {
    return !1;
  }
}
function Za(e, r) {
  let t;
  return function(...n) {
    t && clearTimeout(t), t = setTimeout(() => {
      e.apply(this, n);
    }, r);
  };
}
function Xa(e, r) {
  let t = !1;
  return function(...n) {
    t || (e.apply(this, n), t = !0, setTimeout(() => {
      t = !1;
    }, r));
  };
}
const Qr = A(
  ({ icon: e, "aria-label": r, isRound: t = !1, className: n = "", ...a }, s) => /* @__PURE__ */ i(
    ht,
    {
      ref: s,
      "aria-label": r,
      className: N("cr-icon-button", t && "cr-icon-button--round", n),
      ...a,
      children: /* @__PURE__ */ i("span", { className: "cr-icon-button__inner", children: e })
    }
  )
);
Qr.displayName = "IconButton";
const Yr = A(
  ({ size: e, variant: r, attached: t = !1, vertical: n = !1, className: a = "", children: s, ...o }, c) => {
    const l = N(
      "cr-button-group",
      t && "cr-button-group--attached",
      n && "cr-button-group--vertical",
      a
    );
    return /* @__PURE__ */ i("div", { ref: c, role: "group", className: l, ...o, children: E.Children.map(s, (d) => E.isValidElement(d) ? E.cloneElement(d, {
      size: d.props.size || e,
      variant: d.props.variant || r
    }) : d) });
  }
);
Yr.displayName = "ButtonGroup";
const Zr = A((e, r) => /* @__PURE__ */ i(pe, { ref: r, type: "text", ...e }));
Zr.displayName = "TextInput";
const Xr = A(
  ({ showToggle: e = !0, ...r }, t) => {
    const [n, a] = _(!1);
    return /* @__PURE__ */ i(
      pe,
      {
        ref: t,
        type: n ? "text" : "password",
        rightIcon: e ? /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "cr-input__toggle-visibility",
            onClick: () => {
              a((c) => !c);
            },
            tabIndex: -1,
            "aria-label": n ? "Hide password" : "Show password",
            children: n ? /* @__PURE__ */ i(Br, { size: 16 }) : /* @__PURE__ */ i(Or, { size: 16 })
          }
        ) : void 0,
        ...r
      }
    );
  }
);
Xr.displayName = "PasswordInput";
const en = A(
  ({ leftIcon: e = /* @__PURE__ */ i(Wr, { size: 16 }), ...r }, t) => /* @__PURE__ */ i(
    pe,
    {
      ref: t,
      type: "email",
      autoComplete: "email",
      leftIcon: e,
      ...r
    }
  )
);
en.displayName = "EmailInput";
const tn = A(
  ({ min: e, max: r, step: t = 1, ...n }, a) => /* @__PURE__ */ i(
    pe,
    {
      ref: a,
      type: "number",
      min: e,
      max: r,
      step: t,
      ...n
    }
  )
);
tn.displayName = "NumberInput";
const Ut = A(
  ({
    size: e = "md",
    error: r,
    autoResize: t = !1,
    className: n = "",
    disabled: a,
    rows: s = 3,
    style: o,
    onInput: c,
    ...l
  }, d) => {
    const p = !!r, u = typeof r == "string" ? r : void 0, v = D(null), g = l.id ? `${l.id}-error` : void 0, x = () => {
      const y = v.current;
      t && y && (y.style.height = "auto", y.style.height = `${y.scrollHeight}px`);
    };
    B(() => {
      x();
    }, [t, l.value, l.defaultValue]);
    const k = (y) => {
      x(), c == null || c(y);
    }, f = /* @__PURE__ */ i(
      "div",
      {
        className: N(
          "cr-textarea-wrapper",
          `cr-textarea-wrapper--${e}`,
          p && "has-error",
          a && "is-disabled",
          n
        ),
        style: o,
        children: /* @__PURE__ */ i(
          "textarea",
          {
            ref: (y) => {
              v.current = y, typeof d == "function" ? d(y) : d && (d.current = y);
            },
            rows: s,
            disabled: a,
            className: "cr-textarea",
            "aria-invalid": p,
            "aria-describedby": u && g ? g : l["aria-describedby"],
            onInput: k,
            ...l
          }
        )
      }
    );
    return u ? /* @__PURE__ */ m("div", { className: "cr-textarea-field", style: { display: "inline-flex", flexDirection: "column", width: (o == null ? void 0 : o.width) || "100%" }, children: [
      f,
      /* @__PURE__ */ i("span", { id: g, className: "cr-textarea__error-message", role: "alert", style: { color: "var(--cr-danger, #f43f5e)", fontSize: "0.8125rem", marginTop: "0.25rem" }, children: u })
    ] }) : f;
  }
);
Ut.displayName = "TextArea";
const Gt = A(
  ({
    size: e = "md",
    options: r = [],
    placeholder: t,
    error: n,
    disabled: a,
    className: s = "",
    children: o,
    ...c
  }, l) => {
    const d = !!n, p = typeof n == "string" ? n : void 0, u = c.id ? `${c.id}-error` : void 0, v = c.value === void 0 ? c.defaultValue !== void 0 ? c.defaultValue : t ? "" : void 0 : void 0, g = /* @__PURE__ */ m(
      "div",
      {
        className: N(
          "cr-select-wrapper",
          `cr-select-wrapper--${e}`,
          d && "has-error",
          a && "is-disabled",
          s
        ),
        children: [
          /* @__PURE__ */ m(
            "select",
            {
              ref: l,
              disabled: a,
              className: "cr-select",
              defaultValue: v,
              "aria-invalid": d,
              "aria-describedby": p && u ? u : c["aria-describedby"],
              ...c,
              children: [
                t && /* @__PURE__ */ i("option", { value: "", disabled: !0, hidden: !0, children: t }),
                r.length > 0 ? r.map((x) => /* @__PURE__ */ i("option", { value: x.value, disabled: x.disabled, children: x.label }, x.value)) : o
              ]
            }
          ),
          /* @__PURE__ */ i("span", { className: "cr-select__arrow", "aria-hidden": "true", children: /* @__PURE__ */ i(_t, { size: 16 }) })
        ]
      }
    );
    return p ? /* @__PURE__ */ m("div", { className: "cr-select-field", style: { display: "inline-flex", flexDirection: "column", width: "100%" }, children: [
      g,
      /* @__PURE__ */ i("span", { id: u, className: "cr-select__error-message", role: "alert", style: { color: "var(--cr-danger, #f43f5e)", fontSize: "0.8125rem", marginTop: "0.25rem" }, children: p })
    ] }) : g;
  }
);
Gt.displayName = "Select";
const rn = A(
  ({ size: e = "md", label: r, description: t, error: n, disabled: a, className: s = "", checked: o, ...c }, l) => /* @__PURE__ */ m(
    "label",
    {
      className: N(
        "cr-checkbox-label",
        `cr-checkbox--${e}`,
        a && "is-disabled",
        !!n && "has-error",
        s
      ),
      children: [
        /* @__PURE__ */ m("span", { className: "cr-checkbox__box-container", children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: l,
              type: "checkbox",
              disabled: a,
              checked: o,
              className: "cr-checkbox__input",
              ...c
            }
          ),
          /* @__PURE__ */ i("span", { className: "cr-checkbox__indicator", children: /* @__PURE__ */ i(Nt, { className: "cr-checkbox__check-icon", size: 14, strokeWidth: 3 }) })
        ] }),
        (r || t) && /* @__PURE__ */ m("span", { className: "cr-checkbox__text-wrapper", children: [
          r && /* @__PURE__ */ i("span", { className: "cr-checkbox__label-text", children: r }),
          t && /* @__PURE__ */ i("span", { className: "cr-checkbox__desc", children: t })
        ] })
      ]
    }
  )
);
rn.displayName = "Checkbox";
const nn = A(
  ({ size: e = "md", label: r, description: t, error: n, disabled: a, className: s = "", checked: o, ...c }, l) => /* @__PURE__ */ m(
    "label",
    {
      className: N(
        "cr-radio-label",
        `cr-radio--${e}`,
        a && "is-disabled",
        !!n && "has-error",
        s
      ),
      children: [
        /* @__PURE__ */ m("span", { className: "cr-radio__box-container", children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: l,
              type: "radio",
              disabled: a,
              checked: o,
              className: "cr-radio__input",
              ...c
            }
          ),
          /* @__PURE__ */ i("span", { className: "cr-radio__indicator", children: /* @__PURE__ */ i("span", { className: "cr-radio__dot" }) })
        ] }),
        (r || t) && /* @__PURE__ */ m("span", { className: "cr-radio__text-wrapper", children: [
          r && /* @__PURE__ */ i("span", { className: "cr-radio__label-text", children: r }),
          t && /* @__PURE__ */ i("span", { className: "cr-radio__desc", children: t })
        ] })
      ]
    }
  )
);
nn.displayName = "Radio";
const an = A(
  ({ size: e = "md", label: r, description: t, disabled: n, className: a = "", checked: s, ...o }, c) => /* @__PURE__ */ m(
    "label",
    {
      className: N(
        "cr-switch-label",
        `cr-switch--${e}`,
        n && "is-disabled",
        a
      ),
      children: [
        /* @__PURE__ */ m("span", { className: "cr-switch__track", children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: c,
              type: "checkbox",
              role: "switch",
              disabled: n,
              checked: s,
              className: "cr-switch__input",
              ...o
            }
          ),
          /* @__PURE__ */ i("span", { className: "cr-switch__thumb" })
        ] }),
        (r || t) && /* @__PURE__ */ m("span", { className: "cr-switch__text-wrapper", children: [
          r && /* @__PURE__ */ i("span", { className: "cr-switch__label-text", children: r }),
          t && /* @__PURE__ */ i("span", { className: "cr-switch__desc", children: t })
        ] })
      ]
    }
  )
);
an.displayName = "Switch";
const sn = A(
  ({ size: e = "md", min: r = 0, max: t = 100, step: n = 1, showValue: a = !1, value: s, disabled: o, className: c = "", ...l }, d) => /* @__PURE__ */ m("div", { className: N("cr-slider-container", `cr-slider--${e}`, o && "is-disabled", c), children: [
    /* @__PURE__ */ i(
      "input",
      {
        ref: d,
        type: "range",
        min: r,
        max: t,
        step: n,
        value: s,
        disabled: o,
        className: "cr-slider",
        ...l
      }
    ),
    a && /* @__PURE__ */ i("span", { className: "cr-slider__value", children: s ?? r })
  ] })
);
sn.displayName = "Slider";
const on = A(
  ({ minDate: e, maxDate: r, leftIcon: t = /* @__PURE__ */ i(Lr, { size: 16 }), ...n }, a) => /* @__PURE__ */ i(
    pe,
    {
      ref: a,
      type: "date",
      min: e,
      max: r,
      leftIcon: t,
      ...n
    }
  )
);
on.displayName = "DatePicker";
const cn = A(
  ({
    title: e = "Click or drag files here to upload",
    subtitle: r = "SVG, PNG, JPG, or PDF (up to 10MB)",
    maxSizeMb: t = 10,
    onFilesSelected: n,
    disabled: a,
    className: s = "",
    ...o
  }, c) => {
    const [l, d] = _(!1), [p, u] = _(null), v = D(null), g = (y) => {
      y.preventDefault(), a || d(!0);
    }, x = (y) => {
      y.preventDefault(), d(!1);
    }, k = (y) => {
      y.preventDefault(), d(!1), !a && y.dataTransfer.files && y.dataTransfer.files.length > 0 && (u(y.dataTransfer.files[0].name), n == null || n(y.dataTransfer.files));
    }, f = (y) => {
      var h;
      y.target.files && y.target.files.length > 0 && (u(y.target.files[0].name), n == null || n(y.target.files)), (h = o.onChange) == null || h.call(o, y);
    };
    return /* @__PURE__ */ m(
      "div",
      {
        className: N(
          "cr-file-upload",
          l && "is-dragging",
          a && "is-disabled",
          p && "has-file",
          s
        ),
        onDragOver: g,
        onDragLeave: x,
        onDrop: k,
        onClick: () => {
          var y;
          return (y = v.current) == null ? void 0 : y.click();
        },
        children: [
          /* @__PURE__ */ i(
            "input",
            {
              ref: (y) => {
                v.current = y, typeof c == "function" ? c(y) : c && (c.current = y);
              },
              type: "file",
              disabled: a,
              onChange: f,
              className: "cr-file-upload__input",
              ...o
            }
          ),
          /* @__PURE__ */ i("div", { className: "cr-file-upload__icon-wrapper", children: p ? /* @__PURE__ */ i(ft, { size: 32, className: "cr-text-success" }) : /* @__PURE__ */ i(Mr, { size: 32 }) }),
          /* @__PURE__ */ m("div", { className: "cr-file-upload__text", children: [
            /* @__PURE__ */ i("p", { className: "cr-file-upload__title", children: p || e }),
            /* @__PURE__ */ i("p", { className: "cr-file-upload__subtitle", children: r })
          ] })
        ]
      }
    );
  }
);
cn.displayName = "FileUpload";
const De = A(
  ({
    size: e = "md",
    shortcutBadge: r,
    debounceMs: t = 300,
    onSearch: n,
    onChange: a,
    onClear: s,
    fullWidth: o = !1,
    placeholder: c = "Search...",
    className: l = "",
    style: d,
    value: p,
    defaultValue: u = "",
    disabled: v,
    ...g
  }, x) => {
    const k = p !== void 0, [f, y] = _(String(u || "")), h = k ? String(p) : f, b = D(null);
    kr(x, () => b.current);
    const w = D(null), $ = (C) => {
      const R = C.target.value;
      k || y(R), a == null || a(R, C), n && (w.current && clearTimeout(w.current), w.current = setTimeout(() => {
        n(R);
      }, t));
    }, I = () => {
      var C;
      k || y(""), s == null || s(), n == null || n(""), (C = b.current) == null || C.focus();
    }, M = (C) => {
      C.key === "Escape" ? I() : C.key === "Enter" && (w.current && clearTimeout(w.current), n == null || n(h));
    }, S = {
      xs: "28px",
      sm: "32px",
      md: "40px",
      lg: "48px",
      xl: "56px"
    }, T = {
      xs: "0.75rem",
      sm: "0.8125rem",
      md: "0.9375rem",
      lg: "1.0625rem",
      xl: "1.125rem"
    };
    return /* @__PURE__ */ m(
      "div",
      {
        className: N(
          "cr-search-input-wrapper",
          `cr-search-input--${e}`,
          o && "is-full-width",
          v && "is-disabled",
          l
        ),
        style: {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          width: o ? "100%" : "280px",
          ...d
        },
        children: [
          /* @__PURE__ */ i(
            "span",
            {
              style: {
                position: "absolute",
                left: "12px",
                color: "var(--cr-text-muted)",
                display: "flex",
                alignItems: "center",
                pointerEvents: "none"
              },
              "aria-hidden": "true",
              children: /* @__PURE__ */ m("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ i("circle", { cx: "11", cy: "11", r: "8" }),
                /* @__PURE__ */ i("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
              ] })
            }
          ),
          /* @__PURE__ */ i(
            "input",
            {
              ref: b,
              type: "search",
              role: "searchbox",
              "aria-label": c,
              placeholder: c,
              value: h,
              disabled: v,
              onChange: $,
              onKeyDown: M,
              style: {
                width: "100%",
                height: S[e],
                fontSize: T[e],
                paddingLeft: "36px",
                paddingRight: h ? "64px" : r ? "48px" : "16px",
                background: "var(--cr-bg-surface)",
                color: "var(--cr-text-primary)",
                border: "1px solid var(--cr-border-subtle)",
                borderRadius: "var(--cr-radius-md)",
                outline: "none",
                transition: "border-color var(--cr-transition-fast), box-shadow var(--cr-transition-fast)"
              },
              ...g
            }
          ),
          h && !v && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: I,
              "aria-label": "Clear search",
              style: {
                position: "absolute",
                right: r ? "44px" : "12px",
                background: "transparent",
                border: "none",
                color: "var(--cr-text-muted)",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                borderRadius: "var(--cr-radius-sm)"
              },
              children: /* @__PURE__ */ m("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ i("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ i("line", { x1: "6", y1: "6", x2: "18", y2: "6" })
              ] })
            }
          ),
          r && /* @__PURE__ */ i(
            "span",
            {
              style: {
                position: "absolute",
                right: "10px",
                padding: "2px 6px",
                fontSize: "0.6875rem",
                fontWeight: 600,
                color: "var(--cr-text-muted)",
                background: "var(--cr-bg-page)",
                border: "1px solid var(--cr-border-subtle)",
                borderRadius: "var(--cr-radius-sm)",
                pointerEvents: "none"
              },
              children: r
            }
          )
        ]
      }
    );
  }
);
De.displayName = "BaseSearchInput";
function te(e) {
  const r = E.createElement(De, e);
  return F(r, {
    width: (t) => te({ ...e, style: { ...e.style, width: t } }),
    shortcut: (t) => te({ ...e, shortcutBadge: t }),
    onSearch: (t) => te({ ...e, onSearch: t }),
    small: () => te({ ...e, size: "sm" }),
    large: () => te({ ...e, size: "lg" }),
    fullWidth: () => te({ ...e, fullWidth: !0 })
  });
}
function ln(...e) {
  if (typeof e[0] == "string" || e.length === 0) {
    const n = e[0] || "Search...";
    let a, s, o;
    for (let c = 1; c < e.length; c++) {
      const l = e[c];
      typeof l == "function" ? s = l : typeof l == "string" && (l.includes("px") || l.includes("%") || l.includes("rem") ? o = l : a = l);
    }
    return te({
      placeholder: n,
      shortcutBadge: a,
      onSearch: s,
      style: o ? { width: o } : void 0
    });
  }
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(De, { ref: r, ...t });
}
ln.displayName = "SearchInput";
const Be = A(
  ({
    length: e = 6,
    value: r,
    onChange: t,
    onComplete: n,
    masked: a = !1,
    disabled: s = !1,
    autoFocus: o = !1,
    className: c = "",
    style: l
  }, d) => {
    const p = r !== void 0, [u, v] = _(
      Array.from({ length: e }, (b, w) => r && r[w] || "")
    );
    E.useEffect(() => {
      v((b) => b.length === e ? b : Array.from({ length: e }, (w, $) => b[$] || ""));
    }, [e]);
    const g = p ? Array.from({ length: e }, (b, w) => (r == null ? void 0 : r[w]) || "") : u, x = D([]), k = (b) => {
      p || v(b);
      const w = b.join("");
      t == null || t(w), w.length === e && !b.includes("") && (n == null || n(w));
    }, f = (b, w) => {
      var S;
      const I = w.target.value.slice(-1);
      if (I && !/^\d$/.test(I)) return;
      const M = [...g];
      M[b] = I, k(M), I && b < e - 1 && ((S = x.current[b + 1]) == null || S.focus());
    }, y = (b, w) => {
      var $, I, M;
      if (w.key === "Backspace")
        if (!g[b] && b > 0) {
          const S = [...g];
          S[b - 1] = "", k(S), ($ = x.current[b - 1]) == null || $.focus();
        } else {
          const S = [...g];
          S[b] = "", k(S);
        }
      else w.key === "ArrowLeft" && b > 0 ? (I = x.current[b - 1]) == null || I.focus() : w.key === "ArrowRight" && b < e - 1 && ((M = x.current[b + 1]) == null || M.focus());
    }, h = (b) => {
      var S;
      b.preventDefault();
      const w = b.clipboardData.getData("text/plain").trim();
      if (!/^\d+$/.test(w)) return;
      const $ = w.slice(0, e).split(""), I = Array.from({ length: e }, (T, C) => $[C] || "");
      k(I);
      const M = Math.min($.length, e - 1);
      (S = x.current[M]) == null || S.focus();
    };
    return /* @__PURE__ */ i(
      "div",
      {
        ref: d,
        className: N("cr-otp-input", c),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          ...l
        },
        children: Array.from({ length: e }).map((b, w) => /* @__PURE__ */ i(
          "input",
          {
            ref: ($) => x.current[w] = $,
            type: a ? "password" : "text",
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 1,
            value: g[w] || "",
            disabled: s,
            autoFocus: o && w === 0,
            "aria-label": `Digit ${w + 1} of ${e}`,
            onChange: ($) => f(w, $),
            onKeyDown: ($) => y(w, $),
            onPaste: h,
            style: {
              width: "44px",
              height: "52px",
              fontSize: "1.25rem",
              fontWeight: 700,
              textAlign: "center",
              color: "var(--cr-text-primary)",
              background: "var(--cr-bg-surface)",
              border: `2px solid ${g[w] ? "var(--cr-primary)" : "var(--cr-border-subtle)"}`,
              borderRadius: "var(--cr-radius-md)",
              outline: "none",
              transition: "border-color var(--cr-transition-fast), box-shadow var(--cr-transition-fast)"
            }
          },
          w
        ))
      }
    );
  }
);
Be.displayName = "BaseOTPInput";
function ue(e) {
  const r = E.createElement(Be, e);
  return F(r, {
    masked: (t = !0) => ue({ ...e, masked: t }),
    disabled: (t = !0) => ue({ ...e, disabled: t }),
    onComplete: (t) => ue({ ...e, onComplete: t }),
    onChange: (t) => ue({ ...e, onChange: t })
  });
}
function dn(...e) {
  if (typeof e[0] == "number" || e.length === 0) {
    const n = typeof e[0] == "number" ? e[0] : 6;
    let a, s = !1;
    for (let o = 1; o < e.length; o++) {
      const c = e[o];
      typeof c == "function" ? a = c : (c === "masked" || c === !0) && (s = !0);
    }
    return ue({ length: n, onComplete: a, masked: s });
  }
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(Be, { ref: r, ...t });
}
dn.displayName = "OTPInput";
const Oe = A(
  ({
    max: e = 5,
    value: r,
    defaultValue: t = 0,
    onChange: n,
    readOnly: a = !1,
    disabled: s = !1,
    size: o = "md",
    allowHalf: c = !1,
    color: l = "#f59e0b",
    // Amber gold
    emptyColor: d = "var(--cr-border-subtle)",
    className: p = "",
    style: u
  }, v) => {
    const g = r !== void 0, [x, k] = _(t), [f, y] = _(null), h = g ? r : x, b = f !== null ? f : h, w = (S) => {
      a || s || (g || k(S), n == null || n(S));
    }, $ = (S) => {
      if (!(a || s)) {
        if (S.key === "ArrowRight" || S.key === "ArrowUp") {
          S.preventDefault();
          const T = Math.min(e, h + (c ? 0.5 : 1));
          w(T);
        } else if (S.key === "ArrowLeft" || S.key === "ArrowDown") {
          S.preventDefault();
          const T = Math.max(0, h - (c ? 0.5 : 1));
          w(T);
        }
      }
    }, M = {
      xs: 12,
      sm: 16,
      md: 22,
      lg: 30,
      xl: 38
    }[o] || 22;
    return /* @__PURE__ */ i(
      "div",
      {
        ref: v,
        role: a ? "img" : "slider",
        "aria-label": `Rating: ${h} out of ${e} stars`,
        "aria-valuenow": h,
        "aria-valuemin": 0,
        "aria-valuemax": e,
        tabIndex: a || s ? -1 : 0,
        onKeyDown: $,
        className: N(
          "cr-rating",
          `cr-rating--${o}`,
          a && "is-readonly",
          s && "is-disabled",
          p
        ),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          cursor: a || s ? "default" : "pointer",
          outline: "none",
          ...u
        },
        children: Array.from({ length: e }).map((S, T) => {
          const C = T + 1, R = b >= C, O = !R && b >= C - 0.5;
          return /* @__PURE__ */ i(
            "span",
            {
              onClick: () => w(C),
              onMouseEnter: () => !a && !s && y(C),
              onMouseLeave: () => !a && !s && y(null),
              style: {
                display: "inline-flex",
                color: R || O ? l : d,
                transition: "transform 100ms ease",
                transform: f === C ? "scale(1.15)" : "scale(1)"
              },
              children: /* @__PURE__ */ i(
                "svg",
                {
                  width: M,
                  height: M,
                  viewBox: "0 0 24 24",
                  fill: R || O ? "currentColor" : "none",
                  stroke: "currentColor",
                  strokeWidth: R ? "0" : "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: /* @__PURE__ */ i("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
                }
              )
            },
            T
          );
        })
      }
    );
  }
);
Oe.displayName = "BaseRating";
function re(e) {
  const r = E.createElement(Oe, e);
  return F(r, {
    readOnly: (t = !0) => re({ ...e, readOnly: t }),
    size: (t) => re({ ...e, size: t }),
    onChange: (t) => re({ ...e, onChange: t }),
    color: (t) => re({ ...e, color: t }),
    small: () => re({ ...e, size: "sm" }),
    large: () => re({ ...e, size: "lg" })
  });
}
function un(...e) {
  if (typeof e[0] == "number" || e.length === 0) {
    const n = typeof e[0] == "number" ? e[0] : 5;
    let a = !1, s = "md", o;
    for (let c = 1; c < e.length; c++) {
      const l = e[c];
      typeof l == "function" ? o = l : l === "readOnly" || l === !0 ? a = !0 : (l === "sm" || l === "md" || l === "lg") && (s = l);
    }
    return re({ value: n, readOnly: a, size: s, onChange: o });
  }
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(Oe, { ref: r, ...t });
}
un.displayName = "Rating";
const Pe = A(
  ({
    options: e = [],
    value: r,
    defaultValue: t = "",
    onChange: n,
    placeholder: a = "Select or search...",
    size: s = "md",
    disabled: o = !1,
    className: c = "",
    style: l,
    onSearch: d,
    loading: p = !1,
    emptyText: u = "No options found"
  }, v) => {
    var tt;
    const g = r !== void 0, [x, k] = _(t), f = g ? r : x, [y, h] = _(!1), [b, w] = _(""), [$, I] = _(0), [M, S] = _([]), [T, C] = _(!1), [R, O] = _(null), V = D(0), U = D(null), he = D(null), we = e.map(
      (z) => typeof z == "string" ? { label: z, value: z } : z
    ), ce = d ? M : we, Q = d ? ce : ce.filter(
      (z) => z.label.toLowerCase().includes(b.toLowerCase())
    ), ge = p || T;
    B(() => {
      if (!d) return;
      const z = ++V.current;
      C(!0), O(null);
      const K = setTimeout(() => {
        d(b).then((G) => {
          if (z === V.current) {
            const Ne = G.map(
              (ye) => typeof ye == "string" ? { label: ye, value: ye } : ye
            );
            S(Ne), C(!1);
          }
        }).catch((G) => {
          z === V.current && (O((G == null ? void 0 : G.message) || "Search failed"), C(!1));
        });
      }, 150);
      return () => clearTimeout(K);
    }, [b, d]), B(() => {
      const z = (K) => {
        U.current && !U.current.contains(K.target) && h(!1);
      };
      return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
    }, []);
    const L = (z) => {
      z.disabled || (g || k(z.value), n == null || n(z.value), w(""), h(!1));
    }, H = (z) => {
      if (!y && (z.key === "ArrowDown" || z.key === "Enter")) {
        h(!0);
        return;
      }
      z.key === "ArrowDown" ? (z.preventDefault(), I((K) => (K + 1) % Math.max(1, Q.length))) : z.key === "ArrowUp" ? (z.preventDefault(), I((K) => (K - 1 + Q.length) % Math.max(1, Q.length))) : z.key === "Enter" ? (z.preventDefault(), Q[$] && L(Q[$])) : z.key === "Escape" && h(!1);
    }, j = {
      xs: "28px",
      sm: "32px",
      md: "40px",
      lg: "48px",
      xl: "56px"
    }, q = {
      xs: "0.75rem",
      sm: "0.8125rem",
      md: "0.9375rem",
      lg: "1.0625rem",
      xl: "1.125rem"
    }, ee = ((tt = ce.find((z) => z.value === f)) == null ? void 0 : tt.label) || "";
    return /* @__PURE__ */ m(
      "div",
      {
        ref: U,
        className: N("cr-combobox", `cr-combobox--${s}`, c),
        style: {
          position: "relative",
          width: "100%",
          maxWidth: "320px",
          ...l
        },
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              style: {
                position: "relative",
                display: "flex",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ i(
                  "input",
                  {
                    ref: he,
                    type: "text",
                    role: "combobox",
                    "aria-expanded": y,
                    "aria-autocomplete": "list",
                    disabled: o,
                    placeholder: y ? "Type to search..." : ee || a,
                    value: y ? b : ee,
                    onChange: (z) => {
                      w(z.target.value), I(0), y || h(!0);
                    },
                    onFocus: () => {
                      o || h(!0);
                    },
                    onKeyDown: H,
                    style: {
                      width: "100%",
                      height: j[s],
                      fontSize: q[s],
                      paddingLeft: "12px",
                      paddingRight: "36px",
                      backgroundColor: "var(--cr-bg-surface)",
                      color: "var(--cr-text-primary)",
                      border: `1px solid ${y ? "var(--cr-primary)" : "var(--cr-border-subtle)"}`,
                      borderRadius: "var(--cr-radius-md)",
                      outline: "none",
                      cursor: o ? "not-allowed" : "pointer"
                    }
                  }
                ),
                /* @__PURE__ */ i(
                  "span",
                  {
                    onClick: () => !o && h(!y),
                    style: {
                      position: "absolute",
                      right: "12px",
                      color: "var(--cr-text-muted)",
                      pointerEvents: "none",
                      display: "flex",
                      alignItems: "center",
                      transform: y ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform var(--cr-transition-fast)"
                    },
                    children: ge ? /* @__PURE__ */ i("span", { className: "cr-spinner cr-spinner--xs", style: { width: 14, height: 14 } }) : /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ i("polyline", { points: "6 9 12 15 18 9" }) })
                  }
                )
              ]
            }
          ),
          y && /* @__PURE__ */ i(
            "div",
            {
              role: "listbox",
              className: "cr-scrollbar",
              style: {
                position: "absolute",
                top: "calc(100% + 4px)",
                left: 0,
                right: 0,
                backgroundColor: "var(--cr-bg-surface)",
                border: "1px solid var(--cr-border-subtle)",
                borderRadius: "var(--cr-radius-md)",
                boxShadow: "var(--cr-shadow-lg)",
                maxHeight: "220px",
                overflowY: "auto",
                zIndex: 999,
                padding: "4px"
              },
              children: ge ? /* @__PURE__ */ m("div", { style: { padding: "8px 12px", fontSize: "0.875rem", color: "var(--cr-text-muted)", display: "flex", alignItems: "center", gap: "8px" }, children: [
                /* @__PURE__ */ i("span", { className: "cr-spinner cr-spinner--xs", style: { width: 14, height: 14 } }),
                " Loading options..."
              ] }) : R ? /* @__PURE__ */ i("div", { style: { padding: "8px 12px", fontSize: "0.875rem", color: "var(--cr-danger, #f43f5e)" }, children: R }) : Q.length === 0 ? /* @__PURE__ */ i("div", { style: { padding: "8px 12px", fontSize: "0.875rem", color: "var(--cr-text-muted)" }, children: u }) : Q.map((z, K) => {
                const G = z.value === f, Ne = K === $;
                return /* @__PURE__ */ m(
                  "div",
                  {
                    role: "option",
                    "aria-selected": G,
                    onClick: () => L(z),
                    onMouseEnter: () => I(K),
                    style: {
                      padding: "8px 12px",
                      fontSize: q[s],
                      borderRadius: "var(--cr-radius-sm)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: z.disabled ? "not-allowed" : "pointer",
                      backgroundColor: Ne ? "var(--cr-primary-subtle)" : G ? "var(--cr-bg-surface-hover)" : "transparent",
                      color: G ? "var(--cr-primary)" : z.disabled ? "var(--cr-text-muted)" : "var(--cr-text-primary)",
                      fontWeight: G ? 600 : 400
                    },
                    children: [
                      /* @__PURE__ */ i("span", { children: z.label }),
                      G && /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ i("polyline", { points: "20 6 9 17 4 12" }) })
                    ]
                  },
                  z.value
                );
              })
            }
          )
        ]
      }
    );
  }
);
Pe.displayName = "BaseCombobox";
function Ce(e) {
  const r = E.createElement(Pe, e);
  return F(r, {
    onChange: (t) => Ce({ ...e, onChange: t }),
    placeholder: (t) => Ce({ ...e, placeholder: t })
  });
}
function mn(...e) {
  if (Array.isArray(e[0]))
    return Ce({ options: e[0], placeholder: e[1] });
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(Pe, { ref: r, ...t });
}
mn.displayName = "Combobox";
const We = A(
  ({
    options: e = [],
    value: r,
    defaultValue: t = [],
    onChange: n,
    placeholder: a = "Select options...",
    size: s = "md",
    disabled: o = !1,
    className: c = "",
    style: l,
    onSearch: d,
    loading: p = !1,
    emptyText: u = "No options found"
  }, v) => {
    const g = r !== void 0, [x, k] = _(t), f = g ? r : x, [y, h] = _(!1), [b, w] = _(""), [$, I] = _([]), [M, S] = _(!1), [T, C] = _(null), R = D(0), O = D(null), V = e.map(
      (L) => typeof L == "string" ? { label: L, value: L } : L
    ), U = d ? $ : V, he = d ? U : U.filter(
      (L) => L.label.toLowerCase().includes(b.toLowerCase())
    ), we = p || M;
    B(() => {
      if (!d) return;
      const L = ++R.current;
      S(!0), C(null);
      const H = setTimeout(() => {
        d(b).then((j) => {
          if (L === R.current) {
            const q = j.map(
              (ee) => typeof ee == "string" ? { label: ee, value: ee } : ee
            );
            I(q), S(!1);
          }
        }).catch((j) => {
          L === R.current && (C((j == null ? void 0 : j.message) || "Search failed"), S(!1));
        });
      }, 150);
      return () => clearTimeout(H);
    }, [b, d]), B(() => {
      const L = (H) => {
        O.current && !O.current.contains(H.target) && h(!1);
      };
      return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
    }, []);
    const ce = (L) => {
      const j = f.includes(L) ? f.filter((q) => q !== L) : [...f, L];
      g || k(j), n == null || n(j);
    }, Q = (L, H) => {
      H.stopPropagation();
      const j = f.filter((q) => q !== L);
      g || k(j), n == null || n(j);
    }, ge = (L) => {
      L.stopPropagation(), g || k([]), n == null || n([]);
    };
    return /* @__PURE__ */ m(
      "div",
      {
        ref: O,
        className: N("cr-multiselect", `cr-multiselect--${s}`, c),
        style: {
          position: "relative",
          width: "100%",
          maxWidth: "360px",
          ...l
        },
        children: [
          /* @__PURE__ */ m(
            "div",
            {
              onClick: () => !o && h(!y),
              style: {
                minHeight: "42px",
                padding: "4px 36px 4px 8px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "4px",
                backgroundColor: "var(--cr-bg-surface)",
                border: `1px solid ${y ? "var(--cr-primary)" : "var(--cr-border-subtle)"}`,
                borderRadius: "var(--cr-radius-md)",
                cursor: o ? "not-allowed" : "pointer",
                position: "relative"
              },
              children: [
                f.length === 0 ? /* @__PURE__ */ i("span", { style: { fontSize: "0.875rem", color: "var(--cr-text-muted)", paddingLeft: "4px" }, children: a }) : f.map((L) => {
                  var j;
                  const H = ((j = U.find((q) => q.value === L)) == null ? void 0 : j.label) || L;
                  return /* @__PURE__ */ m(
                    "span",
                    {
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "2px 8px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        backgroundColor: "var(--cr-primary-subtle)",
                        color: "var(--cr-primary-text)",
                        borderRadius: "var(--cr-radius-sm)"
                      },
                      children: [
                        H,
                        /* @__PURE__ */ i(
                          "span",
                          {
                            onClick: (q) => Q(L, q),
                            style: { cursor: "pointer", display: "flex", alignItems: "center" },
                            children: "×"
                          }
                        )
                      ]
                    },
                    L
                  );
                }),
                /* @__PURE__ */ m(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      right: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    },
                    children: [
                      f.length > 0 && !o && /* @__PURE__ */ i(
                        "span",
                        {
                          onClick: ge,
                          style: {
                            color: "var(--cr-text-muted)",
                            fontSize: "1rem",
                            cursor: "pointer",
                            padding: "2px"
                          },
                          children: "×"
                        }
                      ),
                      /* @__PURE__ */ i(
                        "svg",
                        {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          style: {
                            color: "var(--cr-text-muted)",
                            transform: y ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform var(--cr-transition-fast)"
                          },
                          children: /* @__PURE__ */ i("polyline", { points: "6 9 12 15 18 9" })
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          y && /* @__PURE__ */ m(
            "div",
            {
              className: "cr-scrollbar",
              style: {
                position: "absolute",
                top: "calc(100% + 4px)",
                left: 0,
                right: 0,
                backgroundColor: "var(--cr-bg-surface)",
                border: "1px solid var(--cr-border-subtle)",
                borderRadius: "var(--cr-radius-md)",
                boxShadow: "var(--cr-shadow-lg)",
                maxHeight: "220px",
                overflowY: "auto",
                zIndex: 999,
                padding: "4px"
              },
              children: [
                /* @__PURE__ */ i(
                  "input",
                  {
                    type: "text",
                    placeholder: "Filter options...",
                    value: b,
                    onChange: (L) => w(L.target.value),
                    onClick: (L) => L.stopPropagation(),
                    style: {
                      width: "100%",
                      padding: "6px 8px",
                      fontSize: "0.8125rem",
                      border: "1px solid var(--cr-border-subtle)",
                      borderRadius: "var(--cr-radius-sm)",
                      backgroundColor: "var(--cr-bg-page)",
                      color: "var(--cr-text-primary)",
                      marginBottom: "4px",
                      outline: "none"
                    }
                  }
                ),
                we ? /* @__PURE__ */ m("div", { style: { padding: "8px 12px", fontSize: "0.875rem", color: "var(--cr-text-muted)", display: "flex", alignItems: "center", gap: "8px" }, children: [
                  /* @__PURE__ */ i("span", { className: "cr-spinner cr-spinner--xs", style: { width: 14, height: 14 } }),
                  " Loading options..."
                ] }) : T ? /* @__PURE__ */ i("div", { style: { padding: "8px 12px", fontSize: "0.875rem", color: "var(--cr-danger, #f43f5e)" }, children: T }) : he.length === 0 ? /* @__PURE__ */ i("div", { style: { padding: "8px 12px", fontSize: "0.875rem", color: "var(--cr-text-muted)" }, children: u }) : he.map((L) => {
                  const H = f.includes(L.value);
                  return /* @__PURE__ */ m(
                    "div",
                    {
                      onClick: () => ce(L.value),
                      style: {
                        padding: "6px 10px",
                        fontSize: "0.875rem",
                        borderRadius: "var(--cr-radius-sm)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        backgroundColor: H ? "var(--cr-primary-subtle)" : "transparent",
                        color: H ? "var(--cr-primary)" : "var(--cr-text-primary)",
                        fontWeight: H ? 600 : 400
                      },
                      children: [
                        /* @__PURE__ */ i("span", { children: L.label }),
                        H && /* @__PURE__ */ i("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ i("polyline", { points: "20 6 9 17 4 12" }) })
                      ]
                    },
                    L.value
                  );
                })
              ]
            }
          )
        ]
      }
    );
  }
);
We.displayName = "BaseMultiSelect";
function Se(e) {
  const r = E.createElement(We, e);
  return F(r, {
    placeholder: (t) => Se({ ...e, placeholder: t }),
    onChange: (t) => Se({ ...e, onChange: t })
  });
}
function fn(...e) {
  if (Array.isArray(e[0]))
    return Se({ options: e[0], placeholder: e[1] });
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(We, { ref: r, ...t });
}
fn.displayName = "MultiSelect";
const pn = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#10b981",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#a855f7",
  "#ec4899",
  "#64748b",
  "#0f172a",
  "#ffffff"
], je = A(
  ({
    value: e,
    defaultValue: r = "#6366f1",
    onChange: t,
    presets: n = pn,
    disabled: a = !1,
    className: s = "",
    style: o
  }, c) => {
    const l = e !== void 0, [d, p] = _(r), u = l ? e : d, [v, g] = _(!1), x = D(null);
    B(() => {
      const f = (y) => {
        x.current && !x.current.contains(y.target) && g(!1);
      };
      return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
    }, []);
    const k = (f) => {
      l || p(f), t == null || t(f);
    };
    return /* @__PURE__ */ m(
      "div",
      {
        ref: x,
        className: N("cr-color-picker", s),
        style: {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          ...o
        },
        children: [
          /* @__PURE__ */ i(
            "div",
            {
              onClick: () => !a && g(!v),
              style: {
                width: "36px",
                height: "36px",
                borderRadius: "var(--cr-radius-md)",
                backgroundColor: u,
                border: "2px solid var(--cr-border-subtle)",
                boxShadow: "var(--cr-shadow-sm)",
                cursor: a ? "not-allowed" : "pointer",
                flexShrink: 0
              },
              title: u
            }
          ),
          /* @__PURE__ */ i(
            "span",
            {
              style: {
                fontSize: "0.875rem",
                fontWeight: 500,
                fontFamily: "var(--cr-font-mono)",
                color: "var(--cr-text-primary)"
              },
              children: u.toUpperCase()
            }
          ),
          v && /* @__PURE__ */ m(
            "div",
            {
              style: {
                position: "absolute",
                top: "calc(100% + 6px)",
                left: 0,
                backgroundColor: "var(--cr-bg-surface)",
                border: "1px solid var(--cr-border-subtle)",
                borderRadius: "var(--cr-radius-md)",
                boxShadow: "var(--cr-shadow-lg)",
                padding: "12px",
                zIndex: 999,
                width: "210px"
              },
              children: [
                /* @__PURE__ */ i("div", { style: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "6px", marginBottom: "10px" }, children: n.map((f) => /* @__PURE__ */ i(
                  "div",
                  {
                    onClick: () => k(f),
                    style: {
                      width: "24px",
                      height: "24px",
                      borderRadius: "var(--cr-radius-sm)",
                      backgroundColor: f,
                      cursor: "pointer",
                      border: f === u ? "2px solid var(--cr-primary)" : "1px solid var(--cr-border-subtle)",
                      boxShadow: f === u ? "var(--cr-primary-glow)" : "none"
                    },
                    title: f
                  },
                  f
                )) }),
                /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                  /* @__PURE__ */ i(
                    "input",
                    {
                      type: "color",
                      value: u,
                      onChange: (f) => k(f.target.value),
                      style: {
                        width: "28px",
                        height: "28px",
                        padding: 0,
                        border: "none",
                        background: "transparent",
                        cursor: "pointer"
                      }
                    }
                  ),
                  /* @__PURE__ */ i(
                    "input",
                    {
                      type: "text",
                      value: u,
                      onChange: (f) => k(f.target.value),
                      style: {
                        flex: 1,
                        padding: "4px 8px",
                        fontSize: "0.8125rem",
                        fontFamily: "var(--cr-font-mono)",
                        border: "1px solid var(--cr-border-subtle)",
                        borderRadius: "var(--cr-radius-sm)",
                        backgroundColor: "var(--cr-bg-page)",
                        color: "var(--cr-text-primary)",
                        outline: "none"
                      }
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    );
  }
);
je.displayName = "BaseColorPicker";
function Kt(e) {
  const r = E.createElement(je, e);
  return F(r, {
    onChange: (t) => Kt({ ...e, onChange: t })
  });
}
function hn(...e) {
  if (typeof e[0] == "string" || e.length === 0)
    return Kt({
      defaultValue: typeof e[0] == "string" ? e[0] : "#6366f1",
      onChange: typeof e[1] == "function" ? e[1] : void 0
    });
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(je, { ref: r, ...t });
}
hn.displayName = "ColorPicker";
const gn = A(
  ({
    as: e,
    position: r,
    cursor: t,
    padding: n,
    margin: a,
    width: s,
    height: o,
    minWidth: c,
    maxWidth: l,
    minHeight: d,
    maxHeight: p,
    background: u,
    color: v,
    borderColor: g,
    borderWidth: x,
    borderRadius: k,
    display: f,
    className: y = "",
    style: h,
    children: b,
    ...w
  }, $) => {
    const I = e || "div", M = {
      ...h,
      ...r ? { position: r } : {},
      ...t ? { cursor: t } : {},
      ...n !== void 0 ? { padding: n } : {},
      ...a !== void 0 ? { margin: a } : {},
      ...s !== void 0 ? { width: s } : {},
      ...o !== void 0 ? { height: o } : {},
      ...c !== void 0 ? { minWidth: c } : {},
      ...l !== void 0 ? { maxWidth: l } : {},
      ...d !== void 0 ? { minHeight: d } : {},
      ...p !== void 0 ? { maxHeight: p } : {},
      ...u ? { background: u } : {},
      ...v ? { color: v } : {},
      ...g ? { borderColor: g } : {},
      ...x !== void 0 ? { borderWidth: x, borderStyle: "solid" } : {},
      ...k !== void 0 ? { borderRadius: k } : {},
      ...f ? { display: f } : {}
    };
    return /* @__PURE__ */ i(
      I,
      {
        ref: $,
        className: N("cr-box", y),
        style: M,
        ...w,
        children: b
      }
    );
  }
);
gn.displayName = "Box";
const Ee = A(
  ({ maxWidth: e = "xl", center: r = !0, className: t = "", children: n, ...a }, s) => /* @__PURE__ */ i(
    "div",
    {
      ref: s,
      className: N(
        "cr-container",
        `cr-container--${e}`,
        r && "cr-container--centered",
        t
      ),
      ...a,
      children: n
    }
  )
);
Ee.displayName = "BaseContainer";
function fe(e, ...r) {
  if (e && typeof e == "object" && !E.isValidElement(e) && !Array.isArray(e) && ("maxWidth" in e || "center" in e || "children" in e || "className" in e))
    return /* @__PURE__ */ i(Ee, { ...e });
  let t = [];
  Array.isArray(e) ? t = e : e !== void 0 && (t = [e, ...r]);
  const n = E.Children.map(
    t,
    (a, s) => E.isValidElement(a) ? E.cloneElement(a, { key: a.key || `cnt-${s}` }) : a
  );
  return /* @__PURE__ */ i(Ee, { children: n });
}
fe.displayName = "Container";
const Fe = A(
  ({
    direction: e = "row",
    align: r = "stretch",
    justify: t = "start",
    wrap: n = !1,
    gap: a,
    inline: s = !1,
    className: o = "",
    style: c,
    children: l,
    ...d
  }, p) => {
    const u = {
      ...c,
      display: s ? "inline-flex" : "flex",
      flexDirection: e,
      alignItems: r === "start" ? "flex-start" : r === "end" ? "flex-end" : r,
      justifyContent: t === "start" ? "flex-start" : t === "end" ? "flex-end" : t === "between" ? "space-between" : t === "around" ? "space-around" : t === "evenly" ? "space-evenly" : t,
      flexWrap: typeof n == "boolean" ? n ? "wrap" : "nowrap" : n,
      ...a !== void 0 ? { gap: a } : {}
    };
    return /* @__PURE__ */ i("div", { ref: p, className: N("cr-flex", o), style: u, ...d, children: l });
  }
);
Fe.displayName = "BaseFlex";
function yn(e, r, t) {
  const n = (a) => Jt({ ...r, ...a }, t);
  return F(e, {
    center: () => n({ align: "center", justify: "center" }),
    between: () => n({ justify: "between" }),
    around: () => n({ justify: "around" }),
    gap: (a) => n({ gap: a }),
    column: () => n({ direction: "column" }),
    row: () => n({ direction: "row" }),
    wrap: () => n({ wrap: !0 })
  });
}
function Jt(e, r) {
  const t = E.Children.map(
    r,
    (a, s) => E.isValidElement(a) ? E.cloneElement(a, { key: a.key || `flx-${s}` }) : a
  ), n = /* @__PURE__ */ i(Fe, { ...e, children: t });
  return yn(n, e, r);
}
function bn(e, ...r) {
  if (e && typeof e == "object" && !E.isValidElement(e) && !Array.isArray(e) && ("direction" in e || "align" in e || "justify" in e || "gap" in e || "children" in e || "className" in e))
    return /* @__PURE__ */ i(Fe, { ...e });
  let t = [];
  return Array.isArray(e) ? t = e : e !== void 0 && (t = [e, ...r]), Jt({}, t);
}
bn.displayName = "Flex";
const ve = A(
  ({ orientation: e = "horizontal", variant: r = "solid", className: t = "", ...n }, a) => /* @__PURE__ */ i(
    "hr",
    {
      ref: a,
      className: N(
        "cr-divider",
        `cr-divider--${e}`,
        `cr-divider--${r}`,
        t
      ),
      ...n
    }
  )
);
ve.displayName = "BaseDivider";
function vn(e) {
  return typeof e == "string" ? e === "vertical" || e === "horizontal" ? /* @__PURE__ */ i(ve, { orientation: e }) : /* @__PURE__ */ i(ve, { variant: e }) : /* @__PURE__ */ i(ve, { ...e || {} });
}
vn.displayName = "Divider";
function ei({ x: e, y: r }) {
  return /* @__PURE__ */ i(
    "span",
    {
      className: "cr-spacer",
      style: {
        display: "block",
        width: e !== void 0 ? e : "auto",
        height: r !== void 0 ? r : "auto",
        flexShrink: 0
      },
      "aria-hidden": "true"
    }
  );
}
const He = A(
  ({ ratio: e = 16 / 9, className: r = "", style: t, children: n, ...a }, s) => /* @__PURE__ */ i(
    "div",
    {
      ref: s,
      className: N("cr-aspect-ratio", r),
      style: {
        position: "relative",
        width: "100%",
        paddingBottom: `${1 / e * 100}%`,
        overflow: "hidden",
        ...t
      },
      ...a,
      children: /* @__PURE__ */ i(
        "div",
        {
          style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: n
        }
      )
    }
  )
);
He.displayName = "BaseAspectRatio";
function ae(e) {
  const r = E.createElement(He, e);
  return F(r, {
    ratio: (t) => ae({ ...e, ratio: t }),
    square: () => ae({ ...e, ratio: 1 }),
    video: () => ae({ ...e, ratio: 16 / 9 }),
    cinema: () => ae({ ...e, ratio: 21 / 9 }),
    portrait: () => ae({ ...e, ratio: 4 / 5 })
  });
}
function xn(...e) {
  if (typeof e[0] == "number")
    return ae({ ratio: e[0], children: e[1] });
  if (E.isValidElement(e[0]) || Array.isArray(e[0]))
    return ae({ ratio: 16 / 9, children: e[0] });
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(He, { ref: r, ...t });
}
xn.displayName = "AspectRatio";
const Ve = A(
  ({
    maxHeight: e = "300px",
    maxWidth: r = "100%",
    orientation: t = "vertical",
    className: n = "",
    style: a,
    children: s,
    ...o
  }, c) => /* @__PURE__ */ i(
    "div",
    {
      ref: c,
      className: N("cr-scroll-area", "cr-scrollbar", n),
      style: {
        maxHeight: e,
        maxWidth: r,
        overflowY: t === "horizontal" ? "hidden" : "auto",
        overflowX: t === "vertical" ? "hidden" : "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "var(--cr-border-muted) transparent",
        ...a
      },
      ...o,
      children: s
    }
  )
);
Ve.displayName = "BaseScrollArea";
function oe(e) {
  const r = E.createElement(Ve, e);
  return F(r, {
    maxHeight: (t) => oe({ ...e, maxHeight: t }),
    maxWidth: (t) => oe({ ...e, maxWidth: t }),
    horizontal: () => oe({ ...e, orientation: "horizontal" }),
    both: () => oe({ ...e, orientation: "both" })
  });
}
function wn(...e) {
  if (typeof e[0] == "string" || typeof e[0] == "number")
    return oe({ maxHeight: e[0], children: e[1] });
  if (E.isValidElement(e[0]) || Array.isArray(e[0]))
    return oe({ children: e[0] });
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(Ve, { ref: r, ...t });
}
wn.displayName = "ScrollArea";
const qe = A(
  ({
    title: e,
    isOpen: r,
    defaultOpen: t = !1,
    onToggle: n,
    className: a = "",
    style: s,
    children: o,
    ...c
  }, l) => {
    const d = r !== void 0, [p, u] = _(t), v = d ? r : p, g = () => {
      const x = !v;
      d || u(x), n == null || n(x);
    };
    return /* @__PURE__ */ m(
      "div",
      {
        ref: l,
        className: N("cr-collapsible", v && "is-open", a),
        style: {
          border: "1px solid var(--cr-border-subtle)",
          borderRadius: "var(--cr-radius-md)",
          overflow: "hidden",
          backgroundColor: "var(--cr-bg-surface)",
          ...s
        },
        ...c,
        children: [
          e && /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: g,
              "aria-expanded": v,
              style: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.875rem 1rem",
                background: "transparent",
                border: "none",
                color: "var(--cr-text-primary)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                cursor: "pointer",
                textAlign: "left"
              },
              children: [
                /* @__PURE__ */ i("span", { children: e }),
                /* @__PURE__ */ i(
                  "svg",
                  {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    style: {
                      transform: v ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform var(--cr-transition-fast)",
                      color: "var(--cr-text-muted)"
                    },
                    children: /* @__PURE__ */ i("polyline", { points: "6 9 12 15 18 9" })
                  }
                )
              ]
            }
          ),
          v && /* @__PURE__ */ i(
            "div",
            {
              style: {
                padding: "0.875rem 1rem",
                borderTop: e ? "1px solid var(--cr-border-subtle)" : "none",
                color: "var(--cr-text-secondary)",
                fontSize: "0.875rem",
                lineHeight: 1.6
              },
              children: o
            }
          )
        ]
      }
    );
  }
);
qe.displayName = "BaseCollapsible";
function Qt(e) {
  const r = E.createElement(qe, e);
  return F(r, {
    open: (t = !0) => Qt({ ...e, isOpen: t })
  });
}
function Nn(...e) {
  if (typeof e[0] == "string" || E.isValidElement(e[0]))
    return Qt({ title: e[0], children: e[1] });
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(qe, { ref: r, ...t });
}
Nn.displayName = "Collapsible";
const Yt = A(
  ({
    size: e = "md",
    weight: r = "normal",
    color: t = "primary",
    align: n = "left",
    truncate: a = !1,
    as: s = "p",
    className: o = "",
    children: c,
    ...l
  }, d) => /* @__PURE__ */ i(
    s,
    {
      ref: d,
      className: N(
        "cr-text",
        `cr-text--${e}`,
        `cr-text--weight-${r}`,
        `cr-text--color-${t}`,
        `cr-text--align-${n}`,
        a && "cr-text--truncate",
        o
      ),
      ...l,
      children: c
    }
  )
);
Yt.displayName = "BaseText";
function ie(...e) {
  if (typeof e[0] == "string" || Array.isArray(e[0]) && e[0].raw || e.length === 0) {
    const t = ot(e);
    return Ae(t);
  }
  const r = e[0] || {};
  return /* @__PURE__ */ i(Yt, { ...r });
}
ie.displayName = "Text";
ie.create = (e) => Ae(e);
const Zt = A(
  ({ level: e = 2, size: r, weight: t = "bold", gradient: n = !1, className: a = "", children: s, ...o }, c) => {
    const l = `h${e}`;
    return /* @__PURE__ */ i(
      l,
      {
        ref: c,
        className: N(
          "cr-heading",
          `cr-heading--${r || (e === 1 ? "2xl" : e === 2 ? "xl" : e === 3 ? "lg" : "md")}`,
          `cr-heading--weight-${t}`,
          n && "cr-heading--gradient",
          a
        ),
        ...o,
        children: s
      }
    );
  }
);
Zt.displayName = "BaseHeading";
function Ue(...e) {
  if (typeof e[0] == "string" || Array.isArray(e[0]) && e[0].raw || e.length === 0) {
    const t = st(e);
    return $e(t);
  }
  const r = e[0] || {};
  return /* @__PURE__ */ i(Zt, { ...r });
}
Ue.displayName = "Heading";
Ue.create = (e) => $e(e);
const Xt = A(
  ({
    isExternal: e = !1,
    underline: r = "hover",
    color: t = "brand",
    className: n = "",
    children: a,
    target: s,
    rel: o,
    ...c
  }, l) => /* @__PURE__ */ m(
    "a",
    {
      ref: l,
      target: e ? "_blank" : s,
      rel: e ? "noopener noreferrer" : o,
      className: N(
        "cr-link",
        `cr-link--underline-${r}`,
        `cr-link--color-${t}`,
        n
      ),
      ...c,
      children: [
        /* @__PURE__ */ i("span", { className: "cr-link__text", children: a }),
        e && /* @__PURE__ */ i(Dr, { size: 14, className: "cr-link__external-icon" })
      ]
    }
  )
);
Xt.displayName = "BaseLink";
function er(...e) {
  if (typeof e[0] == "string" || Array.isArray(e[0]) && e[0].raw || e.length === 0) {
    const n = lt(e);
    return Te(n);
  }
  const { ref: r, ...t } = e[0] || {};
  return /* @__PURE__ */ i(Xt, { ref: r, ...t });
}
er.displayName = "Link";
er.create = (e) => Te(e);
const kn = A(
  ({ block: e = !1, copyable: r = !1, language: t, className: n = "", children: a, ...s }, o) => {
    const [c, l] = _(!1), d = () => {
      const p = typeof a == "string" ? a : "";
      p && navigator.clipboard && (navigator.clipboard.writeText(p), l(!0), setTimeout(() => l(!1), 2e3));
    };
    return e ? /* @__PURE__ */ m("div", { className: N("cr-code-block", n), children: [
      /* @__PURE__ */ m("div", { className: "cr-code-block__header", children: [
        t && /* @__PURE__ */ i("span", { className: "cr-code-block__lang", children: t }),
        r && /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: "cr-code-block__copy-btn",
            onClick: d,
            "aria-label": c ? "Copied" : "Copy code",
            children: [
              c ? /* @__PURE__ */ i(Nt, { size: 14, className: "cr-text-success" }) : /* @__PURE__ */ i(Rr, { size: 14 }),
              /* @__PURE__ */ i("span", { children: c ? "Copied!" : "Copy" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ i("pre", { className: "cr-code-block__pre", children: /* @__PURE__ */ i("code", { ref: o, className: "cr-code-block__code", ...s, children: a }) })
    ] }) : /* @__PURE__ */ i("code", { ref: o, className: N("cr-code-inline", n), ...s, children: a });
  }
);
kn.displayName = "Code";
const Ge = A(
  ({
    size: e = "md",
    required: r = !1,
    disabled: t = !1,
    optionalText: n,
    className: a = "",
    style: s,
    children: o,
    ...c
  }, l) => /* @__PURE__ */ m(
    "label",
    {
      ref: l,
      className: N(
        "cr-label",
        `cr-label--${e}`,
        r && "is-required",
        t && "is-disabled",
        a
      ),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.25rem",
        fontSize: e === "sm" ? "0.8125rem" : e === "lg" ? "1.0625rem" : "0.9375rem",
        fontWeight: 500,
        color: t ? "var(--cr-text-muted)" : "var(--cr-text-primary)",
        cursor: t ? "not-allowed" : "pointer",
        userSelect: "none",
        ...s
      },
      ...c,
      children: [
        /* @__PURE__ */ i("span", { children: o }),
        r && /* @__PURE__ */ i(
          "span",
          {
            className: "cr-label__required",
            style: { color: "var(--cr-danger)", marginLeft: "0.125rem" },
            "aria-hidden": "true",
            children: "*"
          }
        ),
        n && /* @__PURE__ */ m(
          "span",
          {
            className: "cr-label__optional",
            style: {
              fontSize: "0.75rem",
              color: "var(--cr-text-muted)",
              fontWeight: 400,
              marginLeft: "0.25rem"
            },
            children: [
              "(",
              n,
              ")"
            ]
          }
        )
      ]
    }
  )
);
Ge.displayName = "BaseLabel";
function ne(e) {
  const r = E.createElement(Ge, e);
  return F(r, {
    required: (t = !0) => ne({ ...e, required: t }),
    disabled: (t = !0) => ne({ ...e, disabled: t }),
    for: (t) => ne({ ...e, htmlFor: t }),
    htmlFor: (t) => ne({ ...e, htmlFor: t }),
    small: () => ne({ ...e, size: "sm" }),
    large: () => ne({ ...e, size: "lg" })
  });
}
function _n(...e) {
  if (typeof e[0] == "string" || E.isValidElement(e[0])) {
    const n = e[0];
    let a = !1, s;
    for (let o = 1; o < e.length; o++) {
      const c = e[o];
      if (typeof c == "string") {
        const l = c.trim().toLowerCase();
        l === "required" || l === "*" ? a = !0 : s || (s = c.trim());
      } else typeof c == "boolean" && (a = c);
    }
    return ne({ children: n, required: a, htmlFor: s });
  }
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(Ge, { ref: r, ...t });
}
_n.displayName = "Label";
const tr = A(
  ({ variant: e = "primary", size: r = "sm", pill: t = !0, dot: n = !1, className: a = "", children: s, ...o }, c) => /* @__PURE__ */ m(
    "span",
    {
      ref: c,
      className: N(
        "cr-badge",
        `cr-badge--${e}`,
        `cr-badge--${r}`,
        t && "cr-badge--pill",
        a
      ),
      ...o,
      children: [
        n && /* @__PURE__ */ i("span", { className: "cr-badge__dot" }),
        s
      ]
    }
  )
);
tr.displayName = "BaseBadge";
function rr(...e) {
  if (typeof e[0] == "string" || Array.isArray(e[0]) && e[0].raw || e.length === 0) {
    const t = ct(e);
    return Ie(t);
  }
  const r = e[0] || {};
  return /* @__PURE__ */ i(tr, { ...r });
}
rr.displayName = "Badge";
rr.create = (e) => Ie(e);
const Cn = A(
  ({ src: e, alt: r = "Avatar", name: t, size: n = "md", status: a, className: s = "", ...o }, c) => {
    const [l, d] = _(!1), p = (u) => {
      const v = u.trim().split(" ");
      return v.length >= 2 ? `${v[0][0]}${v[1][0]}`.toUpperCase() : u.slice(0, 2).toUpperCase();
    };
    return /* @__PURE__ */ m(
      "div",
      {
        ref: c,
        className: N("cr-avatar", `cr-avatar--${n}`, s),
        ...o,
        children: [
          e && !l ? /* @__PURE__ */ i(
            "img",
            {
              src: e,
              alt: r,
              className: "cr-avatar__image",
              onError: () => d(!0)
            }
          ) : t ? /* @__PURE__ */ i("span", { className: "cr-avatar__initials", children: p(t) }) : /* @__PURE__ */ i(Ur, { className: "cr-avatar__fallback-icon", size: 18 }),
          a && /* @__PURE__ */ i("span", { className: N("cr-avatar__status", `cr-avatar__status--${a}`) })
        ]
      }
    );
  }
);
Cn.displayName = "Avatar";
const Sn = A(
  ({
    striped: e = !1,
    hoverable: r = !0,
    compact: t = !1,
    className: n = "",
    columns: a,
    data: s,
    emptyText: o = "No data available",
    children: c,
    ...l
  }, d) => {
    const p = Array.isArray(a) && Array.isArray(s);
    return /* @__PURE__ */ i("div", { className: "cr-table-container", children: /* @__PURE__ */ i(
      "table",
      {
        ref: d,
        className: N(
          "cr-table",
          e && "cr-table--striped",
          r && "cr-table--hoverable",
          t && "cr-table--compact",
          n
        ),
        ...l,
        children: p ? /* @__PURE__ */ m(X, { children: [
          /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: a.map((u) => /* @__PURE__ */ i(
            "th",
            {
              style: { textAlign: u.align, width: u.width },
              children: u.header
            },
            u.key
          )) }) }),
          /* @__PURE__ */ i("tbody", { children: s.length === 0 ? /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i(
            "td",
            {
              colSpan: a.length,
              style: {
                textAlign: "center",
                padding: "2rem",
                color: "var(--cr-text-muted)"
              },
              children: o
            }
          ) }) : s.map((u, v) => /* @__PURE__ */ i("tr", { children: a.map((g) => /* @__PURE__ */ i("td", { style: { textAlign: g.align }, children: g.render ? g.render(u, v) : String((u == null ? void 0 : u[g.key]) ?? "") }, g.key)) }, (u == null ? void 0 : u.id) ?? v)) })
        ] }) : c
      }
    ) });
  }
);
Sn.displayName = "Table";
function ti({
  items: e,
  allowMultiple: r = !1,
  defaultExpanded: t = [],
  expandedIds: n,
  onChange: a,
  className: s = ""
}) {
  const o = n !== void 0, [c, l] = _(t), d = o ? n : c, p = (u) => {
    let v;
    d.includes(u) ? v = d.filter((g) => g !== u) : v = r ? [...d, u] : [u], o || l(v), a == null || a(v);
  };
  return /* @__PURE__ */ i("div", { className: N("cr-accordion", s), children: e.map((u) => {
    const v = d.includes(u.id);
    return /* @__PURE__ */ m(
      "div",
      {
        className: N(
          "cr-accordion__item",
          v && "is-expanded",
          u.disabled && "is-disabled"
        ),
        children: [
          /* @__PURE__ */ m(
            "button",
            {
              id: `cr-accordion-header-${u.id}`,
              type: "button",
              className: "cr-accordion__header",
              disabled: u.disabled,
              onClick: () => p(u.id),
              "aria-expanded": v,
              "aria-controls": `cr-accordion-panel-${u.id}`,
              children: [
                /* @__PURE__ */ i("span", { className: "cr-accordion__title", children: u.title }),
                /* @__PURE__ */ i(
                  _t,
                  {
                    className: N(
                      "cr-accordion__chevron",
                      v && "cr-accordion__chevron--expanded"
                    ),
                    size: 18
                  }
                )
              ]
            }
          ),
          v && /* @__PURE__ */ i(
            "div",
            {
              id: `cr-accordion-panel-${u.id}`,
              role: "region",
              "aria-labelledby": `cr-accordion-header-${u.id}`,
              className: "cr-accordion__content cr-animate-fade-in",
              children: u.content
            }
          )
        ]
      },
      u.id
    );
  }) });
}
function ri({
  title: e,
  value: r,
  change: t,
  changePeriod: n = "vs last month",
  icon: a,
  variant: s = "glass",
  className: o = ""
}) {
  const c = t !== void 0 && t >= 0;
  return /* @__PURE__ */ m(yt, { variant: s, className: N("cr-stat-card", o), children: [
    /* @__PURE__ */ m("div", { className: "cr-stat-card__top", children: [
      /* @__PURE__ */ i("span", { className: "cr-stat-card__title", children: e }),
      a && /* @__PURE__ */ i("div", { className: "cr-stat-card__icon", children: a })
    ] }),
    /* @__PURE__ */ i("div", { className: "cr-stat-card__value", children: r }),
    t !== void 0 && /* @__PURE__ */ m("div", { className: "cr-stat-card__trend", children: [
      /* @__PURE__ */ m(
        "span",
        {
          className: N(
            "cr-stat-card__badge",
            c ? "is-positive" : "is-negative"
          ),
          children: [
            c ? /* @__PURE__ */ i(Tr, { size: 14 }) : /* @__PURE__ */ i(Ir, { size: 14 }),
            Math.abs(t),
            "%"
          ]
        }
      ),
      /* @__PURE__ */ i("span", { className: "cr-stat-card__period", children: n })
    ] })
  ] });
}
const Ke = A(
  ({ events: e, dense: r = !1, className: t = "", style: n, ...a }, s) => /* @__PURE__ */ i(
    "div",
    {
      ref: s,
      className: N("cr-timeline", r && "cr-timeline--dense", t),
      style: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        ...n
      },
      ...a,
      children: e.map((o, c) => {
        const l = c === e.length - 1, d = o.status || (c === 0 ? "current" : "completed"), p = {
          completed: "var(--cr-success)",
          current: "var(--cr-primary)",
          pending: "var(--cr-text-muted)",
          danger: "var(--cr-danger)"
        }, u = p[d] || p.completed;
        return /* @__PURE__ */ m(
          "div",
          {
            style: {
              display: "flex",
              gap: "1rem",
              position: "relative",
              paddingBottom: l ? "0" : r ? "1rem" : "1.75rem"
            },
            children: [
              /* @__PURE__ */ m(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "24px",
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ i(
                      "div",
                      {
                        style: {
                          width: o.icon ? "28px" : "12px",
                          height: o.icon ? "28px" : "12px",
                          borderRadius: "var(--cr-radius-full)",
                          backgroundColor: o.icon ? `${u}20` : u,
                          color: u,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: o.icon ? "0" : "6px",
                          boxShadow: d === "current" ? "0 0 10px rgba(99, 102, 241, 0.4)" : "none",
                          zIndex: 1
                        },
                        children: o.icon
                      }
                    ),
                    !l && /* @__PURE__ */ i(
                      "div",
                      {
                        style: {
                          width: "2px",
                          flex: 1,
                          backgroundColor: "var(--cr-border-subtle)",
                          marginTop: "4px"
                        },
                        "aria-hidden": "true"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ m("div", { style: { flex: 1, paddingTop: "2px" }, children: [
                /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.5rem" }, children: [
                  /* @__PURE__ */ i(
                    "h4",
                    {
                      style: {
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        margin: 0,
                        color: "var(--cr-text-primary)"
                      },
                      children: o.title
                    }
                  ),
                  o.timestamp && /* @__PURE__ */ i(
                    "span",
                    {
                      style: {
                        fontSize: "0.75rem",
                        color: "var(--cr-text-muted)",
                        whiteSpace: "nowrap"
                      },
                      children: o.timestamp
                    }
                  )
                ] }),
                o.description && /* @__PURE__ */ i(
                  "div",
                  {
                    style: {
                      fontSize: "0.875rem",
                      color: "var(--cr-text-secondary)",
                      marginTop: "0.25rem",
                      lineHeight: 1.5
                    },
                    children: o.description
                  }
                )
              ] })
            ]
          },
          c
        );
      })
    }
  )
);
Ke.displayName = "BaseTimeline";
function nr(e) {
  const r = E.createElement(Ke, e);
  return F(r, {
    dense: () => nr({ ...e, dense: !0 })
  });
}
function En(...e) {
  if (Array.isArray(e[0]))
    return nr({ events: e[0] });
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(Ke, { ref: r, ...t });
}
En.displayName = "Timeline";
function Je({
  variant: e = "info",
  title: r,
  children: t,
  dismissible: n = !1,
  onDismiss: a,
  icon: s,
  className: o = ""
}) {
  const [c, l] = _(!1);
  if (c) return null;
  const d = {
    info: /* @__PURE__ */ i(Er, { size: 18 }),
    success: /* @__PURE__ */ i(ft, { size: 18 }),
    warning: /* @__PURE__ */ i(Sr, { size: 18 }),
    danger: /* @__PURE__ */ i(Cr, { size: 18 })
  }, p = () => {
    l(!0), a == null || a();
  };
  return /* @__PURE__ */ m(
    "div",
    {
      role: "alert",
      className: N("cr-alert", `cr-alert--${e}`, o),
      children: [
        /* @__PURE__ */ i("div", { className: "cr-alert__icon", children: s || d[e] }),
        /* @__PURE__ */ m("div", { className: "cr-alert__content", children: [
          r && /* @__PURE__ */ i("h5", { className: "cr-alert__title", children: r }),
          /* @__PURE__ */ i("div", { className: "cr-alert__description", children: t })
        ] }),
        n && /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            onClick: p,
            className: "cr-alert__close",
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ i(ze, { size: 16 })
          }
        )
      ]
    }
  );
}
Je.displayName = "BaseAlert";
function $n(e, r) {
  const t = (n) => ar({ ...r, ...n });
  return F(e, {
    success: () => t({ variant: "success" }),
    warning: () => t({ variant: "warning" }),
    danger: () => t({ variant: "danger" }),
    info: () => t({ variant: "info" }),
    title: (n) => t({ title: n }),
    dismissible: () => t({ dismissible: !0 })
  });
}
function ar(e) {
  const r = /* @__PURE__ */ i(Je, { ...e });
  return $n(r, e);
}
function An(e, r, t) {
  if (e && typeof e == "object" && !E.isValidElement(e) && ("variant" in e || "title" in e || "children" in e || "dismissible" in e))
    return /* @__PURE__ */ i(Je, { ...e });
  let n = e, a = "info", s = t;
  if (typeof r == "string") {
    const o = r.toLowerCase();
    (o === "success" || o === "warning" || o === "danger" || o === "info") && (a = o);
  }
  return ar({ children: n, variant: a, title: s });
}
An.displayName = "Alert";
function Qe({
  size: e = "md",
  variant: r = "primary",
  className: t = "",
  label: n = "Loading..."
}) {
  return /* @__PURE__ */ i(
    "span",
    {
      role: "status",
      className: N(
        "cr-spinner",
        `cr-spinner--${e}`,
        `cr-spinner--${r}`,
        t
      ),
      "aria-label": n,
      children: /* @__PURE__ */ m(
        "svg",
        {
          className: "cr-animate-spin",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "3",
          children: [
            /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10", strokeOpacity: "0.2" }),
            /* @__PURE__ */ i("path", { d: "M12 2a10 10 0 0 1 10 10" })
          ]
        }
      )
    }
  );
}
function In({
  width: e = "100%",
  height: r = "1.25rem",
  circle: t = !1,
  className: n = "",
  style: a
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: N("cr-skeleton", t && "cr-skeleton--circle", n),
      style: {
        width: e,
        height: r,
        ...a
      },
      "aria-hidden": "true"
    }
  );
}
function ni({
  value: e,
  max: r = 100,
  size: t = "md",
  variant: n = "primary",
  showValue: a = !1,
  indeterminate: s = !1,
  className: o = ""
}) {
  const c = Math.min(100, Math.max(0, e / r * 100));
  return /* @__PURE__ */ m("div", { className: N("cr-progress-wrapper", o), children: [
    /* @__PURE__ */ i(
      "div",
      {
        role: "progressbar",
        "aria-valuenow": s ? void 0 : Math.round(c),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: N(
          "cr-progress",
          `cr-progress--${t}`,
          `cr-progress--${n}`,
          s && "cr-progress--indeterminate"
        ),
        children: /* @__PURE__ */ i(
          "div",
          {
            className: "cr-progress__bar",
            style: { width: s ? "100%" : `${c}%` }
          }
        )
      }
    ),
    a && !s && /* @__PURE__ */ m("span", { className: "cr-progress__value", children: [
      Math.round(c),
      "%"
    ] })
  ] });
}
function ai({
  icon: e = /* @__PURE__ */ i(Pr, { size: 48 }),
  title: r,
  description: t,
  action: n,
  className: a = ""
}) {
  return /* @__PURE__ */ m("div", { className: N("cr-empty-state", a), children: [
    /* @__PURE__ */ i("div", { className: "cr-empty-state__icon", children: e }),
    /* @__PURE__ */ i("h4", { className: "cr-empty-state__title", children: r }),
    t && /* @__PURE__ */ i("p", { className: "cr-empty-state__description", children: t }),
    n && /* @__PURE__ */ i("div", { className: "cr-empty-state__action", children: n })
  ] });
}
function ii({
  title: e = "Something went wrong",
  message: r = "An error occurred while loading this content. Please try again.",
  onRetry: t,
  retryLabel: n = "Try Again",
  icon: a = /* @__PURE__ */ i(At, { size: 48, className: "cr-text-danger" }),
  className: s = ""
}) {
  return /* @__PURE__ */ m("div", { className: N("cr-error-state", s), children: [
    /* @__PURE__ */ i("div", { className: "cr-error-state__icon", children: a }),
    /* @__PURE__ */ i("h4", { className: "cr-error-state__title", children: e }),
    /* @__PURE__ */ i("p", { className: "cr-error-state__message", children: r }),
    t && /* @__PURE__ */ i(
      ht,
      {
        variant: "outline",
        leftIcon: /* @__PURE__ */ i(Hr, { size: 16 }),
        onClick: t,
        className: "cr-error-state__retry",
        children: n
      }
    )
  ] });
}
class si extends _r {
  constructor(t) {
    super(t);
    le(this, "reset", () => {
      var t, n;
      (n = (t = this.props).onReset) == null || n.call(t), this.setState({ hasError: !1, error: null });
    });
    this.state = { hasError: !1, error: null };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0, error: t };
  }
  componentDidCatch(t, n) {
    var a, s;
    (s = (a = this.props).onError) == null || s.call(a, t, n);
  }
  render() {
    return this.state.hasError && this.state.error ? typeof this.props.fallback == "function" ? this.props.fallback({ error: this.state.error, reset: this.reset }) : this.props.fallback ? this.props.fallback : /* @__PURE__ */ m(
      "div",
      {
        role: "alert",
        className: N("cr-error-boundary", this.props.className),
        style: {
          padding: "2rem",
          backgroundColor: "var(--cr-bg-surface)",
          borderRadius: "var(--cr-radius-lg)",
          border: "1px solid var(--cr-border-subtle)",
          boxShadow: "var(--cr-shadow-md)",
          textAlign: "center",
          maxWidth: "500px",
          margin: "2rem auto",
          color: "var(--cr-text-primary)",
          ...this.props.style
        },
        children: [
          /* @__PURE__ */ i(
            "div",
            {
              style: {
                width: "48px",
                height: "48px",
                borderRadius: "var(--cr-radius-full)",
                backgroundColor: "rgba(244, 63, 94, 0.15)",
                color: "var(--cr-danger)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem auto"
              },
              children: /* @__PURE__ */ m("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ i("polygon", { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }),
                /* @__PURE__ */ i("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                /* @__PURE__ */ i("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
              ] })
            }
          ),
          /* @__PURE__ */ i("h3", { style: { fontSize: "1.125rem", fontWeight: 600, margin: "0 0 0.5rem 0" }, children: "Something went wrong" }),
          /* @__PURE__ */ i("p", { style: { fontSize: "0.875rem", color: "var(--cr-text-secondary)", margin: "0 0 1.25rem 0" }, children: this.state.error.message || "An unexpected error occurred while rendering this component." }),
          /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: this.reset,
              style: {
                padding: "8px 16px",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#ffffff",
                backgroundColor: "var(--cr-primary)",
                border: "none",
                borderRadius: "var(--cr-radius-md)",
                cursor: "pointer"
              },
              children: "Try Again"
            }
          )
        ]
      }
    ) : this.props.children;
  }
}
const Tn = [
  "a[href]",
  "area[href]",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "iframe",
  "object",
  "embed",
  "[tabindex]:not([tabindex='-1'])",
  "[contenteditable]"
].join(", ");
function Ln(e) {
  return Array.from(e.querySelectorAll(Tn)).filter(
    (r) => r.offsetWidth > 0 || r.offsetHeight > 0 || r.getClientRects().length > 0
  );
}
function zn(e, r) {
  if (r.key !== "Tab") return;
  const t = Ln(e);
  if (t.length === 0) {
    r.preventDefault();
    return;
  }
  const n = t[0], a = t[t.length - 1];
  r.shiftKey ? document.activeElement === n && (a.focus(), r.preventDefault()) : document.activeElement === a && (n.focus(), r.preventDefault());
}
function Ye(e, r = !0) {
  E.useEffect(() => {
    if (!r) return;
    const t = e.current;
    if (!t) return;
    const n = (a) => {
      zn(t, a);
    };
    return t.addEventListener("keydown", n), () => {
      t.removeEventListener("keydown", n);
    };
  }, [e, r]);
}
function ke({
  isOpen: e,
  onClose: r,
  title: t,
  size: n = "md",
  children: a,
  footer: s,
  closeOnOverlayClick: o = !0,
  closeOnEsc: c = !0,
  className: l = "",
  initialFocusRef: d,
  finalFocusRef: p
}) {
  const u = D(null), v = D(null);
  if (Ye(u, e), B(() => {
    if (!e) return;
    v.current = document.activeElement;
    const x = (y) => {
      c && y.key === "Escape" && r();
    };
    document.addEventListener("keydown", x);
    const k = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const f = setTimeout(() => {
      if (d != null && d.current)
        d.current.focus();
      else if (u.current) {
        const y = u.current.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        y ? y.focus() : u.current.focus();
      }
    }, 50);
    return () => {
      clearTimeout(f), document.removeEventListener("keydown", x), document.body.style.overflow = k, p != null && p.current ? p.current.focus() : v.current && typeof v.current.focus == "function" && v.current.focus();
    };
  }, [e, c, r, d, p]), !e) return null;
  const g = /* @__PURE__ */ m(
    "div",
    {
      ref: u,
      className: "cr-modal-portal",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": t ? "cr-modal-title" : void 0,
      tabIndex: -1,
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: "cr-modal__backdrop",
            onClick: o ? r : void 0
          }
        ),
        /* @__PURE__ */ i("div", { className: "cr-modal__container", children: /* @__PURE__ */ m(
          "div",
          {
            className: N(
              "cr-modal__dialog",
              `cr-modal__dialog--${n}`,
              "cr-animate-fade-in",
              l
            ),
            children: [
              t && /* @__PURE__ */ m("div", { className: "cr-modal__header", children: [
                /* @__PURE__ */ i("h3", { id: "cr-modal-title", className: "cr-modal__title", children: t }),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    className: "cr-modal__close-btn",
                    onClick: r,
                    "aria-label": "Close modal",
                    children: /* @__PURE__ */ i(ze, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ i("div", { className: "cr-modal__body", children: a }),
              s && /* @__PURE__ */ i("div", { className: "cr-modal__footer", children: s })
            ]
          }
        ) })
      ]
    }
  );
  return typeof document < "u" && document.body ? Me(g, document.body) : g;
}
function oi({
  isOpen: e,
  onClose: r,
  title: t,
  placement: n = "right",
  size: a = "md",
  children: s,
  footer: o,
  className: c = "",
  initialFocusRef: l,
  finalFocusRef: d
}) {
  const p = D(null), u = D(null);
  if (Ye(p, e), B(() => {
    if (!e) return;
    u.current = document.activeElement;
    const g = (f) => {
      f.key === "Escape" && r();
    };
    document.addEventListener("keydown", g);
    const x = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const k = setTimeout(() => {
      if (l != null && l.current)
        l.current.focus();
      else if (p.current) {
        const f = p.current.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        f ? f.focus() : p.current.focus();
      }
    }, 50);
    return () => {
      clearTimeout(k), document.removeEventListener("keydown", g), document.body.style.overflow = x, d != null && d.current ? d.current.focus() : u.current && typeof u.current.focus == "function" && u.current.focus();
    };
  }, [e, r, l, d]), !e) return null;
  const v = /* @__PURE__ */ m(
    "div",
    {
      ref: p,
      className: "cr-drawer-portal",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": t ? "cr-drawer-title" : void 0,
      tabIndex: -1,
      children: [
        /* @__PURE__ */ i("div", { className: "cr-drawer__backdrop", onClick: r }),
        /* @__PURE__ */ m(
          "div",
          {
            className: N(
              "cr-drawer__panel",
              `cr-drawer--${n}`,
              `cr-drawer--size-${a}`,
              c
            ),
            children: [
              t && /* @__PURE__ */ m("div", { className: "cr-drawer__header", children: [
                /* @__PURE__ */ i("h3", { id: "cr-drawer-title", className: "cr-drawer__title", children: t }),
                /* @__PURE__ */ i(
                  "button",
                  {
                    type: "button",
                    className: "cr-drawer__close-btn",
                    onClick: r,
                    "aria-label": "Close drawer",
                    children: /* @__PURE__ */ i(ze, { size: 18 })
                  }
                )
              ] }),
              /* @__PURE__ */ i("div", { className: "cr-drawer__body", children: s }),
              o && /* @__PURE__ */ i("div", { className: "cr-drawer__footer", children: o })
            ]
          }
        )
      ]
    }
  );
  return typeof document < "u" && document.body ? Me(v, document.body) : v;
}
function ci({
  trigger: e,
  content: r,
  placement: t = "bottom",
  className: n = "",
  isOpen: a,
  onOpenChange: s
}) {
  const [o, c] = _(!1), l = a !== void 0, d = l ? a : o, p = D(null), u = (g) => {
    const x = g !== void 0 ? g : !d;
    l || c(x), s == null || s(x);
  };
  return Re(p, () => u(!1), d), /* @__PURE__ */ m(
    "div",
    {
      ref: p,
      className: "cr-popover-wrapper",
      onKeyDown: (g) => {
        g.key === "Enter" || g.key === " " ? (g.preventDefault(), u()) : g.key === "Escape" && d && (g.preventDefault(), u(!1));
      },
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: "cr-popover__trigger",
            onClick: () => u(),
            role: "button",
            tabIndex: 0,
            "aria-haspopup": "true",
            "aria-expanded": d,
            children: e
          }
        ),
        d && /* @__PURE__ */ i(
          "div",
          {
            className: N(
              "cr-popover__content",
              `cr-popover--${t}`,
              "cr-animate-fade-in",
              n
            ),
            role: "region",
            children: r
          }
        )
      ]
    }
  );
}
function li({
  label: e,
  children: r,
  placement: t = "top",
  delayMs: n = 200,
  className: a = ""
}) {
  const [s, o] = _(!1), c = D(null), l = () => {
    c.current && clearTimeout(c.current), c.current = setTimeout(() => o(!0), n);
  }, d = () => {
    c.current && (clearTimeout(c.current), c.current = null), o(!1);
  };
  return B(() => () => {
    c.current && clearTimeout(c.current);
  }, []), /* @__PURE__ */ m(
    "div",
    {
      className: "cr-tooltip-wrapper",
      onMouseEnter: l,
      onMouseLeave: d,
      onFocus: l,
      onBlur: d,
      children: [
        r,
        s && /* @__PURE__ */ i(
          "div",
          {
            role: "tooltip",
            className: N(
              "cr-tooltip",
              `cr-tooltip--${t}`,
              "cr-animate-fade-in",
              a
            ),
            children: e
          }
        )
      ]
    }
  );
}
function di({ items: e, children: r, className: t = "" }) {
  const [n, a] = _(!1), [s, o] = _({ x: 0, y: 0 }), c = D(null);
  Re(c, () => a(!1), n);
  const l = (d) => {
    d.preventDefault(), o({ x: d.clientX, y: d.clientY }), a(!0);
  };
  return B(() => {
    const d = () => {
      n && a(!1);
    };
    return window.addEventListener("scroll", d), () => window.removeEventListener("scroll", d);
  }, [n]), /* @__PURE__ */ m("div", { onContextMenu: l, className: "cr-context-menu-trigger", children: [
    r,
    n && /* @__PURE__ */ i(
      "div",
      {
        ref: c,
        className: N("cr-context-menu", "cr-animate-fade-in", t),
        style: { top: s.y, left: s.x },
        children: e.map((d) => /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            disabled: d.disabled,
            className: N(
              "cr-context-menu__item",
              d.danger && "is-danger"
            ),
            onClick: () => {
              var p;
              d.disabled || ((p = d.onClick) == null || p.call(d), a(!1));
            },
            children: [
              d.icon && /* @__PURE__ */ i("span", { className: "cr-context-menu__icon", children: d.icon }),
              /* @__PURE__ */ i("span", { className: "cr-context-menu__label", children: d.label })
            ]
          },
          d.id
        ))
      }
    )
  ] });
}
const Ze = A(
  ({
    isOpen: e,
    title: r,
    description: t,
    confirmText: n = "Confirm",
    cancelText: a = "Cancel",
    onConfirm: s,
    onCancel: o,
    variant: c = "danger",
    className: l = "",
    style: d
  }, p) => {
    const u = D(null), v = D(null);
    if (Ye(u, e), B(() => {
      if (!e) return;
      v.current = document.activeElement;
      const f = (b) => {
        b.key === "Escape" && o();
      };
      window.addEventListener("keydown", f);
      const y = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const h = setTimeout(() => {
        if (u.current) {
          const b = u.current.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          b ? b.focus() : u.current.focus();
        }
      }, 50);
      return () => {
        clearTimeout(h), window.removeEventListener("keydown", f), document.body.style.overflow = y, v.current && typeof v.current.focus == "function" && v.current.focus();
      };
    }, [e, o]), !e) return null;
    const g = {
      danger: {
        bg: "var(--cr-danger)",
        hover: "var(--cr-danger-hover)",
        iconColor: "#f43f5e"
      },
      warning: {
        bg: "var(--cr-warning)",
        hover: "var(--cr-warning-hover)",
        iconColor: "#f59e0b"
      },
      info: {
        bg: "var(--cr-primary)",
        hover: "var(--cr-primary-hover)",
        iconColor: "#6366f1"
      }
    }, x = g[c] || g.danger, k = /* @__PURE__ */ i(
      "div",
      {
        className: "cr-alert-dialog-backdrop",
        style: {
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          padding: "1rem"
        },
        onClick: (f) => {
          f.target === f.currentTarget && o();
        },
        children: /* @__PURE__ */ m(
          "div",
          {
            ref: u,
            role: "alertdialog",
            "aria-modal": "true",
            "aria-labelledby": "cr-dialog-title",
            "aria-describedby": "cr-dialog-desc",
            tabIndex: -1,
            className: N("cr-alert-dialog", l),
            style: {
              backgroundColor: "var(--cr-bg-surface)",
              borderRadius: "var(--cr-radius-lg)",
              border: "1px solid var(--cr-border-subtle)",
              boxShadow: "var(--cr-shadow-xl)",
              width: "100%",
              maxWidth: "440px",
              padding: "1.5rem",
              color: "var(--cr-text-primary)",
              animation: "cr-scale-in 150ms ease-out",
              ...d
            },
            children: [
              /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "flex-start", gap: "0.875rem" }, children: [
                /* @__PURE__ */ i(
                  "div",
                  {
                    style: {
                      width: "40px",
                      height: "40px",
                      borderRadius: "var(--cr-radius-full)",
                      backgroundColor: `${x.iconColor}20`,
                      color: x.iconColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ m("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                      /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
                      /* @__PURE__ */ i("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
                      /* @__PURE__ */ i("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
                    ] })
                  }
                ),
                /* @__PURE__ */ m("div", { children: [
                  /* @__PURE__ */ i(
                    "h2",
                    {
                      id: "cr-dialog-title",
                      style: {
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        margin: 0,
                        color: "var(--cr-text-primary)"
                      },
                      children: r
                    }
                  ),
                  t && /* @__PURE__ */ i(
                    "div",
                    {
                      id: "cr-dialog-desc",
                      style: {
                        fontSize: "0.875rem",
                        color: "var(--cr-text-secondary)",
                        marginTop: "0.375rem",
                        lineHeight: 1.5
                      },
                      children: t
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ m(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "0.75rem",
                    marginTop: "1.5rem"
                  },
                  children: [
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: o,
                        style: {
                          padding: "8px 16px",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "var(--cr-text-secondary)",
                          backgroundColor: "transparent",
                          border: "1px solid var(--cr-border-subtle)",
                          borderRadius: "var(--cr-radius-md)",
                          cursor: "pointer"
                        },
                        children: a
                      }
                    ),
                    /* @__PURE__ */ i(
                      "button",
                      {
                        type: "button",
                        onClick: s,
                        style: {
                          padding: "8px 16px",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "#ffffff",
                          backgroundColor: x.bg,
                          border: "none",
                          borderRadius: "var(--cr-radius-md)",
                          cursor: "pointer"
                        },
                        children: n
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      }
    );
    return typeof document < "u" && document.body ? Me(k, document.body) : k;
  }
);
Ze.displayName = "BaseAlertDialog";
function Z(e) {
  const r = E.createElement(Ze, e);
  return F(r, {
    danger: () => Z({ ...e, variant: "danger" }),
    warning: () => Z({ ...e, variant: "warning" }),
    info: () => Z({ ...e, variant: "info" }),
    confirmText: (t) => Z({ ...e, confirmText: t }),
    cancelText: (t) => Z({ ...e, cancelText: t }),
    onConfirm: (t) => Z({ ...e, onConfirm: t }),
    onCancel: (t) => Z({ ...e, onCancel: t })
  });
}
function Mn(...e) {
  if (typeof e[0] == "string") {
    const n = e[0], a = typeof e[1] == "string" || E.isValidElement(e[1]) ? e[1] : void 0, s = typeof e[2] == "function" ? e[2] : () => {
    }, o = typeof e[3] == "function" ? e[3] : () => {
    };
    return Z({
      isOpen: !0,
      title: n,
      description: a,
      onConfirm: s,
      onCancel: o
    });
  }
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(Ze, { ref: r, ...t });
}
Mn.displayName = "AlertDialog";
function Rn({
  header: e,
  items: r,
  footer: t,
  collapsed: n = !1,
  className: a = ""
}) {
  return /* @__PURE__ */ m(
    "aside",
    {
      className: N(
        "cr-sidebar",
        n && "cr-sidebar--collapsed",
        a
      ),
      children: [
        e && /* @__PURE__ */ i("div", { className: "cr-sidebar__header", children: e }),
        /* @__PURE__ */ i("nav", { className: "cr-sidebar__nav", children: r.map((s) => /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            disabled: s.disabled,
            className: N(
              "cr-sidebar__item",
              s.active && "is-active",
              s.disabled && "is-disabled"
            ),
            onClick: s.onClick,
            title: n ? s.label : void 0,
            children: [
              s.icon && /* @__PURE__ */ i("span", { className: "cr-sidebar__icon", children: s.icon }),
              !n && /* @__PURE__ */ i("span", { className: "cr-sidebar__label", children: s.label }),
              !n && s.badge && /* @__PURE__ */ i("span", { className: "cr-sidebar__badge", children: s.badge })
            ]
          },
          s.id
        )) }),
        t && /* @__PURE__ */ i("div", { className: "cr-sidebar__footer", children: t })
      ]
    }
  );
}
function ui({
  items: e,
  separator: r = /* @__PURE__ */ i(Et, { size: 14 }),
  className: t = ""
}) {
  return /* @__PURE__ */ i("nav", { "aria-label": "Breadcrumb", className: N("cr-breadcrumbs", t), children: /* @__PURE__ */ i("ol", { className: "cr-breadcrumbs__list", children: e.map((n, a) => {
    const s = a === e.length - 1, o = n.isCurrent || s;
    return /* @__PURE__ */ m("li", { className: "cr-breadcrumbs__item", children: [
      o ? /* @__PURE__ */ i("span", { className: "cr-breadcrumbs__current", "aria-current": "page", children: n.label }) : n.href ? /* @__PURE__ */ i("a", { href: n.href, className: "cr-breadcrumbs__link", children: n.label }) : /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          onClick: n.onClick,
          className: "cr-breadcrumbs__link-button",
          children: n.label
        }
      ),
      !s && /* @__PURE__ */ i("span", { className: "cr-breadcrumbs__separator", "aria-hidden": "true", children: r })
    ] }, n.id);
  }) }) });
}
function mi({
  items: e,
  defaultActiveId: r,
  activeId: t,
  onChange: n,
  variant: a = "underline",
  className: s = ""
}) {
  const [o, c] = _(
    r || (e[0] ? e[0].id : "")
  ), l = t !== void 0 ? t : o, d = D([]), p = (g) => {
    t === void 0 && c(g), n == null || n(g);
  }, u = (g, x) => {
    var h;
    const k = e.map((b, w) => b.disabled ? -1 : w).filter((b) => b !== -1);
    if (k.length === 0) return;
    let f = -1;
    const y = k.indexOf(x);
    if (g.key === "ArrowRight") {
      g.preventDefault();
      const b = (y + 1) % k.length;
      f = k[b];
    } else if (g.key === "ArrowLeft") {
      g.preventDefault();
      const b = (y - 1 + k.length) % k.length;
      f = k[b];
    } else g.key === "Home" ? (g.preventDefault(), f = k[0]) : g.key === "End" && (g.preventDefault(), f = k[k.length - 1]);
    if (f !== -1) {
      const b = e[f];
      p(b.id), (h = d.current[f]) == null || h.focus();
    }
  }, v = e.find((g) => g.id === l);
  return /* @__PURE__ */ m("div", { className: N("cr-tabs", `cr-tabs--${a}`, s), children: [
    /* @__PURE__ */ i("div", { role: "tablist", "aria-orientation": "horizontal", className: "cr-tabs__list", children: e.map((g, x) => {
      const k = g.id === l;
      return /* @__PURE__ */ m(
        "button",
        {
          ref: (f) => {
            d.current[x] = f;
          },
          id: `cr-tab-${g.id}`,
          role: "tab",
          "aria-selected": k,
          "aria-controls": `cr-tabpanel-${g.id}`,
          tabIndex: k ? 0 : -1,
          disabled: g.disabled,
          className: N(
            "cr-tabs__tab",
            k && "is-selected",
            g.disabled && "is-disabled"
          ),
          onClick: () => p(g.id),
          onKeyDown: (f) => u(f, x),
          children: [
            g.icon && /* @__PURE__ */ i("span", { className: "cr-tabs__icon", children: g.icon }),
            /* @__PURE__ */ i("span", { className: "cr-tabs__label", children: g.label })
          ]
        },
        g.id
      );
    }) }),
    /* @__PURE__ */ i(
      "div",
      {
        id: `cr-tabpanel-${l}`,
        role: "tabpanel",
        "aria-labelledby": `cr-tab-${l}`,
        tabIndex: 0,
        className: "cr-tabs__panel cr-animate-fade-in",
        children: v == null ? void 0 : v.content
      }
    )
  ] });
}
function fi({
  currentPage: e,
  totalPages: r,
  onPageChange: t,
  className: n = ""
}) {
  if (r <= 1) return null;
  const a = [];
  if (r <= 5)
    for (let o = 1; o <= r; o++) a.push(o);
  else {
    a.push(1), e > 3 && a.push("...");
    const o = Math.max(2, e - 1), c = Math.min(r - 1, e + 1);
    for (let l = o; l <= c; l++)
      a.push(l);
    e < r - 2 && a.push("..."), a.push(r);
  }
  return /* @__PURE__ */ m("nav", { "aria-label": "Pagination", className: N("cr-pagination", n), children: [
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        disabled: e === 1,
        onClick: () => t(e - 1),
        className: "cr-pagination__btn cr-pagination__btn--prev",
        "aria-label": "Previous page",
        children: /* @__PURE__ */ i(zr, { size: 16 })
      }
    ),
    a.map(
      (o, c) => typeof o == "number" ? /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          className: N(
            "cr-pagination__page",
            o === e && "is-active"
          ),
          onClick: () => t(o),
          "aria-current": o === e ? "page" : void 0,
          children: o
        },
        c
      ) : /* @__PURE__ */ i("span", { className: "cr-pagination__ellipsis", children: "…" }, c)
    ),
    /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        disabled: e === r,
        onClick: () => t(e + 1),
        className: "cr-pagination__btn cr-pagination__btn--next",
        "aria-label": "Next page",
        children: /* @__PURE__ */ i(Et, { size: 16 })
      }
    )
  ] });
}
function pi({
  trigger: e,
  items: r,
  placement: t = "right",
  className: n = ""
}) {
  const [a, s] = _(!1), o = D(null);
  return Re(o, () => s(!1), a), /* @__PURE__ */ m("div", { ref: o, className: N("cr-dropdown", n), children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "cr-dropdown__trigger",
        onClick: () => s((c) => !c),
        "aria-haspopup": "true",
        "aria-expanded": a,
        children: e
      }
    ),
    a && /* @__PURE__ */ i(
      "div",
      {
        role: "menu",
        className: N(
          "cr-dropdown__menu",
          `cr-dropdown__menu--${t}`,
          "cr-animate-fade-in"
        ),
        children: r.map((c) => /* @__PURE__ */ m(
          "button",
          {
            role: "menuitem",
            type: "button",
            disabled: c.disabled,
            className: N(
              "cr-dropdown__item",
              c.danger && "is-danger",
              c.disabled && "is-disabled"
            ),
            onClick: () => {
              var l;
              c.disabled || ((l = c.onClick) == null || l.call(c), s(!1));
            },
            children: [
              c.icon && /* @__PURE__ */ i("span", { className: "cr-dropdown__icon", children: c.icon }),
              /* @__PURE__ */ i("span", { className: "cr-dropdown__label", children: c.label })
            ]
          },
          c.id
        ))
      }
    )
  ] });
}
const Xe = A(
  ({
    steps: e,
    activeStep: r = 0,
    orientation: t = "horizontal",
    onStepClick: n,
    className: a = "",
    style: s,
    ...o
  }, c) => {
    const l = t === "vertical";
    return /* @__PURE__ */ i(
      "div",
      {
        ref: c,
        role: "navigation",
        "aria-label": "Progress Stepper",
        className: N("cr-stepper", `cr-stepper--${t}`, a),
        style: {
          display: "flex",
          flexDirection: l ? "column" : "row",
          alignItems: l ? "flex-start" : "center",
          gap: l ? "1.5rem" : "0.5rem",
          width: "100%",
          ...s
        },
        ...o,
        children: e.map((d, p) => {
          const u = typeof d == "string" ? { title: d } : d, v = p < r, g = p === r, x = p > r;
          return /* @__PURE__ */ m(E.Fragment, { children: [
            /* @__PURE__ */ m(
              "div",
              {
                onClick: () => n == null ? void 0 : n(p),
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: n ? "pointer" : "default",
                  flexShrink: 0
                },
                children: [
                  /* @__PURE__ */ i(
                    "div",
                    {
                      style: {
                        width: "32px",
                        height: "32px",
                        borderRadius: "var(--cr-radius-full)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        backgroundColor: v ? "var(--cr-success)" : g ? "var(--cr-primary)" : "var(--cr-bg-surface-hover)",
                        color: v || g ? "#ffffff" : "var(--cr-text-muted)",
                        border: x ? "1px solid var(--cr-border-subtle)" : "none",
                        boxShadow: g ? "var(--cr-primary-glow)" : "none",
                        transition: "all var(--cr-transition-fast)"
                      },
                      children: v ? /* @__PURE__ */ i("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ i("polyline", { points: "20 6 9 17 4 12" }) }) : p + 1
                    }
                  ),
                  /* @__PURE__ */ m("div", { children: [
                    /* @__PURE__ */ i(
                      "div",
                      {
                        style: {
                          fontSize: "0.875rem",
                          fontWeight: g ? 600 : 500,
                          color: g ? "var(--cr-text-primary)" : v ? "var(--cr-text-secondary)" : "var(--cr-text-muted)"
                        },
                        children: u.title
                      }
                    ),
                    u.description && /* @__PURE__ */ i("div", { style: { fontSize: "0.75rem", color: "var(--cr-text-muted)" }, children: u.description })
                  ] })
                ]
              }
            ),
            !l && p < e.length - 1 && /* @__PURE__ */ i(
              "div",
              {
                style: {
                  flex: 1,
                  height: "2px",
                  backgroundColor: v ? "var(--cr-success)" : "var(--cr-border-subtle)",
                  margin: "0 0.5rem",
                  minWidth: "24px",
                  transition: "background-color var(--cr-transition-normal)"
                },
                "aria-hidden": "true"
              }
            )
          ] }, p);
        })
      }
    );
  }
);
Xe.displayName = "BaseStepper";
function me(e) {
  const r = E.createElement(Xe, e);
  return F(r, {
    active: (t) => me({ ...e, activeStep: t }),
    vertical: () => me({ ...e, orientation: "vertical" }),
    horizontal: () => me({ ...e, orientation: "horizontal" }),
    onStepClick: (t) => me({ ...e, onStepClick: t })
  });
}
function Dn(...e) {
  if (Array.isArray(e[0]))
    return me({ steps: e[0], activeStep: typeof e[1] == "number" ? e[1] : 0 });
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(Xe, { ref: r, ...t });
}
Dn.displayName = "Stepper";
const ir = A(
  ({
    src: e,
    alt: r = "",
    fallbackSrc: t,
    rounded: n = "md",
    aspectRatio: a,
    className: s = "",
    style: o,
    ...c
  }, l) => {
    const [d, p] = _(!0), [u, v] = _(!1);
    return /* @__PURE__ */ m(
      "div",
      {
        className: N(
          "cr-image-wrapper",
          `cr-image--rounded-${n}`,
          s
        ),
        style: { aspectRatio: a, ...o },
        children: [
          d && /* @__PURE__ */ i(In, { className: "cr-image__skeleton" }),
          /* @__PURE__ */ i(
            "img",
            {
              ref: l,
              src: u && t ? t : e,
              alt: r,
              className: N(
                "cr-image",
                d && "is-loading",
                u && "has-error"
              ),
              onLoad: () => p(!1),
              onError: () => {
                p(!1), v(!0);
              },
              ...c
            }
          )
        ]
      }
    );
  }
);
ir.displayName = "BaseImage";
function sr(...e) {
  if (typeof e[0] == "string" || Array.isArray(e[0]) && e[0].raw || e.length === 0) {
    const n = dt(e);
    return Le(n);
  }
  const { ref: r, ...t } = e[0] || {};
  return /* @__PURE__ */ i(ir, { ref: r, ...t });
}
sr.displayName = "Image";
sr.create = (e) => Le(e);
const Bn = A(
  ({ rounded: e = "md", aspectRatio: r = "16/9", className: t = "", style: n, ...a }, s) => /* @__PURE__ */ i(
    "div",
    {
      className: N(
        "cr-video-wrapper",
        `cr-video--rounded-${e}`,
        t
      ),
      style: { aspectRatio: r, ...n },
      children: /* @__PURE__ */ i("video", { ref: s, className: "cr-video", controls: !0, ...a })
    }
  )
);
Bn.displayName = "Video";
const On = A(
  ({ size: e = "md", color: r, spin: t = !1, className: n = "", style: a, children: s, ...o }, c) => {
    const d = typeof e == "number" ? `${e}px` : {
      xs: "0.875rem",
      sm: "1rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "2rem"
    }[e];
    return /* @__PURE__ */ i(
      "span",
      {
        ref: c,
        className: N(
          "cr-icon",
          t && "cr-animate-spin",
          n
        ),
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: d,
          width: d,
          height: d,
          color: r,
          ...a
        },
        "aria-hidden": "true",
        ...o,
        children: s
      }
    );
  }
);
On.displayName = "Icon";
const Pn = A(
  ({ spacing: e = "1.25rem", className: r = "", style: t, children: n, ...a }, s) => /* @__PURE__ */ i(
    "form",
    {
      ref: s,
      className: N("cr-form", r),
      style: {
        display: "flex",
        flexDirection: "column",
        gap: e,
        ...t
      },
      ...a,
      children: n
    }
  )
);
Pn.displayName = "Form";
const or = A(
  ({ required: e = !1, optional: r = !1, className: t = "", children: n, ...a }, s) => /* @__PURE__ */ m("label", { ref: s, className: N("cr-form-label", t), ...a, children: [
    n,
    e && /* @__PURE__ */ i("span", { className: "cr-form-label__required", "aria-hidden": "true", children: "*" }),
    r && /* @__PURE__ */ i("span", { className: "cr-form-label__optional", children: "(optional)" })
  ] })
);
or.displayName = "FormLabel";
const cr = A(
  ({ className: e = "", children: r, ...t }, n) => r ? /* @__PURE__ */ m(
    "p",
    {
      ref: n,
      role: "alert",
      className: N("cr-form-error", e),
      ...t,
      children: [
        /* @__PURE__ */ i(At, { size: 14, className: "cr-form-error__icon" }),
        /* @__PURE__ */ i("span", { children: r })
      ]
    }
  ) : null
);
cr.displayName = "FormError";
const Wn = A(
  ({
    label: e,
    required: r = !1,
    optional: t = !1,
    hint: n,
    error: a,
    htmlFor: s,
    className: o = "",
    children: c,
    ...l
  }, d) => /* @__PURE__ */ m(
    "div",
    {
      ref: d,
      className: N("cr-form-field", a && "has-error", o),
      ...l,
      children: [
        e && /* @__PURE__ */ i(or, { htmlFor: s, required: r, optional: t, children: e }),
        /* @__PURE__ */ i("div", { className: "cr-form-field__control", children: c }),
        n && !a && /* @__PURE__ */ i("p", { className: "cr-form-field__hint", children: n }),
        a && /* @__PURE__ */ i(cr, { children: a })
      ]
    }
  )
);
Wn.displayName = "FormField";
function hi({
  initialValues: e,
  validate: r,
  onSubmit: t
}) {
  const n = D(e), a = D(0), s = D(!0), [o, c] = _(e), [l, d] = _({}), [p, u] = _({}), [v, g] = _(!1);
  E.useEffect(() => (s.current = !0, () => {
    s.current = !1;
  }), []);
  const x = P(
    async (T) => {
      if (!r) return {};
      const C = ++a.current;
      try {
        const R = await r(T);
        return C !== a.current ? {} : R || {};
      } catch {
        return {};
      }
    },
    [r]
  ), k = P(
    (T, C) => {
      c((R) => {
        const O = { ...R, [T]: C };
        if (r) {
          const V = ++a.current;
          Promise.resolve(r(O)).then((U) => {
            V === a.current && d(U || {});
          }).catch(() => {
          });
        }
        return O;
      });
    },
    [r]
  ), f = P((T, C) => {
    d((R) => {
      const O = { ...R };
      return C ? O[T] = C : delete O[T], O;
    });
  }, []), y = P((T, C = !0) => {
    u((R) => ({ ...R, [T]: C }));
  }, []), h = P(
    (T) => {
      const C = T.target, R = C.name;
      if (!R) return;
      let O = C.value;
      C instanceof HTMLInputElement && (C.type === "checkbox" ? O = C.checked : C.type === "number" && (O = C.value === "" ? "" : Number(C.value))), k(R, O);
    },
    [k]
  ), b = P(
    (T) => {
      const C = T.target.name;
      C && y(C, !0);
    },
    [y]
  ), w = P(
    async (T) => {
      T && typeof T.preventDefault == "function" && T.preventDefault();
      const C = {};
      Object.keys(o).forEach((V) => {
        C[V] = !0;
      }), u(C);
      const R = await x(o);
      if (d(R), Object.keys(R).length > 0)
        return !1;
      if (t) {
        g(!0);
        try {
          return await t(o), s.current, !0;
        } catch (V) {
          return s.current && d((U) => ({
            ...U,
            _form: (V == null ? void 0 : V.message) || "Form submission failed"
          })), !1;
        } finally {
          s.current && g(!1);
        }
      }
      return !0;
    },
    [o, x, t]
  ), $ = P((T) => {
    const C = T || n.current;
    T && (n.current = T), a.current++, c(C), d({}), u({}), g(!1);
  }, []), I = P(
    (T) => ({
      name: String(T),
      value: o[T] ?? "",
      onChange: (C) => {
        C && C.target ? h(C) : k(T, C);
      },
      onBlur: (C) => {
        C && C.target ? b(C) : y(T, !0);
      },
      error: p[T] ? l[T] : void 0
    }),
    [o, l, p, h, b, k, y]
  ), M = rt(() => JSON.stringify(o) !== JSON.stringify(n.current), [o]), S = rt(() => Object.keys(l).length === 0, [l]);
  return {
    values: o,
    errors: l,
    touched: p,
    isSubmitting: v,
    isValid: S,
    isDirty: M,
    setValues: c,
    setFieldValue: k,
    setFieldError: f,
    setFieldTouched: y,
    handleChange: h,
    handleBlur: b,
    handleSubmit: w,
    reset: $,
    register: I
  };
}
const lr = mt(void 0);
function gi({
  initialValues: e,
  validate: r,
  onSubmit: t,
  children: n
}) {
  const [a, s] = _(e), [o, c] = _({}), [l, d] = _({}), [p, u] = _(!1), v = (h, b) => {
    s((w) => {
      const $ = { ...w, [h]: b };
      return r && c(r($)), $;
    });
  }, g = (h) => {
    d((b) => ({ ...b, [h]: !0 }));
  }, x = (h, b) => {
    c((w) => ({ ...w, [h]: b }));
  }, k = async (h) => {
    if (h && h.preventDefault(), r) {
      const b = r(a);
      if (c(b), Object.keys(b).length > 0) return;
    }
    u(!0);
    try {
      await t(a);
    } finally {
      u(!1);
    }
  }, f = Object.keys(o).length === 0, y = {
    values: a,
    errors: o,
    touched: l,
    setValue: v,
    setTouched: g,
    setError: x,
    handleSubmit: k,
    isSubmitting: p,
    isValid: f
  };
  return /* @__PURE__ */ i(lr.Provider, { value: y, children: n });
}
function yi() {
  const e = ut(lr);
  if (!e)
    throw new Error("useFormContext must be used within a <FormProvider />");
  return e;
}
function bi(e) {
  return (r) => {
    const t = {};
    for (const n of e) {
      if (t[n.field]) continue;
      const a = n.validate(r[n.field], r);
      a && (t[n.field] = a);
    }
    return t;
  };
}
const dr = mt(void 0);
function et() {
  const e = ut(dr);
  if (!e)
    throw new Error("useAuth must be used within an <AuthProvider />");
  return e;
}
function vi({
  children: e,
  redirectTo: r = "/login",
  allowedRoles: t,
  fallback: n
}) {
  const { isAuthenticated: a, isLoading: s, hasRole: o } = et();
  return B(() => {
    !s && !a && typeof window < "u" && r && window.location.pathname !== r && (window.history.pushState(null, "", r), window.dispatchEvent(new PopStateEvent("popstate")));
  }, [s, a, r]), s ? /* @__PURE__ */ i("div", { className: "cr-route-loading", children: /* @__PURE__ */ i(Qe, { size: "lg" }) }) : a ? t && !o(t) ? /* @__PURE__ */ m("div", { className: "cr-route-unauthorized", children: [
    /* @__PURE__ */ i("h3", { children: "Access Denied" }),
    /* @__PURE__ */ i("p", { children: "You do not have permission to access this page." })
  ] }) : /* @__PURE__ */ i(X, { children: e }) : /* @__PURE__ */ i(X, { children: n || null });
}
function xi({
  children: e,
  restricted: r = !1,
  redirectTo: t = "/dashboard"
}) {
  const { isAuthenticated: n, isLoading: a } = et();
  return B(() => {
    !a && n && r && typeof window < "u" && (window.history.pushState(null, "", t), window.dispatchEvent(new PopStateEvent("popstate")));
  }, [a, n, r, t]), /* @__PURE__ */ i(X, { children: e });
}
function wi({
  children: e,
  adapter: r,
  initialUser: t = null,
  initialToken: n = null,
  onLogin: a,
  onLogout: s
}) {
  const [o, c] = _({
    user: t,
    token: n,
    isAuthenticated: !!(t || n),
    isLoading: !1
  }), l = P(
    async (v) => {
      c((g) => ({ ...g, isLoading: !0 }));
      try {
        if (r) {
          const { user: g, token: x } = await r.login(v);
          c({
            user: g,
            token: x,
            isAuthenticated: !0,
            isLoading: !1
          });
        } else if (a) {
          const { user: g, token: x } = await a(v);
          c({
            user: g,
            token: x,
            isAuthenticated: !0,
            isLoading: !1
          });
        } else {
          const g = {
            id: "user-1",
            email: v.email || "alex@example.com",
            name: v.name || "Alex Morgan",
            role: "admin"
          };
          c({
            user: g,
            token: "mock-jwt-token",
            isAuthenticated: !0,
            isLoading: !1
          });
        }
      } catch (g) {
        throw c((x) => ({ ...x, isLoading: !1 })), g;
      }
    },
    [r, a]
  ), d = P(async () => {
    c((v) => ({ ...v, isLoading: !0 }));
    try {
      r ? await r.logout() : s && await s();
    } finally {
      c({
        user: null,
        token: null,
        isAuthenticated: !1,
        isLoading: !1
      });
    }
  }, [r, s]), p = P(
    (v) => !o.user || !o.user.role ? !1 : (Array.isArray(v) ? v : [v]).includes(o.user.role),
    [o.user]
  ), u = P(
    (v) => !o.user || !o.user.permissions ? !1 : o.user.permissions.includes(v),
    [o.user]
  );
  return /* @__PURE__ */ i(
    dr.Provider,
    {
      value: {
        ...o,
        login: l,
        logout: d,
        hasRole: p,
        hasPermission: u
      },
      children: e
    }
  );
}
function Ni({
  children: e,
  fallback: r = null,
  requiredRole: t,
  requiredPermission: n,
  unauthorizedFallback: a = null
}) {
  const { isAuthenticated: s, isLoading: o, hasRole: c, hasPermission: l } = et();
  return o ? /* @__PURE__ */ i("div", { className: "cr-auth-guard-loading", children: /* @__PURE__ */ i(Qe, { size: "lg" }) }) : s ? t && !c(t) ? /* @__PURE__ */ i(X, { children: a }) : n && !l(n) ? /* @__PURE__ */ i(X, { children: a }) : /* @__PURE__ */ i(X, { children: e }) : /* @__PURE__ */ i(X, { children: r });
}
class nt extends Error {
  constructor(t, n, a) {
    super(n);
    le(this, "status");
    le(this, "data");
    this.name = "ApiError", this.status = t, this.data = a;
  }
}
class jn extends Error {
  constructor(r = "Network connection failed") {
    super(r), this.name = "NetworkError";
  }
}
class Fn extends Error {
  constructor(r = "Request timed out") {
    super(r), this.name = "TimeoutError";
  }
}
async function be(e, r = {}) {
  const { params: t, timeoutMs: n = 15e3, ...a } = r;
  let s = e;
  if (t) {
    const l = new URLSearchParams();
    for (const [p, u] of Object.entries(t))
      u !== void 0 && l.append(p, String(u));
    const d = l.toString();
    d && (s += (e.includes("?") ? "&" : "?") + d);
  }
  const o = new AbortController(), c = setTimeout(() => o.abort(), n);
  try {
    const l = await fetch(s, {
      ...a,
      signal: o.signal
    });
    clearTimeout(c);
    let d;
    const p = l.headers.get("content-type");
    if (p && p.includes("application/json") ? d = await l.json() : d = await l.text(), !l.ok)
      throw new nt(l.status, l.statusText, d);
    return {
      data: d,
      status: l.status,
      statusText: l.statusText,
      headers: l.headers
    };
  } catch (l) {
    throw clearTimeout(c), l.name === "AbortError" ? new Fn() : l instanceof nt ? l : new jn(l.message);
  }
}
function ki(e) {
  const { baseUrl: r, defaultHeaders: t = {}, getAuthToken: n, timeoutMs: a } = e, s = async (o) => {
    const c = {
      "Content-Type": "application/json",
      ...t
    };
    if (n) {
      const l = await n();
      l && (c.Authorization = `Bearer ${l}`);
    }
    return o && Object.assign(c, o), c;
  };
  return {
    get: async (o, c = {}) => {
      const l = await s(c.headers);
      return be(`${r}${o}`, {
        ...c,
        method: "GET",
        headers: l,
        timeoutMs: a
      });
    },
    post: async (o, c, l = {}) => {
      const d = await s(l.headers);
      return be(`${r}${o}`, {
        ...l,
        method: "POST",
        headers: d,
        body: c ? JSON.stringify(c) : void 0,
        timeoutMs: a
      });
    },
    put: async (o, c, l = {}) => {
      const d = await s(l.headers);
      return be(`${r}${o}`, {
        ...l,
        method: "PUT",
        headers: d,
        body: c ? JSON.stringify(c) : void 0,
        timeoutMs: a
      });
    },
    delete: async (o, c = {}) => {
      const l = await s(c.headers);
      return be(`${r}${o}`, {
        ...c,
        method: "DELETE",
        headers: l,
        timeoutMs: a
      });
    }
  };
}
function _i({
  brand: e,
  navLinks: r,
  navActions: t,
  hero: n,
  children: a,
  footer: s,
  className: o = ""
}) {
  return /* @__PURE__ */ m("div", { className: N("cr-landing-layout", o), children: [
    /* @__PURE__ */ i($r, { brand: e, links: r, actions: t, sticky: !0, glass: !0 }),
    /* @__PURE__ */ m("main", { className: "cr-landing-layout__main", children: [
      /* @__PURE__ */ i("section", { className: "cr-landing-layout__hero", children: /* @__PURE__ */ i(fe, { maxWidth: "xl", children: n }) }),
      a && /* @__PURE__ */ i("section", { className: "cr-landing-layout__content", children: /* @__PURE__ */ i(fe, { maxWidth: "xl", children: a }) })
    ] }),
    s && /* @__PURE__ */ i("footer", { className: "cr-landing-layout__footer", children: /* @__PURE__ */ i(fe, { maxWidth: "xl", children: s }) })
  ] });
}
function Ci({
  brand: e,
  sidebarItems: r,
  userProfile: t,
  topActions: n,
  children: a,
  className: s = ""
}) {
  const [o, c] = _(!1);
  return /* @__PURE__ */ m("div", { className: N("cr-dashboard-layout", s), children: [
    /* @__PURE__ */ i(
      Rn,
      {
        header: /* @__PURE__ */ i("div", { className: "cr-dashboard-layout__brand", children: e }),
        items: r,
        collapsed: o,
        footer: t
      }
    ),
    /* @__PURE__ */ m("div", { className: "cr-dashboard-layout__body", children: [
      /* @__PURE__ */ m("header", { className: "cr-dashboard-layout__topbar", children: [
        /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: "cr-dashboard-layout__collapse-btn",
            onClick: () => c((l) => !l),
            "aria-label": "Toggle sidebar collapse",
            children: "☰"
          }
        ),
        /* @__PURE__ */ i("div", { className: "cr-dashboard-layout__top-actions", children: n })
      ] }),
      /* @__PURE__ */ i("main", { className: "cr-dashboard-layout__content", children: a })
    ] })
  ] });
}
function Si({
  brand: e,
  title: r,
  subtitle: t,
  children: n,
  footer: a,
  backgroundPattern: s = !0,
  className: o = ""
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: N(
        "cr-auth-layout",
        s && "cr-auth-layout--pattern",
        o
      ),
      children: /* @__PURE__ */ m("div", { className: "cr-auth-layout__inner", children: [
        e && /* @__PURE__ */ i("div", { className: "cr-auth-layout__brand", children: e }),
        /* @__PURE__ */ m(yt, { variant: "glass", className: "cr-auth-layout__card", children: [
          /* @__PURE__ */ m("div", { className: "cr-auth-layout__header", children: [
            /* @__PURE__ */ i("h2", { className: "cr-auth-layout__title", children: r }),
            t && /* @__PURE__ */ i("p", { className: "cr-auth-layout__subtitle", children: t })
          ] }),
          /* @__PURE__ */ i("div", { className: "cr-auth-layout__body", children: n }),
          a && /* @__PURE__ */ i("div", { className: "cr-auth-layout__footer", children: a })
        ] })
      ] })
    }
  );
}
function Ei({
  title: e = "Account Settings",
  description: r = "Manage your profile, team members, security, and notification preferences.",
  sections: t,
  defaultSectionId: n,
  className: a = ""
}) {
  const [s, o] = _(
    n || (t[0] ? t[0].id : "")
  ), c = t.find((l) => l.id === s);
  return /* @__PURE__ */ i("div", { className: N("cr-settings-layout", a), children: /* @__PURE__ */ m(fe, { maxWidth: "xl", children: [
    /* @__PURE__ */ m("div", { className: "cr-settings-layout__header", children: [
      /* @__PURE__ */ i("h1", { className: "cr-settings-layout__title", children: e }),
      r && /* @__PURE__ */ i("p", { className: "cr-settings-layout__description", children: r })
    ] }),
    /* @__PURE__ */ m("div", { className: "cr-settings-layout__grid", children: [
      /* @__PURE__ */ i("aside", { className: "cr-settings-layout__nav", children: t.map((l) => /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          className: N(
            "cr-settings-layout__tab",
            l.id === s && "is-active"
          ),
          onClick: () => o(l.id),
          children: [
            l.icon && /* @__PURE__ */ i("span", { className: "cr-settings-layout__icon", children: l.icon }),
            /* @__PURE__ */ i("span", { children: l.label })
          ]
        },
        l.id
      )) }),
      /* @__PURE__ */ i("main", { className: "cr-settings-layout__content cr-animate-fade-in", children: c == null ? void 0 : c.content })
    ] })
  ] }) });
}
const xe = A(
  ({
    status: e = "info",
    title: r,
    subTitle: t,
    icon: n,
    extra: a,
    className: s = "",
    style: o,
    ...c
  }, l) => {
    const d = {
      success: {
        color: "var(--cr-success)",
        bg: "rgba(16, 185, 129, 0.15)",
        svg: /* @__PURE__ */ i("svg", { width: "36", height: "36", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ i("polyline", { points: "20 6 9 17 4 12" }) })
      },
      error: {
        color: "var(--cr-danger)",
        bg: "rgba(244, 63, 94, 0.15)",
        svg: /* @__PURE__ */ m("svg", { width: "36", height: "36", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
          /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ i("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
          /* @__PURE__ */ i("line", { x1: "9", y1: "9", x2: "15", y2: "15" })
        ] })
      },
      warning: {
        color: "var(--cr-warning)",
        bg: "rgba(245, 158, 11, 0.15)",
        svg: /* @__PURE__ */ m("svg", { width: "36", height: "36", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
          /* @__PURE__ */ i("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
          /* @__PURE__ */ i("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
          /* @__PURE__ */ i("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
        ] })
      },
      info: {
        color: "var(--cr-primary)",
        bg: "rgba(99, 102, 241, 0.15)",
        svg: /* @__PURE__ */ m("svg", { width: "36", height: "36", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
          /* @__PURE__ */ i("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ i("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
          /* @__PURE__ */ i("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
        ] })
      },
      404: {
        color: "var(--cr-primary)",
        bg: "rgba(99, 102, 241, 0.12)",
        svg: /* @__PURE__ */ i("div", { style: { fontSize: "2rem", fontWeight: 800, fontFamily: "var(--cr-font-heading)" }, children: "404" })
      },
      403: {
        color: "var(--cr-danger)",
        bg: "rgba(244, 63, 94, 0.12)",
        svg: /* @__PURE__ */ i("div", { style: { fontSize: "2rem", fontWeight: 800, fontFamily: "var(--cr-font-heading)" }, children: "403" })
      }
    }, p = d[e] || d.info;
    return /* @__PURE__ */ m(
      "div",
      {
        ref: l,
        className: N("cr-result", `cr-result--${e}`, s),
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "3rem 1.5rem",
          color: "var(--cr-text-primary)",
          ...o
        },
        ...c,
        children: [
          /* @__PURE__ */ i(
            "div",
            {
              style: {
                width: "72px",
                height: "72px",
                borderRadius: "var(--cr-radius-full)",
                backgroundColor: p.bg,
                color: p.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem"
              },
              children: n || p.svg
            }
          ),
          /* @__PURE__ */ i("h2", { style: { fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem 0" }, children: r }),
          t && /* @__PURE__ */ i(
            "div",
            {
              style: {
                fontSize: "1rem",
                color: "var(--cr-text-secondary)",
                maxWidth: "480px",
                lineHeight: 1.6,
                marginBottom: a ? "1.5rem" : 0
              },
              children: t
            }
          ),
          a && /* @__PURE__ */ i("div", { children: a })
        ]
      }
    );
  }
);
xe.displayName = "BaseResult";
function se(e) {
  const r = E.createElement(xe, e);
  return F(r, {
    success: () => se({ ...e, status: "success" }),
    error: () => se({ ...e, status: "error" }),
    warning: () => se({ ...e, status: "warning" }),
    notFound: () => se({ ...e, status: "404" }),
    extra: (t) => se({ ...e, extra: t })
  });
}
function Hn(...e) {
  if (typeof e[0] == "string")
    return se({ title: e[0], subTitle: e[1] });
  const { ref: r, ...t } = e[0] || {};
  return E.createElement(xe, { ref: r, ...t });
}
Hn.displayName = "Result";
const Vn = A(
  ({
    title: e = "404 - Page Not Found",
    message: r = "Sorry, the page you visited does not exist or has been moved.",
    homePath: t = "/",
    homeText: n = "Back to Home",
    className: a = "",
    style: s,
    ...o
  }, c) => /* @__PURE__ */ i(
    "div",
    {
      ref: c,
      className: N("cr-not-found-page", a),
      style: {
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...s
      },
      ...o,
      children: /* @__PURE__ */ i(
        xe,
        {
          status: "404",
          title: e,
          subTitle: r,
          extra: /* @__PURE__ */ i(
            Y,
            {
              variant: "primary",
              size: "lg",
              onClick: () => Nr.navigate(t),
              children: n
            }
          )
        }
      )
    }
  )
);
Vn.displayName = "NotFoundPage";
const at = {
  ENTER: "Enter",
  SPACE: " ",
  ESCAPE: "Escape",
  TAB: "Tab",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  HOME: "Home",
  END: "End"
};
function $i(e) {
  return e.key === at.ENTER || e.key === at.SPACE;
}
function Ai(e = "cr-id") {
  return `${e}-${Math.random().toString(36).substring(2, 9)}`;
}
function Ii(e, r = "polite") {
  if (typeof document > "u") return;
  let t = document.getElementById("cr-live-announcer");
  t || (t = document.createElement("div"), t.id = "cr-live-announcer", t.style.position = "absolute", t.style.width = "1px", t.style.height = "1px", t.style.padding = "0", t.style.margin = "-1px", t.style.overflow = "hidden", t.style.clip = "rect(0, 0, 0, 0)", t.style.whiteSpace = "nowrap", t.style.border = "0", document.body.appendChild(t)), t.setAttribute("aria-live", r), t.textContent = "", setTimeout(() => {
    t && (t.textContent = e);
  }, 50);
}
function ur(e) {
  const r = [];
  (!e.name || typeof e.name != "string") && r.push("ApplicationModel must have a valid 'name' string."), (!e.resources || Object.keys(e.resources).length === 0) && r.push("ApplicationModel must define at least one Resource.");
  for (const [t, n] of Object.entries(e.resources || {}))
    if (n.name || r.push(`Resource '${t}' is missing a name.`), !n.fields || n.fields.length === 0)
      r.push(`Resource '${n.name || t}' must have at least one field.`);
    else
      for (const a of n.fields)
        a.name || r.push(`Resource '${n.name}' contains a field missing a 'name'.`), a.type || r.push(`Field '${a.name}' in Resource '${n.name}' is missing a 'type'.`);
  for (const t of e.pages || []) {
    t.name || r.push("A Page definition is missing a 'name'.");
    for (const n of t.views || [])
      e.resources[n.resourceName] || r.push(`View '${n.title || n.id}' references unknown resource '${n.resourceName}'.`);
    for (const n of t.actions || [])
      n.targetResource && !e.resources[n.targetResource] && r.push(`Action '${n.name}' references unknown target resource '${n.targetResource}'.`);
  }
  return r;
}
class qn {
  constructor() {
    le(this, "store", /* @__PURE__ */ new Map());
  }
  seed(r, t) {
    this.store.set(r, [...t]);
  }
  getStore(r) {
    return this.store.has(r) || this.store.set(r, []), this.store.get(r);
  }
  async list(r, t) {
    let n = [...this.getStore(r)];
    if (t && t.trim()) {
      const a = t.toLowerCase();
      n = n.filter(
        (s) => Object.values(s).some(
          (o) => o && String(o).toLowerCase().includes(a)
        )
      );
    }
    return n;
  }
  async get(r, t) {
    return this.getStore(r).find((a) => String(a.id) === String(t)) || null;
  }
  async create(r, t) {
    const n = this.getStore(r), a = t.id || `item_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`, s = { ...t, id: a };
    return n.unshift(s), s;
  }
  async update(r, t, n) {
    const a = this.getStore(r), s = a.findIndex((c) => String(c.id) === String(t));
    if (s === -1)
      throw new Error(`Item with id '${t}' not found in resource '${r}'.`);
    const o = { ...a[s], ...n, id: a[s].id };
    return a[s] = o, o;
  }
  async delete(r, t) {
    const n = this.getStore(r), a = n.findIndex((s) => String(s.id) === String(t));
    return a === -1 ? !1 : (n.splice(a, 1), !0);
  }
}
const J = new qn();
function Un(e, r, t = {}) {
  const { baseUrl: n = "", mockFallback: a = !0 } = t, s = n ? `${n.replace(/\/$/, "")}/${r.replace(/^\//, "")}` : r;
  return {
    async list(o = {}) {
      var c;
      try {
        if (!n && a)
          return await J.list(e, o.search);
        const l = new URL(s, ((c = window == null ? void 0 : window.location) == null ? void 0 : c.origin) || "http://localhost");
        o.search && l.searchParams.set("q", o.search), o.page && l.searchParams.set("page", String(o.page)), o.limit && l.searchParams.set("limit", String(o.limit));
        const d = await fetch(l.toString(), {
          headers: { "Content-Type": "application/json", ...t.headers }
        });
        if (!d.ok) throw new Error(`HTTP Error ${d.status}: ${d.statusText}`);
        return await d.json();
      } catch (l) {
        if (a)
          return await J.list(e, o.search);
        throw l;
      }
    },
    async get(o) {
      try {
        if (!n && a)
          return await J.get(e, o);
        const c = await fetch(`${s}/${o}`, {
          headers: { "Content-Type": "application/json", ...t.headers }
        });
        if (!c.ok) throw new Error(`HTTP Error ${c.status}: ${c.statusText}`);
        return await c.json();
      } catch (c) {
        if (a)
          return await J.get(e, o);
        throw c;
      }
    },
    async create(o) {
      try {
        if (!n && a)
          return await J.create(e, o);
        const c = await fetch(s, {
          method: "POST",
          headers: { "Content-Type": "application/json", ...t.headers },
          body: JSON.stringify(o)
        });
        if (!c.ok) throw new Error(`Failed to create item in ${e}`);
        return await c.json();
      } catch (c) {
        if (a)
          return await J.create(e, o);
        throw c;
      }
    },
    async update(o, c) {
      try {
        if (!n && a)
          return await J.update(e, o, c);
        const l = await fetch(`${s}/${o}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json", ...t.headers },
          body: JSON.stringify(c)
        });
        if (!l.ok) throw new Error(`Failed to update item ${o} in ${e}`);
        return await l.json();
      } catch (l) {
        if (a)
          return await J.update(e, o, c);
        throw l;
      }
    },
    async delete(o) {
      try {
        return !n && a ? await J.delete(e, o) : (await fetch(`${s}/${o}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json", ...t.headers }
        })).ok;
      } catch (c) {
        if (a)
          return await J.delete(e, o);
        throw c;
      }
    }
  };
}
function Gn(e, r) {
  const t = e.validation, n = r != null && String(r).trim() !== "";
  if (t != null && t.required && !n)
    return t.customMessage || `${e.label || e.name} is required.`;
  if (n) {
    if (e.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(r).trim()))
      return (t == null ? void 0 : t.customMessage) || "Please enter a valid email address.";
    if (e.type === "number") {
      const a = Number(r);
      if (isNaN(a))
        return "Must be a valid number.";
      if ((t == null ? void 0 : t.min) !== void 0 && a < t.min)
        return `Must be at least ${t.min}.`;
      if ((t == null ? void 0 : t.max) !== void 0 && a > t.max)
        return `Must be at most ${t.max}.`;
    }
    if (typeof r == "string") {
      if ((t == null ? void 0 : t.minLength) !== void 0 && r.length < t.minLength)
        return `Must be at least ${t.minLength} characters.`;
      if ((t == null ? void 0 : t.maxLength) !== void 0 && r.length > t.maxLength)
        return `Must be at most ${t.maxLength} characters.`;
    }
  }
  return null;
}
function it({
  fields: e,
  initialValues: r = {},
  onSubmit: t,
  onCancel: n,
  submitLabel: a = "Save Changes",
  cancelLabel: s = "Cancel",
  isSubmitting: o = !1,
  className: c = ""
}) {
  const [l, d] = _(() => {
    const f = {};
    for (const y of e)
      f[y.name] = r[y.name] !== void 0 ? r[y.name] : y.defaultValue || "";
    return f;
  }), [p, u] = _({}), [v, g] = _(null), x = (f, y) => {
    d((h) => ({ ...h, [f]: y })), p[f] && u((h) => {
      const b = { ...h };
      return delete b[f], b;
    });
  };
  return /* @__PURE__ */ m("form", { onSubmit: async (f) => {
    f.preventDefault(), g(null);
    const y = {};
    for (const h of e)
      if (!h.hidden) {
        const b = Gn(h, l[h.name]);
        b && (y[h.name] = b);
      }
    if (Object.keys(y).length > 0) {
      u(y);
      return;
    }
    try {
      await t(l);
    } catch (h) {
      g(h.message || "Failed to submit form.");
    }
  }, className: `criation-schema-form ${c}`, noValidate: !0, children: [
    v && /* @__PURE__ */ i(
      "div",
      {
        role: "alert",
        style: {
          padding: "10px 14px",
          backgroundColor: "#fef2f2",
          border: "1px solid #fecaca",
          color: "#b91c1c",
          borderRadius: 6,
          marginBottom: 16,
          fontSize: "0.875rem"
        },
        children: v
      }
    ),
    /* @__PURE__ */ m(pt, { direction: "column", spacing: "1.25rem", children: [
      e.map((f) => {
        var b, w, $;
        if (f.hidden) return null;
        const y = `field-${f.name}`, h = p[f.name];
        if (f.type === "select") {
          const M = (f.options || []).map(
            (S) => typeof S == "string" ? { label: S, value: S } : S
          );
          return /* @__PURE__ */ m("div", { className: "criation-form-control", children: [
            /* @__PURE__ */ m(
              "label",
              {
                htmlFor: y,
                style: { display: "block", marginBottom: 6, fontSize: "0.875rem", fontWeight: 600 },
                children: [
                  f.label || f.name,
                  ((b = f.validation) == null ? void 0 : b.required) && /* @__PURE__ */ i("span", { style: { color: "#ef4444", marginLeft: 4 }, children: "*" })
                ]
              }
            ),
            /* @__PURE__ */ i(
              Gt,
              {
                id: y,
                value: l[f.name] || "",
                onChange: (S) => x(f.name, S.target.value),
                options: M,
                placeholder: f.placeholder || `Select ${f.label || f.name}...`,
                error: h,
                disabled: f.readOnly || o
              }
            )
          ] }, f.name);
        }
        return f.type === "textarea" ? /* @__PURE__ */ m("div", { className: "criation-form-control", children: [
          /* @__PURE__ */ m(
            "label",
            {
              htmlFor: y,
              style: { display: "block", marginBottom: 6, fontSize: "0.875rem", fontWeight: 600 },
              children: [
                f.label || f.name,
                ((w = f.validation) == null ? void 0 : w.required) && /* @__PURE__ */ i("span", { style: { color: "#ef4444", marginLeft: 4 }, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ i(
            Ut,
            {
              id: y,
              value: l[f.name] || "",
              onChange: (I) => x(f.name, I.target.value),
              placeholder: f.placeholder,
              error: h,
              disabled: f.readOnly || o
            }
          )
        ] }, f.name) : /* @__PURE__ */ m("div", { className: "criation-form-control", children: [
          /* @__PURE__ */ m(
            "label",
            {
              htmlFor: y,
              style: { display: "block", marginBottom: 6, fontSize: "0.875rem", fontWeight: 600 },
              children: [
                f.label || f.name,
                (($ = f.validation) == null ? void 0 : $.required) && /* @__PURE__ */ i("span", { style: { color: "#ef4444", marginLeft: 4 }, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ i(
            gt,
            {
              id: y,
              type: f.type === "email" ? "email" : f.type === "number" ? "number" : "text",
              value: l[f.name] || "",
              onChange: (I) => x(f.name, I.target.value),
              placeholder: f.placeholder,
              error: h,
              disabled: f.readOnly || o
            }
          )
        ] }, f.name);
      }),
      /* @__PURE__ */ m("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 12 }, children: [
        n && /* @__PURE__ */ i(
          Y,
          {
            type: "button",
            variant: "ghost",
            onClick: n,
            disabled: o,
            children: s
          }
        ),
        /* @__PURE__ */ i(
          Y,
          {
            type: "submit",
            variant: "primary",
            loading: o,
            children: a
          }
        )
      ] })
    ] })
  ] });
}
function Ti(e) {
  return e;
}
function Kn({
  resource: e,
  api: r,
  items: t,
  isLoading: n,
  onEdit: a,
  onDelete: s,
  searchable: o = !0,
  onRefresh: c
}) {
  const [l, d] = _([]), [p, u] = _(!!(r && t === void 0)), [v, g] = _(""), x = t !== void 0 ? t : l, k = n !== void 0 ? n : p, f = P(async (h = "") => {
    if (r) {
      u(!0);
      try {
        const b = await r.list({ search: h });
        d(b);
      } catch (b) {
        console.error(`Failed to load items for ${e.name}:`, b);
      } finally {
        u(!1);
      }
    }
  }, [r, e.name]);
  B(() => {
    t === void 0 && r && f(v);
  }, [r, v, t, f]);
  const y = e.fields.filter((h) => !h.hidden);
  return /* @__PURE__ */ m(Ar, { variant: "outline", padding: "md", style: { overflow: "hidden" }, children: [
    o && /* @__PURE__ */ m("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }, children: [
      /* @__PURE__ */ i("div", { style: { position: "relative", width: 320 }, children: /* @__PURE__ */ i(
        gt,
        {
          placeholder: `Search ${e.plural.toLowerCase()}...`,
          value: v,
          onChange: (h) => {
            g(h.target.value), r && t === void 0 && f(h.target.value);
          },
          leftIcon: /* @__PURE__ */ i(Vr, { size: 16, color: "#94a3b8" })
        }
      ) }),
      c && /* @__PURE__ */ i(Y, { size: "sm", variant: "outline", onClick: c, children: "Refresh" })
    ] }),
    k ? /* @__PURE__ */ m("div", { style: { padding: 40, textAlign: "center" }, children: [
      /* @__PURE__ */ i(Qe, { size: "lg" }),
      /* @__PURE__ */ m(ie, { style: { marginTop: 12 }, color: "muted", children: [
        "Loading ",
        e.plural.toLowerCase(),
        "..."
      ] })
    ] }) : x.length === 0 ? /* @__PURE__ */ m("div", { style: { padding: 48, textAlign: "center" }, children: [
      /* @__PURE__ */ m(ie, { size: "lg", weight: "bold", children: [
        "No ",
        e.plural,
        " found"
      ] }),
      /* @__PURE__ */ i(ie, { color: "muted", style: { marginTop: 6 }, children: v ? "No records match your search criteria." : `Get started by creating your first ${e.singular.toLowerCase()}.` })
    ] }) : /* @__PURE__ */ i("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ m("table", { style: { width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.875rem" }, children: [
      /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ m("tr", { style: { borderBottom: "2px solid #e2e8f0", backgroundColor: "#f8fafc" }, children: [
        y.map((h) => /* @__PURE__ */ i("th", { style: { padding: "12px 16px", fontWeight: 700, color: "#475569" }, children: h.label || h.name }, h.name)),
        (a || s) && /* @__PURE__ */ i("th", { style: { padding: "12px 16px", textAlign: "right", fontWeight: 700, color: "#475569" }, children: "Actions" })
      ] }) }),
      /* @__PURE__ */ i("tbody", { children: x.map((h, b) => /* @__PURE__ */ m(
        "tr",
        {
          style: {
            borderBottom: "1px solid #f1f5f9",
            backgroundColor: b % 2 === 0 ? "#ffffff" : "#fafafa"
          },
          children: [
            y.map((w) => /* @__PURE__ */ i("td", { style: { padding: "14px 16px", verticalAlign: "middle" }, children: String(h[w.name] !== void 0 ? h[w.name] : "") }, w.name)),
            (a || s) && /* @__PURE__ */ i("td", { style: { padding: "14px 16px", textAlign: "right", verticalAlign: "middle" }, children: /* @__PURE__ */ m("div", { style: { display: "inline-flex", gap: 8 }, children: [
              a && /* @__PURE__ */ m(
                Y,
                {
                  size: "sm",
                  variant: "outline",
                  onClick: () => a(h),
                  title: `Edit ${e.singular}`,
                  children: [
                    /* @__PURE__ */ i(jr, { size: 14, style: { marginRight: 4 } }),
                    " Edit"
                  ]
                }
              ),
              s && /* @__PURE__ */ m(
                Y,
                {
                  size: "sm",
                  variant: "danger",
                  onClick: () => s(h),
                  title: `Delete ${e.singular}`,
                  children: [
                    /* @__PURE__ */ i(qr, { size: 14, style: { marginRight: 4 } }),
                    " Delete"
                  ]
                }
              )
            ] }) })
          ]
        },
        h.id || b
      )) })
    ] }) })
  ] });
}
function Li({
  resource: e,
  apiOptions: r = { mockFallback: !0 },
  initialItems: t = [],
  title: n,
  subtitle: a
}) {
  const [s] = _(() => Un(e.name, e.endpoint, r)), [o, c] = _(t), [l, d] = _(!1), [p, u] = _(!1), [v, g] = _(!1), [x, k] = _(!1), [f, y] = _(null), [h, b] = _(!1), w = P(async () => {
    d(!0);
    try {
      const S = await s.list();
      c(S);
    } catch (S) {
      console.error(`Failed to refresh ${e.plural}:`, S);
    } finally {
      d(!1);
    }
  }, [s, e.plural]);
  B(() => {
    w();
  }, [w]);
  const $ = async (S) => {
    b(!0);
    try {
      await s.create(S), u(!1), await w();
    } finally {
      b(!1);
    }
  }, I = async (S) => {
    if (f) {
      b(!0);
      try {
        await s.update(f.id, S), g(!1), y(null), await w();
      } finally {
        b(!1);
      }
    }
  }, M = async () => {
    if (f) {
      b(!0);
      try {
        await s.delete(f.id), k(!1), y(null), await w();
      } finally {
        b(!1);
      }
    }
  };
  return /* @__PURE__ */ m("div", { style: { maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }, children: [
    /* @__PURE__ */ m("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }, children: [
      /* @__PURE__ */ m("div", { children: [
        /* @__PURE__ */ i(Ue, { level: 1, children: n || e.plural }),
        /* @__PURE__ */ i(ie, { color: "muted", style: { marginTop: 4 }, children: a || `Manage and synchronize all ${e.plural.toLowerCase()} in your application.` })
      ] }),
      /* @__PURE__ */ m(
        Y,
        {
          variant: "primary",
          onClick: () => u(!0),
          children: [
            /* @__PURE__ */ i(Fr, { size: 16, style: { marginRight: 6 } }),
            " Add ",
            e.singular
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i(
      Kn,
      {
        resource: e,
        items: o,
        isLoading: l,
        onEdit: (S) => {
          y(S), g(!0);
        },
        onDelete: (S) => {
          y(S), k(!0);
        },
        onRefresh: w
      }
    ),
    /* @__PURE__ */ i(
      ke,
      {
        isOpen: p,
        onClose: () => u(!1),
        title: `Add New ${e.singular}`,
        size: "md",
        children: /* @__PURE__ */ i(
          it,
          {
            fields: e.fields,
            onSubmit: $,
            onCancel: () => u(!1),
            submitLabel: `Create ${e.singular}`,
            isSubmitting: h
          }
        )
      }
    ),
    /* @__PURE__ */ i(
      ke,
      {
        isOpen: v,
        onClose: () => {
          g(!1), y(null);
        },
        title: `Edit ${e.singular}`,
        size: "md",
        children: f && /* @__PURE__ */ i(
          it,
          {
            fields: e.fields,
            initialValues: f,
            onSubmit: I,
            onCancel: () => {
              g(!1), y(null);
            },
            submitLabel: "Save Changes",
            isSubmitting: h
          }
        )
      }
    ),
    /* @__PURE__ */ i(
      ke,
      {
        isOpen: x,
        onClose: () => {
          k(!1), y(null);
        },
        title: `Delete ${e.singular}`,
        size: "sm",
        children: /* @__PURE__ */ m(pt, { direction: "column", spacing: "1rem", children: [
          /* @__PURE__ */ m(ie, { children: [
            "Are you sure you want to delete this ",
            e.singular.toLowerCase(),
            "? This action will remove the record."
          ] }),
          f && /* @__PURE__ */ i("div", { style: { padding: 12, backgroundColor: "#f8fafc", borderRadius: 6, fontSize: "0.875rem" }, children: /* @__PURE__ */ i("strong", { children: f.name || f.title || `ID: ${f.id}` }) }),
          /* @__PURE__ */ m("div", { style: { display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 12 }, children: [
            /* @__PURE__ */ i(
              Y,
              {
                variant: "ghost",
                onClick: () => {
                  k(!1), y(null);
                },
                disabled: h,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ i(
              Y,
              {
                variant: "danger",
                onClick: M,
                loading: h,
                children: "Confirm Delete"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function Jn(e) {
  const r = e.trim(), t = r.split(new RegExp("(?<=[.!?])\\s+|\\n+")).map((h) => h.trim()).filter(Boolean);
  let n = "Dashboard";
  const a = r.match(/(?:create\s+(?:a\s+)?page\s+called|page\s+called|dashboard\s+for\s+(?:a\s+)?)\s*["']?([a-zA-Z0-9\s_-]+?)["']?(?:\.|\n|$)/i);
  a && (n = a[1].trim());
  let s = "Item", o = "Items";
  const c = r.match(/(?:show\s+all|list\s+all|manage)\s+([a-zA-Z0-9_-]+)/i) || r.match(/(?:save\s+(?:the\s+)?|deleting\s+(?:a\s+)?)([a-zA-Z0-9_-]+)/i) || r.match(/(?:page\s+called|create\s+resource)\s+["']?([a-zA-Z0-9_-]+)["']?/i);
  if (c) {
    const h = c[1].trim();
    h.toLowerCase().endsWith("s") ? (o = h.charAt(0).toUpperCase() + h.slice(1), s = o.slice(0, -1)) : (s = h.charAt(0).toUpperCase() + h.slice(1), o = `${s}s`);
  }
  const l = [], d = r.match(/(?:form\s+with|fields?:?|ask\s+for:?)\s+([^.\n]+)/i);
  if (d) {
    const b = d[1].replace(/\band\b/gi, ",").split(",").map((w) => w.trim().replace(/^["']|["']$/g, "")).filter((w) => w.length > 0 && !/^(?:all|both|fields|with)$/i.test(w));
    for (const w of b) {
      const $ = w.replace(/[^a-zA-Z0-9_]/g, "");
      if (!$) continue;
      const I = $.toLowerCase();
      let M = "string", S;
      I.includes("email") ? M = "email" : I.includes("age") || I.includes("price") || I.includes("count") || I.includes("number") ? M = "number" : I.includes("role") ? (M = "select", S = ["Admin", "Manager", "Member", "Viewer"]) : I.includes("status") ? (M = "select", S = ["Active", "Pending", "Inactive"]) : I.includes("date") ? M = "date" : (I.includes("description") || I.includes("bio") || I.includes("note")) && (M = "textarea"), l.push({
        name: $.toLowerCase(),
        label: $.charAt(0).toUpperCase() + $.slice(1),
        type: M,
        options: S,
        validation: { required: !0 }
        // Default required if mentioned in prompt
      });
    }
  }
  l.length === 0 && l.push(
    { name: "name", label: "Name", type: "string", validation: { required: !0 } },
    { name: "email", label: "Email Address", type: "email", validation: { required: !0 } },
    { name: "role", label: "Role", type: "select", options: ["Admin", "Member", "Guest"] }
  );
  const p = /validate\s+(?:the\s+)?email/i.test(r), u = /require\s+(?:all|both)\s+fields/i.test(r);
  for (const h of l)
    u && (h.validation = { ...h.validation, required: !0 }), h.type === "email" && p && (h.validation = { ...h.validation, required: !0 });
  const v = {
    name: s,
    singular: s,
    plural: o,
    endpoint: `/api/${o.toLowerCase()}`,
    fields: l,
    searchableFields: l.filter((h) => h.type === "string" || h.type === "email").map((h) => h.name)
  }, g = /searchable|search/i.test(r), x = /paginated|pagination|pages/i.test(r), k = {
    id: `view-table-${o.toLowerCase()}`,
    title: `${o} Table`,
    type: "table",
    resourceName: s,
    searchable: g,
    paginated: x,
    pageSize: 10
  }, f = [
    {
      id: `action-create-${s.toLowerCase()}`,
      name: "create",
      label: `Add ${s}`,
      type: "create",
      targetResource: s,
      dialogTitle: `New ${s}`
    },
    {
      id: `action-edit-${s.toLowerCase()}`,
      name: "edit",
      label: `Edit ${s}`,
      type: "edit",
      targetResource: s,
      dialogTitle: `Edit ${s}`
    },
    {
      id: `action-delete-${s.toLowerCase()}`,
      name: "delete",
      label: `Delete ${s}`,
      type: "delete",
      targetResource: s,
      requiresConfirmation: /confirm/i.test(r) || !0,
      confirmMessage: `Are you sure you want to delete this ${s.toLowerCase()}?`
    }
  ], y = {
    id: `page-${n.toLowerCase().replace(/\s+/g, "-")}`,
    name: n,
    title: `${n}`,
    path: `/${n.toLowerCase().replace(/\s+/g, "-")}`,
    views: [k],
    actions: f
  };
  return {
    name: `${n.replace(/\s+/g, "")}App`,
    title: `${n} System`,
    description: `Generated from plain-English description: "${t[0] || r.slice(0, 60)}"`,
    resources: {
      [s]: v
    },
    pages: [y],
    api: {
      baseUrl: "",
      resources: {
        [s]: v.endpoint
      },
      mockStorageFallback: !0
    }
  };
}
function Qn(e) {
  var o, c, l, d;
  const r = e.split(`
`).map((p) => p.trim()).filter((p) => p && !p.startsWith("#") && !p.startsWith("//")), t = {}, n = [];
  let a = null, s = null;
  for (let p = 0; p < r.length; p++) {
    const u = r[p], v = u.match(/^resource\s+["']?([^"']+)["']?/i);
    if (v) {
      const h = v[1].trim();
      a = {
        name: h,
        singular: h,
        plural: h.endsWith("s") ? h : `${h}s`,
        endpoint: `/api/${h.toLowerCase()}s`,
        fields: [],
        searchableFields: []
      }, t[h] = a;
      continue;
    }
    const g = u.match(/^endpoint\s+["']?([^"']+)["']?/i);
    if (g && a) {
      a.endpoint = g[1].trim();
      continue;
    }
    const x = u.match(
      /^field\s+["']?([^"'\s]+)["']?\s+as\s+([a-zA-Z]+)(.*)$/i
    );
    if (x && a) {
      const h = x[1].trim(), b = x[2].toLowerCase(), w = x[3].trim(), $ = b === "text" || b === "string" ? "string" : b === "email" ? "email" : b === "number" ? "number" : b === "select" ? "select" : b === "textarea" ? "textarea" : "string", I = /required/i.test(w);
      let M;
      const S = w.match(/options\s+\[(.*?)\]/i);
      S && (M = S[1].split(",").map((C) => C.trim().replace(/^["']|["']$/g, "")));
      const T = {
        name: h,
        label: h.charAt(0).toUpperCase() + h.slice(1),
        type: $,
        options: M,
        validation: I ? { required: !0 } : void 0
      };
      a.fields.push(T), ($ === "string" || $ === "email") && ((o = a.searchableFields) == null || o.push(h));
      continue;
    }
    const k = u.match(/^page\s+["']?([^"']+)["']?/i);
    if (k) {
      const h = k[1].trim();
      s = {
        id: `page-${h.toLowerCase()}`,
        name: h,
        title: h,
        path: `/${h.toLowerCase()}`,
        views: [],
        actions: []
      }, n.push(s);
      continue;
    }
    const f = u.match(/^table\s+["']?([^"'\s]+)["']?(.*)$/i);
    if (f) {
      const h = f[1].trim(), b = f[2].trim(), w = /searchable/i.test(b) || !0, $ = {
        id: `view-table-${h.toLowerCase()}`,
        title: `${h} Table`,
        type: "table",
        resourceName: h,
        searchable: w,
        paginated: !0
      };
      s && s.views.push($);
      continue;
    }
    const y = u.match(/^action\s+["']?([^"'\s]+)["']?\s+(?:for\s+["']?([^"'\s]+)["']?)?(.*)$/i);
    if (y) {
      const h = y[1].toLowerCase(), b = ((c = y[2]) == null ? void 0 : c.trim()) || Object.keys(t)[0] || "Item", w = ((l = y[3]) == null ? void 0 : l.trim()) || "", $ = {
        id: `action-${h}-${b.toLowerCase()}`,
        name: h,
        label: h === "create" ? `Add ${b}` : h === "delete" ? `Delete ${b}` : h,
        type: h,
        targetResource: b,
        requiresConfirmation: /confirm/i.test(w) || h === "delete"
      };
      s && s.actions.push($);
      continue;
    }
  }
  if (n.length === 0 && Object.keys(t).length > 0) {
    const p = Object.values(t)[0];
    n.push({
      id: `page-${p.plural.toLowerCase()}`,
      name: p.plural,
      title: `${p.plural} Management`,
      path: `/${p.plural.toLowerCase()}`,
      views: [
        {
          id: `view-table-${p.name.toLowerCase()}`,
          title: `${p.plural} Table`,
          type: "table",
          resourceName: p.name,
          searchable: !0,
          paginated: !0
        }
      ],
      actions: [
        {
          id: `action-create-${p.name.toLowerCase()}`,
          name: "create",
          label: `Add ${p.singular}`,
          type: "create",
          targetResource: p.name
        },
        {
          id: `action-delete-${p.name.toLowerCase()}`,
          name: "delete",
          label: `Delete ${p.singular}`,
          type: "delete",
          targetResource: p.name,
          requiresConfirmation: !0
        }
      ]
    });
  }
  return {
    name: "GeneratedApp",
    title: ((d = n[0]) == null ? void 0 : d.title) || "Criation Application",
    resources: t,
    pages: n,
    api: {
      baseUrl: "",
      resources: Object.fromEntries(
        Object.entries(t).map(([p, u]) => [p, u.endpoint])
      ),
      mockStorageFallback: !0
    }
  };
}
function Yn(e) {
  switch (e.type) {
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "select":
      return e.options && e.options.length > 0 ? e.options.map((r) => typeof r == "string" ? `"${r}"` : `"${r.value}"`).join(" | ") : "string";
    case "string":
    case "email":
    case "date":
    case "textarea":
    default:
      return "string";
  }
}
function Zn(e) {
  var t;
  let r = `/**
 * Generated Resource Type Definitions
 * Auto-generated by Criation UI Compiler
 */

`;
  for (const [n, a] of Object.entries(e.resources)) {
    r += `export interface ${a.name} {
`, r += `  id: string | number;
`;
    for (const s of a.fields) {
      const o = (t = s.validation) != null && t.required ? "" : "?";
      r += `  ${s.name}${o}: ${Yn(s)};
`;
    }
    r += `  createdAt?: string;
`, r += `  updatedAt?: string;
`, r += `}

`;
  }
  return r;
}
function Xn(e, r) {
  var o;
  const t = r.pages.find((c) => c.name === e) || r.pages[0], n = ((o = t == null ? void 0 : t.views[0]) == null ? void 0 : o.resourceName) || Object.keys(r.resources)[0], a = r.resources[n];
  if (!a)
    throw new Error(`Page '${e}' has no valid resource.`);
  const s = JSON.stringify(a.fields, null, 2);
  return `import React from "react";
import { ResourcePage, defineResource } from "@criation/ui";
import type { ${a.name} } from "../types/resources";

// Resource configuration generated from Application Model
export const ${a.name}Resource = defineResource({
  name: "${a.name}",
  singular: "${a.singular}",
  plural: "${a.plural}",
  endpoint: "${a.endpoint}",
  fields: ${s}
});

// Seed data for standalone demonstration
const initial${a.plural}: ${a.name}[] = [
  { id: "1", name: "Alex Morgan", email: "alex.morgan@example.com", role: "Admin" },
  { id: "2", name: "Jordan Smith", email: "jordan.smith@example.com", role: "Member" },
  { id: "3", name: "Taylor Reed", email: "taylor.reed@example.com", role: "Member" }
];

export function ${t.name}Page() {
  return (
    <ResourcePage
      resource={${a.name}Resource}
      initialItems={initial${a.plural}}
      title="${t.title || a.plural}"
      subtitle="Search, add, edit, and manage all ${a.plural.toLowerCase()} with live state synchronization."
      apiOptions={{ mockFallback: true }}
    />
  );
}

export default ${t.name}Page;
`;
}
function ea(e) {
  const t = `${e.pages[0].name}Page`;
  return `import React from "react";
import { ${t} } from "./pages/${t}";

export function App() {
  return (
    <div className="criation-app-root" style={{ minHeight: "100vh", backgroundColor: "#f8fafc", color: "#0f172a" }}>
      <header style={{ backgroundColor: "#0f172a", color: "#ffffff", padding: "16px 24px", borderBottom: "1px solid #1e293b" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Criation</span>
            <span style={{ fontSize: "0.8rem", backgroundColor: "rgba(99, 102, 241, 0.2)", border: "1px solid #6366f1", color: "#a5b4fc", padding: "2px 8px", borderRadius: 12, fontWeight: 700 }}>
              GENERATED APP
            </span>
          </div>
          <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>${e.title || e.name}</span>
        </div>
      </header>

      <main>
        <${t} />
      </main>
    </div>
  );
}

export default App;
`;
}
function ta(e) {
  return JSON.stringify(
    {
      name: e.name.toLowerCase().replace(/[^a-z0-9-_]/g, "-"),
      version: "0.1.0",
      private: !0,
      type: "module",
      scripts: {
        dev: "vite",
        build: "tsc && vite build",
        preview: "vite preview"
      },
      dependencies: {
        "@criation/ui": "file:../UI_Librabry",
        "lucide-react": "^1.16.0",
        react: "^18.3.1",
        "react-dom": "^18.3.1"
      },
      devDependencies: {
        "@types/react": "^18.3.18",
        "@types/react-dom": "^18.3.5",
        "@vitejs/plugin-react": "^4.3.4",
        typescript: "^5.7.2",
        vite: "^6.0.0"
      }
    },
    null,
    2
  );
}
function ra(e) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${e.title || e.name}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>`;
}
function na() {
  return `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@criation/ui/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
}
function aa() {
  return `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
`;
}
function ia() {
  return JSON.stringify(
    {
      compilerOptions: {
        target: "ES2020",
        useDefineForClassFields: !0,
        lib: ["ES2020", "DOM", "DOM.Iterable"],
        module: "ESNext",
        skipLibCheck: !0,
        moduleResolution: "bundler",
        allowImportingTsExtensions: !1,
        resolveJsonModule: !0,
        isolatedModules: !0,
        noEmit: !0,
        jsx: "react-jsx",
        strict: !0,
        noUnusedLocals: !1,
        noUnusedParameters: !1,
        noFallthroughCasesInSwitch: !0
      },
      include: ["src"]
    },
    null,
    2
  );
}
function mr(e) {
  const r = [];
  r.push({
    path: "src/types/resources.ts",
    content: Zn(e)
  });
  for (const t of e.pages) {
    const n = `${t.name}Page.tsx`;
    r.push({
      path: `src/pages/${n}`,
      content: Xn(t.name, e)
    });
  }
  return r.push({
    path: "src/App.tsx",
    content: ea(e)
  }), r.push({
    path: "src/main.tsx",
    content: na()
  }), r.push({
    path: "package.json",
    content: ta(e)
  }), r.push({
    path: "index.html",
    content: ra(e)
  }), r.push({
    path: "vite.config.ts",
    content: aa()
  }), r.push({
    path: "tsconfig.json",
    content: ia()
  }), {
    files: r,
    summary: {
      resourceCount: Object.keys(e.resources).length,
      pageCount: e.pages.length,
      fileCount: r.length
    }
  };
}
function zi(e) {
  const r = Jn(e), t = ur(r);
  return {
    ...mr(r),
    model: r,
    errors: t
  };
}
function Mi(e) {
  const r = Qn(e), t = ur(r);
  return {
    ...mr(r),
    model: r,
    errors: t
  };
}
export {
  ti as Accordion,
  An as Alert,
  Mn as AlertDialog,
  nt as ApiError,
  xn as AspectRatio,
  dr as AuthContext,
  Ni as AuthGuard,
  Si as AuthLayout,
  wi as AuthProvider,
  Cn as Avatar,
  rr as Badge,
  Je as BaseAlert,
  Ze as BaseAlertDialog,
  He as BaseAspectRatio,
  tr as BaseBadge,
  Y as BaseButton,
  Ar as BaseCard,
  qe as BaseCollapsible,
  je as BaseColorPicker,
  Pe as BaseCombobox,
  Ee as BaseContainer,
  ve as BaseDivider,
  Fe as BaseFlex,
  gs as BaseFooter,
  ys as BaseGrid,
  Zt as BaseHeading,
  ir as BaseImage,
  gt as BaseInput,
  Ge as BaseLabel,
  Xt as BaseLink,
  We as BaseMultiSelect,
  bs as BaseNavbar,
  Be as BaseOTPInput,
  Oe as BaseRating,
  xe as BaseResult,
  Ve as BaseScrollArea,
  De as BaseSearchInput,
  pt as BaseStack,
  Xe as BaseStepper,
  Yt as BaseText,
  Ke as BaseTimeline,
  gn as Box,
  ui as Breadcrumbs,
  ht as Button,
  Yr as ButtonGroup,
  ha as COMPONENT_REGISTRY,
  yt as Card,
  rn as Checkbox,
  kn as Code,
  Nn as Collapsible,
  hn as ColorPicker,
  mn as Combobox,
  fe as Container,
  di as ContextMenu,
  va as Criation,
  Bi as DEFAULT_SIZE,
  Oi as DEFAULT_VARIANT,
  Ci as DashboardLayout,
  on as DatePicker,
  vn as Divider,
  oi as Drawer,
  pi as DropdownMenu,
  en as EmailInput,
  ai as EmptyState,
  si as ErrorBoundary,
  ii as ErrorState,
  Tn as FOCUSABLE_ELEMENTS,
  cn as FileUpload,
  bn as Flex,
  vs as Footer,
  Pn as Form,
  cr as FormError,
  Wn as FormField,
  or as FormLabel,
  gi as FormProvider,
  xs as Grid,
  Ue as Heading,
  On as Icon,
  Qr as IconButton,
  sr as Image,
  pe as Input,
  at as KeyCodes,
  _n as Label,
  _i as LandingLayout,
  er as Link,
  ke as Modal,
  fn as MultiSelect,
  $r as Navbar,
  jn as NetworkError,
  Vn as NotFoundPage,
  tn as NumberInput,
  dn as OTPInput,
  Pi as Page,
  fi as Pagination,
  Xr as PasswordInput,
  ci as Popover,
  ni as Progress,
  vi as ProtectedRoute,
  xi as PublicRoute,
  nn as Radio,
  un as Rating,
  Li as ResourcePage,
  Kn as ResourceTable,
  Hn as Result,
  it as SchemaForm,
  wn as ScrollArea,
  ln as SearchInput,
  Gt as Select,
  Ei as SettingsLayout,
  Rn as Sidebar,
  Wi as SimplePage,
  In as Skeleton,
  sn as Slider,
  ei as Spacer,
  Qe as Spinner,
  ws as Stack,
  ri as StatCard,
  Dn as Stepper,
  an as Switch,
  ji as TRANSITION_FAST,
  Fi as TRANSITION_NORMAL,
  Hi as TRANSITION_SLOW,
  Sn as Table,
  mi as Tabs,
  ie as Text,
  Ut as TextArea,
  Zr as TextInput,
  Ns as ThemeProvider,
  En as Timeline,
  Fn as TimeoutError,
  ks as ToastProvider,
  li as Tooltip,
  hr as UI_PREFIX,
  Bn as Video,
  _s as Website,
  Ii as announceToScreenReader,
  Vi as attachBadgeChaining,
  qi as attachButtonChaining,
  Ui as attachCardChaining,
  Gi as attachHeadingChaining,
  Ki as attachImageChaining,
  Ji as attachInputChaining,
  Qi as attachLinkChaining,
  Yi as attachTextChaining,
  Vt as breakpoints,
  N as classNames,
  Zi as cn,
  xa as colors,
  zi as compileEnglishToReact,
  Mi as compileStructuredToReact,
  ga as configureCriationUI,
  Xi as cr,
  ki as createApiClient,
  Ie as createBadgeFromShorthand,
  es as createButtonDOMElement,
  yr as createButtonFromShorthand,
  wr as createCardFromShorthand,
  F as createChainableProxy,
  $e as createHeadingFromShorthand,
  Le as createImageFromShorthand,
  vr as createInputFromShorthand,
  Te as createLinkFromShorthand,
  Un as createResourceApi,
  bi as createSchemaValidator,
  Ae as createTextFromShorthand,
  Cs as createWebsite,
  Ss as createWebsiteLayout,
  Ia as darkTheme,
  Za as debounce,
  Gr as defaultUIConfig,
  Ti as defineResource,
  Jr as describe,
  ba as dsl,
  ts as extractEnglishAlign,
  rs as extractEnglishAuth,
  ns as extractEnglishColor,
  as as extractEnglishExternal,
  is as extractEnglishInputType,
  ss as extractEnglishLevel,
  os as extractEnglishPath,
  cs as extractEnglishSize,
  qa as formatCompact,
  Va as formatCurrency,
  Fa as formatDate,
  Ua as formatFileSize,
  qt as formatNumber,
  Ha as formatRelativeTime,
  ea as generateAppShell,
  ra as generateIndexHtml,
  na as generateMainTsx,
  ta as generatePackageJson,
  Xn as generatePageComponent,
  mr as generateReactApplication,
  Zn as generateResourceTypes,
  ia as generateTsConfig,
  Ai as generateUniqueId,
  aa as generateViteConfig,
  ya as getCriationUIConfig,
  Ln as getFocusableElements,
  $i as isActionKey,
  ls as isAuthValue,
  ds as isBoxSizeValue,
  us as isColorValue,
  ms as isPathValue,
  fs as isPointerValue,
  ps as isPositionValue,
  Aa as lightTheme,
  $a as mediaQueryDown,
  Ea as mediaQueryUp,
  J as memoryStore,
  Es as mountWebsite,
  Nr as navigation,
  ct as parseBadgeShorthand,
  gr as parseButtonShorthand,
  xr as parseCardShorthand,
  Ht as parseCriationDSL,
  Kr as parseDSL,
  Jn as parseEnglishDescription,
  st as parseHeadingShorthand,
  dt as parseImageShorthand,
  br as parseInputShorthand,
  lt as parseLinkShorthand,
  Qn as parseStructuredDSL,
  ot as parseTextShorthand,
  Ca as radii,
  $s as renderWebsite,
  be as request,
  _a as shadows,
  ka as sizing,
  wa as spacing,
  Xa as throttle,
  zn as trapFocus,
  Na as typography,
  As as ui,
  et as useAuth,
  Re as useClickOutside,
  Ra as useClipboard,
  zs as useCrudWorkflow,
  Ms as useDataQuery,
  La as useDebounce,
  Ma as useDisclosure,
  Wa as useEventListener,
  Ye as useFocusTrap,
  hi as useForm,
  yi as useFormContext,
  Oa as useIntersectionObserver,
  ja as useKeyPress,
  za as useLocalStorage,
  Ta as useMediaQuery,
  Ba as useOnlineStatus,
  Pa as usePrevious,
  Is as useTheme,
  Ts as useToast,
  Da as useWindowSize,
  ur as validateApplicationModel,
  Ja as validateEmail,
  Gn as validateFieldValue,
  Qa as validateMinLength,
  Ka as validateRequired,
  Ya as validateUrl,
  Ga as validators,
  Sa as zIndex
};
