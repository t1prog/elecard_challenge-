import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('fetchData',
  async function(_, {rejectWithValue}) {
    try {
      const response = await fetch(
        'http://contest.elecard.ru/frontend_data/catalog.json'
      )
      if (!response.ok) {
        throw new Error('Server error')
      }
      const data = await response.json()
      console.log(data)
      return data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

const listSlice = createSlice({
  name: 'tree',
  initialState: {
    content: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'resolved'
      state.content = action.payload
    })
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    })
  }
})

export default listSlice.reducer
