import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import './CryptoPage.style.scss'

const CryptoPage = ({ match }) => {
  const [singleCryptoData, setSingleCryptoData] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CORS_SOLUTION}${process.env.REACT_APP_SINGLE_CRYPTO_DATA}?id=${match.params.id}`, { headers: { 'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_CRYPTO_API_KEY}` } })
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
    <div className="crypto-container">
            {isLoaded
              ? <>
              <img src={singleCryptoData.logo} />
              <p>Name: <strong>{singleCryptoData.name }</strong></p>
              <p>Symbol: <strong>{singleCryptoData.symbol}</strong></p>
              <p>Id: <strong>{singleCryptoData.id}</strong></p>
              <p>Category: <strong>{singleCryptoData.category}</strong></p>
              <p>Added Date: <strong>{singleCryptoData.date_added}</strong></p>
              <p>Twitter User Name: <strong>{singleCryptoData.twitter_username || '/'}</strong></p>
              <p>Slug: <strong>{singleCryptoData.slug || '/'}</strong></p>
              <p>Subreddit: <strong>{singleCryptoData.subreddit || '/'}</strong></p>
              <p>Description: <strong>{singleCryptoData.description}</strong></p>
              <div>Tags Gropus: <ul>{singleCryptoData['tag-groups'].map((e, i) => <strong key={i}><li>{e}, </li></strong>)}</ul></div>
              <div>Tags Name: <ul>{singleCryptoData['tag-names'].map((e, i) => <strong key={i}><li >{e}, </li></strong>)}</ul></div>
              <div>Tags: <ul>{singleCryptoData.tags.map((e, i) => <strong key={i}><li>{e}, </li></strong>)}</ul></div>
              <p>Notice: <strong>{singleCryptoData.notice || '/'}</strong></p>
            {singleCryptoData.platform
              ? <div>Platform:
                <ul>
                  <li>ID: <strong>{singleCryptoData.platform.id}</strong></li>
                  <li>Name: <strong>{singleCryptoData.platform.name}</strong></li>
                  <li>Slug: <strong>{singleCryptoData.platform.slug}</strong></li>
                  <li>Symbol: <strong>{singleCryptoData.platform.symbol}</strong></li>
                  <li>Tokken Address: <strong>{singleCryptoData.platform.tokken_address || '/'}</strong></li>
                </ul>
              </div>
              : null
}
              <div>
                <p>Urls:</p>
                {Object.entries(singleCryptoData.urls).map((e, i) => <ul className="web-links" key={i}><li><span>{e[0]} :</span> {e[1].length > 1 ? e[1].map((e, i) => <a key={i} href={e} target='_blank' rel="noreferrer"><strong>{e || '/'}</strong></a>) : <a href={e[1].length === 0 ? '#' : e[1]}><strong>{e[1].length === 0 ? '/' : e[1]}</strong></a>}</li></ul>)}
                </div>
              <p>Offical Website: <a href={singleCryptoData.urls.website} target="_blank" rel="noreferrer"><strong>{singleCryptoData.urls.website}</strong></a></p>
              <span className="back-button"><Link to="/"><strong>Back To Table</strong></Link></span>
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
