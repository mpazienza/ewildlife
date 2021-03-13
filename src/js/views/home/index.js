import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AUTHENTICATED } from '../../constants';

// Components

// Create the view
class HomeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-home">
        <p>Home Page</p>
      </div>
    );
  }
}

HomeView.defaultProps = {
};

HomeView.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: ( AUTHENTICATED === state.auth.status )
  };
};

const HomeViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomeView);

export default HomeViewConnect;
