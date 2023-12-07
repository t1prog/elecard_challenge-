export const localStorage = {
  get(key) {
    const storedValue = window.localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : null
  },
  getString(key) {
    return window.localStorage.getItem(key)
  },
  set(key, value) {
    const serializedValue =
      typeof value === 'object' ? JSON.stringify(value) : value
    window.localStorage.setItem(key, serializedValue)
  },
  remove(key) {
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  },
}
