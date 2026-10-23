import { default as React, ReactNode, ReactElement } from 'react';
export interface FooterProps {
    copyright?: ReactNode;
    links?: (string | ReactNode)[];
    className?: string;
}
export declare function BaseFooter({ copyright, links, className, }: FooterProps): React.JSX.Element;
export declare namespace BaseFooter {
    var displayName: string;
}
/**
 * Universal Footer:
 * 1. Simple Function:
 *    Footer("© 2026 My Store", ["Privacy", "Terms", "Contact"])
 * 2. JSX Component:
 *    <Footer copyright="© 2026" />
 */
export declare function Footer(props: FooterProps): ReactElement;
export declare function Footer(copyright?: ReactNode, links?: (string | ReactNode)[]): ReactElement;
export declare namespace Footer {
    var displayName: string;
}
