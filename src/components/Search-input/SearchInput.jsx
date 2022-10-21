import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  PhoneboockInputStyled,
  PhoneboockLabelStyled,
} from '../Form/phoneboock-form.styled';

const searchInputId = nanoid();

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  useEffect(() => {
    onSearch(e.currentTarget.value);
  }, [query]);

  return (
    <PhoneboockLabelStyled id={searchInputId}>
      Search
      <PhoneboockInputStyled
        id={searchInputId}
        type="text"
        name="search"
        value={query}
        onChange={handleInputChange}
      />
    </PhoneboockLabelStyled>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
