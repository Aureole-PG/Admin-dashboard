import React from 'react'
import { Card, Row, Col, Form, Input, Button, Checkbox } from 'antd'

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Row justify="center" align="middle" style={{ height: '100vh', width: '100vw' }} className="gradient">
      <Col xs={20} sm={16} md={10} lg={8} xl={6} >
        <Card
          hoverable
          style={{ width: '100%' }}
          className="cristal"
        >
          <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="access-form cristal"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Login
