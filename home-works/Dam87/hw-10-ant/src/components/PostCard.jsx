import React from "react";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ReadOutlined } from '@ant-design/icons';
const { Meta } = Card;

const PostCard = ({ id, title, image }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <Card
     className="card"
      hoverable
      style={{ 

         
         width: "90%", 
         margin: ".5rem auto" ,
        
      }}
      cover={<img alt="" src={image} />}
    >
      <Meta title={title} />
      <Button  
         icon={<ReadOutlined />}
        color="primary"
        variant="outlined"
        onClick={handleRedirect}
        style={{ width: "100%", marginTop: "1rem" }}
        type="primary"
      >
        Читать полностью
      </Button>
    </Card>
  );
};

export default PostCard;
