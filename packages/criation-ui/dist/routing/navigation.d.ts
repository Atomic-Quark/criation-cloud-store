import { NavigationDirection, NavigationOptions } from './routeTypes';
/**
 * Reusable routing & navigation controller
 */
export declare const navigation: {
    navigate: (to: string, options?: NavigationOptions) => void;
    back: () => void;
    forward: () => void;
    getPathDirection: (prevPath: string, nextPath: string) => NavigationDirection;
};
