import {
  PhoneboockInputStyled,
  PhoneboockLabelStyled,
} from '../Form/phoneboock-form.styled';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const searchInputId = nanoid();

class SearchInput extends Component {
  state = {
    searchValue: '',
  };
  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSearch = e => {
    this.props.onSearch(e.currentTarget.value);
  };

  render() {
    return (
      <PhoneboockLabelStyled id={searchInputId}>
        Search
        <PhoneboockInputStyled
          id={searchInputId}
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleSearch}
        />
      </PhoneboockLabelStyled>
    );
  }
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
