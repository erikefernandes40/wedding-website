import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import Loader from './loader';


export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    // Simular um carregamento demorado (por exemplo, usando setTimeout)
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Defina o tempo que achar apropriado
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}
