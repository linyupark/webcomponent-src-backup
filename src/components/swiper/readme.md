# nb-swiper



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                            | Type               | Default      |
| -------------- | --------------- | -------------------------------------------------------------------------------------- | ------------------ | ------------ |
| `autoDelay`    | `auto-delay`    | 自动播放间隔                                                                                 | `number`           | `0`          |
| `draggable`    | `draggable`     | 使用拖动和触摸滑动                                                                              | `boolean`          | `true`       |
| `duration`     | `duration`      | 幻灯片转换持续时间                                                                              | `number`           | `200`        |
| `easing`       | `easing`        | 动画,类似CSS transition-timing-function。                                                   | `string`           | `'ease-out'` |
| `loop`         | `loop`          | 是否循环                                                                                   | `boolean`          | `true`       |
| `multipleDrag` | `multiple-drag` | 是否允许拖动以移动多个幻灯片                                                                         | `boolean`          | `true`       |
| `perPage`      | `per-page`      | 要显示幻灯片的数量 object{      800: 2, // 2 items 超过 800px      1240: 3 // 3 items 超过 1240px } | `number \| object` | `1`          |
| `rtl`          | `rtl`           | 是否从右往左                                                                                 | `boolean`          | `false`      |
| `startIndex`   | `start-index`   | 起始幻灯片的索引                                                                               | `number`           | `0`          |
| `threshold`    | `threshold`     | 触摸和鼠标拖动阈值（以px为单位）                                                                      | `number`           | `20`         |


## Events

| Event      | Description | Type                |
| ---------- | ----------- | ------------------- |
| `onChange` | 当前index发生变化 | `CustomEvent<void>` |
| `onInit`   | 初始化swiper   | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
