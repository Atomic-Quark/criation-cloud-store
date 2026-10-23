import { CSSProperties, ReactNode } from 'react';
import { ComponentSize, ComponentVariant, CursorType, PositionType, FlexAlign, FlexJustify, FlexDirection } from './types';
/**
 * Base identity properties
 */
export interface IdentityProps {
    id?: string;
    name?: string;
    "data-testid"?: string;
}
/**
 * Base styling and visual properties
 */
export interface StylingProps {
    className?: string;
    style?: CSSProperties;
    variant?: ComponentVariant;
}
/**
 * Dimension control properties
 */
export interface DimensionProps {
    width?: string | number;
    height?: string | number;
    size?: ComponentSize;
    minWidth?: string | number;
    maxWidth?: string | number;
    minHeight?: string | number;
    maxHeight?: string | number;
}
/**
 * Color and border control properties
 */
export interface ColorProps {
    color?: string;
    background?: string;
    borderColor?: string;
}
/**
 * Layout and structural positioning properties
 */
export interface LayoutProps {
    display?: "block" | "inline-block" | "flex" | "inline-flex" | "grid" | "none";
    position?: PositionType;
    direction?: FlexDirection;
    align?: FlexAlign;
    justify?: FlexJustify;
    gap?: string | number;
    padding?: string | number;
    margin?: string | number;
}
/**
 * Interactive behavior properties
 */
export interface InteractionProps {
    disabled?: boolean;
    loading?: boolean;
    tabIndex?: number;
}
/**
 * Pointer / cursor control
 */
export interface PointerProps {
    cursor?: CursorType;
}
/**
 * Accessibility properties
 */
export interface AccessibilityProps {
    "aria-label"?: string;
    "aria-describedby"?: string;
    "aria-labelledby"?: string;
    "aria-hidden"?: boolean;
    role?: string;
}
/**
 * Universal Base Component Props
 * Combines all standard property groups into a unified foundation.
 */
export interface BaseComponentProps extends IdentityProps, StylingProps, DimensionProps, ColorProps, InteractionProps, PointerProps, AccessibilityProps {
    children?: ReactNode;
}
