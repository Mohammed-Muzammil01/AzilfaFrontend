import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer className="pt-6 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 mr-auto">
                            <h5>About Azilfa</h5>
                            <p className="text-muted">Our mission is to provide our customers with the best-in-class jerseys that not only reflect their love for sports but also match their unique style. We believe in offering premium materials that ensure maximum comfort and durability, allowing our customers to wear our jerseys with pride and confidence.</p>
                            <ul className="list-inline social social-sm">
                                <li className="list-inline-item">
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/azilfainc/"><i className="fa fa-instagram"></i></a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h5>Legal</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/privacy">Privacy</Link></li>
                                <li><Link to="/T&C">Terms</Link></li>
                                <li><Link to="/T&C">Refund policy</Link></li>
                            </ul>
                        </div>

                        <div className="col-sm-2">
                            <h5>Help</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://api.whatsapp.com/send?phone=8179010503">Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-muted text-center small-xl">
                            &copy; 2023 Azilfa - All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>

    </>
  )
}

export default Footer