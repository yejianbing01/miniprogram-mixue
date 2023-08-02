import request from "./request"

const list = (): Promise<ListResult<Store>> => {
  return request('GET', '/stores')
}

export default {
  list
}