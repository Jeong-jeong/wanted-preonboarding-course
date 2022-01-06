const typeChecking = (property) =>
  typeof property === 'number' ? `${property}px` : property

export default typeChecking
