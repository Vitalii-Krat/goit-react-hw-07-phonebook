import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ filter }) => (
  <ul>
    <ContactItem filter={filter} />
  </ul>
);

export default ContactList;

ContactItem.propTypes = {
  filter: PropTypes.string.isRequired,
};
