import React,{useState} from 'react'

function OrderModal({isOpen,onClose }) {

  

      const [orderDetails, setOrderDetails] = useState({
    address: '',
      quantity: '',
   phonenumber:0,
  });
if (isOpen === false) {
  return null;
}

function Close(e) {
  e.preventDefault();

  if (onClose) {
    onClose();
  }
}




  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

const onSubmit = (e)=>{
  e.preventDefault();
  
  let data = {
    customerAddress: orderDetails.address,
    quantity: orderDetails.quantity,
    phonenumber: orderDetails.phonenumber
  }

  alert('form submitted successfully ');

}
    
  return (
    <div>
      <div className="modal"></div>
      <div className="bg">
        <div className='order-info-form'>
          <p style={{ textAlign: 'center' }}>Order Details</p>

          <div className="input-div">
            <div class="form-group">
              <label for="exampleFormControlTextarea2">Address</label>
              <textarea
                class="form-control rounded-0"
                id="exampleFormControlTextarea2"
                rows="3"
                name="address"
                // value=" "
                // onChange={}
              ></textarea>
            </div>
            <br />
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Quantity
              </label>
              <input
                name="quantity"
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                // value={quantity}
                // onChange={handleChange}
                required
              />
            </div>
            <br />
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Phonenumber
              </label>
              <input
                name="phonenumber"
                type="int"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                // value={login.email}
                // onChange={handleChange}
                required
              />
            </div>
            <br />
          </div>
          <div className="save-div">
            <button
              type="submit"
              className="save_btn"
              onClick={(e) => onClose(e)}
              style={{ margin: '20px' }}
            >
              cancel
            </button>
            <button type="submit" className="save_btn" onClick={onSubmit}>
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderModal