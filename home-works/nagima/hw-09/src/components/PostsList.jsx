import React, {useEffect, useState} from 'react';
import {Grid, Pagination, Box} from "@mui/material";
import PostCard from "./PostCard.jsx";
import {instance} from "../api/instance.js";
import Loader from "./Loader.jsx";

const PostsList = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(6);

	useEffect(() => {
		instance.get('/posts')
				.then((res) => {
					setPosts(res.data)
					setIsLoading(false)
				})
	}, []);
	
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
	const handlePageChange = (event, value) => {
	  setCurrentPage(value);
	};

	if (isLoading) {
		return <Loader/>
	}

	return (
		<Box sx={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
			<Grid container spacing={2} justifyContent='center'>
				{currentPosts?.map(({id, title}) => (
						<Grid key={id} item xs={4}>
							<PostCard
									id={id}
									title={title}
									description={''}
							/>
						</Grid>
				))}
			</Grid>
			<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
			<Pagination count={Math.ceil(posts.length / postsPerPage)} page={currentPage}
				onChange={handlePageChange}
				color='primary'/>
			</Box>
		</Box>
	);
};

export default PostsList;