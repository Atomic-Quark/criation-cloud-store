import { RefObject } from 'react';
export declare function useClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: MouseEvent | TouchEvent) => void, active?: boolean): void;
