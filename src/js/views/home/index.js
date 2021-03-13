import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

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
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

const HomeViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomeView);

export default HomeViewConnect;
