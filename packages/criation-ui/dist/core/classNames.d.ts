type ClassValue = string | number | boolean | undefined | null | {
    [key: string]: boolean | undefined | null;
} | ClassValue[];
/**
 * Modern lightweight class name builder
 */
export declare function classNames(...classes: ClassValue[]): string;
/**
 * Shorthand helper for creating prefixed component classes
 * e.g. cr("button", "primary", { loading: true }) => "cr-button cr-button--primary is-loading"
 */
export declare function cr(component: string, variantOrModifier?: string, modifiers?: Record<string, boolean | undefined | null>): string;
export declare const cn: typeof classNames;
export {};
