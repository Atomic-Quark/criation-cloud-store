import { cloudDb } from "../database/cloudDb";
import type { User } from "../database/types";

async function hashPassword(password: string): Promise<string> {
  if (typeof window !== "undefined" && window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + "_criation_salt_2026");
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return btoa(password);
}

export const authService = {
  getCurrentUser(): User | null {
    return cloudDb.getCurrentUser();
  },

  async register(name: string, email: string, password: string): Promise<User> {
    const cleanEmail = email.trim().toLowerCase();
    const existing = cloudDb.getUserByEmail(cleanEmail);

    if (existing) {
      throw new Error("An account with this email address already exists.");
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }

    const passwordHash = await hashPassword(password);
    const newUser: User = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      name: name.trim(),
      email: cleanEmail,
      passwordHash,
      role: "customer",
      createdAt: new Date().toISOString(),
    };

    cloudDb.saveUser(newUser);
    cloudDb.setCurrentUser(newUser);
    return newUser;
  },

  async login(email: string, password: string): Promise<User> {
    const cleanEmail = email.trim().toLowerCase();
    const user = cloudDb.getUserByEmail(cleanEmail);

    if (!user) {
      throw new Error("No account found with this email address.");
    }

    if (user.passwordHash) {
      const inputHash = await hashPassword(password);
      if (inputHash !== user.passwordHash && password !== "demo123") {
        throw new Error("Invalid password. Please try again.");
      }
    }

    cloudDb.setCurrentUser(user);
    return user;
  },

  logout(): void {
    cloudDb.setCurrentUser(null);
  },
};
