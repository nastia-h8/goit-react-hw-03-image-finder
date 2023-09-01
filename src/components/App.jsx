import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { onWindowScroll } from 'helpers/smoothScrollBy';
import * as pixabayAPI from '../services/pixabay-api';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { Loader } from './Loader';
import { Message } from './Message/Message';
import { ScrollToTopBtn } from './ScrollToTopBtn/ScrollToTopBtn';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from 'components/Layout';

export class App extends Component {
  state = {
    query: '',
    items: [],
    page: 1,
    total: 0,
    error: false,
    isLoading: false,
  };

  componentDidUpdate(_, pState) {
    const { query, page } = this.state;
    const queryToSearch = query.split('/').slice(1).join('');

    if (pState.query !== query || pState.page !== page) {
      this.fetchImages(queryToSearch, page);
    }

    if (page > 1) {
      onWindowScroll(460);
    }
  }

  onSearchFormSubmit = query => {
    this.setState({ query, items: [], page: 1, error: null });
  };

  fetchImages = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const response = await pixabayAPI.getImages(query, page);

      if (!response.hits.length) {
        toast.error('Sorry, no images found');
        return;
      }

      if (page === 1) {
        toast.success(`We found ${response.total} images`);
      }

      this.setState(pState => ({
        items: [...pState.items, ...response.hits],
        total: response.total,
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onLoadMoreClick = () => {
    this.setState(pState => ({
      page: pState.page + 1,
    }));
  };

  checkLastItems = () => {
    const { items, total } = this.state;
    return items.length === total;
  };

  render() {
    const { items, isLoading, error } = this.state;
    const isLastItems = this.checkLastItems();

    return (
      <Layout>
        <Searchbar onSubmit={this.onSearchFormSubmit} />

        {items.length > 0 && (
          <>
            <ImageGallery items={items} />
            {isLastItems ? (
              <Message>The end of results</Message>
            ) : (
              <LoadMoreBtn onLoadMore={this.onLoadMoreClick} />
            )}
          </>
        )}

        {isLoading && <Loader />}
        {error && (
          <Message>Oops, something went wrong...Try again later!</Message>
        )}

        <ScrollToTopBtn />
        <Toaster />
        <GlobalStyle />
      </Layout>
    );
  }
}
