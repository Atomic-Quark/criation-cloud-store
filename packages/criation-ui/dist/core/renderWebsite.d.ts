import { default as React, ComponentType, ReactElement, ReactNode } from 'react';
export interface WebsiteLayoutOptions {
    maxWidth?: string | number;
    padding?: string | number;
    gap?: string | number;
    header?: ReactNode;
    footer?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface RenderWebsiteOptions extends WebsiteLayoutOptions {
    rootId?: string;
    theme?: "dark" | "light" | "system";
    title?: string;
}
/**
 * Ultra-simple 1-line website mounter.
 * Automatically wraps your app in ThemeProvider, ToastProvider, and mounts to DOM.
 *
 * Usage:
 * 1. Pass a Component:
 *    renderWebsite(App);
 *
 * 2. Pass an Array of 1-line components:
 *    renderWebsite([
 *      Heading("My Website", 1, "gradient"),
 *      Text("Built in 3 lines without HTML tags."),
 *      Button("Go to Cart", "/cart", "red")
 *    ]);
 */
export declare function renderWebsite(AppOrComponents: ComponentType<any> | ReactElement | ReactNode[], options?: RenderWebsiteOptions | string): void;
export declare const createWebsite: typeof renderWebsite;
export declare const mountWebsite: typeof renderWebsite;
/**
 * Website - The simplest way to build a complete, interactive website in plain English style.
 *
 * Examples:
 * 1. Title + Array:
 *    Website("My Store", [
 *      Heading("Welcome").gradient().center(),
 *      Text("Best goods online").muted(),
 *      Button("Shop Now").green().link("/shop")
 *    ]);
 *
 * 2. Title + Elements:
 *    Website("My Store",
 *      Heading("Welcome").gradient(),
 *      Button("Shop Now").green().link("/shop")
 *    );
 *
 * 3. Component:
 *    Website(ShowcaseApp);
 */
export declare function Website(titleOrContent: string | ComponentType<any> | ReactElement | ReactNode[], ...rest: ReactNode[]): void;
export declare namespace Website {
    var layout: typeof createWebsiteLayout;
}
export declare function createWebsiteLayout(items: ReactNode[], options?: WebsiteLayoutOptions): ReactElement;
