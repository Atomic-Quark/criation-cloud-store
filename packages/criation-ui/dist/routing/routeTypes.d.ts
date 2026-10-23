import { ReactNode } from 'react';
export interface RouteConfig {
    path: string;
    element: ReactNode;
    isProtected?: boolean;
    requiredRole?: string | string[];
    redirectPath?: string;
}
export type NavigationDirection = "forward" | "backward" | "replace";
export interface NavigationOptions {
    direction?: NavigationDirection;
    replace?: boolean;
    state?: any;
}
