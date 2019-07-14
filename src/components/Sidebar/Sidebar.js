import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';

export const PureSidebar = ({ data, isIndex }) => {
  const { author, copyright, menu, title, subtitle } = data.site.siteMetadata;
  const { fixed } = data.file.childImageSharp;

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author
          title={title}
          subtitle={subtitle}
          fixed={fixed}
          isIndex={isIndex}
        />
        <div className={styles['sidebar__menu-contacts']}>
          <Menu
            className={styles['sidebar__menu-contacts__menu']}
            menu={menu}
          />
          <Contacts
            className={styles['sidebar__menu-contacts__contacts']}
            contacts={author.contacts}
          />
        </div>
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export const Sidebar = props => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
            subtitle
            copyright
            menu {
              label
              path
            }
            author {
              name
              bio
              contacts {
                twitter
                github
                speakerdeck
                qiita
                rss
              }
            }
          }
        }
        file(relativePath: { eq: "image_me.jpg" }) {
          childImageSharp {
            fixed(width: 75, height: 75) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <PureSidebar {...props} data={data} />}
  />
);

export default Sidebar;
