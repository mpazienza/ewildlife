import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { AUTHENTICATED } from '../constants';

// Components

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <header id="head" role="header">
        <div className="container">
          <Link to="/" className="logo">eWildlife</Link>

          <nav role="navigation">
            { isAuthenticated && <ul>
              <li><NavLink to="/intakes">Intakes</NavLink></li>
              <li><NavLink to="/contacts">Contacts</NavLink></li>
              <li><NavLink to="/reports">Reports</NavLink></li>
            </ul> }
          </nav>

          <div className="spacer"></div>

          <div className="user-menu">
            { !isAuthenticated && <Link to="/sign-in" className="btn btn-primary">Sign-in</Link> }
          </div>
          {/* <Menu.Menu position='right'>

            { isAuthenticated && <Dropdown className="item simple" text="Settings">
              <Dropdown.Menu>
                <Dropdown.Item as={ NavLink } to="/settings" text="Profile"></Dropdown.Item>
                <Dropdown.Item as={ NavLink } to="/organization" text="Organization"></Dropdown.Item>
                <Dropdown.Item as={ Link } to="/log-out" text="Log out"></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> }
          </Menu.Menu> */}
        </div>
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