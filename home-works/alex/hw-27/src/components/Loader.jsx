import React from 'react';
import {Box, CircularProgress, Typography} from "@mui/material";
import{ Button,Flex }from"antd";
import { PoweroffOutlined} from '@ant-design/icons';



const Loader = () => {
	return (
			
		<Flex 
		style={{
			display: 'flex', 
			flexDirection: 'column',
			 alignItems: 'center', 
			 justifyContent: 'center',  
			 height: '80vh'
			}}
		gap="small" vertical>
		<Flex gap="small" align="center" wrap>
		  
		  
		  <Button 
		  
		  
		  type="primary" icon={<PoweroffOutlined />} loading />
		  Loading...
		  
		</Flex>
	  </Flex>
	);
  };


export default Loader;