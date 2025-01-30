import Image from 'next/image';
import styles from '../../styles/Home/Section2.module.css';

export default function Section2() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundGradient}></div>
      <div className={styles.imageContainer}>
        <Image
          src="/earth_Background Removal.png"
          alt="Earth"
          width={500}
          height={800}
          className={styles.earthImage}
          priority
        />
      </div>
    </div>
  );
}