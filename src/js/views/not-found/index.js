import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components

// Create the view
class NotFoundView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-not-found">
        <h1>404 Not Found</h1>
      </div>
    );
  }
}

NotFoundView.defaultProps = {
};

NotFoundView.propTypes = {
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

const NotFoundViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(NotFoundView);

export default NotFoundViewConnect;
