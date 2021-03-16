import React, { useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const CryptoPage = ({ match }) => {
  console.log(match)
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SINGLE_CRYPTO_DATA}?id=${match.params.id}`, { headers: { 'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_CRYPTO_API_KEY}` } })
      .then(response => {
        // handle success
        if (response.status === 200) {
          console.log(response)
        }
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  }, [])
  return (
    <div>
    <h1>CryptoPage</h1>
</div>
  )
}

CryptoPage.propTypes = {
  match: PropTypes.object.isRequired
}

export default withRouter(CryptoPage)
