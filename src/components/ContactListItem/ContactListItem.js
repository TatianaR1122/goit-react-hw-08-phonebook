import PropTypes from 'prop-types';
import { Info, ItemCont } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ItemCont id={id}>
      <Info>
        {name}: {number}
      </Info>

      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ItemCont>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};
