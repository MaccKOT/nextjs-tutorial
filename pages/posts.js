import { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch('http://localhost:4200/posts');
      const json = await response.json();
      setPosts(json);
      // console.log(json);
    }

    loadPosts();
  }, []);

  return (
    <MainLayout title="Posts Page">
      <h1>Post's page</h1>

      <pre>{JSON.stringify(posts)}</pre>
    </MainLayout>
  );
}

//posts

// /post/id
