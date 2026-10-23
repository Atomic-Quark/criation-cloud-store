import { default as React, ReactElement } from 'react';
import { ComponentSize } from '../../core/types';
export interface MultiSelectOption {
    label: string;
    value: string;
}
export interface MultiSelectProps {
    options?: (string | MultiSelectOption)[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (values: string[]) => void;
    placeholder?: string;
    size?: ComponentSize;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onSearch?: (query: string) => Promise<(string | MultiSelectOption)[]>;
    loading?: boolean;
    emptyText?: string;
}
export declare const BaseMultiSelect: React.ForwardRefExoticComponent<MultiSelectProps & React.RefAttributes<HTMLDivElement>>;
export interface MultiSelectChainable {
    placeholder(p: string): ReactElement & MultiSelectChainable;
    onChange(fn: (values: string[]) => void): ReactElement & MultiSelectChainable;
}
export declare function MultiSelect(props: MultiSelectProps): ReactElement;
export declare function MultiSelect(options: (string | MultiSelectOption)[], placeholder?: string): ReactElement & MultiSelectChainable;
export declare namespace MultiSelect {
    var displayName: string;
}
