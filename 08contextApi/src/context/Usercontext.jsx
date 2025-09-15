import React from 'react';
import UserContext from './Usercontext';


const UserContextProvider = ({children}) => {
    // children is a prop that is passed to the component that is being rendered
    // it is used to render the child components of the component that is being rendered
    // jis sequence m data provide krna h usi sequence m child component render krta h
    const [user,setUser]= React.useState(null);
    return(
        <>
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
        
        </>
    )
}

export default UserContextProvider;