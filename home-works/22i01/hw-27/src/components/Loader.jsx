import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const Loader = () => {
	return (
			<div style={
				{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh'
				}
			}>
				
				<Spin
				style={
					{
						color: 'black',
						width: '50%'
					}
				}
				indicator={<LoadingOutlined spin />} size="large"/>
				<h2>Loading...</h2>
			</div>
	);
};

export default Loader;