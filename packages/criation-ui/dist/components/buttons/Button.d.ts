import { default as React, ButtonHTMLAttributes, ReactNode, ReactElement, Ref } from 'react';
import { ComponentSize, ComponentVariant, CursorType } from '../../core/types';
import { ButtonShorthandConfig, ButtonChainable } from '../../core/shorthand';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ComponentVariant;
    size?: ComponentSize;
    loading?: boolean;
    loadingText?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
    cursor?: CursorType;
    color?: string;
    background?: string;
    ref?: Ref<HTMLButtonElement>;
}
export declare const BaseButton: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
/**
 * Universal Button:
 * 1. English Chaining:
 *    Button("Go to cart").red().link("/cart").auth()
 * 2. Natural English phrase / shorthand:
 *    Button("Go to cart, colored red, go to /cart, auth required")
 * 3. Tagged template literal:
 *    Button`"Go_to_cart", "10px 2px", "ID", "Auth", "path_direction", "red", "position", "pointer"`
 * 4. JSX component:
 *    <Button variant="primary">Click</Button>
 */
export declare function Button(props: ButtonProps): ReactElement;
export declare function Button(classNameOrLabel?: string, boxSize?: string, id?: string, auth?: string, pathDirection?: string, color?: string, position?: string, pointer?: string): ReactElement & ButtonChainable;
export declare function Button(strings: TemplateStringsArray, ...values: any[]): ReactElement & ButtonChainable;
export declare namespace Button {
    var displayName: string;
    var create: (config: ButtonShorthandConfig) => React.ReactElement<any, string | React.JSXElementConstructor<any>> & ButtonChainable;
    var element: (classNameOrLabel: string, boxSize?: string, id?: string, auth?: string, pathDirection?: string, color?: string, position?: string, pointer?: string) => HTMLButtonElement;
}
