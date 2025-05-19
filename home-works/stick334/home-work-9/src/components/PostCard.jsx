import React from 'react';
import {useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const PostCard = ({id, title, description, image}) => {
	const navigate = useNavigate();


	const handleRedirect = () => {
		navigate(`/posts/${id}`);
	}

	return (

		<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=  {image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
		  {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
		  {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"
		onClick={handleRedirect}
						sx={{width: '100%'}}
						variant='contained'
				>
					Читать
          
        </Button>
      </CardActions>
    </Card>
			// <Card>
			// 	<CardContent>
			// 		<Typography variant="h5" component="div">
			// 			{title}
			// 		</Typography>
			// 		<Typography variant="body2">
			// 			{description}
			// 		</Typography>
			// 	</CardContent>
			// 	<CardActions>
			// 		<Button
			// 				onClick={handleRedirect}
			// 				sx={{width: '100%'}}
			// 				variant='contained'
			// 		>
			// 			Читать
			// 		</Button>
			// 	</CardActions>
			// </Card>
	);
};

export default PostCard;



