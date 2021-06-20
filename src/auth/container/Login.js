import { Row, Col, Typography, Form, Input, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Login() {
  return (
    <>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: 'Caligrappy' }}>
            찾아야 한다.
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Form
            initialValues={{ remember: true }}
            style={{ width: 300, marginTop: 50 }}
            onFinish={() => {}}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input
                autoFocus
                prefix={<UserOutlined />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                Log in
              </Button>
              Or <Link to="/signup">register now!</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
