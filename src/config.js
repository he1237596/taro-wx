/*
 * @Description: 项目开发配置
 * @Author: Chris
 * @Date: 2019-07-02 10:50:04
 * @LastEditTime: 2019-07-03 20:24:30
 * @LastEditors: Chris
 */

const ENV = 'dev'
const Config = {
  dev: {
    // 云MES服务的URL
    baseUrl: 'http://120.79.9.183:60002',
    // baseUrl: 'http://192.168.31.186:60002',
    boxClouldUrl: 'http://120.79.9.183:60002', // 蘑菇云的URL
    imageBaseUrl: 'https://images.mogulinker.com', // 系统图片的URL
    mesCloudUrl: 'http://134.175.225.251:7071', //
    // U版请求加密
    userPublicKey:
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgTj64J845YrG9N7PhKXBk5ED7Mh6W7vBrBUKKNPDAk0FEOgwpZubsqImjwK8fUHwPrZfi1vtQ2DyeT2TjISM00jrRuXv+fUWNuHVveJkWgsP7/H0ssbkcSK/lPdOr78vb807iQ9YpvQ0t7OklJLZL/sQ/enMtLNbF/wphBEiNmwIDAQAB',
    userPublicKeyId: '7edf4d87f2c4464d9cc8ad714906e379',
    groupMonitorUrl: 'http://mesconf-test.mogulinker.com', // 组态图服务URL
    // groupMonitorUrl: 'http://127.0.0.1:5500', // 组态图服务URL
    webServerUrl: 'http://mes-test.mogulinker.com', // 云MES web服务网址
    // webServerUrl: 'http://127.0.0.1:8000', // 云MES web服务网址
  },
  pro: {

  }
}

export default Config[ENV]
