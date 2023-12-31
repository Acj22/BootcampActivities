import { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ])
  const [newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameExist = persons.some(person => person.name === newName);

    if (nameExist){
    window.alert(newName +' already exist')
    }
    console.log('function called correctly')
    const nameObject = {
      name: newName,
      id: persons.length + 1,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:<input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>        
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =>
        <p key={person.name}>{person.name}</p>
        )}

    </div>
  )
}
export default App
