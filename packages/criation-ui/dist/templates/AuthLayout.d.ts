import { default as React, ReactNode } from 'react';
export interface AuthLayoutProps {
    brand?: ReactNode;
    title: string;
    subtitle?: string;
    children: ReactNode;
    footer?: ReactNode;
    backgroundPattern?: boolean;
    className?: string;
}
export declare function AuthLayout({ brand, title, subtitle, children, footer, backgroundPattern, className, }: AuthLayoutProps): React.JSX.Element;
