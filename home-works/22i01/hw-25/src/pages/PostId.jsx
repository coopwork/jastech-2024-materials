import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {instance} from "../api/instance.js";
import {Container, Typography} from "@mui/material";
import Loader from "../components/Loader.jsx";
import Divider from '@mui/material/Divider';

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
			<Container>
				<img width={'100%'} src={post.image} alt={post.title}/>
				<Typography variant='subtitle2'>
					{post.publishedAt}
				</Typography>
				<Divider marginBottom={10}/>
				<Typography variant='h4' marginBottom={5} marginTop={5}>
					{post.title}
				</Typography>
				<Typography variant='body1' marginBottom={10}>
					{post.content}
				</Typography>
			</Container>
	);
};

export default PostId;