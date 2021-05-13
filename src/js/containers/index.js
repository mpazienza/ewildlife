import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
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
        <main id="main" role="content" className="ui container">
          { children }
        </main>
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