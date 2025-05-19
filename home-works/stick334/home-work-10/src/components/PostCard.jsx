import React from 'react';
import { Card, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const PostCard = ({ id, title, description }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div style={{ width: '300px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Card
        hoverable
        cover={<img alt="random" src={`https://picsum.photos/300/140?random=${Math.random()}`} style={{ borderRadius: '8px' }} />}
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Card.Meta
          title={<Title level={5}>{title}</Title>}
          description={<Paragraph ellipsis>{description}</Paragraph>}
        />
        <Button type="primary" onClick={handleRedirect} style={{ marginTop: 'auto' }}>
          Learn more
        </Button>
      </Card>
    </div>
  );
};

export default PostCard;
