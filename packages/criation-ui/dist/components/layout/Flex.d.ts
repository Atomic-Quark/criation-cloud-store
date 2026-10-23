import { default as React, HTMLAttributes, ReactNode, ReactElement } from 'react';
import { FlexAlign, FlexJustify, FlexDirection } from '../../core/types';
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    direction?: FlexDirection;
    align?: FlexAlign;
    justify?: FlexJustify;
    wrap?: boolean | "wrap" | "nowrap" | "wrap-reverse";
    gap?: string | number;
    inline?: boolean;
}
export declare const BaseFlex: React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>>;
export interface FlexChainable {
    center(): ReactElement & FlexChainable;
    between(): ReactElement & FlexChainable;
    around(): ReactElement & FlexChainable;
    gap(g: string | number): ReactElement & FlexChainable;
    column(): ReactElement & FlexChainable;
    row(): ReactElement & FlexChainable;
    wrap(): ReactElement & FlexChainable;
}
/**
 * Universal Flex:
 * 1. English Chaining:
 *    Flex(Button("A"), Button("B")).between().gap("1rem")
 * 2. Natural Function Call:
 *    Flex([ Button("A"), Button("B") ])
 * 3. JSX Component:
 *    <Flex justify="between">...</Flex>
 */
export declare function Flex(props: FlexProps): ReactElement;
export declare function Flex(...children: ReactNode[]): ReactElement & FlexChainable;
export declare function Flex(children: ReactNode[]): ReactElement & FlexChainable;
export declare namespace Flex {
    var displayName: string;
}
