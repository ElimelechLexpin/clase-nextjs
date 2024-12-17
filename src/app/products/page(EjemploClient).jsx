"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };
    fetchData();
  },[])
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {posts && posts.map((post) => (
          <li key={post.id}>{post.id} - {post.title}</li>
        ))}
      </ul>
    </div>
  );
}