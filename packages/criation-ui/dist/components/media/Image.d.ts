import { default as React, ImgHTMLAttributes, ReactElement, Ref } from 'react';
import { ImageShorthandConfig, ImageChainable } from '../../core/shorthand';
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    aspectRatio?: string;
    ref?: Ref<HTMLImageElement>;
}
export declare const BaseImage: React.ForwardRefExoticComponent<Omit<ImageProps, "ref"> & React.RefAttributes<HTMLImageElement>>;
/**
 * Universal Image:
 * 1. English Chaining:
 *    Image("/hero.jpg").circle().size("200px 200px")
 * 2. Natural English phrase:
 *    Image("/hero.jpg, 200px 200px, circle")
 * 3. JSX Component:
 *    <Image src="https://picsum.photos/300/200" alt="Sample" />
 */
export declare function Image(props: ImageProps): ReactElement;
export declare function Image(src?: string, boxSize?: string, id?: string, alt?: string, rounded?: string, position?: string): ReactElement & ImageChainable;
export declare function Image(strings: TemplateStringsArray, ...values: any[]): ReactElement & ImageChainable;
export declare namespace Image {
    var displayName: string;
    var create: (config: ImageShorthandConfig) => React.ReactElement<any, string | React.JSXElementConstructor<any>> & ImageChainable;
}
