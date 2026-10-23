import { default as React, ReactNode, ReactElement } from 'react';
export interface NavbarProps {
    brand?: ReactNode;
    links?: ReactNode;
    actions?: ReactNode;
    sticky?: boolean;
    glass?: boolean;
    className?: string;
}
export declare function BaseNavbar({ brand, links, actions, sticky, glass, className, }: NavbarProps): React.JSX.Element;
export declare namespace BaseNavbar {
    var displayName: string;
}
export interface NavbarChainable {
    build(): ReactElement;
    sticky(val?: boolean): ReactElement & NavbarChainable;
    glass(val?: boolean): ReactElement & NavbarChainable;
    actions(act: ReactNode): ReactElement & NavbarChainable;
}
/**
 * Universal Navbar:
 * 1. English Function Call:
 *    Navbar("My Store", ["Home", "Products", "Cart"], Button("Sign In").blue())
 * 2. Component Links:
 *    Navbar("My Store", [ Link("Home", "/"), Link("Cart", "/cart") ])
 * 3. JSX Component:
 *    <Navbar brand="My Store" links={...} />
 */
export declare function Navbar(props: NavbarProps): ReactElement;
export declare function Navbar(brand: ReactNode, links?: (string | ReactNode)[] | ReactNode, actions?: ReactNode): ReactElement & NavbarChainable;
export declare namespace Navbar {
    var displayName: string;
}
