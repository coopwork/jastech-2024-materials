import React from 'react';
import {Button, Card, CardActions, CardContent, CardActionArea, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const PostCard = ({id, title, description, image, content, publishedAt}) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(`/posts/${id}`);
	}

	return (
		
	<Card sx={{ maxWidth: 370,
		border: "solid 1.2px gray",
		boxShadow: "8px 8px 25px 5px rgba(34, 60, 80, 0.2)"
		
	}}>
      <CardActionArea onClick={handleRedirect}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
		<Typography 
		sx={{paddingLeft:2, paddingTop:1, color: "gray"}}
		variant='subtitle2'>{publishedAt}
		</Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
		  sx={{
			display: '-webkit-box',
			WebkitBoxOrient: 'vertical',
			overflow: 'hidden',
			WebkitLineClamp: 2,
		  }}>
		  {title}
          </Typography>
		 <Typography textAlign="justify"  variant="body2"
		 sx={{
			display: '-webkit-box',
			WebkitBoxOrient: 'vertical',
			overflow: 'hidden',
			WebkitLineClamp: 5,
		  }}
		 >
		  {description}
          </Typography>
		 </CardContent>
      </CardActionArea>

      <CardActions>

        {/* <Button variant='contained' endIcon={<ArrowForwardIcon />}
		onClick={handleRedirect} 
		size="big" color="inherit">
          Read More
        </Button> */}

      </CardActions>

	</Card>

			
	
	);
};

export default PostCard;