/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}

type ItemParam = { currentTarget: {dataset:{item:SwiperData} }}

type DataSetEvent<T> = {
  currentTarget: {
    dataset: T
  }
}