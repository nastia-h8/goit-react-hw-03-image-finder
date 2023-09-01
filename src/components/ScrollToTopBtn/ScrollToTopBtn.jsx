import { Component } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import { Button } from './ScrollToTopBtn.styled';
import { onWindowScrollToTop } from 'helpers/smoothScrollToTop';

export class ScrollToTopBtn extends Component {
  state = {
    isBtnShow: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollBtnShow);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollBtnShow);
  }

  onScrollBtnShow = () => {
    if (window.scrollY > 100) {
      this.setState({ isBtnShow: true });
    } else {
      this.setState({ isBtnShow: false });
    }
  };

  render() {
    const { isBtnShow } = this.state;

    return (
      isBtnShow && (
        <Button onClick={onWindowScrollToTop}>
          <BsArrowUpShort size={50} />
        </Button>
      )
    );
  }
}
