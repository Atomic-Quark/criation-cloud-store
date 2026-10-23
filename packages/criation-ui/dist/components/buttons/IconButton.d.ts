import { default as React, ReactNode } from 'react';
import { ButtonProps } from './Button';
export interface IconButtonProps extends Omit<ButtonProps, "leftIcon" | "rightIcon" | "children"> {
    icon: ReactNode;
    "aria-label": string;
    isRound?: boolean;
}
export declare const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
