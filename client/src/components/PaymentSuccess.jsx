import React from 'react'
import { useSearchParams } from 'react-router-dom'

function PaymentSuccess() {

    const searchquery = useSearchParams()[0];

     const reference = searchquery.get('reference')
  return (
    <div>
      <h1>order successfully</h1>
      <p>{reference}</p>
    </div>
  )
}

export default PaymentSuccess
