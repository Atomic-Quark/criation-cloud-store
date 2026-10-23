export interface CrudRecord {
    id: string | number;
    [key: string]: any;
}
export interface CrudWorkflowConfig<T extends CrudRecord> {
    resourceName: string;
    fetchList: () => Promise<T[]>;
    createItem?: (item: Omit<T, "id">) => Promise<T>;
    updateItem?: (id: T["id"], item: Partial<T>) => Promise<T>;
    deleteItem?: (id: T["id"]) => Promise<void>;
    initialItems?: T[];
}
export interface CrudWorkflowResult<T extends CrudRecord> {
    items: T[];
    isLoading: boolean;
    error: Error | null;
    activeItem: T | null;
    isCreateOpen: boolean;
    isEditOpen: boolean;
    isDeleteOpen: boolean;
    openCreate: () => void;
    openEdit: (item: T) => void;
    openDelete: (item: T) => void;
    closeModals: () => void;
    handleCreate: (data: Omit<T, "id">) => Promise<T | undefined>;
    handleUpdate: (id: T["id"], data: Partial<T>) => Promise<T | undefined>;
    handleDelete: (id: T["id"]) => Promise<boolean>;
    refresh: () => Promise<T[] | undefined>;
}
/**
 * useCrudWorkflow:
 * Complete declarative CRUD workflow managing data synchronization, modal states,
 * and optimistic or server-confirmed record mutation.
 */
export declare function useCrudWorkflow<T extends CrudRecord>(config: CrudWorkflowConfig<T>): CrudWorkflowResult<T>;
