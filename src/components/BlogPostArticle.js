import React from "react";
import ReactMarkdown from "react-markdown";

const BlogPostArticle = ({ article }) => {
  return (
    <div>
      <article>
        <ReactMarkdown children={article} />
      </article>
    </div>
  );
};

export default BlogPostArticle;
