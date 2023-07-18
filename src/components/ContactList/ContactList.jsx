import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectContactsFilter } from 'redux/selectors';

export const ContactList = () => {
  const list = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();
  console.log(list);
  console.log(list.name);

  const check = list.filter(ev => ev.name.includes(filter));

  console.log(check);

  const check2 = list.map(c => c.name);
  console.log(check2);

  //const getFilteredContacts = () => {
  //   if (!filter) {
  //     return list;
  //   }
  //    return list.filter(contact =>
  //    contact.name.toLowerCase().includes(filter.toLowerCase())
  //  );
  // };

  return (
    <div>
      <ul>
        {list
          .filter(ev =>
            ev.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .map(contact => {
            return (
              <li className="contactItem" key={contact.id}>
                <p className="contact">{contact.name}:</p>
                <p className="contact">{contact.number}</p>
                <button
                  type="submit"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

//.filter(ev => ev.name.toLowerCase().includes(filter.toLowerCase()))
