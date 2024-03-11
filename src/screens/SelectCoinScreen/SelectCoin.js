import React, {Component} from 'react';
import {connect} from 'react-redux';
import SelectCoin_Component from './SelectCoin_Component';
import {goBack} from '../../navigation/NavigationUtils';

class SelectCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
      coinList: Array(9)
        .fill(0)
        .map((_, i) => i),
    };
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.onChangeSearchWord = this.onChangeSearchWord.bind(this);
    this.onPressRightContent = this.onPressRightContent.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
  }

  componentDidMount() {}

  onPressLeftContent = () => {
    goBack();
  };

  onChangeSearchWord = word => {
    this.setState({
      searchWord: word,
    });
  };

  onPressRightContent = () => {
    this.setState({
      searchWord: '',
    });
  };

  onItemClick = (item, index) => {};

  render() {
    const {searchWord, coinList} = this.state;
    return (
      <>
        <SelectCoin_Component
          onPressLeftContent={this.onPressLeftContent}
          searchWord={searchWord}
          onChangeSearchWord={this.onChangeSearchWord}
          onPressRightContent={this.onPressRightContent}
          coinList={coinList}
          onItemClick={this.onItemClick}
        />
      </>
    );
  }
}

const mapActionCreators = {};
const mapStateToProps = state => {
  return {
    isInternetConnected: state.global.isInternetConnected,
    isLoading: state.global.loading,
  };
};
export default connect(mapStateToProps, mapActionCreators)(SelectCoin);
