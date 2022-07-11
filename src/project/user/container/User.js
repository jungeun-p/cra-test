import { Col, PageHeader, Row } from 'antd';
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
    return (
        <Row justify="center">
            <Col xs={24} lg={14}>
                <PageHeader
                    onBack={()=> navigate(-1)}
                    title="user information"
                >
                    {user?.name}
                </PageHeader>
            </Col>
        </Row>
        );
};

export default User;