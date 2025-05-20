import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography, CardMedia} from "@mui/material";
import {useNavigate} from "react-router-dom";

const PostCard = ({id, title, description}) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(`/posts/${id}`);
	}

	return (
		<Box sx={{width: '300px', height: '100%', display: 'flex', flexDirection: 'column'}}>
			<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
				<CardMedia component='img' height='140' 
				image={`https://picsum.photos/300/140?random=${Math.random()}`}
				alt='insplash image' />
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2" color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: 'center', padding: '8px' }}>
					<Button
							onClick={handleRedirect}
							sx={{width: '100%'}}
							variant='contained'
					>
						Learn more
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default PostCard;