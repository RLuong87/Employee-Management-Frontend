import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ContactUs from "../components/ContactUs/ContactUs";
import Departments from "../Auth/Departments/Departments";
import EmployeeTable from "../Auth/Employee/EmployeeTable";
import EmployeeForm from "../Auth/Employee/EmployeeForm";
import Home from "../components/Home/Home";
import EmployeePortal from "../Auth/Employee/EmployeePortal";

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
            </Routes>
        </div>
    )
}

export default AppRouter;
