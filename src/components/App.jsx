
import { Filter } from './Filter/Filter';
import { Form } from '../components/Form/Form';
import { Section } from './Section/Section';

import { ContactsList } from './ContactsList/ContactsList';
import { useState } from 'react';
import { useEffect } from 'react';
export const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactsData = contact => {
    if (
      contacts.some(el => el.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, contact]);
  };

  const onChangeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const onDelete = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  const filterContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <Section title={'PhoneBook'}>
        <Form addContactsData={addContactsData} />
      </Section>
      <Section title={'Contacts'}>
        <Filter onChange={onChangeFilter} />
        <ContactsList contacts={filterContacts()} onDelete={onDelete} />
      </Section>
    </>
  );
};
