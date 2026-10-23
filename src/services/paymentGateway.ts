import { cloudDb } from "../database/cloudDb";
import type { CartItem, Order, PaymentTransaction, User } from "../database/types";

export interface CardDetails {
  cardNumber: string;
  cardholderName: string;
  expiry: string; // MM/YY
  cvc: string;
}

export type PaymentMethodType = "card" | "paypal" | "applepay";

export interface ProcessPaymentParams {
  user: User;
  items: CartItem[];
  total: number;
  paymentMethod: PaymentMethodType;
  cardDetails?: CardDetails;
}

export interface PaymentResult {
  success: boolean;
  order?: Order;
  transaction?: PaymentTransaction;
  errorMessage?: string;
}

export function detectCardBrand(number: string): string {
  const cleaned = number.replace(/\D/g, "");
  if (/^4/.test(cleaned)) return "Visa";
  if (/^5[1-5]/.test(cleaned)) return "Mastercard";
  if (/^3[47]/.test(cleaned)) return "American Express";
  if (/^6(?:011|5)/.test(cleaned)) return "Discover";
  return "Card";
}

export function formatCardNumber(value: string): string {
  const cleaned = value.replace(/\D/g, "").slice(0, 16);
  const parts = [];
  for (let i = 0; i < cleaned.length; i += 4) {
    parts.push(cleaned.slice(i, i + 4));
  }
  return parts.join(" ");
}

export function formatExpiry(value: string): string {
  const cleaned = value.replace(/\D/g, "").slice(0, 4);
  if (cleaned.length >= 2) {
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
  }
  return cleaned;
}

export const paymentGateway = {
  validateCard(card: CardDetails): { valid: boolean; error?: string } {
    const rawNumber = card.cardNumber.replace(/\s/g, "");
    if (rawNumber.length < 15 || rawNumber.length > 16) {
      return { valid: false, error: "Card number must be 15 or 16 digits." };
    }

    if (!card.cardholderName || card.cardholderName.trim().length < 2) {
      return { valid: false, error: "Please enter the cardholder's full name." };
    }

    const expiryParts = card.expiry.split("/");
    if (expiryParts.length !== 2) {
      return { valid: false, error: "Expiry must be in MM/YY format." };
    }

    const month = parseInt(expiryParts[0], 10);
    const year = parseInt(`20${expiryParts[1]}`, 10);
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;

    if (month < 1 || month > 12) {
      return { valid: false, error: "Invalid expiry month." };
    }

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return { valid: false, error: "Card has expired." };
    }

    if (card.cvc.length < 3 || card.cvc.length > 4) {
      return { valid: false, error: "CVC must be 3 or 4 digits." };
    }

    return { valid: true };
  },

  async processPayment(params: ProcessPaymentParams): Promise<PaymentResult> {
    const { user, items, total, paymentMethod, cardDetails } = params;

    if (paymentMethod === "card") {
      if (!cardDetails) {
        return { success: false, errorMessage: "Card details are required." };
      }
      const validation = this.validateCard(cardDetails);
      if (!validation.valid) {
        return { success: false, errorMessage: validation.error };
      }
    }

    // Simulate realistic 3D Secure / banking network processing delay (2000ms)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reject simulated test decline card: 4000 0000 0000 0002
    if (paymentMethod === "card" && cardDetails?.cardNumber.replace(/\s/g, "").endsWith("0002")) {
      return {
        success: false,
        errorMessage: "Your card was declined by the issuing bank. Please use an alternate card.",
      };
    }

    const transactionId = `txn_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const orderId = `ord_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const rawNumber = cardDetails?.cardNumber.replace(/\s/g, "") || "";
    const cardLast4 = rawNumber ? rawNumber.slice(-4) : undefined;
    const cardBrand = cardDetails ? detectCardBrand(cardDetails.cardNumber) : undefined;

    const transaction: PaymentTransaction = {
      id: transactionId,
      orderId,
      userId: user.id,
      userEmail: user.email,
      amount: total,
      currency: "USD",
      status: "succeeded",
      paymentMethod,
      cardBrand,
      cardLast4,
      timestamp: new Date().toISOString(),
    };

    cloudDb.createTransaction(transaction);

    const order: Order = {
      id: orderId,
      userId: user.id,
      userEmail: user.email,
      items,
      total,
      status: "completed",
      transactionId,
      paymentMethod: paymentMethod === "card" ? `${cardBrand} (•••• ${cardLast4})` : paymentMethod === "paypal" ? "PayPal Express" : "Apple Pay",
      cardLast4,
      createdAt: new Date().toISOString(),
    };

    cloudDb.createOrder(order);

    return {
      success: true,
      order,
      transaction,
    };
  },
};
