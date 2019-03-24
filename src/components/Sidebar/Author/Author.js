import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './Author.module.scss';

const Author = ({ title, subtitle, isIndex, fixed }) => (
  <div className={styles['author']}>
    <Link to="/">
      <Img className={styles['author__photo']} fixed={fixed} />
    </Link>

    {isIndex ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">
          {title}
        </Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">
          {title}
        </Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>{subtitle}</p>
  </div>
);

export default Author;
