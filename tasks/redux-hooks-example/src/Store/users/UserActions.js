import { FETCH_USERS } from "../types";
import axios from 'axios';


export const fetchingusers =  ()=> (dispatch) => {
   
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            if (res.status === 200) {
             dispatch({
               type: FETCH_USERS,
               payload: res.data,
             });
                console.log("res",res.data);
        }
    })
    .catch(err => console.log(err))


}
