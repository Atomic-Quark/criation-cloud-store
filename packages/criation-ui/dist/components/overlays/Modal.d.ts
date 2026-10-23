import { default as React, ReactNode } from 'react';
import { ComponentSize } from '../../core/types';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: ReactNode;
    size?: ComponentSize;
    children: ReactNode;
    footer?: ReactNode;
    closeOnOverlayClick?: boolean;
    closeOnEsc?: boolean;
    className?: string;
    initialFocusRef?: React.RefObject<HTMLElement | null>;
    finalFocusRef?: React.RefObject<HTMLElement | null>;
}
export declare function Modal({ isOpen, onClose, title, size, children, footer, closeOnOverlayClick, closeOnEsc, className, initialFocusRef, finalFocusRef, }: ModalProps): React.JSX.Element | null;
