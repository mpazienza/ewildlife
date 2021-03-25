import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { Table } from 'semantic-ui-react';

/**
 * TaxonomyList
 */
class TaxonomyList extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem( family ) {
    return(
      <Table.Row key={ `family-row-${ family.uid }` }>
        <Table.Cell className="table-taxonomy-family-name">{ family.name }</Table.Cell>
        <Table.Cell className="table-taxonomy-species-count" textAlign='center'>{ family.species.length || 0 }</Table.Cell>
      </Table.Row>
    );
  }

  _renderItems() {
    var items = [];
    const { families } = this.props;

    if ( families.length ) {
      families.forEach( family => {
        items.push( this._renderItem( family ) );
      } );
    }

    return items;
  }

  render() {
    var items = this._renderItems();

    return (
      <Table celled striped selectable className="table-taxonomy" color="green">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="table-taxonomy-family-name">Type</Table.HeaderCell>
            <Table.HeaderCell className="table-taxonomy-species-count" width={2} textAlign='center'>Species</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { items }
        </Table.Body>
      </Table>
    );
  }
}

TaxonomyList.defaultProps = {
  families: []
};

TaxonomyList.propTypes = {
  families: PropTypes.array
};

export default TaxonomyList;