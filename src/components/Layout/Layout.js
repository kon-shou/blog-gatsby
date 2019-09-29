import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import styles from './Layout.module.scss';

const PureLayout = ({ data, children, title, description, type, image, ogpTitle }) => {
  useEffect(() => {
    if (window.iframely) {
      window.iframely.load();
    }
  });

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

        <script
          type="text/javascript"
          src="https://b.st-hatena.com/js/bookmark_button.js"
          charSet="utf-8"
          async="async"
        />

        <script type="text/javascript" src="https://cdn.iframe.ly/embed.js" charSet="utf-8"/>
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
