import { default as React, ReactNode } from 'react';
export interface LandingLayoutProps {
    brand: ReactNode;
    navLinks?: ReactNode;
    navActions?: ReactNode;
    hero: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    className?: string;
}
export declare function LandingLayout({ brand, navLinks, navActions, hero, children, footer, className, }: LandingLayoutProps): React.JSX.Element;
