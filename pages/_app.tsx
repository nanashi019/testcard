import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>승진, 미영 결혼해요</title>
        <meta
          name="description"
          content="3월 18일 토요일 오후 3시, 부천역 채림웨딩홀"
        />
        {/* open graph */}
        <meta property="og:title" content="승진, 미영 결혼해요" />
        <meta
          property="og:description"
          content="3월 18일 토요일 오후 3시, 부천역 채림웨딩홀"
        />
        <meta property="og:image" content="./meta.png" />
        <meta
          property="og:url"
          content="https://testcard-eight.vercel.app/"
        />
        {/* twitter open graph */}
        <meta name="twitter:title" content="승진, 미영 결혼해요" />
        <meta name="twitter:image" content="./meta.png" />
        <meta
          name="twitter:url"
          content="https://testcard-eight.vercel.app/"
        />
        <link rel="icon" href="./favicon.ico" />
        <script
          className="daum_roughmap_loader_script"
          src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
        ></script>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
