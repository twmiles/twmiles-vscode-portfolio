import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Tracy Miles is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="tracy miles, tracy, miles, web developer portfolio, tracy web developer, tracy developer, mern stack, tracy miles portfolio, vscode-portfolio, twmiles-vscode-portfolio, indiana university, tracy miles indiana, tracy miles new york, tracy miles new jersey"
      />
      <meta property="og:title" content="Tracy Miles' Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://twmiles-vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Tracy Miles',
};
