import { default as React } from 'react';
import { InputProps } from './Input';
export interface DatePickerProps extends Omit<InputProps, "type"> {
    minDate?: string;
    maxDate?: string;
}
export declare const DatePicker: React.ForwardRefExoticComponent<Omit<DatePickerProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
