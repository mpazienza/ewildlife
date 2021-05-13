import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AUTHENTICATED } from '../../constants';

// Components
import IntakeList from '../../components/intake/list';

// Create the view
class IntakeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { intakes } = this.props;

    return (
      <div className="view view-intake">
        <h1>Intake</h1>

        <button>New Intake</button>

        <IntakeList intakes={ intakes } />
      </div>
    );
  }
}

IntakeView.defaultProps = {
};

IntakeView.propTypes = {
  intakes: PropTypes.array
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    intakes: state.intakes.list
  };
};

const IntakeViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(IntakeView);

export default IntakeViewConnect;
