import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NewUserForm from '../Admin/NewUserForm';
import Container from '../../../common/Container';
import { apiHostUrl } from '../../../config';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

    let navigate = useNavigate();

    const [query, setQuery] = useState({
        email: '',
        password: '',
        confirm: '',
        fname: '',
        lname: ''
    })

    const [setAuth] = useContext(AuthContext);

    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]: value
        })
    }


    const onSubmit = () => {
        alert("Registration successful");

        if (query.password !== query.confirm) {
            alert("Passwords do not match")
            return;
        }

        const data = query;
        data.name = `${query.fname} ${query.lname}`;
        data.username = data.email;
        createUser(data);
    };

    const createUser = async (data, token) => {
        try {
            const res = await axios.post(`${apiHostUrl}/api/auth/signup`, data);
            setAuth({
                token,
                name: res.data.name,
                email: res.data.email
            })
            login(data);
            navigate("/")
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    const login = async (data) => {
        try {
            const res = await axios.post(`${apiHostUrl}/api/auth/signin`, data);
            setAuth({ name: res.data.name })
            console.log(res.data);
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <div>
            <Container>
                <h1>Register</h1>
                <div>
                    <NewUserForm
                        query={query}
                        onChange={updateForm}
                        onSubmit={onSubmit}
                    />
                </div>
            </Container>
        </div>
    )
}

export default Register;