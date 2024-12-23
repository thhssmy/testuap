import Head from 'next/head';
import { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

export default function Index() {
  const [browserInfo, setBrowserInfo] = useState('');

  useEffect(() => {
    const parser = new UAParser();
    const result = parser.getBrowser();
    setBrowserInfo(`Tarayıcı: ${result.name} ${result.version}`);
  }, []);

  return (
    <div>
      <Head>
        <title>Basit Next.js Uygulaması</title>
        <meta name="description" content="Next.js ile basit bir web uygulaması" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Merhaba, Next.js!</h1>
        <p>Bu sayfa UA Parser.js kullanarak tarayıcı bilgilerini gösteriyor.</p>
        <p>{browserInfo}</p>
      </main>
    </div>
  );
}