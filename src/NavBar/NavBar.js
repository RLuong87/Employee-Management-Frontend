import React, { Fragment, useContext } from "react";
import NavButton from "./NavButton";
import './NavBar.css'
import { AuthContext } from "../components/Providers/AuthProvider";

const NavBar = () => {

    const [auth] = useContext(AuthContext);

    return (
        <Fragment>
            <nav>
                <div>
                    <h1 className="logo">
                        BLUE-COLLAR
                    </h1>
                    <p className="description">Employee Manager</p>
                    <ul className="list">
                        {auth.token ?
                            <Fragment>
                                <li className="items"><NavButton to="/employeePortal" label="Dashboard" /></li>
                                <li className="items"><NavButton to="/departments" label="Departments" /></li>
                                <li className="items"><NavButton to="/logout" label="Logout" /></li>
                            </Fragment>
                            :
                            <Fragment>
                            </Fragment>
                        }
                    </ul>
                </div>
            </nav>
            <div style={{ height: "105px" }} />
        </Fragment>
    )
}

export default NavBar;
