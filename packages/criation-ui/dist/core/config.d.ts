import { ThemeMode } from './types';
export interface CriationUIConfig {
    prefix: string;
    defaultTheme: ThemeMode;
    enableAnimations: boolean;
    toastDurationMs: number;
}
export declare const defaultUIConfig: CriationUIConfig;
export declare function configureCriationUI(userConfig: Partial<CriationUIConfig>): void;
export declare function getCriationUIConfig(): CriationUIConfig;
