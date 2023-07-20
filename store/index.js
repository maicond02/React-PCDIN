import { configureStore } from '@reduxjs/toolkit'
import usersData from '@/slices/usersData'
import feedData from '@/slices/feedData'

export default configureStore({
  reducer: {
    usersData:usersData,
    feedData:feedData
  }
})