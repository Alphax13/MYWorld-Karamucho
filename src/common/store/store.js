import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/common/userSlice'

const combinedReducer = {
  user : userSlice
}

export default configureStore({
    reducer: combinedReducer
})