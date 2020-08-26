import React from "react";

import PostListItem from "../post-list-item";

import "./post-list.css";

const PostList = ({ posts }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <div key={id} className="post-list-item">
        <PostListItem {...itemProps} />
      </div>
    );
  });

  return <ul className="post-list">{elements}</ul>;
};

export default PostList;
