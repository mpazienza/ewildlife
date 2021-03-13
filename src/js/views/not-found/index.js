import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { Container, Header } from 'semantic-ui-react';

// Create the view
class NotFoundView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-not-found">
        <Header as="h1">404 Not Found</Header>
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
