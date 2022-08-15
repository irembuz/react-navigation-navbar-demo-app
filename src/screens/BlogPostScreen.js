import React from "react";
import BlogPostArticle from "../components/BlogPostArticle";
import BlogPostAside from "../components/BlogPostAside";
import { article } from "../data/DummyData";

const BlogPostScreen = () => {
  return (
    <div>
      <BlogPostAside />
      <BlogPostArticle article={article} />
    </div>
  );
};

export default BlogPostScreen;
