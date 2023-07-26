import { action, observable } from "mobx-miniprogram";
import tokenApi from "../api/token";

const STORAGE_KEY = 'token';

export const appStore = observable({
  token: wx.getStorageSync(STORAGE_KEY),

  login: action(async function(code: string){
    const token = await tokenApi.create(code);
    appStore.setToken(token)
    getCurrentPages().pop() ? wx.navigateBack() : wx.switchTab({ url: '/pages/index/index' })
    wx.showToast({ title: '登录成功' });
  }),

  setToken: action(function(token: string){
      appStore.token = token;
      wx.setStorageSync(STORAGE_KEY, token);
  })

})