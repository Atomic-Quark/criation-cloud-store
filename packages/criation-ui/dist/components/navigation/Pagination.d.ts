import { default as React } from 'react';
export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}
export declare function Pagination({ currentPage, totalPages, onPageChange, className, }: PaginationProps): React.JSX.Element | null;
