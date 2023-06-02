import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.textContainer}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            veritatis esse fuga vero ratione. Necessitatibus ab aut, quisquam
            voluptatum, odit incidunt vel assumenda cupiditate, blanditiis
            explicabo impedit. Impedit, sit voluptas cupiditate ipsam voluptatum
            inventore cum quas, enim pariatur dolorum accusantium magni vitae.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            tempore maiores adipisci autem error optio ipsum neque magnam dicta
            facere Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.text}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at
            culpa, incidunt saepe quas delectus atque. Temporibus, sed
            necessitatibus tenetur quia ad nobis atque? Nam hic velit rem fugiat
            quidem
            <br />
            <br /> -Dynamic Website
            <br />
            <br />- Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
