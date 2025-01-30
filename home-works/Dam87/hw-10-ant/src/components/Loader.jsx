import React from 'react';
import {Typography} from "antd";
import { Spin } from 'antd';

const { Title, Text} = Typography;

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
				  <Spin size="large" />

				<Text style={{ fontSize: "18px" }}
		>
		Загрузка...
			</Text>
			
				
			</div>
	);
};

export default Loader;