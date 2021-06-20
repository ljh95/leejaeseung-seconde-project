/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Col, Row, PageHeader, Typography, Descriptions } from 'antd';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actions } from '../state';

/**
 *
 * @param {object} param
 * @param {import('react-router').match} param.match
 */

export default function Search({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  // @ts-ignore
  const user = useSelector(state => state.user.user);

  const name = match.params.name;
  useEffect(() => {
    dispatch(actions.fetchUser(name));
  }, [name]);

  const isFetched = true;

  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={14}>
        <PageHeader onBack={history.goBack} title="사용자 정보">
          {user && (
            <Descriptions layout="vertical" bordered column={1}>
              <Descriptions.Item label="이름">
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="소속">
                {user.department}
              </Descriptions.Item>
              <Descriptions.Item label="태그">{user.tag}</Descriptions.Item>
              <Descriptions.Item label="수정내역">수정내역</Descriptions.Item>
            </Descriptions>
          )}
          {!user && isFetched && (
            <Typography.Text>존재하지 않는 사용자입니다.</Typography.Text>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
}