import React, { useState } from 'react';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

import {
  FormContainer,
  SearchForm,
  SearchButton,
  FormLabel,
  SearchInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    if (e.currentTarget.value.toLowerCase() !== query)
      setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      Notify.info('Enter the query');
      return;
    }

    onSubmit(query);
  };

  return (
    <FormContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <FormLabel>Search</FormLabel>
        </SearchButton>
        image search
        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          value={query}
          onChange={handleInput}
        />
      </SearchForm>
    </FormContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
