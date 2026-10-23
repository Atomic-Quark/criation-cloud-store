import React, { useState, useEffect } from "react";
import { useCommerceWorkflow } from "@criation/ui";
import { Navigation } from "./components/Navigation";
import { Storefront } from "./views/Storefront";
import { OrdersView } from "./components/OrdersView";
import { CartDrawer } from "./components/CartDrawer";
import { CheckoutModal } from "./components/CheckoutModal";
import { OrderReceiptModal } from "./components/OrderReceiptModal";
import { AuthModal } from "./components/AuthModal";
import { cloudDb } from "./database/cloudDb";
import { authService } from "./services/authService";
import type { CartItem, Product, Order, User } from "./database/types";

export function App() {
  const [products] = useState<Product[]>(() => cloudDb.getProducts());

  // Initial cart from storage
  const initialCart: CartItem[] = (() => {
    try {
      const saved = localStorage.getItem("criation_cloud_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  })();

  /**
   * ⚡ Criation UI — Natural Language Workflow Engine
   * 
   * Replaces 60+ lines of manual React event handlers with plain-English rules:
   * - "When the user changes a product's quantity: update matching item; remove if zero"
   * - "When the user removes a product from the cart: remove matching product"
   * - "When the user proceeds to checkout: close cart; prompt login if needed; else open checkout"
   * - "When authentication succeeds: store user, load orders, resume checkout"
   * - "When the user logs out: logout service, clear state, return to store"
   * - "When payment succeeds: close checkout, clear cart, display receipt, refresh orders"
   */
  const {
    cartItems,
    currentUser,
    orders,
    currentView,
    cartCount,
    isCartOpen,
    isAuthOpen,
    isCheckoutOpen,
    isReceiptOpen,
    activeReceiptOrder,
    activeReceiptTxn,
    addToCart,
    updateQuantity,
    removeFromCart,
    proceedToCheckout,
    handleAuthSuccess,
    handleLogout,
    handlePaymentSuccess,
    openCart,
    closeCart,
    openAuth,
    closeAuth,
    closeCheckout,
    closeReceipt,
    viewReceipt,
    navigateTo,
  } = useCommerceWorkflow<Product, User, Order>({
    initialCart,
    initialUser: authService.getCurrentUser(),
    loadOrders: (userId) => cloudDb.getOrders(userId),
    onLogoutService: () => authService.logout(),
  });

  // Synchronize cart changes to local storage
  useEffect(() => {
    localStorage.setItem("criation_cloud_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0b0f19", color: "#f8fafc" }}>
      <Navigation
        currentUser={currentUser}
        cartCount={cartCount}
        onOpenCart={openCart}
        onOpenAuth={openAuth}
        onLogout={handleLogout}
        onViewOrders={() => navigateTo("orders")}
        onViewStore={() => navigateTo("store")}
        currentView={currentView}
      />

      <main>
        {currentView === "store" ? (
          <Storefront
            products={products}
            cartItems={cartItems}
            onAddToCart={addToCart}
            onExploreFeatures={() => {}}
          />
        ) : (
          <OrdersView
            orders={orders}
            onViewReceipt={viewReceipt}
            onBrowseStore={() => navigateTo("store")}
          />
        )}
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onProceedToCheckout={proceedToCheckout}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={closeAuth}
        onSuccess={handleAuthSuccess}
      />

      {/* Checkout Gateway Modal */}
      {currentUser && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={closeCheckout}
          items={cartItems}
          currentUser={currentUser}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

      {/* Order Receipt Modal */}
      <OrderReceiptModal
        isOpen={isReceiptOpen}
        onClose={closeReceipt}
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
