import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function PayButton(cart) {

  // &#8377;2000 
  const randomUserId = uuidv4();

  const sendData = async () => {
    console.log(cart);
    const data = new FormData();

    data.set('name', cart.cart.name);
    data.set('phnum', cart.cart.phone);
    data.set('size', cart.cart.size);
    data.set('mssg', cart.cart.mssg);
    data.set('quantity', cart.cart.quantity);
    data.set('address', cart.cart.address);
    data.set('fullSleeves', cart.cart.fullSleeves);
    data.set('socks', cart.cart.socks);
    data.set('shorts', cart.cart.shorts);
    data.set('promo', cart.cart.promo);

    if (!cart.cart.prodId) {
      for (let i = 0; i < cart.cart.imgs.length; i++) {
        data.append('imgs', cart.cart.imgs[i]);
      }
    } else {
      data.set('imgs', cart.cart.prodId);
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
  }

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      await sendData();
      const res = await axios.post('http://localhost:5000/create-checkout-session', {
        cart,
        userId: randomUserId,
      });
      if (res.data.url) {
        window.location.href = res.data.url;
      }
      localStorage.setItem('orderId', randomUserId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <button type="submit" className="btn btn-primary btn-block">Checkout -{">"}</button> */}
      <button type='submit' onClick={handleCheckout} className="btn btn-primary px-3" style={{ width: "200px", height: "50px" }}><i className="fa fa-shopping-cart mr-1"></i>Checkout</button>

    </>
  )
}

export default PayButton