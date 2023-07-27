import { action, observable } from "mobx-miniprogram";
import tokenApi from "../api/token";
import userApi from "../api/user";

const TOKEN = 'token';
const CURRENT_USER = 'current-user';

export const appStore = observable({
  token: <string> wx.getStorageSync(TOKEN),
  currentUser: <UserType | null> wx.getStorageSync(CURRENT_USER),
  activeTabbar: 0,

  login: action(async function(code: string){
    const token = await tokenApi.create(code);
    appStore.setToken(token);
    appStore.fetchCurrentUser();

    wx.showToast({ title: '登录成功' });
    getCurrentPages().pop() ? wx.navigateBack() : wx.switchTab({ url: '/pages/index/index' })
  }),

  setToken: action(function(token: string){
      appStore.token = token;
      wx.setStorageSync(TOKEN, token);
  }),

  fetchCurrentUser: action(async function(){
    const currentUser = await userApi.current();
    appStore.setCurrentUser(currentUser);
  }),

  setCurrentUser: action(function(currentUser: UserType){
    appStore.currentUser = currentUser;
    wx.setStorageSync(CURRENT_USER, currentUser);
  }),

  logout: action(function(){
    wx.clearStorage();
    appStore.token = '';
    appStore.currentUser = null;
  }),

  switchTabbar: action(function(value: number){
    appStore.activeTabbar = value;
  })

})