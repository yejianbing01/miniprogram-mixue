import mobileApi from "../../api/mobile";
import { storeBehavior } from "../../behavior/storeBehavior";
import { appStore } from "../../store/app";

// pages/settings/index.ts
Page({
  behaviors: [storeBehavior],
  data: {
    loading: false,
    mobile:  appStore.currentUser?.mobile,
    gender: appStore.currentUser?.gender,
    birthDay: appStore.currentUser?.birthDay
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    if(!appStore.currentUser){
      wx.navigateBack()
    }
    this.setData({
      mobile:  appStore.currentUser?.mobile,
      gender: appStore.currentUser?.gender,
      birthDay: appStore.currentUser?.birthDay
    })
  },

  async onMobileChange(event: {detail: {code: string}}){
    const mobile = await mobileApi.get('code')
    this.setData({ mobile })
  },

  async onGenderChange(event: {detail: Gender}){
    this.setData({ gender: event.detail })
  },

  async onBirthDayChange(event: {detail: {value: string}}){
    this.setData({ birthDay: event.detail.value })
  },

  async onUpdateCurrent(){
    this.setData({ loading: true })
    await appStore.updateCurrentUser({
      mobile: this.data.mobile,
      gender: this.data.gender,
      birthDay: this.data.birthDay
    })
    this.setData({ loading: false })
    wx.showToast({ title: '保存成功' })
  },

  onLogout(){
    appStore.logout()
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})