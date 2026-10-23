import { default as React, AnchorHTMLAttributes, ReactElement, Ref } from 'react';
import { LinkShorthandConfig, LinkChainable } from '../../core/shorthand';
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    isExternal?: boolean;
    underline?: "always" | "hover" | "none";
    color?: "brand" | "primary" | "secondary" | "muted";
    ref?: Ref<HTMLAnchorElement>;
}
export declare const BaseLink: React.ForwardRefExoticComponent<Omit<LinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
/**
 * Universal Link:
 * 1. English Chaining:
 *    Link("Documentation").to("/docs").external()
 * 2. Natural English phrase:
 *    Link("Documentation, to /docs, open in new tab")
 * 3. JSX Component:
 *    <Link href="/about">About Us</Link>
 */
export declare function Link(props: LinkProps): ReactElement;
export declare function Link(label?: string, href?: string, id?: string, color?: string, isExternal?: boolean, position?: string): ReactElement & LinkChainable;
export declare function Link(strings: TemplateStringsArray, ...values: any[]): ReactElement & LinkChainable;
export declare namespace Link {
    var displayName: string;
    var create: (config: LinkShorthandConfig) => React.ReactElement<any, string | React.JSXElementConstructor<any>> & LinkChainable;
}
