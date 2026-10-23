import { default as React, InputHTMLAttributes, ReactNode, ReactElement, Ref } from 'react';
import { ComponentSize, CursorType } from '../../core/types';
import { InputShorthandConfig, InputChainable } from '../../core/shorthand';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: ComponentSize;
    error?: boolean | string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    isClearable?: boolean;
    onClear?: () => void;
    cursor?: CursorType;
    ref?: Ref<HTMLInputElement>;
}
export declare const BaseInput: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
/**
 * Universal Input:
 * 1. English Chaining:
 *    Input("Enter your email").email().width("350px").label("Email")
 * 2. Natural English phrase:
 *    Input("Enter your email, type email, width 320px, labeled Email Address")
 * 3. JSX Component:
 *    <Input placeholder="Enter your email" />
 */
export declare function Input(props: InputProps): ReactElement;
export declare function Input(placeholderOrClass?: string, boxSize?: string, id?: string, type?: string, label?: string, color?: string, position?: string, pointer?: string): ReactElement & InputChainable;
export declare function Input(strings: TemplateStringsArray, ...values: any[]): ReactElement & InputChainable;
export declare namespace Input {
    var displayName: string;
    var create: (config: InputShorthandConfig) => React.ReactElement<any, string | React.JSXElementConstructor<any>> & InputChainable;
}
