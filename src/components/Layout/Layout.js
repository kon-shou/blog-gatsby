import React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import styles from './Layout.module.scss';

const PureLayout = ({
  data,
  children,
  title,
  description,
  type,
  image,
  ogpTitle,
}) => {
  const { title: siteTitle, url: blogUrl, author } = data.site.siteMetadata;

  const ogpImage = blogUrl + image;

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={ogpTitle} />
        <meta property="og:description" content={description} />

        <meta property="og:url" content={blogUrl} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:image" content={ogpImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@${author.contacts.twitter}`} />
      </Helmet>
      {children}
    </div>
  );
};

export const Layout = props => (
  <StaticQuery
    query={graphql`
      query Layout {
        site {
          siteMetadata {
            author {
              contacts {
                twitter
              }
            }
            url
            title
          }
        }
      }
    `}
    render={data => <PureLayout {...props} data={data} />}
  />
);

export default Layout;
