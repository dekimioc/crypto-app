import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './InputAmount.style.scss'

const InputAmount = ({ name }) => {
  const [ammountData, setAmmountData] = useState(localStorage.getItem(name))

  const onFormSendHandler = (e) => {
    e.preventDefault()
    localStorage.setItem(name, ammountData)
  }

  const inputValueHandler = (e) => {
    setAmmountData(e.target.value)
  }

  return (
    <form className="submit-form" onSubmit={e => onFormSendHandler(e)}>
        <input id="number-input" type="number" value={ammountData} onChange={e => inputValueHandler(e)}/>
        <input type="submit" value="Submit" />
    </form>
  )
}

InputAmount.propTypes = {
  name: PropTypes.string.isRequired
}

export default InputAmount
