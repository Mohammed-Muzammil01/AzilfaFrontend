import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PayButton from '../components/PayButton';


function CustomPage() {

    const [name, setName] = useState('');
    const [phone, setPhnum] = useState('');
    const [imgs, setImgs] = useState([]);
    const [mssg, setMssg] = useState('');
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [address, setAddress] = useState('');
    const [promo, setPromo] = useState('nil');
    const [fullSleeves, setFullSleeves] = useState(false);
    const [socks, setSocks] = useState(false);
    const [shorts, setShorts] = useState(false);
    const [price, setPrice] = useState(1000);
    const [totalPrice, setTotalPrice] = useState();

    const addImgs = (e) => {
        e.preventDefault();
        const files = Array.from(e.target.files);
        setImgs(files);
    }

    const cart = {
        prodName: "custom",
        name,
        phone,
        mssg,
        size,
        imgs,
        quantity,
        address,
        fullSleeves,
        socks,
        shorts,
        promo,
        price,
        totalPrice
    }

    const minus = (e) => {
        e.preventDefault();
        if (quantity === 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1);
        }
    }

    const plus = (e) => {
        e.preventDefault();
        if (quantity === 11) {
            setQuantity(11);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const handleFullSleeves = () => {
        setFullSleeves((prevFullSleeves) => !prevFullSleeves);
        if (fullSleeves) {
            setPrice(previousPrice => previousPrice - 50);
        } else {
            setPrice(previousPrice => previousPrice + 50);
        }
    }
    const handleSocks = () => {
        setSocks((prevSocks) => !prevSocks);
        if (socks) {
            setPrice(previousPrice => previousPrice - 100);
        } else {
            setPrice(previousPrice => previousPrice + 100);
        }
    }
    const handleShorts = () => {
        setShorts((prevShorts) => !prevShorts);
        if (shorts) {
            setPrice(previousPrice => previousPrice - 100);
        } else {
            setPrice(previousPrice => previousPrice + 100);
        }
    }

    useEffect(() => {
        setTotalPrice(quantity*price);
        console.log(totalPrice);
    }, [quantity, price, totalPrice]);

    return (
        <>

            {/* navbar start */}
            <Navbar />
            {/* navbar end */}

            <div className="container" style={{ marginTop: "200px" }}>
                <div className="row justify-content-center mt-5">
                    <div className="form-container">
                        <h3 className="text-center mb-4">Order Customised Jersey</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input onChange={e => setName(e.target.value)} required type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Phone Number</label>
                                <input onChange={e => setPhnum(e.target.value)} required type="text" className="form-control" id="phnum" placeholder="Enter your phone number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fileInput" className="form-label">Upload upto 3 Images of your Customised Jersey</label>
                                <input onChange={addImgs} required type="file" className="form-control" multiple accept='.jpg, .jpeg, .png, .webp, .svg' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="size" className="text-light">Choose size:</label>
                                <select required id="size" name="size" className="form-control bg-light text-dark" onChange={e => setSize(e.target.value)}>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </div>
                            <div className='container d-flex flex-column'>
                                <label>Add ons:</label>

                                <div style={{ margin: "5px" }} className="custom-control custom-checkbox custom-control-block">
                                    <input onChange={handleFullSleeves} type="checkbox" className="custom-control-input" id="inlineCheckbox1" />
                                    <label className="custom-control-label" htmlFor="inlineCheckbox1">Full Sleeves (+ &#8377;50)</label>
                                </div>
                                <div style={{ margin: "5px" }} className="custom-control custom-checkbox custom-control-block">
                                    <input onChange={handleSocks} type="checkbox" className="custom-control-input" id="inlineCheckbox2" />
                                    <label className="custom-control-label" htmlFor="inlineCheckbox2">Socks (+ &#8377;100)</label>
                                </div>
                                <div style={{ margin: "5px" }} className="custom-control custom-checkbox custom-control-block">
                                    <input onChange={handleShorts} type="checkbox" className="custom-control-input" id="inlineCheckbox3" />
                                    <label className="custom-control-label" htmlFor="inlineCheckbox3">Shorts (+ &#8377;100)</label>
                                </div>
                            </div>

                            <div className="d-flex flex-column mb-1 pt-2">
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

                            <div className="form-group">
                                <label htmlFor="message">Special Instructions </label>
                                <textarea onChange={e => setMssg(e.target.value)} className="form-control" id="message" rows="4" placeholder="Enter name, jersey number, etc..." required></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Shipping Address</label>
                                <textarea onChange={e => setAddress(e.target.value)} className="form-control" id="address" rows="4" placeholder="Enter your address" required></textarea>
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

                            <PayButton cart={cart}/>
                        </form>
                        <div className="mb-3" style={{ marginTop: "10px" }}>
                            <p className="text-muted">
                                Have queries? <a href="/" className="medium">Contact Us</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default CustomPage