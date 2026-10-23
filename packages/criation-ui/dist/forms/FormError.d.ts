import { default as React, HTMLAttributes } from 'react';
export interface FormErrorProps extends HTMLAttributes<HTMLParagraphElement> {
    children?: React.ReactNode;
}
export declare const FormError: React.ForwardRefExoticComponent<FormErrorProps & React.RefAttributes<HTMLParagraphElement>>;
