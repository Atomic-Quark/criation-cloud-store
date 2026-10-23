import type { Product } from "./types";

export const initialProducts: Product[] = [
  {
    id: "prod-cloud-pro",
    name: "Criation Cloud Pro",
    tagline: "Full-scale serverless application infrastructure",
    description: "Instant cloud databases, edge CDN endpoints, automatic SSL, and continuous deployment for real-time web apps.",
    price: 29,
    category: "saas",
    rating: 4.9,
    reviewsCount: 142,
    features: [
      "Unlimited Serverless Workflows",
      "Global Edge CDN Acceleration",
      "Realtime Distributed Key-Value Store",
      "24/7 Priority SLA & Monitoring"
    ],
    popular: true,
    badge: "Bestseller"
  },
  {
    id: "prod-ui-enterprise",
    name: "Criation UI Enterprise",
    tagline: "Commercial license for multi-team deployments",
    description: "Unlimited internal and client projects with source code access, private npm registry proxy, and architectural reviews.",
    price: 149,
    category: "developer-tools",
    rating: 5.0,
    reviewsCount: 88,
    features: [
      "Unlimited Commercial Projects",
      "Source Code Access & Private Forking",
      "WCAG 2.2 AA Compliance Audit Reports",
      "Direct Architect Pair-Programming Access"
    ],
    badge: "Enterprise"
  },
  {
    id: "prod-ai-assistant",
    name: "Criation AI Builder Engine",
    tagline: "Natural-language React code generation engine",
    description: "Translate conversational English specifications directly into production-ready React 18/19 components and CRUD pages.",
    price: 49,
    category: "saas",
    rating: 4.85,
    reviewsCount: 96,
    features: [
      "100,000 Generation Tokens / month",
      "Multi-Resource Schema Inference",
      "Automated WAI-ARIA Accessibility Wiring",
      "Instant Vite / Next.js Export"
    ],
    popular: true
  },
  {
    id: "prod-saas-starter",
    name: "SaaS Launchpad Kit",
    tagline: "Complete multi-tenant subscription boilerplate",
    description: "Ready-to-deploy SaaS foundation with Stripe billing, user authentication, role-based access control, and dark mode.",
    price: 79,
    category: "templates",
    rating: 4.92,
    reviewsCount: 215,
    features: [
      "Stripe Checkout & Billing Portal",
      "Multi-tenant Team Management",
      "PostgreSQL + Prisma ORM Schema",
      "Fully Responsive Dashboard UI"
    ]
  },
  {
    id: "prod-api-gateway",
    name: "Criation API Mesh",
    tagline: "High-throughput managed REST & GraphQL proxy",
    description: "Global low-latency API gateway with rate-limiting, request deduplication, distributed caching, and DDoS shielding.",
    price: 99,
    category: "developer-tools",
    rating: 4.78,
    reviewsCount: 54,
    features: [
      "Sub-millisecond Global Edge Caching",
      "Token-Bucket Rate Limiting",
      "Detailed Request Analytics & Logs",
      "Zero-downtime Canary Deployments"
    ]
  },
  {
    id: "prod-mobile-suite",
    name: "Mobile Cross-Platform Suite",
    tagline: "React Native & Expo UI design system",
    description: "50+ mobile-first interactive components matching your web application styling for iOS and Android.",
    price: 69,
    category: "templates",
    rating: 4.88,
    reviewsCount: 67,
    features: [
      "Compatible with Expo SDK 52+",
      "Fluid Gesture & Haptic Feedback",
      "Identical Web & Mobile Tokens",
      "Native Navigation Stacks"
    ]
  }
];
