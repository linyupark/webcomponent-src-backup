import {Component, Element, Prop} from '@stencil/core';

@Component({
  tag: 'nb-timeline-item',
  styleUrl: 'timeline-item.h5.styl',
  shadow: true,
})
export class TimelineItemH5 {
  /**
   * 根元素
   */
  @Element() el: HTMLElement;

  /**
   * 自定义icon类
   */
  @Prop() icon: string;

  /**
   * 时间线节点颜色,暂时只支持rgb格式
   */
  @Prop() color: string = '59,152,252';

  /**
   * 是否显示节点阴影
   */
  @Prop() shadow: boolean = true;

  /**
   * 是否显示时间线条
   */
  @Prop() tail: boolean = true;


  componentDidLoad() {
  }

  render() {
    return (
      <li class="timeline-item-container">
        {this.tail && <div class="item-tail"></div>}
        <div class="item-node"
             style={{
               backgroundColor: `rgb(${this.color})`,
               boxShadow: this.shadow ? `0 0 2px 3px rgba(${this.color},0.4)` : 'none',
             }}>
          {this.icon && <i class={this.icon}></i>}
        </div>
        <div class="item-info">
          <slot/>
        </div>
      </li>
    );
  }
}
