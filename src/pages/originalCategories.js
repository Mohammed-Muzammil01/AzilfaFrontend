import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import j1 from '../img/2-1.jpg'
import j2 from '../img/47-2.jpeg'
import j3 from '../img/j3.jpg'
import j4 from '../img/j4.jfif'


function OriginalCategories() {
  return (
    <>
<Navbar/>


<section id='sec4' className="py-7 bg-dark section-angle top-right bottom-right price-box">
                <div className='card custom-card' style={{ border: "1px solid black", margin: "5px", width: "400px", minHeight: "400px"}}>
                    <h3 className="card-title text-primary mb-0 pt-4">International</h3>
                    <img alt='j1' src={j1} style={{ margin: "5px", height: "50%", maxWidth: "80%", aspectRatio: "3/2" }} />
                    <a href="/categories/international" className="btn btn-info" style={{margin:"10px"}}>
                        Buy now
                    </a>
                </div>
                <div className='card custom-card' style={{ border: "1px solid black", margin: "5px", width: "400px" }}>
                    <h3 className="card-title text-primary mb-0 pt-4">EPL</h3>
                    <img alt='j2' src={j2} style={{ margin: "5px", height: "50%", maxWidth: "80%", aspectRatio: "3/2" }} />
                    <a href="/categories/EPL" className="btn btn-info" style={{margin:"10px"}}>
                        Buy now
                    </a>
                </div>
                <div className='card custom-card' style={{ border: "1px solid black", margin: "5px", width: "400px" }}>
                    <h3 className="card-title text-primary mb-0 pt-4">LALIGA</h3>
                    <img alt='j3' src={j3} style={{ margin: "5px", height: "50%", maxWidth: "80%", aspectRatio: "3/2" }} />
                    <a href="/categories/laliga" className="btn btn-info" style={{margin:"10px"}}>
                        Buy now
                    </a>
                </div>
                <div className='card custom-card' style={{ border: "1px solid black", margin: "5px", width: "400px" }}>
                    <h3 className="card-title text-primary mb-0 pt-4">Special</h3>
                    <img alt='j4' src={j4} style={{ margin: "5px", height: "50%", maxWidth: "80%", aspectRatio: "3/2" }} />
                    <a href="/categories/special" className="btn btn-info" style={{margin:"10px"}}>
                        Buy now
                    </a>
                </div>

            </section>




<Footer/>
    </>
  )
}

export default OriginalCategories