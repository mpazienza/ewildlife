import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { Table } from 'semantic-ui-react';

/**
 * MemberList
 */
class MemberList extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem( member ) {
    return(
      <Table.Row key={ `member-row-${ member.uid }` }>
        <Table.Cell className="table-member-last-name">{ member.last_name }</Table.Cell>
        <Table.Cell className="table-member-first-name">{ member.first_name }</Table.Cell>
        <Table.Cell className="table-member-role" textAlign='center'>{ member.isOwner ? 'Owner' : 'Member' }</Table.Cell>
        <Table.Cell className="table-member-actions" textAlign='center'>
          { !member.isOwner && <a href="#">Delete</a> }
        </Table.Cell>
      </Table.Row>
    );
  }

  _renderItems() {
    var items = [];
    const { members } = this.props;

    if ( members.length ) {
      members.forEach( member => {
        items.push( this._renderItem( member ) );
      } );
    }

    return items;
  }

  render() {
    var items = this._renderItems();

    return (
      <Table celled striped selectable className="table-member" color="green">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="table-member-last-name" width={6}>Last Name</Table.HeaderCell>
            <Table.HeaderCell className="table-member-first-name" width={6}>First Name</Table.HeaderCell>
            <Table.HeaderCell className="table-member-role" width={2} textAlign='center'>Role</Table.HeaderCell>
            <Table.HeaderCell className="table-actions" width={2} textAlign='center'>&nbsp;</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { items }
        </Table.Body>
      </Table>
    );
  }
}

MemberList.defaultProps = {
  members: []
};

MemberList.propTypes = {
  members: PropTypes.array
};

export default MemberList;