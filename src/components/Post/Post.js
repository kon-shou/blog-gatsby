import React from 'react';
import { Link } from 'gatsby';
import {
  FacebookShareButton,
  TwitterShareButton,
  PocketShareButton,
  FacebookIcon,
  TwitterIcon,
  PocketIcon,
} from 'react-share';

import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';

const Post = ({ post, postUrl }) => {
  const {
    tags,
    title,
    date,
    image: {
      children: [{ fluid }],
    },
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        ブログ記事一覧
      </Link>

      <div className={styles['post__sns-buttons']}>
        <div className={styles['post__sns-button-item']}>
          <FacebookShareButton url={postUrl}>
            <FacebookIcon size={48} round />
          </FacebookShareButton>
        </div>

        <div className={styles['post__sns-button-item']}>
          <TwitterShareButton title={title} url={postUrl}>
            <TwitterIcon size={48} round />
          </TwitterShareButton>
        </div>

        <div className={styles['post__sns-button-item']}>
          <PocketShareButton title={title} url={postUrl}>
            <PocketIcon size={48} round />
          </PocketShareButton>
        </div>

        <div className={styles['post__sns-button-item']}>
          <a
            href="https://b.hatena.ne.jp/entry/"
            className="hatena-bookmark-button"
            data-hatena-bookmark-layout="touch-counter"
            data-hatena-bookmark-width="50"
            data-hatena-bookmark-height="50"
            title="このエントリーをはてなブックマークに追加"
          >
            <img
              src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
              alt="このエントリーをはてなブックマークに追加"
              width="20"
              height="20"
              style={{ border: 'none' }}
            />
          </a>
        </div>
      </div>

      <div className={styles['post__content']}>
        <Content body={html} title={title} fluid={fluid} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={post.fields.slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
