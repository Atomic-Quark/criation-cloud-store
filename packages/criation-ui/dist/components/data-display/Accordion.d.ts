import { default as React, ReactNode } from 'react';
export interface AccordionItem {
    id: string;
    title: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}
export interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    defaultExpanded?: string[];
    expandedIds?: string[];
    onChange?: (expandedIds: string[]) => void;
    className?: string;
}
export declare function Accordion({ items, allowMultiple, defaultExpanded, expandedIds: controlledExpandedIds, onChange, className, }: AccordionProps): React.JSX.Element;
