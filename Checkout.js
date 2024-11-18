


import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
  return (
      <div className="Checkout">
          <div className='checkout__left'>
              <img className='checkout__ad'  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                  alt=""/>
              <div>
                  <h2 className='checkout__title'>
                      your shopping basket to you
                  </h2>
                  {basket.map(item => (
                      <CheckoutProduct
                          id='112342'
                          title='this is atest , loremipsum'
                          image="Chandelier Ceiling Lamp 300mm Glass Crystal Big Size Jhumar Lamp fo Living Room/Hall"
                          price={199.99}
                          rating={5}
     />))}
              {/*Basketitems*/}
              {/*Basketitems*/}
              {/*Basketitems*/}
              </div>
          </div>
          <div className="checkout__right">
              <Subtotal />
             <h1> this is left checkout</h1>   
          </div>
    </div>
  )
}

export default Checkout
