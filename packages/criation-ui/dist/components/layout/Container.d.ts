import { default as React, HTMLAttributes, ReactNode, ReactElement } from 'react';
import { Breakpoint } from '../../core/types';
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    maxWidth?: Breakpoint | "full";
    center?: boolean;
}
export declare const BaseContainer: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Universal Container:
 * 1. Simple Function:
 *    Container(Heading("Title"), Text("Body"))
 * 2. JSX Component:
 *    <Container maxWidth="lg">...</Container>
 */
export declare function Container(props: ContainerProps): ReactElement;
export declare function Container(...children: ReactNode[]): ReactElement;
export declare function Container(children: ReactNode[]): ReactElement;
export declare namespace Container {
    var displayName: string;
}
