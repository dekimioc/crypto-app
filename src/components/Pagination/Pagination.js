import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Pagination.style.scss'
import { paginationData } from '../../assets/pagination-data'

const Pagination = ({ getValue }) => {
  const [paginationNumber, setPaginationNumber] = useState(parseInt(localStorage.getItem('paginationNumber')))
  const getActivePageHandler = (e) => {
    localStorage.setItem('startNumber', e.target.getAttribute('datastart'))
    localStorage.setItem('paginationNumber', e.target.getAttribute('id'))
    setPaginationNumber(parseInt(e.target.getAttribute('id')))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (

    <div className="pagination">
{paginationData.map(e => <p id={e.number} key={e.number} datastart={e.dataStart} className={paginationNumber === e.number ? 'active' : null} onClick={(e) => { getValue(e); getActivePageHandler(e) }}>{e.number}</p>)}
    </div>
  )
}
Pagination.propTypes = {
  getValue: PropTypes.func.isRequired
}

export default Pagination
