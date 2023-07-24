import { canIUseGetUserProfile } from "../../miniprogram_npm/@vant/weapp/common/version";
import { SwiperData } from "./types";

// components/i-swiper/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: <SwiperData[]> []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event: {detail: {current: number}}){
      this.setData({ current: event.detail.current })
    }
  }
})
