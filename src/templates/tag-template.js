import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

const TagTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const { publicURL } = data.file;

  const {
    tag,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle =
    currentPage > 0
      ? `All Posts tagged as "${tag}" - Page ${currentPage} - ${siteTitle}`
      : `All Posts tagged as "${tag}" - ${siteTitle}`;

  return (
    <Layout
      title={pageTitle}
      ogpTitle={siteTitle}
      description={siteSubtitle}
      type="website"
      image={publicURL}
    >
      <Sidebar />
      <Page title={tag}>
        {edges.map((edge, index) => (
          <Feed edge={edge} key={index} />
        ))}
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    file(relativePath: { eq: "site-logo.png" }) {
      publicURL
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { tags: { in: [$tag] }, template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            tagSlugs
          }
          frontmatter {
            title
            date
            tags
            description
            image {
              children {
                ... on ImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default TagTemplate;
