import React from "react";
import { Link } from "react-router-dom";
import Input from "../../common/Input";
import InlineInputContainer from '../../common/InlineInputContainer'
import Form from '../../common/Form'

const EmployeeForm = (props) => {
    const { employee } = props;

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value)
    }

    return (
        <Form onSubmit={props.onSubmit}>
            <InlineInputContainer>
                <Input
                    name='firstName'
                    id='firstName'
                    // value={employee.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                    type='text'
                    required
                />
                <Input
                    name='lastName'
                    id='lastName'
                    // value={employee.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                    type='text'
                    required
                />
            </InlineInputContainer>
            <InlineInputContainer>
                <Input
                    name="gender"
                    id="gender"
                    // value={employee.gender}
                    placeholder="Gender"
                    onChange={handleChange}
                    type='text'
                    required
                />
            </InlineInputContainer>
            <Link to="/departments">
                <button>Next</button>
            </Link>
        </Form>
    )
}

export default EmployeeForm;