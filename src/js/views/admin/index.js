import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

// Components

// Create the view
class AdminView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-home">
        <p>Admin Page</p>
      </div>
    );
  }
}

AdminView.defaultProps = {
};

AdminView.propTypes = {
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

const AdminViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AdminView);

export default AdminViewConnect;
