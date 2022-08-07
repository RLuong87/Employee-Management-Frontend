import React from "react";

const Logout = () => {

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div>
            <a href="#" onClick={logout()} />
        </div>
    )
}

export default Logout;