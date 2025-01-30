import React, {useEffect, useState} from 'react';
import PostCard from "./PostCard.jsx";
import {instance} from "../api/instance.js";
import Loader from "./Loader.jsx";
import { Col, Row } from 'antd';

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
<Row 
>
		{posts?.map(({id, title,image}) => (
    	<Col 
		style={{width: '100%', marginTop: 10, marginLeft: 25, marginRight: 10
			
		}}
		
		 key={id}
		 xs={{
			span: 5,
			offset: 1,
		  }}
		  lg={{
			span: 7,
			offset: 2,
		  }}
    	>
      <PostCard
									id={id}
									title={title}
									description={''}
									image={image}

/>

   	 </Col>
   
))}
  </Row>






	);
};

export default PostsList;
			