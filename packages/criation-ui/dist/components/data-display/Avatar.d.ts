import { default as React, HTMLAttributes } from 'react';
import { ComponentSize } from '../../core/types';
export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    name?: string;
    size?: ComponentSize;
    status?: "online" | "offline" | "busy" | "away";
}
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
