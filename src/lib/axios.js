/*
 * @Author: monster.huangwei
 * @Date: 2018-11-04 15:17:03
 * @Last Modified by: monster.huangwei
 * @Last Modified time: 2018-11-12 09:26:27
 */

import axios from 'axios'
import QS from 'qs'
import baseURL from '@/config'
import interceptors from '@/interceptors'
import { Tools } from '@/lib/tools'
import  toast  from '@/lib/toast'

const axiosIns = axios.create({
  baseURL: baseURL,
  timeout: 20000
})

axiosIns.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

/* 请求拦截器 */
axiosIns.interceptors.request.use(
  config => {
    console.log(config)
    interceptors.request(config, true)
    return config
  }, error => {
    interceptors.request(error, false)
    return Promise.reject(error)
  })

/* 响应拦截器 */
axiosIns.interceptors.response.use(
  response => {
    interceptors.response(response, true)
    return response
  }, error => {
    interceptors.response(error, false)
    return Promise.reject(error)
  })

/**
 * axios post 请求
 * @param url 请求的地址
 * @param json 请求的数据
 * @param options 请求头的属性
 * @return {Promise}
 */
export function AXIOS_POST ({ url, json = {}, options = {} }) {
  let jsonData = options.host === 'setHeaders'
   ? JSON.stringify(json) : QS.stringify(json);
  return new Promise((resolve, reject) => {
    axiosIns.post(url, jsonData, options)
      .then(data => successCallback(data, resolve, reject, options))
      .catch(data => failCallback(data, options))
  })
}

/**
 * axios get 请求
 * @param url 请求的地址
 * @param json 请求的数据
 * @param options 请求头的属性
 * @return {Promise}
 */
export function AXIOS_GET ({ url, json = {}, options = {} }) {
  return new Promise((resolve, reject) => {
    axiosIns.post(url, Object.assign({ params: json }), options)
      .then(data => successCallback(data, resolve, reject, options))
      .catch(data => failCallback(data, options))
  })
}

const successCallback = (data, resolve, reject, options) => {
  console.log('data', data.data)
  let isToast = options.isToast === undefined ? true : options.isToast
  let returnData
  if (!Tools.check.isEmpty(data) && !Tools.check.isEmpty(data.data)) {
    returnData = data.data;
    if (returnData.errCode === '0000') {
      resolve(returnData)
    } else {
      if (isToast) {
        console.log(returnData.errorInfo)
      }
      reject(returnData)
    }
  }
}

const failCallback = (data, options) => {
  console.log(JSON.parse(JSON.stringify(data)))
  let responseData = JSON.parse(JSON.stringify(data)).response
  let errorInfo = data + ''
  let status = responseData ? responseData.status : 0
  if (errorInfo.search('timeout') !== -1) {
    toast('超时了')
    return false
  }
  switch (status) {
    case 400:
      toast('参数错误')
      break
    case 404:
      toast('找不到服务')
      break
    default:
      toast('网络错误！')
  }
  if (options.onError !== undefined) {
    options.onError()
  }
}
