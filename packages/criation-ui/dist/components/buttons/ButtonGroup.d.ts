import { default as React, HTMLAttributes } from 'react';
import { ComponentSize, ComponentVariant } from '../../core/types';
export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    size?: ComponentSize;
    variant?: ComponentVariant;
    attached?: boolean;
    vertical?: boolean;
}
export declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
