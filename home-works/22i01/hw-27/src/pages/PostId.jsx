import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {instance} from "../api/instance.js";
import Loader from "../components/Loader.jsx";
import { Flex, Layout } from 'antd';
import { Space, Typography } from 'antd';
const { Title } = Typography;
const { Text, Link } = Typography;
const {Content } = Layout;


const PostId = () => {
	const {postId} = useParams();
	const [post, setPost] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		instance.get(`/posts/${postId}?_limit=10`)
				.then((res) => {
					setPost(res.data)
					setIsLoading(false)
				})
	}, []);

	if (isLoading) {
		return <Loader/>
	}

	return (
			<Flex gap="middle" align="start" vertical style={{
				width:'80%',
				margin: '0 auto'
			}}>
				
				<img width={'50%'} src={post.image} alt={post.title} style={{
					justifySelf:'center'
				}}/>
				<Text type="secondary">
					{post.publishedAt}
				</Text>
				
				 <Title level={2}>
					{post.title}
				</Title>
				<Text>
					{post.content}
				</Text>
				
			</Flex>
	);
};

export default PostId;