import { default as React, LabelHTMLAttributes, ReactElement, ReactNode } from 'react';
import { ComponentSize } from '../../core/types';
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    size?: ComponentSize;
    required?: boolean;
    disabled?: boolean;
    optionalText?: string;
    children?: ReactNode;
}
export declare const BaseLabel: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export interface LabelChainable {
    required(req?: boolean): ReactElement & LabelChainable;
    disabled(dis?: boolean): ReactElement & LabelChainable;
    for(htmlFor: string): ReactElement & LabelChainable;
    htmlFor(id: string): ReactElement & LabelChainable;
    small(): ReactElement & LabelChainable;
    large(): ReactElement & LabelChainable;
}
export declare function Label(props: LabelProps): ReactElement;
export declare function Label(text: ReactNode, ...rest: any[]): ReactElement & LabelChainable;
export declare namespace Label {
    var displayName: string;
}
