import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CustomPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phnum, setPhnum] = useState('');
    const [imgs, setImgs] = useState([]);
    const [mssg, setMssg] = useState('');
    const [size, setSize] = useState('S');
    const navigate = useNavigate();

    const addImgs = (e) => {
        e.preventDefault();
        const files = Array.from(e.target.files);
        setImgs(files);
    }

    const sendData = async (e) => {
        e.preventDefault();
        const data = new FormData();

        data.set('name', name);
        data.set('email', email);
        data.set('phnum', phnum);
        data.set('size', size);
        data.set('mssg', mssg);
        for (let i = 0; i < imgs.length; i++) {
            data.append('imgs', imgs[i]);
        }
        try {
            const response = await axios.post('http://localhost:5000/api/customOrder', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error sending form data:', error);
        }
        navigate('/');
    }

    useEffect(() => {
        console.log(size);
    }, [size]);

    return (
        <>

            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="form-container">
                        <h3 className="text-center mb-4">Order Customised Jersey</h3>
                        <form onSubmit={sendData}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input onChange={e => setName(e.target.value)} required type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onChange={e => setEmail(e.target.value)} required type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Phone Number</label>
                                <input onChange={e => setPhnum(e.target.value)} required type="text" className="form-control" id="phnum" placeholder="Enter your phone number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fileInput" className="form-label">Upload upto 3 Images of your Customised Jersey</label>
                                <input onChange={addImgs} required type="file" className="form-control" multiple accept='.jpg, .jpeg, .png, .webp, .svg' />
                            </div>
                            <div className="container">
                                <label htmlFor="cars" className="text-light">Choose size:</label>
                                <select required id="cars" name="cars" className="form-control bg-light text-dark" onChange={e => setSize(e.target.value)}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Special Instructions (optional) </label>
                                <textarea onChange={e => setMssg(e.target.value)} className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">$50 Checkout -{">"}</button>
                        </form>
                        <div className="mb-3" style={{ marginTop: "10px" }}>
                            <p className="text-muted">
                                Have queries? <a href="/" className="medium">Contact Us</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>






            {/* <div className='container'>
    <h1 className="heading-black" style={{marginLeft:"auto", marginRight:"auto", textAlign:"center"}}>Customised Jersey</h1>

    <div>

    </div>

</div> */}


        </>
    )
}

export default CustomPage