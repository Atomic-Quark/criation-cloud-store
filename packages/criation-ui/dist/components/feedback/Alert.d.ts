import { default as React, ReactNode, ReactElement } from 'react';
export interface AlertProps {
    variant?: "info" | "success" | "warning" | "danger";
    title?: ReactNode;
    children?: ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    icon?: ReactNode;
    className?: string;
}
export declare function BaseAlert({ variant, title, children, dismissible, onDismiss, icon, className, }: AlertProps): React.JSX.Element | null;
export declare namespace BaseAlert {
    var displayName: string;
}
export interface AlertChainable {
    success(): ReactElement & AlertChainable;
    warning(): ReactElement & AlertChainable;
    danger(): ReactElement & AlertChainable;
    info(): ReactElement & AlertChainable;
    title(t: ReactNode): ReactElement & AlertChainable;
    dismissible(): ReactElement & AlertChainable;
}
/**
 * Universal Alert:
 * 1. English Chaining:
 *    Alert("Payment completed successfully!").success().title("Order Placed")
 * 2. Simple Function:
 *    Alert("Item deleted", "danger")
 * 3. JSX Component:
 *    <Alert variant="success">Payment completed</Alert>
 */
export declare function Alert(props: AlertProps): ReactElement;
export declare function Alert(message: ReactNode, variant?: "info" | "success" | "warning" | "danger" | string, title?: ReactNode): ReactElement & AlertChainable;
export declare namespace Alert {
    var displayName: string;
}
