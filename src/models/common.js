import Taro from '@tarojs/taro';

export default {
  namespace: 'common',
  state: {
    number:0
    // access_token: Taro.getStorageSync('access_token'),
    // mobile: Taro.getStorageSync('user_info')
    //   ? Taro.getStorageSync('user_info').mobile
    //   : '',
    // nickname: Taro.getStorageSync('user_info')
    //   ? Taro.getStorageSync('user_info').nickname
    //   : '',
    // new_user: Taro.getStorageSync('user_info')
    //   ? Taro.getStorageSync('user_info').new_user
    //   : '',
    // is_has_buy_card: Taro.getStorageSync('user_info')
    //   ? Taro.getStorageSync('user_info').is_has_buy_card
    //   : '',
    // erroMessage: Taro.getStorageSync('user_info')
    //   ? Taro.getStorageSync('user_info').erroMessage
    //   : '',
  },

  effects: {
    // *getList({ payload },{ select, call, put }){
    //   const number = yield select(state => state.number);
    // }
  },

  reducers: {
    save(state, { payload }) {
      console.log(state,payload)
      return { ...state, ...payload };
    },
  },
};