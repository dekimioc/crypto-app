import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.style.scss'

const Pagination = ({ getValue }) => {
  return (
    <div className="pagination">
        <p datastart="1" className="active" onClick={(e) => getValue(e)}>1</p>
        <p datastart="11" onClick={(e) => getValue(e)}>2</p>
        <p datastart="21" onClick={(e) => getValue(e)}>3</p>
        <p datastart="31" onClick={(e) => getValue(e)}>4</p>
        <p datastart="41" onClick={(e) => getValue(e)}>5</p>
    </div>
  )
}
Pagination.propTypes = {
  getValue: PropTypes.func.isRequired
}

export default Pagination
