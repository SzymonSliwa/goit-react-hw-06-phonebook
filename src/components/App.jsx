import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContacts } from 'redux/selectors';

const App = () => {
  // const [contacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contactsStorage', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1 className="section_title">Phonebook</h1>
      <ContactForm />
      <h2 className="section_title">Contacts </h2>
      {!contacts.length ? (
        <p>There are no contacts in your phonebook</p>
      ) : (
        <Filter />
      )}

      <ContactList />
    </div>
  );
};

export default App;
