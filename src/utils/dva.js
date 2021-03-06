/*
 * @Author: Chris
 * @Date: 2019-07-01 17:31:32
 * @LastEditors: Chris
 * @LastEditTime: 2019-07-01 17:31:32
 * @Descripttion: **
 */
import Taro from '@tarojs/taro';
import { create } from 'dva-core';
import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;

function createApp(opt) {
  // redux日志
  opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading({}));

  if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
    global = {};
  }

  if (!global.registered) opt.models.forEach(model => app.model(model));
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
}