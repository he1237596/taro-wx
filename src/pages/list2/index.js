/*
 * @Description: 下拉加载也可以使用onReachBottom，设置好onReachBottomDistance也很爽，顶部有固定定位的时候，考虑使用固定定位，再下拉刷新的时候改为相对定位，或者根据滚动距离来设置其有标准流变相对定位
 * @Author: Chris
 * @Date: 2019-07-02 11:19:21
 * @LastEditTime: 2019-12-17 20:20:54
 * @LastEditors: Chris
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
const moment = require('moment');
import './index.scss'
const result = require('./data.json')

export default class List extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isLoading: false,
      list: [],
      page: 1,
      pageSize: 10,
      noMore: false,
    }
  }

  config = {
    navigationBarTitleText: '懒加载',
    enablePullDownRefresh: true,
  }

  componentDidMount() {
    this.getList();
  }

  onPullDownRefresh() {
    Taro.stopPullDownRefresh();
    console.log('下拉刷新')
  }

  onPageScroll(e) {
    console.log(e.scrollTop)
    this.setState({
      absolute: e.scrollTop = 0 ? true : false
    })
  }
  /*
   *@description:要确保首屏会滚动才能触发，所以列表元素块的高度需要考虑
   *@date: 2019-07-18 11:00:28
  */
  onReachBottom() {
    this.getMore();
  }

  getMore = () => {
    const { noMore, isLoading } = this.state;
    if (noMore || isLoading) {
      return false;
    }

    this.getList()
  }

  getList = () => {
    if (this.timer) {
      return;
    }
    this.setState({
      isLoading: true,
    })
    // const { dispatchGetHistoryList } = this.props
    const { list, page, pageSize } = this.state;
    const { groupId } = this.$router.params;
    const params = {
      page,
      pageSize,
      groupId
    }
    // 模拟请求
    this.timer = setTimeout(() => {
      this.setState({
        list: [...list, ...result.data.list],
        page: page + 1,
        isLoading: false
      })
      // 数据初次查询为0，数据不能被页码数除尽，或者数据等于查到的total数，都是没有数据了
      if ([...list, ...result.data.list].length === 0 || [...list, ...result.data.list].length % pageSize !== 0 || [...list, ...result.data.list].length === 50) {
        this.setState({
          noMore: true,
        })
      }
      clearTimeout(this.timer);
      this.timer = null;
    }, 1000)
  }

  render() {
    const { noMore, list, isLoading, absolute } = this.state;
    console.log(absolute)
    return (
      <View className='main'>
        <View className={`header ${absolute ? 'absolute' : ''}`}>fixedfixedfixedfixed</View>
        <View
          className='scroll_box'
        >

          {list.length !== 0 && <View className='content'>
            {
              list.map(item => (
                <View key={item.id} className='list_item'>
                  <View className='item_wrap'>
                    <View className='item_content'>
                      <View className='item_title'>{item.content}</View>
                    </View>
                  </View>
                </View>
              ))
            }
          </View>}
          {isLoading && <View className='loading_more'>努力加载中...</View>}
          {!isLoading && noMore && <View className='nomore'>{list.length > 0 ? '没有更多了' : '暂无数据'}</View>}
        </View>
      </View>
    )
  }
}
