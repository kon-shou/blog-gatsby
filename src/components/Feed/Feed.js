import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './Feed.module.scss';

const Feed = ({ edge }) => {
  const {
    node: {
      fields: { slug, tagSlugs },
      frontmatter: {
        date,
        tags,
        title,
        description,
        image: {
          children: [{ fluid }],
        },
      },
    },
  } = edge;

  console.log(description);

  return (
    <div className={styles['feed__item']} key={slug}>
      <div className={styles['feed__item-meta']}>
        <time
          className={styles['feed__item-meta-time']}
          dateTime={moment(date).format('YYYY-MM-DD')}
        >
          {moment(date).format('YYYY-MM-DD')}
        </time>
        <span className={styles['feed__item-meta-divider']} />
        {tagSlugs.map((slug, i) => (
          <span key={i}>
            <Link to={slug} className={styles['feed__item-tags-item-link']}>
              {tags[i]}
            </Link>
            <span className={styles['feed__item-meta-divider']} />
          </span>
        ))}
      </div>
      <h2 className={styles['feed__item-title']}>
        <Link className={styles['feed__item-title-link']} to={slug}>
          {title}
        </Link>
      </h2>
      <Link to={slug}>
        <Img className={styles['feed__item-img']} fluid={fluid} />
      </Link>
      <p className={styles['feed__item-description']}>{description}</p>
      <Link className={styles['feed__item-readmore']} to={slug}>
        Read
      </Link>
    </div>
  );
};

export default Feed;
