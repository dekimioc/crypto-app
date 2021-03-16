import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
import TableRow from '../TableRow/TableRow'
import Pagination from '../Pagination/Pagination'
import './MainTable.style.scss'

const MainTable = () => {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CORS_SOLUTION}${process.env.REACT_APP_CRYPTO}?start=1&limit=10`, { headers: { 'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_CRYPTO_API_KEY}` } })
      .then(response => {
      // handle success
        if (response.status === 200) {
          setData(response.data.data)
          setIsLoaded(true)
        }
      })
      .catch(error => {
      // handle error
        console.log(error)
      })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(`${process.env.REACT_APP_CORS_SOLUTION}$${process.env.REACT_APP_CRYPTO}?start=${localStorage.getItem('startNumber')}&limit=10`, { headers: { 'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_CRYPTO_API_KEY}` } })
        .then(response => {
        // handle success
          if (response.status === 200) {
            setData(response.data.data)
            setIsLoaded(true)
          }
        })
        .catch(error => {
        // handle error
          console.log(error)
        })
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const getDataValue = (e) => {
    axios.get(`${process.env.REACT_APP_CORS_SOLUTION}${process.env.REACT_APP_CRYPTO}?start=${e.target.getAttribute('datastart')}&limit=10`, { headers: { 'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_CRYPTO_API_KEY}` } })
      .then(response => {
        // handle success
        if (response.status === 200) {
          setData(response.data.data)
          setIsLoaded(true)
        }
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  }
  return (
  <>
{isLoaded
  ? <div className="table"><table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Short Name</th>
            <th>$ Value</th>
            <th>Last 24h</th>
            <th>Amount you Own</th>
            <th>$ Value of Your Coin</th>
        </tr>
    </thead>
<tbody>
    {data.map((e, i) => <TableRow id={e.id} key={e.id} name={e.name} symbol={e.symbol} price={e.quote.USD.price} percent={e.quote.USD.percent_change_24h} inputValue={localStorage.getItem(e.name)} rowColor={i} />
    )}
</tbody>
    </table>
  <Pagination getValue={e => getDataValue(e)}/>
</div>
  : <Loader />
}
</>
  )
}

export default MainTable
