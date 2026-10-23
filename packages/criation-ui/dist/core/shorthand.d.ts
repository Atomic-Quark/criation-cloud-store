import { default as React, ReactElement, ReactNode } from 'react';
export declare function isColorValue(val: any): boolean;
export declare function isPathValue(val: any): boolean;
export declare function isBoxSizeValue(val: any): boolean;
export declare function isAuthValue(val: any): boolean;
export declare function isPositionValue(val: any): boolean;
export declare function isPointerValue(val: any): boolean;
/**
 * Natural English Path Extractor:
 * Parses "go to /cart", "link to /shop", "navigate to https://...", "to /cart", "path /about", "/cart"
 */
export declare function extractEnglishPath(val: any): string | undefined;
/**
 * Natural English Color Extractor:
 * Parses "colored red", "in blue", "color green", "bg amber", "with gradient", "outline", "red"
 */
export declare function extractEnglishColor(val: any): string | undefined;
/**
 * Natural English Authentication Extractor:
 * Parses "auth required", "login needed", "protected", "member only", "requires login", "auth"
 */
export declare function extractEnglishAuth(val: any): string | undefined;
/**
 * Natural English Size Extractor:
 * Parses "size 10px 2px", "width 300px", "padding 12px 24px", "small", "large", "extra large"
 */
export declare function extractEnglishSize(val: any): string | undefined;
/**
 * Natural English Alignment Extractor:
 * Parses "centered", "aligned center", "align right", "center", "left", "right"
 */
export declare function extractEnglishAlign(val: any): "left" | "center" | "right" | "justify" | undefined;
/**
 * Natural English Heading Level Extractor:
 * Parses "level 1", "heading 2", "h1", "h3", 1, 2
 */
export declare function extractEnglishLevel(val: any): 1 | 2 | 3 | 4 | 5 | 6 | undefined;
/**
 * Natural English External Link Target Extractor:
 * Parses "new tab", "open in new tab", "external", "blank"
 */
export declare function extractEnglishExternal(val: any): boolean;
/**
 * Natural English Input Type Extractor:
 * Parses "type email", "as password", "email", "password", "number", "search"
 */
export declare function extractEnglishInputType(val: any): string | undefined;
/**
 * Attaches chainable helper methods (.red(), .link(), etc.) to a ReactElement
 * while preserving all native React element properties and symbols so it renders natively in JSX.
 */
