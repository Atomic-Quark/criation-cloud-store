import { ApplicationModel } from '../engine/model';
export interface GeneratedFile {
    path: string;
    content: string;
}
export interface CodegenResult {
    files: GeneratedFile[];
    summary: {
        resourceCount: number;
        pageCount: number;
        fileCount: number;
    };
}
/**
 * Generates TypeScript type declarations for all resources in the ApplicationModel.
 */
export declare function generateResourceTypes(model: ApplicationModel): string;
/**
 * Generates a clean, editable React Page component for a page in the ApplicationModel.
 */
export declare function generatePageComponent(pageName: string, model: ApplicationModel): string;
/**
 * Generates the root App.tsx component.
 */
export declare function generateAppShell(model: ApplicationModel): string;
/**
 * Generates package.json for the standalone generated application.
 */
export declare function generatePackageJson(model: ApplicationModel): string;
/**
 * Generates index.html for the standalone generated application.
 */
export declare function generateIndexHtml(model: ApplicationModel): string;
/**
 * Generates main.tsx for the standalone generated application.
 */
export declare function generateMainTsx(): string;
/**
 * Generates vite.config.ts for the standalone generated application.
 */
export declare function generateViteConfig(): string;
/**
 * Generates tsconfig.json for the standalone generated application.
 */
export declare function generateTsConfig(): string;
/**
 * Main code generation pipeline:
 * Takes an ApplicationModel and produces complete project files.
 */
export declare function generateReactApplication(model: ApplicationModel): CodegenResult;
