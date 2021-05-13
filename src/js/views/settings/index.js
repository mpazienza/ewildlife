import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUserEmail, updateUserMetaData } from '../../actions/user';

// Components

// Create the view
class SettingsView extends Component {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();

    this.save = this.save.bind( this );
  }

  save( e ) {
    if ( e ) {
      e.preventDefault();
    }

    const { user } = this.props;

    var emailInput = this.emailRef.current.inputRef.current.value;
    var firstNameInput = this.firstNameRef.current.inputRef.current.value;
    var lastNameInput = this.lastNameRef.current.inputRef.current.value;

    if ( emailInput !== user.email ) {
      this.props.updateUserEmail( emailInput );
    }

    this.props.updateUserMetaData( firstNameInput, lastNameInput );
  }

  render() {
    const { user, organization } = this.props;
    const { isOwner } = organization;
    let memberType = ( isOwner ) ? 'owner' : 'member';

    return (
      <div className="view view-settings">
        <h1>Settings</h1>

        {/* <Segment>
          <Header as="h2">My Information</Header>

          <Form>
            <Form.Field>
              <label>Email</label>
              <Input id="email" type="email" ref={ this.emailRef } defaultValue={ user.email }/>
            </Form.Field>
            <Form.Group>
              <Form.Field width={8}>
                <label>First Name</label>
                <Input id="first_name" ref={ this.firstNameRef } defaultValue={ user.first_name }/>
              </Form.Field>
              <Form.Field width={8}>
                <label>Last Name</label>
                <Input id="last_name" ref={ this.lastNameRef } defaultValue={ user.last_name }/>
              </Form.Field>
            </Form.Group>
            <Button type='submit' primary onClick={ this.save }>Save</Button>
          </Form>

          <Divider/>

          <p>Is <strong>{ memberType }</strong> of { organization.name } organization</p>
        </Segment> */}
      </div>
    );
  }
}

SettingsView.defaultProps = {
};

SettingsView.propTypes = {
  updateUserEmail: PropTypes.func,
  updateUserMetaData: PropTypes.func,
  user: PropTypes.object,
  organization: PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserEmail: ( newEmail ) =>  dispatch( updateUserEmail( newEmail ) ),
    updateUserMetaData: ( newFirstName, newLastName ) => dispatch( updateUserMetaData( newFirstName, newLastName ) )
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
