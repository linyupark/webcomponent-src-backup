import {
  Component,
  Element,
  Prop,
  Event,
  EventEmitter,
  Method,
  State
} from '@stencil/core';

const COUNTDOWN_SESSION = '$_BUTTON_COUNTDOWN';

/**
 * 带异步处理的按钮
 */
@Component({
  tag: 'nb-button-async',
  styleUrl: 'button-async.h5.styl',
  shadow: true
})
export class ButtonAsync {
  @Element() el: HTMLElement;

  /**
   * 处理点击
   */
  @Event() tap: EventEmitter;

  /**
   * 在进行倒计时
   */
  @Event() count: EventEmitter;

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
   * 没有外边框
   */
  @Prop() noBorder: boolean = false;

  /**
   * 如果按钮有倒计时功能该属性设置起始数字
   */
  @Prop() countdown: number = 0;

  /**
   * 倒计时后面追加的单位
   */
  @Prop() countdownUnit: string = 's';

  /**
   * 倒计时显示占位符（在 slot 对应的选择器内容会被加入倒计秒数）
   */
  @Prop() countdownContainer: string = '.countdown';

  /**
   * 点击对应的处理已经完成
   */
  @Method()
  async done() {
    const countdownEl = this.el.querySelector(this.countdownContainer);
    this.disable = false;
    this.loading = false;
    this.countdownDisplay = 0;
    sessionStorage.removeItem(COUNTDOWN_SESSION);
    this.count.emit({
      status: 'finish'
    });
    if (countdownEl) {
      countdownEl.innerHTML = '';
    }
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
   * 显示倒计时数字
   */
  @State() countdownDisplay: number = Number(
    sessionStorage.getItem(COUNTDOWN_SESSION) || 0
  );

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
      border: this.noBorder ? 'none' : border
    };
  }

  /**
   * 倒计时计时器
   */
  private countdownTimer;

  /**
   * 处理倒计时
   */
  private handleCountdown() {
    this.disable = true;
    const countdownEl = this.el.querySelector(this.countdownContainer);
    if (countdownEl) {
      countdownEl.innerHTML = String(this.countdownDisplay) + this.countdownUnit;
    }
    sessionStorage.setItem(COUNTDOWN_SESSION, String(this.countdownDisplay));
    if (this.countdownDisplay > 0) {
      this.countdownDisplay--;
      this.countdownTimer = setTimeout(this.handleCountdown.bind(this), 1000);
    } else {
      clearTimeout(this.countdownTimer);
      this.done();
    }
  }

  /**
   * 处理点击
   */
  private onClick() {
    this.loading = true;
    if (this.countdown > 0) {
      // 包含倒计时
      this.countdownDisplay = this.countdown;
      this.count.emit({
        status: 'start'
      });
      this.handleCountdown();
    }
    this.tap.emit({
      done: this.done.bind(this)
    });
  }

  componentDidLoad() {
    // 如果是刷新后还有未完成的倒计时
    if (this.countdownDisplay > 0 && this.countdown > 0) {
      this.count.emit({
        status: 'start'
      });
      this.handleCountdown();
    }
  }

  render() {
    return (
      <button
        onClick={this.onClick.bind(this)}
        disabled={this.disable || this.loading}
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
