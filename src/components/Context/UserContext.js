import { createContext, useState } from 'react';

const UserContext = createContext({});

export function UserProvider({children}){

  //futuramente usar useState(JSON.parse(localStorage.getItem("storedLoginData")));
  const [token, setToken] = useState(''); 
  const [user, setUser] = useState('');

  const [cart, setCart] = useState('');

  return(
    <UserContext.Provider value={{token, setToken, user, setUser, cart, setCart}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;