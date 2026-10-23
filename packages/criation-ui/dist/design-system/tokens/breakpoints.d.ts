export declare const breakpoints: {
    readonly sm: "640px";
    readonly md: "768px";
    readonly lg: "1024px";
    readonly xl: "1280px";
    readonly "2xl": "1536px";
};
export type BreakpointKey = keyof typeof breakpoints;
export declare function mediaQueryUp(bp: BreakpointKey): string;
export declare function mediaQueryDown(bp: BreakpointKey): string;
