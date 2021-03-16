import React from 'react'
import PropTypes from 'prop-types'

const TableRow = ({ name, symbol, price, percent }) => {
  return (
    <tr>
        <td>{name}</td>
        <td>{symbol}</td>
        <td>$ {price.toFixed(2)}</td>
        <td>{percent.toFixed(2)} %</td>
        <td>input</td>
        <td>$ </td>
    </tr>
  )
}

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired
}
export default TableRow
