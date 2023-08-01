import storeApi from "../../api/store"
import { Paging, Store } from "../../api/type"
import { StoreStatus } from "../../enums/StoreStatus";

// pages/store/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paging: <Paging> {
      page: 1,
      size: 10,
      total: 0
    },
    storeList: <Store[]>[],
    storeStatusDict: StoreStatus
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.fetchStoreList();
  },

  async fetchStoreList(){
    const { paging, data } = await storeApi.list()
    this.setData({
      paging,
      storeList: data
    })
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