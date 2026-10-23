import React from "react";
import { BaseCard, BaseButton } from "@criation/ui";
import { Star, CheckCircle, Plus } from "lucide-react";
import type { Product } from "../database/types";

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart?: boolean;
}

export function ProductCard({ product, onAddToCart, isInCart }: ProductCardProps) {
  return (
    <div style={{
      backgroundColor: "#0f172a",
      borderRadius: 12,
      border: product.popular ? "1.5px solid #6366f1" : "1px solid #1e293b",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      boxShadow: product.popular ? "0 10px 30px -10px rgba(99, 102, 241, 0.3)" : "none",
      transition: "transform 0.2s ease, border-color 0.2s ease"
    }}>
      {product.badge && (
        <span style={{
          position: "absolute",
          top: -10,
          right: 20,
          backgroundColor: product.popular ? "#6366f1" : "#0284c7",
          color: "#ffffff",
          fontSize: "0.72rem",
          fontWeight: 800,
          padding: "3px 10px",
          borderRadius: 20,
          textTransform: "uppercase",
          letterSpacing: "0.06em"
        }}>
          {product.badge}
        </span>
      )}

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <div style={{ display: "flex", color: "#f59e0b" }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
          <span style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 600 }}>
            {product.rating} ({product.reviewsCount})
          </span>
        </div>

        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 6px 0", color: "#f8fafc" }}>
          {product.name}
        </h3>

        <p style={{ fontSize: "0.88rem", color: "#94a3b8", margin: "0 0 16px 0", lineHeight: 1.5 }}>
          {product.tagline}
        </p>

        <div style={{ display: "flex", alignItems: "baseline", gap: 4, margin: "16px 0" }}>
          <span style={{ fontSize: "2rem", fontWeight: 800, color: "#38bdf8" }}>
            ${product.price}
          </span>
          <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
            {product.category === "saas" ? "/ month" : "one-time"}
          </span>
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 24px 0" }}>
          {product.features.map((feat, idx) => (
            <li key={idx} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "#cbd5e1", marginBottom: 8 }}>
              <CheckCircle size={15} color="#10b981" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <BaseButton
        variant={product.popular ? "primary" : "outline"}
        size="md"
        fullWidth
        onClick={() => onAddToCart(product)}
      >
        <Plus size={16} style={{ marginRight: 6 }} />
        {isInCart ? "Add Another" : "Add to Cart"}
      </BaseButton>
    </div>
  );
}
