export { validators } from '../utilities/validators';
export interface ValidationRule<T> {
    field: keyof T;
    validate: (val: any, allValues: T) => string | null;
}
export declare function createSchemaValidator<T extends Record<string, any>>(rules: ValidationRule<T>[]): (values: T) => Partial<Record<keyof T, string>>;
