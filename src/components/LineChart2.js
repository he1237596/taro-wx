/*
 * @Author: Chris
 * @Date: 2019-08-13 09:40:55
 * @LastEditors: Chris
 * @LastEditTime: 2019-12-05 16:42:26
 * @Descripttion: 完全自定义lineChart
 */
import Taro, { Component } from "@tarojs/taro";
import * as echarts from "./ec-canvas/echarts";

export default class LineChart extends Component {
  config = {
    usingComponents: {
      "ec-canvas": "./ec-canvas/ec-canvas"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      ec: {
        lazyLoad: true,
        disableTouch: true
      }
    };
  }

  componentDidMount() {
    const { enableTouch } = this.props;
    if(enableTouch){
      this.setState({
        ec: {
          lazyLoad: true,
          disableTouch: false
        }
      })
    }
  }
  
  refresh(option) {
    const { enableTouch } = this.props;
    this.Chart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      chart.setOption(option);
      if(enableTouch){
        Taro.hideLoading()
      }
      this.example = chart;
      return chart;
    })
  }

  update(option) {
    // setChartData(this.Chart.chart, data)
    this.Chart.chart.setOption(option);
  }

  resize() {
    this.example.resize()
  }

  refChart = node => (this.Chart = node);

  render() {
    return (
      <ec-canvas
        ref={this.refChart}
        canvas-id='mychart-area'
        ec={this.state.ec}
      />
    );
  }
}