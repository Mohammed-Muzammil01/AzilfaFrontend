import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SimpleCarousel from '../components/Carousel';
import products1 from '../data/allJerseys';
import PayButton from '../components/PayButton';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import { Server } from '../S-link';

function SpecificJersey() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState();
    const [mssg, setMssg] = useState('');
    const [size, setSize] = useState('S');
    const [promo, setPromo] = useState('nil');
    const [fullSleeves, setFullSleeves] = useState(false);
    const [shorts, setShorts] = useState(false);
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState(749);
    const [totalPrice, setTotalPrice] = useState();
    const [imgs, setImgs] = useState();
    const [prints, setPrints] = useState(false);


    let prodId = id - 1;
    const jersey = products1[prodId];
    const [quantity, setQuantity] = useState(jersey.isSpecial ? 6 : 1);


    useEffect(() => {
        setImgs(jersey.images);
    }, [jersey.images]);

    const images = jersey.images.map((image) => `${Server}/jerseys/${image}`);


    const cart = {
        prodId: id,
        prodName: jersey.name,
        name: name,
        phone: phone,
        mssg,
        size: size,
        price: price,
        quantity: quantity,
        imgs: images,
        address: address,
        fullSleeves,
        shorts,
        promo,
        totalPrice,
        extraImgs: imgs,

    }

    // const minus = (e) => {
    //     e.preventDefault();
    //     if(jersey.isSpecial){
    //         if(quantity === 6){
    //             setQuantity(6);
    //         }
    //     }
    //     if (quantity === 1) {
    //         setQuantity(1);
    //     } else {
    //         setQuantity(quantity - 1);
    //     }
    // }

    const minus = (e) => {
        e.preventDefault();
        if (quantity === 1 || (jersey.isSpecial && quantity === 6)) {
            setQuantity(quantity);
        } else {
            setQuantity(quantity - 1);
        }
    };

    const plus = (e) => {
        e.preventDefault();
        if (quantity === 15) {
            setQuantity(15);
        } else {
            setQuantity(quantity + 1);
        }
    }



    const handleFullSleeves = () => {
        setFullSleeves((prevFullSleeves) => !prevFullSleeves);
        if (fullSleeves) {
            setPrice(previousPrice => previousPrice - 100);
        } else {
            setPrice(previousPrice => previousPrice + 100);
        }
    }
    const handleShorts = () => {
        setShorts((prevShorts) => !prevShorts);
        if (shorts) {
            setPrice(previousPrice => previousPrice - 150);
        } else {
            setPrice(previousPrice => previousPrice + 150);
        }
    }
    const handlePrints = () => {
        setPrints(!prints);
        if (prints) {
            setPrice(previousPrice => previousPrice - 50);
        } else {
            setPrice(previousPrice => previousPrice + 50);
        }
    }


    const missingInfo = (e) => {
        e.preventDefault();
        alert('Please enter all info');
    }

    useEffect(() => {
        setTotalPrice(quantity * price);
    }, [quantity, price]);


    return (
        <>
            <Navbar />
            {/* <!-- Shop Detail Start --> */}


            <div className="prod-card" style={{ width: "100%", color: "#dcdcdc" }}>
                <div style={{ height: "100%", backgroundColor: "#dcdcdc", width: "100%" }} className="container-fluid d-flex align-items-center" >
                    <SimpleCarousel images={images} />
                </div>


                <div className="container bg-dark p-30 prod-card2" style={{ width: "100%", padding: "30px", height: "100%" }}>
                    <h1 style={{ color: "#dcdcdc" }} className='sj-h1'>{jersey.name}</h1>

                    <p className="mb-4">{jersey.description}</p>

                    <hr style={{ width: "100%", borderTop: "2px solid black" }} />

                    <h3>Jersey details</h3>

                    <div className="mb-3" >
                        <div>
                            <label htmlFor="size" className="text-light">Choose size: <Link to="/sizechart" target="_blank" className="medium">Refer Size Chart</Link></label>
                            <select value={size} required id="cars" style={{ width: "200px" }} className="form-control bg-light text-dark" onChange={e => setSize(e.target.value)}>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="name">Quantity</label>

                        <div className="input-group quantity" style={{ width: "200px" }}>
                            <div className="input-group-btn">
                                <button onClick={minus} className="btn btn-primary btn-minus" style={{ borderRadius: "0" }}>
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input value={quantity} type="number" className="noArrow form-control bg-secondary border-0 text-center" />
                            <div className="input-group-btn">
                                <button onClick={plus} className="btn btn-primary btn-plus" style={{ borderRadius: "0" }}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='container d-flex flex-column'>
                        <label>Add ons:</label>

                        <div style={{ margin: "5px" }} className="custom-control custom-checkbox custom-control-block">
                            <input onChange={handleFullSleeves} type="checkbox" className="custom-control-input" id="inlineCheckbox1" />
                            <label className="custom-control-label" htmlFor="inlineCheckbox1">Full Sleeves (+ &#8377;100)</label>
                        </div>
                        <div style={{ margin: "5px" }} className="custom-control custom-checkbox custom-control-block">
                            <input onChange={handleShorts} type="checkbox" className="custom-control-input" id="inlineCheckbox2" />
                            <label className="custom-control-label" htmlFor="inlineCheckbox3">Shorts (+ &#8377;150)</label>
                        </div>
                        <div style={{ margin: "5px" }} className="custom-control custom-checkbox custom-control-block">
                            <input onChange={handlePrints} type="checkbox" className="custom-control-input" id="inlineCheckbox3" />
                            <label className="custom-control-label" htmlFor="inlineCheckbox3">Name & Number (+ &#8377;50)</label>
                        </div>

                    </div>

                    {
                        prints ? (<div className='container d-flex flex-column mt-3'>
                            <div className="form-group">
                                <label htmlFor="message">Enter jersey name & number </label>
                                <textarea onChange={e => setMssg(e.target.value)} className="form-control" id="message" rows="4"
                                    placeholder="Messi - 10,
                                                 Ronaldo - 07,
                                                 David - 16, etc..." required></textarea>
                            </div>
                        </div>) : ''
                    }

                    <div className="d-flex flex-column mb-1 pt-2">


                        <br />
                        <hr style={{ width: "100%", borderTop: "2px solid black" }} />

                        <h3>Shipping details</h3>

                        <div className="form-group mb-3">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input style={{ width: "200px" }} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Enter your name" />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div>
                                <label htmlFor="phnum">Phone Number</label>
                                <input style={{ width: "200px" }} onChange={e => setPhone(e.target.value)} type="text" className="form-control noArrow" placeholder="Enter your Phone Number" />
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <div>
                                <label htmlFor="address">Shipping Address</label>
                                <textarea style={{ width: "200px" }} onChange={e => setAddress(e.target.value)} className="form-control" placeholder="27-1-3/790, Salarjung colony, Tolichowki" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group mb-5">
                        <div>
                            <label htmlFor="name">Promo code</label>
                            <input style={{ width: "200px" }} onChange={e => setPromo(e.target.value)} type="text" className="form-control" id="phnum" placeholder="Enter Promo Code" />
                        </div>
                    </div>

                    <div className='mb-3'>
                        <h4 className='d-inline'>Total Price:</h4>
                        <h4 style={{ fontWeight: '400', color: "#dcdcdc" }} className='d-inline'> &#8377;{quantity * price}</h4>
                    </div>
                    {name && phone && address && mssg ? (
                        <PayButton cart={cart} />
                    ) : (
                        <button onClick={missingInfo} type='submit' className="btn btn-primary px-3" style={{ width: "200px", height: "50px" }}><i className="fa fa-shopping-cart mr-1"></i>Checkout</button>
                    )}
                </div>
            </div>
            {/* <!-- Shop Detail End --> */}


            {/* <Footer className="mt-9"/> */}

        </>
    )
}

export default SpecificJersey

