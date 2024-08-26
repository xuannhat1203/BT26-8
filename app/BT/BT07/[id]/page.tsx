import React from 'react'
async function fetchPosts(id:any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = res.json();
    return data;
}
export default async function page(params:{params:{id:string}}) {
    const idPost = await fetchPosts(params.params.id);
  return (
    <div>
      <h3>{idPost.title}</h3>
      <p>{idPost.body}</p>
    </div>
  )
}
