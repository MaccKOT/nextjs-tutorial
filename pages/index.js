import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Hello, Next.js</p>
      <a href="/about">See about page</a>
      <a href="/posts">See posts page</a>
      <a href="/post/25">Some post page with id</a>
    </div>
  );
}
