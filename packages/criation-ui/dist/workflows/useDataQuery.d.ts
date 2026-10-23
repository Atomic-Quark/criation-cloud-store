export interface DataQueryOptions<T> {
    enabled?: boolean;
    initialData?: T;
    onSuccess?: (data: T) => void;
    onError?: (err: Error) => void;
    retryCount?: number;
}
export interface DataQueryResult<T> {
    data: T | undefined;
    error: Error | null;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    refetch: () => Promise<T | undefined>;
}
/**
 * useDataQuery:
 * High-level reactive data querying hook with mount safety, retry capabilities,
 * and declarative loading/error states.
 */
export declare function useDataQuery<T = any>(queryFn: () => Promise<T>, deps?: any[], options?: DataQueryOptions<T>): DataQueryResult<T>;
