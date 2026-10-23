import { default as React } from 'react';
import { ComponentSize, ComponentVariant } from '../../core/types';
export interface SpinnerProps {
    size?: ComponentSize;
    variant?: ComponentVariant;
    className?: string;
    label?: string;
}
export declare function Spinner({ size, variant, className, label, }: SpinnerProps): React.JSX.Element;
