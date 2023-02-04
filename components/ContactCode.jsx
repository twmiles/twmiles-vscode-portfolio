import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'twmiles.co',
    href: 'https://twmiles.co',
  },
  {
    social: 'email',
    link: 'tracywmiles@gmail.com',
    href: 'mailto:tracywmiles@gmail.com',
  },
  {
    social: 'github',
    link: 'twmiles',
    href: 'https://github.com/twmiles',
  },
  {
    social: 'linkedin',
    link: 'twmiles',
    href: 'https://www.linkedin.com/in/twmiles/',
  },
  {
    social: 'twitter',
    link: 'TracyMiles12',
    href: 'https://www.twitter.com/TracyMiles12',
  },
  {
    social: 'instagram',
    link: 't.miles',
    href: 'https://www.instagram.com/t.miles',
  },
  {
    social: 'polywork',
    link: 'twmiles',
    href: 'https://www.polywork.com/twmiles',
  },
  {
    social: 'telegram',
    link: 'tracywmiles',
    href: 'https://t.me/tracywmiles',
  },
  {
    social: 'codepen',
    link: 'twmiles',
    href: 'https://codepen.io/twmiles',
  },
  {
    social: 'codesandbox',
    link: 'twmiles',
    href: 'https://codesandbox.io/u/twmiles',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
