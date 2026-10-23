import React from "react";
import { ui, BaseButton, BaseCard } from "@criation/ui";
import { ShoppingBag, User as UserIcon, LogOut, Package, Zap } from "lucide-react";
import type { User } from "../database/types";

export interface NavigationProps {
  currentUser: User | null;
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  onLogout: () => void;
  onViewOrders: () => void;
  onViewStore: () => void;
  currentView: "store" | "orders";
}

export function Navigation({
  currentUser,
  cartCount,
  onOpenCart,
  onOpenAuth,
  onLogout,
  onViewOrders,
  onViewStore,
  currentView,
}: NavigationProps) {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      backgroundColor: "rgba(11, 15, 25, 0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #1e293b",
      padding: "14px 24px"
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        {/* Brand Logo & Name */}
        <div
          onClick={onViewStore}
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        >
          <div style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: "linear-gradient(135deg, #6366f1 0%, #38bdf8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 14px rgba(99, 102, 241, 0.4)"
          }}>
            <Zap size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff" }}>
              Criation <span style={{ color: "#38bdf8" }}>Cloud</span>
            </div>
            <div style={{ fontSize: "0.72rem", color: "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Digital SaaS &amp; Marketplace
            </div>
          </div>
        </div>

        {/* View Switcher Navigation */}
        <nav style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button
            type="button"
            onClick={onViewStore}
            style={{
              background: currentView === "store" ? "#1e293b" : "transparent",
              border: currentView === "store" ? "1px solid #334155" : "none",
              color: currentView === "store" ? "#38bdf8" : "#94a3b8",
              padding: "8px 14px",
              borderRadius: 8,
              fontSize: "0.88rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s ease"
            }}
          >
            Storefront
          </button>

          {currentUser && (
            <button
              type="button"
              onClick={onViewOrders}
              style={{
                background: currentView === "orders" ? "#1e293b" : "transparent",
                border: currentView === "orders" ? "1px solid #334155" : "none",
                color: currentView === "orders" ? "#38bdf8" : "#94a3b8",
                padding: "8px 14px",
                borderRadius: 8,
                fontSize: "0.88rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6
              }}
            >
              <Package size={15} /> My Purchases
            </button>
          )}
        </nav>

        {/* Action Controls: Cart & User Account */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Cart Trigger with Counter Badge */}
          <button
            type="button"
            onClick={onOpenCart}
            style={{
              position: "relative",
              backgroundColor: "#1e1b4b",
              border: "1px solid #4f46e5",
              color: "#c7d2fe",
              padding: "8px 14px",
              borderRadius: 8,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 600,
              fontSize: "0.88rem"
            }}
          >
            <ShoppingBag size={18} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span style={{
                backgroundColor: "#38bdf8",
                color: "#0f172a",
                fontSize: "0.75rem",
                fontWeight: 800,
                padding: "2px 7px",
                borderRadius: 10,
                marginLeft: 2
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* User Status / Account Button */}
          {currentUser ? (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                padding: "6px 12px",
                borderRadius: 8,
                fontSize: "0.85rem",
                display: "flex",
                alignItems: "center",
                gap: 8
              }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#10b981"
                }} />
                <span style={{ fontWeight: 600, color: "#f8fafc" }}>{currentUser.name}</span>
              </div>
              <button
                type="button"
                onClick={onLogout}
                title="Sign Out"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #334155",
                  color: "#94a3b8",
                  padding: "8px",
                  borderRadius: 8,
                  cursor: "pointer"
                }}
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <BaseButton
              variant="primary"
              size="sm"
              onClick={onOpenAuth}
            >
              <UserIcon size={16} style={{ marginRight: 6 }} /> Sign In
            </BaseButton>
          )}
        </div>
      </div>
    </header>
  );
}
