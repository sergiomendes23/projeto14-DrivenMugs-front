import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../components/Context/UserContext";

import Home from "./Account/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

export default function App () {

    const [token, setToken] = useState('');
    const [user, setUser] = useState('');

    return (
        <UserContext.Provider value={{
            token, 
            setToken, 
            user, 
            setUser,
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
};