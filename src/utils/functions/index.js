export const typeChecking = (property) =>
  typeof property === 'number' ? `${property}px` : property

export const deepCloneObject = (object) => JSON.parse(JSON.stringify(object))

export const debounce = (callback, delay) => {
  let timer

  return (event) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(callback, delay, event)
  }
}
