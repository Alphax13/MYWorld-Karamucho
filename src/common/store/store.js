import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../userSlice.js/userSlice'

const combinedReducer = {
  user : userSlice
}

export default configureStore({
    reducer: combinedReducer
})