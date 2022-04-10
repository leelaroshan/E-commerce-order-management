import React from 'react';
import { Link } from 'react-router-dom';




const products = [
  {
    productid: 1,
    productname: 'Bag',
    imgurl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 22,
    description: 'Tourist Bag',
    seller: 'adidas',
  },
  {
    productid: 2,
    productname: 'Shirt',

    imgurl:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    price: 22,
    description: 'Mens Clothing',
    seller: 'puma',
  },
  {
    productid: 3,
    productname: 'json',
    imgurl: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    price: 22,
    description: 'Mens Clothing',
    seller: 'Nike',
  },
  {
    productid: 4,
    productname: 'json',
    imgurl: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    price: 22,
    description: 'Mens Clothing',
    seller: 'adidas',
  },

  {
    productid: 5,
    productname: 'json',
    imgurl: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
    price: 22,
    description: 'Mens Clothing',
    seller: 'adidas',
  },
];
function Products() {
  console.log(products);








  return (
    <div>
      <h3 style={{textAlign:'center'}}>Products</h3>
      <div className="card-container">
        {products &&
          products.map((el, index) => ( 

            <div key={index} className="card">
              <p> Name: {el.productname}</p>
              <img src={el.imgurl} className="product-img" />
              <p> {el.description}</p>
              <p> Price:${el.price}</p>
              <p>seller:{el.seller}</p>
              <Link to={`/product/${index}`}><button className='add-to-cart-btn'>Add to Cart</button></Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
