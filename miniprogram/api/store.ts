import request from "./request"
import { ListResult, Store } from "./type"

const list = (): Promise<ListResult<Store>> => {
  return request('GET', '/stores')
}

export default {
  list
}