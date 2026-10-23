import { default as React, InputHTMLAttributes, ReactNode } from 'react';
import { ComponentSize } from '../../core/types';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: ComponentSize;
    label?: ReactNode;
    description?: ReactNode;
    error?: boolean | string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
