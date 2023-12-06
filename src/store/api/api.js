import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, ERROR_MESSAGE } from '../../constants/constants'

const fetchData = createAsyncThunk(
  'fetchData',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error(ERROR_MESSAGE.SERVER)
      }
      //TODO: Убрать исскуственную задержку
      await new Promise((resolve) => setTimeout(resolve, 2000))
      
      const data = await response.json()
      console.log('Pfghjc!')
      const dataWithIds = data.map((item, index) => ({
        ...item,
        //Чтобы избавиться от id = 0
        id: index + 1,
      }))
      return dataWithIds
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

export default fetchData
