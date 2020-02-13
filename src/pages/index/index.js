import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'

@connect(({ counter }) => ({
  counter
}), { add, dec: minus, asyncAdd }
// (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// })
)

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { 
    console.log(this.$router.params)
    console.log(this.props.counter.num)
    this.props.asyncAdd(10,(fnParams)=>(console.log(this.props.counter.num, fnParams)))
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>按钮文案</AtButton>
        <AtButton className='add_btn' onClick={this.props.add}>+</AtButton>
        <AtButton className='dec_btn' onClick={this.props.dec}>-</AtButton>
        <AtButton className='dec_btn' onClick={this.props.asyncAdd}>async</AtButton>
        <View>{this.props.counter.num}22</View>
      </View>
    )
  }
}
