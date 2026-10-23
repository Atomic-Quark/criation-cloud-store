import { default as React, ReactNode } from 'react';
export interface ContextMenuItem {
    id: string;
    label: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
    danger?: boolean;
    onClick?: () => void;
}
export interface ContextMenuProps {
    items: ContextMenuItem[];
    children: ReactNode;
    className?: string;
}
export declare function ContextMenu({ items, children, className }: ContextMenuProps): React.JSX.Element;
