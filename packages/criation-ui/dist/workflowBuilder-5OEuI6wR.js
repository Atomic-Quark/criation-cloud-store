"use client";
var oe = Object.defineProperty;
var ae = (n, e, p) => e in n ? oe(n, e, { enumerable: !0, configurable: !0, writable: !0, value: p }) : n[e] = p;
var Q = (n, e, p) => ae(n, typeof e != "symbol" ? e + "" : e, p);
import { useState as i, useRef as q, useEffect as B, useCallback as s, useMemo as D } from "react";
function ce(n, e = [], p = {}) {
  const { enabled: f = !0, initialData: u, onSuccess: d, onError: c, retryCount: t = 1 } = p, [o, h] = i(u), [m, y] = i(null), [w, E] = i(f), S = q(!0), A = q(n);
  A.current = n, B(() => (S.current = !0, () => {
    S.current = !1;
  }), []);
  const k = s(async () => {
    E(!0), y(null);
    let R = 0;
    for (; R <= t; )
      try {
        const O = await A.current();
        return S.current && (h(O), E(!1), d == null || d(O)), O;
      } catch (O) {
        if (R++, R > t) {
          if (S.current) {
            const _ = O instanceof Error ? O : new Error(String(O));
            y(_), E(!1), c == null || c(_);
          }
          return;
        }
      }
  }, [t, d, c]);
  return B(() => {
    f && k();
  }, [f, ...e]), {
    data: o,
    error: m,
    isLoading: w,
    isError: m !== null,
    isSuccess: o !== void 0 && m === null,
    refetch: k
  };
}
function de(n) {
  const { fetchList: e, createItem: p, updateItem: f, deleteItem: u, initialItems: d = [] } = n, [c, t] = i(d), [o, h] = i(null), [m, y] = i(!1), [w, E] = i(!1), [S, A] = i(!1), { data: k, isLoading: R, error: O, refetch: _ } = ce(
    e,
    [],
    {
      initialData: d,
      onSuccess: (l) => {
        t(l);
      }
    }
  ), M = s(() => {
    h(null), y(!0);
  }, []), U = s((l) => {
    h(l), E(!0);
  }, []), N = s((l) => {
    h(l), A(!0);
  }, []), I = s(() => {
    y(!1), E(!1), A(!1), h(null);
  }, []), H = s(
    async (l) => {
      if (!p) return;
      const T = await p(l);
      return t((C) => [T, ...C]), I(), T;
    },
    [p, I]
  ), b = s(
    async (l, T) => {
      if (!f) return;
      const C = await f(l, T);
      return t(
        (P) => P.map((W) => W.id === l ? { ...W, ...C } : W)
      ), I(), C;
    },
    [f, I]
  ), x = s(
    async (l) => u ? (await u(l), t((T) => T.filter((C) => C.id !== l)), I(), !0) : !1,
    [u, I]
  );
  return {
    items: k || c,
    isLoading: R,
    error: O,
    activeItem: o,
    isCreateOpen: m,
    isEditOpen: w,
    isDeleteOpen: S,
    openCreate: M,
    openEdit: U,
    openDelete: N,
    closeModals: I,
    handleCreate: H,
    handleUpdate: b,
    handleDelete: x,
    refresh: _
  };
}
function he(n = {}) {
  const {
    initialUser: e = null,
    initialCart: p = [],
    taxRate: f = 0.08,
    loadOrders: u,
    onLogoutService: d,
    onNavigate: c,
    confirmPaymentWithBackend: t
  } = n, [o, h] = i(p), [m, y] = i(e), [w, E] = i([]), [S, A] = i("store"), [k, R] = i(!1), [O, _] = i(!1), [M, U] = i(!1), [N, I] = i(!1), [H, b] = i(null), [x, l] = i(null), T = D(() => o.reduce((r, a) => r + a.quantity, 0), [o]), C = D(() => o.reduce((r, a) => r + a.product.price * a.quantity, 0), [o]), P = D(() => Math.round(C * f * 100) / 100, [C, f]), W = D(() => Math.round((C + P) * 100) / 100, [C, P]), G = s(() => R(!0), []), F = s(() => R(!1), []), K = s(() => _(!0), []), Y = s(() => _(!1), []), $ = s(() => U(!0), []), j = s(() => U(!1), []), z = s(() => {
    I(!1), b(null), l(null);
  }, []), V = s(
    (r) => {
      A(r), c && c(r);
    },
    [c]
  ), J = s((r, a = 1) => {
    h((v) => v.find((g) => g.product.id === r.id) ? v.map(
      (g) => g.product.id === r.id ? { ...g, quantity: g.quantity + a } : g
    ) : [...v, { product: r, quantity: a }]);
  }, []), X = s((r, a) => {
    h((v) => v.map((L) => {
      if (L.product.id === r) {
        const g = L.quantity + a;
        return g > 0 ? { ...L, quantity: g } : null;
      }
      return L;
    }).filter(Boolean));
  }, []), Z = s((r) => {
    h((a) => a.filter((v) => v.product.id !== r));
  }, []), ee = s(() => {
    h([]);
  }, []), te = s(() => {
    R(!1), m ? U(!0) : _(!0);
  }, [m]), se = s(
    async (r) => {
      if (y(r), _(!1), u) {
        const a = await Promise.resolve(u(r.id));
        E(a);
      }
      h((a) => (a.length > 0 && U(!0), a));
    },
    [u]
  ), re = s(async () => {
    d && await Promise.resolve(d()), y(null), E([]), V("store");
  }, [d, V]), ne = s(
    async (r) => {
      if (t && !await Promise.resolve(t(r)))
        throw new Error("Payment validation failed: provider could not confirm settlement.");
      if (U(!1), h([]), r.order && (b(r.order), l(r.transaction || null), I(!0), u && m)) {
        const a = await Promise.resolve(u(m.id));
        E(a);
      }
    },
    [t, u, m]
  );
  return {
    cartItems: o,
    currentUser: m,
    orders: w,
    currentView: S,
    cartCount: T,
    cartSubtotal: C,
    cartTax: P,
    cartTotal: W,
    isCartOpen: k,
    isAuthOpen: O,
    isCheckoutOpen: M,
    isReceiptOpen: N,
    activeReceiptOrder: H,
    activeReceiptTxn: x,
    addToCart: J,
    updateQuantity: X,
    removeFromCart: Z,
    clearCart: ee,
    proceedToCheckout: te,
    handleAuthSuccess: se,
    handleLogout: re,
    handlePaymentSuccess: ne,
    openCart: G,
    closeCart: F,
    openAuth: K,
    closeAuth: Y,
    openCheckout: $,
    closeCheckout: j,
    closeReceipt: z,
    navigateTo: V
  };
}
function ie(n) {
  const e = n.trim(), p = [], f = e.split(/(?=When\s+(?:the\s+user|authentication|payment|an?\s+order))/i).map((u) => u.trim()).filter(Boolean);
  for (const u of f) {
    const d = u.split(`
`).map((h) => h.trim()).filter(Boolean);
    if (d.length === 0) continue;
    const c = d[0].replace(/:$/, "").trim(), t = [];
    let o = "CUSTOM";
    /changes?\s+(?:a\s+)?product'?s?\s+quantity/i.test(c) ? (o = "QUANTITY_CHANGE", t.push({
      action: "UPDATE_CART_ITEM",
      target: "cartItem"
    }), t.push({
      action: "REMOVE_FROM_CART",
      target: "cartItem",
      condition: { field: "quantity", operator: "is_zero" },
      fallbackAction: "KEEP_CART_ITEM"
    })) : /removes?\s+(?:a\s+)?product\s+(?:from\s+(?:the\s+)?cart)?/i.test(c) ? (o = "REMOVE_ITEM", t.push({
      action: "REMOVE_MATCHING_ITEM",
      target: "cartItem"
    })) : /proceeds?\s+to\s+checkout/i.test(c) ? (o = "PROCEED_CHECKOUT", t.push({
      action: "CLOSE_CART_DRAWER"
    }), t.push({
      action: "OPEN_AUTH_WINDOW",
      condition: { field: "currentUser", operator: "is_null" },
      fallbackAction: "OPEN_CHECKOUT_WINDOW"
    })) : /authentication\s+succeeds?|login\s+succeeds?/i.test(c) ? (o = "AUTH_SUCCESS", t.push({
      action: "SET_CURRENT_USER",
      target: "user"
    }), t.push({
      action: "LOAD_USER_ORDERS"
    }), t.push({
      action: "OPEN_CHECKOUT_WINDOW",
      condition: { field: "cartItems", operator: "has_items" }
    })) : /logs?\s+out/i.test(c) ? (o = "LOGOUT", t.push({
      action: "LOGOUT_AUTH_SERVICE"
    }), t.push({
      action: "CLEAR_CURRENT_USER"
    }), t.push({
      action: "CLEAR_ORDERS"
    }), t.push({
      action: "NAVIGATE_TO",
      params: { route: "store" }
    })) : /payment\s+succeeds?|order\s+is\s+placed/i.test(c) && (o = "PAYMENT_SUCCESS", t.push({
      action: "CLOSE_CHECKOUT_WINDOW"
    }), t.push({
      action: "CLEAR_CART"
    }), t.push({
      action: "SHOW_ORDER_RECEIPT",
      condition: { field: "result.order", operator: "is_not_null" }
    }), t.push({
      action: "REFRESH_ORDER_HISTORY"
    })), p.push({
      id: `rule-${o.toLowerCase()}`,
      trigger: o,
      englishTrigger: c,
      description: d.slice(1).join(" "),
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
function fe(n) {
  return `/**
 * Generated by Criation UI — Natural Language Workflow Compiler
 * Source: ${ie(n).rules.length} plain-English behavior rules
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
class ue {
  constructor(e) {
    Q(this, "_name");
    Q(this, "_steps", []);
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
function me(n = "ApplicationWorkflow") {
  return new ue(n);
}
export {
  ue as F,
  de as a,
  ce as b,
  fe as c,
  ie as p,
  he as u,
  me as w
};
