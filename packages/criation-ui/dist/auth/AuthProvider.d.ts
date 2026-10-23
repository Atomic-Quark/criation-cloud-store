import { default as React, ReactNode } from 'react';
import { User, AuthAdapter } from './authTypes';
/**
 * SECURITY NOTICE:
 * Client-side demonstration only. This is not a production authentication system.
 * The consuming backend must independently verify sessions/tokens and authorize each request.
 * Never treat UI visibility or disabled states as a security boundary.
 */
export interface AuthProviderProps {
    children: ReactNode;
    adapter?: AuthAdapter;
    initialUser?: User | null;
    initialToken?: string | null;
    onLogin?: (credentials: Record<string, any>) => Promise<{
        user: User;
        token: string;
    }>;
    onLogout?: () => Promise<void>;
}
export declare function AuthProvider({ children, adapter, initialUser, initialToken, onLogin, onLogout, }: AuthProviderProps): React.JSX.Element;
