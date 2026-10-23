import { default as React, TableHTMLAttributes, ReactNode } from 'react';
export interface TableColumn<T = any> {
    key: string;
    header: ReactNode;
    render?: (row: T, index: number) => ReactNode;
    align?: "left" | "center" | "right";
    width?: string | number;
}
export interface TableProps<T = any> extends Omit<TableHTMLAttributes<HTMLTableElement>, "children"> {
    striped?: boolean;
    hoverable?: boolean;
    compact?: boolean;
    columns?: TableColumn<T>[];
    data?: T[];
    emptyText?: ReactNode;
    children?: ReactNode;
}
export declare const Table: React.ForwardRefExoticComponent<TableProps<any> & React.RefAttributes<HTMLTableElement>>;
