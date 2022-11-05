import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../Redax/numberListSlice';
import { nanoid } from 'nanoid';
import {
  PhoneboockInputStyled,
  PhoneboockLabelStyled,
} from '../Form/phoneboock-form.styled';

const searchInputId = nanoid();

const SearchInput = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value.toLowerCase()));
    setQuery(value);
  };

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

export default SearchInput;
