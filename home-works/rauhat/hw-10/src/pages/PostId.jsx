import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Typography, Spin } from "antd";
import { instance } from "../api/instance";

const { Title, Paragraph } = Typography;

const PostId = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    instance.get(`/posts/${postId}`).then((res) => {
      console.log("Данные поста:", res.data); // Проверяем, какие данные приходят
      setPost(res.data);
      setIsLoading(false);
    });
  }, [postId]);


  if (isLoading) {
    return <Spin size="large" />;
  }

  if (!post) {
    return <Title level={3}>Пост не найден</Title>;
  }

  return (
    <Card
      cover={
        <img
          alt={post.title}
          src={`https://picsum.photos/seed/${post.id}/800/300`}
          style={{ maxHeight: 300, objectFit: "cover" }}
        />
      }
    >
      <Title level={2}>{post.title}</Title>
      <Paragraph>{post.content}</Paragraph>
    </Card>
  );
};

export default PostId;
