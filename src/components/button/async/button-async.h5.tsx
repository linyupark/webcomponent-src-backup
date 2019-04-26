import { Component, Prop, Event, EventEmitter, Method } from '@stencil/core';

/**
 * 带异步处理的按钮
 */
@Component({
  tag: 'nb-button-async',
  styleUrl: 'button-async.h5.styl',
  shadow: true
})
export class ButtonAsync {

  /**
   * 处理点击
   */
  @Event() tap: EventEmitter;

  /**
   * 宽度
   */
  @Prop() width: number = 690;

  /**
   * 高度
   */
  @Prop() height: number = 88;

  /**
   * 背景
   */
  @Prop() bg: string = '#3E86F7';

  /**
   * 字体色
   */
  @Prop() color: string = '#ffffff';

  /**
   * 圆角
   */
  @Prop() radius: number = 8;

  /**
   * 点击对应的处理已经完成
   */
  @Method()
  async done() {
    this.disable = false;
    this.loading = false;
    return true;
  }

  /**
   * 是否处于loading状态
   */
  @Prop({ mutable: true }) loading: boolean = false;

  /**
   * 是否处于disable状态
   */
  @Prop({ mutable: true }) disable: boolean = false;

  /**
   * 设置按钮样式
   */
  get btnStyles() {
    let border = '1px solid transparent';
    if (this.bg === '#ffffff' && this.color !== '#ffffff') {
      border = `1px solid ${this.color}`;
    }
    return {
      width: `${this.width / 75}rem`,
      height: `${this.height / 75}rem`,
      borderRadius: `${this.radius / 75}rem`,
      background: this.bg,
      color: this.color,
      border
    };
  }

  /**
   * 处理点击
   */
  private onClick() {
    this.loading = true;
    this.tap.emit({
      done: this.done.bind(this)
    });
  }

  render() {
    return (
      <button
        onClick={this.onClick.bind(this)}
        disabled={this.disable}
        class={`btn ${this.loading ? 'loading' : ''}`}
        style={{
          ...this.btnStyles
        }}
      >
        <slot />
      </button>
    );
  }
}
