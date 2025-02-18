import React from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin,} from 'antd';



const Loader = () => {
	return (
		<div className="cont">
		<Flex align="center" gap="middle"
		danger ghost
		style={{
					display: 'flex', 
					flexDirection: 'column',
					 alignItems: 'center', 
					 justifyContent: 'center',  
					 height: '80vh',
					 marginRight: 10,
					}}>
		
			<Spin
			
		  indicator={
			<LoadingOutlined
			  style={{
				fontSize: 48,
			  }}
			  spin
			  
			/>
			
		  }
		/>
	  </Flex>
	
		<div>Loading...</div>
  </div>
	);
  };

export default Loader;