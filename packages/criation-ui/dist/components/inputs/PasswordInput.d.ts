import { default as React } from 'react';
import { InputProps } from './Input';
export interface PasswordInputProps extends Omit<InputProps, "type" | "rightIcon"> {
    showToggle?: boolean;
}
export declare const PasswordInput: React.ForwardRefExoticComponent<Omit<PasswordInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
