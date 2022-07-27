import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { Form } from '../components/Form/Form';
import { Section } from './Section/Section';

import { ContactsList } from './ContactsList/ContactsList';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount(){
    const contacts = (localStorage.getItem('contacts'))
     if(contacts){
       this.setState({contacts: JSON.parse(contacts)})
     }
   }
   componentDidUpdate(prevProp, prevState){
     if (prevState.contacts!==this.state.contacts) {
       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
     }
     
   }
 

  addContactsData = contact => {
    const{contacts}=this.state
    if(contacts.some(el=>el.name.toLowerCase()===contact.name.toLowerCase())){
      alert(`${contact.name} is already in contacts`)
      return
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onChangeFilter = ({ target: { value } }) => {
    
    this.setState({
      filter: value,
    });
  };

  onDelete=(id)=>{
    this.setState(prev=>({
      contacts: prev.contacts.filter(el=>el.id!==id)
    }))
    
  }



  filterContacts=()=>{
    
   const{filter, contacts}= this.state
   return contacts.filter((el)=>el.name.toLowerCase().includes(filter.toLowerCase()))
  }

  render() {
    
    return (
      <>
        <Section title={'PhoneBook'}>
          <Form addContactsData={this.addContactsData} />
        </Section>
        <Section title={'Contacts'}>
          <Filter  onChange={this.onChangeFilter} />
          <ContactsList contacts={this.filterContacts()} onDelete={this.onDelete} />
        </Section>
      </>
    );
  }
}
