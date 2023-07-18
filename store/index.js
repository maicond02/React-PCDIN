import { configureStore } from '@reduxjs/toolkit'
import usersData from '@/slices/usersData'

export default configureStore({
  reducer: {
    usersData:usersData
  }
})