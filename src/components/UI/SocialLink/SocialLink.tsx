import React from 'react'
import {
  FaDownload,
  FaFacebookF,
  FaGithubAlt,
  FaHireAHelper,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./socialLink.module.css";
import Link from 'next/link';

const SocialLink = () => {
  return (
    <div className="grid grid-cols-2 md:grid-rows-none text-center md:flex gap-3 justify-center items-center mt-5">
      <div className={styles.slideCard}>
        <Link href="https://www.facebook.com/MajharolTanvir" target="_blank">
          <div className={styles.cardContent}>
            <div className={styles.icon}>
              <FaFacebookF className="text-3xl" />
            </div>
            <div className={`${styles.title} ${styles.hidden}`}>Facebook</div>
          </div>
        </Link>
      </div>
      <div className={styles.slideCard}>
        <Link
          href="https://www.linkedin.com/in/majharoltanvir/"
          target="_blank"
        >
          <div className={styles.cardContent}>
            <div className={styles.icon}>
              <FaLinkedinIn className="text-3xl" />
            </div>
            <div className={`${styles.title} ${styles.hidden}`}>Linkedin</div>
          </div>
        </Link>
      </div>
      <div className={styles.slideCard}>
        <Link href="https://github.com/MajharolTanvir" target="_blank">
          <div className={styles.cardContent}>
            <div className={styles.icon}>
              <FaGithubAlt className="text-3xl" />
            </div>
            <div className={`${styles.title} ${styles.hidden}`}>Github</div>
          </div>
        </Link>
      </div>
      {/* <div className={styles.slideCard}>
        <Link href="" target="_blank">
          <div className={styles.cardContent}>
            <div className={styles.icon}>
              <FaHireAHelper className="text-3xl" />
            </div>
            <div className={`${styles.title} ${styles.hidden}`}>Hire me</div>
          </div>
        </Link>
      </div> */}
      <div className={styles.slideCard}>
        <Link
          href="https://drive.google.com/file/d/1GwlLDo7ZVEawKGtOu5CKuowLAXVYeb_x/view?usp=sharing"
          target="_blank"
        >
          <div className={styles.cardContent}>
            <div className={styles.icon}>
              <FaDownload className="text-3xl" />
            </div>
            <div className={`${styles.title} ${styles.hidden}`}>My Resume</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SocialLink