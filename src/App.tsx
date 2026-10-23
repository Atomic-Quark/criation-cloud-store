import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Storefront } from "./views/Storefront";
import { OrdersView } from "./components/OrdersView";
import { CartDrawer } from "./components/CartDrawer";
import { CheckoutModal } from "./components/CheckoutModal";
import { OrderReceiptModal } from "./components/OrderReceiptModal";
import { AuthModal } from "./components/AuthModal";
import { cloudDb } from "./database/cloudDb";
import { authService } from "./services/authService";
import type { CartItem, Product, Order, PaymentTransaction, User } from "./database/types";

export function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(() => authService.getCurrentUser());
  const [products] = useState<Product[]>(() => cloudDb.getProducts());
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("criation_cloud_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => cloudDb.getOrders(currentUser?.id));
  const [currentView, setCurrentView] = useState<"store" | "orders">("store");

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [activeReceiptOrder, setActiveReceiptOrder] = useState<Order | null>(null);
  const [activeReceiptTxn, setActiveReceiptTxn] = useState<PaymentTransaction | null>(null);

  // Synchronize cart changes to local storage
  useEffect(() => {
    localStorage.setItem("criation_cloud_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Synchronize database updates across browser tabs
  useEffect(() => {
    const unsubscribe = cloudDb.onSync((type, data) => {
      if (type === "SESSION_CHANGE") {
        setCurrentUser(data);
      } else if (type === "ORDER_CREATED") {
        setOrders(cloudDb.getOrders(currentUser?.id));
      }
    });
    return unsubscribe;
  }, [currentUser?.id]);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((item) => item.product.id === product.id);
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Checkout flow
  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    if (!currentUser) {
      setIsAuthOpen(true);
    } else {
      setIsCheckoutOpen(true);
    }
  };

  const handleAuthSuccess = (user: User) => {
    setCurrentUser(user);
    setOrders(cloudDb.getOrders(user.id));
    if (cartItems.length > 0) {
      setIsCheckoutOpen(true);
    }
  };

  const handleLogout = () => {
    authService.logout();
    setCurrentUser(null);
    setOrders([]);
    setCurrentView("store");
  };

  const handlePaymentSuccess = (result: any) => {
    setIsCheckoutOpen(false);
    setCartItems([]);
    if (result.order) {
      setActiveReceiptOrder(result.order);
      setActiveReceiptTxn(result.transaction);
      setIsReceiptOpen(true);
      setOrders(cloudDb.getOrders(currentUser?.id));
    }
  };

  const handleViewReceipt = (order: Order) => {
    setActiveReceiptOrder(order);
    setActiveReceiptTxn(null);
    setIsReceiptOpen(true);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0b0f19", color: "#f8fafc" }}>
      <Navigation
        currentUser={currentUser}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
        onViewOrders={() => setCurrentView("orders")}
        onViewStore={() => setCurrentView("store")}
        currentView={currentView}
      />

      <main>
        {currentView === "store" ? (
          <Storefront
            products={products}
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            onExploreFeatures={() => {}}
          />
        ) : (
          <OrdersView
            orders={orders}
            onViewReceipt={handleViewReceipt}
            onBrowseStore={() => setCurrentView("store")}
          />
        )}
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      {/* Checkout Gateway Modal */}
      {currentUser && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          items={cartItems}
          currentUser={currentUser}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

      {/* Order Receipt Modal */}
      <OrderReceiptModal
        isOpen={isReceiptOpen}
        onClose={() => setIsReceiptOpen(false)}
        order={activeReceiptOrder}
        transaction={activeReceiptTxn}
      />

      {/* Global Footer */}
      <footer style={{
        borderTop: "1px solid #1e293b",
        padding: "36px 20px",
        textAlign: "center",
        backgroundColor: "#090d16",
        color: "#64748b",
        fontSize: "0.85rem"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: 700, color: "#f8fafc", fontSize: "0.95rem" }}>Criation Cloud SaaS &amp; Digital Store</div>
            <div>Built entirely using Criation UI English-sentence builders and WCAG 2.2 AA components.</div>
          </div>
          <div>
            Powered by <strong>Criation UI (@criation/ui)</strong> • 100% Free Open Source (MIT)
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
