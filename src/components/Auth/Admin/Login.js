import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";
import Container from "../../../common/Container";
import { apiHostUrl } from "../../../config";
import { AuthContext } from "../../Providers/AuthProvider";
import Footer from "../../../footer/Footer";

const Login = () => {

    const [query, setQuery] = useState({
        username: '',
        password: '',
    });

    const [auth, setAuth] = useContext(AuthContext);
    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]: value
        })
    }

    const onSubmit = () => {
        const data = query;
        data.password = query.password;

        if (query.password !== data.password) {
            alert("Username or password is incorrect")
            return;
        }
        login(data)
    }

    const login = async (data) => {
        try {
            const res = await axios.post(`${apiHostUrl}/api/auth/signin`,
                data);
            setAuth({
                ...auth,
                token: res.data.token,
                profile: {},
                roles: res.data.roles,
            })
            console.log(res.data);
            navigate("/employeePortal");
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
        }
    }

    return (
        <div>
            <Container>
                <h1>Login</h1>
                <div>
                    <LoginForm
                        query={query}
                        onChange={updateForm}
                        onSubmit={onSubmit}
                    />
                </div>
            </Container>
        </div>
    )
}

export default Login;