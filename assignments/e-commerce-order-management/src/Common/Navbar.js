import React from 'react'

function Navbar() {

    const role = localStorage.getItem('l_role');


  return (
    <div>
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