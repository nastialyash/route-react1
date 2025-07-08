import  { useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";

const Register = () => {
  const [form] = Form.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onFinish = (values) => {
    setSubmittedData(values);
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 400 }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Enter name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Enter email" },
            { type: "email", message: "Dont good email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Enter pass" },
            { min: 6, message: "Min 6 symbols" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="dob"
          label="Date"
          rules={[{ required: true, message: "Enter date" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>

      
      {submittedData && (
        <div style={{ marginTop: 24 }}>
          <h3>Login succses!</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Date: {submittedData.dob?.format("YYYY-MM-DD")}</p>
        </div>
      )}
    </>
  );
};

export default Register;
