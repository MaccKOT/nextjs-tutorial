// import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { MyPost } from '../../interfaces/post';
import MainLayout from '../../layouts/MainLayout';

interface PostPageProps {
  post: MyPost;
}

//страница c динамическими параметрами поста в блоге

export default function Post({ post }: PostPageProps) {
  return (
    <MainLayout>
      <h1>
        Post №{post.id}: {post.title}
      </h1>
      <hr />
      <p>{post.body}</p>
      <Link href={'/posts'}>
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:4200/posts/${params.id}`);
  const post: MyPost = await res.json();

  return {
    props: {
      post,
    },
  };
}

//необходимо для предварительной генерации страниц на сервере, обычно небольшое количество данных
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false,
  };
}

//метод не рекомендуется в документации
// Post.getInitialProps = async (ctx) => {
//   const res = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
//   const post = await res.json();

//   return { post };
// };
