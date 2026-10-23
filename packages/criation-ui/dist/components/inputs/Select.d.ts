import { default as React, SelectHTMLAttributes } from 'react';
import { ComponentSize } from '../../core/types';
export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    size?: ComponentSize;
    options?: SelectOption[];
    placeholder?: string;
    error?: boolean | string;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
