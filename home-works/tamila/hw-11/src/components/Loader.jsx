import React from 'react';
import { Spin, Typography, Space } from 'antd';

const Loader = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Space direction="vertical" size="middle">
        <Spin size="large" />
        <Typography.Title level={4}>Loading...</Typography.Title>
      </Space>
    </div>
  );
};

export default Loader;
