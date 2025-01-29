import React from 'react';
// import { CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import{ Button}from "antd";
import{ Card }from"antd";
const { Meta } = Card;
const PostCard = ({id, title, image}) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(`/posts/${id}`);
	}

	return (			
			 <Card
			 hoverable
			 style={{ paddingTop: 10, margin: 5}}
			 cover={<img alt="example" src={image} />}
		   >
			 <Meta title={title} />
			 <Button type="primary" 
					danger ghost
					onClick={handleRedirect}
				    style={{width: '100%', marginTop: 10}}
					
				    variant='contained'
					>
      Читать
                     </Button>
		   </Card>
		 );
	
};

export default PostCard;