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
  isFreshPurchase?: boolean;
}

export function OrderReceiptModal({
  isOpen,
  onClose,
  order,
  transaction,
  isFreshPurchase = false,
}: OrderReceiptModalProps) {
  useEffect(() => {
    if (isOpen && isFreshPurchase) {
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
  }, [isOpen, isFreshPurchase]);

  if (!isOpen || !order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#10b981" }}>
          <CheckCircle2 size={22} />
          <span>{isFreshPurchase ? "Payment Completed Successfully" : "Order Invoice & License Details"}</span>
        </span>
      }
      size="md"
    >
      <div style={{ padding: "8px 0" }}>
        {/* Receipt Header Banner */}
        <div style={{
          backgroundColor: isFreshPurchase ? "#064e3b" : "#1e293b",
          border: isFreshPurchase ? "1px solid #059669" : "1px solid #334155",
          borderRadius: 10,
          padding: "16px",
          textAlign: "center",
          marginBottom: 20
        }}>
          <h3 style={{ margin: "0 0 4px 0", color: isFreshPurchase ? "#a7f3d0" : "#f8fafc", fontSize: "1.1rem" }}>
            {isFreshPurchase ? "Thank You for Your Order!" : "Cloud Database Verified Order"}
          </h3>
          <p style={{ margin: 0, color: isFreshPurchase ? "#6ee7b7" : "#94a3b8", fontSize: "0.85rem" }}>
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
          {(order.items || []).map((item, idx) => (
            <div
              key={item?.product?.id || `item_${idx}`}
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
                <span style={{ fontWeight: 600, color: "#f8fafc" }}>{item?.product?.name || "Product License"}</span>
                <span style={{ color: "#94a3b8", marginLeft: 8 }}>× {item?.quantity || 1}</span>
              </div>
              <span style={{ fontWeight: 700, color: "#38bdf8" }}>
                ${(((item?.product?.price || 0) * (item?.quantity || 1))).toFixed(2)}
              </span>
            </div>
          ))}

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.1rem", fontWeight: 800, marginTop: 14 }}>
            <span style={{ color: "#f8fafc" }}>Amount Paid (USD):</span>
            <span style={{ color: "#10b981" }}>${(order.total || 0).toFixed(2)}</span>
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
            {isFreshPurchase ? "Continue Shopping" : "Close Invoice"} <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </BaseButton>
        </div>
      </div>
    </Modal>
  );
}
