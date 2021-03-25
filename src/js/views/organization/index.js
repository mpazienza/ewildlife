import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateOrganizationMetaData } from '../../actions/organization';

// Components
import { Header, Segment, Form, Input, Button } from 'semantic-ui-react';
import TaxonomyList from '../../components/taxonomy/list';
import MemberList from '../../components/members/list';

// Create the view
class OrganizationView extends Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();

    this.checkSave = this.checkSave.bind( this );
    this.save = this.save.bind( this );

    this.state = {
      disableSave: true
    };
  }

  checkSave( ) {
    const { organization } = this.props;
    var nameInput = this.nameRef.current.inputRef.current.value;

    this.setState( {
      disableSave: ( nameInput === organization.name )
    } );
  }

  save( e ) {
    if ( e ) {
      e.preventDefault();
    }

    var nameInput = this.nameRef.current.inputRef.current.value;

    this.props.updateOrganizationMetaData( nameInput );
  }

  render() {
    const { organization, taxonomy } = this.props;
    var { disableSave } = this.state;

    return (
      <div className="view view-settings">
        <Header as="h1">Organization</Header>

        <Segment>
          <Form>
            <Form.Field>
              <label>Name</label>
              <Input id="email" type="email" ref={ this.nameRef } onChange={ this.checkSave } defaultValue={ organization.name }/>
            </Form.Field>
            <Button type='submit' primary onClick={ this.save } disabled={ disableSave }>Save</Button>
          </Form>
        </Segment>

        <Segment>
          <Header as="h2">Animal Classifications</Header>

          <TaxonomyList families={ taxonomy.families }/>

          <Button primary>Add Type</Button>
        </Segment>

        <Segment>
          <Header as="h2">Members</Header>

          <MemberList members={ organization.members }/>

          <Button primary>Add Member</Button>
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
  organization: PropTypes.object,
  taxonomy: PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateOrganizationMetaData: ( name ) => dispatch( updateOrganizationMetaData( name ) )
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    organization: state.organization,
    taxonomy: state.taxonomy
  };
};

const OrganizationViewConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(OrganizationView);

export default OrganizationViewConnect;
