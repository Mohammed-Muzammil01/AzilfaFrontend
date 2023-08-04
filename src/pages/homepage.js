import React from 'react'
import j1 from '../img/j1.webp'
import j2 from '../img/j2.jpg'
import j3 from '../img/j3.avif'



function Homepage() {
    return (
        <>
            {/* <!--navigation--> */}

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
                                    <a className="nav-link page-scroll" href="#sec4">Shop</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#features">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#faq">FAQs</a>
                                </li>
                                <li className="nav-item">
                        <a className="nav-link page-scroll" href="#blog">Contact Us</a>
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

            {/* <!--hero header--> */}
            <section className="py-7 py-md-0 bg-hero" id="home sec2">
                <div className="container">
                    <div className="row vh-md-100">
                        <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                            <h1 className="heading-black text-capitalize">Explore a World of Customizable and Popular Jerseys</h1>
                            <p className="lead py-3">Discover a wide selection of authentic, customizable, and highly sought-after jerseys delivered right to your doorstep. Elevate your style with our premium collection. Order now and express your passion for sports and fashion!</p>
                            <a href='#sec4' className="btn btn-primary d-inline-flex flex-row align-items-center">
                                Shop now
                                <em className="ml-2" data-feather="arrow-right"></em>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- features section --> */}
            <section className="pt-6 pb-7" id="features" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <h2 className="heading-black">Find Your Perfect Jersey</h2>
                            <p className="text-muted lead">Explore a wide range of authentic and customizable football team jerseys. From your favorite clubs to national teams, we have it all!</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10 mx-auto">
                            <div className="row feature-boxes">
                                <div className="col-md-6 box">
                                    <div className="icon-box box-primary">
                                        <div className="icon-box-inner">
                                            <span data-feather="award" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Top-Quality Jerseys</h5>
                                    <p className="text-muted">Our jerseys are crafted from premium materials, providing maximum comfort and durability. Choose from a variety of designs and sizes to suit your style.</p>
                                </div>
                                <div className="col-md-6 box">
                                    <div className="icon-box box-success">
                                        <div className="icon-box-inner">
                                            <span data-feather="edit" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Customization Options</h5>
                                    <p className="text-muted">Make your jersey unique by adding your name, favorite player's name, or any custom text. Personalize it with your team's logo and colors for an exclusive look.</p>
                                </div>
                                <div className="col-md-6 box">
                                    <div className="icon-box box-danger">
                                        <div className="icon-box-inner">
                                            <span data-feather="truck" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Fast & Secure Delivery</h5>
                                    <p className="text-muted">Get your jersey delivered to your doorstep with our fast and secure shipping options. We ensure that your order reaches you in perfect condition.</p>
                                </div>
                                <div className="col-md-6 box">
                                    <div className="icon-box box-info">
                                        <div className="icon-box-inner">
                                            <span data-feather="globe" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Explore Our Popular Jerseys</h5>
                                    <p className="text-muted">Discover the most sought-after football team jerseys loved by fans worldwide. From iconic designs to limited editions, we have something for everyone.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row mt-6">
            <div className="col-md-6 mr-auto">
                <h2>Knight is more than just a page builder.</h2>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum mattis, turpis purus placerat eros.</p>
                <a href="/" className="btn btn-light" style={{display: "block", marginBottom: "20px", width: "200px"}}>
                    Try the live demo
                </a>
            </div> 
            <div className="col-md-5">
                <div className="slick-about">
                    <img src={blog1} className="img-fluid rounded d-block mx-auto" alt="Work 1"/>
                    <img src={blog2} className="img-fluid rounded d-block mx-auto" alt="Work 2"/>
                    <img src={blog3} className="img-fluid rounded d-block mx-auto" alt="Work 3"/>
                </div>
            </div>
        </div> */}
                </div>
            </section>

            {/* <!--pricing section--> */}
            <section id='sec4' className="py-7 bg-dark section-angle top-right bottom-right price-box">
                <div className='card custom-card' style={{ border: "1px solid black", margin: "5px", width: "400px", minHeight: "400px"}}>
                    <h3 className="card-title text-primary mb-0 pt-4">Popular Jerseys</h3>
                    <img alt='j1' src={j1} style={{ margin: "5px", height: "50%", maxWidth: "80%", aspectRatio: "3/2" }} />
                    <a href="originals" className="btn btn-info" style={{margin:"10px"}}>
                        Buy now
                    </a>
                </div>
                <div className='card custom-card' style={{ border: "1px solid black", margin: "5px", width: "400px" }}>
                    <h3 className="card-title text-primary mb-0 pt-4">Azilfa Specials</h3>
                    <img alt='j3' src={j3} style={{ margin: "5px", height: "50%", maxWidth: "80%", aspectRatio: "3/2" }} />
                    <a href="/specials" className="btn btn-info" style={{margin:"10px"}}>
                        Buy now
                    </a>
                </div>
                <div className='card custom-card' style={{ border: "1px solid black", margin: "5px", width: "400px" }}>
                    <h3 className="card-title text-primary mb-0 pt-4">Customisable Jerseys</h3>
                    <img alt='j2' src={j2} style={{ margin: "5px", height: "50%", maxWidth: "80%", aspectRatio: "3/2" }} />
                    <a href="customise" className="btn btn-info" style={{margin:"10px"}}>
                        Buy now
                    </a>
                </div>

            </section>

            {/* <!--faq section--> */}
            <section className="py-7" id="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <h2>Frequently asked questions</h2>
                            <p className="text-muted lead">Answers to most common questions.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 mb-5">
                                    <h6>How long does it take to deliver my jersey?</h6>
                                    <p className="text-muted">Delivery times may vary depending on your location and the product availability. Typically, we aim to deliver within 5-7 business days. You will receive a tracking number once your order is shipped.</p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h6>Can I cancel or change my order after it has been placed?</h6>
                                    <p className="text-muted">We process orders quickly, but if you need to make changes or cancel your order, please contact our customer support team as soon as possible. We'll do our best to accommodate your request.</p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h6>Do you offer country-wide shipping?</h6>
                                    <p className="text-muted">Currently we are delivering only in Hyderabad, India.</p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h6>Do you offer discounts for bulk orders?</h6>
                                    <p className="text-muted">Yes, we offer special discounts for bulk orders. If you are ordering jerseys for a team or group, please contact our sales team to discuss pricing and customization options.</p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h6>What sizes are available for jerseys?</h6>
                                    <p className="text-muted">Our jerseys are available in a range of sizes, from small to extra-large. You can refer to our size chart for accurate measurements to find the perfect fit for you.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--news section--> */}
            <section id="blog" className="py-7 bg-dark section-angle top-left bottom-left">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <h2 className="heading-black">Contact Us</h2>
                            <p className="text-muted lead">Talk to an Azilfa executive through WhatsApp</p>
                        </div>
                    </div>
                    
                    <div className="row mt-6">
                        <div className="col-md-6 mx-auto text-center">
                            <a href="/" className="btn btn-primary">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--footer--> */}
            <footer className="py-6">
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
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h5>Legal</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Privacy</a></li>
                                <li><a href="/">Terms</a></li>
                                <li><a href="/">Refund policy</a></li>
                            </ul>
                        </div>

                        <div className="col-sm-2">
                            <h5>Help</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Support</a></li>
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

            {/* <!--scroll to top--> */}
            <div className="scroll-top">
                <i className="fa fa-angle-up" aria-hidden="true"></i>
            </div>

        </>
    )
}

export default Homepage