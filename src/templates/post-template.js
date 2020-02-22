import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';

const PostTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle, url: siteUrl } = data.site.siteMetadata;
  const { title: postTitle, description: postDescription, image } = data.markdownRemark.frontmatter;
  const { slug } = data.markdownRemark.fields;

  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;
  const publicUrl = image && image.publicURL;

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      ogpTitle={postTitle}
      description={metaDescription}
      type="article"
      image={publicUrl}
    >
      <Post post={data.markdownRemark} postUrl={siteUrl + slug} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        disqusShortname
        subtitle
        title
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        tags
        title
        description
        image {
          children {
            ... on ImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          publicURL
        }
      }
    }
  }
`;

export default PostTemplate;
