import { default as React, ReactElement } from 'react';
export interface ColorPickerProps {
    value?: string;
    defaultValue?: string;
    onChange?: (color: string) => void;
    presets?: string[];
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export declare const BaseColorPicker: React.ForwardRefExoticComponent<ColorPickerProps & React.RefAttributes<HTMLDivElement>>;
export interface ColorPickerChainable {
    onChange(fn: (c: string) => void): ReactElement & ColorPickerChainable;
}
export declare function ColorPicker(props: ColorPickerProps): ReactElement;
export declare function ColorPicker(defaultColor?: string, onChange?: (c: string) => void): ReactElement & ColorPickerChainable;
export declare namespace ColorPicker {
    var displayName: string;
}
