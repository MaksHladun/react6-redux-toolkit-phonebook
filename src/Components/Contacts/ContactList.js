import Contakts from './Contacts';
import { useSelector } from 'react-redux';
import { getFilter } from '../redux/selector';
import { useFetchPhoneBookQuery } from '../redux/phoneBookSlice';

const ContactList = () => {
    const filter = useSelector(getFilter);
    const { data } = useFetchPhoneBookQuery();

    const getFindContact = () => {
        const normalizedFilter = filter.toLowerCase();
        if (data) {
            return data.filter(contact =>
                contact.name.toLowerCase().includes(normalizedFilter),
            );
        }
    };

    const book = getFindContact();

    return (
        <ul>
            {book &&
                book.map(contact => (
                    <Contakts
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        number={contact.phone}
                    />
                ))}
        </ul>
    );
};

export default ContactList;
