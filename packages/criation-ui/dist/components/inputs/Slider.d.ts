import { default as React, InputHTMLAttributes } from 'react';
import { ComponentSize } from '../../core/types';
export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: ComponentSize;
    min?: number;
    max?: number;
    step?: number;
    showValue?: boolean;
}
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLInputElement>>;
