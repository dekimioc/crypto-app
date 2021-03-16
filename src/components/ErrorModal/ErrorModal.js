import React from 'react'
import './ErrorModal.style.scss'
import PropTypes from 'prop-types'

const ErrorModal = ({ errorText }) => {
  return (
    <div className="error-message-container text-center mt-5">
        <h1 className="color-error">{errorText}</h1>
    </div>
  )
}

ErrorModal.propTypes = {
  errorText: PropTypes.string.isRequire
}

export default ErrorModal
