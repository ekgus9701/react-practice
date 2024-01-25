// Posts.js
import React from 'react';

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>게시글 목록</h1>
      <ul>
        {posts&&posts.map(post => (
          <div key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Posts;


