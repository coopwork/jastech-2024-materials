import React, {useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import PostCard from "./PostCard.jsx";
import {instance} from "../api/instance.js";
import Loader from "./Loader.jsx";
import { Container} from '@mui/system';
import { Pagination } from '@mui/material';

const PostsList = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [pagesCount, setPagesCount] = useState(0);
	const [page, setPage] = useState(1);
	const postsPerPage = 10;


	const handleChange = (event, newPage) => {
		setPage(newPage);
	  };
	
	//   const  = (event) => {
	// 	setRowsPerPage(parseInt(event.target.value, 10));
	// 	setPage(0);
	//   };

	useEffect(() => {
		instance.get(`/posts`, {
            params: { page, limit: postsPerPage }, 
        })
				.then((res) => {
					setPosts(res.data)
					setIsLoading(false);
					setPagesCount(Math.ceil (res.data.length/10));
					console.log(res.data);
					
					 
				})
	}, [page]);

	if (isLoading) {
		return <Loader/>
	}

	return (
		<Container maxWidth="xl" 
				   sx={{
					margin: '0 auto',
					background: 'url(/img/bg.png)',
					zIndex:"0"
				   }}
					>
			<Grid sx={{
				
				
			}} container spacing={3}>
				{posts?.map(({id, title, image }) => (
						<Grid key={id} item md={4}>
							<PostCard 
									id={id}
									title={title}
									description={''}
									image={image}	
							/>
						</Grid>
				))}
			</Grid>
			<Typography>Page: {page}</Typography>
			<Pagination  count={pagesCount} page={page} onChange={handleChange}  
			sx={{
				margin:"2rem",
				justifySelf:"center"

			}}/>

			</Container>
	);
};

export default PostsList;