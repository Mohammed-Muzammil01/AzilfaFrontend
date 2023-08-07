import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import j1 from '../img/2-1.jpg'
import j2 from '../img/47-2.jpeg'
import j3 from '../img/j3.jpg'
import j4 from '../img/j4.jfif'
import { Link } from 'react-router-dom'


function OriginalCategories() {

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("first");
      }, []);


  return (
    <>
<Navbar/>


<section id='sec4' className="py-7 bg-dark section-angle top-right bottom-right price-box">
                <div className='card custom-card' style={{ border: "1px solid black", margin: "5px", width: "400px", minHeight: "400px"}}>
                    <h3 className="card-title text-primary mb-0 pt-4">International</h3>
                    <img alt='j1' src={j1} style={{ margin: "5px", height: "60%", maxWidth: "80%", aspectRatio: "3/2" }} />
                    <Link to="/categories/international" className="btn btn-info" style={{margin:"10px"}}>
                        Buy now
                    </Link>
                </div>
                <div className='card custom-card' style={{ height:"500px", border: "1px solid black", margin: "5px", width: "400px" }}>
                    <h3 className="card-title text-primary mb-0 pt-4">EPL</h3>
                    <img alt='j2' src={j2} style={{ margin: "5px", height: "60%", maxWidth: "80%", aspectRatio: "3/2" }} />
                    <Link to="/categories/EPL" className="btn btn-info" style={{margin:"10px"}}>
                        Buy now
                    </Link>
                </div>
                <div className='card custom-card' style={{ border: "1px solid black", margin: "5px", width: "400px" }}>
                    <h3 className="card-title text-primary mb-0 pt-4">LALIGA</h3>
                    <img alt='j3' src={j3} style={{ margin: "5px", height: "60%", maxWidth: "80%", aspectRatio: "3/2" }} />
                    <Link to="/categories/laliga" className="btn btn-info" style={{margin:"10px"}}>
                        Buy now
                    </Link>
                </div>
                <div className='card custom-card' style={{ border: "1px solid black", margin: "5px", width: "400px" }}>
                    <h3 className="card-title text-primary mb-0 pt-4">Special</h3>
                    <img alt='j4' src={j4} style={{ margin: "5px", height: "60%", maxWidth: "80%", aspectRatio: "3/2" }} />
                    <Link to="/categories/special" className="btn btn-info" style={{margin:"10px"}}>
                        Buy now
                    </Link>
                </div>

            </section>




<Footer/>
    </>
  )
}

export default OriginalCategories