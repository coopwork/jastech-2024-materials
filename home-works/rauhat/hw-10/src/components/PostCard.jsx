import React from "react";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

const PostCard = ({ id, title, description, imageUrl }) => {
  const navigate = useNavigate();
    const handleRedirect = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <Card
      hoverable
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
      cover={
        <img
          alt={title}
          src={imageUrl || "/placeholder.svg"}
          style={{ height: 200, objectFit: "cover" }}
        />
      }
      actions={[
        <Button key="read" type="primary" onClick={handleRedirect}>
          Читать
        </Button>,
      ]}
    >
      <Card.Meta

        title={title}
        description={description}
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      />
    </Card>
  );
};

export default PostCard;
