import React, { Component } from 'react';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

import {
  FormContainer,
  SearchForm,
  SearchButton,
  FormLabel,
  SearchInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    query: '',
  };
  reset = () => {
    this.setState({
      query: '',
    });
  };

  handleInput = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      Notify.info('Enter the query');
      return;
    }
    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <FormContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <FormLabel>Search</FormLabel>
          </SearchButton>
          Film search
          <SearchInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.query}
            onChange={this.handleInput}
          />
        </SearchForm>
      </FormContainer>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
