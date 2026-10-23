import { default as React, ReactElement } from 'react';
import { ComponentSize } from '../../core/types';
export interface RatingProps {
    max?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    disabled?: boolean;
    size?: ComponentSize;
    allowHalf?: boolean;
    color?: string;
    emptyColor?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare const BaseRating: React.ForwardRefExoticComponent<RatingProps & React.RefAttributes<HTMLDivElement>>;
export interface RatingChainable {
    readOnly(r?: boolean): ReactElement & RatingChainable;
    size(s: ComponentSize): ReactElement & RatingChainable;
    onChange(fn: (val: number) => void): ReactElement & RatingChainable;
    color(c: string): ReactElement & RatingChainable;
    small(): ReactElement & RatingChainable;
    large(): ReactElement & RatingChainable;
}
export declare function Rating(props: RatingProps): ReactElement;
export declare function Rating(score?: number, ...rest: any[]): ReactElement & RatingChainable;
export declare namespace Rating {
    var displayName: string;
}
