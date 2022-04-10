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
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  console.log(productId);

   const id = products.find((el, index) => {
     return el.id === productId;
   });
  // console.log()



   const onOpenOrderModal = () => {
     setOrderModalOpen(true);
     
     console.log('edit show modal clicked');
   };

   const onCloseOrderModal = () => {
     setOrderModalOpen(false);

     console.log('hide edit modal clicked');
   };

  
  return (
    <div className="product-detail-wrapper">
      <h3 style={{ textAlign: 'center' }}> ProductDetails</h3>
      {products[productId] && (
        <div className="detail-div">
          <div className="left-div">
            <img src={products[productId].imgurl} className="detail-img" />
          </div>
          <div className="right-div">
            <p style={{ fontSize: '40px' }}>
              {' '}
              {products[productId].productname}
            </p>
            <p>Price: ${products[productId].price}</p>
            <p>Description: {products[productId].description}</p>

            <div>
              <p style={{ color: 'darkred', fontSize: '30px' }}>
                Product Details
              </p>
              What more can we say? It's the Snopes logo, front and center on a
              shirt that comes in many delightful colors. Good luck choosing
              just one. Logo is outlined in white. • 100% combed and ring-spun
              cotton (heather colors contain polyester) • Fabric weight: 4.2 oz
              (142 g/m2) • Shoulder-to-shoulder taping • Side-seamed Size guide
            </div>
            <p>Rating: 4.5(234 reviews)</p>
            <div style={{ color: 'green' }}>
              <p style={{ color: 'darkgreen', fontSize: '30px' }}>
                Seller Details
              </p>
              <p style={{ fontSize: '20px' }}>
                Seller: {products[productId].seller}
              </p>
            </div>

            <button onClick={onOpenOrderModal} className="place-order-btn">
              Place order
            </button>
          </div>
        </div>
      )}
<OrderModal isOpen={orderModalOpen} onClose={()=> onCloseOrderModal()} ></OrderModal>
      {/* <div className="order-modal-contanier">
        {openModal ? <OrderModal onCloseOrderModal={onCloseOrderModal} /> : ''}
      </div> */}
    </div>
  );
}

export default ProductDetails