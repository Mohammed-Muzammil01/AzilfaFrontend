import React from 'react'

function Navbar() {
    return (
        <>
            {/* navbar start */}
            <section className="smart-scroll" id='sec1'>
                <div className="container-fluid" style={{ backgroundColor: "#000" }}>
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <a className="navbar-brand heading-black" href="/" style={{ color: "#fff" }}>
                            AZILFA
                        </a>
                        <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span data-feather="grid"><span style={{color:"#1de9b6"}}>&#9776;</span></span>
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
            {/* navbar end */}
        </>
    )
}

export default Navbar