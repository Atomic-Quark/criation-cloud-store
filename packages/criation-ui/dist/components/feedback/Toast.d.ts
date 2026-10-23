import { default as React, ReactNode } from 'react';
export type ToastVariant = "info" | "success" | "warning" | "error";
export interface ToastItem {
    id: string;
    title?: string;
    message: string;
    variant?: ToastVariant;
    duration?: number;
}
interface ToastContextValue {
    toast: (options: Omit<ToastItem, "id">) => void;
    removeToast: (id: string) => void;
    success: (message: string, title?: string) => void;
    error: (message: string, title?: string) => void;
    info: (message: string, title?: string) => void;
    warning: (message: string, title?: string) => void;
}
export declare function ToastProvider({ children }: {
    children: ReactNode;
}): React.JSX.Element;
export declare function useToast(): ToastContextValue;
export {};
