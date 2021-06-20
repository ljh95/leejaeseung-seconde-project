import React from 'react';
import { Col, Row, PageHeader } from 'antd';
import { useHistory } from 'react-router';

export default function Search() {
  const history = useHistory();

  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={14}>
        <PageHeader onBack={history.goBack} title="사용자 정보">
          사용자 정보
        </PageHeader>
      </Col>
    </Row>
  );
}