export declare function createChainableProxy<C extends object>(element: ReactElement, chainMethods: C): ReactElement & C;
export interface ButtonShorthandConfig {
    className?: string;
    label?: string;
    boxSize?: string;
    id?: string;
    auth?: string;
    pathDirection?: string;
    color?: string;
    position?: string;
    pointer?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface ButtonChainable {
    build(): ReactElement;
    variant(v: string): ReactElement & ButtonChainable;
    disabled(d?: boolean): ReactElement & ButtonChainable;
    loading(l?: boolean): ReactElement & ButtonChainable;
    red(): ReactElement & ButtonChainable;
    blue(): ReactElement & ButtonChainable;
    green(): ReactElement & ButtonChainable;
    amber(): ReactElement & ButtonChainable;
    yellow(): ReactElement & ButtonChainable;
    purple(): ReactElement & ButtonChainable;
    pink(): ReactElement & ButtonChainable;
    cyan(): ReactElement & ButtonChainable;
    dark(): ReactElement & ButtonChainable;
    white(): ReactElement & ButtonChainable;
    outline(): ReactElement & ButtonChainable;
    gradient(): ReactElement & ButtonChainable;
    color(c: string): ReactElement & ButtonChainable;
    link(path: string): ReactElement & ButtonChainable;
    to(path: string): ReactElement & ButtonChainable;
    back(): ReactElement & ButtonChainable;
    forward(): ReactElement & ButtonChainable;
    onClick(handler: (e: React.MouseEvent<HTMLButtonElement>) => void): ReactElement & ButtonChainable;
    auth(role?: string): ReactElement & ButtonChainable;
    loginRequired(): ReactElement & ButtonChainable;
    size(s: string): ReactElement & ButtonChainable;
    small(): ReactElement & ButtonChainable;
    large(): ReactElement & ButtonChainable;
    fullWidth(): ReactElement & ButtonChainable;
    position(pos: string): ReactElement & ButtonChainable;
    pointer(cursor: string): ReactElement & ButtonChainable;
    id(idStr: string): ReactElement & ButtonChainable;
    className(cls: string): ReactElement & ButtonChainable;
}
export declare function attachButtonChaining(element: ReactElement, config: ButtonShorthandConfig): ReactElement & ButtonChainable;
export declare function parseButtonShorthand(args: any[]): ButtonShorthandConfig;
export declare function createButtonFromShorthand(config: ButtonShorthandConfig): ReactElement & ButtonChainable;
export declare function createButtonDOMElement(config: ButtonShorthandConfig): HTMLButtonElement;
export interface InputShorthandConfig {
    placeholder?: string;
    boxSize?: string;
    id?: string;
    type?: string;
    label?: string;
    color?: string;
    position?: string;
    pointer?: string;
}
export interface InputChainable {
    build(): ReactElement;
    email(): ReactElement & InputChainable;
    password(): ReactElement & InputChainable;
    number(): ReactElement & InputChainable;
    search(): ReactElement & InputChainable;
    text(): ReactElement & InputChainable;
    type(t: string): ReactElement & InputChainable;
    width(w: string): ReactElement & InputChainable;
    size(s: string): ReactElement & InputChainable;
    label(lbl: string): ReactElement & InputChainable;
    id(idStr: string): ReactElement & InputChainable;
}
export declare function attachInputChaining(element: ReactElement, config: InputShorthandConfig): ReactElement & InputChainable;
export declare function parseInputShorthand(args: any[]): InputShorthandConfig;
export declare function createInputFromShorthand(config: InputShorthandConfig): ReactElement & InputChainable;
export interface HeadingShorthandConfig {
    text: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: string;
    id?: string;
    color?: string;
    align?: string;
    position?: string;
}
export interface HeadingChainable {
    build(): ReactElement;
    level(lvl: 1 | 2 | 3 | 4 | 5 | 6): ReactElement & HeadingChainable;
    h1(): ReactElement & HeadingChainable;
    h2(): ReactElement & HeadingChainable;
    h3(): ReactElement & HeadingChainable;
    h4(): ReactElement & HeadingChainable;
    h5(): ReactElement & HeadingChainable;
    h6(): ReactElement & HeadingChainable;
    center(): ReactElement & HeadingChainable;
    left(): ReactElement & HeadingChainable;
    right(): ReactElement & HeadingChainable;
    gradient(): ReactElement & HeadingChainable;
    color(c: string): ReactElement & HeadingChainable;
    red(): ReactElement & HeadingChainable;
    blue(): ReactElement & HeadingChainable;
    green(): ReactElement & HeadingChainable;
    size(s: string): ReactElement & HeadingChainable;
    small(): ReactElement & HeadingChainable;
    large(): ReactElement & HeadingChainable;
    extraLarge(): ReactElement & HeadingChainable;
    id(idStr: string): ReactElement & HeadingChainable;
}
export declare function attachHeadingChaining(element: ReactElement, config: HeadingShorthandConfig): ReactElement & HeadingChainable;
export declare function parseHeadingShorthand(args: any[]): HeadingShorthandConfig;
export declare function createHeadingFromShorthand(config: HeadingShorthandConfig): ReactElement & HeadingChainable;
export interface TextShorthandConfig {
    content: string;
    size?: string;
    id?: string;
    color?: string;
    align?: string;
    position?: string;
}
export interface TextChainable {
    build(): ReactElement;
    center(): ReactElement & TextChainable;
    left(): ReactElement & TextChainable;
    right(): ReactElement & TextChainable;
    muted(): ReactElement & TextChainable;
    secondary(): ReactElement & TextChainable;
    primary(): ReactElement & TextChainable;
    brand(): ReactElement & TextChainable;
    color(c: string): ReactElement & TextChainable;
    small(): ReactElement & TextChainable;
    large(): ReactElement & TextChainable;
    size(s: string): ReactElement & TextChainable;
    bold(): ReactElement & TextChainable;
    medium(): ReactElement & TextChainable;
    id(idStr: string): ReactElement & TextChainable;
}
export declare function attachTextChaining(element: ReactElement, config: TextShorthandConfig): ReactElement & TextChainable;
export declare function parseTextShorthand(args: any[]): TextShorthandConfig;
export declare function createTextFromShorthand(config: TextShorthandConfig): ReactElement & TextChainable;
export interface CardShorthandConfig {
    content?: ReactNode;
    boxSize?: string;
    id?: string;
    variant?: "glass" | "outline" | "elevated" | "subtle";
    color?: string;
    position?: string;
    pointer?: string;
}
export interface CardChainable {
    build(): ReactElement;
    glass(): ReactElement & CardChainable;
    elevated(): ReactElement & CardChainable;
    outline(): ReactElement & CardChainable;
    subtle(): ReactElement & CardChainable;
    width(w: string): ReactElement & CardChainable;
    size(s: string): ReactElement & CardChainable;
    padding(p: string): ReactElement & CardChainable;
    id(idStr: string): ReactElement & CardChainable;
}
export declare function attachCardChaining(element: ReactElement, config: CardShorthandConfig): ReactElement & CardChainable;
export declare function parseCardShorthand(args: any[]): CardShorthandConfig;
export declare function createCardFromShorthand(config: CardShorthandConfig): ReactElement & CardChainable;
export interface BadgeShorthandConfig {
    label: string;
    size?: string;
    id?: string;
    color?: string;
    position?: string;
}
export interface BadgeChainable {
    build(): ReactElement;
    red(): ReactElement & BadgeChainable;
    green(): ReactElement & BadgeChainable;
    blue(): ReactElement & BadgeChainable;
    amber(): ReactElement & BadgeChainable;
    purple(): ReactElement & BadgeChainable;
    color(c: string): ReactElement & BadgeChainable;
    small(): ReactElement & BadgeChainable;
    large(): ReactElement & BadgeChainable;
    size(s: string): ReactElement & BadgeChainable;
    id(idStr: string): ReactElement & BadgeChainable;
}
export declare function attachBadgeChaining(element: ReactElement, config: BadgeShorthandConfig): ReactElement & BadgeChainable;
export declare function parseBadgeShorthand(args: any[]): BadgeShorthandConfig;
export declare function createBadgeFromShorthand(config: BadgeShorthandConfig): ReactElement & BadgeChainable;
export interface LinkShorthandConfig {
    label: string;
    href: string;
    id?: string;
    color?: string;
    isExternal?: boolean;
    position?: string;
}
export interface LinkChainable {
    build(): ReactElement;
    to(path: string): ReactElement & LinkChainable;
    link(path: string): ReactElement & LinkChainable;
    external(): ReactElement & LinkChainable;
    newTab(): ReactElement & LinkChainable;
    color(c: string): ReactElement & LinkChainable;
    id(idStr: string): ReactElement & LinkChainable;
}
export declare function attachLinkChaining(element: ReactElement, config: LinkShorthandConfig): ReactElement & LinkChainable;
export declare function parseLinkShorthand(args: any[]): LinkShorthandConfig;
export declare function createLinkFromShorthand(config: LinkShorthandConfig): ReactElement & LinkChainable;
export interface ImageShorthandConfig {
    src: string;
    boxSize?: string;
    id?: string;
    alt?: string;
    rounded?: string;
    position?: string;
}
export interface ImageChainable {
    build(): ReactElement;
    size(w: string, h?: string): ReactElement & ImageChainable;
    circle(): ReactElement & ImageChainable;
    rounded(r?: string): ReactElement & ImageChainable;
    alt(a: string): ReactElement & ImageChainable;
    id(idStr: string): ReactElement & ImageChainable;
}
export declare function attachImageChaining(element: ReactElement, config: ImageShorthandConfig): ReactElement & ImageChainable;
export declare function parseImageShorthand(args: any[]): ImageShorthandConfig;
export declare function createImageFromShorthand(config: ImageShorthandConfig): ReactElement & ImageChainable;
export interface PageOptions {
    title?: string;
    maxWidth?: string;
    gap?: string;
}
export declare function Page(titleOrOptions: string | PageOptions | ReactNode[], ...elements: ReactNode[]): ReactElement;
export declare const SimplePage: typeof Page;
