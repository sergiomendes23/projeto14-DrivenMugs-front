import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../components/Context/UserContext";

import Home from "./Account/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

export default function App () {

    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
};