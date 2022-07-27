import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from '../Form/Form.module.css';
import { useState } from 'react';
export const Form = ({ addContactsData }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();
    let id = nanoid();

    const contact = { name, number, id };
    addContactsData(contact);

    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label}>
        Name
        <input
          value={name}
          className={styles.input}
          type="text"
          name="name"
          required
          onChange={onChange}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input_last}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          type="tel"
          name="number"
          value={number}
          required
          onChange={onChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
Form.propTypes = {
  addContactsData: PropTypes.func.isRequired,
};
