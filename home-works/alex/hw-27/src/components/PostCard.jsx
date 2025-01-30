import React from 'react';
import {useNavigate} from "react-router-dom";
import{ Button}from "antd";
import{ Card }from"antd";
import { Image } from 'antd';

const { Meta } = Card;
const PostCard = ({id, title, image}) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(`/posts/${id}`);
	}

	return (			
			 <Card
			 >
			 <Image   
			 img alt="example" src={image}
             />
			 <Meta title={title} />
			 <Button type="primary" 
					danger ghost
					onClick={handleRedirect}
				    style={{width: '100%', marginTop: 10 }}
					
				    variant='contained'
					>
      Читать
                     </Button>
		   </Card>
		 );
	
};

export default PostCard;