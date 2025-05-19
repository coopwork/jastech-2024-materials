import React, {useEffect, useState} from 'react';
import {Grid, Typography, Container} from "@mui/material";
import PostCard from "./PostCard.jsx";
import {instance} from "../api/instance.js";
import Loader from "./Loader.jsx";
import Pagination from "./Pagination.jsx";
import { alignProperty } from '@mui/material/styles/cssUtils.js';

const PostsList = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		instance.get('/posts')
				.then((res) => {
					setPosts(res.data)
					setIsLoading(false)
				})
	}, []);

	useEffect(() => {
	fetch('https://dummyjson.com/recipes?limit=10')
.then(res => res.json())
.then(console.log);
}, []);

	if (isLoading) {
		return <Loader/>
	}

	return (
		<Container>
			<Grid container	spacing={3}>
				{posts?.map(({id, title, image, content, publishedAt}) => (
						<Grid key={id} item xs={4}>
							<PostCard
									id={id}
									image={image}
									title={title}
									description={content}
									publishedAt={publishedAt}
							/>
						</Grid>
				))}
			</Grid>
			<Pagination/>
			</Container>
	);
};

export default PostsList;