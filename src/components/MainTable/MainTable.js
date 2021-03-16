import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
import TableRow from '../TableRow/TableRow'

const MainTable = () => {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CRYPTO}`, { headers: { 'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_CRYPTO_API_KEY}` } })
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
  return (
  <>
{isLoaded
  ? <table>
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
    {data.map((e, i) => <TableRow key={e.id} name={e.name} symbol={e.symbol} price={e.quote.USD.price} percent={e.quote.USD.percent_change_24h} inputValue={localStorage.getItem(e.name)} rowColor={i} />
    )}
</tbody>
    </table>
  : <Loader />
}
</>
  )
}

export default MainTable
