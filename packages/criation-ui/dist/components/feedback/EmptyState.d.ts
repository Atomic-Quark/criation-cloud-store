import { default as React, ReactNode } from 'react';
export interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
    className?: string;
}
export declare function EmptyState({ icon, title, description, action, className, }: EmptyStateProps): React.JSX.Element;
