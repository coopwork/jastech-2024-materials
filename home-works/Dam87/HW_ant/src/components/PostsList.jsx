import React, {useEffect, useState} from 'react';
import { Col, Row, Typography } from "antd";
import { Layout } from "antd";
import PostCard from "./PostCard.jsx";
import {instance} from "../api/instance.js";
import Loader from "./Loader.jsx";


const { Header, Content, Footer } = Layout;
const PostsList = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		instance.get(`/posts`, {
           
        })
				.then((res) => {
					setPosts(res.data)
					setIsLoading(false);
				
				})
	}, []);

	if (isLoading) {
		return <Loader/>
	}

	return (
<>

<Layout>
<Content style={{ 
  padding: '2rem 6rem',
  backgroundImage: 'url(/img/bg.png)'
}}>
	
<Row gutter={[16, 16]} justify="space-between">
            {posts?.map(({ id, title, image }) => (
               <Col key={id} span={6}>
                  <PostCard id={id} title={title} image={image} />
               </Col>
            ))}
         </Row>
		 </Content>
		 </Layout>	

</>	
	);
};

export default PostsList;