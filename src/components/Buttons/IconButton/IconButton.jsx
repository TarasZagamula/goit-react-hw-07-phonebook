import { DeletButtonIcon } from './IconButton.styled';

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
