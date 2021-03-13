import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { Header } from 'semantic-ui-react';

// Create the view
class ReportView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-home">
        <Header as="h1">Reports</Header>
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
