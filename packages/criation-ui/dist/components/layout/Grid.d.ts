import { default as React, HTMLAttributes, ReactNode, ReactElement } from 'react';
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    columns?: number | string;
    rows?: number | string;
    minChildWidth?: string;
    gap?: string | number;
    rowGap?: string | number;
    columnGap?: string | number;
}
export declare const BaseGrid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
export interface GridChainable {
    build(): ReactElement;
    columns(n: number | string): ReactElement & GridChainable;
    gap(g: string | number): ReactElement & GridChainable;
    autoFit(minWidth: string): ReactElement & GridChainable;
}
/**
 * Universal Grid:
 * 1. English Chaining:
 *    Grid(3, [ Card(1), Card(2), Card(3) ]).gap("1.5rem")
 * 2. Natural Function Call:
 *    Grid(2, Card("A"), Card("B"))
 * 3. JSX Component:
 *    <Grid columns={3}>...</Grid>
 */
export declare function Grid(props: GridProps): ReactElement;
export declare function Grid(columns: number | string, children: ReactNode[]): ReactElement & GridChainable;
export declare function Grid(columns: number | string, ...children: ReactNode[]): ReactElement & GridChainable;
export declare function Grid(children: ReactNode[]): ReactElement & GridChainable;
export declare function Grid(...children: ReactNode[]): ReactElement & GridChainable;
export declare namespace Grid {
    var displayName: string;
}
