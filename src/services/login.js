import request from '../utils/request'
// import config from '../config'

// const {baseUrl} = config;
const LOGIN = '/api/applets/user/login'
const REQUESTCode = '/api/applets/user/password/sms_code/mobile/'
const CHECKCODE = '/api/applets/user/password/validate_sms_code/smsCode/'
const CHANGEPASSWORD = '/api/applets/user/resetPassword/submit'
export function login(data) {
  return request({
    url: LOGIN,
    data,
    method: 'POST'
  })
}

export function requestCode(data) {
  return request({
    url: `${REQUESTCode}${data}`,
    method: 'GET'
  })
}

export function requestCheckCode(data) {
  const {mobile,smsCode} = data;
  return request({
    url: `${CHECKCODE}${smsCode}/mobile/${mobile}`,
    method: 'GET'
  })
}

export function requestChangePassword(data) {
  return request({
    url: CHANGEPASSWORD,
    data,
    method: 'PUT'
  })
}
