import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import OrderModal from './OrderModal';


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



function ProductDetails() {
const {productId} = useParams();

  const [openModal, setOpenModal] = useState(false);
  console.log(productId);

   const id = products.find((el, index) => {
     return el.id === productId;
   });
  // console.log()



   const onOpenOrderModal = () => {
     setOpenModal(true);
     
     console.log('edit show modal clicked');
   };

   const onCloseOrderModal = () => {
     setOpenModal(false);

     console.log('hide edit modal clicked');
   };

  
  return (
    <div className='product-detail-wrapper'>
      <h3 style={{textAlign:'center'}}> ProductDetails</h3>
      {products[productId] && (
        <div className="detail-div">
          <div className="left-div">
            <img src={products[productId].imgurl} className="detail-img" />
          </div>
          <div className="right-div">
            <p>Product Name: {products[productId].productname}</p>
            <p>Seller: {products[productId].seller}</p>
            <p>Price: {products[productId].price}</p>
            <p>Description: {products[productId].description}</p>
            <p>Rating: 4.5(234 reviews)</p>

            <button onClick={onOpenOrderModal}>Place order</button>
          </div>
        </div>
      )}

      <div className="order-modal-contanier">
        {openModal ? <OrderModal onCloseOrderModal={onCloseOrderModal} /> : ''}
      </div>
    </div>
  );
}

export default ProductDetails