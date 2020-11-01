import styles from '../styles/Home.module.css';
import Link from 'next/link'; //для полноценного роутинга как в SPA нам необходимо все ссылки пропускать через специальный компонент
import Head from 'next/head'; //компонент для работы с метатегами и заголовками. Так как в next нету страницы index.html, то вся работа ведётся через этот компонент

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="description" content="Free Web tutorials" />
        <title>Next.js App</title>
      </Head>

      <div className={styles.container}>
        <p className={styles.title}>Hello, Next.js</p>
        <Link href={'/about'}>
          <a>See about page</a>
        </Link>
        <Link href="/posts">
          <a>See posts page</a>
        </Link>
        <Link href="/post/25">
          <a>Some post page with id</a>
        </Link>
      </div>
    </>
  );
}
