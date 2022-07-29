import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"

const NavButton = (props) => {

    const [hover, setHover] = useState(false);

    return (
        <div>
            <NavLink
                style={{
                    background: "transparent",
                    textDecoration: "none",
                    fontSize: "1.25em",
                    color: "#010101",
                    fontWeight: 600,
                    textShadow: "1px 1px #f1f1f1",
                    textAlign: "center",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                    margin: "0 10px",
                    opacity: hover ? "40%" : "100%",
                }}
                to={props.to}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {props.label}
            </NavLink>
        </div>
    )
}

NavButton.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default NavButton;