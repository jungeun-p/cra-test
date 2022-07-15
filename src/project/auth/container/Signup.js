import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../component/AuthLayout';

const Signup = () => {
    return (
        <AuthLayout onFinish={()=>{}}>
            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    }
                ]}
            >
                <Input 
                    autoFocus 
                    addonAfter={EAMIL_SUFFIX} 
                    placeholder="" 
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    인증 메일 받기 
                </Button>
                Or <Link to="/login">Login</Link>
            </Form.Item>
        </AuthLayout>
    );
};

const EAMIL_SUFFIX = '@company.com'

export default Signup;