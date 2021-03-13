import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import IntakeList from '../../components/intake/list';

// Create the view
class IntakeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view view-intake">
        <h1>Intake</h1>
        <IntakeList/>
      </div>
    );
  }
}

IntakeView.defaultProps = {
};

IntakeView.propTypes = {
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

const IntakeViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(IntakeView);

export default IntakeViewConnect;
