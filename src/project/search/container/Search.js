import { Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as authActions } from '../../auth/state';
import History from '../../common/component/History';
import useNeedLogin from '../../common/hook/useNeedLogin';
import Settings from '../component/Settings';
import { actions as serachActions } from '../state';
import SearchInput from './SearchInput';

const Search = () => {
    useNeedLogin();
    const { history } = useSelector(state => state.search);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(serachActions.fetchAllHistory());
    }, [dispatch])

    function logout(){
        dispatch(authActions.fetchLogout());
    }
    return (
        <>
            <Row justify="end" style={{ padding: 20 }}>
                <Col><Settings logout={logout} /></Col>
            </Row>
            <Row justify="center" style={{ marginTop: 100 }}>
                <Col>
                    <Typography.Title style={{ fontFamily: "궁서체" }}>W H O I S</Typography.Title>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: 50 }}>
                <Col xs={20} md={15} lg={12}>
                    <SearchInput />
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: 50 }}>
                <Col span={12}>
                    <History items={history} />
                </Col>
            </Row>
        </>
    );
};

export default Search;