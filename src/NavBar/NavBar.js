import React, { Fragment, useEffect, useState } from "react";
import NavButton from "./NavButton";

const NavBar = () => {
    return (
        <Fragment>
            <nav>
                <h1>

                </h1>
                <div>
                    <ul className="list">
                        <Fragment>
                            <li className="items"><NavButton to="/" label="Employee Form" /></li>
                            <li className="items"><NavButton to="/contactUs" label="Contact Us" /></li>
                        </Fragment>
                    </ul>
                </div>
            </nav>
            <div style={{ height: "75px" }} />
        </Fragment>
    )
}

export default NavBar;
