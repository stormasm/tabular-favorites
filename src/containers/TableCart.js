import React from "react";
//import PropTypes from "prop-types";

import { connect } from "react-redux";
import { checkout, removeFromCart } from "../actions";
import { getTotal, getCartProducts } from "../reducers";

import * as Table from "reactabular-table";



class TableCart extends React.Component {

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
            label: "Title"
          },
          props: {
            style: { minWidth: 175, width: 175 }
          }
        },
        {
          property: "price",
          header: {
            label: "Price"
          }
        },
        {
          property: "quantity",
          header: {
            label: "Quantity"
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
TableCart.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array
}
*/

const mapStateToProps = state => ({
  rows: getCartProducts(state),
  total: getTotal(state)
});

export default connect(
  mapStateToProps,
  { checkout, removeFromCart }
)(TableCart);
