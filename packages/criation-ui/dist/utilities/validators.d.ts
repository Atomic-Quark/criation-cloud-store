export declare const validators: {
    required: (msg?: string) => (value: unknown) => string | null;
    email: (msg?: string) => (value: string) => string | null;
    minLength: (min: number, msg?: string) => (value: string) => string | null;
    maxLength: (max: number, msg?: string) => (value: string) => string | null;
    matches: (regex: RegExp, msg?: string) => (value: string) => string | null;
};
export declare function validateRequired(value: unknown): boolean;
export declare function validateEmail(value: string): boolean;
export declare function validateMinLength(value: string, min: number): boolean;
export declare function validateUrl(value: string): boolean;
