import { default as React, HTMLAttributes, ReactNode, ReactElement } from 'react';
import { FlexAlign, FlexJustify } from '../../core/types';
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
    direction?: "row" | "column";
    spacing?: string | number;
    align?: FlexAlign;
    justify?: FlexJustify;
    wrap?: boolean;
}
export declare const BaseStack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
export interface StackChainable {
    build(): ReactElement;
    row(): ReactElement & StackChainable;
    column(): ReactElement & StackChainable;
    gap(spacing: string | number): ReactElement & StackChainable;
    spacing(s: string | number): ReactElement & StackChainable;
    center(): ReactElement & StackChainable;
    align(a: FlexAlign): ReactElement & StackChainable;
    justify(j: FlexJustify): ReactElement & StackChainable;
    wrap(): ReactElement & StackChainable;
}
/**
 * Universal Stack:
 * 1. English Chaining:
 *    Stack(Heading("Welcome"), Button("Click")).row().gap("1.5rem")
 * 2. Natural Function Call:
 *    Stack([ Heading("Welcome"), Text("Hello") ])
 * 3. JSX Component:
 *    <Stack direction="row" spacing="1rem">...</Stack>
 */
export declare function Stack(props: StackProps): ReactElement;
export declare function Stack(...children: ReactNode[]): ReactElement & StackChainable;
export declare function Stack(direction: "row" | "column", ...children: ReactNode[]): ReactElement & StackChainable;
export declare function Stack(direction: "row" | "column", children: ReactNode[]): ReactElement & StackChainable;
export declare namespace Stack {
    var displayName: string;
}
