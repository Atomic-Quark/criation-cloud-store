import { default as React, Component, ErrorInfo, ReactNode } from 'react';
export interface ErrorBoundaryProps {
    children?: ReactNode;
    fallback?: ReactNode | ((props: {
        error: Error;
        reset: () => void;
    }) => ReactNode);
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
    onReset?: () => void;
    className?: string;
    style?: React.CSSProperties;
}
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    reset: () => void;
    render(): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
}
export {};
