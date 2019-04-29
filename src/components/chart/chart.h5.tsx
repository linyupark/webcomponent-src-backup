import {
  Component, Element, Prop, Method,
} from '@stencil/core';

import F2 from '@antv/f2';
import PieLabel from '@antv/f2/lib/plugin/pie-label';

/**
 * 图表
 */
@Component({
  tag: 'nb-chart',
  styleUrl: 'chart.h5.styl',
  shadow: true,
})
export class NbChart {
  Util = F2.Util;
  G = F2.G;
  Group = F2.G.Group;
  /**
   * 根
   */
  @Element() el: HTMLElement;

  /**
   * canvas宽度
   */
  @Prop() width: number = 400;

  /**
   * canvas高度
   */
  @Prop() height: number = 400;

  /**
   * 数据
   */
  @Prop() chartData: Array<any>;

  /**
   * 图表类型
   */
  @Prop() type: 'pie' | 'line';

  /**
   * x轴与y轴键名，example:'date*value'
   */
  @Prop() position: string;

  /**
   * canvas padding
   */
  @Prop() padding: Array<string | number> = ['auto', 'auto', 'auto', 'auto'];

  /**
   * 是否显示pieLabel
   */
  @Prop() pieLabel: boolean = false;

  /**
   * x轴刻度个数
   */
  @Prop() xTickCount: number = 6;

  /**
   * 图例显示键名
   */
  @Prop() legendSort: string;

  /**
   * 数据块颜色列表
   */
  @Prop() xcolor: Array<string>;

  chart: any;
  canvas;

  /**
   * type与render函数映射关系
   */
  chartRenderMap = () => {
    return {
      // 'histogram': this.histogramRender,
      'line': this.lineRender,
      'pie': this.pieRender,
    };
  };

  px2rem() {

  }

  /**
   * 插件列表
   */
  get plugins() {
    let pluginList = [];
    if (this.pieLabel) {
      pluginList.push(PieLabel);
    }
    return pluginList;
  }

  /**
   * 当修改了配置项时可以重新绘制图表。
   */
  @Method()
  async repaint() {
    return this.chart.repaint();
  }

  /**
   * 清除图表内容
   */
  @Method()
  async clear() {
    return this.chart.clear();
  }

  /**
   * 改变数据，同时图表刷新
   * @param data Array 数据源
   */
  @Method()
  async changeData(data) {
    this.chart.changeData(data);
  }

  /**
   * 渲染图表
   */
  @Method()
  async renderChart() {
    this.chart = new F2.Chart({
      el: this.canvas,
      width: this.width,
      height: this.height,
      pixelRatio: window.devicePixelRatio,
      plugins: this.plugins,
      padding: this.padding,
    });
    this.chartRenderMap()[this.type]();
    this.chart.render();
  }

  /**
   * 返回chart实例方便自定义配置，具体配置https://www.yuque.com/antv/f2
   */
  @Method()
  async getInstance() {
    return this.chart;
  }

  /**
   * 设置饼图label
   */
  setPieLabel() {
    this.chart.pieLabel({
      inflectionOffset: 70,
      anchorOffset: 10,
      anchorStyle: {
        r: 0,
      },

      label1: (data) => {
        return {
          text: data[this.legendSort],
          fill: '#8C8C8C',
        };
      },
      label2: (data) => {
        return {
          text: data[this.position],
          fill: '#808080',
          fontWeight: 'bold',
        };
      },
    });
  }

  /**
   * 设置图例
   */
  setLegend() {
    this.chart.legend({
      position: 'right',
    });
  }

  /**
   * 饼图渲染
   */
  pieRender = () => {
    this.chartData.forEach((value) => {
      value['a'] = 1;
    });
    this.chart.source(this.chartData);
    this.chart.legend(false);
    this.chart.axis(false);
    this.chart.tooltip(false);
    this.chart.coord('polar', {
      transposed: true,
      innerRadius: 0.7,
      radius: 0.4,
    });
    this.chart.interval().position('a*' + this.position).color(this.legendSort, this.xcolor).adjust('stack').style({
      lineWidth: 1, stroke: '#fff',
      lineJoin: 'round',
      lineCap: 'round',
    });
    this.pieLabel && this.setPieLabel();
    this.legendSort && this.setLegend();
  };
  /**
   * 折线图渲染
   */
  lineRender = () => {
    let sourceConfig = {};
    let positionKeyList = this.position.split('*');
    let x = positionKeyList[0];
    let y = positionKeyList[1];
    sourceConfig[x] = {
      type: 'timeCat',
      range: [0, 1],
      tickCount: this.xTickCount,
    };
    sourceConfig[y] = {
      tickCount: 5,
      min: 0,
    };
    this.chart.source(this.chartData, sourceConfig);
    this.chart.tooltip({
      custom: true,
      showXTip: true,
      showYTip: true,
      snap: true,
      crosshairsType: 'xy',
      crosshairsStyle: {
        lineDash: [2],
      },
    });
    this.chart.axis(x, {
      label: function label(value, index, total) {
        let textCfg = {};
        if (value.length > 6) {
          textCfg = {
            rotate: -Math.PI / 4,
            textAlign: 'end',
            textBaseline: 'middle',
          };

        } else {
          if (index === 0) {
            textCfg = {textAlign: 'left'};
          } else if (index === total - 1) {
            textCfg = {textAlign: 'right'};
          }
        }
        return textCfg;
      },
    });
    this.chart.line().position(this.position).color(this.xcolor);
  };
  // histogramRender = () => {
  //   this.chart.source(this.data);
  //   this.chart.interval().position(this.position).color('genre');
  //   // this.chart.render();
  // };

  componentDidLoad() {
    this.canvas = this.el.shadowRoot.querySelector('#chart');
  }

  render() {
    return (
      <canvas id="chart"></canvas>
    );
  }
}
