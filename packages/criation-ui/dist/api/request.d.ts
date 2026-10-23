import { ApiRequestOptions, ApiResponse } from './apiTypes';
export declare function request<T = any>(url: string, options?: ApiRequestOptions): Promise<ApiResponse<T>>;
