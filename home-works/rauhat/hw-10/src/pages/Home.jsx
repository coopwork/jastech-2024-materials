import { useEffect, useState } from "react";
import { Row, Col, Pagination, Spin } from "antd";
import PostCard from "../components/PostCard";
import { instance } from "../api/instance";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    instance
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spin size="large" />;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Row gutter={[24, 24]}>
        {currentPosts.map((post) => (
          <Col xs={24} sm={12} md={8} key={post.id}>
            <PostCard
              id={post.id}
              title={post.title}
              description={post.body} // Make sure we're passing post.body here
              imageUrl={`https://picsum.photos/seed/${post.id}/300/200`}
            />
          </Col>
        ))}
      </Row>
      <Row justify="center" style={{ marginTop: 24 }}>
        <Pagination
          current={currentPage}
          total={posts.length}
          pageSize={postsPerPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </Row>
    </>
  );
};

export default Home;
