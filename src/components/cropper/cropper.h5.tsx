import {
  Component, Element, Event, EventEmitter, Method, Prop,
  // Prop,
  // State,
  // Event,
  // EventEmitter,
  // Method,
  // Watch
} from '@stencil/core';

import Cropper from './cropper.esm';

/**
 * 图片裁切
 */
@Component({
  tag: 'nb-cropper',
  styleUrl: 'cropper.h5.styl',
  shadow: true,
})
export class NbCropper {
  private Cropper;
  @Element() el: HTMLElement;
  @Event() ready: EventEmitter;

  /**
   * 获取base64图片数据
   * @return {Object}
   */
  @Method()
  async getImgData() {
    if (this.Cropper) {
      let result = this.Cropper.getCroppedCanvas();
      let href = result.toDataURL(this.uploadedImageType);
      return {data:href}
    }
    return {data:''}
  }

  /**
   * 上传图片
   * @param {File} file 图片文件
   */
  @Method()
  async changeCropper(file:File) {
    let URL = window.URL;
    this.image.src = URL.createObjectURL(file);
    this.uploadedImageType = file.type;
    this.Cropper.destroy();
    this.Cropper = new Cropper(this.image, this.options);
  }

  @Prop() aspectRatio: number = 15;
  @Prop() minContainerWidth: number = 375;
  @Prop() minContainerHeight: number = 450;
  @Prop() naturalWidth: number = 1;
  @Prop() naturalHeight: number = 1;
  @Prop() inputImageRef: string;
  @Prop() file: string;
  @Prop() cropBoxResizable: boolean=false;
  @Prop() zoomable: boolean=false;
  @Prop() scalable: boolean=false;
  private image: HTMLImageElement;
  private options: any;
  uploadedImageType: string;

  componentDidLoad() {
    const container = this.el.shadowRoot.querySelector('.img-container');
    this.image = container.querySelector('#heihei');
    this.options = {
      aspectRatio: this.naturalWidth / this.naturalHeight,
      minContainerWidth: this.minContainerWidth,
      minContainerHeight: this.minContainerHeight,
      cropBoxResizable:this.cropBoxResizable,
      zoomable:this.zoomable,
      scalable:this.scalable,
    };
    this.Cropper = new Cropper(this.image, this.options);
    this.ready.emit({
      cropper: this.Cropper,
    });
  }

  render() {
    return (
      <div class="img-container">
        <img id="heihei" class="hide" src="" alt="Picture"/>
        <slot/>
      </div>
    );
  }
}
