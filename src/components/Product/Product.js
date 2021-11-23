import React from 'react';



const Product = (props) => {
  const {first_name,last_name,price,image,email} = props.product||{};
  return (
    <div>
     <div className="card-container">
  <div className="col">
    <div className="card h-100">
      <img src={image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">First name:{first_name}</h5>
        <p className="card-text">Last name:{last_name}</p>
        <p>email:{email}</p>
        <p>price:{price}</p>
        <button className="btn btn-primary" onClick={()=>props.handleAddProduct(props.product)}>Add</button>
      </div>
    </div>
  </div>
  </div>
</div>
  );
};

export default Product;