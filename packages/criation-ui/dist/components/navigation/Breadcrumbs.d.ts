import { default as React, ReactNode } from 'react';
export interface BreadcrumbItem {
    id: string;
    label: ReactNode;
    href?: string;
    onClick?: () => void;
    isCurrent?: boolean;
}
export interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    separator?: ReactNode;
    className?: string;
}
export declare function Breadcrumbs({ items, separator, className, }: BreadcrumbsProps): React.JSX.Element;
