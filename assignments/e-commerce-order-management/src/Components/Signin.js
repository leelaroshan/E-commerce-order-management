import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function Signin() {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState({
    email: '',
    password: '',
    typeOfUser: '',
  });
  const [checkbox, setCheckbox] = useState(false);
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleCheckbox = () => {
    setCheckbox(true);
  };
  const loginSubmit = (e) => {
    e.preventDefault();

    setErrors(() => {
      let err = {};

      //Email
      if (!login.email) {
        err.email = 'Email required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(login.email)
      ) {
        err.email = 'Email address is invalid';
      }

      //password
      if (!login.password) {
        err.password = 'Password is required';
      } else if (login.password.length < 8) {
        err.password = 'Password needs to be 8 characters or more';
      }
      if (!login.typeOfUser) {
        err.typeOfUser = 'User type is required';
      }

      return err;
    });

    console.log(login.email);

    // const result = userList[0].find((el, index) => {
    //   return el.email === login.email;
    // });

    // console.log(result);

    // if (result.email === login.email && result.password === login.password) {
    //   localStorage.setItem('user_details', JSON.stringify(result));
    //   console.log('clicked', login);
    // }

    // const user = JSON.parse(localStorage.getItem('user_details'));
    // console.log(user);

    let data = {
      email: login.email,
      password: login.password,
      userrole: login.typeOfUser,
      id: small_id,
    };

    setUsers([...users, data]);

    if (data.userrole === 'buyer') {
       Swal.fire({
         title: ` Buyer successfully   logged in`,
       })
      navigate('/products');
    } else if (data.userrole === 'seller') {
       Swal.fire({
         title: ` Seller successfully   logged in`,
       });
      navigate('/orders');
    } else {
      Swal.fire({
        title: `Please Enter Credentials`,
      });
      navigate('/');
    }
  };

  //   useEffect(() => {
  //     dispatch(getUsers());
  //     setUsers(userList);
  //   }, []);

  return (
    <div className="login-wraper">
      <div className="login-container">
        {/* <form onSubmit={loginSubmit} className="login_form"> */}
        <h2> Signin </h2>

        <div className="login-div">
          <div class="mb-3" style={{ marginBottom: '40px' }}>
            <select
              name="typeOfUser"
              class="form-control form-control-lg"
              value={login.typeOfUser}
              onChange={handleChange}
            >
              <option>select</option>
              <option value="seller">seller</option>
              <option value="buyer">buyer</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email Id
            </label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={login.email}
              onChange={handleChange}
              required
            />
          </div>

          <br />
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={login.password}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value={checkbox}
              name="checkbox"
              id="flexCheckDefault"
              checked={checkbox}
              required
              onChange={handleCheckbox}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Remember Me
            </label>
          </div>
          <br />
        </div>
        <div className="log-in">
          {login.email && login.password && login.typeOfUser ? (
            <button type="submit" className="login_btn" onClick={loginSubmit}>
              Log In
            </button>
          ) : (
            <button
              type="submit"
              className="login_btn"
              disabled
              onClick={loginSubmit}
            >
              Log In
            </button>
          )}
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
