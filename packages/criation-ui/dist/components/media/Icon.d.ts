import { default as React, HTMLAttributes, ReactNode } from 'react';
import { ComponentSize } from '../../core/types';
export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
    size?: ComponentSize | number;
    color?: string;
    spin?: boolean;
    children: ReactNode;
}
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLSpanElement>>;
