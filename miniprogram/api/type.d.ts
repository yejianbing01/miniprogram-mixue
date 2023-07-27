type RequestMthod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
type ErrorResponse = {
  code: number;
  message: string;
}

type RequestData = string | WechatMiniprogram.IAnyObject | ArrayBuffer

type HomePageData = {
  swiper: SwiperData[],
  iconNavigations: IconNavigation[]
}

type UserType = {
  id: string;
  mobile: number;
  gender: 'MALE' | 'FEMALE' | 'UNKNOWN' |  null;
  birthday?: string;
}