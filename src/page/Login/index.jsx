import { Button, Checkbox, Form, Input } from "antd";
import fetchRequest from "../../restClient";
import {
  Redirect,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

export default function Login() {
  const history = useHistory();
  const authen = localStorage.getItem("accessToken");
  if (authen) {
    return <Redirect to="product" />;
  }

  const onFinish = (values) => {
    fetchRequest("http://localhost:8000/auth/login", "post", values)
      .then((data) => {
        localStorage.setItem("accessToken", data.access_token);
        history.push("/product");
      })
      .catch((err) => console.log(err));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
