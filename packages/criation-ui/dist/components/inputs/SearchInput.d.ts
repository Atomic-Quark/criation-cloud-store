import { default as React, InputHTMLAttributes, ReactElement, ChangeEvent } from 'react';
import { ComponentSize } from '../../core/types';
export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
    size?: ComponentSize;
    shortcutBadge?: string;
    debounceMs?: number;
    onSearch?: (value: string) => void;
    onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    fullWidth?: boolean;
}
export declare const BaseSearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;
export interface SearchInputChainable {
    width(w: string): ReactElement & SearchInputChainable;
    shortcut(badge: string): ReactElement & SearchInputChainable;
    onSearch(fn: (val: string) => void): ReactElement & SearchInputChainable;
    small(): ReactElement & SearchInputChainable;
    large(): ReactElement & SearchInputChainable;
    fullWidth(): ReactElement & SearchInputChainable;
}
export declare function SearchInput(props: SearchInputProps): ReactElement;
export declare function SearchInput(placeholder?: string, ...rest: any[]): ReactElement & SearchInputChainable;
export declare namespace SearchInput {
    var displayName: string;
}
