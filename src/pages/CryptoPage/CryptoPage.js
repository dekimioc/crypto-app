import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'

const CryptoPage = ({ match }) => {
  const [singleCryptoData, setSingleCryptoData] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SINGLE_CRYPTO_DATA}?id=${match.params.id}`, { headers: { 'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_CRYPTO_API_KEY}` } })
      .then(response => {
        // handle success
        if (response.status === 200) {
          console.log(response.data)
          setSingleCryptoData(response.data.data[`${match.params.id}`])
          setIsLoaded(true)
        }
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  }, [])
  return (
    <div>
      {console.log(singleCryptoData)}
            {isLoaded
              ? <>
              <img src={singleCryptoData.logo} />
              <p>Name: {singleCryptoData.name}</p>
              <p>Symbol: {singleCryptoData.symbol}</p>
              <p>Category: {singleCryptoData.category}</p>
              <p>Twitter User Name: {singleCryptoData.twitter_username}</p>
              <p>Twitter Link: {singleCryptoData.urls.twitter}</p>
              <p>Description: <strong>{singleCryptoData.description}</strong></p>
              <p>Tags Gropus: {singleCryptoData['tag-groups'].map((e, i) => <span key={i}>{e}, </span>)}</p>
              <p>Tags Name: {singleCryptoData['tag-names'].map((e, i) => <span key={i}>{e}, </span>)}</p>
              <p>Tags: {singleCryptoData.tags.map((e, i) => <span key={i}>{e}, </span>)}</p>
              <p>Notice: <bold>{singleCryptoData.notice}</bold></p>
            {singleCryptoData.platform
              ? <div>Platform:
                <ul>
                  <li>ID: {singleCryptoData.platform.id}</li>
                  <li>Name: {singleCryptoData.platform.name}</li>
                  <li>Slug: {singleCryptoData.platform.slug}</li>
                  <li>Symbol: {singleCryptoData.platform.symbol}</li>
                  <li>Tokken Address: {singleCryptoData.platform.tokken_address}</li>
                </ul>
              </div>
              : null
}

              <p>Offical Website: <Link to={singleCryptoData.urls.website}>{singleCryptoData.urls.website}</Link></p>
</>
              : <Loader />
}
    </div>
  )
}

CryptoPage.propTypes = {
  match: PropTypes.object.isRequired
}

export default withRouter(CryptoPage)
