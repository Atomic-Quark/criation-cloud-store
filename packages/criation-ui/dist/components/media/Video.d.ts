import { default as React, VideoHTMLAttributes } from 'react';
export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
    rounded?: "none" | "sm" | "md" | "lg" | "xl";
    aspectRatio?: string;
}
export declare const Video: React.ForwardRefExoticComponent<VideoProps & React.RefAttributes<HTMLVideoElement>>;
