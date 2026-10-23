"use client";
import { jsxs as f, jsx as e } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import { c as B, f as I, g as h } from "./shorthand-Bjjv6Cn9.js";
const _ = g(
  ({
    size: r = "md",
    error: n,
    leftIcon: i,
    rightIcon: a,
    isClearable: y = !1,
    onClear: b,
    cursor: w,
    disabled: s,
    className: x = "",
    style: t,
    value: d,
    ...c
  }, v) => {
    const u = !!n, o = typeof n == "string" ? n : void 0, p = y && !s && !!d, l = c.id ? `${c.id}-error` : void 0, m = /* @__PURE__ */ f(
      "div",
      {
        className: B(
          "cr-input-wrapper",
          `cr-input-wrapper--${r}`,
          u && "has-error",
          s && "is-disabled",
          i && "has-left-icon",
          (a || p) && "has-right-icon",
          x
        ),
        style: t,
        children: [
          i && /* @__PURE__ */ e("span", { className: "cr-input__icon cr-input__icon--left", children: i }),
          /* @__PURE__ */ e(
            "input",
            {
              ref: v,
              disabled: s,
              value: d,
              className: "cr-input",
              style: { cursor: w },
              "aria-invalid": u,
              "aria-describedby": o && l ? l : c["aria-describedby"],
              ...c
            }
          ),
          p && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "cr-input__clear",
              onClick: b,
              tabIndex: -1,
              "aria-label": "Clear input",
              children: "✕"
            }
          ),
          !p && a && /* @__PURE__ */ e("span", { className: "cr-input__icon cr-input__icon--right", children: a })
        ]
      }
    );
    return o ? /* @__PURE__ */ f("div", { className: "cr-input-field", style: { display: "inline-flex", flexDirection: "column", width: (t == null ? void 0 : t.width) || "100%" }, children: [
      m,
      /* @__PURE__ */ e("span", { id: l, className: "cr-input__error-message", role: "alert", style: { color: "var(--cr-danger, #f43f5e)", fontSize: "0.8125rem", marginTop: "0.25rem" }, children: o })
    ] }) : m;
  }
);
_.displayName = "BaseInput";
function N(...r) {
  if (typeof r[0] == "string" || Array.isArray(r[0]) && r[0].raw || r.length === 0) {
    const a = I(r);
    return h(a);
  }
  const { ref: n, ...i } = r[0] || {};
  return /* @__PURE__ */ e(_, { ref: n, ...i });
}
N.displayName = "Input";
N.create = (r) => h(r);
export {
  _ as BaseInput,
  N as Input
};
