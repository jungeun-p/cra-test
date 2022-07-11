import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Space, Typography } from 'antd';
import Input from 'antd/lib/input/Input';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions as userActions } from '../../user/state';
import { actions as searchActions } from '../state';

const SearchInput = () => {
    const keyword = useSelector(state => state.search.keyword);
    const dispatch = useDispatch();

    function setKeyword(value){
      if(value !== keyword){
        dispatch(searchActions.setValue('keyword', value));
        dispatch(searchActions.fetchAutoComplete(value));
      }
    }
    const autoCompletes = useSelector(state => state.search.autoCompletes);
    const navigate = useNavigate();

    function goToUser(value){
      const user = autoCompletes.find(item => item.name === value);
      if(user){
        dispatch(userActions.setValue('user', user));
        navigate(`${user.name}`);
      }
    }
    return (<>
        <AutoComplete
          value={keyword}
          onChange={setKeyword}
          onSelect={goToUser}
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={500}
          style={{ width: '100%' }}
          options={autoCompletes.map(item=>({
            value: item.name,
            label: (
              <Space>
                <Typography.Text strong>{item.name}</Typography.Text>
                <Typography.Text type="secondary">
                  {item.department}
                </Typography.Text>
                <Typography.Text>{item.tag}</Typography.Text>
              </Space>
            )
          }))}
          autoFocus
        >
        <Input size="large" placeholder="search" prefix={<SearchOutlined />} />
      </AutoComplete>
    </>);
};

export default SearchInput;