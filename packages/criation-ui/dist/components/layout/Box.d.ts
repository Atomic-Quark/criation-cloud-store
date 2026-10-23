import { default as React, ElementType } from 'react';
import { CursorType, PositionType } from '../../core/types';
export interface BoxProps<T extends ElementType = "div"> {
    as?: T;
    position?: PositionType;
    cursor?: CursorType;
    padding?: string | number;
    margin?: string | number;
    width?: string | number;
    height?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
    minHeight?: string | number;
    maxHeight?: string | number;
    background?: string;
    color?: string;
    borderColor?: string;
    borderWidth?: string | number;
    borderRadius?: string | number;
    display?: "block" | "inline-block" | "flex" | "inline-flex" | "grid" | "none";
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export declare const Box: React.ForwardRefExoticComponent<Omit<BoxProps<React.ElementType> & Omit<Omit<any, "ref">, keyof BoxProps<T>>, "ref"> & React.RefAttributes<unknown>>;
