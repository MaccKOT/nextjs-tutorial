import Router from 'next/router';

export default function About() {
  const linkClickHandler = () => {
    Router.push('/'); // https://nextjs.org/docs/api-reference/next/router#userouter
  };

  return (
    <>
      <h1>About page</h1>

      <button onClick={linkClickHandler}>Back to home page</button>
      <button
        onClick={() => {
          Router.push('/posts');
        }}
      >
        Go to posts page
      </button>
    </>
  );
}
