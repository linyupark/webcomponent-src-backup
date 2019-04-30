import {Component, Element} from '@stencil/core';

@Component({
  tag: 'nb-timeline',
  styleUrl: 'timeline.h5.styl',
  shadow: true,
})
export class TimelineH5 {
  /**
   * 根元素
   */
  @Element() el: HTMLElement;



  componentDidLoad() {

  }

  render() {
    return (
      <ul class="timeline-container">
        <slot/>
      </ul>
    );
  }
}
