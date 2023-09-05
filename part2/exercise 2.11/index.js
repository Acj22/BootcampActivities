import React from "react"
import  ReactDOM  from "react-dom/client";
import App from "./App";  

const Filter = ({ filter, handleFilterChange }) => (
  <div>
    <h3>Filter</h3>
    <p>Filter to show <input value={filter} onChange={handleFilterChange} /></p>
  </div>
);

const PersonForm = ({ newName, handleNameChange, handleNumberChange, addData }) => (
  <div>
    <h3>New data</h3>
    <form onSubmit={addData}>
      <div>
        Name: <input value={newName.name} onChange={handleNameChange} />
        Number: <input value={newName.number} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
);
const ToShow = ({ filteredPersons }) =>(
    <div>
        <h3>Numbers</h3>
         {filteredPersons.map(person => (
            <p key={person.name}>{person.name} {person.number}</p>
        ))}
    </div>    
)


export { Filter, PersonForm, ToShow };

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
