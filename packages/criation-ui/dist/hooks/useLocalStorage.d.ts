export declare function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((prev: T) => T)) => void];
