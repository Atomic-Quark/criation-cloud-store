"use client";
import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as j } from "react";
import { c as k, p as f, a as b, b as A } from "./shorthand-Bjjv6Cn9.js";
const _ = j(
  ({
    variant: r = "primary",
    size: s = "md",
    loading: t = !1,
    loadingText: n,
    leftIcon: c,
    rightIcon: o,
    fullWidth: u = !1,
    cursor: l,
    color: a,
    background: p,
    disabled: i,
    className: d = "",
    children: y,
    type: B = "button",
    style: N,
    ...w
  }, x) => {
    const v = k(
      "cr-button",
      `cr-button--${r}`,
      `cr-button--${s}`,
      u && "cr-button--full-width",
      t && "is-loading",
      i && "is-disabled",
      d
    ), S = {
      ...N,
      cursor: l || (i || t ? "not-allowed" : "pointer"),
      ...a ? { color: a } : {},
      ...p ? { background: p } : {}
    };
    return /* @__PURE__ */ h(
      "button",
      {
        ref: x,
        ...w,
        type: B,
        className: v,
        style: S,
        disabled: i || t,
        "aria-busy": t || void 0,
        "aria-disabled": i || t,
        children: [
          t && /* @__PURE__ */ e("span", { className: "cr-button__spinner", "aria-hidden": "true", children: /* @__PURE__ */ h(
            "svg",
            {
              className: "cr-animate-spin",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              children: [
                /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10", strokeOpacity: "0.25" }),
                /* @__PURE__ */ e("path", { d: "M12 2a10 10 0 0 1 10 10" })
              ]
            }
          ) }),
          !t && c && /* @__PURE__ */ e("span", { className: "cr-button__icon cr-button__icon--left", children: c }),
          /* @__PURE__ */ e("span", { className: "cr-button__content", children: t && n ? n : y }),
          !t && o && /* @__PURE__ */ e("span", { className: "cr-button__icon cr-button__icon--right", children: o })
        ]
      }
    );
  }
);
_.displayName = "BaseButton";
function m(...r) {
  if (typeof r[0] == "string" || Array.isArray(r[0]) && r[0].raw) {
    const n = f(r);
    return b(n);
  }
  const { ref: s, ...t } = r[0] || {};
  return /* @__PURE__ */ e(_, { ref: s, ...t });
}
m.displayName = "Button";
m.create = (r) => b(r);
m.element = (r, s, t, n, c, o, u, l) => {
  const a = f([
    r,
    s,
    t,
    n,
    c,
    o,
    u,
    l
  ]);
  return A(a);
};
export {
  _ as BaseButton,
  m as Button
};
