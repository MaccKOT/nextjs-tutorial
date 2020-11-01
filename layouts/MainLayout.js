import Link from 'next/link'; //для полноценного роутинга как в SPA нам необходимо все ссылки пропускать через специальный компонент

import Head from 'next/head'; //компонент для работы с метатегами и заголовками. Так как в next нету страницы index.html, то вся работа ведётся через этот компонент

function MainLayout({ children, title = 'Next.js App' }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="description" content="Free Web tutorials" />
        <title>{title} | Next.js course</title>
      </Head>

      <nav>
        <Link href={'/'}>
          <a>Main</a>
        </Link>
        <Link href={'/about'}>
          <a>About page</a>
        </Link>
        <Link href="/posts">
          <a>Posts page</a>
        </Link>
        <Link href="/post/25">
          <a>Post page with id</a>
        </Link>
      </nav>

      <main>{children}</main>

      {/* styles inside component */}
      <style jsx global>
        {`
          nav {
            position: fixed;
            left: 0;
            top: 0;
            min-height: 2rem;
            width: 100%;
            background-color: #c4c4c434;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          nav a {
            padding: 1rem;
          }

          main {
            margin-top: 3rem;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
}

export default MainLayout;
