import { default as React } from 'react';
import { InputProps } from './Input';
export interface TextInputProps extends InputProps {
}
export declare const TextInput: React.ForwardRefExoticComponent<Omit<TextInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
