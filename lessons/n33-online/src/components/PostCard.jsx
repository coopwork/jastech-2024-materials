import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const PostCard = ({id, title, description}) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(`/posts/${id}`);
	}

	return (
			<Card>
				<CardContent>
					<Typography variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2">
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
							onClick={handleRedirect}
							sx={{width: '100%'}}
							variant='contained'
					>
						Читать
					</Button>
				</CardActions>
			</Card>
	);
};

export default PostCard;