import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostCard = ({ id, title, description, imageUrl }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" onClick={handleRedirect}>
          Читать
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
