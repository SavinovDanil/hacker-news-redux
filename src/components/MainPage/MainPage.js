import { getNewsIds } from '../../store/reducers/main';
import React from 'react';
import { connect } from 'react-redux';
import Loader from '../loader/Loader';
import News from './News';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.getNewsIds();
    this.intervalId = setInterval(() => this.props.getNewsIds(), 60000);

    console.log('Обновили');
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return this.props.news.length < 99 ? <Loader /> : <News {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    news: state.mainPage.news,
  };
};

export default connect(mapStateToProps, { getNewsIds })(MainPage);
