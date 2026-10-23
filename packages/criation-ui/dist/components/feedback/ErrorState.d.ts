import { default as React, ReactNode } from 'react';
export interface ErrorStateProps {
    title?: string;
    message?: string;
    onRetry?: () => void;
    retryLabel?: string;
    icon?: ReactNode;
    className?: string;
}
export declare function ErrorState({ title, message, onRetry, retryLabel, icon, className, }: ErrorStateProps): React.JSX.Element;
