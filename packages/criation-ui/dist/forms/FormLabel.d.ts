import { default as React, LabelHTMLAttributes } from 'react';
export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
    optional?: boolean;
}
export declare const FormLabel: React.ForwardRefExoticComponent<FormLabelProps & React.RefAttributes<HTMLLabelElement>>;
