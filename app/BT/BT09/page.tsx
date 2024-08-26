import React from "react";
async function getAllPost() {
  const res1 = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res2 = await fetch("https://jsonplaceholder.typicode.com/users");
  const [posts, users] = await Promise.all([res1.json(), res2.json()]);
  return { posts, users };
}
export default async function page() {
  const listItem = await getAllPost();
  return (
    <div className="p-6">
      <div className="flex space-x-6">
        <div className="flex-1 bg-gray-50 p-4 rounded-md shadow-md">
          <h4 className="text-xl font-semibold mb-4">Danh sách người dùng</h4>
          <ul className="list-disc pl-5 space-y-3">
            {listItem.users.map((user: any) => (
              <li key={user.id} className="bg-gray-100 p-3 rounded-md">
                <div className="font-bold">{user.username}</div>
                <div>{user.email}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 bg-gray-50 p-4 rounded-md shadow-md">
          <h4 className="text-xl font-semibold mb-4">Danh sách bài viết</h4>
          <ul className="list-disc pl-5 space-y-3">
            {listItem.posts.map((post: any) => (
              <li key={post.id} className="bg-gray-100 p-3 rounded-md">
                <div className="font-bold">{post.title}</div>
                <div>{post.body}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
