import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {instance} from "../api/instance.js";
import {Typography} from "@mui/material";
import Loader from "../components/Loader.jsx";
import { Container} from '@mui/system';



const PostId = () => {
	const {postId} = useParams();
	const [post, setPost] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		instance.get(`/posts/${postId}`)
				.then((res) => {
					setPost(res.data)
					setIsLoading(false)
				})
	}, []);

	if (isLoading) {
		return <Loader/>
	}

	return (
<div className="wrapper">
		<Container maxWidth="xl">
			
				<div className="news__title">
			<Typography variant='h4'>
					{post.title}
				</Typography>

				<Typography variant='subtitle2' paddingTop={"1rem"}>
					{post.publishedAt}
				</Typography >
				</div>

				<div className="news">
<div className="news__img">
				<img width={'100%'} src={post.image} alt={post.title}/>
				
				</div>

		<div className="news__desc">	
				<Typography variant='body1'> 
					{post.content}
				</Typography>

				</div>	

				
			</div >
			
			</Container>
		
			</div>
	);
};

export default PostId;