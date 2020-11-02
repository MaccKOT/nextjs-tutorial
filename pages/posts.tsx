// import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MyPost } from '../interfaces/post';
import MainLayout from '../layouts/MainLayout';

interface PostsPageProps {
  posts: MyPost[];
}

//функция выполняется на бэкенде!
//console.log выведет данные в серверную консоль
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:4200/posts');
  const posts: MyPost[] = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }: PostsPageProps) {
  //этот подход работает, но плох для СЕО, потому что изначально страница будет с пустым массивом, а данные обновятся только после прихода их с сервера
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function loadPosts() {
  //     const response = await fetch('http://localhost:4200/posts');
  //     const json = await response.json();
  //     setPosts(json);
  //     // console.log(json);
  //   }

  //   loadPosts();
  // }, []);

  return (
    <MainLayout title="Posts Page">
      <h1>Post's page</h1>

      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}
