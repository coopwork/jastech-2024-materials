import React, { useEffect, useState } from "react";
import { Container, Grid, Pagination, Box } from "@mui/material";
import PostCard from "./PostCard.jsx";
import { instance } from "../api/instance.js";
import Loader from "./Loader.jsx";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    instance.get("/posts").then((res) => {
      setPosts(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {currentPosts.map(({ id, title }) => (
          <Grid item key={id} xs={12} sm={6} md={4}>
            <PostCard
              id={id}
              title={title}
              description={""}
              imageUrl={`https://picsum.photos/seed/${id}/300/200`}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={Math.ceil(posts.length / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default PostsList;
