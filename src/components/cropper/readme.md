# nb-cropper



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description    | Type      | Default |
| -------------------- | ---------------------- | -------------- | --------- | ------- |
| `aspectRatio`        | `aspect-ratio`         | 裁切比例           | `number`  | `1 / 1` |
| `cropBoxResizable`   | `crop-box-resizable`   | 允许通过拖动调整裁剪框的大小 | `boolean` | `false` |
| `minContainerHeight` | `min-container-height` | div最小高度        | `number`  | `450`   |
| `minContainerWidth`  | `min-container-width`  | div最小宽度        | `number`  | `375`   |


## Methods

### `changeCropper(file: File) => Promise<void>`

上传图片

#### Parameters

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| `file` | `File` | 图片文件        |

#### Returns

Type: `Promise<void>`



### `getImgData() => Promise<{ data: any; }>`

获取base64图片数据

#### Returns

Type: `Promise<{ data: any; }>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
