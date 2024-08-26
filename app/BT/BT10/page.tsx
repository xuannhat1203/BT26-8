import React from "react";

async function getListPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data;
}
export default async function Page() {
  const posts = await getListPost();
  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id} className="p-4 border-b border-gray-200">
          <p className="font-bold">{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
