import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"

const NavButton = (props) => {

    const [hover, setHover] = useState(false);

    return (
        <NavLink className="nav-style"
            to={props.to}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {props.label}
        </NavLink>
    )
}

NavButton.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default NavButton;