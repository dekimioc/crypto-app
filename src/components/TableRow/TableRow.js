import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InputAmount from '../InputAmount/InputAmount'
import './TableRow.style.scss'
import { Link } from 'react-router-dom'

const TableRow = ({ name, symbol, price, percent, rowColor, id }) => {
  const [isChangedUserValue, setIsChangedUserValue] = useState(false)

  const userValueChangeHandler = () => {
    setIsChangedUserValue(!isChangedUserValue)
  }
  useState(() => {}, [isChangedUserValue])

  return (
    <tr className={rowColor % 2 === 0 ? 'gray' : 'white'}>
        <td className="link"><Link to={`${name}/${id}`}>{name}</Link></td>
        <td>{symbol}</td>
        <td>$ {price.toFixed(2)}</td>
        <td className={percent < 0 ? 'red' : 'green'}>{percent.toFixed(2)} %</td>
        <td><InputAmount name={name} action={userValueChangeHandler}/></td>
        <td>$ {(localStorage.getItem(name) * price).toFixed(2)}</td>
    </tr>
  )
}

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  rowColor: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
}
export default TableRow
