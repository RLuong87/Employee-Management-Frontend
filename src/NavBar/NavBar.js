import React, { Fragment, useEffect, useState } from "react";
import NavButton from "./NavButton";

const NavBar = () => {
    return (
        <Fragment>
            <nav>
                <div>
                    <ul>
                        <Fragment>
                            <li><NavButton to="/" label="Home" /></li>
                            <li><NavButton to="/contactUs" label="Contact Us" /></li>
                        </Fragment>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar;
