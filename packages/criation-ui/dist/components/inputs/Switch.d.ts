import { default as React, InputHTMLAttributes, ReactNode } from 'react';
import { ComponentSize } from '../../core/types';
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: ComponentSize;
    label?: ReactNode;
    description?: ReactNode;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
