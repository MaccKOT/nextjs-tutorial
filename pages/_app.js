import '../styles/globals.css';

//компонент для использования глобальных стилей

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
