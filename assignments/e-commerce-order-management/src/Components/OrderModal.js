import React,{useState} from 'react'

function OrderModal({ onCloseOrderModal }) {

  

      const [orderDetails, setOrderDetails] = useState({
    address: '',
      quantity: '',
   phonenumber:0,
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

const onSubmit = (e)=>{
    e.preventDefault();

  alert('form submitted successfully');

}
    
  return (
    <div className="modal-container">
      <p style={{textAlign: 'center'}}>Order Details</p>

      <div className="input-div">
        <div className="input-div">
          <label>Address</label>
          <br />
          <textarea
            // type="textarea"
            name="address"
            rows="10"
            className="field-input"
            placeholder="Enter your Addresss"
            value={orderDetails.address}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-div">
          <label>Quantity</label>
          <br />

          <input
            type="number"
            name="quantity"
            className="field-input"
            value={orderDetails.quantity}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-div">
          <label>Mobile No</label>
          <br />

          <input
            type="int"
            name="phone"
            className="field-input"
            value={orderDetails.phone}
            onChange={handleChange}
          />
        </div>
        <br />
      </div>
      <div className="save-div">
         <button type="submit" className="save_btn" onClick={onCloseOrderModal} style={{margin:'20px'}}>
          cancel
        </button>
        <button type="submit" className="save_btn" onClick={onSubmit}>
          save
        </button>
      </div>
    </div>
  );
}

export default OrderModal