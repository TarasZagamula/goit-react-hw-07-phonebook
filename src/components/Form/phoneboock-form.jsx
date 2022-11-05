import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redax/numberListSlice';
import { nanoid } from 'nanoid';
import { PhoneboockButtonStyled } from '../Buttons/TextButton/Button.styled';
import {
  PhoneboockFormStyled,
  PhoneboockInputStyled,
  PhoneboockLabelStyled,
} from './phoneboock-form.styled';

const nameInputId = nanoid();
const telInputId = nanoid();

const PhoneboockForm = () => {
  const numberList = useSelector(state => state.numberList.numberList);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'tel':
        setTel(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (numberList.find(i => i.name === name || i.tel === tel)) {
     return alert(`this name or number is already used`);
    }
    dispatch(addContact({ name, tel }));
    setName('');
    setTel('');
  };

  return (
    <PhoneboockFormStyled onSubmit={handleSubmit}>
      <PhoneboockLabelStyled htmlFor={nameInputId}>
        Name
        <PhoneboockInputStyled
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </PhoneboockLabelStyled>
      <PhoneboockLabelStyled htmlFor={telInputId}>
        Number
        <PhoneboockInputStyled
          id={telInputId}
          type="tel"
          name="tel"
          value={tel}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </PhoneboockLabelStyled>
      <PhoneboockButtonStyled type="submit">Create</PhoneboockButtonStyled>
    </PhoneboockFormStyled>
  );
};

export default PhoneboockForm;
