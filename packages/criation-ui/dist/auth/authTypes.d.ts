/**
 * ============================================================================
 * SECURITY ADVISORY & ARCHITECTURAL NOTICE:
 * Criation UI is a client-side frontend UI library.
 * The authentication primitives provided in this package are designed for UI
 * presentation, prototyping, and client-side state integration.
 *
 * CRITICAL SECURITY BOUNDARY RULE:
 * Frontend route guards (<AuthGuard>), hidden controls, and localStorage tokens
 * DO NOT constitute a security boundary. They control UI presentation only.
 * Consuming applications MUST independently verify sessions/tokens and authorize
 * every operation on a secure backend server.
 * ============================================================================
 */
export interface User {
    id: string;
    email: string;
    name?: string;
    avatar?: string;
    role?: string;
    permissions?: string[];
    [key: string]: any;
}
export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}
/**
 * Standard contract for integrating external identity providers
 * (e.g., NextAuth, Supabase, Firebase, Auth0, or custom backend OAuth/OIDC).
 */
export interface AuthAdapter {
    login: (credentials: Record<string, any>) => Promise<{
        user: User;
        token: string;
    }>;
    logout: () => Promise<void>;
    getCurrentUser?: () => Promise<User | null>;
    refreshToken?: () => Promise<string | null>;
}
export interface AuthContextValue extends AuthState {
    login: (credentials: Record<string, any>) => Promise<void>;
    logout: () => Promise<void>;
    hasRole: (role: string | string[]) => boolean;
    hasPermission: (permission: string) => boolean;
}
