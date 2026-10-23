import { default as React, ReactNode } from 'react';
export interface TooltipProps {
    label: ReactNode;
    children: ReactNode;
    placement?: "top" | "bottom" | "left" | "right";
    delayMs?: number;
    className?: string;
}
export declare function Tooltip({ label, children, placement, delayMs, className, }: TooltipProps): React.JSX.Element;
