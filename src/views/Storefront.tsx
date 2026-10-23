import React, { useState } from "react";
import { ui, BaseButton } from "@criation/ui";
import { ProductCard } from "../components/ProductCard";
import type { Product, CartItem } from "../database/types";
import { Zap, ShieldCheck, Database, CreditCard, Sparkles, Check } from "lucide-react";

export interface StorefrontProps {
  products: Product[];
  cartItems: CartItem[];
  onAddToCart: (product: Product) => void;
  onExploreFeatures: () => void;
}

export function Storefront({
  products,
  cartItems,
  onAddToCart,
  onExploreFeatures,
}: StorefrontProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        padding: "70px 20px 50px 20px",
        textAlign: "center",
        background: "radial-gradient(ellipse at 50% 10%, rgba(99, 102, 241, 0.22) 0%, rgba(11, 15, 25, 0) 70%)",
        borderBottom: "1px solid #1e293b"
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {/* Release Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "rgba(99, 102, 241, 0.15)",
            border: "1px solid #6366f1",
            padding: "6px 16px",
            borderRadius: 30,
            fontSize: "0.82rem",
            color: "#c7d2fe",
            fontWeight: 700,
            marginBottom: 20
          }}>
            <Sparkles size={15} color="#38bdf8" />
            <span>BUILT WITH CRIATION UI • ENGLISH-SENTENCE ARCHITECTURE</span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: "0 0 18px 0",
            background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            The Next-Generation Digital Cloud Store
          </h1>

          <p style={{
            fontSize: "1.12rem",
            color: "#94a3b8",
            lineHeight: 1.6,
            maxWidth: 680,
            margin: "0 auto 30px auto"
          }}>
            Experience serverless applications built with Criation UI. Integrated with a live free cloud database, Stripe-style checkout, and accessible on every device.
          </p>

          {/* Quick Metrics Bar */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 24,
            padding: "16px 24px",
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            border: "1px solid #1e293b",
            borderRadius: 12,
            maxWidth: 640,
            margin: "0 auto",
            fontSize: "0.85rem",
            color: "#cbd5e1"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Database size={16} color="#38bdf8" />
              <span>Universal Cloud DB</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <CreditCard size={16} color="#10b981" />
              <span>Live Payment Gateway</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <ShieldCheck size={16} color="#818cf8" />
              <span>WCAG 2.2 AA Accessible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px 80px 20px" }}>
        {/* Category Filter Pills */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14, marginBottom: 32 }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0, color: "#f8fafc" }}>
              Explore Products &amp; Solutions
            </h2>
            <p style={{ fontSize: "0.85rem", color: "#94a3b8", margin: "4px 0 0 0" }}>
              Showing {filteredProducts.length} cloud software licenses and digital templates
            </p>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { id: "all", label: "All Products" },
              { id: "saas", label: "SaaS Subscriptions" },
              { id: "developer-tools", label: "Developer Tools" },
              { id: "templates", label: "UI Templates" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 20,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: selectedCategory === cat.id ? "1.5px solid #6366f1" : "1px solid #334155",
                  backgroundColor: selectedCategory === cat.id ? "#1e1b4b" : "#0f172a",
                  color: selectedCategory === cat.id ? "#c7d2fe" : "#94a3b8",
                  transition: "all 0.15s ease"
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 24
        }}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              isInCart={cartItems.some((ci) => ci.product.id === product.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
