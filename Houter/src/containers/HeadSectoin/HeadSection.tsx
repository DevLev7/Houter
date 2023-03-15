import Head from 'next/head';

const HeadSection = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <title>Houter</title>
      <meta name="description" content='' />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta property="og:title" content='Houter' />
      <meta property="og:description" content='' />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="https://neocrypto.net" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NEOCRYPTO" />
      <meta property="og:image" content="/assets/images/social.png" />
      <meta itemProp="name" content='Houter' />
      <meta itemProp="description" content='' />
      <meta itemProp="image" content="/assets/images/social.png" />
      <meta name="theme-color" content="#3772FF" />
    </Head>
  );
};

export default HeadSection;