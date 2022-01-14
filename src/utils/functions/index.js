export const typeChecking = (property) =>
  typeof property === 'number' ? `${property}px` : property

export const deepCloneObject = (object) => JSON.parse(JSON.stringify(object))
