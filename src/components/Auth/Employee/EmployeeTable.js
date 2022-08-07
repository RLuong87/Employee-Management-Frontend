import React from "react";
import Container from "../../../common/Container";

const EmployeeTable = () => {

    return (
        <Container>
            <div className="e-table">
                <table>
                    <tr>
                        <th>Employee Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Marital Status</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zipcode</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>SSN</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Date of Hire</th>
                        <th>Employment Status</th>
                        <th>Health Plan</th>
                        <th>Dental</th>
                        <th>401k</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bradley Cooper</td>
                        <td>47</td>
                        <td>Single</td>
                        <td>M</td>
                        <td>01-25-1975</td>
                        <td>11 Prickley Rd</td>
                        <td>Pawtucket</td>
                        <td>RI</td>
                        <td>02860</td>
                        <td>401-413-7845</td>
                        <td>bradleycooper@gmail.com</td>
                        <td>198-22-3490</td>
                        <td>Sr. Software Engineer</td>
                        <td>$110,000</td>
                        <td>09-01-2010</td>
                        <td>Active/<br />Full Time</td>
                        <td>Premium</td>
                        <td>Enrolled</td>
                        <td>Enrolled</td>
                    </tr>
                </table>
            </div>
        </Container>
    )
}

export default EmployeeTable;