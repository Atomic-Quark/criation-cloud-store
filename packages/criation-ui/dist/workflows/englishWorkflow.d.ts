/**
 * Criation UI — Natural Language Workflow Engine
 *
 * Translates human-readable English rule sentences into structured workflow specifications,
 * reactive state machines, and conventional TypeScript code.
 */
export type TriggerEvent = "QUANTITY_CHANGE" | "REMOVE_ITEM" | "PROCEED_CHECKOUT" | "AUTH_SUCCESS" | "LOGOUT" | "PAYMENT_SUCCESS" | "CUSTOM";
export interface WorkflowCondition {
    field: string;
    operator: "equals" | "greater_than" | "less_than" | "is_zero" | "is_null" | "is_not_null" | "has_items";
    value?: any;
}
export interface WorkflowStep {
    action: string;
    target?: string;
    condition?: WorkflowCondition;
    fallbackAction?: string;
    params?: Record<string, any>;
}
export interface WorkflowRule {
    id: string;
    trigger: TriggerEvent;
    englishTrigger: string;
    description: string;
    steps: WorkflowStep[];
}
export interface WorkflowSpec {
    name: string;
    description?: string;
    rules: WorkflowRule[];
    rawEnglish: string;
}
/**
 * Parses English workflow descriptions into a structured WorkflowSpec AST.
 */
export declare function parseEnglishWorkflow(englishText: string): WorkflowSpec;
/**
 * Compiles plain-English workflow sentences into production-grade, editable TypeScript code.
 */
export declare function compileEnglishWorkflowToTypeScript(englishText: string): string;
