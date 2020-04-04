import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button } from "antd";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
 const onFinish = (values:any) => {
   console.log("Success:", values);
 };
const UserLogin = () => {
  return (
    <div>
      <p style={{ textAlign: "center" }}>Введите логин и пароль</p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Обязательно"),
          password: Yup.string().required("Обязательно"),
        })}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(props) => {
          const {
            // values,
            // touched,
            errors,
            // dirty,
            isSubmitting,
            // handleChange,
            // handleBlur,
            // handleSubmit,
            // handleReset,
          } = props;
          return (
            <Form
              {...layout}
              name="basic"
              onFinish={onFinish}
              initialValues={{ remember: true }}
              onFinishFailed={() => errors}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UserLogin;
