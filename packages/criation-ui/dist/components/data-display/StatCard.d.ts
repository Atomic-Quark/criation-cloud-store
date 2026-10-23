import { default as React, ReactNode } from 'react';
export interface StatCardProps {
    title: string;
    value: string | number;
    change?: number;
    changePeriod?: string;
    icon?: ReactNode;
    variant?: "outline" | "glass" | "elevated";
    className?: string;
}
export declare function StatCard({ title, value, change, changePeriod, icon, variant, className, }: StatCardProps): React.JSX.Element;
