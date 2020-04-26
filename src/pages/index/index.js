import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import cart from '../../asset/cart.png'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
  }

  constructor(props) {
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    Taro.showLoading({
      title: 'loading'
    })
    Taro.request({
      url: 'https://rapapi.renqilai.com/app/mock/64/api/v1/homePage'
    }).then(res => {
      Taro.hideLoading();
      this.setState({
        data: res.data.data
      })
    })
  }
  
  onPullDownRefresh(){
    Taro.stopPullDownRefresh();
    this.refresh();
  }

  render() {
    const { data } = this.state;
    return (
      <View className='index'>
        {
          data.map((item,num) => item.layout === 1 ? <View className='listTop' key={num}>
            <View className='fieldPanel'>
              {
                item.products.map((product, index) => index % 3 === 0 ? <View className='oddProduct' key={index}>
                  <View className='imgWrap'>
                    <Image
                      className='img'
                      mode='scaleToFill'
                      src={product.image}
                    />
                  </View>
                  <View className='name'>
                    {product.name}
                  </View>
                  <View className='price'>
                    ￥{product.price}
                    <Image className='cart' mode='scaleToFill' src={cart} />
                  </View>
                </View> :
                  <View className='evenProduct' key={index}>
                    <View className='imgWrap'>
                      <Image
                        className='img'
                        mode='scaleToFill'
                        src={product.image}
                        lazyLoad
                      />
                    </View>
                    <View className='name'>
                      {product.name}
                    </View>
                    <View className='price'>
                      ￥{product.price}
                      <Image className='cart' mode='scaleToFill' src={cart} />
                    </View>
                  </View>
                )
              }
              <View className='more'>查看更多</View>
            </View>
          </View> : <View className='listScroll' key={num}>
              <ScrollView
                className='scrollview'
                scrollX
                scrollWithAnimation
              >
                {item.products.map((product, index) =>
                  <View className='product' key={index}>
                    <View className='imgWrap'>
                      <Image
                        className='img'
                        mode='scaleToFill'
                        src={product.image}
                        lazyLoad
                      />
                    </View>
                    <View className='name'>
                      {product.name}
                    </View>
                    <View className='price'>￥{product.price}<Text className='line'>￥{product.retailPrice}</Text></View>
                  </View>
                )}
              </ScrollView>
            </View>)
        }
      </View>
    )
  }
}
