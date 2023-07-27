import { storeBehavior } from "../../behavior/storeBehavior";

// pages/me/index.ts
Page({
  behaviors: [storeBehavior],
  data: {
    paddingTop: 0,
    menuList: [
      { title: '兑换码', icon: 'qr' },
      { title: '隐私协议', icon: 'shield-o' },
      { title: '用户服务协议', icon: 'records' },
      { title: '经营信息公示', icon: 'notes-o' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const { bottom } = wx.getMenuButtonBoundingClientRect();
    this.setData({ paddingTop: bottom })
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