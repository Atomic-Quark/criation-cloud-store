import { default as React, HTMLAttributes, ReactElement, ReactNode } from 'react';
export interface CollapsibleProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title?: ReactNode;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onToggle?: (open: boolean) => void;
    children?: ReactNode;
}
export declare const BaseCollapsible: React.ForwardRefExoticComponent<CollapsibleProps & React.RefAttributes<HTMLDivElement>>;
export interface CollapsibleChainable {
    open(o?: boolean): ReactElement & CollapsibleChainable;
}
export declare function Collapsible(props: CollapsibleProps): ReactElement;
export declare function Collapsible(title: ReactNode, content?: ReactNode): ReactElement & CollapsibleChainable;
export declare namespace Collapsible {
    var displayName: string;
}
