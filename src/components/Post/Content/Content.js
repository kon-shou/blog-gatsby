import React from 'react';
import Img from 'gatsby-image';
import styles from './Content.module.scss';

const Content = ({ body, title, fluid }) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <Img className={styles['content__hero']} fluid={fluid}/>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
