import request from "./request"

const current = (): Promise<UserType> => {
  return request('GET', '/users/current');
}

export default {
  current
}