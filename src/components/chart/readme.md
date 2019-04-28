# nb-chart



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute      | Description | Type                   | Default                            |
| ------------ | -------------- | ----------- | ---------------------- | ---------------------------------- |
| `chartData`  | --             |             | `any[]`                | `undefined`                        |
| `height`     | `height`       |             | `number`               | `400`                              |
| `legend`     | `legend`       |             | `boolean`              | `false`                            |
| `legendSort` | `legend-sort`  |             | `string`               | `undefined`                        |
| `padding`    | --             |             | `(string \| number)[]` | `['auto', 'auto', 'auto', 'auto']` |
| `pieLabel`   | `pie-label`    |             | `boolean`              | `false`                            |
| `position`   | `position`     |             | `string`               | `undefined`                        |
| `type`       | `type`         |             | `string`               | `undefined`                        |
| `width`      | `width`        |             | `number`               | `400`                              |
| `xTickCount` | `x-tick-count` |             | `number`               | `6`                                |
| `xcolor`     | --             |             | `string[]`             | `undefined`                        |


## Methods

### `changeData(data: any) => Promise<void>`

改变数据，同时图表刷新

#### Parameters

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| `data` | `any` | Array 数据源   |

#### Returns

Type: `Promise<void>`



### `clear() => Promise<any>`

清除图表内容

#### Returns

Type: `Promise<any>`



### `getInstance() => Promise<any>`

返回chart实例方便自定义配置，具体配置https://www.yuque.com/antv/f2

#### Returns

Type: `Promise<any>`



### `renderChart() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `repaint() => Promise<void>`

当修改了 guide、geometry 的配置项时可以重新绘制图表。

#### Returns

Type: `Promise<void>`



### `repaintChart() => Promise<any>`



#### Returns

Type: `Promise<any>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
