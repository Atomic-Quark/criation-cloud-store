import type { User, Product, Order, PaymentTransaction } from "./types";
import { initialProducts } from "./initialData";

class UniversalCloudDatabase {
  private usersKey = "criation_cloud_users_v1";
  private productsKey = "criation_cloud_products_v1";
  private ordersKey = "criation_cloud_orders_v1";
  private transactionsKey = "criation_cloud_txns_v1";
  private sessionKey = "criation_cloud_session_v1";
  private broadcast: BroadcastChannel | null = null;

  constructor() {
    if (typeof window !== "undefined" && "BroadcastChannel" in window) {
      try {
        this.broadcast = new BroadcastChannel("criation_cloud_db_channel");
      } catch (e) {
        // BroadcastChannel unavailable in some private browsing contexts
      }
    }
    this.seedDefaults();
  }

  private seedDefaults() {
    if (typeof window === "undefined") return;

    if (!localStorage.getItem(this.productsKey)) {
      localStorage.setItem(this.productsKey, JSON.stringify(initialProducts));
    }

    if (!localStorage.getItem(this.usersKey)) {
      const demoUser: User = {
        id: "usr_demo_101",
        name: "Dev Member",
        email: "demo@criation.io",
        role: "customer",
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem(this.usersKey, JSON.stringify([demoUser]));
    }
  }

  private notify(type: string, data?: any) {
    if (this.broadcast) {
      this.broadcast.postMessage({ type, data, timestamp: Date.now() });
    }
  }

  // USERS
  getUsers(): User[] {
    try {
      const raw = localStorage.getItem(this.usersKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  saveUser(user: User): User {
    const users = this.getUsers();
    const existingIndex = users.findIndex((u) => u.id === user.id || u.email.toLowerCase() === user.email.toLowerCase());

    if (existingIndex !== -1) {
      users[existingIndex] = { ...users[existingIndex], ...user };
    } else {
      users.unshift(user);
    }

    localStorage.setItem(this.usersKey, JSON.stringify(users));
    this.notify("USER_SAVED", user);
    return user;
  }

  getUserByEmail(email: string): User | null {
    const users = this.getUsers();
    return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
  }

  // ACTIVE SESSION
  getCurrentUser(): User | null {
    try {
      const raw = localStorage.getItem(this.sessionKey);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  setCurrentUser(user: User | null) {
    if (user) {
      localStorage.setItem(this.sessionKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.sessionKey);
    }
    this.notify("SESSION_CHANGE", user);
  }

  // PRODUCTS
  getProducts(): Product[] {
    try {
      const raw = localStorage.getItem(this.productsKey);
      return raw ? JSON.parse(raw) : initialProducts;
    } catch {
      return initialProducts;
    }
  }

  getProductById(id: string): Product | null {
    return this.getProducts().find((p) => p.id === id) || null;
  }

  // ORDERS
  getOrders(userId?: string): Order[] {
    try {
      const raw = localStorage.getItem(this.ordersKey);
      const all: Order[] = raw ? JSON.parse(raw) : [];
      if (userId) {
        return all.filter((o) => o.userId === userId);
      }
      return all;
    } catch {
      return [];
    }
  }

  createOrder(order: Order): Order {
    const orders = this.getOrders();
    orders.unshift(order);
    localStorage.setItem(this.ordersKey, JSON.stringify(orders));
    this.notify("ORDER_CREATED", order);
    return order;
  }

  // TRANSACTIONS
  createTransaction(txn: PaymentTransaction): PaymentTransaction {
    try {
      const raw = localStorage.getItem(this.transactionsKey);
      const all: PaymentTransaction[] = raw ? JSON.parse(raw) : [];
      all.unshift(txn);
      localStorage.setItem(this.transactionsKey, JSON.stringify(all));
      this.notify("TRANSACTION_LOGGED", txn);
      return txn;
    } catch {
      return txn;
    }
  }

  getTransactions(userId?: string): PaymentTransaction[] {
    try {
      const raw = localStorage.getItem(this.transactionsKey);
      const all: PaymentTransaction[] = raw ? JSON.parse(raw) : [];
      if (userId) {
        return all.filter((t) => t.userId === userId);
      }
      return all;
    } catch {
      return [];
    }
  }

  onSync(callback: (type: string, data: any) => void): () => void {
    if (!this.broadcast) return () => {};
    const handler = (event: MessageEvent) => {
      callback(event.data?.type, event.data?.data);
    };
    this.broadcast.addEventListener("message", handler);
    return () => {
      this.broadcast?.removeEventListener("message", handler);
    };
  }
}

export const cloudDb = new UniversalCloudDatabase();
