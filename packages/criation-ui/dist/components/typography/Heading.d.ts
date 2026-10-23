import { default as React, HTMLAttributes, ReactElement } from 'react';
import { HeadingShorthandConfig, HeadingChainable } from '../../core/shorthand';
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    weight?: "semibold" | "bold" | "extrabold";
    gradient?: boolean;
}
export declare const BaseHeading: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
/**
 * Universal Heading:
 * 1. English Chaining:
 *    Heading("Welcome to Store").gradient().center().level(1)
 * 2. Natural English phrase:
 *    Heading("Welcome to My Store, level 1, centered, with gradient")
 * 3. JSX Component:
 *    <Heading level={1}>Welcome</Heading>
 */
export declare function Heading(props: HeadingProps): ReactElement;
export declare function Heading(text?: string, levelOrSize?: number | string, id?: string, color?: string, align?: string, position?: string): ReactElement & HeadingChainable;
export declare function Heading(strings: TemplateStringsArray, ...values: any[]): ReactElement & HeadingChainable;
export declare namespace Heading {
    var displayName: string;
    var create: (config: HeadingShorthandConfig) => React.ReactElement<any, string | React.JSXElementConstructor<any>> & HeadingChainable;
}
