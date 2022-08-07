import React from "react";
import { Link } from "react-router-dom";
import HorizontalLine from "../../../common/HorizontalLine";
import Container from "../../../common/Container";

const EmployeePortal = () => {

    return (
        <div className="buttons">
            <h1>Employee Dashboard</h1>
            <HorizontalLine />
            <Container>
                <Link to="/createEmployee">
                    <button>
                        New Employee
                    </button>
                </Link>
                <Link to="/employeeTable">
                    <button>
                        Employees
                    </button>
                </Link>
                <Link to="/updateEmployee">
                    <button>
                        Update Employee
                    </button>
                </Link>
            </Container>
        </div>
    )

}

export default EmployeePortal;