import { default as React, HTMLAttributes, ReactElement } from 'react';
export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
    orientation?: "horizontal" | "vertical";
    variant?: "solid" | "dashed" | "dotted";
}
export declare const BaseDivider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLHRElement>>;
/**
 * Universal Divider:
 * 1. Simple Function:
 *    Divider() or Divider("dashed")
 * 2. JSX Component:
 *    <Divider variant="dashed" />
 */
export declare function Divider(props?: DividerProps | "solid" | "dashed" | "dotted" | "horizontal" | "vertical"): ReactElement;
export declare namespace Divider {
    var displayName: string;
}
