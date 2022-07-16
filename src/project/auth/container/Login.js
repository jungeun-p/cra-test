import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthLayout from '../component/AuthLayout';
import useBlockLoginUser from '../hook/useBlockLoginUser';
import { actions } from '../state';

const Login = () => {
    useBlockLoginUser();
    const dispatch = useDispatch();
    function onFinish({ username, password }){
        dispatch(actions.fetchLogin(username, password));
    }
    return (
        <AuthLayout onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input
                        autoFocus
                        prefix={<UserOutlined />} 
                        placeholder="Username" 
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    Log in
                    </Button>
                    Or <Link to="/signup">register now!</Link>
                </Form.Item>
        </AuthLayout>
    );
};

export default Login;