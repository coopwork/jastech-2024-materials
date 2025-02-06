import React from 'react';
import {useNavigate} from "react-router-dom";
import { Card } from 'antd';
const { Title, Text } = Typography;
import { Typography } from "antd";
import { Button, Flex } from 'antd';

const PostCard = ({id, title, description, image, content, publishedAt}) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(`/posts/${id}`);
	}
	

	return (
		
		<Card
    style={{
        display: 'flex',
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-between'
      
    }}
    cover={
      <img
        alt={title}
        src={image}
      />
    }
	
     >

     <Text type="secondary">{publishedAt}</Text>
    <Title level={5} style={{
      marginTop: 0
    }}>
      {title}</Title>
  
    <Text ellipsis={2}> {description} </Text>
    <Button block onClick={handleRedirect} style={{
      marginTop: '1rem'
    }}>
      Read more
    </Button>     
  </Card>
	
	);
};

export default PostCard;