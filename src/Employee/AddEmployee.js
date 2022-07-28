import React, { useState, useEffect } from "react";
import axios from 'axios';
import { apiHostUrl } from "../config";
import Home from "../Home/EmployeeInfo";

const AddEmployee = () => {

    const [query, setQuery] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        status: '',
        dob: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        phoneNumber: '',
        email: '',
        ssn: '',
        title: '',
        salary: '',
        dateOfHire: '',
        permanent: '',
        heathInsurance: '',
        dentalInsurance: '',
        retirementPlan: ''
    });

    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]: value
        })
    }

    const onSubmit = () => {
        const data = query;
        createEmployee(data)
    }

    const createEmployee = async (data) => {
        try {
            const res = await axios.post(`${apiHostUrl}/api/employees`, data)
            setQuery(res.data)
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <div>
            <Home
                query={query}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default AddEmployee;