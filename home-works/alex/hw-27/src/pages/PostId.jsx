import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {instance} from "../api/instance.js";
import Loader from "../components/Loader.jsx";
import { Flex, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
	textAlign: 'center',
	color: '#000',
	height: 64,
	paddingInline: 48,
	lineHeight: '64px',
	backgroundColor: '#eecccb',
  };
  const contentStyle = {
	
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#eecccb',
  };
 
  const layoutStyle = {
	borderRadius: 8,
	overflow: 'hidden',
	width: '100',
	maxWidth: '100',
  };
  const siderStyle = {
	color: '#000',	
	backgroundColor: '#eecccb',
  };
  const footerStyle = {
	textAlign: 'center',
	color: '#000',
	backgroundColor: '#eecccb',
	
  };

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
		 <Flex gap="middle" wrap>  
          <Layout style={layoutStyle}>
         <Header style={headerStyle}>{post.title}</Header>
      	<Layout>
        <Sider width="35%" style={siderStyle}>
        {post.content}
        </Sider>
        <Content style={contentStyle}><img width={'100%'} src={post.image} alt={post.title}/></Content>
      </Layout>
	  <Footer style={footerStyle}>{post.publishedAt}</Footer>
    </Layout>
   
  </Flex>
		
	);
};

export default PostId;
			