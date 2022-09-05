import '../styles/tailwind.css';
import '../styles/App.css';
import 'animate.css';
import { Toaster } from 'react-hot-toast';
import PlausibleProvider from 'next-plausible';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Iframe - Screenshots into assets</title>
        <meta
          name="description"
          content="Turn your products screenshot into good looking images"
        />
        <meta name="keywords" content="Screenshots, Digital Assets, Canva" />
        <meta name="author" content="Patrick Lenert" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PlausibleProvider
        domain="iframe.so"
        selfHosted="true"
        customDomain="https://pagestats.win"
      >
        <Toaster position="bottom-right" reverseOrder={false} />
        <Component {...pageProps} />
      </PlausibleProvider>
    </>
  );
}

export default MyApp;
