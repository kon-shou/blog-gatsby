import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

const PageTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const { publicURL } = data.file;

  const {
    title: pageTitle,
    description: pageDescription,
  } = data.markdownRemark.frontmatter;

  const { html: pageBody } = data.markdownRemark;

  const metaDescription =
    pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <Layout
      title={`${pageTitle} - ${siteTitle}`}
      ogpTitle={pageTitle}
      description={metaDescription}
      type="article"
      image={publicURL}
    >
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    file(relativePath: { eq: "site-logo.png" }) {
      publicURL
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;

export default PageTemplate;
