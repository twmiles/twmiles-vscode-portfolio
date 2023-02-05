import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>APPS</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Tracy Miles</h1>
            <h6 className={styles.bio}>IT Resiliency Analyst @ Societe Generale /</h6>
            <h6 className={styles.bio1}>Passionate Front-end JS Developer</h6>
            <div className={styles.buttonsContainer}>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
            </div>
          </div>
          <div className={styles.illustration}>
            <Image src="/twmiles.png" alt="A picture of me" height={400} width={390} />
        </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
