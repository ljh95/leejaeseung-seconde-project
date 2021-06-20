import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../state';

export default function Department() {
  const [isEditDeparment, setIsEditDeparment] = useState(false);
  const [tempDepartment, setTempDepartment] = useState('');
  // @ts-ignore
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  function onSaveDepartment() {
    if (tempDepartment) {
      dispatch(
        actions.fetchUpdateUser({
          user,
          key: 'department',
          value: tempDepartment,
          fetchKey: 'department',
        })
      );
      setIsEditDeparment(false);
    } else {
      message.error('소속은 필수 값입니다.');
    }
  }
  function onEditDepartment() {
    setIsEditDeparment(true);
    setTempDepartment(user.department);
  }
  return (
    <>
      {isEditDeparment && (
        <Input
          // ref={ref => ref && ref.focus()}
          autoFocus
          value={tempDepartment}
          onChange={e => setTempDepartment(e.target.value)}
          onPressEnter={onSaveDepartment}
          onBlur={() => setIsEditDeparment(false)}
          style={{ width: '100%' }}
        />
      )}
      {!isEditDeparment && (
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
}
