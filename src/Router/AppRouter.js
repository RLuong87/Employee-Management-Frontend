import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ContactUs from "../components/Auth/ContactUs/ContactUs";
import Departments from "../components/Auth/Departments/Departments";
import EmployeeTable from "../components/Auth/Employee/EmployeeTable";
import EmployeeForm from "../components/Auth/Employee/EmployeeForm";
import EmployeePortal from "../components/Auth/Employee/EmployeePortal";
import Register from "../components/Auth/Admin/Register";
import Login from "../components/Auth/Admin/Login";
import Logout from "../components/Auth/Admin/Logout";
import Home from "../components/Home/Home";
import Footer from "../footer/Footer";

const AppRouter = () => {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/createEmployee" element={<EmployeeForm />} />
                <Route path="/employeePortal" element={<EmployeePortal />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/employeeTable" element={<EmployeeTable />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </div>
    )
}

export default AppRouter;
