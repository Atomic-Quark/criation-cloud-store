import { default as React } from 'react';
import { ComponentSize, ComponentVariant } from '../../core/types';
export interface ProgressProps {
    value: number;
    max?: number;
    size?: ComponentSize;
    variant?: ComponentVariant;
    showValue?: boolean;
    indeterminate?: boolean;
    className?: string;
}
export declare function Progress({ value, max, size, variant, showValue, indeterminate, className, }: ProgressProps): React.JSX.Element;
