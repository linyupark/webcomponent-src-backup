# nb-cropper



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description | Type      | Default     |
| -------------------- | ---------------------- | ----------- | --------- | ----------- |
| `aspectRatio`        | `aspect-ratio`         |             | `number`  | `15`        |
| `cropBoxResizable`   | `crop-box-resizable`   |             | `boolean` | `false`     |
| `file`               | `file`                 |             | `string`  | `undefined` |
| `inputImageRef`      | `input-image-ref`      |             | `string`  | `undefined` |
| `minContainerHeight` | `min-container-height` |             | `number`  | `450`       |
| `minContainerWidth`  | `min-container-width`  |             | `number`  | `375`       |
| `naturalHeight`      | `natural-height`       |             | `number`  | `1`         |
| `naturalWidth`       | `natural-width`        |             | `number`  | `1`         |
| `scalable`           | `scalable`             |             | `boolean` | `false`     |
| `zoomable`           | `zoomable`             |             | `boolean` | `false`     |


## Events

| Event   | Description | Type                |
| ------- | ----------- | ------------------- |
| `ready` |             | `CustomEvent<void>` |


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
