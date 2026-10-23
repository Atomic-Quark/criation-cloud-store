/**
 * Universal component size variants
 */
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl";
/**
 * Universal component color variants
 */
export type ComponentVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "warning" | "info";
/**
 * Universal theme mode
 */
export type ThemeMode = "light" | "dark" | "system";
/**
 * Semantic status types
 */
export type StatusType = "idle" | "loading" | "success" | "error" | "warning";
/**
 * Element pointer/cursor behaviors
 */
export type CursorType = "default" | "pointer" | "not-allowed" | "wait" | "text" | "move" | "grab" | "grabbing";
/**
 * CSS positioning options
 */
export type PositionType = "static" | "relative" | "absolute" | "fixed" | "sticky";
/**
 * Flex and Grid alignment helpers
 */
export type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type FlexJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
/**
 * Responsive breakpoint keys
 */
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";
/**
 * Responsive prop value mapping
 */
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;
