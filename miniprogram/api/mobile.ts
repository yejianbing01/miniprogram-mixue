import request from "./request"

const get  = (code: string): Promise<number> => {
  return request('GET', `/mobile/${code}`)
}

export default { get }