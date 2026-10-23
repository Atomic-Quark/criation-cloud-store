import { default as React, ReactNode } from 'react';
export interface SidebarItem {
    id: string;
    label: string;
    icon?: ReactNode;
    badge?: ReactNode;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
export interface SidebarProps {
    header?: ReactNode;
    items: SidebarItem[];
    footer?: ReactNode;
    collapsed?: boolean;
    className?: string;
}
export declare function Sidebar({ header, items, footer, collapsed, className, }: SidebarProps): React.JSX.Element;
