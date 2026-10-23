import React from "react";
import { BaseButton } from "@criation/ui";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingCart } from "lucide-react";
import type { CartItem } from "../database/types";

export interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = Number((subtotal * 0.08).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      backdropFilter: "blur(6px)",
      zIndex: 200,
      display: "flex",
      justifyContent: "flex-end"
    }}>
      <div style={{
        width: "100%",
        maxWidth: 440,
        backgroundColor: "#0f172a",
        borderLeft: "1px solid #1e293b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "24px 20px",
        boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.5)",
        animation: "slideIn 0.25s ease"
      }}>
        {/* Header */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1e293b", paddingBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <ShoppingCart size={20} color="#38bdf8" />
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0, color: "#f8fafc" }}>
                Your Order Cart ({items.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer" }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Item List */}
          <div style={{ marginTop: 20, maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}>
            {items.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <ShoppingCart size={40} color="#475569" style={{ margin: "0 auto 16px auto", display: "block" }} />
                <h4 style={{ margin: 0, color: "#f8fafc" }}>Your cart is empty</h4>
                <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: 6 }}>
                  Select a SaaS subscription or digital tool from our catalog to get started.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  style={{
                    backgroundColor: "#1e293b",
                    borderRadius: 10,
                    padding: 14,
                    marginBottom: 12,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div style={{ flex: 1, paddingRight: 12 }}>
                    <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "#f8fafc" }}>
                      {item.product.name}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#38bdf8", fontWeight: 700, marginTop: 4 }}>
                      ${item.product.price} each
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", backgroundColor: "#0f172a", borderRadius: 6, border: "1px solid #334155" }}>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        style={{ background: "transparent", border: "none", color: "#94a3b8", padding: "4px 8px", cursor: "pointer" }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, minWidth: 20, textAlign: "center" }}>
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        style={{ background: "transparent", border: "none", color: "#94a3b8", padding: "4px 8px", cursor: "pointer" }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.product.id)}
                      title="Remove Item"
                      style={{ background: "transparent", border: "none", color: "#ef4444", padding: "6px", cursor: "pointer" }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer & Checkout Trigger */}
        {items.length > 0 && (
          <div style={{ borderTop: "1px solid #1e293b", paddingTop: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "#94a3b8", marginBottom: 6 }}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "#94a3b8", marginBottom: 12 }}>
              <span>Estimated Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.15rem", fontWeight: 800, color: "#f8fafc", marginBottom: 20 }}>
              <span>Total Due</span>
              <span style={{ color: "#38bdf8" }}>${total.toFixed(2)}</span>
            </div>

            <BaseButton
              variant="primary"
              size="lg"
              fullWidth
              onClick={onProceedToCheckout}
            >
              Checkout Now <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </BaseButton>
          </div>
        )}
      </div>
    </div>
  );
}
