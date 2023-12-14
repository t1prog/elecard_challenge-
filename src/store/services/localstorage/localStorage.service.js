export const localStorage = {
  get(key) {
    return new Promise((resolve, reject) => {
      try {
        const storedValue = window.localStorage.getItem(key)
        if (!storedValue) {
          resolve({
            error: 'Key not found',
            key: key,
          })
          return
        }
        const parsedValue = JSON.parse(storedValue)
        resolve(parsedValue)
      } catch (error) {
        reject(error)
      }
    })
  },

  set(key, value) {
    return new Promise((resolve, reject) => {
      try {
        const serializedValue =
          typeof value === 'object' ? JSON.stringify(value) : value
        window.localStorage.setItem(key, serializedValue)
        resolve({ success: true })
      } catch (error) {
        reject(error)
      }
    })
  },

  remove(key) {
    return new Promise((resolve, reject) => {
      try {
        window.localStorage.removeItem(key)
        resolve({ success: true })
      } catch (error) {
        reject(error)
      }
    })
  },

  clear() {
    return new Promise((resolve, reject) => {
      try {
        window.localStorage.clear()
        resolve({ success: true })
      } catch (error) {
        reject(error)
      }
    })
  },
}
