import React from "react";
import PropTypes from "prop-types";
import * as Table from "reactabular-table";

const TableProduct  = ({ rows, columns }) => {
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

TableProduct.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array
}

export default TableProduct
