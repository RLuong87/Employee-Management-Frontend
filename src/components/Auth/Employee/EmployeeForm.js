import React from "react";
import Input from "../../../common/Input";
import InlineInputContainer from '../../../common/InlineInputContainer'
import Form from '../../../common/Form'
import Container from "../../../common/Container";

const EmployeeForm = ({ onSubmit, onChange, profile }) => {

    const handleChange = (e) => {
        onChange(e.target.id, e.target.value)
    }

    return (
        <Container>
            <Form onSubmit={onSubmit} style={{ marginTop: '1em' }}>
                <InlineInputContainer>
                    <Input
                        id="firstName"
                        // value={profile.firstName}
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                    />
                    <Input
                        id="lastName"
                        // value={profile.lastName}
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="maritalStatus"
                        // value={profile.maritalStatus}
                        placeholder="Marital Status"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="gender"
                        // value={profile.gender}
                        placeholder="Gender"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="dateOfBirth"
                        // value={profile.dateOfBirth}
                        placeholder="Date of Birth"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="address"
                        // value={profile.address}
                        placeholder="Address"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="city"
                        // value={profile.city}
                        placeholder="City"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="state"
                        // value={profile.state}
                        placeholder="State"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="zipcode"
                        // value={profile.zipcode}
                        placeholder="Zipcode"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="phoneNumber"
                        // value={profile.phoneNumber}
                        placeholder="Phone Number"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="email"
                        // value={profile.email}
                        placeholder="Email"
                        onChange={handleChange}
                        type='email'
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="ssn"
                        // value={profile.ssn}
                        placeholder="Social Security Number"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="title"
                        // value={profile.title}
                        placeholder="Job Title"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="salary"
                        // value={profile.salary}
                        placeholder="Salary"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="dateOfHire"
                        // value={profile.dateOfHire}
                        placeholder="Date of Hire"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="permanent"
                        // value={profile.permanent}
                        placeholder="Employment Status"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="healthInsurance"
                        // value={profile.healthInsurance}
                        placeholder="Health Insurance Plan"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="dentalInsurance"
                        // value={profile.dentalInsurance}
                        placeholder="Dental Plan"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        id="retirementPlan"
                        // value={profile.retirementPlan}
                        placeholder="401k"
                        onChange={handleChange}
                        required
                    />
                </InlineInputContainer>
                <button>Submit</button>
            </Form>
        </Container>
    )
}

export default EmployeeForm;