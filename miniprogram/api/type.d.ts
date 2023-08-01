import { StoreStatus } from "../enums/StoreStatus";

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

type ListResult<T> = {
  paging: Paging,
  data: Array<T>
}

interface Paging {
  page: number;
  size: number;
  total: number;
}

type Store = {
  id: string;
  name: string;
  address: string;
  phone: string;
  status: keyof StoreStatus,
  openingTime: {
    start: string,
    end: string
  },
  location: Location,
}

type Location = {
  longtitude: number;
  langtitude: number;
}