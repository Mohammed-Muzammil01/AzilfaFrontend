import React from 'react'

function CheckoutFailure() {
  return (
    <>
    
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card border-danger">
            <div className="card-body text-center">
              <h3 className="card-title text-danger">Checkout Failed</h3>
              <p className="card-text">
                We apologize, but the payment was not successful.
              </p>
              <p className="card-text">
                Please try again or contact our support team.
              </p>
              <a href="/" className="btn btn-primary">
                Back to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default CheckoutFailure