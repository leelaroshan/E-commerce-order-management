
import React from 'react';
import { useState,useEffect } from 'react';
import { v4 as uuid } from 'uuid';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function AddModal({ isOpen, onClose, children }) {
    
     const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
    let navigate = useNavigate();

  const [addNewOrder, setAddNewOrder] = useState({
    ordernumber: '',
    orderduedate: '',
    customername: '',
    customerPhone: '',
    totalordervalue: '',
    customeraddress: ''
    
    
    
  });


  const [orders, setOrders] = useState([]);
  const [isAdded, setISAdded] = useState(false);



  
  const onAddFormSubmit = (e) => {
    e.preventDefault()
    let order = {
      id:small_id,
      ordernumber: addNewOrder.ordernumber,
      orderduedate: addNewOrder.orderduedate,
      customername: addNewOrder.customername,
      customerphone: addNewOrder.customerphone,
      totalordervalue: addNewOrder.totalordervalue,
      customeraddress: addNewOrder.customeraddress,
    };

    setOrders([...orders, order]);
    setISAdded(true);

      if (isAdded) {
        Swal.fire({
          title: `successfully  Added New Order`,
        })
        alert('New Order added Successfully');


        // navigate('/orders');
      }

    
    
    
    
    
    
    
    
  }



  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddNewOrder({
      ...addNewOrder,
      [name]: value,
    });
  };

 useEffect(() => {
   if (!localStorage.getItem('orders_list')) {
     const newList = JSON.parse(localStorage.getItem('orders_list'));
     setOrders(newList);
     return;
   }
 }, []);

 useEffect(() => {
   localStorage.setItem('orders_list', JSON.stringify(orders));
 }, [orders]);
  

   if (isOpen === false) {
     return null;
   }

   function Close(e) {
     e.preventDefault();

     if (onClose) {
       onClose();
     }
   }
    return (
      <div>
        <div className="modal">{children}</div>
        <div className="bg">
          <div className="add-new-order-form">
            <h3>Add New Field</h3>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Order Number
              </label>
              <input
                name="ordernumber"
                type="int"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={addNewOrder.ordernumber}
                onChange={handleChange}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Order Due Date
              </label>
              <input
                name="orderduedate"
                type="date"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={addNewOrder.orderduedate}
                onChange={handleChange}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Customer Name
              </label>
              <input
                name="customername"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={addNewOrder.customername}
                onChange={handleChange}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Customer Phone
              </label>
              <input
                name="customerphone"
                type="int"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={addNewOrder.customerphone}
                onChange={handleChange}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Order Total value
              </label>
              <input
                name="totalordervalue"
                type="int"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={addNewOrder.totalordervalue}
                onChange={handleChange}
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Customer Address
              </label>
              <input
                name="customeraddress"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={addNewOrder.customeraddress}
                onChange={handleChange}
                required
              />
            </div>

            <div className="cancel-save-add-new-order">
              <button className="cancel-btn" onClick={(e) => Close(e)}>
                Cancel
              </button>
              <button className="save-btn" onClick={onAddFormSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
