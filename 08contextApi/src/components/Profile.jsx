import React, {useContext} from 'react'
import UserContext from '../context/Usercontext'

function profile() {
    const {user}= useContext(UserContext); // yha hmne user liya h kyu ki hme data chahiye method nhi....
    if(!user){
        return <div>Hey Please Login First</div>
    }
  return <div>Welcome {user.username}</div>
}

export default profile