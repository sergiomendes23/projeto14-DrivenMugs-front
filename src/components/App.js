import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

export default function App () {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
    )
};