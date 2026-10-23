import { default as React } from 'react';
export declare const FOCUSABLE_ELEMENTS: string;
export declare function getFocusableElements(container: HTMLElement): HTMLElement[];
export declare function trapFocus(container: HTMLElement, event: KeyboardEvent): void;
/**
 * React hook to trap focus within a container element when active
 */
export declare function useFocusTrap(containerRef: React.RefObject<HTMLElement | null>, isActive?: boolean): void;
