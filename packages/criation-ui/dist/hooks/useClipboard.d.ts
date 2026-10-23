export interface UseClipboardOptions {
    timeout?: number;
}
export interface UseClipboardReturn {
    hasCopied: boolean;
    copy: (text: string) => Promise<boolean>;
}
export declare function useClipboard(options?: UseClipboardOptions): UseClipboardReturn;
