import React from 'react'

function Navbar() {

    const role = localStorage.getItem('l_role');


  return (
    <div className='navbar-container'>

      <h2 style={{textAlign:'center'}}>E-Commerce Order Management System</h2>

{role === 'seller' ? (
    <div>

                  <ul>
                      <li>Orders</li>
                      <li>Log Out</li>
                  </ul>
    </div>
          ) : null}
          
          
    </div>
  )
}

export default Navbar;