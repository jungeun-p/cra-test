import { Col, Row, Typography } from 'antd';
import React from 'react';
import Settings from '../component/Settings';

const Search = () => {
    return (
        <>
            <Row justify="end" style={{ padding: 20 }}>
                <Col><Settings logout={()=>{}} /></Col>
            </Row>
            <Row justify="center" style={{ marginTop: 100 }}>
                <Col><Typography.Title style={{ fontFamily: "궁서체" }}>W H O I S</Typography.Title></Col>
            </Row>
            <Row justify="center" style={{ marginTop: 50 }}>
                <Col span={12}>search</Col>
            </Row>
        </>
    );
};

export default Search;