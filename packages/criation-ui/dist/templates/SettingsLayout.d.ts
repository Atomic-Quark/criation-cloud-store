import { default as React, ReactNode } from 'react';
export interface SettingsSection {
    id: string;
    label: string;
    icon?: ReactNode;
    content: ReactNode;
}
export interface SettingsLayoutProps {
    title?: string;
    description?: string;
    sections: SettingsSection[];
    defaultSectionId?: string;
    className?: string;
}
export declare function SettingsLayout({ title, description, sections, defaultSectionId, className, }: SettingsLayoutProps): React.JSX.Element;
