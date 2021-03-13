import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { AUTHENTICATED } from '../constants';

// Components
import { Container, Menu } from 'semantic-ui-react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <header id="head" role="header">
        <Menu className="fixed inverted">
          <Container>
            <Menu.Item header as={ Link } to="/">eWildlife</Menu.Item>
            { isAuthenticated && <Menu.Item name="Intake" as={ NavLink } to="/intake" /> }
            { isAuthenticated && <Menu.Item name="Reports" as={ NavLink } to="/reports" /> }
            <Menu.Menu position='right'>
              { isAuthenticated && <Menu.Item name="Settings" as={ Link } to="/settings" /> }
            </Menu.Menu>
          </Container>
        </Menu>
      </header>
    );
  }
}

Header.defaultProps = {
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return Object.assign({}, {
    isAuthenticated: ( AUTHENTICATED === state.auth.status )
  });
};

const HeaderConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Header);

export default withRouter(HeaderConnect);