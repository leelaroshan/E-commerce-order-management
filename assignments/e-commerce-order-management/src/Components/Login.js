import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getUsers } from '../store/users/UsersAction';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

 

export default function Login() {

  const userList = useSelector(state => state.usersDetails.userList);

  console.log(userList);
  

  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState({
    email: '',
      password: '',
    userrole:''
  });

  const [errors, setErrors] = useState({});
  let navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };


 
    const loginSubmit = (e) => {
        e.preventDefault();

        setErrors(() => {
            let err = {};

            //Email
            if (!login.email) {
                err.email = "Email required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(login.email)
            ) {
                err.email = "Email address is invalid";
            }

            //password
            if (!login.password) {
                err.password = "Password is required";
            } else if (login.password.length < 8) {
                err.password = "Password needs to be 8 characters or more";
            }

            return err;
        });


  
      
      console.log(login.email);
   
     const result =  userList[0].find((el, index) => {
       return  el.email === login.email
     })
      
      
      console.log(result);
      
      if (result.email === login.email && result.password === login.password) {
          localStorage.setItem('user_details', JSON.stringify(result));
        console.log('clicked', login);

      }

      const user = JSON.parse(localStorage.getItem('user_details'));
      console.log(user);
      if (user.userrole === 'buyer') {
        navigate('/products')
      } else if (user.userrole === 'seller') {
        navigate('/orders');
      }else{
        navigate('/');
      }


    }



  useEffect(() => {
    dispatch(getUsers());
    setUsers(userList);
  

  }, [])

  return (
    <div className="login-wraper">
      <div className="login-container">
        {/* <form onSubmit={loginSubmit} className="login_form"> */}
        <h2> E-Commerce Login </h2>

        <div className="login-div">
          <div className="input-div">
            <select
              name="userrole"
              className="field-input"
              onChange={handleChange}
              value={login.userrole}
            >
              <option>Select Role</option>
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
            {login.userrole}
          </div>
          <br />
          <div className="input-div">
            <label>E-mail Id</label>
            <br />
            <input
              type="email"
              name="email"
              className="field-input"
              placeholder="Enter your email id"
              value={login.email}
              onChange={handleChange}
            />
            {login.email}
            {errors.email && <p>{errors.email}</p>}
          </div>
          <br />
          <div className="input-div">
            <label>Password</label>
            <br />

            <input
              type="password"
              name="password"
              className="field-input"
              placeholder="Enter your password"
              value={login.password}
              onChange={handleChange}
            />
            {login.password}
            {errors.password && <p>{errors.password}</p>}
          </div>
          <br />
        </div>
        <div className="log-in">
          <button type="submit" className="login_btn" onClick={loginSubmit}>
            Log In
          </button>
        </div>
        {/* </form> */}

     
      </div>
    </div>
  );
}
