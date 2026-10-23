import React, { useState } from "react";
import { Modal, BaseButton, BaseInput } from "@criation/ui";
import { User as UserIcon, Mail, Lock, AlertCircle, Sparkles } from "lucide-react";
import { authService } from "../services/authService";
import type { User } from "../database/types";

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: User) => void;
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      let user: User;
      if (mode === "register") {
        if (!name.trim()) {
          throw new Error("Please enter your name.");
        }
        user = await authService.register(name, email, password);
      } else {
        user = await authService.login(email, password);
      }

      setIsLoading(false);
      onSuccess(user);
      onClose();
    } catch (err: any) {
      setError(err.message || "Authentication failed. Please check your details.");
      setIsLoading(false);
    }
  };

  const fillDemoAccount = () => {
    setEmail("demo@criation.io");
    setPassword("demo123");
    setError(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, backgroundColor: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <UserIcon size={16} color="#ffffff" />
          </div>
          <span>{mode === "login" ? "Sign In to Criation Cloud" : "Create Your Account"}</span>
        </div>
      }
      size="sm"
    >
      <div style={{ padding: "4px 0" }}>
        {/* Toggle Mode Switcher */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          backgroundColor: "#1e293b",
          borderRadius: 8,
          padding: 4,
          marginBottom: 20
        }}>
          <button
            type="button"
            onClick={() => {
              setMode("login");
              setError(null);
            }}
            style={{
              padding: "8px 0",
              border: "none",
              borderRadius: 6,
              backgroundColor: mode === "login" ? "#0f172a" : "transparent",
              color: mode === "login" ? "#38bdf8" : "#94a3b8",
              fontWeight: 700,
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.15s ease"
            }}
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={() => {
              setMode("register");
              setError(null);
            }}
            style={{
              padding: "8px 0",
              border: "none",
              borderRadius: 6,
              backgroundColor: mode === "register" ? "#0f172a" : "transparent",
              color: mode === "register" ? "#38bdf8" : "#94a3b8",
              fontWeight: 700,
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.15s ease"
            }}
          >
            Register Free
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

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "#f8fafc" }}>
                Full Name
              </label>
              <BaseInput
                placeholder="e.g. Jordan Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          )}

          <div style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#f8fafc" }}>
                Email Address
              </label>
              {mode === "login" && (
                <button
                  type="button"
                  onClick={fillDemoAccount}
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
                  Quick Demo Account
                </button>
              )}
            </div>
            <BaseInput
              type="email"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              leftIcon={<Mail size={16} color="#94a3b8" />}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 600, color: "#f8fafc" }}>
              Password
            </label>
            <BaseInput
              type="password"
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              leftIcon={<Lock size={16} color="#94a3b8" />}
            />
          </div>

          <BaseButton
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={isLoading}
          >
            {mode === "login" ? "Sign In to Account" : "Create Account & Continue"}
          </BaseButton>
        </form>
      </div>
    </Modal>
  );
}
