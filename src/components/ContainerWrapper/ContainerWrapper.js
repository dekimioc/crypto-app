import React from 'react'
import PropTypes from 'prop-types'
import './ContainerWrapper.style.scss'

const ContainerWrapper = (props) => {
  return (
    <div className="container-wrapper">{props.children}</div>
  )
}

ContainerWrapper.propTypes = {
  children: PropTypes.object.isRequired
}

export default ContainerWrapper
