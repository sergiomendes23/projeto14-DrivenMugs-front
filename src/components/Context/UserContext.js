import { createContext, useState } from 'react';

const UserContext = createContext({});

export function UserProvider({children}){

  //futuramente usar useState(JSON.parse(localStorage.getItem("storedLoginData")));
  const [token, setToken] = useState(''); 
  const [user, setUser] = useState('');

  return(
    <UserContext.Provider value={{token, setToken, user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;