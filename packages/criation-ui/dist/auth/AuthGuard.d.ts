import { default as React, ReactNode } from 'react';
/**
 * ============================================================================
 * SECURITY NOTICE:
 * <AuthGuard> is a client-side visual presentation helper.
 * It conditionally hides or displays UI components based on local client state.
 *
 * THIS IS NOT A SECURITY BOUNDARY.
 * Frontend components can be inspected or bypassed by any user in their browser.
 * Sensitive data and operations MUST be protected by authenticated backend API
 * endpoints that validate session tokens independently on every request.
 * ============================================================================
 */
export interface AuthGuardProps {
    children: ReactNode;
    fallback?: ReactNode;
    requiredRole?: string | string[];
    requiredPermission?: string;
    unauthorizedFallback?: ReactNode;
}
export declare function AuthGuard({ children, fallback, requiredRole, requiredPermission, unauthorizedFallback, }: AuthGuardProps): React.JSX.Element;
