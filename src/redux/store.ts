import { configureStore } from '@reduxjs/toolkit'
import answer from './features/answerSlice'
import auth from './features/authSlice'
import modal from './features/modalSlice'
import step from './features/stepSlice'


export const store = configureStore({
    reducer: {
        modal,
        auth,
        answer,
        step,
    },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch