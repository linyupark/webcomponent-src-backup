import {Component, Element, Event, EventEmitter, Prop} from '@stencil/core';
import Siema from 'siema';

@Component({
  tag: 'nb-swiper',
  styleUrl: 'swiper.h5.styl',
  shadow: true,
})
export class Carousel {
  /**
   * 根元素
   */
  @Element() el: HTMLElement;

  /**
   * 初始化swiper
   */
  @Event() onInit: EventEmitter;
  /**
   * 当前index发生变化
   */
  @Event() onChange: EventEmitter;

  /**
   * 幻灯片转换持续时间
   */
  @Prop() duration: number = 200;

  /**
   * 动画,类似CSS transition-timing-function。
   */
  @Prop() easing: string = 'ease-out';

  /**
   * 要显示幻灯片的数量
   * object{
   *     800: 2, // 2 items 超过 800px
   *     1240: 3 // 3 items 超过 1240px
   * }
   */
  @Prop() perPage: number | object = 1;

  /**
   * 起始幻灯片的索引
   */
  @Prop() startIndex: number = 0;

  /**
   * 使用拖动和触摸滑动
   */
  @Prop() draggable: boolean = true;

  /**
   * 触摸和鼠标拖动阈值（以px为单位）
   */
  @Prop() threshold: number = 20;

  /**
   * 是否循环
   */
  @Prop() loop: boolean = true;

  /**
   * 是否从右往左
   */
  @Prop() rtl: boolean = false;

  /**
   * 是否允许拖动以移动多个幻灯片
   */
  @Prop() multipleDrag: boolean = true;

  /**
   * 自动播放间隔
   */
  @Prop() autoDelay: number = 0;

  Swiper;

  componentDidLoad() {
    this.Swiper = new Siema({
      selector: this.el.querySelector('div'),
      duration: this.duration,
      easing: this.easing,
      perPage: this.perPage,
      startIndex: this.startIndex,
      draggable: this.draggable,
      multipleDrag: this.multipleDrag,
      threshold: this.threshold,
      loop: this.loop,
      rtl: this.rtl,
      onInit: () => {
        this.onInit.emit({
          swiper: this.Swiper,
        });
      },
      onChange: () => {
        this.onInit.emit({
          swiper: this.Swiper,
        });
      },
    });
    if (this.autoDelay) {
      setInterval(() => {
        this.Swiper.next();
      }, this.autoDelay);
    }
  }

  render() {
    return (
      <div class="swiper-container">
        <slot/>
      </div>
    );
  }
}
