import Router from 'next/router';
import MainLayout from '../../layouts/MainLayout';

export default function About() {
  const linkClickHandler = () => {
    Router.push('/'); // https://nextjs.org/docs/api-reference/next/router#userouter
  };

  return (
    <MainLayout title="About app">
      <h1>About page</h1>

      <button onClick={linkClickHandler}>Back to home page</button>
      <button
        onClick={() => {
          Router.push('/posts');
        }}
      >
        Go to posts page
      </button>
    </MainLayout>
  );
}
