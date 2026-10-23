import { default as React, HTMLAttributes, ReactElement } from 'react';
export interface StepItem {
    title: string;
    description?: string;
}
export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
    steps: (string | StepItem)[];
    activeStep?: number;
    orientation?: "horizontal" | "vertical";
    onStepClick?: (stepIndex: number) => void;
}
export declare const BaseStepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;
export interface StepperChainable {
    active(index: number): ReactElement & StepperChainable;
    vertical(): ReactElement & StepperChainable;
    horizontal(): ReactElement & StepperChainable;
    onStepClick(fn: (idx: number) => void): ReactElement & StepperChainable;
}
export declare function Stepper(props: StepperProps): ReactElement;
export declare function Stepper(steps: (string | StepItem)[], activeStep?: number): ReactElement & StepperChainable;
export declare namespace Stepper {
    var displayName: string;
}
