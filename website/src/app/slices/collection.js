import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    setCollections: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCollections } = collectionSlice.actions

export default collectionSlice.reducer

