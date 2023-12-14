import { API_URL, ERROR_MESSAGE } from '../../../services/constants'

const apiCache = {}

export const apiServer = {
  async getAll() {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error(`${ERROR_MESSAGE.SERVER}: ${response.statusText}`)
    }
    if (!apiCache.data) {
      apiCache.data = await response.json()
      await new Promise((resolve) => setTimeout(resolve, 1000))
      apiCache.data = apiCache.data.map((item, index) => ({
        ...item,
        id: index + 1,
      }))
    }
    return apiCache.data
  },
}
