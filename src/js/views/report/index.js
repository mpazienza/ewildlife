import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

// Components

// Create the view
class ReportView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-home">
        <p>Report Page</p>
      </div>
    );
  }
}

ReportView.defaultProps = {
};

ReportView.propTypes = {
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

const ReportViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ReportView);

export default ReportViewConnect;
