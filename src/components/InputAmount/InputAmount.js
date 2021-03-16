import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './InputAmount.style.scss'

const InputAmount = ({ name, action }) => {
  const [ammountData, setAmmountData] = useState(localStorage.getItem(name) === null ? '' : localStorage.getItem(name))
  const [disabledButton, setDisabledButton] = useState(true)

  const onFormSendHandler = (e) => {
    e.preventDefault()
    localStorage.setItem(name, ammountData)
    action()
  }

  const inputValueHandler = (e) => {
    const regex = /^[0-9\b]+$/
    if (e.target.value === '' || regex.test(e.target.value)) {
      setAmmountData(e.target.value)
      setDisabledButton(false)
    }
    if (e.target.value.length === 0) {
      setDisabledButton(true)
    }
  }

  return (
    <form className="submit-form" onSubmit={e => onFormSendHandler(e)}>
        <input id="number-input" type="text" value={ammountData} onChange={e => inputValueHandler(e)}/>
        <input type="submit" value="Submit" className={disabledButton ? 'disabled' : 'enabled'} disabled={disabledButton}/>
    </form>
  )
}

InputAmount.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}

export default InputAmount
