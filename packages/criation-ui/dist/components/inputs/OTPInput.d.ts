import { default as React, ReactElement } from 'react';
export interface OTPInputProps {
    length?: number;
    value?: string;
    onChange?: (code: string) => void;
    onComplete?: (code: string) => void;
    masked?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export declare const BaseOTPInput: React.ForwardRefExoticComponent<OTPInputProps & React.RefAttributes<HTMLDivElement>>;
export interface OTPInputChainable {
    masked(m?: boolean): ReactElement & OTPInputChainable;
    disabled(d?: boolean): ReactElement & OTPInputChainable;
    onComplete(fn: (code: string) => void): ReactElement & OTPInputChainable;
    onChange(fn: (code: string) => void): ReactElement & OTPInputChainable;
}
export declare function OTPInput(props: OTPInputProps): ReactElement;
export declare function OTPInput(length?: number, ...rest: any[]): ReactElement & OTPInputChainable;
export declare namespace OTPInput {
    var displayName: string;
}
