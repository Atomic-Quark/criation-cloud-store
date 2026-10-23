import { default as React, ReactNode } from 'react';
import { SidebarItem } from '../components/navigation/Sidebar';
export interface DashboardLayoutProps {
    brand: ReactNode;
    sidebarItems: SidebarItem[];
    userProfile?: ReactNode;
    topActions?: ReactNode;
    children: ReactNode;
    className?: string;
}
export declare function DashboardLayout({ brand, sidebarItems, userProfile, topActions, children, className, }: DashboardLayoutProps): React.JSX.Element;
