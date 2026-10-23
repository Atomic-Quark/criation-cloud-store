import { default as React, HTMLAttributes, ReactNode, ReactElement } from 'react';
import { ComponentSize } from '../../core/types';
import { CardShorthandConfig, CardChainable } from '../../core/shorthand';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "elevated" | "outline" | "glass" | "subtle";
    padding?: ComponentSize | "none";
    interactive?: boolean;
    header?: ReactNode;
    footer?: ReactNode;
}
export declare const BaseCard: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Universal Card:
 * 1. English Chaining:
 *    Card("Pro Plan").glass().width("350px")
 * 2. Natural English phrase:
 *    Card("Pro Plan, glass, width 350px")
 * 3. JSX Component:
 *    <Card variant="glass">...</Card>
 */
export declare function Card(props: CardProps): ReactElement;
export declare function Card(content?: ReactNode, boxSize?: string, id?: string, variant?: "glass" | "outline" | "elevated" | "subtle", color?: string, position?: string, pointer?: string): ReactElement & CardChainable;
export declare namespace Card {
    var displayName: string;
    var create: (config: CardShorthandConfig) => React.ReactElement<any, string | React.JSXElementConstructor<any>> & CardChainable;
}
