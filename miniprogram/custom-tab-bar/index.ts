import ErrorMessage from "../enums/ErrorMessage"

// custom-tab-bar/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: [
      {
        text: '首页',
        path: '/pages/index/index',
        image: '../assets/images/tabbar/home.png',
        selectedImage: '../assets/images/tabbar/home-selected.png'
      },
      {
        text: '订餐',
        path: '/pages/store/index',
        image: '../assets/images/tabbar/store.png',
        selectedImage: '../assets/images/tabbar/store-selected.png'
      },
      {
        text: '订单',
        path: '/pages/order/index',
        image: '../assets/images/tabbar/order.png',
        selectedImage: '../assets/images/tabbar/order-selected.png'
      },
      {
        text: '我的',
        path: '/pages/me/index',
        image: '../assets/images/tabbar/me.png',
        selectedImage: '../assets/images/tabbar/me-selected.png'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event: { detail: number }){
      this.setData({ active: event.detail })
      wx.switchTab({
        url: this.data.list[event.detail].path
      })
    },
    init(){
      const currentPage = getCurrentPages().pop()
      if(!currentPage){
        throw new Error(ErrorMessage.INNER_ERROR)
      }
      this.setData({
        active: this.data.list.findIndex(item=>item.path === `/${currentPage.route}`)
      })
    }
  }
})
