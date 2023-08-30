import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]);
  const [newName, setNewName] = useState({ name: '', number: '' });

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
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addData}>
        <div>
          name:<input value={newName.name} onChange={handleNameChange}/>
          number:<input value={newName.number} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p key={person.name}>{person.name} {person.number}</p>
      )}
    </div>
  )
};

export default App;
