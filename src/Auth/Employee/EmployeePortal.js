import React from "react";
import { Link } from "react-router-dom";
import HorizontalLine from "../../common/HorizontalLine";

const EmployeePortal = () => {

    return (
        <div className="buttons">
            <h1>Employee Dashboard</h1>
            <br/>
            <HorizontalLine />
            <br/>
            <Link to="/createEmployee">
                <button>
                    New Employee
                </button>
            </Link>
            <Link to="/updateEmployee">
                <button>
                    Update Employee
                </button>
            </Link>
            <Link to="/employeeTable">
                <button>
                    View Employee
                </button>
            </Link>
        </div>
    )

}

export default EmployeePortal;