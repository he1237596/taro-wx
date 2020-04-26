/*
 * @Author: Chris
 * @Date: 2019-07-01 16:25:24
 * @LastEditors: Chris
 * @LastEditTime: 2020-03-09 13:08:26
 * @Descripttion: **
 */
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import 'taro-ui/dist/style/index.scss'

// import configStore from './store'
import Index from './pages/index'
import dva from './utils/dva'
import models from './models';

import './app.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

// const store = configStore()

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      // 'pages/login/index',
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#131A24',//头背景
      navigationBarTitleText: 'MES',
      navigationBarTextStyle: 'white',
    },
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
