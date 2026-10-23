import React from "react";
import { BaseCard, BaseButton } from "@criation/ui";
import { Package, Calendar, CreditCard, Receipt, ExternalLink } from "lucide-react";
import type { Order } from "../database/types";

export interface OrdersViewProps {
  orders: Order[];
  onViewReceipt: (order: Order) => void;
  onBrowseStore: () => void;
}

export function OrdersView({ orders, onViewReceipt, onBrowseStore }: OrdersViewProps) {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 6px 0", color: "#f8fafc" }}>
            Purchase History &amp; Active Licenses
          </h1>
          <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.92rem" }}>
            All orders are synchronized and securely stored in your cloud database profile.
          </p>
        </div>
        <BaseButton variant="outline" onClick={onBrowseStore}>
          Return to Storefront
        </BaseButton>
      </div>

      {orders.length === 0 ? (
        <div style={{
          backgroundColor: "#0f172a",
          border: "1px solid #1e293b",
          borderRadius: 12,
          padding: "60px 20px",
          textAlign: "center"
        }}>
          <Package size={48} color="#475569" style={{ margin: "0 auto 16px auto", display: "block" }} />
          <h3 style={{ margin: "0 0 8px 0", color: "#f8fafc" }}>No purchases on record yet</h3>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem", maxWidth: 440, margin: "0 auto 24px auto" }}>
            When you complete a checkout using our secure payment gateway, your invoices and digital product keys will appear here.
          </p>
          <BaseButton variant="primary" onClick={onBrowseStore}>
            Explore Cloud Store
          </BaseButton>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {orders.map((order) => (
            <div
              key={order.id}
              style={{
                backgroundColor: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: 12,
                padding: "20px 24px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "0.8rem", backgroundColor: "#064e3b", color: "#6ee7b7", border: "1px solid #059669", padding: "2px 8px", borderRadius: 12, fontWeight: 700, textTransform: "uppercase" }}>
                    {order.status}
                  </span>
                  <span style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#94a3b8" }}>
                    ID: {order.id}
                  </span>
                </div>

                <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#f8fafc", marginBottom: 6 }}>
                  {(order.items || []).map((i) => `${i?.product?.name || "Product License"} (×${i?.quantity || 1})`).join(", ") || "No items listed"}
                </div>

                <div style={{ display: "flex", gap: 18, color: "#64748b", fontSize: "0.82rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <Calendar size={13} /> {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "Recent"}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <CreditCard size={13} /> {order.paymentMethod || "Credit Card"}
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Total Paid</div>
                  <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#10b981" }}>
                    ${(order.total || 0).toFixed(2)}
                  </div>
                </div>

                <BaseButton
                  variant="outline"
                  size="sm"
                  onClick={() => onViewReceipt(order)}
                >
                  <Receipt size={15} style={{ marginRight: 6 }} /> View Invoice
                </BaseButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
