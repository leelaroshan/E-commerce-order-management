import React from 'react';
import DataTable from 'react-data-table-component';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';


function SellerProducts() {
  const columns = [
    {
      name: 'Image',
      selector: (row) => row.image,
      cell: (row) => (
        <div>
          <img src={row.image} width="100px" height="100px" />
        </div>
      ),
    },
    {
      name: 'Product Name',
      selector: (row) => row.productname,
    },
    {
      name: 'Quantity',
      selector: (row) => row.quantity,
    },
    {
      name: 'Amount',
      selector: (row) => row.amount,
    },

    {
      name: 'Actions',
      cell: (row) => (
        <div style={{ width: '100px' }}>
          <FiEdit style={{ margin: '0px 20px' }} />
          <AiOutlineDelete />
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
        backgroundColor: 'lightseagreen', // override the cell padding for head cells
        color: 'white',
        fontSize: '20px',
        width: '200px',
      },
    },
  };

  const data = [
    {
      productname: 'Bag',
      quantity: 1,
      id: 1,
      amount: 300,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      productname: 'T-shirt',
      quantity: 1,
      id: 2,
      amount: 3000,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      productname: 'Airpods',
      quantity: 2,
      id: 3,
      amount: 4000,
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    },
    {
      productname: 'pullover',
      quantity: 1,
      id: 4,
      amount: 30000,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    },
    {
      productname: 'Jacket',
      quantity: 1,
      id: 5,
      amount: 500,
      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
    },
  ];

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Products of Seller </h3>
      <div className="dt-responsive table-responsive" style={{ margin:'20px'}}>
        <DataTable columns={columns} data={data} customStyles={customStyles} />
      </div>
    </div>
  );
}

export default SellerProducts;
