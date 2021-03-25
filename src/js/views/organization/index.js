import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateOrganizationMetaData } from '../../actions/organization';

// Components
import { Header, Segment, Form, Input, Button } from 'semantic-ui-react';

// Create the view
class OrganizationView extends Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();

    this.save = this.save.bind( this );
  }

  save( e ) {
    if ( e ) {
      e.preventDefault();
    }

    var nameInput = this.nameRef.current.inputRef.current.value;

    this.props.updateOrganizationMetaData( nameInput );
  }

  render() {
    const { organization } = this.props;

    return (
      <div className="view view-settings">
        <Header as="h1">Organization</Header>

        <Segment>
          <Form>
            <Form.Field>
              <label>Name</label>
              <Input id="email" type="email" ref={ this.nameRef } defaultValue={ organization.name }/>
            </Form.Field>
            <Button type='submit' primary onClick={ this.save }>Save</Button>
          </Form>
        </Segment>

        <Segment>
          <Header as="h2">Animal Classification</Header>
        </Segment>

        <Segment>
          <Header as="h2">Members</Header>
        </Segment>
      </div>
    );
  }
}

OrganizationView.defaultProps = {
};

OrganizationView.propTypes = {
  updateOrganizationMetaData: PropTypes.func,
  user: PropTypes.object,
  organization: PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateOrganizationMetaData: ( name ) => dispatch( updateOrganizationMetaData( name ) )
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    organization: state.organization
  };
};

const OrganizationViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(OrganizationView);

export default OrganizationViewConnect;
