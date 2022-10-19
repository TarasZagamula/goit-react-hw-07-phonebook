import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  PhoneboockFormStyled,
  PhoneboockInputStyled,
  PhoneboockLabelStyled,
} from './phoneboock-form.styled';
import { PhoneboockButtonStyled } from '../Buttons/TextButton/Button.styled';

const nameInputId = nanoid();
const telInputId = nanoid();

class PhoneboockForm extends Component {
  state = {
    name: '',
    tel: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetState();
  };

  resetState = () => {
    this.setState({
      name: '',
      tel: '',
    });
  };

  render() {
    return (
      <PhoneboockFormStyled onSubmit={this.handleSubmit}>
        <PhoneboockLabelStyled htmlFor={nameInputId}>
          Name
          <PhoneboockInputStyled
            id={nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
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
            value={this.state.tel}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </PhoneboockLabelStyled>
        <PhoneboockButtonStyled type="submit">Create</PhoneboockButtonStyled>
      </PhoneboockFormStyled>
    );
  }
}

PhoneboockForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default PhoneboockForm;
