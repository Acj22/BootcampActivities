import React, {useEffect, useState} from 'react';
import { Filter, PersonForm, ToShow } from './index';
import axios from 'axios';


const App = () => {
  const [persons, setPersons] = useState([]);
  
  const addData = (event) => {
    event.preventDefault();
    const nameExist = persons.some(person => person.name === newName.name);
    const numberExist = persons.some(person => person.number === newName.number);
    if (nameExist || numberExist) {
      window.alert(newName.name + ' with number ' + newName.number + ' already exist');
    } else {
      const newPerson = {
        name: newName.name,
        number: newName.number
      };

      setPersons([...persons, newPerson]);
      setNewName({ name: '', number: '' });
    }
  };
  useEffect(() =>{
    console.log ('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fullfield')
      setPersons(response.data)
    })
  },[])
  const [newName, setNewName] = useState({ name: '', number: '' });
  const [filter, setFilter] = useState('');
  const handleNameChange = (event) => {
    setNewName({ ...newName, name: event.target.value });
  };
  
  const handleNumberChange = (event) => {
    setNewName({ ...newName, number: event.target.value });
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm newName={newName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addData={addData} />
      <ToShow filteredPersons={filteredPersons}/>
    </div>
  );
};

export default App;
