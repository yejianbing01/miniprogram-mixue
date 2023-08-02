import QQMapWX from "@jonny1994/qqmap-wx-jssdk";
import { keys } from "mobx-miniprogram";
import storeApi from "../../api/store"
import { StoreStatus } from "../../enums/StoreStatus";
const computedBehavior = require('miniprogram-computed').behavior
// const chooseLocation = requirePlugin('chooseLocation');
const mapKey = "5SOBZ-SJDL6-J47SK-MNS4A-OY7J2-4VBKA"

// pages/store/index.ts
Page({
  behaviors: [computedBehavior],
  qqmapsdk: <QQMapWX | null> null,
  data: {
    paging: <Paging> {
      page: 1,
      size: 10,
      total: 0
    },
    storeList: <Store[]>[],
    storeStatusDict: StoreStatus,
    currentLocation: <Location | null> null,
    markers: <MapMarker[]> [],
    showMap: true
  },
  computed: {
    markers(data: { storeList: Store[] }): MapMarker[] {
      return data.storeList.map((item, index)=>{
        return {
          id: index + 1,
          title: item.name,
          latitude: item.location.latitude,
          longitude: item.location.longitude,
          iconPath: '../../assets/images/logo.png',
          width: '55rpx',
          height: '55rpx'
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    this.initQQMapWx();
    await this.getLocation();
    this.fetchStoreList();
  },

  async getLocation(){
    const { latitude, longitude } = await wx.getLocation({type: 'wgs84'})
    this.setData({ currentLocation: { latitude, longitude } })
  },

  async fetchStoreList(){
    const { paging, data } = await storeApi.list({
      ...this.data.paging,
      ...this.data.currentLocation
    })
    data.length && this.calcDistanceAndSetStoreList(data)

    this.setData({
      paging,
      storeList: data
    })
  },

  calcDistanceAndSetStoreList(storeList: Store[]){
    const locationList = storeList.map(item=>item.location)
    this.qqmapsdk?.calculateDistance({
        // @ts-ignore
        from: this.data.currentLocation,
        to: locationList,
        success: (res) => {
          storeList.forEach((_, index)=>{
            storeList[index].distance = (res.result.elements[index].distance/1000).toFixed(2)
          })
          this.setData({ storeList })
        }
      })
  },

  initQQMapWx(){
    this.qqmapsdk = new QQMapWX({ key: mapKey });
  },

  goToChooseLocation(){
    return
    const key = mapKey; //使用在腾讯位置服务申请的key
    const referer = '蜜雪冰城'; //调用插件的app的名称
    const location = JSON.stringify(this.data.currentLocation);
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location
    });
  },

  // app.json 添加以下内容支持地图点选
    // "plugins": {
  //   "chooseLocation": {
  //     "version": "1.0.10",
  //     "provider": "wx76a9a06e5b4e693e"
  //   }
  // },

  toggleMap(){
    this.setData({ showMap: !this.data.showMap })
  },

  goToLocation(event: DataSetEvent<{location: Location}>){
    wx.openLocation(event.currentTarget.dataset.location)
  },

  callPhone(event: DataSetEvent<{phone: string}>){
    wx.makePhoneCall({
      phoneNumber: event.currentTarget.dataset.phone
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
    // const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    // if(location){
    //   this.setData({
    //     currentLocation: { latitude: location.latitude, longitude: location.longitude}
    //   })
    //   this.fetchStoreList()
    // }
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
    // chooseLocation.setLocation(null)
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