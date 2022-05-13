import { createSlice } from '@reduxjs/toolkit';

export const sliceContacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    removeContacts(state, action) {
      state.items = [...action.payload];
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { addContacts, filterContacts, removeContacts } =
  sliceContacts.actions;
