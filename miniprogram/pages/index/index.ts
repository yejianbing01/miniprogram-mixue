import pageApi from "../../api/page"
import { storeBehavior } from "../../behavior/storeBehavior";
import navigator from "../../utils/navigator";

// pages/index/index.ts
Page({
  behaviors: [storeBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: <SwiperData[]> [],
    iconNavigations: <IconNavigation[]> []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const { swiper, iconNavigations } = await pageApi.home();
    swiper[0].image = '../../assets/images/ban1.gif'
    swiper[1].image = '../../assets/images/ban2.gif'
    iconNavigations[0].image = '../../assets/images/nav1.gif'
    iconNavigations[1].image = '../../assets/images/nav2.gif'
    iconNavigations[2].image = '../../assets/images/nav3.gif'
    this.setData({ swiperList: swiper, iconNavigations });
  },

  onIconNavigationTap(event: ItemParam){
    const { type, target } = event.currentTarget.dataset.item;
    navigator.to(type, target);
  },

  onLogin(){
    wx.navigateTo({ url: '/pages/login/index' });
  },

  onClickStore(){
    wx.switchTab({ url: '/pages/store/index' });
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
    this.getTabBar().init()
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