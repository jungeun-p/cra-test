import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import { SettingFilled } from '@ant-design/icons';

const Settings = ({ logout }) => {
    return (
        <Dropdown 
            overlay={
            <Menu items={[{ label: 'Logout', key: '0' }]} onClick={logout} />
        } 
            trigger={['click']}
            placement="bottomRight"
        >
            <Button shape="circle" icon={<SettingFilled/>} />
        </Dropdown>
    );
};

export default Settings;