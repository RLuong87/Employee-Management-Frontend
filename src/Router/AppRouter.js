import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/EmployeeInfo";
import ContactUs from "../ContactUs/ContactUs";

const AppRouter = () => {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contactUs" element={<ContactUs />} />
            </Routes>
        </div>
    )
}

export default AppRouter;
