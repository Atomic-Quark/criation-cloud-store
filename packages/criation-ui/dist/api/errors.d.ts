export declare class ApiError extends Error {
    status: number;
    data: any;
    constructor(status: number, message: string, data?: any);
}
export declare class NetworkError extends Error {
    constructor(message?: string);
}
export declare class TimeoutError extends Error {
    constructor(message?: string);
}
