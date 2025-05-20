import React, { useEffect, useState } from 'react';
import { Row, Col, Pagination, Space } from 'antd';
import PostCard from './PostCard.jsx';
import { instance } from '../api/instance.js';
import Loader from './Loader.jsx';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    instance.get('/posts')
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Row gutter={[16, 16]} justify="center">
        {currentPosts?.map(({ id, title }) => (
          <Col key={id} xs={24} sm={12} md={8}>
            <PostCard
              id={id}
              title={title}
              description={''}
            />
          </Col>
        ))}
      </Row>
      <Space style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination
          current={currentPage}
          pageSize={postsPerPage}
          total={posts.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </Space>
    </div>
  );
};

export default PostsList;
