"use client";
var ce = Object.defineProperty;
var ie = (o, e, p) => e in o ? ce(o, e, { enumerable: !0, configurable: !0, writable: !0, value: p }) : o[e] = p;
var Q = (o, e, p) => ie(o, typeof e != "symbol" ? e + "" : e, p);
import { useState as i, useRef as q, useEffect as B, useCallback as s, useMemo as D } from "react";
function ue(o, e = [], p = {}) {
  const { enabled: f = !0, initialData: l, onSuccess: d, onError: c, retryCount: t = 1 } = p, [a, h] = i(l), [m, y] = i(null), [k, I] = i(f), S = q(!0), v = q(o);
  v.current = o, B(() => (S.current = !0, () => {
    S.current = !1;
  }), []);
  const w = s(async () => {
    I(!0), y(null);
    let R = 0;
    for (; R <= t; )
      try {
        const E = await v.current();
        return S.current && (h(E), I(!1), d == null || d(E)), E;
      } catch (E) {
        if (R++, R > t) {
          if (S.current) {
            const _ = E instanceof Error ? E : new Error(String(E));
            y(_), I(!1), c == null || c(_);
          }
          return;
        }
      }
  }, [t, d, c]);
  return B(() => {
    f && w();
  }, [f, ...e]), {
    data: a,
    error: m,
    isLoading: k,
    isError: m !== null,
    isSuccess: a !== void 0 && m === null,
    refetch: w
  };
}
function fe(o) {
  const { fetchList: e, createItem: p, updateItem: f, deleteItem: l, initialItems: d = [] } = o, [c, t] = i(d), [a, h] = i(null), [m, y] = i(!1), [k, I] = i(!1), [S, v] = i(!1), { data: w, isLoading: R, error: E, refetch: _ } = ue(
    e,
    [],
    {
      initialData: d,
      onSuccess: (u) => {
        t(u);
      }
    }
  ), M = s(() => {
    h(null), y(!0);
  }, []), A = s((u) => {
    h(u), I(!0);
  }, []), N = s((u) => {
    h(u), v(!0);
  }, []), C = s(() => {
    y(!1), I(!1), v(!1), h(null);
  }, []), H = s(
    async (u) => {
      if (!p) return;
      const T = await p(u);
      return t((O) => [T, ...O]), C(), T;
    },
    [p, C]
  ), P = s(
    async (u, T) => {
      if (!f) return;
      const O = await f(u, T);
      return t(
        (W) => W.map((L) => L.id === u ? { ...L, ...O } : L)
      ), C(), O;
    },
    [f, C]
  ), x = s(
    async (u) => l ? (await l(u), t((T) => T.filter((O) => O.id !== u)), C(), !0) : !1,
    [l, C]
  );
  return {
    items: w || c,
    isLoading: R,
    error: E,
    activeItem: a,
    isCreateOpen: m,
    isEditOpen: k,
    isDeleteOpen: S,
    openCreate: M,
    openEdit: A,
    openDelete: N,
    closeModals: C,
    handleCreate: H,
    handleUpdate: P,
    handleDelete: x,
    refresh: _
  };
}
function me(o = {}) {
  const {
    initialUser: e = null,
    initialCart: p = [],
    taxRate: f = 0.08,
    loadOrders: l,
    onLogoutService: d,
    onNavigate: c,
    confirmPaymentWithBackend: t
  } = o, [a, h] = i(p), [m, y] = i(e), [k, I] = i([]), [S, v] = i("store"), [w, R] = i(!1), [E, _] = i(!1), [M, A] = i(!1), [N, C] = i(!1), [H, P] = i(null), [x, u] = i(null), T = D(() => a.reduce((r, n) => r + n.quantity, 0), [a]), O = D(() => a.reduce((r, n) => r + n.product.price * n.quantity, 0), [a]), W = D(() => Math.round(O * f * 100) / 100, [O, f]), L = D(() => Math.round((O + W) * 100) / 100, [O, W]), G = s(() => R(!0), []), F = s(() => R(!1), []), K = s(() => _(!0), []), Y = s(() => _(!1), []), $ = s(() => A(!0), []), j = s(() => A(!1), []), z = s(() => C(!0), []), J = s(() => {
    C(!1), P(null), u(null);
  }, []), X = s((r, n = null) => {
    P(r), u(n), C(!0);
  }, []), V = s(
    (r) => {
      v(r), c && c(r);
    },
    [c]
  ), Z = s((r, n = 1) => {
    h((U) => U.find((g) => g.product.id === r.id) ? U.map(
      (g) => g.product.id === r.id ? { ...g, quantity: g.quantity + n } : g
    ) : [...U, { product: r, quantity: n }]);
  }, []), ee = s((r, n) => {
    h((U) => U.map((b) => {
      if (b.product.id === r) {
        const g = b.quantity + n;
        return g > 0 ? { ...b, quantity: g } : null;
      }
      return b;
    }).filter(Boolean));
  }, []), te = s((r) => {
    h((n) => n.filter((U) => U.product.id !== r));
  }, []), se = s(() => {
    h([]);
  }, []), re = s(() => {
    R(!1), m ? A(!0) : _(!0);
  }, [m]), ne = s(
    async (r) => {
      if (y(r), _(!1), l) {
        const n = await Promise.resolve(l(r.id));
        I(n);
      }
      h((n) => (n.length > 0 && A(!0), n));
    },
    [l]
  ), oe = s(async () => {
    d && await Promise.resolve(d()), y(null), I([]), V("store");
  }, [d, V]), ae = s(
    async (r) => {
      if (t && !await Promise.resolve(t(r)))
        throw new Error("Payment validation failed: provider could not confirm settlement.");
      if (A(!1), h([]), r.order && (P(r.order), u(r.transaction || null), C(!0), l && m)) {
        const n = await Promise.resolve(l(m.id));
        I(n);
      }
    },
    [t, l, m]
  );
  return {
    cartItems: a,
    currentUser: m,
    orders: k,
    currentView: S,
    cartCount: T,
    cartSubtotal: O,
    cartTax: W,
    cartTotal: L,
    isCartOpen: w,
    isAuthOpen: E,
    isCheckoutOpen: M,
    isReceiptOpen: N,
    activeReceiptOrder: H,
    activeReceiptTxn: x,
    addToCart: Z,
    updateQuantity: ee,
    removeFromCart: te,
    clearCart: se,
    proceedToCheckout: re,
    handleAuthSuccess: ne,
    handleLogout: oe,
    handlePaymentSuccess: ae,
    openCart: G,
    closeCart: F,
    openAuth: K,
    closeAuth: Y,
    openCheckout: $,
    closeCheckout: j,
    openReceipt: z,
    closeReceipt: J,
    viewReceipt: X,
    navigateTo: V
  };
}
function le(o) {
  const e = o.trim(), p = [], f = e.split(/(?=When\s+(?:the\s+user|authentication|payment|an?\s+order))/i).map((l) => l.trim()).filter(Boolean);
  for (const l of f) {
    const d = l.split(`
`).map((h) => h.trim()).filter(Boolean);
    if (d.length === 0) continue;
    const c = d[0].replace(/:$/, "").trim(), t = [];
    let a = "CUSTOM";
    /changes?\s+(?:a\s+)?product'?s?\s+quantity/i.test(c) ? (a = "QUANTITY_CHANGE", t.push({
      action: "UPDATE_CART_ITEM",
      target: "cartItem"
    }), t.push({
      action: "REMOVE_FROM_CART",
      target: "cartItem",
      condition: { field: "quantity", operator: "is_zero" },
      fallbackAction: "KEEP_CART_ITEM"
    })) : /removes?\s+(?:a\s+)?product\s+(?:from\s+(?:the\s+)?cart)?/i.test(c) ? (a = "REMOVE_ITEM", t.push({
      action: "REMOVE_MATCHING_ITEM",
      target: "cartItem"
    })) : /proceeds?\s+to\s+checkout/i.test(c) ? (a = "PROCEED_CHECKOUT", t.push({
      action: "CLOSE_CART_DRAWER"
    }), t.push({
      action: "OPEN_AUTH_WINDOW",
      condition: { field: "currentUser", operator: "is_null" },
      fallbackAction: "OPEN_CHECKOUT_WINDOW"
    })) : /authentication\s+succeeds?|login\s+succeeds?/i.test(c) ? (a = "AUTH_SUCCESS", t.push({
      action: "SET_CURRENT_USER",
      target: "user"
    }), t.push({
      action: "LOAD_USER_ORDERS"
    }), t.push({
      action: "OPEN_CHECKOUT_WINDOW",
      condition: { field: "cartItems", operator: "has_items" }
    })) : /logs?\s+out/i.test(c) ? (a = "LOGOUT", t.push({
      action: "LOGOUT_AUTH_SERVICE"
    }), t.push({
      action: "CLEAR_CURRENT_USER"
    }), t.push({
      action: "CLEAR_ORDERS"
    }), t.push({
      action: "NAVIGATE_TO",
      params: { route: "store" }
    })) : /payment\s+succeeds?|order\s+is\s+placed/i.test(c) && (a = "PAYMENT_SUCCESS", t.push({
      action: "CLOSE_CHECKOUT_WINDOW"
    }), t.push({
      action: "CLEAR_CART"
    }), t.push({
      action: "SHOW_ORDER_RECEIPT",
      condition: { field: "result.order", operator: "is_not_null" }
    }), t.push({
      action: "REFRESH_ORDER_HISTORY"
    })), p.push({
      id: `rule-${a.toLowerCase()}`,
      trigger: a,
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
function Ce(o) {
  return `/**
 * Generated by Criation UI — Natural Language Workflow Compiler
 * Source: ${le(o).rules.length} plain-English behavior rules
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
class pe {
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
function Oe(o = "ApplicationWorkflow") {
  return new pe(o);
}
export {
  pe as F,
  fe as a,
  ue as b,
  Ce as c,
  le as p,
  me as u,
  Oe as w
};
