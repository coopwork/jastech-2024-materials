import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './PostCard.css'; // Импортируем файл стилей

const PostCard = ({ id, title, description }) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(`/posts/${id}`);
	};

	return (
		<Card className="card">
			<CardContent className="card-content">
				<Typography className="card-title" variant="h5" component="div">
					{title}
				</Typography>
				<Typography className="card-description" variant="body2">
					{description}
				</Typography>
			</CardContent>
			<CardActions className="card-actions">
				<Button
					onClick={handleRedirect}
					className="card-button"
					variant="contained"
				>
					Читать
				</Button>
			</CardActions>
		</Card>
	);
};

export default PostCard;
