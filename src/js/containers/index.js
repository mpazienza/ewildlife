import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import { Container } from 'semantic-ui-react';
import Header from './header';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { children } = this.props;

    return (
      <div id="app">
        <Header/>
        <Container as="main" id="main" role="content">
          { children }
        </Container>
      </div>
    );
  }
}

AppContainer.defaultProps = {
  children: []
};

AppContainer.propTypes = {
  children: PropTypes.node
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return Object.assign({}, {
  });
};

const AppContainerConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AppContainer);

export default AppContainerConnect;