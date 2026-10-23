/**
 * Criation UI — Fluent English Workflow Builder
 *
 * Provides an expressive, type-safe API for defining state machines and business workflows.
 */
export interface WorkflowStepDefinition {
    name: string;
    type: string;
    handler?: (...args: any[]) => any;
}
export declare class FluentWorkflowBuilder {
    private _name;
    private _steps;
    constructor(name: string);
    /**
     * "When the user changes a product's quantity"
     */
    whenQuantityChanges(description?: string): this;
    /**
     * "When the user removes a product from the cart"
     */
    whenItemRemoved(description?: string): this;
    /**
     * "When the user proceeds to checkout"
     */
    whenCheckoutBegins(description?: string): this;
    /**
     * "When authentication succeeds"
     */
    whenAuthenticated(description?: string): this;
    /**
     * "When the user logs out"
     */
    whenLoggedOut(description?: string): this;
    /**
     * "When payment succeeds"
     */
    whenPaymentSucceeds(description?: string): this;
    build(): {
        name: string;
        stepCount: number;
        steps: WorkflowStepDefinition[];
    };
}
/**
 * Factory for creating a fluent workflow builder in English.
 */
export declare function workflow(name?: string): FluentWorkflowBuilder;
