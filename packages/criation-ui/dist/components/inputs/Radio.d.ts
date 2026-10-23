import { default as React, InputHTMLAttributes, ReactNode } from 'react';
import { ComponentSize } from '../../core/types';
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: ComponentSize;
    label?: ReactNode;
    description?: ReactNode;
    error?: boolean | string;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
