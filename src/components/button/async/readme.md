# nb-button-async



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute             | Description                       | Type      | Default        |
| -------------------- | --------------------- | --------------------------------- | --------- | -------------- |
| `bg`                 | `bg`                  | 背景                                | `string`  | `'#3E86F7'`    |
| `color`              | `color`               | 字体色                               | `string`  | `'#ffffff'`    |
| `countdown`          | `countdown`           | 如果按钮有倒计时功能该属性设置起始数字               | `number`  | `0`            |
| `countdownContainer` | `countdown-container` | 倒计时显示占位符（在 slot 对应的选择器内容会被加入倒计秒数） | `string`  | `'.countdown'` |
| `countdownHtml`      | `countdown-html`      | 倒计时显示内容                           | `string`  | `'倒计时%n秒'`     |
| `countdownId`        | `countdown-id`        | 如果是有多个倒计时的需要设置唯一id                | `number`  | `0`            |
| `countdownOrigin`    | `countdown-origin`    | 倒计时完毕后恢复内容                        | `string`  | `'.origin'`    |
| `countdownReplace`   | `countdown-replace`   | 替换 ？？变为倒计时                        | `string`  | `'%n'`         |
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



### `handleClick() => Promise<boolean>`

处理点击

#### Returns

Type: `Promise<boolean>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
