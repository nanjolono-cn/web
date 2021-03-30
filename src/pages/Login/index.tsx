import React from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
import styles from './index.less'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  layout: 'vertical'
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export default function Login() {
  const onFinish = (value: any) => {
    console.log(value)
  }

  const onFinishFailed = (errInfo: string) => {
    console.log('Failed: ', errInfo)
  }

  return (
    <Form
      {...layout}
      className={styles.login}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名！' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码！' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="check">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
        <Button htmlType="button">重置</Button>
      </Form.Item>
    </Form>
  )
}
