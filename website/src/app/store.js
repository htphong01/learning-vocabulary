import { configureStore } from '@reduxjs/toolkit'
import collectionReducer from './slices/collection'

export const store = configureStore({
  reducer: {
    collection: collectionReducer,
  },
})