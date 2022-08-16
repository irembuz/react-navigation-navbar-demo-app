import React from "react";
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

const BlogPostAside = ({article}) => {
  return <div className="navigation">
    <MarkdownNavbar source={article} />
  </div>;
};

export default BlogPostAside;
