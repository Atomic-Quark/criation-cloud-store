import { default as React, ReactNode } from 'react';
export interface DropdownMenuItem {
    id: string;
    label: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
    danger?: boolean;
    onClick?: () => void;
}
export interface DropdownMenuProps {
    trigger: ReactNode;
    items: DropdownMenuItem[];
    placement?: "left" | "right";
    className?: string;
}
export declare function DropdownMenu({ trigger, items, placement, className, }: DropdownMenuProps): React.JSX.Element;
