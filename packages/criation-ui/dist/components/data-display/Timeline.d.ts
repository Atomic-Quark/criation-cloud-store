import { default as React, HTMLAttributes, ReactElement, ReactNode } from 'react';
export interface TimelineEvent {
    title: string;
    timestamp?: string;
    description?: ReactNode;
    icon?: ReactNode;
    status?: "completed" | "current" | "pending" | "danger";
}
export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
    events: TimelineEvent[];
    dense?: boolean;
}
export declare const BaseTimeline: React.ForwardRefExoticComponent<TimelineProps & React.RefAttributes<HTMLDivElement>>;
export interface TimelineChainable {
    dense(): ReactElement & TimelineChainable;
}
export declare function Timeline(props: TimelineProps): ReactElement;
export declare function Timeline(events: TimelineEvent[]): ReactElement & TimelineChainable;
export declare namespace Timeline {
    var displayName: string;
}
