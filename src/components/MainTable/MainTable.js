import React, { useEffect } from 'react'
import axios from 'axios'
import TableRow from '../TableRow/TableRow'

const MainTable = () => {
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CRYPTO}`, { headers: { 'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_CRYPTO_API_KEY}` } })
      .then(response => {
        // handle success
        console.log(response)
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  })
  return (
    <table>
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
        <TableRow />
    </table>
  )
}

export default MainTable
