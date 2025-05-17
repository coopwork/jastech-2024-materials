import React, {useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import PostCard from "./PostCard.jsx";
import {instance} from "../api/instance.js";
import Loader from "./Loader.jsx";

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

	if (isLoading) {
		return <Loader/>
	}

	return (
			<Grid container spacing={2}>
				{posts?.map(({id, title, image}) => (
						<Grid key={id} item xs={4}>
							<PostCard 
									id={id}
									title={title}
									description={''}
									image={image}
							/>
						</Grid>
				))}
			</Grid>
	);
};

export default PostsList;