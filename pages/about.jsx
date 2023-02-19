import useTranslation from 'next-translate/useTranslation';
const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <>
      <h3>{t('title')}</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
