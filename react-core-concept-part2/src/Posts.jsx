import { use } from 'react';
import Post from './Post';
import './App.css';

export default function Posts({ published }) {
  const posts = use(published);
  // console.log(posts);
  return (
    <div className="universe-border">
      <h2>All Post:{posts.length}</h2>
      {posts.map(post => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
