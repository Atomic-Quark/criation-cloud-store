import React, { useEffect } from "react";
import { Modal, BaseButton } from "@criation/ui";
import { CheckCircle2, Download, Printer, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import type { Order, PaymentTransaction } from "../database/types";

export interface OrderReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
  transaction: PaymentTransaction | null;
}

export function OrderReceiptModal({
  isOpen,
  onClose,
  order,
  transaction,
}: OrderReceiptModalProps) {
  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Fallback if canvas is unavailable
      }
    }
  }, [isOpen]);

  if (!isOpen || !order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#10b981" }}>
          <CheckCircle2 size={22} />
          <span>Payment Completed Successfully</span>
        </div>
      }
      size="md"
    >
      <div style={{ padding: "8px 0" }}>
        {/* Receipt Header Banner */}
        <div style={{
          backgroundColor: "#064e3b",
          border: "1px solid #059669",
          borderRadius: 10,
          padding: "16px",
          textAlign: "center",
          marginBottom: 20
        }}>
          <h3 style={{ margin: "0 0 4px 0", color: "#a7f3d0", fontSize: "1.1rem" }}>
            Thank You for Your Order!
          </h3>
          <p style={{ margin: 0, color: "#6ee7b7", fontSize: "0.85rem" }}>
            A confirmation receipt and license keys have been issued to <strong>{order.userEmail}</strong>.
          </p>
        </div>

        {/* Transaction Details Table */}
        <div style={{
          backgroundColor: "#1e293b",
          borderRadius: 8,
          padding: 16,
          marginBottom: 20,
          fontSize: "0.85rem"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: "#94a3b8" }}>Order Reference:</span>
            <span style={{ fontWeight: 700, color: "#f8fafc", fontFamily: "monospace" }}>{order.id}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: "#94a3b8" }}>Transaction ID:</span>
            <span style={{ fontWeight: 700, color: "#38bdf8", fontFamily: "monospace" }}>{order.transactionId}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: "#94a3b8" }}>Payment Method:</span>
            <span style={{ fontWeight: 600, color: "#f8fafc" }}>{order.paymentMethod}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#94a3b8" }}>Date &amp; Time:</span>
            <span style={{ color: "#f8fafc" }}>{new Date(order.createdAt).toLocaleString()}</span>
          </div>
        </div>

        {/* Itemized Order Summary */}
        <h4 style={{ fontSize: "0.92rem", color: "#f8fafc", marginBottom: 10, borderBottom: "1px solid #1e293b", paddingBottom: 6 }}>
          Items Purchased
        </h4>

        <div style={{ marginBottom: 20 }}>
          {order.items.map((item) => (
            <div
              key={item.product.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px dashed #334155",
                fontSize: "0.88rem"
              }}
            >
              <div>
                <span style={{ fontWeight: 600, color: "#f8fafc" }}>{item.product.name}</span>
                <span style={{ color: "#94a3b8", marginLeft: 8 }}>× {item.quantity}</span>
              </div>
              <span style={{ fontWeight: 700, color: "#38bdf8" }}>
                ${(item.product.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.1rem", fontWeight: 800, marginTop: 14 }}>
            <span style={{ color: "#f8fafc" }}>Amount Paid (USD):</span>
            <span style={{ color: "#10b981" }}>${order.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <BaseButton
            variant="outline"
            onClick={handlePrint}
          >
            <Printer size={16} style={{ marginRight: 6 }} /> Print Receipt
          </BaseButton>

          <BaseButton
            variant="primary"
            onClick={onClose}
          >
            Continue Shopping <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </BaseButton>
        </div>
      </div>
    </Modal>
  );
}
