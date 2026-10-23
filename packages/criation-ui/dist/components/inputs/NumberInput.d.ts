import { default as React } from 'react';
import { InputProps } from './Input';
export interface NumberInputProps extends Omit<InputProps, "type"> {
    min?: number;
    max?: number;
    step?: number;
}
export declare const NumberInput: React.ForwardRefExoticComponent<Omit<NumberInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
