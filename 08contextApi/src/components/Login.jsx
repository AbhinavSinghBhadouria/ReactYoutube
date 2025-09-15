import React, {useState, useContext} from 'react'
import UserContext from '../context/Usercontext';
// ye useContext hook use krke hum context ka data access kr skte h
function Login() {
    const [username, setUsername]= useState('');
    const [password, setPassword]=useState('');  // yha pr humne username or password k liye state bnayi h

     const {setUser}= useContext(UserContext);
     // usercontext.jsx m jo value provide ki h usme se hum setUser ko access kr rhe h with the help of destructuring ({setUser})
     // curly brackets ko hi destructuring khte h
     // ab hum setUser function ko use krke user ki value ko update kr skte h
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return ( 
    <div>
        <h2>
            Login Page
        </h2>
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}placeholder='Username'/>
        <input type='text' value={password} onChange={(e)=> setPassword(e.target.value)}placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login