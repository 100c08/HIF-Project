import Image from 'next/image';
import styles from '../../styles/Home/Section2.module.css';

export default function Section2({ isActive }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundGradient}></div>
      <div className={`${styles.imageContainer} ${isActive ? styles.animate : ''}`}>
        <div className={styles.imageWrapper}>
          <Image
            src="/Section2.svg"
            alt="Section 2 Image"
            fill
            className={styles.sectionImage}
            priority
          />
        </div>
      </div>
    </div>
  );
}