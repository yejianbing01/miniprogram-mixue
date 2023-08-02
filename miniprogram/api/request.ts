import { appStore } from "../store/index";

const BASE_URL = 'https://mock.apifox.cn/m1/1646135-0-default';
const TOKEN_PREFIX = 'BEARER ';

const request = function <T>(method: RequestMethod, uri: string, data?: RequestData): Promise<T> {
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      url: BASE_URL + uri,
      header: { 'Authorization': TOKEN_PREFIX + appStore.token },
      data,
      success: (response) => {
        if (response.statusCode !== 200) {
          errorHandler(response.data as ErrorResponse)
          reject(response.data as ErrorResponse)
        }
        resolve(response.data as T)
      },
      fail: (error) => {
        reject({ code: 500, message: error.errMsg } as ErrorResponse)
      }
    })
  })
}

const errorHandler = (error: ErrorResponse) => {
  wx.showToast({ title: error.message, icon: "error" });
  if (error.code === 401) {
    appStore.logout();
  }
}

export default request;