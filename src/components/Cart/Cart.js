import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props || {}
    const totalReducer = (preValue,currValue) =>preValue + currValue.price
    const total = cart.reduce(totalReducer,0)
    const vat = 0.5*total
    
   
    return (
        <div style={{boxSizing:"border-box",padding:"4px"}}>
            <h5>Total product added:{cart.length}</h5>
            <h6>Total price:{total}</h6>
            <h6>Vat:{vat}</h6>
        </div>
    );
};

export default Cart;