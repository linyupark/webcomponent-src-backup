# nb-button-async



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute             | Description                       | Type      | Default        |
| -------------------- | --------------------- | --------------------------------- | --------- | -------------- |
| `bg`                 | `bg`                  | 背景                                | `string`  | `'#3E86F7'`    |
| `color`              | `color`               | 字体色                               | `string`  | `'#ffffff'`    |
| `countdown`          | `countdown`           | 如果按钮有倒计时功能该属性设置起始数字               | `number`  | `0`            |
| `countdownContainer` | `countdown-container` | 倒计时显示占位符（在 slot 对应的选择器内容会被加入倒计秒数） | `string`  | `'.countdown'` |
| `countdownUnit`      | `countdown-unit`      | 倒计时后面追加的单位                        | `string`  | `'s'`          |
| `disable`            | `disable`             | 是否处于disable状态                     | `boolean` | `false`        |
| `height`             | `height`              | 高度                                | `number`  | `88`           |
| `loading`            | `loading`             | 是否处于loading状态                     | `boolean` | `false`        |
| `noBorder`           | `no-border`           | 没有外边框                             | `boolean` | `false`        |
| `radius`             | `radius`              | 圆角                                | `number`  | `8`            |
| `width`              | `width`               | 宽度                                | `number`  | `690`          |


## Events

| Event   | Description | Type                |
| ------- | ----------- | ------------------- |
| `count` | 在进行倒计时      | `CustomEvent<void>` |
| `tap`   | 处理点击        | `CustomEvent<void>` |


## Methods

### `done() => Promise<boolean>`

点击对应的处理已经完成

#### Returns

Type: `Promise<boolean>`



### `startCountdown() => Promise<boolean>`

手动触发倒计时

#### Returns

Type: `Promise<boolean>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
