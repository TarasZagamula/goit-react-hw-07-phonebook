import { DeletButtonIcon } from './IconButton.styled';
import PropTypes from 'prop-types';

export const DeletButton = ({ number, onDeleteItem }) => {
  return (
    <DeletButtonIcon
      type="button"
      onClick={() => {
        onDeleteItem(number);
      }}
    />
  );
};

DeletButton.propTypes = {
  number: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
