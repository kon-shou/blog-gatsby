import React from 'react';
import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import styles from './Icon.module.scss';

const PureIcon = ({ icon, image }) => {
  if (icon.extension === 'svg') {
    return (
      <svg className={styles['icon']} viewBox={icon.viewBox}>
        <path d={icon.path} />
        {icon.path2 && <path d={icon.path2} />}
      </svg>
    );
  }

  return <Img fixed={image.node.childImageSharp.fixed} />;
};

export const Icon = props => {
  if (props.icon.extension !== 'svg') {
    return (
      <StaticQuery
        query={graphql`
          query Icon {
            images: allFile {
              edges {
                node {
                  relativePath
                  childImageSharp {
                    fixed(width: 40, height: 40) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const image = data.images.edges.find(n => {
            return n.node.relativePath === `${props.icon.name}.${props.icon.extension}`;
          });

          return <PureIcon {...props} image={image} />;
        }}
      />
    );
  }
  return <PureIcon {...props} />;
};

export default Icon;
