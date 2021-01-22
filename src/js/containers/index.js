import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Sidebar from './sidebar';
import Logobar from './logobar';
import Navbar from './navbar';
import Persona from './persona';
import Content from './content';
import Explore from './explore';
import Modal from './modal';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { children, theme, isEmbed } = this.props;
    let { sidebar } = this.props.visibility;
    let logobar = true;
    let navbar = false;

    if (isEmbed) {
      logobar = false;
      navbar = true;
      sidebar = false;
    }

    return (
      <div id="app" className={`theme-${theme}`} ref="app">
        { sidebar && <Sidebar /> }
        <main id="main" role="content">
          { logobar && <Logobar /> }
          { navbar && <Navbar /> }
          <Persona />
          <Content>
            { children }
          </Content>
          <Explore />
        </main>
        <Modal />
      </div>
    );
  }
};

AppContainer.defaultProps = {
  children: []
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return Object.assign({}, {
    isEmbed: state.config.isEmbed,
    visibility: state.config.visibility
  });
};

const AppContainerConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AppContainer);

export default AppContainerConnect;