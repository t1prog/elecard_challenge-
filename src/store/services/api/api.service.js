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
      apiCache.data = apiCache.data.map((item, index) => ({
        ...item,
        filename: item.image.split('/')[1].split('.')[0],
        id: index + 1,
      }))
    }
    return apiCache.data
  },
}
