import { default as React } from 'react';
import { InputProps } from './Input';
export interface EmailInputProps extends InputProps {
}
export declare const EmailInput: React.ForwardRefExoticComponent<Omit<EmailInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
