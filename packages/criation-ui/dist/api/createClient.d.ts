import { ApiClientConfig, ApiRequestOptions, ApiResponse } from './apiTypes';
export declare function createApiClient(config: ApiClientConfig): {
    get: <T = any>(endpoint: string, options?: ApiRequestOptions) => Promise<ApiResponse<T>>;
    post: <T = any>(endpoint: string, body?: any, options?: ApiRequestOptions) => Promise<ApiResponse<T>>;
    put: <T = any>(endpoint: string, body?: any, options?: ApiRequestOptions) => Promise<ApiResponse<T>>;
    delete: <T = any>(endpoint: string, options?: ApiRequestOptions) => Promise<ApiResponse<T>>;
};
