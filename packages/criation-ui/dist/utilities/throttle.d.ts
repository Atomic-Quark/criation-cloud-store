export declare function throttle<T extends (...args: any[]) => any>(fn: T, limitMs: number): (...args: Parameters<T>) => void;
