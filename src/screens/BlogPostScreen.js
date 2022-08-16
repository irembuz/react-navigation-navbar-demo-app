import React from "react";
import BlogPostArticle from "../components/BlogPostArticle";
import BlogPostAside from "../components/BlogPostAside";
import { Container, Row, Col } from "react-bootstrap";
import { article } from "../data/DummyData";

const BlogPostScreen = () => {
  return (
    <div>
      <Container>
        <Row className="blog-post-screen-row">
          <Col xs="3" className="blog-post-aside">
            <BlogPostAside article={article} />
            </Col>
          <Col xs="9" className="blog-post-article">
            <BlogPostArticle article={article} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogPostScreen;
