import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/users/UsersAction';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const userList = useSelector((state) => state.usersDetails.userList);

  console.log(userList);

  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  
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
  }
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

      return err;
    });

    console.log(login.email);

    const result = userList[0].find((el, index) => {
      return el.email === login.email;
    });

    console.log(result);

    if (result.email === login.email && result.password === login.password) {
      localStorage.setItem('user_details', JSON.stringify(result));
      console.log('clicked', login);
    }

    const user = JSON.parse(localStorage.getItem('user_details'));
    console.log(user);

    
    if (user.userrole === 'buyer') {
      
      navigate('/products');
    } else if (user.userrole === 'seller') {
      navigate('/orders');
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    dispatch(getUsers());
    setUsers(userList);
  }, []);

  return (
    <div className="login-wraper">
      <div className="login-container">
        {/* <form onSubmit={loginSubmit} className="login_form"> */}
        <h2> Login </h2>

        <div className="login-div">
         

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
          {login.email && login.password && checkbox ? (
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
