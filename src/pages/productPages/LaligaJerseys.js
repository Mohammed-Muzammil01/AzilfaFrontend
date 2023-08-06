import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import laligaProducts from '../../data/LaligaProducts'
import { Server } from '../../S-link'
import { Link } from 'react-router-dom'

function LaligaJerseys() {
  return (
    <>

    {/* nav start */}

    <Navbar />

    {/* nav end */}


    <div className="container d-flex justify-content-center mt-50 mb-50 p-3"  style={{ marginTop: "100px" }}>
        <div className="row">

            {
                laligaProducts.map((productData) => (
                    <div className="col-md-4 mt-4">
                <div className="card" style={{height:"600px"}}>
                    <div className="card-body" style={{height:"400px"}}>
                        <div className="card-img-actions" style={{height:"100%"}}>

                            <img src={`${Server}/jerseys/${productData.images[0]}`} className="card-img img-fluid" style={{height:"100%"}}  alt="" />

                        </div>
                    </div>

                    <div className="card-body bg-light text-center d-flex flex-column" style={{height:"200px"}}>
                        <div className="mb-2">
                            <h3 className="font-weight-semibold mb-2">
                                <Link to={`/jersey/${productData.id}`} className="text-default mb-2" data-abc="true">{productData.name}</Link>
                            </h3>

                        </div>

                        <h5 className="mb-0 font-weight-semibold" style={{ color: "#000" }}>&#8377;799.00</h5>

                        <Link to={`/jersey/${productData.id}`} type="button" className="btn bg-dark mt-2"><i className="fa fa-cart-plus mr-2"></i>Buy</Link>

                    </div>
                </div>
            </div>
                ))
            }

        </div>
    </div>

    <Footer />
</>

  )
}

export default LaligaJerseys