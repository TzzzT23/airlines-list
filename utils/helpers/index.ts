export function isEmpty<Obj>(value: Obj) {
  if (value == null) return true
  return !(Object.keys(value).length > 0)
}

export function createParams<P extends object>(params?: P | void) {
  if (typeof params === 'undefined' || isEmpty(params)) return ''
  const sign = '?'
  return (
    sign +
    Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  )
}
