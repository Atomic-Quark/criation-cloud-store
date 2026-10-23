import React, { useState } from "react";
import { Modal, BaseButton, BaseInput } from "@criation/ui";
import { CreditCard, Lock, ShieldCheck, Check, AlertCircle, RefreshCw, Zap } from "lucide-react";
import {
  paymentGateway,
  formatCardNumber,
  formatExpiry,
  detectCardBrand,
  type PaymentMethodType,
  type PaymentResult,
} from "../services/paymentGateway";
import type { CartItem, User } from "../database/types";

export interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currentUser: User;
  onPaymentSuccess: (result: PaymentResult) => void;
}

export function CheckoutModal({
  isOpen,
  onClose,
  items,
  currentUser,
  onPaymentSuccess,
}: CheckoutModalProps) {
  const [method, setMethod] = useState<PaymentMethodType>("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState(currentUser.name || "");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [bankingStep, setBankingStep] = useState<"idle" | "authorizing" | "securing">("idle");
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = Number((subtotal * 0.08).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));
  const detectedBrand = detectCardBrand(cardNumber);

  const fillTestCard = () => {
    setCardNumber("4242 4242 4242 4242");
    setCardholderName(currentUser.name || "Alex Morgan");
    setExpiry("12/28");
    setCvc("888");
    setError(null);
  };

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsProcessing(true);
    setBankingStep("authorizing");

    try {
      // Step 1: Initial Gateway Handshake
      setTimeout(() => {
        setBankingStep("securing");
      }, 900);

      const result = await paymentGateway.processPayment({
        user: currentUser,
        items,
        total,
        paymentMethod: method,
        cardDetails:
          method === "card"
            ? {
                cardNumber,
                cardholderName,
                expiry,
                cvc,
              }
            : undefined,
      });

      if (!result.success) {
        setError(result.errorMessage || "Payment declined by issuing bank.");
        setIsProcessing(false);
        setBankingStep("idle");
        return;
      }

      setIsProcessing(false);
      setBankingStep("idle");
      onPaymentSuccess(result);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred during transaction processing.");
      setIsProcessing(false);
      setBankingStep("idle");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        if (!isProcessing) onClose();
      }}
      title={
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, backgroundColor: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Lock size={15} color="#ffffff" />
          </div>
          <span>Secure Checkout Gateway</span>
        </div>
      }
      size="md"
    >
      <div style={{ padding: "4px 0" }}>
        {/* Order Summary Ribbon */}
        <div style={{
          backgroundColor: "#1e293b",
          borderRadius: 8,
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20
        }}>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Billed to Account</div>
            <div style={{ fontWeight: 600, color: "#f8fafc", fontSize: "0.9rem" }}>{currentUser.email}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Total Amount</div>
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#38bdf8" }}>${total.toFixed(2)}</div>
          </div>
        </div>

        {/* Payment Method Selector */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
          <button
            type="button"
            onClick={() => setMethod("card")}
            style={{
              padding: "10px 8px",
              borderRadius: 8,
              border: method === "card" ? "2px solid #6366f1" : "1px solid #334155",
              backgroundColor: method === "card" ? "rgba(99, 102, 241, 0.15)" : "#0f172a",
              color: method === "card" ? "#c7d2fe" : "#94a3b8",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4
            }}
          >
            <CreditCard size={18} />
            <span>Card</span>
          </button>

          <button
            type="button"
            onClick={() => setMethod("paypal")}
            style={{
              padding: "10px 8px",
              borderRadius: 8,
              border: method === "paypal" ? "2px solid #6366f1" : "1px solid #334155",
              backgroundColor: method === "paypal" ? "rgba(99, 102, 241, 0.15)" : "#0f172a",
              color: method === "paypal" ? "#c7d2fe" : "#94a3b8",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4
            }}
          >
            <Zap size={18} />
            <span>PayPal</span>
          </button>

          <button
            type="button"
            onClick={() => setMethod("applepay")}
            style={{
              padding: "10px 8px",
              borderRadius: 8,
              border: method === "applepay" ? "2px solid #6366f1" : "1px solid #334155",
              backgroundColor: method === "applepay" ? "rgba(99, 102, 241, 0.15)" : "#0f172a",
              color: method === "applepay" ? "#c7d2fe" : "#94a3b8",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4
            }}
          >
            <ShieldCheck size={18} />
            <span>Apple / UPI</span>
          </button>
        </div>

        {error && (
          <div style={{
            backgroundColor: "#450a0a",
            border: "1px solid #ef4444",
            color: "#fca5a5",
            padding: "10px 14px",
            borderRadius: 8,
            fontSize: "0.85rem",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 8
          }}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Card Form */}
        {method === "card" && (
          <form onSubmit={handlePay}>
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#f8fafc" }}>
                  Card Number
                </label>
                <button
                  type="button"
                  onClick={fillTestCard}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#38bdf8",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    textDecoration: "underline"
                  }}
                >
                  Fill Valid Test Card
                </button>
              </div>
              <div style={{ position: "relative" }}>
                <BaseInput
                  placeholder="4242 4242 4242 4242"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  disabled={isProcessing}
                  required
                />
                {detectedBrand !== "Card" && (
                  <span style={{
                    position: "absolute",
                    right: 12,
                    top: 10,
                    backgroundColor: "#334155",
                    color: "#f8fafc",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 4
                  }}>
                    {detectedBrand}
                  </span>
                )}
              </div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "#f8fafc" }}>
                Cardholder Full Name
              </label>
              <BaseInput
                placeholder="Name as it appears on card"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                disabled={isProcessing}
                required
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              <div>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "#f8fafc" }}>
                  Expiration Date
                </label>
                <BaseInput
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                  disabled={isProcessing}
                  required
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "#f8fafc" }}>
                  Security Code (CVC)
                </label>
                <BaseInput
                  placeholder="123"
                  type="password"
                  maxLength={4}
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
                  disabled={isProcessing}
                  required
                />
              </div>
            </div>

            {/* Simulated 3DS Processing Banner */}
            {isProcessing && (
              <div style={{
                backgroundColor: "#1e1b4b",
                border: "1px solid #6366f1",
                padding: "12px",
                borderRadius: 8,
                marginBottom: 16,
                textAlign: "center"
              }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, color: "#a5b4fc", fontSize: "0.85rem", fontWeight: 600 }}>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>
                    {bankingStep === "authorizing"
                      ? "Contacting Card Issuing Bank..."
                      : "Verifying 3D Secure 2.0 Authorization..."}
                  </span>
                </div>
              </div>
            )}

            <BaseButton
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isProcessing}
            >
              <Lock size={16} style={{ marginRight: 8 }} />
              Pay ${total.toFixed(2)} Securely
            </BaseButton>
          </form>
        )}

        {method !== "card" && (
          <div style={{ textAlign: "center", padding: "30px 10px" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: 20 }}>
              You will be redirected to {method === "paypal" ? "PayPal Express Checkout" : "Apple Pay"} to authorize your ${total.toFixed(2)} payment.
            </p>
            <BaseButton
              variant="primary"
              size="lg"
              fullWidth
              loading={isProcessing}
              onClick={handlePay}
            >
              Continue to {method === "paypal" ? "PayPal" : "Apple Pay"}
            </BaseButton>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: 16, color: "#64748b", fontSize: "0.75rem" }}>
          <ShieldCheck size={14} color="#10b981" />
          <span>256-bit End-to-End SSL Encryption • PCI-DSS Level 1 Compliant</span>
        </div>
      </div>
    </Modal>
  );
}
