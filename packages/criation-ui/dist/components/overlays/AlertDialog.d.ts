import { default as React, ReactElement, ReactNode } from 'react';
export interface AlertDialogProps {
    isOpen: boolean;
    title: string;
    description?: ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    variant?: "danger" | "warning" | "info";
    className?: string;
    style?: React.CSSProperties;
}
export declare const BaseAlertDialog: React.ForwardRefExoticComponent<AlertDialogProps & React.RefAttributes<HTMLDivElement>>;
export interface AlertDialogChainable {
    danger(): ReactElement & AlertDialogChainable;
    warning(): ReactElement & AlertDialogChainable;
    info(): ReactElement & AlertDialogChainable;
    confirmText(txt: string): ReactElement & AlertDialogChainable;
    cancelText(txt: string): ReactElement & AlertDialogChainable;
    onConfirm(fn: () => void): ReactElement & AlertDialogChainable;
    onCancel(fn: () => void): ReactElement & AlertDialogChainable;
}
export declare function AlertDialog(props: AlertDialogProps): ReactElement;
export declare function AlertDialog(title: string, description?: ReactNode, onConfirm?: () => void, onCancel?: () => void): ReactElement & AlertDialogChainable;
export declare namespace AlertDialog {
    var displayName: string;
}
