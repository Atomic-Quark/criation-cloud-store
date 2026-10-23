import { default as React, HTMLAttributes } from 'react';
export interface CodeProps extends HTMLAttributes<HTMLElement> {
    block?: boolean;
    copyable?: boolean;
    language?: string;
}
export declare const Code: React.ForwardRefExoticComponent<CodeProps & React.RefAttributes<HTMLElement>>;
