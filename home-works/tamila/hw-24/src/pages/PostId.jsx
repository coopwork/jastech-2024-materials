import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../api/instance.js";
import { Typography, Box, CircularProgress } from "@mui/material";
import Loader from "../components/Loader.jsx";
import './PostId.css'; // Подключаем CSS

const PostId = () => {
	const { postId } = useParams();
	const [post, setPost] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		instance.get(`/posts/${postId}`)
			.then((res) => {
				setPost(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setError("Ошибка при загрузке поста.");
				setIsLoading(false);
			});
	}, [postId]);

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <Typography variant="h6" className="error-message">{error}</Typography>;
	}

	return (
		<div className="post-container">
			<Box sx={{ mb: 2 }}>
				{post.image ? (
					<img className="post-image" src={post.image} alt={post.title} />
				) : (
					<CircularProgress />
				)}
			</Box>

			<Typography variant="subtitle2" className="post-date">
				{new Date(post.publishedAt).toLocaleDateString()}
			</Typography>

			<Typography variant="h4" className="post-title">
				{post.title}
			</Typography>

			<Typography variant="body1" className="post-content">
				{post.content}
			</Typography>
		</div>
	);
};

export default PostId;
