import { default as React, ReactNode } from 'react';
import { ThemeMode } from '../../core/types';
export interface ThemeContextValue {
    theme: ThemeMode;
    activeTheme: "light" | "dark";
    setTheme: (mode: ThemeMode) => void;
    toggleTheme: () => void;
}
export interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: ThemeMode;
    storageKey?: string;
}
export declare function ThemeProvider({ children, defaultTheme, storageKey, }: ThemeProviderProps): React.JSX.Element;
export declare function useTheme(): ThemeContextValue;
