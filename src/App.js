import React, { useState } from "react";
import { Button, Modal, Checkbox, Form, Input } from "antd";

import * as Styles from "./style.js";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Styles.ModalCustom
        open={isModalOpen}
        title={
          <Styles.HeaderLoginModal isSignIn={isSignIn}>
            <button onClick={() => setIsSignIn(true)}>Sign in</button>
            <button onClick={() => setIsSignIn(false)}>Sign up</button>
          </Styles.HeaderLoginModal>
        }
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        {isSignIn ? (
          <Styles.SignInWrapper>
            <h1>Sign in to your account</h1>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Styles.InputCustom
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Styles.InputCustom>

              <Styles.InputCustom
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Styles.InputCustom>

              <Form.Item>
                <Styles.ButtonCustom type="primary" htmlType="submit">
                  Login
                </Styles.ButtonCustom>
              </Form.Item>
            </Form>
          </Styles.SignInWrapper>
        ) : (
          <div>Page sign up</div>
        )}
      </Styles.ModalCustom>
    </>
  );
}

export default App;
