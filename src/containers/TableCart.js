import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { checkout, removeFromCart } from "../actions";
import { getTotal, getCartProducts } from "../reducers";

import * as Table from "reactabular-table";

const columns = [
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

const TableCart  = ({ rows }) => {
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
  )
}

TableCart.propTypes = {
  rows: PropTypes.array,
//  columns: PropTypes.array
}

const mapStateToProps = state => ({
  columns: columns,
  products: getCartProducts(state),
  total: getTotal(state)
});

export default connect(
  mapStateToProps,
  { checkout, removeFromCart }
)(TableCart);
