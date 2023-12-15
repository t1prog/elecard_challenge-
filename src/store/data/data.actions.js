import { apiServer } from '../services/api/api.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk(
  'data/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await apiServer.getAll()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
