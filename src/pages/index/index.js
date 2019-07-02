import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
// import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
@connect(({ common }) => ({
  // loading: true,
  ...common,
}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { 
    // console.log(this.$router.params)
    // console.log(this.props.number)
    // console.log(this.props.dispatch({
    //   type:'common/save',
    //   payload: '123'
    // }))
  }

  change=(i)=>{
    const {dispatch,number} = this.props
    const newNumber = number+i
    dispatch({
      type:'common/save',
      payload: {
        number:newNumber
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary' onClick={this.msg}>按钮文案</AtButton>
        <AtButton className='add_btn' onClick={()=>this.change(+1)}>+</AtButton>
        <AtButton className='dec_btn' onClick={()=>this.change(-1)}>-</AtButton>
        {/* <AtButton className='dec_btn' onClick={this.props.asyncAdd}>async</AtButton> */}
        <View>{this.props.number}eee</View>
      </View>
    )
  }
}
