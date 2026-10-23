import { default as React, HTMLAttributes, ReactElement, ReactNode } from 'react';
export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
    ratio?: number;
    children?: ReactNode;
}
export declare const BaseAspectRatio: React.ForwardRefExoticComponent<AspectRatioProps & React.RefAttributes<HTMLDivElement>>;
export interface AspectRatioChainable {
    ratio(r: number): ReactElement & AspectRatioChainable;
    square(): ReactElement & AspectRatioChainable;
    video(): ReactElement & AspectRatioChainable;
    cinema(): ReactElement & AspectRatioChainable;
    portrait(): ReactElement & AspectRatioChainable;
}
export declare function AspectRatio(props: AspectRatioProps): ReactElement;
export declare function AspectRatio(ratio?: number | ReactNode, children?: ReactNode): ReactElement & AspectRatioChainable;
export declare namespace AspectRatio {
    var displayName: string;
}
