import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { PhoneboockButtonStyled } from '../Buttons/TextButton/Button.styled';
import {
  PhoneboockFormStyled,
  PhoneboockInputStyled,
  PhoneboockLabelStyled,
} from './phoneboock-form.styled';

const nameInputId = nanoid();
const telInputId = nanoid();

const PhoneboockForm = ({ onSubmit }) => {
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
    onSubmit({ name, tel });
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

PhoneboockForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default PhoneboockForm;
