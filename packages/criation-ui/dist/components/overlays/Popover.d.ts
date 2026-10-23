import { default as React, ReactNode } from 'react';
export interface PopoverProps {
    trigger: ReactNode;
    content: ReactNode;
    placement?: "top" | "bottom" | "left" | "right";
    className?: string;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare function Popover({ trigger, content, placement, className, isOpen: controlledOpen, onOpenChange, }: PopoverProps): React.JSX.Element;
