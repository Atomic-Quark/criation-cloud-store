import { default as React, HTMLAttributes, ReactElement } from 'react';
import { ComponentSize, ComponentVariant } from '../../core/types';
import { BadgeShorthandConfig, BadgeChainable } from '../../core/shorthand';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: ComponentVariant;
    size?: ComponentSize;
    pill?: boolean;
    dot?: boolean;
}
export declare const BaseBadge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
/**
 * Universal Badge:
 * 1. English Chaining:
 *    Badge("NEW").green().small()
 * 2. Natural English phrase:
 *    Badge("NEW, in green, small")
 * 3. JSX Component:
 *    <Badge variant="success">New</Badge>
 */
export declare function Badge(props: BadgeProps): ReactElement;
export declare function Badge(label?: string, size?: string, id?: string, color?: string, position?: string): ReactElement & BadgeChainable;
export declare function Badge(strings: TemplateStringsArray, ...values: any[]): ReactElement & BadgeChainable;
export declare namespace Badge {
    var displayName: string;
    var create: (config: BadgeShorthandConfig) => React.ReactElement<any, string | React.JSXElementConstructor<any>> & BadgeChainable;
}
