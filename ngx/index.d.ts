import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name image-save
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { image-save } from '@ionic-native/image-save';
 *
 *
 * constructor(private image-save: image-save) { }
 *
 * ...
 *
 *
 * this.image-save.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class ImageSave extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    saveToAlbum(options: string, success?: SuccessCallback<any>, error?: ErrorCallback<any>): Promise<any>;
}
export declare type SuccessCallback<T> = (result?: T) => void;
export declare type ErrorCallback<T> = (result?: T) => void;
export interface ImageSaveOptions {
    imageUrl: string;
    albumName: string;
}
