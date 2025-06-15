import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    accessToken: null | string
}

const initialState: AuthState = {
    accessToken: null,
}

const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        clearAccessToken(state) {
            state.accessToken = null
        },
        setAccessToken(state, action: PayloadAction<string>) {
            state.accessToken = action.payload
        },
    },
})

export const { clearAccessToken, setAccessToken } = authSlice.actions
export default authSlice.reducer
