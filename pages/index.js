import styles from '../styles/Home.module.css';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Hello, Next.js</h1>
        <div className={styles.flex}></div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quia,
          laudantium perspiciatis quae, rem doloremque necessitatibus obcaecati
          ipsa possimus voluptatibus saepe, quaerat officia recusandae sequi.
          Sed sequi impedit eveniet dolorem.
        </p>
      </div>
    </MainLayout>
  );
}
