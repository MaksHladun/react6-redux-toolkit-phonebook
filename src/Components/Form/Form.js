import { useState } from 'react';
import {
    useCreateContactMutation,
    useFetchPhoneBookQuery,
} from '../redux/phoneBookSlice';

function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const { data } = useFetchPhoneBookQuery();
    const [createContact] = useCreateContactMutation();

    const dontAddContacts = name => {
        name = name.toLowerCase();
        return (
            data.filter(contact => contact.name.toLowerCase().includes(name))
                .length > 0
        );
    };

    const handleChange = e => {
        const { name, value } = e.target;

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

    const handleSubmit = evt => {
        evt.preventDefault();

        const identicalName = dontAddContacts(name);

        if (!identicalName) {
            createContact({ name, number });
            reset();
            return;
        } else {
            alert(`${name} is already in contacts`);
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    );
}

export default Form;
