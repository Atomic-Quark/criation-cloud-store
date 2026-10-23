import { default as React, ReactNode } from 'react';
export type FormValues = Record<string, any>;
export type FormErrors<T> = Partial<Record<keyof T, string>>;
export type ValidatorFn<T> = (values: T) => FormErrors<T>;
export interface FormContextValue<T extends FormValues = FormValues> {
    values: T;
    errors: FormErrors<T>;
    touched: Partial<Record<keyof T, boolean>>;
    setValue: (field: keyof T, value: any) => void;
    setTouched: (field: keyof T) => void;
    setError: (field: keyof T, error: string) => void;
    handleSubmit: (e?: React.FormEvent) => void;
    isSubmitting: boolean;
    isValid: boolean;
}
export interface FormProviderProps<T extends FormValues> {
    initialValues: T;
    validate?: ValidatorFn<T>;
    onSubmit: (values: T) => Promise<void> | void;
    children: ReactNode;
}
export declare function FormProvider<T extends FormValues>({ initialValues, validate, onSubmit, children, }: FormProviderProps<T>): React.JSX.Element;
export declare function useFormContext<T extends FormValues = FormValues>(): FormContextValue<T>;
export * from './useForm';
