'use strict'

import axios from 'axios'
import axiosConfig from '../config/axiosConf'
import Qs from 'qs'
const config = {
  baseURL: axiosConfig.baseUrl,
  timeout: 10000,
  // withCredentials: true,
  headers: {
    'Cache-Control': 'no-cache,no-store,max-age=-1,private',
    'Content-Type': 'application/json;charset=utf-8'
  }
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (config.method.toLowerCase() === 'get' && config.params) {
      config.paramsSerializer = function (params) {
        return Qs.stringify(params)
      }
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default _axios
