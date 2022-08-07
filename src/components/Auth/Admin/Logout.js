import React from "react";
import Container from "../../../common/Container";

const Logout = () => {

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div>
            <a href="#" onClick={logout()} />
            <Container />
        </div>
    )
}

export default Logout;