import { Space, Spin } from 'antd';
import React from 'react';
import useFetchInfo from '../../common/hook/useFetchInfo';
/**
 * 
 * @param {object} param
 * @param {string} param.label
 * @param {string} param.actionType
 * @param {string=} param.fetchKey
 */
// api 응답이 드릴 경우 로딩 처리 
const FetchLabel = ({ label, actionType, fetchKey }) => {
    const { isSlow } = useFetchInfo(actionType, fetchKey);
    return (
        <div>
            <Space>
                {label}
                {isSlow && <Spin size="small" />}
            </Space>
            
        </div>
    );
};

export default FetchLabel;