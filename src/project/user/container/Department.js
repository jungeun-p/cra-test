import { Button } from 'antd';
import Input from 'antd/lib/input/Input';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../state';

const Department = () => {
    // 수정상태 여부
    const [isEditDepartment, setIsEditDepartment] = useState(false);
    // 수정상태시 input의 value 상태값
    const [tempDepartment, setTempDepartment] = useState('');
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    // 소속 상태 변경 함수
    function onSaveDepartment(){   
        if(tempDepartment !== ''){
            dispatch(actions.fetchUpdateUser({
                user, 
                key: 'department', 
                value: tempDepartment, 
                fetchKey: 'department'
            })
            );
            setIsEditDepartment(false);
        } else {
            console.log('소속은 필수 값입니다.')
        }
    }
    // 수정 상태 변경 함수 
    function onEditDepartment(){
        setIsEditDepartment(true);
        setTempDepartment(user.department);
    }
    return (
    <> 
        {isEditDepartment && (
            <Input
                // focus
                autoFocus
                // ref={ref => ref && ref.focus()}
                value={tempDepartment}
                onChangeCapture={e => setTempDepartment(e.target.value)}
                onPressEnter={onSaveDepartment}
                onBlur={()=>setIsEditDepartment(false)}
                style={{ width: '100%' }}
            />
        )}
        {!isEditDepartment && (
            <Button
                type="text"
                block
                onClick={onEditDepartment}
                style={{ textAlign: 'left', padding: 0 }}
            >
                {user.department}
            </Button>
        )}
    </>
    );
};

export default Department;