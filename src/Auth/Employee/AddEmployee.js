import React, { useState, useEffect } from "react";
import axios from 'axios';
import { apiHostUrl } from "../../config";
import EmployeeForm from "./EmployeeForm";

const AddEmployee = () => {

    const [query, setQuery] = useState({
        firstName: '',
        lastName: '',
        maritalStatus: '',
        gender: '',
        dateOfBirth: '',
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
        data.name = `${firstName} ${lastName}`
        createEmployee(data)
    }

    const createEmployee = async (data) => {
        try {
            const res = await axios.post(`${apiHostUrl}/api/employees`, data)
            setQuery({
                fname: res.data.fname,
                lname: res.data.lname,
                gender: res.data.gender,
                status: res.data.status,
                dob: res.data.dob,
                city: res.data.city,
                state: res.data.state,
                phoneNumber: res.data.phoneNumber,
                email: res.data.email,
                ssn: res.data.ssn,
                title: res.data.title,
                salary: res.data.salary,
                dateOfHire: res.data.dateOfHire,
                permanent: res.data.permanent,
                heathInsurance: res.data.heathInsurance,
                dentalInsurance: res.data.dentalInsurance,
                retirementPlan: res.data.retirementPlan
            })
            console.log(res.data);
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <EmployeeForm
            query={query}
            onChange={updateForm}
            onSubmit={onSubmit}
        />
    )
}

export default AddEmployee;