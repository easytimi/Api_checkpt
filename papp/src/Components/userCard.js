import React from 'react';
//import '../style.css';

const UserCard= ({user}) =>{
    return(
        <div>
            <div className="card">
            <h1 style={{textDecoration : "underline"}}>user</h1> 
           {/* <img src={photo.url} alt='pix'/> */}
           <h2>{user.username}</h2>
           <h2>{user.name}</h2>
           <h2>{user.email}</h2>
           </div>
           

        </div>
    )
}

export default UserCard;