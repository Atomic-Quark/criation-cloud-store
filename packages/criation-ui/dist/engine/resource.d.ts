import { default as React } from 'react';
import { ResourceDefinition } from './model';
import { ResourceApi } from './api';
export declare function defineResource(def: ResourceDefinition): ResourceDefinition;
export interface ResourceTableProps<T extends {
    id: string | number;
    [key: string]: any;
} = any> {
    resource: ResourceDefinition;
    api?: ResourceApi<T>;
    items?: T[];
    isLoading?: boolean;
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
    searchable?: boolean;
    onRefresh?: () => void;
}
export declare function ResourceTable<T extends {
    id: string | number;
    [key: string]: any;
}>({ resource, api, items: controlledItems, isLoading: controlledLoading, onEdit, onDelete, searchable, onRefresh, }: ResourceTableProps<T>): React.JSX.Element;
export interface ResourcePageProps {
    resource: ResourceDefinition;
    apiOptions?: {
        baseUrl?: string;
        mockFallback?: boolean;
    };
    initialItems?: any[];
    title?: string;
    subtitle?: string;
}
/**
 * ResourcePage:
 * High-level turnkey page component that generates the complete CRUD workflow:
 * - Table view with search
 * - Add Record modal with schema validation
 * - Edit Record modal with entity population
 * - Delete confirmation modal
 */
export declare function ResourcePage({ resource, apiOptions, initialItems, title, subtitle, }: ResourcePageProps): React.JSX.Element;
