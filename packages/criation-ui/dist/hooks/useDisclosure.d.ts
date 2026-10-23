export interface UseDisclosureReturn {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    setIsOpen: (isOpen: boolean) => void;
}
export declare function useDisclosure(initialState?: boolean): UseDisclosureReturn;
