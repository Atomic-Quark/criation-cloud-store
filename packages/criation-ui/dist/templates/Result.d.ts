import { default as React, HTMLAttributes, ReactElement, ReactNode } from 'react';
export type ResultStatus = "success" | "error" | "warning" | "info" | "404" | "403";
export interface ResultProps extends HTMLAttributes<HTMLDivElement> {
    status?: ResultStatus;
    title: string;
    subTitle?: ReactNode;
    icon?: ReactNode;
    extra?: ReactNode;
}
export declare const BaseResult: React.ForwardRefExoticComponent<ResultProps & React.RefAttributes<HTMLDivElement>>;
export interface ResultChainable {
    success(): ReactElement & ResultChainable;
    error(): ReactElement & ResultChainable;
    warning(): ReactElement & ResultChainable;
    notFound(): ReactElement & ResultChainable;
    extra(el: ReactNode): ReactElement & ResultChainable;
}
export declare function Result(props: ResultProps): ReactElement;
export declare function Result(title: string, subTitle?: ReactNode): ReactElement & ResultChainable;
export declare namespace Result {
    var displayName: string;
}
