import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAction } from 'redux/actions';
import { getContacts, getContactsFilter } from 'redux/selectors';

export const ContactList = () => {
  const list = useSelector(getContacts);
  const filter = useSelector(getContactsFilter);
  const dispatch = useDispatch();

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
          .filter(ev => ev.name.toLowerCase().includes(filter.toLowerCase()))
          .map(contact => {
            return (
              <li className="contactItem" key={contact.id}>
                <p className="contact">{contact.name}:</p>
                <p className="contact">{contact.number}</p>
                <button
                  type="submit"
                  onClick={() => dispatch(deleteContactAction(contact.id))}
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
