"use client";
var ue = Object.defineProperty;
var le = (c, e, p) => e in c ? ue(c, e, { enumerable: !0, configurable: !0, writable: !0, value: p }) : c[e] = p;
var q = (c, e, p) => le(c, typeof e != "symbol" ? e + "" : e, p);
import { useState as u, useRef as G, useEffect as B, useCallback as n, useMemo as b } from "react";
function de(c, e = [], p = {}) {
  const { enabled: C = !0, initialData: O, onSuccess: o, onError: i, retryCount: t = 1 } = p, [l, h] = u(O), [E, r] = u(null), [T, S] = u(C), f = G(!0), v = G(c);
  v.current = c, B(() => (f.current = !0, () => {
    f.current = !1;
  }), []);
  const U = n(async () => {
    S(!0), r(null);
    let w = 0;
    for (; w <= t; )
      try {
        const I = await v.current();
        return f.current && (h(I), S(!1), o == null || o(I)), I;
      } catch (I) {
        if (w++, w > t) {
          if (f.current) {
            const y = I instanceof Error ? I : new Error(String(I));
            r(y), S(!1), i == null || i(y);
          }
          return;
        }
      }
  }, [t, o, i]);
  return B(() => {
    C && U();
  }, [C, ...e]), {
    data: l,
    error: E,
    isLoading: T,
    isError: E !== null,
    isSuccess: l !== void 0 && E === null,
    refetch: U
  };
}
function Ce(c) {
  const { fetchList: e, createItem: p, updateItem: C, deleteItem: O, initialItems: o = [] } = c, [i, t] = u(o), [l, h] = u(null), [E, r] = u(!1), [T, S] = u(!1), [f, v] = u(!1), { data: U, isLoading: w, error: I, refetch: y } = de(
    e,
    [],
    {
      initialData: o,
      onSuccess: (d) => {
        t(d);
      }
    }
  ), D = n(() => {
    h(null), r(!0);
  }, []), P = n((d) => {
    h(d), S(!0);
  }, []), M = n((d) => {
    h(d), v(!0);
  }, []), m = n(() => {
    r(!1), S(!1), v(!1), h(null);
  }, []), N = n(
    async (d) => {
      if (!p) return;
      const A = await p(d);
      return t((R) => [A, ...R]), m(), A;
    },
    [p, m]
  ), W = n(
    async (d, A) => {
      if (!C) return;
      const R = await C(d, A);
      return t(
        (x) => x.map((_) => _.id === d ? { ..._, ...R } : _)
      ), m(), R;
    },
    [C, m]
  ), H = n(
    async (d) => O ? (await O(d), t((A) => A.filter((R) => R.id !== d)), m(), !0) : !1,
    [O, m]
  );
  return {
    items: U || i,
    isLoading: w,
    error: I,
    activeItem: l,
    isCreateOpen: E,
    isEditOpen: T,
    isDeleteOpen: f,
    openCreate: D,
    openEdit: P,
    openDelete: M,
    closeModals: m,
    handleCreate: N,
    handleUpdate: W,
    handleDelete: H,
    refresh: y
  };
}
function Oe(c = {}) {
  const {
    initialUser: e = null,
    initialCart: p = [],
    taxRate: C = 0.08,
    autoOpenCartOnAdd: O = !1,
    loadOrders: o,
    onLogoutService: i,
    onNavigate: t,
    confirmPaymentWithBackend: l
  } = c, [h, E] = u(p), [r, T] = u(e), [S, f] = u([]), [v, U] = u("store");
  B(() => {
    let s = !0;
    return r != null && r.id && o ? Promise.resolve(o(r.id)).then((a) => {
      s && Array.isArray(a) && f(a);
    }).catch(() => {
    }) : r || f([]), () => {
      s = !1;
    };
  }, [r == null ? void 0 : r.id, o]);
  const w = n(async () => {
    if (o && (r != null && r.id)) {
      const s = await Promise.resolve(o(r.id));
      Array.isArray(s) && f(s);
    }
  }, [o, r == null ? void 0 : r.id]), [I, y] = u(!1), [D, P] = u(!1), [M, m] = u(!1), [N, W] = u(!1), [H, d] = u(null), [A, R] = u(null), x = b(() => h.reduce((s, a) => s + a.quantity, 0), [h]), _ = b(() => h.reduce((s, a) => s + a.product.price * a.quantity, 0), [h]), V = b(() => Math.round(_ * C * 100) / 100, [_, C]), F = b(() => Math.round((_ + V) * 100) / 100, [_, V]), K = n(() => y(!0), []), Y = n(() => y(!1), []), $ = n(() => P(!0), []), j = n(() => P(!1), []), z = n(() => m(!0), []), J = n(() => m(!1), []), X = n(() => W(!0), []), Z = n(() => {
    W(!1), d(null), R(null);
  }, []), ee = n((s, a = null) => {
    d(s), R(a), W(!0);
  }, []), Q = n(
    (s) => {
      U(s), t && t(s);
    },
    [t]
  ), te = n((s, a = 1) => {
    E((k) => k.find((g) => g.product.id === s.id) ? k.map(
      (g) => g.product.id === s.id ? { ...g, quantity: g.quantity + a } : g
    ) : [...k, { product: s, quantity: a }]), O && y(!0);
  }, [O]), se = n((s, a) => {
    E((k) => k.map((L) => {
      if (L.product.id === s) {
        const g = L.quantity + a;
        return g > 0 ? { ...L, quantity: g } : null;
      }
      return L;
    }).filter(Boolean));
  }, []), re = n((s) => {
    E((a) => a.filter((k) => k.product.id !== s));
  }, []), ne = n(() => {
    E([]);
  }, []), oe = n(() => {
    y(!1), r ? m(!0) : P(!0);
  }, [r]), ae = n(
    async (s) => {
      if (T(s), P(!1), o) {
        const a = await Promise.resolve(o(s.id));
        f(a);
      }
      E((a) => (a.length > 0 && m(!0), a));
    },
    [o]
  ), ce = n(async () => {
    i && await Promise.resolve(i()), T(null), f([]), Q("store");
  }, [i, Q]), ie = n(
    async (s) => {
      if (l && !await Promise.resolve(l(s)))
        throw new Error("Payment validation failed: provider could not confirm settlement.");
      if (m(!1), E([]), s.order && (d(s.order), R(s.transaction || null), W(!0), o && r)) {
        const a = await Promise.resolve(o(r.id));
        f(a);
      }
    },
    [l, o, r]
  );
  return {
    cartItems: h,
    currentUser: r,
    orders: S,
    currentView: v,
    cartCount: x,
    cartSubtotal: _,
    cartTax: V,
    cartTotal: F,
    isCartOpen: I,
    isAuthOpen: D,
    isCheckoutOpen: M,
    isReceiptOpen: N,
    activeReceiptOrder: H,
    activeReceiptTxn: A,
    addToCart: te,
    updateQuantity: se,
    removeFromCart: re,
    clearCart: ne,
    proceedToCheckout: oe,
    handleAuthSuccess: ae,
    handleLogout: ce,
    handlePaymentSuccess: ie,
    openCart: K,
    closeCart: Y,
    openAuth: $,
    closeAuth: j,
    openCheckout: z,
    closeCheckout: J,
    openReceipt: X,
    closeReceipt: Z,
    viewReceipt: ee,
    navigateTo: Q,
    refreshOrders: w,
    setOrders: f,
    setCurrentUser: T
  };
}
function pe(c) {
  const e = c.trim(), p = [], C = e.split(/(?=When\s+(?:the\s+user|authentication|payment|an?\s+order))/i).map((O) => O.trim()).filter(Boolean);
  for (const O of C) {
    const o = O.split(`
`).map((h) => h.trim()).filter(Boolean);
    if (o.length === 0) continue;
    const i = o[0].replace(/:$/, "").trim(), t = [];
    let l = "CUSTOM";
    /changes?\s+(?:a\s+)?product'?s?\s+quantity/i.test(i) ? (l = "QUANTITY_CHANGE", t.push({
      action: "UPDATE_CART_ITEM",
      target: "cartItem"
    }), t.push({
      action: "REMOVE_FROM_CART",
      target: "cartItem",
      condition: { field: "quantity", operator: "is_zero" },
      fallbackAction: "KEEP_CART_ITEM"
    })) : /removes?\s+(?:a\s+)?product\s+(?:from\s+(?:the\s+)?cart)?/i.test(i) ? (l = "REMOVE_ITEM", t.push({
      action: "REMOVE_MATCHING_ITEM",
      target: "cartItem"
    })) : /proceeds?\s+to\s+checkout/i.test(i) ? (l = "PROCEED_CHECKOUT", t.push({
      action: "CLOSE_CART_DRAWER"
    }), t.push({
      action: "OPEN_AUTH_WINDOW",
      condition: { field: "currentUser", operator: "is_null" },
      fallbackAction: "OPEN_CHECKOUT_WINDOW"
    })) : /authentication\s+succeeds?|login\s+succeeds?/i.test(i) ? (l = "AUTH_SUCCESS", t.push({
      action: "SET_CURRENT_USER",
      target: "user"
    }), t.push({
      action: "LOAD_USER_ORDERS"
    }), t.push({
      action: "OPEN_CHECKOUT_WINDOW",
      condition: { field: "cartItems", operator: "has_items" }
    })) : /logs?\s+out/i.test(i) ? (l = "LOGOUT", t.push({
      action: "LOGOUT_AUTH_SERVICE"
    }), t.push({
      action: "CLEAR_CURRENT_USER"
    }), t.push({
      action: "CLEAR_ORDERS"
    }), t.push({
      action: "NAVIGATE_TO",
      params: { route: "store" }
    })) : /payment\s+succeeds?|order\s+is\s+placed/i.test(i) && (l = "PAYMENT_SUCCESS", t.push({
      action: "CLOSE_CHECKOUT_WINDOW"
    }), t.push({
      action: "CLEAR_CART"
    }), t.push({
      action: "SHOW_ORDER_RECEIPT",
      condition: { field: "result.order", operator: "is_not_null" }
    }), t.push({
      action: "REFRESH_ORDER_HISTORY"
    })), p.push({
      id: `rule-${l.toLowerCase()}`,
      trigger: l,
      englishTrigger: i,
      description: o.slice(1).join(" "),
      steps: t
    });
  }
  return {
    name: "CommerceWorkflow",
    description: "Compiled plain-English reactive state and workflow specification",
    rules: p,
    rawEnglish: e
  };
}
function Ee(c) {
  return `/**
 * Generated by Criation UI — Natural Language Workflow Compiler
 * Source: ${pe(c).rules.length} plain-English behavior rules
 */

import { useState, useCallback, useMemo } from "react";
import type { CartItem, Product, User, Order } from "./types";

export function useStoreWorkflow(services: {
  loadOrders: (userId: string) => Promise<Order[]>;
  logout: () => void;
  confirmPayment?: (result: any) => Promise<boolean>;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentView, setCurrentView] = useState<"store" | "orders">("store");

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [activeReceiptOrder, setActiveReceiptOrder] = useState<Order | null>(null);

  // 1. "When the user changes a product's quantity"
  const handleUpdateQuantity = useCallback((productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQ = item.quantity + delta;
            return nextQ > 0 ? { ...item, quantity: nextQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  }, []);

  // 2. "When the user removes a product from the cart"
  const handleRemoveFromCart = useCallback((productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  // 3. "When the user proceeds to checkout"
  const handleProceedToCheckout = useCallback(() => {
    setIsCartOpen(false);
    if (!currentUser) {
      setIsAuthOpen(true);
    } else {
      setIsCheckoutOpen(true);
    }
  }, [currentUser]);

  // 4. "When authentication succeeds"
  const handleAuthSuccess = useCallback(async (user: User) => {
    setCurrentUser(user);
    setIsAuthOpen(false);
    const userOrders = await services.loadOrders(user.id);
    setOrders(userOrders);
    setCartItems((currentCart) => {
      if (currentCart.length > 0) {
        setIsCheckoutOpen(true);
      }
      return currentCart;
    });
  }, [services]);

  // 5. "When the user logs out"
  const handleLogout = useCallback(() => {
    services.logout();
    setCurrentUser(null);
    setOrders([]);
    setCurrentView("store");
  }, [services]);

  // 6. "When payment succeeds"
  const handlePaymentSuccess = useCallback(async (result: any) => {
    if (services.confirmPayment) {
      await services.confirmPayment(result);
    }
    setIsCheckoutOpen(false);
    setCartItems([]);
    if (result.order) {
      setActiveReceiptOrder(result.order);
      setIsReceiptOpen(true);
      if (currentUser) {
        const refreshed = await services.loadOrders(currentUser.id);
        setOrders(refreshed);
      }
    }
  }, [services, currentUser]);

  return {
    cartItems,
    currentUser,
    orders,
    currentView,
    isCartOpen,
    setIsCartOpen,
    isAuthOpen,
    setIsAuthOpen,
    isCheckoutOpen,
    setIsCheckoutOpen,
    isReceiptOpen,
    setIsReceiptOpen,
    activeReceiptOrder,
    handleUpdateQuantity,
    handleRemoveFromCart,
    handleProceedToCheckout,
    handleAuthSuccess,
    handleLogout,
    handlePaymentSuccess,
    setCurrentView,
  };
}
`;
}
class he {
  constructor(e) {
    q(this, "_name");
    q(this, "_steps", []);
    this._name = e;
  }
  /**
   * "When the user changes a product's quantity"
   */
  whenQuantityChanges(e = "Update matching item, remove if zero") {
    return this._steps.push({
      name: "QuantityChangeRule",
      type: "QUANTITY_CHANGE",
      handler: () => e
    }), this;
  }
  /**
   * "When the user removes a product from the cart"
   */
  whenItemRemoved(e = "Remove matching product from cart") {
    return this._steps.push({
      name: "RemoveItemRule",
      type: "REMOVE_ITEM",
      handler: () => e
    }), this;
  }
  /**
   * "When the user proceeds to checkout"
   */
  whenCheckoutBegins(e = "Close cart; prompt login if unauthenticated; else open checkout") {
    return this._steps.push({
      name: "CheckoutBeginRule",
      type: "PROCEED_CHECKOUT",
      handler: () => e
    }), this;
  }
  /**
   * "When authentication succeeds"
   */
  whenAuthenticated(e = "Store user, load orders, resume checkout if cart not empty") {
    return this._steps.push({
      name: "AuthSuccessRule",
      type: "AUTH_SUCCESS",
      handler: () => e
    }), this;
  }
  /**
   * "When the user logs out"
   */
  whenLoggedOut(e = "Log out from auth service, wipe user state, return to store") {
    return this._steps.push({
      name: "LogoutRule",
      type: "LOGOUT",
      handler: () => e
    }), this;
  }
  /**
   * "When payment succeeds"
   */
  whenPaymentSucceeds(e = "Close checkout, empty cart, display receipt, refresh orders") {
    return this._steps.push({
      name: "PaymentSuccessRule",
      type: "PAYMENT_SUCCESS",
      handler: () => e
    }), this;
  }
  build() {
    return {
      name: this._name,
      stepCount: this._steps.length,
      steps: [...this._steps]
    };
  }
}
function Ie(c = "ApplicationWorkflow") {
  return new he(c);
}
export {
  he as F,
  Ce as a,
  de as b,
  Ee as c,
  pe as p,
  Oe as u,
  Ie as w
};
