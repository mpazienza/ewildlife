import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Link, withRouter } from 'react-router-dom';

// Components
import { Container, Menu } from 'semantic-ui-react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header id="head" role="header">
        <Menu className="fixed inverted">
          <Container>
            <Menu.Item header>eWildlife</Menu.Item>
            <Menu.Item name="Intake" as={ NavLink } to="/intake" />
            <Menu.Item name="Reports" as={ NavLink } to="/reports" />
            <Menu.Menu position='right'>
              <Menu.Item name="Settings" as={ Link } to="/settings" />
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
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return Object.assign({}, {
  });
};

const HeaderConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Header);

export default withRouter(HeaderConnect);