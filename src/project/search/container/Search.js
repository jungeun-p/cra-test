import { Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import History from '../../common/component/History';
import useNeedLogin from '../../common/hook/useNeedLogin';
import Settings from '../component/Settings';
import { actions } from '../state';
import SearchInput from './SearchInput';

const Search = () => {
    useNeedLogin();
    const { history } = useSelector(state => state.search);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(actions.fetchAllHistory());
    }, [dispatch])
    return (
        <>
            <Row justify="end" style={{ padding: 20 }}>
                <Col><Settings logout={()=>{}} /></Col>
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