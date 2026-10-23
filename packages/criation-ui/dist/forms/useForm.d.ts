import { default as React } from 'react';
export type FormErrors<T> = Partial<Record<keyof T, string>>;
export type FormTouched<T> = Partial<Record<keyof T, boolean>>;
export type FormValidator<T> = (values: T) => FormErrors<T> | Promise<FormErrors<T>>;
export interface UseFormOptions<T extends Record<string, any>> {
    initialValues: T;
    validate?: FormValidator<T>;
    onSubmit?: (values: T) => Promise<void> | void;
}
export interface UseFormReturn<T extends Record<string, any>> {
    values: T;
    errors: FormErrors<T>;
    touched: FormTouched<T>;
    isSubmitting: boolean;
    isValid: boolean;
    isDirty: boolean;
    setValues: React.Dispatch<React.SetStateAction<T>>;
    setFieldValue: <K extends keyof T>(field: K, value: T[K]) => void;
    setFieldError: (field: keyof T, error: string | undefined) => void;
    setFieldTouched: (field: keyof T, isTouched?: boolean) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleSubmit: (e?: React.FormEvent) => Promise<boolean>;
    reset: (newInitialValues?: T) => void;
    register: (field: keyof T) => {
        name: string;
        value: any;
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | any) => void;
        onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | any) => void;
        error?: string;
    };
}
export declare function useForm<T extends Record<string, any>>({ initialValues, validate, onSubmit, }: UseFormOptions<T>): UseFormReturn<T>;
