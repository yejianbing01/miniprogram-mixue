const BASE_URL = 'https://mock.apifox.cn/m1/1646135-0-default';

const request = function<T>(method: RequestMthod, uri: string, data?: RequestData): Promise<T>{
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      url: BASE_URL + uri,
      data,
      success: (response) => {
        if(response.statusCode !== 200){
          reject(response.data as ErrorResponse)
        }
        resolve(response.data as T)
      },
      fail: (error) => {
        reject({ code: 500, message: error.errMsg } as ErrorResponse )
      }
    })
  })
}

export default request;