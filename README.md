# ⚡ Criation Cloud Store

A complete, full-featured **Cloud SaaS & Digital Marketplace Application** built with the **Criation UI** component foundation and English-sentence architecture.

Features a **live free cloud database**, a **Stripe-style payment gateway with 3D Secure verification**, **user authentication**, **order invoicing**, and **cross-device responsiveness**.

---

## 🌟 Key Features

1. **English-Sentence UI Architecture**: Built using Criation UI's fluent method chaining (`ui.heading("...").gradient().build()`) and WCAG 2.2 AA accessible component primitives (`BaseButton`, `BaseCard`, `Modal`, `BaseInput`).
2. **Universal Free Cloud Database**:
   - Manages user accounts, active sessions, product catalogs, and order transactions.
   - Dual-engine persistence: live cloud synchronization + browser indexed storage fallback.
   - Multi-tab real-time state synchronization via `BroadcastChannel`.
3. **Interactive Payment Gateway**:
   - Supports Credit & Debit Cards, PayPal Express, and Apple Pay / UPI.
   - Real-time card brand detection (Visa, Mastercard, Amex, Discover).
   - Space grouping and live Luhn check validation.
   - 3D Secure 2.0 bank handshake simulation with authorization countdown.
   - Instant printable digital invoice with unique Transaction ID (`txn_...`) and confetti celebration!
4. **User Authentication & Customer Dashboard**:
   - Registration with WebCrypto SHA-256 password hashing.
   - Customer dashboard displaying past purchases and active licenses.
   - One-click "Quick Demo Account" for instant evaluation.
5. **100% Free Hosting & Deployment**:
   - Deployed live online and accessible from any smartphone, tablet, or desktop browser worldwide.

---

## 💳 Test Payment Credentials

To test the payment gateway without spending real money, use the following standard test credentials (or click **"Fill Valid Test Card"** in the checkout dialog):

| Field | Test Value |
| :--- | :--- |
| **Card Number** | `4242 4242 4242 4242` |
| **Cardholder Name** | Any name (e.g. `Alex Morgan`) |
| **Expiration Date** | Any future date (e.g. `12/28`) |
| **CVC / CVV** | `123` or `888` |

*(To simulate a bank decline, use card number ending in `0002`)*.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Free Online Deployment Options

### Option 1: Live Public Tunnel (Instant URL for Any Browser/Phone)
Expose the running app to a live public HTTPS URL on the internet:
```bash
npx localtunnel --port 5173 --subdomain criation-cloud-store
```
*Accessible on any phone or browser worldwide.*

### Option 2: Free GitHub Pages (Automated via GitHub Actions)
Push this repository to GitHub and enable GitHub Pages under **Repository Settings &rarr; Pages &rarr; Source: GitHub Actions**.

### Option 3: Free Vercel Deployment
Deploy for free in 1 command:
```bash
npx vercel --prod
```

### Option 4: Free Netlify Deployment
```bash
npx netlify deploy --prod --dir=dist
```

---

## 📄 License & Attribution

Distributed under the permissive **[MIT License](LICENSE)**.  
Built with **[Criation UI](https://github.com/Atomic-Quark/Criation-UI)** by **Divyanshu Kumar** ([@Atomic-Quark](https://github.com/Atomic-Quark)).
