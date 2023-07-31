import request from "./request"

const current = (): Promise<UserType> => {
  return request('GET', '/users/current');
}

const updateCurrent = (userUpdateRequest: UserUpdateRequest): Promise<UserType> => {
  return request('PUT', '/users/current', userUpdateRequest);
}

export default {
  current,
  updateCurrent
}