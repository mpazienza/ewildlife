import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    const { families } = this.props;
    var family = {};
    var species = {};

    if ( families.length ) {
      family = families.find( fData => {
        return fData.uid === intake.family;
      } );

      if ( family.species.length ) {
        species = family.species.find( sData => {
          return sData.uid === intake.species;
        } );
      }
    }

    return(
      <Table.Row key={ `intake-row-${ intake.uid }`}>
        <Table.Cell className="table-intake-date">{ Moment.unix( intake.date.seconds ).format('MM/DD/YYYY') }</Table.Cell>
        <Table.Cell className="table-intake-type">{ family && family.name }</Table.Cell>
        <Table.Cell className="table-intake-species">{ species && species.name }</Table.Cell>
        <Table.Cell className="table-intake-quantity" textAlign='center'>{ intake.quantity }</Table.Cell>
        <Table.Cell className="table-intake-actions"textAlign='center'>edit delete</Table.Cell>
      </Table.Row>
    );
  }

  _renderItems() {
    var items = [];
    const { intakes, families } = this.props;

    if ( intakes.length && families.length ) {
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
  intakes: PropTypes.array,
  families: PropTypes.array
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    families: state.taxonomy.families
  };
};

const IntakeListConnect = connect(
  mapStateToProps, 
  mapDispatchToProps
)(IntakeList);

export default IntakeListConnect;