import { default as React, HTMLAttributes, ReactElement, ReactNode } from 'react';
export interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
    maxHeight?: string | number;
    maxWidth?: string | number;
    orientation?: "vertical" | "horizontal" | "both";
    children?: ReactNode;
}
export declare const BaseScrollArea: React.ForwardRefExoticComponent<ScrollAreaProps & React.RefAttributes<HTMLDivElement>>;
export interface ScrollAreaChainable {
    maxHeight(h: string | number): ReactElement & ScrollAreaChainable;
    maxWidth(w: string | number): ReactElement & ScrollAreaChainable;
    horizontal(): ReactElement & ScrollAreaChainable;
    both(): ReactElement & ScrollAreaChainable;
}
export declare function ScrollArea(props: ScrollAreaProps): ReactElement;
export declare function ScrollArea(maxHeightOrChildren?: string | number | ReactNode, children?: ReactNode): ReactElement & ScrollAreaChainable;
export declare namespace ScrollArea {
    var displayName: string;
}
