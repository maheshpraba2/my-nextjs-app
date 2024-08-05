// pages/_app.tsx
// pages/_app.tsx
import '../styles/global.css'; // Correct path if `global.css` is in `app`
import type { AppProps } from 'next/app'; // Import the type for pageProps

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
