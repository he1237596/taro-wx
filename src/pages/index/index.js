/*
 * @Author: Chris
 * @Date: 2019-07-01 16:25:24
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-14 23:35:53
 * @Descripttion: **
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import './index.scss'

@connect(({ common }) => ({
  // loading: true,
  ...common,
}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() {

  }

  change = (i) => {
    const { dispatch, number } = this.props
    const newNumber = number + i
    dispatch({
      type: 'common/save',
      payload: {
        number: newNumber
      }
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>dev+redux测试</Text>
        <AtButton className='add_btn' onClick={() => this.change(+1)}>+</AtButton>
        <AtButton className='dec_btn' onClick={() => this.change(-1)}>-</AtButton>
        {/* <AtButton className='dec_btn' onClick={this.props.asyncAdd}>async</AtButton> */}
        <View style={{ textAlign: 'center' }}>{this.props.number}</View>
      </View>
    )
  }
}
