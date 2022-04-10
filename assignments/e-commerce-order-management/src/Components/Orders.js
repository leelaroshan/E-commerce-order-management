import React,{useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import AddModal from './AddModal';
import SellerProducts from './SellerProducts';
import Swal from 'sweetalert2';




function Orders() {

  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const [viewProducts, setViewProducts] = useState(true);
  const [orders, setOrders] = useState([]);
  const [isDeleting, setISDeleting] = useState(false);


  const columns = [
    {
      name: 'Order Number',
      selector: (row) => row.ordernumber,
    },
    {
      name: 'Order Due Date',
      selector: (row) => row.orderduedate,
    },
    {
      name: 'Customer Name',
      selector: (row) => row.customername,
    },
    {
      name: 'Customer Address',
      selector: (row) => row.customeraddress,
    },
    {
      name: 'Customer Phone',
      selector: (row) => row.customerphone,
    },
    {
      name: 'Order Total',
      selector: (row) => row.totalordervalue,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div style={{ width: '100px' }}>
          
          <FiEdit style={{margin: '0px 20px'}}/>
        <AiOutlineDelete style={{cursor:'pointer'}} onClick={()=> onDelete()}/>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '50px', // override the row height
        fontSize: '20px',
      },
    },
    headCells: {
      style: {
        backgroundColor: '#48A6C2', // override the cell padding for head cells
        color: 'white',
        fontSize: '20px',
        width: '200px',
      },
    },
  };

  const data = [
    {
      id: 1,
      ordernumber: '000012345',
      orderduedate: '25.04.22',

      customername: 'John Gain',
      customeraddress: 'Flat 2, Block A, Hightech City, Hydeabad',
      totalordervalue: 3000,
      customerphone: 8765905423,
    },
    {
      id: 2,

      ordernumber: '00005789',
      orderduedate: '30.04.2022',

      customername: 'John Gain',
      customeraddress: 'Flat 300, Block B,  Hydeabad',
      totalordervalue: 3000,
      customerphone: 8765905423,
    },
    {
      id: 3,

      ordernumber: '000019845',
      orderduedate: '5.01.2022',

      customername: 'Gain',
      customeraddress: 'House 2, Block A, Hightech City, Hydeabad',
      totalordervalue: 300,
      customerphone: 8765905423,
    },
    {
      id: 4,

      ordernumber: '000012345',
      orderduedate: '25.05.2022',

      customername: 'Raj',
      customeraddress: 'Flat 2, Block A, Hightech City, Hydeabad',
      totalordervalue: 2000,
      customerphone: 8765905423,
    },
    {
      id: 5,

      ordernumber: '000012345',
      orderduedate: '15.05.2022',

      customername: 'Rohan',
      customeraddress: 'House No.4, Hightech City, Hydeabad',
      totalordervalue: 8000,
      customerphone: 8765905423,
    },
  ];

  const openAddModal = () => {
  setIsAddFormOpen(true)
  }
   const closeAddModal = () => {
     setIsAddFormOpen(false);
   };
  const handleViewProducts = () => {
  setViewProducts(!viewProducts)
  }
  

  const onDelete = () => {
  
    setISDeleting(true);
    if (isDeleting) {
      Swal({
        title: 'Are you sure?',
        text: 'It will permanently deleted !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(function () {
        Swal('Deleted!', 'Your file has been deleted.', 'success');
      });
    }
  
}







   useEffect(() => {
     if (localStorage.getItem('orders_list')) {
       const newList = JSON.parse(localStorage.getItem('orders_list'));
       setOrders(newList);
       return;
     }
   }, []);

   useEffect(() => {
     localStorage.setItem('orders_list', JSON.stringify(orders));
   }, [orders]);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Orders of Seller </h3>
      <div className="new-order-div">
        <button className="new-order-btn" onClick={() => openAddModal()}>
          Add New Order
        </button>
      </div>
      <div
        className="dt-responsive table-responsive"
        style={{ margin: '20px' }}
      >
        <DataTable columns={columns} data={data} customStyles={customStyles} />
      </div>
      <AddModal isOpen={isAddFormOpen} onClose={() => closeAddModal()}>
        <p>Leela div here viertyi </p>
      </AddModal>
      <div style={{display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <button
          className="new-order-btn"
          onClick={handleViewProducts}
          style={{ margin: '20px' }}
        >
          View All Products
        </button>
      </div>

      {viewProducts ? <SellerProducts /> : ' '}
    </div>
  );
}

export default Orders;