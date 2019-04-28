import {Component, Element, Event, EventEmitter, Prop} from '@stencil/core';
import Siema from 'siema';

@Component({
  tag: 'nb-swiper',
  styleUrl: 'swiper.h5.styl',
  shadow: true,
})
export class Carousel {
  @Element() el: HTMLElement;
  private Swiper;
  @Event() onInit: EventEmitter;
  @Event() onChange: EventEmitter;
  @Prop() box: string;
  @Prop() duration: number = 200;
  @Prop() easing: string = 'ease-out';
  @Prop() perPage: number = 1;
  @Prop() startIndex: number = 0;
  @Prop() draggable: boolean = true;
  @Prop() threshold: number = 20;
  @Prop() loop: boolean = true;
  @Prop() rtl: boolean = false;
  @Prop() multipleDrag: boolean = true;


  componentDidLoad() {
    this.Swiper = new Siema({
      selector: this.el.querySelector(this.box),
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
  }

  render() {
    return (
      <div id='swiper-container'>
        <slot/>
      </div>
    );
  }
}
