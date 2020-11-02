import Link from 'next/link';
import styles from '../styles/error404.module.scss';

export default function ErrorPage() {
  return (
    <div className="container">
      <h1 className={styles.error}>Error 404. Page not found🤔</h1>
      <p>
        Please return to{' '}
        <Link href="/">
          <a className={styles.link}>main page</a>
        </Link>
      </p>
    </div>
  );
}
