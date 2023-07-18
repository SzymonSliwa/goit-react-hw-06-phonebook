import { configureStore } from '@reduxjs/toolkit';

//import { reducer } from './reducer';

import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
