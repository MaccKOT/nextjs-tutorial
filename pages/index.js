import styles from '../styles/Home.module.css';
import Link from 'next/link'; //для полноценного роутинга как в SPA нам необходимо все ссылки пропускать через специальный компонент

export default function Home() {
  return (
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
  );
}
