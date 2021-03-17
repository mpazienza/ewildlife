import React, { Component, useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { Form, Header, Input, Label, Segment } from 'semantic-ui-react';

// Create the view
class SettingsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, organization } = this.props;
    let memberType = ( organization.isOwner ) ? 'owner' : 'member';

    return (
      <div className="view view-settings">
        <Header as="h1">Settings</Header>

        <Segment>
          <Header as="h2">My Information</Header>

          <Form>
            <Form.Field>
              <label>Email</label>
              <Input id="email" type="email" value={ user.email }/>
            </Form.Field>
            <Form.Field>
              <label>First Name</label>
              <Input id="first_name" value={ user.first_name }/>
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <Input id="last_name" value={ user.last_name }/>
            </Form.Field>
          </Form>

          <p>Is <strong>{ memberType }</strong> of { organization.name } organization</p>
        </Segment>
      </div>
    );
  }
}

SettingsView.defaultProps = {
};

SettingsView.propTypes = {
  user: PropTypes.object,
  organization: PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    organization: state.organization
  };
};

const SettingsViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SettingsView);

export default SettingsViewConnect;
