import React from "react";
import ReactMarkdown from "react-markdown";

const BlogPostArticle = ({ article }) => {
  return (
    <div className="article">
      <ReactMarkdown children={article} />
    </div>
  );
};

export default BlogPostArticle;
