import React, { useEffect, useState } from "react";

const User = () =>{
 const [user,setUser]=useState(null);

 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data));
 },[])
 console.log(user);
    return (
        <div style={{color:'white'}}>
            User
            {user && user.map((item)=> <div key={item.id} style={{color:'white'}}>
                   {item.name}
                </div>
            )}
        </div>
    )
}

export default User;