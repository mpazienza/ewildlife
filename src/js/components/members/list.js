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

  _renderItem() {
    return(
      <Table.Row>
        <Table.Cell className="table-intake-date">Jan 1, 2021</Table.Cell>
        <Table.Cell className="table-intake-type">Bird</Table.Cell>
        <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
        <Table.Cell className="table-intake-quantity" textAlign='center'>1</Table.Cell>
        <Table.Cell className="table-intake-actions"textAlign='center'>edit delete</Table.Cell>
      </Table.Row>
    );
  }

  _renderItems() {
    var items = [];

    return items;
  }

  render() {
    var items = this._renderItems();

    return (
      <Table celled striped selectable className="table-intake" color="green">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="table-intake-date" width={2}>Date</Table.HeaderCell>
            <Table.HeaderCell className="table-intake-type" width={3}>Type</Table.HeaderCell>
            <Table.HeaderCell className="table-intake-species">Species</Table.HeaderCell>
            <Table.HeaderCell className="table-intake-quantity" width={1} textAlign='center'>Qty</Table.HeaderCell>
            <Table.HeaderCell className="table-intake-actions" width={2} textAlign='center'>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell className="table-intake-date">Jan 1, 2021</Table.Cell>
            <Table.Cell className="table-intake-type">Bird</Table.Cell>
            <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
            <Table.Cell className="table-intake-quantity" textAlign='center'>1</Table.Cell>
            <Table.Cell className="table-intake-actions"textAlign='center'>edit delete</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="table-intake-date">Jan 1, 2021</Table.Cell>
            <Table.Cell className="table-intake-type">Bird</Table.Cell>
            <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
            <Table.Cell className="table-intake-quantity">1</Table.Cell>
            <Table.Cell className="table-intake-actions">edit delete</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="table-intake-date">Jan 1, 2021</Table.Cell>
            <Table.Cell className="table-intake-type">Bird</Table.Cell>
            <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
            <Table.Cell className="table-intake-quantity">1</Table.Cell>
            <Table.Cell className="table-intake-actions">edit delete</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="table-intake-date">Jan 1, 2021</Table.Cell>
            <Table.Cell className="table-intake-type">Bird</Table.Cell>
            <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
            <Table.Cell className="table-intake-quantity">1</Table.Cell>
            <Table.Cell className="table-intake-actions">edit delete</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="table-intake-date">Jan 1, 2021</Table.Cell>
            <Table.Cell className="table-intake-type">Bird</Table.Cell>
            <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
            <Table.Cell className="table-intake-quantity">1</Table.Cell>
            <Table.Cell className="table-intake-actions">edit delete</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="table-intake-date">Jan 1, 2021</Table.Cell>
            <Table.Cell className="table-intake-type">Bird</Table.Cell>
            <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
            <Table.Cell className="table-intake-quantity">1</Table.Cell>
            <Table.Cell className="table-intake-actions">edit delete</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="table-intake-date">Jan 1, 2021</Table.Cell>
            <Table.Cell className="table-intake-type">Bird</Table.Cell>
            <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
            <Table.Cell className="table-intake-quantity">1</Table.Cell>
            <Table.Cell className="table-intake-actions">edit delete</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="table-intake-date">Jan 1, 2021</Table.Cell>
            <Table.Cell className="table-intake-type">Bird</Table.Cell>
            <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
            <Table.Cell className="table-intake-quantity">1</Table.Cell>
            <Table.Cell className="table-intake-actions">edit delete</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="table-intake-date">Jan 1, 2021</Table.Cell>
            <Table.Cell className="table-intake-type">Bird</Table.Cell>
            <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
            <Table.Cell className="table-intake-quantity">1</Table.Cell>
            <Table.Cell className="table-intake-actions">edit delete</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="table-intake-date">Jan 1, 2021</Table.Cell>
            <Table.Cell className="table-intake-type">Bird</Table.Cell>
            <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
            <Table.Cell className="table-intake-quantity">1</Table.Cell>
            <Table.Cell className="table-intake-actions">edit delete</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

MemberList.defaultProps = {
};

MemberList.propTypes = {
  members: PropTypes.array
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    members: state.organization.members || []
  };
};

const MemberListConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(MemberList);

export default MemberListConnect;