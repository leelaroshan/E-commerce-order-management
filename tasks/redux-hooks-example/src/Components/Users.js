import React,{useEffect} from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchingusers } from '../Store/users/UserActions';


export default function Users() {

  const usersData =   useSelector(
    (state) => state.usersDetails.usersState[0]
  );
  const dispatch = useDispatch();
  // const [users, setUsers] = useState([]);


  useEffect(() => {
    dispatch(fetchingusers()); 
  },[])
  console.log("user", usersData);





  return (
    <div>
      <h1>Users </h1>
      {usersData && usersData.map((el) => ( 
    <h4>{el.name}</h4>
))}


    </div>
  );
}
