import '../styles/globals.css';
import NextNprogress from 'nextjs-progressbar';

//компонент для использования глобальных стилей

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#778899"
        startPosition={0.3}
        stopDelayMs={200}
        height="2"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
