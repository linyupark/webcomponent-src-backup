import { Component, Prop, Event, EventEmitter } from '@stencil/core';

/**
 * 头部h5导航组件
 */
@Component({
  tag: 'nb-header-nav',
  styleUrl: 'nav.h5.styl',
  shadow: true
})
export class HeaderNav {
  /**
   * 处理点击事件
   */
  @Event() tap: EventEmitter;

  /**
   * 设置样式合集
   */
  @Prop() styles: any = {};

  /**
   * 有下划线
   */
  // @Prop() line: boolean = false;

  /**
   * 标题显示位置
   */
  @Prop() titlePosition: 'left' | 'center' = 'center';

  /**
   * 左右间距
   */
  @Prop() space: number = 30;

  /**
   * 是否固定悬浮在顶部 z-index 值
   */
  @Prop() fixed: number = 99;

  /**
   * 是否显示
   */
  @Prop() visible: boolean = true;

  /**
   * 实际给容器的定制样式
   */
  get containerStyles() {
    // 默认样式
    const defaultStyles = {
      height: 88,
      background: '#ffffff',
      color: '#272727'
    };
    // 转换单位
    const height = `${(this.styles.height || 88) / 75}rem`;
    const width = `${(750 - this.space * 2) / 75}rem`;
    const padding = `0 ${this.space / 75}rem`;
    const position = this.fixed > 0 ? 'fixed' : 'relative';
    const zIndex = this.fixed;
    return {
      ...defaultStyles,
      ...this.styles,
      padding,
      width,
      height,
      position,
      zIndex,
    };
  }

  /**
   * 处理点击
   * @param way 点击方位
   */
  private handleClick(position) {
    this.tap.emit({
      position
    });
  }

  render() {
    return (
      <div
        class="header"
        style={{
          ...this.containerStyles
        }}
      >
        {/* 当标题位置固定在左侧的时干掉左侧插槽 */}
        {this.titlePosition === 'center' && (
          <div class="left" onClick={this.handleClick.bind(this, 'left')}>
            <slot name="left" />
          </div>
        )}
        <div class={`title ${this.titlePosition}`}>
          <slot name="title" />
        </div>
        <div class="right" onClick={this.handleClick.bind(this, 'right')}>
          <slot name="right" />
        </div>
      </div>
    );
  }
}
