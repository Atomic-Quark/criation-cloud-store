import { ReactElement } from 'react';
/**
 * Parses full multi-line Criation DSL text:
 * Supports:
 * - Button = "Go_to_cart", "10px 2px", "ID", "Auth", "/cart", "red", "position", "pointer"
 * - Input = "Enter_your_email", "320px", "email_box", "email", "Email Address", "blue"
 * - Heading = "Welcome_to_Store", 1, "title_1", "gradient", "center"
 * - Text = "Fast_delivery_worldwide", "md", "desc_1", "secondary"
 * - Badge = "SALE_50%", "sm", "badge_1", "danger"
 * - Card = "Order_Confirmed_Successfully", "320px", "card_1", "glass"
 * - Link = "Terms_and_Conditions", "/terms", "link_1", "brand"
 * - Image = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500", "280px 180px", "hero_img", "Product", "lg"
 */
export declare function parseCriationDSL(dsl: string): ReactElement[];
/**
 * Standard alias for parseCriationDSL
 */
export declare const parseDSL: typeof parseCriationDSL;
/**
 * Explicit opt-in natural language description parser (PR 15)
 * Wraps parsed DSL elements into a clean container
 */
export declare function describe(syntax: string): ReactElement;
/**
 * Direct shorthand helper function for DSL string expressions
 */
export declare const dsl: typeof describe;
/**
 * React Component to render Criation DSL directly in any JSX/TSX file
 * <Criation>
 *   {`Button = "Go_to_cart", "10px 2px", "ID", "Auth", "path_direction", "red", "position", "pointer"`}
 * </Criation>
 */
export declare function Criation({ children, code }: {
    children?: string;
    code?: string;
}): ReactElement;
