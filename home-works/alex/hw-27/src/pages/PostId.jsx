import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {instance} from "../api/instance.js";
import {Typography} from "@mui/material";
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
			<div>
				<img width={'100%'} src={post.image} alt={post.title}/>
				<Typography variant='subtitle2'>
					{post.publishedAt}
				</Typography>
				<Typography variant='h4'>
					{post.title}
				</Typography>
				<Typography variant='body1'>
					{post.content}
				</Typography>
			</div>
	);
};

export default PostId;