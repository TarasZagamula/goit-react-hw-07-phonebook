import {
  ContactListStyled,
  ContactListItemStyled,
  ContactListNameStyled,
  ContactListNumberStyled,
} from './ContactList.styled';
import { DeletButton } from '../Buttons/IconButton/IconButton';

import PropTypes from 'prop-types';

export const ContactList = ({ numberList, onDeleteItem }) => {
  return (
    <ContactListStyled>
      {numberList.map(i => {
        return (
          <ContactListItemStyled key={i.id}>
            <ContactListNameStyled>{i.name}</ContactListNameStyled>
            <ContactListNumberStyled>{i.tel}</ContactListNumberStyled>
            <DeletButton
              number={i.id}
              onDeleteItem={onDeleteItem}
            ></DeletButton>
          </ContactListItemStyled>
        );
      })}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  numberList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    })
  ),
  onDeleteItem: PropTypes.func.isRequired,
};
