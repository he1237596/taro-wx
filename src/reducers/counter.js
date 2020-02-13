/*
 * @Author: Chris
 * @Date: 2020-02-13 11:40:54
 * @LastEditors  : Chris
 * @LastEditTime : 2020-02-13 11:58:16
 * @Descripttion: **
 */
import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
  num: 0
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: action.data? (state.num + action.data) : state.num + 1
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      }
    default:
      return state
  }
}