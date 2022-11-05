import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../Redax/numberListSlice';
import { DeletButton } from '../Buttons/IconButton/IconButton';
import {
  ContactListStyled,
  ContactListItemStyled,
  ContactListNameStyled,
  ContactListNumberStyled,
} from './ContactList.styled';

export const ContactList = () => {
  const numberList = useSelector(store => store.numberList.numberList);
  const filter = useSelector(store => store.numberList.filter);
  const filtredList = numberList.filter(num =>
    num.name.toLowerCase().includes(filter)
  );
  const dispatch = useDispatch();
  return (
    <ContactListStyled>
      {filtredList.map(i => {
        return (
          <ContactListItemStyled key={i.id}>
            <ContactListNameStyled>{i.name}</ContactListNameStyled>
            <ContactListNumberStyled>{i.tel}</ContactListNumberStyled>
            <DeletButton
              number={i.id}
              onDeleteItem={() => dispatch(deleteContact(i.id))}
            ></DeletButton>
          </ContactListItemStyled>
        );
      })}
    </ContactListStyled>
  );
};
