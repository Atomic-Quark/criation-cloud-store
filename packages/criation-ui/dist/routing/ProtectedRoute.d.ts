import { default as React, ReactNode } from 'react';
export interface ProtectedRouteProps {
    children: ReactNode;
    redirectTo?: string;
    allowedRoles?: string[];
    fallback?: ReactNode;
}
export declare function ProtectedRoute({ children, redirectTo, allowedRoles, fallback, }: ProtectedRouteProps): React.JSX.Element;
