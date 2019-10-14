/*
 * @Author: Chris
 * @Date: 2019-07-01 17:52:01
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-14 23:36:19
 * @Descripttion: **
 */
import Taro from '@tarojs/taro';

export default {
  namespace: 'index',
  state: {

  },

  effects: {},

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};