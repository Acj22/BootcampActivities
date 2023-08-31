import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState({ name: '', number: '' });
  const [filter, setFilter] = useState('');
  

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
      <h3>Filter</h3>
      <p>Filter to show <input value={filter} onChange={handleFilterChange}/></p>
      <h3>New data</h3>
      <form onSubmit={addData}>
        <div>
          Name:<input value={newName.name} onChange={handleNameChange}/>
          Number:<input value={newName.number} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      {filteredPersons.map(person => (
        <p key={person.name}>
      {person.name} {person.number}
  </p>
))}
    </div>
  )
};

export default App;
