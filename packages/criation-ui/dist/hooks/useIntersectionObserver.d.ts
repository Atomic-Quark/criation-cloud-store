import { RefObject } from 'react';
export interface UseIntersectionObserverOptions extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}
export declare function useIntersectionObserver(elementRef: RefObject<Element | null>, { threshold, root, rootMargin, freezeOnceVisible, }?: UseIntersectionObserverOptions): IntersectionObserverEntry | undefined;
