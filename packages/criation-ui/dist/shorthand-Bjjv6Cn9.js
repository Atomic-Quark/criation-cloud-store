"use client";
import { jsxs as _, jsx as b } from "react/jsx-runtime";
import W from "react";
const Z = "cr", ve = "md", ze = "primary", Ce = "150ms cubic-bezier(0.4, 0, 0.2, 1)", ke = "250ms cubic-bezier(0.4, 0, 0.2, 1)", Le = "350ms cubic-bezier(0.4, 0, 0.2, 1)";
function R(...e) {
  const r = [];
  for (const t of e)
    if (t) {
      if (typeof t == "string" || typeof t == "number")
        r.push(String(t).trim());
      else if (Array.isArray(t)) {
        const i = R(...t);
        i && r.push(i);
      } else if (typeof t == "object")
        for (const [i, l] of Object.entries(t))
          l && r.push(i);
    }
  return r.filter(Boolean).join(" ");
}
function Ne(e, r, t) {
  const i = `${Z}-${e}`, l = [i];
  if (r && l.push(`${i}--${r}`), t)
    for (const [c, o] of Object.entries(t))
      o && l.push(`${i}--${c}`);
  return l.join(" ");
}
const We = R, $ = {
  navigate: (e, r) => {
    typeof window > "u" || (r != null && r.replace ? window.history.replaceState(r.state || null, "", e) : window.history.pushState((r == null ? void 0 : r.state) || null, "", e), window.dispatchEvent(new PopStateEvent("popstate")));
  },
  back: () => {
    typeof window < "u" && window.history.back();
  },
  forward: () => {
    typeof window < "u" && window.history.forward();
  },
  getPathDirection: (e, r) => r.length > e.length ? "forward" : r.length < e.length ? "backward" : "replace"
}, H = /* @__PURE__ */ new Set([
  "red",
  "blue",
  "green",
  "amber",
  "yellow",
  "purple",
  "pink",
  "indigo",
  "cyan",
  "emerald",
  "rose",
  "violet",
  "orange",
  "teal",
  "sky",
  "gray",
  "dark",
  "white",
  "black",
  "danger",
  "primary",
  "secondary",
  "success",
  "warning",
  "info",
  "outline",
  "ghost",
  "gradient"
]);
function B(e) {
  if (typeof e != "string") return !1;
  const r = e.trim().toLowerCase();
  return !!(H.has(r) || r.startsWith("#") || r.startsWith("rgb") || r.startsWith("hsl"));
}
function T(e) {
  if (typeof e != "string") return !1;
  const r = e.trim().toLowerCase();
  return !!(r.startsWith("/") || r.startsWith("http://") || r.startsWith("https://") || r.startsWith("./") || r.startsWith("../") || r.startsWith("#") || r === "back" || r === "forward");
}
function j(e) {
  if (typeof e != "string") return !1;
  const r = e.trim().toLowerCase();
  return !!(r.includes("px") || r.includes("rem") || r.includes("em") || r.includes("%") || r.includes("vh") || r.includes("vw") || /^\d+(\.\d+)?\s+\d+(\.\d+)?$/.test(r));
}
function G(e) {
  if (typeof e != "string") return !1;
  const r = e.trim().toLowerCase();
  return r === "auth" || r === "user" || r === "admin" || r === "required" || r === "protected" || r === "login";
}
function y(e) {
  if (typeof e != "string") return !1;
  const r = e.trim().toLowerCase();
  return r === "relative" || r === "absolute" || r === "fixed" || r === "sticky" || r === "static";
}
function A(e) {
  if (typeof e != "string") return !1;
  const r = e.trim().toLowerCase();
  return r === "pointer" || r === "default" || r === "not-allowed" || r === "wait" || r === "text" || r === "grab";
}
function U(e) {
  if (typeof e != "string") return;
  const r = e.trim();
  if (T(r)) return r;
  const t = r.match(/\b(?:go\s+to|link\s+to|navigate\s+to|to|url|path|href)\s+([^\s,]+)/i);
  if (t) {
    const i = t[1];
    if (T(i) || i.startsWith("/") || i.startsWith("http") || i.startsWith("#"))
      return i;
  }
}
function S(e) {
  if (typeof e != "string") return;
  const r = e.trim().toLowerCase();
  if (B(r)) return r;
  const t = r.match(/\b(?:colored|color|in|bg|background)\s+([a-zA-Z#0-9]+)/i);
  if (t && (H.has(t[1].toLowerCase()) || B(t[1])))
    return t[1].toLowerCase();
  if (/\b(?:with\s+)?gradient\b/i.test(r)) return "gradient";
  if (/\boutline\b/i.test(r)) return "outline";
}
function X(e) {
  if (typeof e != "string") return;
  const r = e.trim().toLowerCase();
  if (G(r) || /\b(?:auth\s*required|login\s*required|login\s*needed|protected|member\s*only|requires?\s*login|requires?\s*auth)\b/i.test(r))
    return "required";
}
function x(e) {
  if (typeof e != "string") return;
  const r = e.trim();
  if (j(r)) return r;
  const t = r.match(/\b(?:size|padding|width|height|box)\s+([0-9a-zA-Z%.\s]+)/i);
  if (t && j(t[1].trim())) return t[1].trim();
  if (/\b(?:small|sm)\b/i.test(r)) return "sm";
  if (/\b(?:large|lg)\b/i.test(r)) return "lg";
  if (/\b(?:extra\s+large|2xl|xl)\b/i.test(r)) return "xl";
}
function M(e) {
  if (typeof e != "string") return;
  const r = e.trim().toLowerCase();
  if (r === "center" || r === "left" || r === "right" || r === "justify") return r;
  if (/\b(?:centered|aligned?\s+center|align\s+center)\b/i.test(r)) return "center";
  if (/\b(?:aligned?\s+right|align\s+right)\b/i.test(r)) return "right";
  if (/\b(?:aligned?\s+left|align\s+left)\b/i.test(r)) return "left";
}
function Y(e) {
  if (e == null) return;
  if (typeof e == "number" && e >= 1 && e <= 6) return e;
  const r = String(e).trim().toLowerCase();
  if (/^[1-6]$/.test(r)) return parseInt(r, 10);
  const t = r.match(/\b(?:level\s+([1-6])|heading\s+([1-6])|h([1-6]))\b/i);
  if (t) {
    const i = parseInt(t[1] || t[2] || t[3], 10);
    if (i >= 1 && i <= 6) return i;
  }
}
function J(e) {
  return typeof e == "boolean" ? e : typeof e != "string" ? !1 : /\b(?:new\s+tab|external|blank|open\s+in\s+new\s+tab)\b/i.test(e);
}
function K(e) {
  if (typeof e != "string") return;
  const r = e.trim().toLowerCase();
  if (["text", "password", "email", "number", "search", "tel", "url", "date"].includes(r)) return r;
  const i = r.match(/\b(?:type|as)\s+(text|email|password|number|search|tel|url|date)\b/i);
  if (i) return i[1].toLowerCase();
}
function w(e, r) {
  const t = { ...e };
  for (const i of Object.getOwnPropertySymbols(e))
    t[i] = e[i];
  return Object.assign(t, r), t;
}
function Q(e, r) {
  const t = (i) => te({ ...r, ...i });
  return w(e, {
    build: () => e,
    variant: (i) => t({ color: i }),
    disabled: (i = !0) => t({ disabled: i }),
    loading: (i = !0) => t({ loading: i }),
    red: () => t({ color: "red" }),
    blue: () => t({ color: "blue" }),
    green: () => t({ color: "green" }),
    amber: () => t({ color: "amber" }),
    yellow: () => t({ color: "yellow" }),
    purple: () => t({ color: "purple" }),
    pink: () => t({ color: "pink" }),
    cyan: () => t({ color: "cyan" }),
    dark: () => t({ color: "dark" }),
    white: () => t({ color: "white" }),
    outline: () => t({ color: "outline" }),
    gradient: () => t({ color: "gradient" }),
    color: (i) => t({ color: i }),
    link: (i) => t({ pathDirection: i }),
    to: (i) => t({ pathDirection: i }),
    back: () => t({ pathDirection: "back" }),
    forward: () => t({ pathDirection: "forward" }),
    onClick: (i) => t({ onClick: i }),
    auth: (i = "required") => t({ auth: i }),
    loginRequired: () => t({ auth: "required" }),
    size: (i) => t({ boxSize: i }),
    small: () => t({ boxSize: "6px 14px" }),
    large: () => t({ boxSize: "14px 28px" }),
    fullWidth: () => t({ boxSize: "100%" }),
    position: (i) => t({ position: i }),
    pointer: (i) => t({ pointer: i }),
    id: (i) => t({ id: i }),
    className: (i) => t({ className: i })
  });
}
function O(e) {
  if (Array.isArray(e[0]) && e[0].raw)
    return D(String(e[0][0]));
  if (e.length === 1 && typeof e[0] == "string" && e[0].includes(","))
    return D(e[0]);
  if (e.length === 2 && typeof e[0] == "string" && typeof e[1] == "object" && e[1] !== null) {
    const f = e[1];
    return {
      label: e[0].replace(/[_-]+/g, " "),
      className: f.className || e[0],
      pathDirection: f.to || f.path || f.href,
      color: f.color,
      boxSize: f.size || f.boxSize,
      id: f.id,
      auth: f.auth ? "required" : void 0,
      position: f.position || "relative",
      pointer: f.pointer || "pointer",
      onClick: f.onClick
    };
  }
  if (e.length >= 8)
    return ee(
      e[0],
      e[1],
      e[2],
      e[3],
      e[4],
      e[5],
      e[6],
      e[7]
    );
  const r = e[0] !== void 0 ? String(e[0]).trim() : "Button", t = r.replace(/[_-]+/g, " ") || "Button", i = r;
  let l, c, o, s, n = "relative", a = "pointer", d, u;
  for (let f = 1; f < e.length; f++) {
    const p = e[f];
    if (p == null || p === "") continue;
    const h = U(p), g = S(p), v = X(p), m = x(p);
    typeof p == "function" ? u = p : h && !l ? l = h : g && !c ? c = g : m && !o ? o = m : v && !s ? s = v : y(p) && n === "relative" ? n = String(p).trim() : A(p) && a === "pointer" ? a = String(p).trim() : !d && typeof p == "string" && p.toLowerCase() !== "none" && p.toLowerCase() !== "id" && (d = p.replace(/^#/, "").trim());
  }
  return {
    label: t,
    className: i,
    boxSize: o,
    id: d,
    auth: s,
    pathDirection: l,
    color: c,
    position: n,
    pointer: a,
    onClick: u
  };
}
function D(e) {
  let r = e.trim();
  r.startsWith("Button") && (r = r.replace(/^Button\s*=\s*/, "")), r.endsWith(".") && (r = r.slice(0, -1).trim());
  const t = r.split(/,\s*(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((i) => i.trim().replace(/^["']|["']$/g, ""));
  return O(t);
}
function ee(e, r, t, i, l, c, o, s) {
  const n = e ? String(e).trim() : "";
  let a = "Button", d = "cr-button-custom";
  n && n.toLowerCase() !== "class" && (a = n.replace(/[_-]+/g, " "), d = n);
  const u = r ? String(r).trim() : "";
  let f;
  u && u.toLowerCase() !== "box size" && u !== "none" && (f = u);
  const p = t ? String(t).trim() : "";
  let h;
  p && p.toLowerCase() !== "id" && p !== "none" && (h = p);
  const g = i ? String(i).trim() : "";
  let v;
  if (g) {
    const L = g.toLowerCase();
    (L === "auth" || L === "required" || L === "user" || L === "admin") && (v = g);
  }
  const m = l ? String(l).trim() : "";
  let N;
  m && m.toLowerCase() !== "path_direction" && m !== "none" && (N = m);
  const z = c ? String(c).trim() : "";
  let I;
  z && z.toLowerCase() !== "color" && z !== "none" && (I = z);
  const C = o ? String(o).trim() : "";
  let E = "relative";
  C && C.toLowerCase() !== "position" && C !== "none" && (E = C);
  const k = s ? String(s).trim() : "";
  let V = "pointer";
  return k && k.toLowerCase() !== "pointer" && k !== "none" && (V = k), {
    className: d,
    label: a,
    boxSize: f,
    id: h,
    auth: v,
    pathDirection: N,
    color: I,
    position: E,
    pointer: V
  };
}
function te(e) {
  const {
    className: r,
    label: t = "Button",
    boxSize: i,
    id: l,
    auth: c,
    pathDirection: o,
    color: s,
    position: n = "relative",
    pointer: a = "pointer",
    disabled: d,
    loading: u,
    onClick: f
  } = e, p = (m) => {
    if (!(d || u)) {
      if (c && !(typeof window < "u" ? localStorage.getItem("cr-auth-user") : null)) {
        typeof window < "u" && window.dispatchEvent(new CustomEvent("criation:auth-required", { detail: { label: t, pathDirection: o } }));
        return;
      }
      f == null || f(m), o && (o.startsWith("http://") || o.startsWith("https://") ? window.open(o, "_blank") : o === "back" ? $.back() : o === "forward" ? $.forward() : $.navigate(o));
    }
  }, h = {
    cursor: d || u ? "not-allowed" : a || "pointer",
    position: n || "relative",
    opacity: d ? 0.6 : 1
  };
  if (i && (i.includes("px") || i.includes("rem") || i.includes("%") || i.includes(" ")) && (h.padding = i), s) {
    const m = s.toLowerCase();
    m === "red" || m === "danger" ? (h.background = "linear-gradient(135deg, #f43f5e, #e11d48)", h.color = "#ffffff", h.borderColor = "transparent") : m === "blue" || m === "primary" || m === "indigo" ? (h.background = "linear-gradient(135deg, #6366f1, #4f46e5)", h.color = "#ffffff", h.borderColor = "transparent") : m === "green" || m === "success" ? (h.background = "linear-gradient(135deg, #10b981, #059669)", h.color = "#ffffff", h.borderColor = "transparent") : m === "amber" || m === "warning" || m === "orange" ? (h.background = "linear-gradient(135deg, #f59e0b, #d97706)", h.color = "#ffffff", h.borderColor = "transparent") : m === "cyan" || m === "secondary" ? (h.background = "linear-gradient(135deg, #0ea5e9, #0284c7)", h.color = "#ffffff", h.borderColor = "transparent") : m === "outline" ? (h.background = "transparent", h.color = "var(--cr-text-primary)", h.border = "1px solid var(--cr-border-strong)") : (h.background = s, h.color = "#ffffff");
  }
  const g = ["cr-button", u && "is-loading", d && "is-disabled", r].filter(Boolean).join(" ");
  return Q(/* @__PURE__ */ b(
    "button",
    {
      id: l,
      type: "button",
      className: g,
      style: h,
      disabled: d || u,
      "aria-busy": u || void 0,
      onClick: p,
      children: u ? "Loading..." : t
    },
    l || t
  ), e);
}
function $e(e) {
  const r = document.createElement("button");
  return r.type = "button", r.className = `cr-button ${e.className || ""}`, r.textContent = e.label || "Button", e.id && (r.id = e.id), e.boxSize && (r.style.padding = e.boxSize), e.position && (r.style.position = e.position), e.pointer && (r.style.cursor = e.pointer), e.color && (e.color === "red" ? (r.style.background = "#e11d48", r.style.color = "#ffffff") : (r.style.background = e.color, r.style.color = "#ffffff")), r.onclick = () => {
    e.pathDirection && (window.location.href = e.pathDirection);
  }, r;
}
function re(e, r) {
  const t = (i) => ne({ ...r, ...i });
  return w(e, {
    build: () => e,
    email: () => t({ type: "email" }),
    password: () => t({ type: "password" }),
    number: () => t({ type: "number" }),
    search: () => t({ type: "search" }),
    text: () => t({ type: "text" }),
    type: (i) => t({ type: i }),
    width: (i) => t({ boxSize: i }),
    size: (i) => t({ boxSize: i }),
    label: (i) => t({ label: i }),
    id: (i) => t({ id: i })
  });
}
function ie(e) {
  if (Array.isArray(e[0]) && e[0].raw)
    return F(String(e[0][0]));
  if (e.length === 1 && typeof e[0] == "string" && e[0].includes(","))
    return F(e[0]);
  const r = /* @__PURE__ */ new Set(["text", "password", "email", "number", "search", "tel", "url", "date"]);
  let t = "Enter value...", i, l, c = "text", o, s, n = "relative", a = "text";
  e.length > 0 && e[0] !== void 0 && (t = String(e[0]).replace(/[_-]+/g, " "));
  for (let d = 1; d < e.length; d++) {
    const u = e[d];
    if (u == null || u === "") continue;
    const f = K(u), p = x(u), h = S(u), g = String(u).trim();
    f && !r.has(c) ? c = f : p && !i ? i = p : h && !s ? s = h : g.toLowerCase().startsWith("label ") || g.toLowerCase().startsWith("labeled ") ? o = g.replace(/^(?:labeled|label)\s+['"]?|['"]?$/gi, "") : y(u) && n === "relative" ? n = g : A(u) && a === "text" ? a = g : !l && (g.startsWith("#") || g.toLowerCase().includes("id")) ? l = g.replace(/^#/, "").trim() : !o && g.toLowerCase() !== "none" && (o = g.replace(/[_-]+/g, " ").trim());
  }
  return {
    placeholder: t,
    boxSize: i,
    id: l,
    type: c,
    label: o,
    color: s,
    position: n,
    pointer: a
  };
}
function F(e) {
  let r = e.trim();
  r.startsWith("Input") && (r = r.replace(/^Input\s*=\s*/, "")), r.endsWith(".") && (r = r.slice(0, -1).trim());
  const t = r.split(/,\s*(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((i) => i.trim().replace(/^["']|["']$/g, ""));
  return ie(t);
}
function ne(e) {
  const { placeholder: r, boxSize: t, id: i, type: l = "text", label: c, position: o = "relative", pointer: s = "text" } = e, n = {
    position: o,
    width: t && (t.includes("px") || t.includes("%")) ? t : "100%",
    maxWidth: "400px"
  };
  return re(/* @__PURE__ */ _("div", { className: "cr-form-field", style: n, children: [
    c && /* @__PURE__ */ b("label", { className: "cr-form-label", children: c }),
    /* @__PURE__ */ b("div", { className: "cr-input-wrapper cr-input-wrapper--md", children: /* @__PURE__ */ b(
      "input",
      {
        id: i,
        type: l,
        placeholder: r,
        className: "cr-input",
        style: { cursor: s }
      }
    ) })
  ] }, i || r), e);
}
function oe(e, r) {
  const t = (i) => se({ ...r, ...i });
  return w(e, {
    build: () => e,
    level: (i) => t({ level: i }),
    h1: () => t({ level: 1 }),
    h2: () => t({ level: 2 }),
    h3: () => t({ level: 3 }),
    h4: () => t({ level: 4 }),
    h5: () => t({ level: 5 }),
    h6: () => t({ level: 6 }),
    center: () => t({ align: "center" }),
    left: () => t({ align: "left" }),
    right: () => t({ align: "right" }),
    gradient: () => t({ color: "gradient" }),
    color: (i) => t({ color: i }),
    red: () => t({ color: "#e11d48" }),
    blue: () => t({ color: "#6366f1" }),
    green: () => t({ color: "#10b981" }),
    size: (i) => t({ size: i }),
    small: () => t({ size: "1.25rem" }),
    large: () => t({ size: "2rem" }),
    extraLarge: () => t({ size: "2.5rem" }),
    id: (i) => t({ id: i })
  });
}
function le(e) {
  if (Array.isArray(e[0]) && e[0].raw)
    return P(String(e[0][0]));
  if (e.length === 1 && typeof e[0] == "string" && e[0].includes(","))
    return P(e[0]);
  let r = "Heading", t = 2, i, l, c, o = "left", s = "relative";
  e.length > 0 && e[0] !== void 0 && (r = String(e[0]).replace(/[_-]+/g, " "));
  for (let n = 1; n < e.length; n++) {
    const a = e[n];
    if (a == null || a === "") continue;
    const d = Y(a), u = M(a), f = S(a), p = x(a), h = String(a).trim().toLowerCase();
    d ? t = d : u ? o = u : f ? c = f : p || /^(xs|sm|md|lg|xl|2xl|3xl|4xl)$/.test(h) ? i = p || String(a).trim() : y(a) ? s = String(a).trim() : !l && h !== "id" && h !== "none" && (l = String(a).replace(/^#/, "").trim());
  }
  return {
    text: r,
    level: t,
    size: i,
    id: l,
    color: c,
    align: o,
    position: s
  };
}
function P(e) {
  let r = e.trim();
  r.startsWith("Heading") && (r = r.replace(/^Heading\s*=\s*/, "")), r.endsWith(".") && (r = r.slice(0, -1).trim());
  const t = r.split(/,\s*(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((i) => i.trim().replace(/^["']|["']$/g, ""));
  return le(t);
}
function se(e) {
  const { text: r, level: t = 2, size: i, id: l, color: c, align: o = "left", position: s = "relative" } = e, n = `h${t}`, a = c === "gradient", d = {
    textAlign: o,
    position: s,
    margin: "0.5rem 0",
    ...i ? { fontSize: i } : {}
  };
  c && !a && (d.color = c);
  const u = [
    "cr-heading",
    `cr-heading--${t === 1 ? "2xl" : t === 2 ? "xl" : "lg"}`,
    a && "cr-heading--gradient"
  ].filter(Boolean).join(" ");
  return oe(/* @__PURE__ */ b(n, { id: l, className: u, style: d, children: r }, l || r), e);
}
function ae(e, r) {
  const t = (i) => de({ ...r, ...i });
  return w(e, {
    build: () => e,
    center: () => t({ align: "center" }),
    left: () => t({ align: "left" }),
    right: () => t({ align: "right" }),
    muted: () => t({ color: "muted" }),
    secondary: () => t({ color: "secondary" }),
    primary: () => t({ color: "primary" }),
    brand: () => t({ color: "brand" }),
    color: (i) => t({ color: i }),
    small: () => t({ size: "sm" }),
    large: () => t({ size: "lg" }),
    size: (i) => t({ size: i }),
    bold: () => t({ size: r.size }),
    medium: () => t({ size: r.size }),
    id: (i) => t({ id: i })
  });
}
function ce(e) {
  if (Array.isArray(e[0]) && e[0].raw)
    return q(String(e[0][0]));
  if (e.length === 1 && typeof e[0] == "string" && e[0].includes(","))
    return q(e[0]);
  let r = "Text", t = "md", i, l = "primary", c = "left", o = "relative";
  e.length > 0 && e[0] !== void 0 && (r = String(e[0]));
  for (let s = 1; s < e.length; s++) {
    const n = e[s];
    if (n == null || n === "") continue;
    const a = M(n), d = S(n), u = x(n), f = String(n).toLowerCase().trim();
    a ? c = a : d || f === "muted" || f === "secondary" || f === "brand" || f === "primary" ? l = d || String(n).trim() : u || /^(xs|sm|md|lg|xl)$/.test(f) ? t = u || String(n).trim() : y(n) ? o = String(n).trim() : !i && f !== "id" && f !== "none" && (i = String(n).replace(/^#/, "").trim());
  }
  return {
    content: r,
    size: t,
    id: i,
    color: l,
    align: c,
    position: o
  };
}
function q(e) {
  let r = e.trim();
  r.startsWith("Text") && (r = r.replace(/^Text\s*=\s*/, "")), r.endsWith(".") && (r = r.slice(0, -1).trim());
  const t = r.split(/,\s*(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((i) => i.trim().replace(/^["']|["']$/g, ""));
  return ce(t);
}
function de(e) {
  const { content: r, size: t = "md", id: i, color: l = "primary", align: c = "left", position: o = "relative" } = e, s = {
    textAlign: c,
    position: o,
    margin: "0.25rem 0",
    ...t.includes("px") || t.includes("rem") ? { fontSize: t } : {}
  }, n = [
    "cr-text",
    !t.includes("px") && !t.includes("rem") && `cr-text--${t}`,
    `cr-text--color-${l}`
  ].filter(Boolean).join(" ");
  return ae(/* @__PURE__ */ b("p", { id: i, className: n, style: s, children: r }, i || r), e);
}
function ue(e, r) {
  const t = (i) => fe({ ...r, ...i });
  return w(e, {
    build: () => e,
    glass: () => t({ variant: "glass" }),
    elevated: () => t({ variant: "elevated" }),
    outline: () => t({ variant: "outline" }),
    subtle: () => t({ variant: "subtle" }),
    width: (i) => t({ boxSize: i }),
    size: (i) => t({ boxSize: i }),
    padding: (i) => t({ boxSize: i }),
    id: (i) => t({ id: i })
  });
}
function Ae(e) {
  let r = "Card", t, i, l = "glass", c, o = "relative", s = "default";
  e.length > 0 && (typeof e[0] == "string" ? r = /* @__PURE__ */ b("p", { children: e[0].replace(/[_-]+/g, " ") }) : r = e[0]);
  const n = /* @__PURE__ */ new Set(["glass", "outline", "elevated", "subtle"]);
  for (let a = 1; a < e.length; a++) {
    const d = e[a];
    if (d == null || d === "") continue;
    const u = x(d), f = S(d), p = String(d).toLowerCase().trim();
    n.has(p) ? l = p : u ? t = u : f ? c = f : y(d) ? o = String(d).trim() : A(d) ? s = String(d).trim() : !i && p !== "id" && p !== "none" && (i = String(d).trim());
  }
  return {
    content: r,
    boxSize: t,
    id: i,
    variant: l,
    color: c,
    position: o,
    pointer: s
  };
}
function fe(e) {
  const { content: r, boxSize: t, id: i, variant: l = "glass", color: c, position: o = "relative", pointer: s = "default" } = e, n = {
    position: o,
    cursor: s,
    ...t ? { width: t } : {},
    ...c ? { background: c } : {}
  }, a = /* @__PURE__ */ b("div", { id: i, className: `cr-card cr-card--${l} cr-card--padding-md`, style: n, children: r }, i || Math.random());
  return ue(a, e);
}
function pe(e, r) {
  const t = (i) => he({ ...r, ...i });
  return w(e, {
    build: () => e,
    red: () => t({ color: "danger" }),
    green: () => t({ color: "success" }),
    blue: () => t({ color: "primary" }),
    amber: () => t({ color: "warning" }),
    purple: () => t({ color: "purple" }),
    color: (i) => t({ color: i }),
    small: () => t({ size: "sm" }),
    large: () => t({ size: "md" }),
    size: (i) => t({ size: i }),
    id: (i) => t({ id: i })
  });
}
function Ie(e) {
  let r = "Badge", t = "sm", i, l = "primary", c = "relative";
  e.length > 0 && e[0] !== void 0 && (r = String(e[0]).replace(/[_-]+/g, " "));
  for (let o = 1; o < e.length; o++) {
    const s = e[o];
    if (s == null || s === "") continue;
    const n = S(s), a = x(s), d = String(s).toLowerCase().trim();
    n || d === "danger" || d === "success" || d === "warning" || d === "info" ? l = n || String(s).trim() : a || /^(xs|sm|md|lg)$/.test(d) ? t = a || String(s).trim() : y(s) ? c = String(s).trim() : !i && d !== "id" && d !== "none" && (i = String(s).trim());
  }
  return {
    label: r,
    size: t,
    id: i,
    color: l,
    position: c
  };
}
function he(e) {
  const { label: r, size: t = "sm", id: i, color: l = "primary", position: c = "relative" } = e, o = /* @__PURE__ */ b(
    "span",
    {
      id: i,
      className: `cr-badge cr-badge--${l} cr-badge--${t} cr-badge--pill`,
      style: { position: c },
      children: r
    },
    i || r
  );
  return pe(o, e);
}
function me(e, r) {
  const t = (i) => ge({ ...r, ...i });
  return w(e, {
    build: () => e,
    to: (i) => t({ href: i }),
    link: (i) => t({ href: i }),
    external: () => t({ isExternal: !0 }),
    newTab: () => t({ isExternal: !0 }),
    color: (i) => t({ color: i }),
    id: (i) => t({ id: i })
  });
}
function Ee(e) {
  let r = "Link", t = "#", i, l = "brand", c = !1, o = "relative";
  e.length > 0 && e[0] !== void 0 && (r = String(e[0]).replace(/[_-]+/g, " "));
  for (let s = 1; s < e.length; s++) {
    const n = e[s];
    if (n == null || n === "") continue;
    const a = U(n), d = S(n), u = J(n);
    typeof n == "boolean" ? c = n : u ? c = !0 : a ? (t = a, (t.startsWith("http://") || t.startsWith("https://")) && (c = !0)) : d ? l = d : y(n) ? o = String(n).trim() : !i && String(n).toLowerCase() !== "id" && (i = String(n).trim());
  }
  return {
    label: r,
    href: t,
    id: i,
    color: l,
    isExternal: c,
    position: o
  };
}
function ge(e) {
  const { label: r, href: t, id: i, color: l = "brand", isExternal: c = !1, position: o = "relative" } = e, s = /* @__PURE__ */ b(
    "a",
    {
      id: i,
      href: t,
      target: c ? "_blank" : void 0,
      rel: c ? "noopener noreferrer" : void 0,
      className: `cr-link cr-link--color-${l}`,
      style: { position: o },
      children: r
    },
    i || r
  );
  return me(s, e);
}
function be(e, r) {
  const t = (i) => ye({ ...r, ...i });
  return w(e, {
    build: () => e,
    size: (i, l) => t({ boxSize: l ? `${i} ${l}` : i }),
    circle: () => t({ rounded: "full" }),
    rounded: (i = "md") => t({ rounded: i }),
    alt: (i) => t({ alt: i }),
    id: (i) => t({ id: i })
  });
}
function Ve(e) {
  let r = "", t, i, l = "Image", c = "md", o = "relative";
  e.length > 0 && e[0] !== void 0 && (r = String(e[0]).trim());
  const s = /* @__PURE__ */ new Set(["none", "sm", "md", "lg", "full", "circle", "rounded"]);
  for (let n = 1; n < e.length; n++) {
    const a = e[n];
    if (a == null || a === "") continue;
    const d = x(a), u = String(a).toLowerCase().trim();
    d ? t = d : s.has(u) ? c = u === "circle" ? "full" : u : y(a) ? o = String(a).trim() : !i && (u.startsWith("#") || u.includes("id")) ? i = String(a).replace(/^#/, "").trim() : l === "Image" && (l = String(a).trim());
  }
  return {
    src: r,
    boxSize: t,
    id: i,
    alt: l,
    rounded: c,
    position: o
  };
}
function ye(e) {
  const { src: r, boxSize: t, id: i, alt: l = "Image", rounded: c = "md", position: o = "relative" } = e;
  let s, n;
  if (t) {
    const u = t.trim().split(/\s+/);
    s = u[0], n = u[1] || u[0];
  }
  const a = {
    position: o,
    ...s ? { width: s } : {},
    ...n ? { height: n } : {},
    objectFit: "cover"
  }, d = /* @__PURE__ */ b("div", { className: `cr-image-wrapper cr-image--rounded-${c}`, style: a, children: /* @__PURE__ */ b("img", { id: i, src: r, alt: l, className: "cr-image" }) }, i || r);
  return be(d, e);
}
function we(e, ...r) {
  let t, i = "960px", l = "1.25rem", c = r;
  return Array.isArray(e) ? c = e : typeof e == "string" ? t = e : typeof e == "object" && e !== null && (t = e.title, e.maxWidth && (i = e.maxWidth), e.gap && (l = e.gap)), /* @__PURE__ */ _("div", { className: "cr-simple-page", style: { padding: "3rem 1.5rem", maxWidth: i, margin: "0 auto" }, children: [
    t && /* @__PURE__ */ b("h1", { className: "cr-heading cr-heading--2xl cr-heading--gradient", style: { marginBottom: "1.5rem" }, children: t }),
    /* @__PURE__ */ b("div", { style: { display: "flex", flexDirection: "column", gap: l, alignItems: "flex-start" }, children: c.map((o, s) => W.isValidElement(o) ? o.key != null ? o : W.cloneElement(o, { key: `cr-page-item-${s}` }) : /* @__PURE__ */ b(W.Fragment, { children: o }, `cr-page-item-${s}`)) })
  ] });
}
const Be = we;
export {
  oe as A,
  be as B,
  re as C,
  ve as D,
  me as E,
  ae as F,
  We as G,
  Ne as H,
  M as I,
  X as J,
  S as K,
  J as L,
  K as M,
  Y as N,
  U as O,
  we as P,
  x as Q,
  G as R,
  Be as S,
  Ce as T,
  Z as U,
  j as V,
  B as W,
  T as X,
  A as Y,
  y as Z,
  te as a,
  $e as b,
  R as c,
  Ae as d,
  fe as e,
  ie as f,
  ne as g,
  w as h,
  ye as i,
  Ve as j,
  ge as k,
  Ee as l,
  he as m,
  Ie as n,
  de as o,
  O as p,
  ce as q,
  se as r,
  le as s,
  $ as t,
  ze as u,
  ke as v,
  Le as w,
  pe as x,
  Q as y,
  ue as z
};
