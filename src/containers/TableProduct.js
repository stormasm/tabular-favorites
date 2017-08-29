import React from "react";
//import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';

import * as Table from "reactabular-table";





class TableProduct extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: this.getColumns(), // initial columns
    };
  }

  getColumns() {

    return [
        {
          property: "title",
          header: {
            label: "Title",
          },
          props: {
            style: { minWidth: 175, width: 175 }
          }
        },
        {
          property: "price",
          header: {
            label: "Price",
          }
        },
        {
          property: "inventory",
          header: {
            label: "Inventory",
          }
        },
        {
          property: "addtocart",
          header: {
            label: "Add to cart",
          },
          props: {
            style: { minWidth: 85, width: 85 }
          },
          cell: {
            formatters: [
              (value, { rowData }) => (
                <span
                  className="remove"
                  onClick={() => this.props.addToCart(rowData.id)} style={{ cursor: 'pointer' }}
                >
                  &#x271a;
                </span>
              )
            ]
          }
        }
    ];
}

  render() {
    const { rows } = this.props;
    // const { columns } = this.props;
    const { columns } = this.state;


    const hasRows = rows.length > 0;
    if (!hasRows) {
        return null;
    }

  return (
    <Table.Provider
      className="pure-table pure-table-striped"
      columns={columns}
    >
      <Table.Header />
      <Table.Body rows={rows} rowKey="id" />
    </Table.Provider>
  )}
}

/*
TableProduct.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array
}
*/
const mapStateToProps = state => ({
  rows: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(TableProduct)
