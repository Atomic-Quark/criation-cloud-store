import { ReactElement, ReactNode } from 'react';
import { ButtonChainable, ButtonShorthandConfig, InputChainable, InputShorthandConfig, HeadingChainable, HeadingShorthandConfig, TextChainable, TextShorthandConfig, CardChainable, CardShorthandConfig, BadgeChainable, BadgeShorthandConfig, LinkChainable, LinkShorthandConfig, ImageChainable, ImageShorthandConfig } from './shorthand';
import { StackChainable } from '../components/layout/Stack';
import { GridChainable } from '../components/layout/Grid';
import { NavbarChainable } from '../components/navigation/Navbar';
import { WebsiteLayoutOptions } from './renderWebsite';
export interface UIBuilderOptions {
    id?: string;
    className?: string;
    size?: string;
    color?: string;
    variant?: string;
    href?: string;
    to?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: (e: any) => void;
    [key: string]: any;
}
/**
 * Criation UI Fluent Builder (`ui`)
 *
 * Dedicated builder namespace that separates pure JSX component usage (<Button />)
 * from fluent method chaining and rapid layout construction without manually
 * invoking React component functions.
 *
 * @example
 * ```tsx
 * // 1. Fluent Builder with .build()
 * const checkoutBtn = ui.button("Checkout")
 *   .variant("success")
 *   .size("lg")
 *   .to("/checkout")
 *   .build();
 *
 * // 2. Composing layouts
 * const page = ui.stack(
 *   ui.heading("Storefront").h1().gradient(),
 *   ui.text("Explore our latest products").muted()
 * ).row().gap("2rem").build();
 * ```
 */
export declare const ui: {
    /**
     * Fluent Button builder
     */
    button(labelOrConfig?: string | ButtonShorthandConfig, options?: UIBuilderOptions): ReactElement & ButtonChainable;
    /**
     * Fluent Heading builder
     */
    heading(titleOrConfig?: string | HeadingShorthandConfig, options?: UIBuilderOptions): ReactElement & HeadingChainable;
    /**
     * Fluent Text builder
     */
    text(contentOrConfig?: string | TextShorthandConfig, options?: UIBuilderOptions): ReactElement & TextChainable;
    /**
     * Fluent Input builder
     */
    input(placeholderOrConfig?: string | InputShorthandConfig, options?: UIBuilderOptions): ReactElement & InputChainable;
    /**
     * Fluent Card builder
     */
    card(contentOrConfig?: ReactNode | CardShorthandConfig, options?: UIBuilderOptions): ReactElement & CardChainable;
    /**
     * Fluent Badge builder
     */
    badge(labelOrConfig?: string | BadgeShorthandConfig, options?: UIBuilderOptions): ReactElement & BadgeChainable;
    /**
     * Fluent Link builder
     */
    link(textOrConfig?: string | LinkShorthandConfig, href?: string, options?: UIBuilderOptions): ReactElement & LinkChainable;
    /**
     * Fluent Image builder
     */
    image(srcOrConfig: string | ImageShorthandConfig, alt?: string, options?: UIBuilderOptions): ReactElement & ImageChainable;
    /**
     * Fluent Stack builder
     */
    stack(...args: any[]): ReactElement & StackChainable;
    /**
     * Fluent Grid builder
     */
    grid(...args: any[]): ReactElement & GridChainable;
    /**
     * Fluent Navbar builder (supports positional arguments or typed options object)
     */
    navbar(brandOrOptions: ReactNode | {
        brand: ReactNode;
        links?: (string | ReactNode)[] | ReactNode;
        actions?: ReactNode;
        sticky?: boolean;
        glass?: boolean;
    }, links?: (string | ReactNode)[] | ReactNode, actions?: ReactNode): ReactElement & NavbarChainable;
    /**
     * Fluent Footer builder (supports positional arguments or typed options object)
     */
    footer(copyrightOrOptions?: ReactNode | {
        copyright?: ReactNode;
        links?: (string | ReactNode)[];
        brand?: ReactNode;
    }, links?: (string | ReactNode)[]): ReactElement;
    /**
     * Full Page / Website container builder
     */
    website(sections: ReactNode[], options?: WebsiteLayoutOptions): ReactElement;
};
