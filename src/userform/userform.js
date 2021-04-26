import { useState } from "react";
import axios from "axios";
import Userlist from "../userlist/userlist"
function Userform(){ //component, controller
    //model
    const[userform, setUserform]=useState({  // usestate=hook,pre-defined function
        name:"Ram",
        phoneNumber:"1"
    });
    const [users, setUsers] = useState([{name:'Arshnoor', phoneNumber:9403948593}]); 

    const save= function(event){
        console.log(userform.name);
       axios.post('http://localhost:8080/user', userform)
       .then(function(response) {
           console.log(response);
       })
       .catch(function(error){
           console.log(error);
       })       
    }
    return (
        <div>
            <input value={userform.name} name="name" onChange={updateState}></input>
            <input value={userform.phoneNumber} name="phoneNumber" placeholder="phoneNumber" onChange={updateState}></input>
            <button onClick={save}>Save</button>
            <Userlist usersProp={users}></Userlist>
        </div>
    )
   function updateState(event){
       const current={...userform
       ,[event.target.name]:event.target.value};
       console.log(current);
       setUserform(current);
    }
}

export default Userform;