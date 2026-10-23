import { CodegenResult } from './codegen';
import { ApplicationModel } from '../engine/model';
export * from './englishParser';
export * from './structuredParser';
export * from './codegen';
/**
 * End-to-end compilation from plain-English description to complete React application files.
 */
export declare function compileEnglishToReact(englishText: string): CodegenResult & {
    model: ApplicationModel;
    errors: string[];
};
/**
 * End-to-end compilation from Mode B structured DSL to complete React application files.
 */
export declare function compileStructuredToReact(dslText: string): CodegenResult & {
    model: ApplicationModel;
    errors: string[];
};
