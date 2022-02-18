import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../redux/phoneBookSlice';

const Contakts = ({ id, name, number }) => {
    const [deleteContact] = useDeleteContactMutation();

    return (
        <li>
            {' '}
            <p>
                {name}: {number}
            </p>
            <button
                className="btn"
                type="button"
                onClick={() => deleteContact(id)}
            >
                Delete
            </button>
        </li>
    );
};
Contakts.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default Contakts;
