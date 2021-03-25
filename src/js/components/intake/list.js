import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// Components
import { Table } from 'semantic-ui-react';

/**
 * IntakeList
 */
class IntakeList extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem( intake ) {
    console.log( intake );
    return(
      <Table.Row key={ `intake-row-${ intake.uid }`}>
        <Table.Cell className="table-intake-date">{ Moment.unix( intake.date.seconds ).format('MM/DD/YYYY') }</Table.Cell>
        <Table.Cell className="table-intake-type">Bird</Table.Cell>
        <Table.Cell className="table-intake-species">Mockingbird</Table.Cell>
        <Table.Cell className="table-intake-quantity" textAlign='center'>{ intake.quantity }</Table.Cell>
        <Table.Cell className="table-intake-actions"textAlign='center'>edit delete</Table.Cell>
      </Table.Row>
    );
  }

  _renderItems() {
    var items = [];
    const { intakes } = this.props;

    if ( intakes.length ) {
      intakes.forEach( intake => {
        items.push( this._renderItem( intake ) );
      } );
    }

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
          { items }
        </Table.Body>
      </Table>
    );
  }
}

IntakeList.defaultProps = {
  intakes: []
};

IntakeList.propTypes = {
  intakes: PropTypes.array
};

export default IntakeList;