/**
 * Criation UI — Declarative API Adapter
 *
 * Provides robust REST operations with:
 * - Request cancellation via AbortController
 * - Configurable retries
 * - In-memory mock storage fallback for local demonstration
 * - Unified error reporting
 */
export interface ApiClientOptions {
    baseUrl?: string;
    headers?: Record<string, string>;
    timeoutMs?: number;
    mockFallback?: boolean;
}
export interface ResourceApiResponse<T> {
    data: T | null;
    error: Error | null;
    status: number;
}
export interface ResourceApi<T = any> {
    list: (params?: {
        search?: string;
        sort?: string;
        page?: number;
        limit?: number;
    }) => Promise<T[]>;
    get: (id: string | number) => Promise<T | null>;
    create: (item: Omit<T, "id">) => Promise<T>;
    update: (id: string | number, patch: Partial<T>) => Promise<T>;
    delete: (id: string | number) => Promise<boolean>;
}
/**
 * In-memory Mock Storage for standalone demos and local testing.
 */
declare class MemoryStorageAdapter {
    private store;
    seed(resourceName: string, initialData: any[]): void;
    getStore(resourceName: string): any[];
    list(resourceName: string, search?: string): Promise<any[]>;
    get(resourceName: string, id: string | number): Promise<any | null>;
    create(resourceName: string, data: any): Promise<any>;
    update(resourceName: string, id: string | number, patch: any): Promise<any>;
    delete(resourceName: string, id: string | number): Promise<boolean>;
}
export declare const memoryStore: MemoryStorageAdapter;
/**
 * Creates a resource API client supporting both real HTTP and local mock fallback.
 */
export declare function createResourceApi<T = any>(resourceName: string, endpoint: string, options?: ApiClientOptions): ResourceApi<T>;
export {};
