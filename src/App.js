import Form from './Components/Form/Form';
import ContactList from './Components/Contacts/ContactList';
import Filter from './Components/Filter/Filter';
import './App.css';

function App() {
    return (
        <div className="container">
            <h1>Phonebook</h1>
            <Form />
            <h1>Contacts</h1>
            <Filter />
            <ContactList />
        </div>
    );
}

export default App;
