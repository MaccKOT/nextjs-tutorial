import Router from 'next/router';
import MainLayout from '../../layouts/MainLayout';

export default function About() {
  const linkClickHandler = () => {
    Router.push('/'); // https://nextjs.org/docs/api-reference/next/router#userouter
  };

  return (
    <MainLayout title="About app">
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        perferendis labore nostrum illum expedita pariatur rem fuga excepturi
        nemo, explicabo aperiam autem optio. Vel, necessitatibus voluptate
        aliquid ut illum odio?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        expedita nisi repudiandae praesentium molestiae nulla aperiam velit
        accusamus veniam iste. Quis rem assumenda laudantium sed? Velit aliquid
        ad quo voluptates.
      </p>
      <button onClick={linkClickHandler}>Back to home page</button>
      {'🔹'}
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
