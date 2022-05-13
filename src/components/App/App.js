import { Container, Title } from './App.styled';
import ContactForm from '../ContactForm';
import Filter from '../ContactFilter';
import ContactList from '../ContactList';
import { useState } from 'react';

export default function App() {
  const [filter, setFilter] = useState('');
  const handlerFilterName = e => {
    setFilter(e.target.value);
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={handlerFilterName} />
      <ContactList filter={filter} />
    </Container>
  );
}
