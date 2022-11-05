import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialnumbers from '../data/initial-numbers.json';

const numberListSlice = createSlice({
  name: 'numberList',
  initialState: {
    numberList: initialnumbers,
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.numberList.push(action.payload);
      },
      prepare({ name, tel }) {
        return {
          payload: {
            id: nanoid(),
            name,
            tel,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.numberList = state.numberList.filter(
        num => num.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = numberListSlice.actions;
export const numberListReducer = numberListSlice.reducer;
