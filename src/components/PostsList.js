// PostsList.js
import React, { useState, useEffect } from 'react';
import Posts from './Posts';

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    const fetchPosts = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          
          const data = await response.json();
          setPosts(data);
          console.log(data);
        
      };
  
      fetchPosts();
      
      
  }, []);

  

  return (
    <div>
      <Posts posts={posts} />
      
    </div>
  );
}