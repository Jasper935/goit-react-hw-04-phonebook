import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import PropTypes from 'prop-types'
export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onDelete={onDelete}
            id={id}
          />
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes={
    onDelete: PropTypes.func.isRequired,
    
    contacts:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,

        })
    )
}
