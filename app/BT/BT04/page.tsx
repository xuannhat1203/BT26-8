"use client"; 
import { useEffect, useState } from "react";
async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  return data;
}

export default function SSR_CSR_Page() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      const initialPosts = await fetchPosts();
      setPosts(initialPosts);
    };
    loadPosts();
  }, []);
  const refreshPosts = async () => {
    const newPosts = await fetchPosts();
    setPosts(newPosts);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Danh sách Bài viết với Refresh
      </h1>
      <ul className="space-y-4">
        {posts.slice(0, 10).map((post: any) => (
          <li key={post.id} className="p-4 border rounded shadow-sm">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-700">{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
      <button
        onClick={refreshPosts}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Refresh
      </button>
    </div>
  );
}