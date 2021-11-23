import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Name = () => {
  const [products,setProducts] = useState([]);
  //cart product decliar
  const [cart,setCart] = useState([]);
  const handleAddProduct = (product) =>{
    const newCart =[...cart,product]
    setCart(newCart)
   
  }
  
  
  useEffect(()=>{
    fetch("/product.json")
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  return (
    <div className="d-flex">
      <div className="product-information col-md-9">
        <h1>Product information</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product=><div><br /><Product product={product} handleAddProduct={handleAddProduct}></Product></div>)}
        </div>
        
      </div>
      <div className="cart-information col-md-3">
        <h1>Cart information</h1>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Name;