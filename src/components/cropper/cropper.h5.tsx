import {
  Component, Element, Method, Prop,
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
  Cropper;
  /**
   * 根
   */
  @Element() el: HTMLElement;

  /**
   * 获取base64图片数据
   * @return {Object}
   */
  @Method()
  async getImgData() {
    if (this.Cropper) {
      let result = this.Cropper.getCroppedCanvas();
      let href = result.toDataURL(this.uploadedImageType);
      return {data: href};
    }
    return {data: ''};
  }

  /**
   * 上传图片
   * @param {File} file 图片文件
   */
  @Method()
  async changeCropper(file: File) {
    let URL = window.URL;
    this.image.src = URL.createObjectURL(file);
    this.uploadedImageType = file.type;
    this.Cropper.destroy();
    this.Cropper = new Cropper(this.image, this.options);
  }

  /**
   * 裁切比例
   */
  @Prop() aspectRatio: number = 1 / 1;
  /**
   * div最小宽度
   */
  @Prop() minContainerWidth: number = 375;
  /**
   * div最小高度
   */
  @Prop() minContainerHeight: number = 450;
  /**
   * 允许通过拖动调整裁剪框的大小
   */
  @Prop() cropBoxResizable: boolean = false;

  options: any;
  uploadedImageType: string;
  image: HTMLImageElement;

  componentDidLoad() {
    const container = this.el.shadowRoot.querySelector('.img-container');
    this.image = container.querySelector('.image');
    this.options = {
      aspectRatio: this.aspectRatio,
      minContainerWidth: this.minContainerWidth,
      minContainerHeight: this.minContainerHeight,
      cropBoxResizable: this.cropBoxResizable,
      zoomable: false,
      scalable: false,
    };
    this.Cropper = new Cropper(this.image, this.options);
  }

  render() {
    return (
      <div class="img-container">
        <img class="hide image" src="" alt="Picture"/>
        <slot/>
      </div>
    );
  }
}
