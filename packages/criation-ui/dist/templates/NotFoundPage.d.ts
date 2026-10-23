import { default as React, HTMLAttributes } from 'react';
export interface NotFoundPageProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    message?: string;
    homePath?: string;
    homeText?: string;
}
export declare const NotFoundPage: React.ForwardRefExoticComponent<NotFoundPageProps & React.RefAttributes<HTMLDivElement>>;
