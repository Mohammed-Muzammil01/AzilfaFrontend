import React from 'react'

function ProductPage() {
    return (
        <>

{/* nav start */}

<section className="smart-scroll" id='sec1'>
                <div className="container-fluid" style={{backgroundColor:"#000"}}>
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <a className="navbar-brand heading-black" href="/" style={{ color: "#fff" }}>
                            AZILFA
                        </a>
                        <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span data-feather="grid"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="/">Shop</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="/">FAQs</a>
                                </li>
                                <li className="nav-item">
                        <a className="nav-link page-scroll" href="/">Contact Us</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link page-scroll d-flex flex-row align-items-center text-primary" href="/">
                            <em data-feather="layout" width="18" height="18" className="mr-2"></em>
                            Try Generator
                        </a>
                    </li> */}
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>

{/* nav end */}






            <div className="container d-flex justify-content-center mt-50 mb-50" style={{marginTop:"100px"}}>
                <div className="row">
                <div className="col-md-4 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-img-actions">

                                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" className="card-img img-fluid" width="96" height="350" alt=""/>

                                </div>
                            </div>

                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2">
                                        <a href="/" className="text-default mb-2" data-abc="true">Toshiba Notebook with 500GB HDD & 8GB RAM</a>
                                    </h6>

                                    <a href="/" className="text-muted" data-abc="true">Laptops & Notebooks</a>
                                </div>

                                <h3 className="mb-0 font-weight-semibold" style={{color:"#000"}}>$250.99</h3>

                                


                                <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i>Buy</button>

                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 mt-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-img-actions">

                                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" className="card-img img-fluid" width="96" height="350" alt=""/>

                                </div>
                            </div>

                            <div className="card-body bg-light text-center">
                                <div className="mb-2">
                                    <h6 className="font-weight-semibold mb-2">
                                        <a href="/" className="text-default mb-2" data-abc="true">Toshiba Notebook with 500GB HDD & 8GB RAM</a>
                                    </h6>

                                    <a href="/" className="text-muted" data-abc="true">Laptops & Notebooks</a>
                                </div>

                                <h3 className="mb-0 font-weight-semibold" style={{color:"#000"}}>$250.99</h3>

                                <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i>Buy</button>

                            </div>
                        </div>
                    </div> 
                   
                </div>
            </div>
        </>
    )

}

export default ProductPage
