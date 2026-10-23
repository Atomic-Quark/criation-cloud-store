import { default as React, HTMLAttributes, ReactElement } from 'react';
import { ComponentSize } from '../../core/types';
import { TextShorthandConfig, TextChainable } from '../../core/shorthand';
export interface TextProps extends HTMLAttributes<HTMLElement> {
    size?: ComponentSize;
    weight?: "normal" | "medium" | "semibold" | "bold";
    color?: "primary" | "secondary" | "muted" | "inverse" | "brand";
    align?: "left" | "center" | "right" | "justify";
    truncate?: boolean;
    as?: "p" | "span" | "div" | "label";
}
export declare const BaseText: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLElement>>;
/**
 * Universal Text:
 * 1. English Chaining:
 *    Text("Criation UI is awesome").muted().center().small()
 * 2. Natural English phrase:
 *    Text("Fast shipping worldwide, centered, muted, small")
 * 3. JSX Component:
 *    <Text>Hello</Text>
 */
export declare function Text(props: TextProps): ReactElement;
export declare function Text(content?: string, size?: string, id?: string, color?: string, align?: string, position?: string): ReactElement & TextChainable;
export declare function Text(strings: TemplateStringsArray, ...values: any[]): ReactElement & TextChainable;
export declare namespace Text {
    var displayName: string;
    var create: (config: TextShorthandConfig) => React.ReactElement<any, string | React.JSXElementConstructor<any>> & TextChainable;
}
