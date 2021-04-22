import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AUTHENTICATED } from '../../constants';

// Components
import { Button, Header } from 'semantic-ui-react';
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
        <Header as="h1">Intake</Header>

        <Button primary>New Intake</Button>

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
