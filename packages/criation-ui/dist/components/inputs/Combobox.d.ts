import { default as React, ReactElement } from 'react';
import { ComponentSize } from '../../core/types';
export interface ComboboxOption {
    label: string;
    value: string;
    disabled?: boolean;
}
export interface ComboboxProps {
    options?: (string | ComboboxOption)[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    size?: ComponentSize;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onSearch?: (query: string) => Promise<(string | ComboboxOption)[]>;
    loading?: boolean;
    emptyText?: string;
}
export declare const BaseCombobox: React.ForwardRefExoticComponent<ComboboxProps & React.RefAttributes<HTMLDivElement>>;
export interface ComboboxChainable {
    onChange(fn: (val: string) => void): ReactElement & ComboboxChainable;
    placeholder(p: string): ReactElement & ComboboxChainable;
}
export declare function Combobox(props: ComboboxProps): ReactElement;
export declare function Combobox(options: (string | ComboboxOption)[], placeholder?: string): ReactElement & ComboboxChainable;
export declare namespace Combobox {
    var displayName: string;
}
