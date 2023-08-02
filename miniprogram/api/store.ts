import request from "./request"

const list = (storeSearchRequest: Partial<Location> & Paging): Promise<ListResult<Store>> => {
  return request('GET', '/stores', storeSearchRequest)
}

export default {
  list
}