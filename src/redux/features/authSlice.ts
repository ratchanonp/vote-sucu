import { AuthState } from "@/interfaces/redux/authSlice.interface";
import { retriveUserFromLocalStorage } from "@/utils/user/user";
import { createSlice } from "@reduxjs/toolkit";

const user = retriveUserFromLocalStorage();

const initialState: AuthState = {
    user,
    isAuthenticated: !!user
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;