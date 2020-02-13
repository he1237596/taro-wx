/*
 * @Author: Chris
 * @Date: 2020-02-13 11:40:54
 * @LastEditors  : Chris
 * @LastEditTime : 2020-02-13 11:59:32
 * @Descripttion: **
 */
// src/actions/counter.js
import {
  ADD,
  MINUS
} from '../constants/counter'

export const add = (data) => {
  return {
    type: ADD,
    data
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的 action
export function asyncAdd (data = 0, fn) {
  return dispatch => {
    setTimeout(() => {
      dispatch(add(data))
      if(fn){
        fn('这里可以写入请回结果');
      }
    }, 2000)
  }
}
