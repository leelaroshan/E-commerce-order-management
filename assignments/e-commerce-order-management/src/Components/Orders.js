import React from 'react';
import DataTable from 'react-data-table-component';

function Orders() {


  const columns = [
    {
      name: 'User Name',
      selector: (row) => row.department,
    },
    {
      name: 'User Type',
      selector: (row) => row.usercount,
    },
     {
      name: 'User ID',
      selector: (row) => row.userId,
    },
    {
      name: 'User Registration',
      selector: (row) => row.created,
    },

    {
      name: 'Actions',
      cell: (row) => (
        <div style={{width: '200px'}}>
          <span className="icon_span">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </span>
          <span className="icon_span">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span className="icon_span">
            <i class="fa fa-comment" aria-hidden="true"></i>
          </span>
          <span className="icon_span">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </span>
          <span className="icon_span">
            <i class="fa fa-bar" aria-hidden="true"></i>
          </span>
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
      },
    },
    headCells: {
      style: {
        backgroundColor: '#0056D2', // override the cell padding for head cells
        color: 'white',
        fontSize: '20px',
        width: '200px'
 
      },
    },

    
  
  };

  const data = [
    { department: 'Joe James', usercount: 'Test Corp',userId: 1 , created: '22nd feb, 2022' },

    { department: 'Joe James', usercount: 'Test Corp',userId: 2 , created: '22nd feb, 2022' },
    { department: 'John Walsh', usercount: 'Test Corp',userId: 3 , created: '22nd feb, 2022' },
    { department: 'Bob Herm', usercount: 'Test Corp',userId: 4 , created: '22nd feb, 2022' },
    { department: 'James Houston', usercount: 'Test Corp',userId: 5 , created: '22nd feb, 2022' },
  ];




  return (
    <div>
      <div className="dt-responsive table-responsive">
        <DataTable columns={columns} data={data} customStyles={customStyles} />
      </div>
    </div>
  );
}

export default Orders