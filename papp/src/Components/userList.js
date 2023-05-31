import React from 'react';
import{useState,useEffect} from 'react'
import axios from 'axios';
import UserCard from './userCard'
import '../style.css'


const UserList= () => {
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{setUsers(res.data)})
        .catch(err=>console.log(err))
        console.log(users)
    },[]
       
    );
    
    
    
        return(
        <div >
            <h1>List Of Users</h1>
            <div >
                <div>
                {users.map((user,key)=>{ return (<UserCard  user={user} />)})}
                </div>
                
            </div>
           
        </div> 
    )
}

export default UserList;