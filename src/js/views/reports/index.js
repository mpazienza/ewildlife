import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components

// Create the view
class ReportView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-home">
        <h1>Reports</h1>
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
