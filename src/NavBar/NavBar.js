import React, { Fragment, useEffect, useState } from "react";
import NavButton from "./NavButton";
import './NavBar.css'

const NavBar = () => {
    return (
        <Fragment>
            <nav>
                <div>
                    <h1 className="logo">
                        WorkSpace+
                    </h1>
                    <p className="description">Employee Manager</p>
                    <ul className="list">
                        <Fragment>
                            <li className="items"><NavButton to="/" label="Home" /></li>
                            <li className="items"><NavButton to="/departments" label="Departments" /></li>
                            <li className="items"><NavButton to="/contactUs" label="Contact Us" /></li>
                        </Fragment>
                    </ul>
                </div>
            </nav>
            <div style={{ height: "115px" }} />
        </Fragment>
    )
}

export default NavBar;
