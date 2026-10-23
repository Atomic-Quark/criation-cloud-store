import { default as React, TextareaHTMLAttributes } from 'react';
import { ComponentSize } from '../../core/types';
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    size?: ComponentSize;
    error?: boolean | string;
    autoResize?: boolean;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
