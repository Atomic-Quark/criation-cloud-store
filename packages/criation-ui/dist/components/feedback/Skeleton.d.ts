import { default as React } from 'react';
export interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    circle?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export declare function Skeleton({ width, height, circle, className, style, }: SkeletonProps): React.JSX.Element;
