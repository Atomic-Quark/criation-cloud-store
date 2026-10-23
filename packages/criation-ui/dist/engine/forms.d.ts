import { default as React } from 'react';
import { FieldDefinition } from './model';
export interface SchemaFormProps {
    fields: FieldDefinition[];
    initialValues?: Record<string, any>;
    onSubmit: (values: Record<string, any>) => Promise<void> | void;
    onCancel?: () => void;
    submitLabel?: string;
    cancelLabel?: string;
    isSubmitting?: boolean;
    className?: string;
}
export declare function validateFieldValue(field: FieldDefinition, value: any): string | null;
/**
 * SchemaForm:
 * Declaratively generates an accessible, validated form directly from FieldDefinition[]
 */
export declare function SchemaForm({ fields, initialValues, onSubmit, onCancel, submitLabel, cancelLabel, isSubmitting, className, }: SchemaFormProps): React.JSX.Element;
