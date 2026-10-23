import { default as React, ReactNode } from 'react';
export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: ReactNode;
    placement?: "left" | "right" | "top" | "bottom";
    size?: "sm" | "md" | "lg" | "full";
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
    initialFocusRef?: React.RefObject<HTMLElement | null>;
    finalFocusRef?: React.RefObject<HTMLElement | null>;
}
export declare function Drawer({ isOpen, onClose, title, placement, size, children, footer, className, initialFocusRef, finalFocusRef, }: DrawerProps): React.JSX.Element | null;
