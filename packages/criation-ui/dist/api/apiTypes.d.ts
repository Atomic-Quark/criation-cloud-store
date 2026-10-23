export interface ApiRequestOptions extends RequestInit {
    params?: Record<string, string | number | boolean | undefined>;
    timeoutMs?: number;
}
export interface ApiResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Headers;
}
export interface ApiClientConfig {
    baseUrl: string;
    defaultHeaders?: Record<string, string>;
    getAuthToken?: () => string | null | Promise<string | null>;
    timeoutMs?: number;
}
