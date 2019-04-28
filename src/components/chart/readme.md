# nb-chart



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute      | Description                  | Type                   | Default                            |
| ------------ | -------------- | ---------------------------- | ---------------------- | ---------------------------------- |
| `chartData`  | --             | 数据                           | `any[]`                | `undefined`                        |
| `height`     | `height`       | canvas高度                     | `number`               | `400`                              |
| `legendSort` | `legend-sort`  | 图例显示键名                       | `string`               | `undefined`                        |
| `padding`    | --             | canvas padding               | `(string \| number)[]` | `['auto', 'auto', 'auto', 'auto']` |
| `pieLabel`   | `pie-label`    | 是否显示pieLabel                 | `boolean`              | `false`                            |
| `position`   | `position`     | x轴与y轴键名，example:'date*value' | `string`               | `undefined`                        |
| `type`       | `type`         | 图表类型                         | `"line" \| "pie"`      | `undefined`                        |
| `width`      | `width`        | canvas宽度                     | `number`               | `400`                              |
| `xTickCount` | `x-tick-count` | x轴刻度个数                       | `number`               | `6`                                |
| `xcolor`     | --             | 数据块颜色列表                      | `string[]`             | `undefined`                        |


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

渲染图表

#### Returns

Type: `Promise<void>`



### `repaint() => Promise<any>`

当修改了配置项时可以重新绘制图表。

#### Returns

Type: `Promise<any>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
