import { default as React, FormHTMLAttributes } from 'react';
export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    spacing?: string | number;
}
export declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
