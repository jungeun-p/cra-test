import { Col, Descriptions, PageHeader, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { actions } from '../state';

const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const { name } = useParams();
    useEffect(()=>{
        // API로 사용자 정보 가져오기 
        dispatch(actions.fetchUser(name));
    }, [name])

    const isFetched = true;
    
    return (
        <Row justify="center">
            <Col xs={24} lg={14}>
                <PageHeader
                    onBack={()=> navigate(-1)}
                    title="user information"
                >
                    {user && (
                        <Descriptions layout="vertical" bordered column={1}>
                            <Descriptions.Item label="Name">
                                <Typography>{user.name}</Typography>
                            </Descriptions.Item>
                            <Descriptions.Item label="Department">
                                {user.department}
                            </Descriptions.Item>
                            <Descriptions.Item label="Tag">{user.tag}</Descriptions.Item>
                            <Descriptions.Item label="Log">UpdateLog</Descriptions.Item>
                        </Descriptions>
                    )}
                    {!user && isFetched && (
                        <Typography.Text>non user</Typography.Text>
                    )}
                </PageHeader>
            </Col>
        </Row>
        );
};

export default User;