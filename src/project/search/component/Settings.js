import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import { SettingFilled } from '@ant-design/icons';

const Settings = ({ logout }) => {
    return (
        <Dropdown 
            overlay={<Menu onClick={logout} items={[{ label: 'Logout', key: 0 }]}/>} 
            trigger={['click']}
            placement="bottomRight"
        >
            <Button shape="circle" icon={<SettingFilled/>} />
        </Dropdown>
    );
};

export default Settings;