import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Dev Sphere. All rights reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="facebook logo"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="instagram logo"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="twitter logo"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt="youtube logo"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
