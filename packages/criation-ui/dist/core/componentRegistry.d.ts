export interface ComponentMetadata {
    name: string;
    category: "buttons" | "inputs" | "layout" | "typography" | "navigation" | "overlays" | "feedback" | "data-display" | "media";
    description: string;
    props: string[];
}
export declare const COMPONENT_REGISTRY: Record<string, ComponentMetadata>;
