import React from "react";
import { Link } from "react-router-dom";
import InlineInputContainer from "../../../common/InlineInputContainer";
import Form from "../../../common/Form";
import Input from "../../../common/Input";
import Container from "../../../common/Container";
import HorizontalLine from "../../../common/HorizontalLine";

const LoginForm = (props) => {
    const { query } = props;
  
    const handleChange = (e) => {
      props.onChange(e.target.id, e.target.value);
    }
  
    return (
      <Container>
        <Form onSubmit={props.onSubmit} style={{ marginTop: '1em' }} >
          <InlineInputContainer>
            <Input
              name="username"
              id="username"
              value={query.username}
              placeholder={"Email address"}
              onChange={handleChange}
              required
              type="email"
            />
          </InlineInputContainer>
          <InlineInputContainer>
            <Input
              name="password"
              id="password"
              value={query.password}
              placeholder={"Password"}
              onChange={handleChange}
              required
              type="password"
            />
          </InlineInputContainer>
          <button>Login</button>
        </Form>
        <br/>
        <HorizontalLine style={{width: 400}} />
        <Link to='/register'>
          <button>Create a new account</button>
        </Link>
      </Container>
    )
  }
  
  export default LoginForm;