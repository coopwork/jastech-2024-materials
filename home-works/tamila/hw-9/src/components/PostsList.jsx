import React, { useEffect, useState } from 'react';
import { Grid, Typography, Alert } from "@mui/material";
import PostCard from "./PostCard.jsx";
import { instance } from "../api/instance.js";
import Loader from "./Loader.jsx";
import './PostsList.css'; // Импортируем файл стилей

const PostsList = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null); // Добавлено состояние для ошибок

	useEffect(() => {
		instance.get('/posts')
			.then((res) => {
				setPosts(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setError('Ошибка при загрузке постов. Попробуйте позже.');
			});
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <Alert severity="error">{error}</Alert>; // Показать ошибку, если она есть
	}

	return (
		<div className="posts-container">
			<Typography variant="h4" className="posts-title" gutterBottom>
				Посты
			</Typography>
			<Grid container spacing={2}>
				{posts?.map(({ id, title, body }) => (
					<Grid key={id} item xs={12} sm={6} md={4} lg={3}>
						<PostCard
							id={id}
							title={title}
							description={body} // Передаем описание поста
							className="card" // Добавляем класс для карточки
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default PostsList;
