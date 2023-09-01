import PropTypes from 'prop-types';
import { Button } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <Button type="button" onClick={onLoadMore}>
      Load more
    </Button>
  );
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
