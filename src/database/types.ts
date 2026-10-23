export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash?: string;
  role: "admin" | "customer";
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: "saas" | "developer-tools" | "templates";
  rating: number;
  reviewsCount: number;
  features: string[];
  badge?: string;
  popular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface PaymentTransaction {
  id: string;
  orderId: string;
  userId: string;
  userEmail: string;
  amount: number;
  currency: string;
  status: "succeeded" | "processing" | "failed";
  paymentMethod: "card" | "paypal" | "applepay";
  cardBrand?: string;
  cardLast4?: string;
  timestamp: string;
}

export interface Order {
  id: string;
  userId: string;
  userEmail: string;
  items: CartItem[];
  total: number;
  status: "completed" | "processing" | "refunded";
  transactionId: string;
  paymentMethod: string;
  cardLast4?: string;
  createdAt: string;
}
