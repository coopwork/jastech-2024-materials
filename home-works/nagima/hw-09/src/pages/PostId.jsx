import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {instance} from "../api/instance.js";
import {Typography, Box, Paper} from "@mui/material";
import Loader from "../components/Loader.jsx";

const PostId = () => {
	const {postId} = useParams();
	const [post, setPost] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		instance.get(`/posts/${postId}`)
				.then((res) => {
					setPost(res.data)
					setIsLoading(false)
				})
	}, []);

	if (isLoading) {
		return <Loader/>
	}

	return (
			<Box sx={{ padding: 2, maxWidth: '80%', margin: '0 auto' }}>
				<Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
					<img width={'100%'} src={post.image} alt={post.title}
						style={{
						borderRadius: "8px",
						objectFit: "cover",
						maxHeight: "400px",
						height: "auto",
						marginBottom: '16px'}}/>
					<Box sx={{ marginTop: 2 }}>
						<Typography variant='subtitle2' color="textSecondary">
							{post.publishedAt}
						</Typography>
						<Typography variant='h4' sx={{ marginTop: 2, fontWeight: "bold" }}>
							{post.title}
						</Typography>
						<Typography variant='body1' sx={{ marginTop: 2 }}>
							{post.content}
						</Typography>
					</Box>
				</Paper>
			</Box>
	);
};

export default PostId;