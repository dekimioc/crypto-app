import React from 'react'
import './ErrorModal.style.scss'
import PropTypes from 'prop-types'

const ErrorModal = ({ errorText }) => {
  return (
    <div className="error-message-container">
        <h1 className="color-error">{errorText}</h1>
    </div>
  )
}

ErrorModal.propTypes = {
  errorText: PropTypes.string.isRequired
}

export default ErrorModal
