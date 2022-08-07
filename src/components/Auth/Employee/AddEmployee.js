import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { apiHostUrl } from "../../../config";
import EmployeeForm from "./EmployeeForm";
import BorderCard from '../../../common/BorderCard'
import Container from '../../../common/Container'
import { AuthContext } from "../../Providers/AuthProvider";

const AddEmployee = () => {

    const [auth] = useContext(AuthContext);

    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        maritalStatus: "",
        gender: "",
        dateOfBirth: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        phoneNumber: "",
        email: "",
        ssn: "",
        title: "",
        salary: "",
        dateOfHire: "",
        permanent: "",
        healthInsurance: "",
        dentalInsurance: "",
        retirementPlan: ""
    });

    const updateForm = (field, value) => {
        setProfile({
            ...profile,
            [field]: value
        })
    }

    const onSubmit = () => {
        alert("Employee information has been saved")
        const data = profile;
        createEmployee(data)
    }

    useEffect(() => {
        localStorage.setItem('profile', JSON.stringify(profile))
    }, [profile]);

    const createEmployee = async (data, token) => {
        try {
            const res = await axios.post(
                `${apiHostUrl}/api/employees`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
            console.log(res.data);
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <Container>
            <EmployeeForm
                profile={profile}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </Container>
    )
}

export default AddEmployee;