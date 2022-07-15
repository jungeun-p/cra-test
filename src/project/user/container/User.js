import { Col, Descriptions, PageHeader, Row, Space, Spin, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import History from '../../common/component/History';
import useFetchInfo from '../../common/hook/useFetchInfo';
import FetchLabel from '../component/FetchLabel';
import { actions, Types } from '../state';
import Department from './Department';
import TagList from './TagList';

const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const { name } = useParams();
    const { userHistory } = useSelector(state => state.user);
    
    useEffect(()=>{
        // API로 사용자 정보 가져오기 
        dispatch(actions.fetchUser(name));
        dispatch(actions.fetchUserHistory(name));
    }, [dispatch, name])

    // const isFetched = true;
    const { isFetched, isSlow } = useFetchInfo(Types.FETCH_USER);

    return (
        <Row justify="center">
            <Col xs={24} lg={14}>
                <PageHeader
                    onBack={()=> navigate(-1)}
                    title={
                    <FetchLabel label="사용자 정보" actionType={Types.FETCH_USER} />
                    // <Space>
                    //     user info
                    //      {isSlow && <Spin size="small"/ >}
                    // </Space>
                    }
                >
                    {user && (
                        <Descriptions layout="vertical" bordered column={1}>
                            <Descriptions.Item label="Name">
                                <Typography>{user.name}</Typography>
                            </Descriptions.Item>
                            <Descriptions.Item 
                                label={
                                    <FetchLabel 
                                        label="department" 
                                        actionType={Types.FETCH_UPDATE_USER} 
                                        fetchKey="department" 
                                    />
                                }
                            >
                            <Department />
                            </Descriptions.Item>
                            <Descriptions.Item 
                                label={
                                    <FetchLabel 
                                        label="tag" 
                                        actionType={Types.FETCH_UPDATE_USER} 
                                        fetchKey="tag" 
                                    />
                                }
                            >
                                <TagList />
                            </Descriptions.Item>
                            <Descriptions.Item label="Log">
                                <History items={userHistory}/>
                            </Descriptions.Item>
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