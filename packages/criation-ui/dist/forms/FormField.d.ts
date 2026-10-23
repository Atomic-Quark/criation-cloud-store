import { default as React, HTMLAttributes, ReactNode } from 'react';
export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
    label?: ReactNode;
    required?: boolean;
    optional?: boolean;
    hint?: ReactNode;
    error?: string | null;
    htmlFor?: string;
    children: ReactNode;
}
export declare const FormField: React.ForwardRefExoticComponent<FormFieldProps & React.RefAttributes<HTMLDivElement>>;
