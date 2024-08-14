import { useState } from "react";

import { useLogin } from "./useLogin";

import Button from "../../UI/Button";
import Form from "../../UI/Form";
import FormRowVertical from "../../UI/FormRowVertical";
import Input from "../../UI/Input";
import SpinnerMini from "../../UI/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("jane@example.com");
  const [password, setPassword] = useState("janedoe1234");

  const { login, isLoading } = useLogin();

  function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
