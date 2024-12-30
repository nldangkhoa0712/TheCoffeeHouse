import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: '',
        age: 0
    },
    reducers: {
        handleTest: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { handleTest } = userSlice.actions
export default userSlice.reducer
