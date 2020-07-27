/**
 * Promisify wechat js-sdk or miniprogram api
 */

export function promisify<T = any>(api: Function) {
  return (options = {}): Promise<T> => {
    return new Promise((resolve, reject) => {
      api(Object.assign({}, options, { success: resolve, fail: reject }))
    })
  }
}
