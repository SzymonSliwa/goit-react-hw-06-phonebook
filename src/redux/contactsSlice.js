import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const currentContacts =
  JSON.parse(localStorage.getItem('contactsStorage')) === null
    ? defaultContacts
    : JSON.parse(localStorage.getItem('contactsStorage'));

export const contactsSlice = createSlice({
  name: 'contactsStorage',
  initialState: {
    list: currentContacts,
  },
  reducers: {
    addContact(state, action) {
      let contact = {};
      const isContactAlreadyAdded = state.list.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          action.payload.name.toLocaleLowerCase()
      );

      if (isContactAlreadyAdded) {
        return window.alert(`${action.payload.name} is already in contacts.`);
      }

      contact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };

      state.list = [...state.list, contact];
    },

    deleteContact(state, action) {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
