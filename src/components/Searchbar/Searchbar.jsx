import { Component } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

import { Header, Form, Input, Button } from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  onSearchInputChange = e => {
    this.setState({ query: e.target.value });
  };

  onSearchFormSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { query } = this.state;

    if (!query) {
      toast('Please enter something to search...', { icon: '🟡' });
      return;
    }

    const uniqueQuery = `${Date.now()}/${query.toLowerCase().trim()}`;
    onSubmit(uniqueQuery);
  };

  render() {
    const { query } = this.state;
    return (
      <Header>
        <Form onSubmit={this.onSearchFormSubmit}>
          <Button type="submit">
            <BsSearch size={20} />
          </Button>
          <Input
            onChange={this.onSearchInputChange}
            name="query"
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}
