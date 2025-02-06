import React, {useEffect, useState} from 'react';
import PostCard from "./PostCard.jsx";
import {instance} from "../api/instance.js";
import Loader from "./Loader.jsx";
import { Avatar, Card } from 'antd';
import { Row, Col } from 'antd';
import { Grid } from "antd";
const { Meta } = Card;
import { Flex, Layout } from 'antd';
const {Content } = Layout;



const PostsList = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		instance.get('/posts')
				.then((res) => {
					setPosts(res.data)
					setIsLoading(false)
				})
	}, []);

	useEffect(() => {
	fetch('https://dummyjson.com/recipes?limit=10')
.then(res => res.json())
.then(console.log);
}, []);

	if (isLoading) {
		return  <Loader/>
	}

	return (

		<Layout>
			<Content style={{
				padding:'2rem',
				
			}
			}>
		<Row gutter={[20, 20]} justify={'center'}>
		
		
				{posts?.map(({id, title, image, content, publishedAt}) => (
						<Col span={5}
						>
							<PostCard
							
									id={id}
									image={image}
									title={title}
									description={content}
									publishedAt={publishedAt}/>
						
			</Col>
				))}
			</Row>
			</Content>
			</Layout>
	);
};

export default PostsList;