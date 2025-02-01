import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { instance } from "../api/instance.js";
import Loader from "../components/Loader.jsx";

const PostId = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    instance.get(`/posts/${postId}`).then((res) => {
      setPost(res.data);
      setIsLoading(false);
    });
  }, [postId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={`https://picsum.photos/seed/${post.id}/800/300`}
          alt={post.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {post.publishedAt}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">{post.content}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PostId;
