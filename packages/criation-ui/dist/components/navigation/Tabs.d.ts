import { default as React, ReactNode } from 'react';
export interface TabItem {
    id: string;
    label: ReactNode;
    icon?: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}
export interface TabsProps {
    items: TabItem[];
    defaultActiveId?: string;
    activeId?: string;
    onChange?: (id: string) => void;
    variant?: "underline" | "pills" | "enclosed";
    className?: string;
}
export declare function Tabs({ items, defaultActiveId, activeId: controlledActiveId, onChange, variant, className, }: TabsProps): React.JSX.Element;
