"use client";
import { jsxs as f, jsx as e } from "react/jsx-runtime";
import h, { forwardRef as N } from "react";
import { c as u, d as v, e as i } from "./shorthand-Bjjv6Cn9.js";
const t = N(
  ({
    variant: a = "outline",
    padding: r = "md",
    interactive: d = !1,
    header: c,
    footer: s,
    className: o = "",
    children: l,
    ...m
  }, p) => /* @__PURE__ */ f(
    "div",
    {
      ref: p,
      className: u(
        "cr-card",
        `cr-card--${a}`,
        `cr-card--padding-${r}`,
        d && "cr-card--interactive",
        o
      ),
      ...m,
      children: [
        c && /* @__PURE__ */ e("div", { className: "cr-card__header", children: c }),
        /* @__PURE__ */ e("div", { className: "cr-card__body", children: l }),
        s && /* @__PURE__ */ e("div", { className: "cr-card__footer", children: s })
      ]
    }
  )
);
t.displayName = "BaseCard";
function n(...a) {
  const r = a[0];
  if (r && typeof r == "object" && !Array.isArray(r) && !h.isValidElement(r) && ("children" in r || "variant" in r || "padding" in r))
    return /* @__PURE__ */ e(t, { ...r });
  const c = v(a);
  return i(c);
}
n.displayName = "Card";
n.create = (a) => i(a);
export {
  t as BaseCard,
  n as Card
};
