import { default as React, InputHTMLAttributes } from 'react';
export interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    title?: string;
    subtitle?: string;
    maxSizeMb?: number;
    onFilesSelected?: (files: FileList | null) => void;
}
export declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLInputElement>>;
