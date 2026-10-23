"use client";
import { useState as s, useRef as R, useEffect as S, useCallback as n } from "react";
function W(C, L = [], I = {}) {
  const { enabled: a = !0, initialData: m, onSuccess: c, onError: u, retryCount: r = 1 } = I, [E, l] = s(m), [h, D] = s(null), [g, i] = s(a), f = R(!0), w = R(C);
  w.current = C, S(() => (f.current = !0, () => {
    f.current = !1;
  }), []);
  const O = n(async () => {
    i(!0), D(null);
    let y = 0;
    for (; y <= r; )
      try {
        const t = await w.current();
        return f.current && (l(t), i(!1), c == null || c(t)), t;
      } catch (t) {
        if (y++, y > r) {
          if (f.current) {
            const v = t instanceof Error ? t : new Error(String(t));
            D(v), i(!1), u == null || u(v);
          }
          return;
        }
      }
  }, [r, c, u]);
  return S(() => {
    a && O();
  }, [a, ...L]), {
    data: E,
    error: h,
    isLoading: g,
    isError: h !== null,
    isSuccess: E !== void 0 && h === null,
    refetch: O
  };
}
function z(C) {
  const { fetchList: L, createItem: I, updateItem: a, deleteItem: m, initialItems: c = [] } = C, [u, r] = s(c), [E, l] = s(null), [h, D] = s(!1), [g, i] = s(!1), [f, w] = s(!1), { data: O, isLoading: y, error: t, refetch: v } = W(
    L,
    [],
    {
      initialData: c,
      onSuccess: (e) => {
        r(e);
      }
    }
  ), k = n(() => {
    l(null), D(!0);
  }, []), x = n((e) => {
    l(e), i(!0);
  }, []), M = n((e) => {
    l(e), w(!0);
  }, []), o = n(() => {
    D(!1), i(!1), w(!1), l(null);
  }, []), j = n(
    async (e) => {
      if (!I) return;
      const d = await I(e);
      return r((p) => [d, ...p]), o(), d;
    },
    [I, o]
  ), A = n(
    async (e, d) => {
      if (!a) return;
      const p = await a(e, d);
      return r(
        (U) => U.map((b) => b.id === e ? { ...b, ...p } : b)
      ), o(), p;
    },
    [a, o]
  ), Q = n(
    async (e) => m ? (await m(e), r((d) => d.filter((p) => p.id !== e)), o(), !0) : !1,
    [m, o]
  );
  return {
    items: O || u,
    isLoading: y,
    error: t,
    activeItem: E,
    isCreateOpen: h,
    isEditOpen: g,
    isDeleteOpen: f,
    openCreate: k,
    openEdit: x,
    openDelete: M,
    closeModals: o,
    handleCreate: j,
    handleUpdate: A,
    handleDelete: Q,
    refresh: v
  };
}
export {
  W as a,
  z as u
};
