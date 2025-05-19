import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../api/instance.js";
import { Typography, Card, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const PostId = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    instance.get(`/posts/${postId}`)
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      });
  }, [postId]);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '80%', margin: '0 auto' }}>
      <Card
        hoverable
        style={{ borderRadius: '8px' }}
        cover={<img alt={post.title} src={post.image} style={{ borderRadius: '8px', objectFit: 'cover', maxHeight: '400px', width: '100%' }} />}
      >
        <Typography.Text type="secondary">{post.publishedAt}</Typography.Text>
        <Typography.Title level={2} style={{ marginTop: '20px' }}>{post.title}</Typography.Title>
        <Typography.Paragraph style={{ marginTop: '20px' }}>
          {post.content}
        </Typography.Paragraph>
      </Card>
    </div>
  );
};

export default PostId;
