import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Pagination.style.scss'
import { paginationData } from '../../assets/pagination-data'

const Pagination = ({ getValue }) => {
  const [activeNumber, setActiveNumber] = useState(1)

  const getActivePageHandler = (e) => {
    setActiveNumber(parseInt(e.target.getAttribute('id')))
    localStorage.setItem('startNumber', e.target.getAttribute('datastart'))
  }

  return (

    <div className="pagination">
{paginationData.map(e => <p id={e.number} key={e.number} datastart={e.dataStart} className={activeNumber === e.number ? 'active' : null} onClick={(e) => { getValue(e); getActivePageHandler(e) }}>{e.number}</p>)}
    </div>
  )
}
Pagination.propTypes = {
  getValue: PropTypes.func.isRequired
}

export default Pagination
