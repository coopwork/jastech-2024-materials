import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {instance} from "../api/instance.js";
import {Typography} from "antd";
import Loader from "../components/Loader.jsx";
import { Layout } from "antd";




const {Content  } = Layout;
const { Title, Text} = Typography;


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

	<Layout>
	<Content style={{ 
	  padding: '0 6rem',
	  backgroundImage: 'url(/img/bg.png)'
	}}>
			
				<div className="news__title">

				<Title level={1}>{post.title}</Title>
		
				

				<Text 
		>
			{post.publishedAt}
			</Text>


				</div>

				<div className="news">
<div className="news__img">
				<img width={'100%'} src={post.image} alt={post.title}/>
				
				</div>

		<div className="news__desc">	


		<Text style={{ fontSize: "18px" }}
		>
			{post.content}
			</Text>
			
			

				</div>	

				
			</div >
			</Content>
			</Layout>
				
</div>
			
	);
};

export default PostId;