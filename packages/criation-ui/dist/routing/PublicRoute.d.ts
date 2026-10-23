import { default as React, ReactNode } from 'react';
export interface PublicRouteProps {
    children: ReactNode;
    restricted?: boolean;
    redirectTo?: string;
}
export declare function PublicRoute({ children, restricted, redirectTo, }: PublicRouteProps): React.JSX.Element;
