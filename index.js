var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ImageSaveOriginal = /** @class */ (function (_super) {
    __extends(ImageSaveOriginal, _super);
    function ImageSaveOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageSaveOriginal.prototype.saveToAlbum = function (options, success, error) { return cordova(this, "saveToAlbum", {}, arguments); };
    ImageSaveOriginal.pluginName = "ImageSave";
    ImageSaveOriginal.plugin = "cordova-plugin-imagesave";
    ImageSaveOriginal.pluginRef = "cordova.plugins.ImageSave";
    ImageSaveOriginal.repo = "";
    ImageSaveOriginal.install = "ionic cordova plugin add cordova-plugin-imagesave";
    ImageSaveOriginal.installVariables = [];
    ImageSaveOriginal.platforms = ["Android", "iOS"];
    return ImageSaveOriginal;
}(IonicNativePlugin));
var ImageSave = new ImageSaveOriginal();
export { ImageSave };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ltYWdlLXNhdmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBT04sTUFBTSxvQkFBb0IsQ0FBQzs7SUFtQ0csNkJBQWlCOzs7O0lBUzlDLCtCQUFXLGFBQUMsT0FBeUIsRUFBRSxPQUE4QixFQUFFLEtBQTJCOzs7Ozs7OztvQkFwRHBHO0VBMkMrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsdWdpbixcbiAgQ29yZG92YSxcbiAgQ29yZG92YVByb3BlcnR5LFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBcGtEb3dubG9hZE9wdGlvbnMgfSBmcm9tICcuLi9hcGstZG93bmxvYWQnXG5cbi8qKlxuICogQG5hbWUgaW1hZ2Utc2F2ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgaW1hZ2Utc2F2ZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW1hZ2Utc2F2ZSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2Utc2F2ZTogaW1hZ2Utc2F2ZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuaW1hZ2Utc2F2ZS5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ltYWdlU2F2ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWltYWdlc2F2ZScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuSW1hZ2VTYXZlJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWltYWdlc2F2ZScsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEltYWdlU2F2ZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gYXJnMSB7c3RyaW5nfSBTb21lIHBhcmFtIHRvIGNvbmZpZ3VyZSBzb21ldGhpbmdcbiAgICogQHBhcmFtIGFyZzIge251bWJlcn0gQW5vdGhlciBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNhdmVUb0FsYnVtKG9wdGlvbnM6IEltYWdlU2F2ZU9wdGlvbnMsIHN1Y2Nlc3M/OiBTdWNjZXNzQ2FsbGJhY2s8YW55PiwgZXJyb3IgPzogRXJyb3JDYWxsYmFjazxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG5leHBvcnQgdHlwZSBTdWNjZXNzQ2FsbGJhY2s8VD4gPSAocmVzdWx0PzogVCkgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIEVycm9yQ2FsbGJhY2s8VD4gPSAocmVzdWx0PzogVCkgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVNhdmVPcHRpb25zIHtcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgYWxidW1OYW1lOiBzdHJpbmc7XG59XG4iXX0=