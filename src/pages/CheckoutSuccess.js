import React from 'react'

function CheckoutSuccess() {
  const orderId = localStorage.getItem('orderId') || '789789';
  return (
    <>
      <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body text-center">
            <h2 className="mb-4">Payment Successful!</h2>
            <p>Thank you for your purchase.</p>
            <p>Your order id is: {orderId}</p>
            <a href="/" className="btn btn-primary mt-3">Back to Home</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default CheckoutSuccess