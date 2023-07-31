type RequestMthod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
type ErrorResponse = {
  code: number;
  message: string;
}
type Gender = 'MALE' | 'FEMALE' | 'UNKNOWN' |  null;

type RequestData = string | WechatMiniprogram.IAnyObject | ArrayBuffer

type HomePageData = {
  swiper: SwiperData[],
  iconNavigations: IconNavigation[]
}

type UserType = {
  id: string;
  mobile: number;
  gender: Gender,
  birthDay?: string;
}

type UserUpdateRequest = {
  mobile?: number;
  gender?: Gender,
  birthDay?: string;
}