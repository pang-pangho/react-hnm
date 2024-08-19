import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // 이메일 형식을 정규식으로 검증
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const loginUser = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("올바른 형식의 이메일을 입력해주세요");
      return;
    }
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(""); // 입력값이 변경될 때 오류 메시지 초기화
            }}
          />
          <Form.Text className="text-muted">
            {emailError ? (
              <span style={{ color: "red" }}>{emailError}</span>
            ) : (
              "귀하의 이메일을 다른 사람과 절대 공유하지 않을 것입니다."
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="정보 저장" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
