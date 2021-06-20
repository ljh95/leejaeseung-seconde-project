// @ts-nocheck
import React from 'react';
import { Col, Row, Typography } from 'antd';
import Settings from '../component/Settings';
import SearchInput from './SearchInput';
import History from '../../common/component/History';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actions } from '../state';

export default function Search() {
  const history = useSelector(state => state.search.history);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchAllHistory());
  }, [dispatch]);

  return (
    <>
      <Row justify="end" style={{ padding: 20 }}>
        <Col>
          <Settings logout={() => {}} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: 'Caligrahhy' }}>
            찾아야 한다
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col xs={20} md={16} lg={12}>
          <SearchInput />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col xs={20} md={16} lg={12}>
          <History items={history} />
        </Col>
      </Row>
    </>
  );
}
