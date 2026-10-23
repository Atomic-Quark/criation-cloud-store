/**
 * Criation UI — Core Application Model (AST / Intermediate Representation)
 *
 * Defines the unified, serializable Application Model used across:
 * - Mode A: Plain-English Natural Language Parser
 * - Mode B: Structured DSL Parser
 * - Mode C: Advanced Programmatic React Engine
 * - Deterministic React Code Generator
 */
export type FieldType = "string" | "number" | "boolean" | "email" | "select" | "date" | "textarea";
export interface FieldValidationRule {
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    customMessage?: string;
}
export interface FieldDefinition {
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    defaultValue?: any;
    options?: string[] | {
        label: string;
        value: string;
    }[];
    validation?: FieldValidationRule;
    readOnly?: boolean;
    hidden?: boolean;
}
export interface ResourceDefinition {
    name: string;
    singular: string;
    plural: string;
    endpoint: string;
    primaryKey?: string;
    fields: FieldDefinition[];
    searchableFields?: string[];
    sortableFields?: string[];
    defaultSort?: {
        field: string;
        direction: "asc" | "desc";
    };
}
export type ViewType = "table" | "cards" | "detail" | "form";
export interface ViewDefinition {
    id: string;
    title: string;
    type: ViewType;
    resourceName: string;
    visibleFields?: string[];
    searchable?: boolean;
    paginated?: boolean;
    pageSize?: number;
    sortable?: boolean;
}
export type ActionType = "create" | "edit" | "delete" | "view" | "custom";
export interface ActionDefinition {
    id: string;
    name: string;
    label: string;
    type: ActionType;
    targetResource: string;
    dialogTitle?: string;
    confirmMessage?: string;
    successMessage?: string;
    requiresConfirmation?: boolean;
}
export interface PageDefinition {
    id: string;
    name: string;
    title: string;
    path: string;
    views: ViewDefinition[];
    actions: ActionDefinition[];
}
export interface ApiDefinition {
    baseUrl: string;
    resources: Record<string, string>;
    mockStorageFallback?: boolean;
    timeoutMs?: number;
}
export interface ApplicationModel {
    name: string;
    title: string;
    description?: string;
    version?: string;
    resources: Record<string, ResourceDefinition>;
    pages: PageDefinition[];
    api: ApiDefinition;
}
/**
 * Validates an Application Model for structural completeness and consistency.
 * Returns a list of error messages (empty array if valid).
 */
export declare function validateApplicationModel(model: ApplicationModel): string[];
